/**
 * The blog's authoring format, and the parser that turns it into the blocks the
 * site renders.
 *
 * Why markdown and not a WYSIWYG editor: the post body has to come out of the
 * database as real `<h2>`, `<strong>`, `<a href>` and `<figure>` elements in the
 * server-rendered HTML, because that is what a crawler reads. A contenteditable
 * editor stores HTML the browser produced, which then has to be sanitised on
 * every render and can still smuggle in whatever a paste from Word carried.
 * Markdown is text going in, a closed set of React elements coming out, and no
 * `dangerouslySetInnerHTML` anywhere in the path.
 *
 * The grammar is deliberately small. Everything in it is on the editor toolbar,
 * and everything on the toolbar is in it:
 *
 *   ## Heading              an h2 section heading, linked from the contents rail
 *   ### Heading             an h3 sub heading
 *   **bold**                strong
 *   [label](/page)          a link; http(s) links open in a new tab
 *   `code`                  inline code
 *   - item                  bullet list
 *   1. item                 numbered list
 *   > quote                 pull quote, with an optional "— name" last line
 *   ![alt](/src "caption")  an image between paragraphs
 *   | a | b |               a table, with a | --- | --- | rule under the header
 *   ```lang ... ```         a code block
 *
 * This module is imported by the public site, by the admin editor's live
 * preview, and by the seed script, so it stays free of server-only imports.
 */

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h1"; text: string; id: string }
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string; id: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "code"; language: string; code: string }
  | { type: "figure"; src: string; alt: string; caption: string }
  | { type: "table"; caption: string; head: string[]; rows: string[][] };

/** Heading anchor, e.g. "What it costs" -> "what-it-costs". */
export function slugifyHeading(text: string) {
  return (
    text
      .toLowerCase()
      // Strip the inline markup first, so "**Cost**" does not become "cost-1".
      .replace(/\*\*|`/g, "")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "section"
  );
}

function uniqueId(base: string, used: Set<string>) {
  let id = base;
  let counter = 2;
  while (used.has(id)) id = `${base}-${counter++}`;
  used.add(id);
  return id;
}

const listItem = /^[-*+]\s+(.*)$/;
const orderedItem = /^\d+[.)]\s+(.*)$/;
const heading = /^(#{1,6})\s+(.*)$/;
const figureOnly = /^!\[([^\]]*)\]\(\s*([^)\s]+)(?:\s+"([^"]*)")?\s*\)$/;
const horizontalRule = /^(-{3,}|\*{3,}|_{3,})$/;

/**
 * Whether a line opens a new block. Used to decide where a wrapped list item or
 * paragraph ends, so a body pasted from a document that hard-wraps at 80
 * characters does not turn into one list item per line.
 */
function startsNewBlock(trimmed: string) {
  return (
    !trimmed ||
    trimmed.startsWith("```") ||
    trimmed.startsWith(">") ||
    trimmed.startsWith("|") ||
    heading.test(trimmed) ||
    horizontalRule.test(trimmed) ||
    listItem.test(trimmed) ||
    orderedItem.test(trimmed) ||
    figureOnly.test(trimmed)
  );
}

function splitTableRow(line: string) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function isTableRule(cells: string[]) {
  return cells.length > 0 && cells.every((cell) => /^:?-{2,}:?$/.test(cell));
}

/**
 * Markdown in, blocks out. Never throws: anything the grammar does not
 * recognise falls through to a paragraph, because a malformed line must not be
 * able to take down a published page.
 */
export function parsePostMarkdown(markdown: string): PostBlock[] {
  const lines = (markdown || "").replace(/\r\n?/g, "\n").split("\n");
  const blocks: PostBlock[] = [];
  const usedIds = new Set<string>();
  const paragraph: string[] = [];
  let i = 0;

  const flushParagraph = () => {
    const text = paragraph.join(" ").replace(/\s+/g, " ").trim();
    paragraph.length = 0;
    if (text) blocks.push({ type: "p", text });
  };

  while (i < lines.length) {
    const trimmed = lines[i].trim();

    if (!trimmed) {
      flushParagraph();
      i += 1;
      continue;
    }

    // Fenced code. Consumed raw: indentation and blank lines inside a fence are
    // part of the code, so nothing else in this loop may touch them.
    if (trimmed.startsWith("```")) {
      flushParagraph();
      const language = trimmed.slice(3).trim() || "text";
      const code: string[] = [];
      i += 1;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        code.push(lines[i]);
        i += 1;
      }
      i += 1; // the closing fence, or the end of the input
      blocks.push({ type: "code", language, code: code.join("\n") });
      continue;
    }

    if (horizontalRule.test(trimmed)) {
      flushParagraph();
      i += 1;
      continue;
    }

    const headingMatch = trimmed.match(heading);
    if (headingMatch) {
      flushParagraph();
      const level = headingMatch[1].length;
      /*
        An optional `{#anchor}` suffix pins the heading's id.

        Authors never type this — ids are derived from the heading text, which
        is both what they expect and the more descriptive anchor. It exists so
        the posts that predate the CMS keep the exact anchors they were
        published with: those ids appear in the on-page contents rail, and
        changing them would break any link anyone has shared into a section.
      */
      const explicitId = headingMatch[2].match(/\{#([a-z0-9-]+)\}\s*$/i);
      const text = headingMatch[2].replace(/\{#[a-z0-9-]+\}\s*$/i, "").trim();
      if (explicitId) {
        const type = level === 1 ? "h1" : level === 2 ? "h2" : "h3";
        blocks.push({ type, text, id: uniqueId(explicitId[1].toLowerCase(), usedIds) });
        i += 1;
        continue;
      }
      // Levels are clamped to h1/h2/h3. h4 and below are not on the toolbar and
      // have no styling of their own, so they render as h3 rather than as an
      // unstyled element nobody notices is wrong.
      const type = level === 1 ? "h1" : level === 2 ? "h2" : "h3";
      blocks.push({ type, text, id: uniqueId(slugifyHeading(text), usedIds) });
      i += 1;
      continue;
    }

    if (trimmed.startsWith(">")) {
      flushParagraph();
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ""));
        i += 1;
      }
      const meaningful = quoteLines.filter((line) => line.trim());
      // A last line of "— Someone" is the attribution rather than part of the
      // quote, which is how the pull quotes on this site have always been written.
      let cite: string | undefined;
      const citeMatch = meaningful[meaningful.length - 1]?.match(/^(?:—|–|--)\s*(.+)$/);
      if (citeMatch && meaningful.length > 1) {
        cite = citeMatch[1].trim();
        meaningful.pop();
      }
      const text = meaningful.join(" ").replace(/\s+/g, " ").trim();
      if (text) blocks.push(cite ? { type: "quote", text, cite } : { type: "quote", text });
      continue;
    }

    if (trimmed.startsWith("|")) {
      /*
        A single italic line directly above a table is its caption. The site
        renders that caption as a `<caption class="sr-only">`, which is what
        tells a screen reader what the table is before it starts reading cells,
        so losing it on the way through markdown would be a real regression.
      */
      let caption = "";
      const pending = paragraph.length === 1 && paragraph[0].match(/^\*(.+)\*$/);
      if (pending) {
        caption = pending[1].trim();
        paragraph.length = 0;
      }
      flushParagraph();
      if (!caption) {
        // Also accept a caption separated from the table by a blank line.
        const previous = blocks[blocks.length - 1];
        const separated = previous?.type === "p" && previous.text.match(/^\*(.+)\*$/);
        if (separated) {
          caption = separated[1].trim();
          blocks.pop();
        }
      }
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const cells = splitTableRow(lines[i]);
        if (!isTableRule(cells)) rows.push(cells);
        i += 1;
      }
      if (rows.length) {
        const [head, ...body] = rows;
        const width = head.length;
        blocks.push({
          type: "table",
          caption,
          head,
          // Pad short rows so a row with a missing trailing cell does not shift
          // the columns of everything after it.
          rows: body.map((row) => Array.from({ length: width }, (_, cell) => row[cell] ?? "")),
        });
      }
      continue;
    }

    const figureMatch = trimmed.match(figureOnly);
    if (figureMatch) {
      flushParagraph();
      blocks.push({
        type: "figure",
        src: figureMatch[2],
        alt: figureMatch[1].trim(),
        caption: (figureMatch[3] || "").trim(),
      });
      i += 1;
      continue;
    }

    const bullet = trimmed.match(listItem);
    const numbered = !bullet && trimmed.match(orderedItem);
    if (bullet || numbered) {
      flushParagraph();
      const ordered = Boolean(numbered);
      const items: string[] = [];
      while (i < lines.length) {
        const current = lines[i].trim();
        const match = current.match(ordered ? orderedItem : listItem);
        if (match) {
          items.push(match[1].trim());
          i += 1;
          // Continuation lines belong to the item that opened above them.
          while (i < lines.length && !startsNewBlock(lines[i].trim())) {
            items[items.length - 1] += ` ${lines[i].trim()}`;
            i += 1;
          }
          continue;
        }
        break;
      }
      blocks.push(ordered ? { type: "ol", items } : { type: "ul", items });
      continue;
    }

    paragraph.push(trimmed);
    i += 1;
  }

  flushParagraph();
  return blocks;
}

/**
 * Blocks back to markdown.
 *
 * Only the seed script uses this, to move the six posts that were written as
 * typed blocks in the repo into the database as editable text. It is the exact
 * inverse of the parser above for every block the parser produces.
 */
export function blocksToMarkdown(blocks: PostBlock[]): string {
  /** Only writes `{#id}` when the id is not what the text would have produced,
   * so nothing gains an anchor suffix it does not need. */
  const withAnchor = (hashes: string, text: string, id: string) =>
    `${hashes} ${text}${id && id !== slugifyHeading(text) ? ` {#${id}}` : ""}`;

  return blocks
    .map((block) => {
      switch (block.type) {
        case "p":
          return block.text;
        case "h1":
          return withAnchor("#", block.text, block.id);
        case "h2":
          return withAnchor("##", block.text, block.id);
        case "h3":
          return withAnchor("###", block.text, block.id);
        case "ul":
          return block.items.map((item) => `- ${item}`).join("\n");
        case "ol":
          return block.items.map((item, index) => `${index + 1}. ${item}`).join("\n");
        case "quote":
          return block.cite ? `> ${block.text}\n> — ${block.cite}` : `> ${block.text}`;
        case "code":
          return `\`\`\`${block.language}\n${block.code}\n\`\`\``;
        case "figure":
          return `![${block.alt}](${block.src}${block.caption ? ` "${block.caption}"` : ""})`;
        case "table": {
          const head = `| ${block.head.join(" | ")} |`;
          const rule = `| ${block.head.map(() => "---").join(" | ")} |`;
          const rows = block.rows.map((row) => `| ${row.join(" | ")} |`);
          // The caption sits on the line immediately above, with no blank line,
          // so it reads as part of the table rather than as a stray paragraph.
          return [block.caption ? `*${block.caption}*` : "", head, rule, ...rows].filter(Boolean).join("\n");
        }
        default:
          return "";
      }
    })
    .filter(Boolean)
    .join("\n\n");
}

/** Words in the body, ignoring markup, for the read time and the article schema. */
export function countWords(markdown: string) {
  const plain = (markdown || "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[#>|*`_-]/g, " ");
  return plain.split(/\s+/).filter(Boolean).length;
}

/** Minutes, at 200 words a minute, never less than one. */
export function estimateReadTime(markdown: string) {
  return Math.max(1, Math.round(countWords(markdown) / 200));
}
