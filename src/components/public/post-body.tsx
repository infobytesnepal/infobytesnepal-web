import Link from "next/link";
import type { ReactNode } from "react";
import SectionImage from "@/components/public/section-image";
import type { PostBlock } from "@/lib/blog-markdown";

/**
 * Renders the small inline vocabulary allowed inside body text: **bold**,
 * `code`, and [label](/href).
 *
 * Written by hand rather than pulled from a markdown library because the input
 * is our own content, the grammar is three rules long, and shipping a parser
 * plus a sanitiser to a marketing site is not worth the bytes. Nothing here
 * emits raw HTML, so there is no injection surface.
 */
function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(pattern).filter(Boolean);

  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`;

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={key} className="font-semibold text-deep-navy">
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={key}
          className="rounded-md border border-primary-blue/12 bg-soft-blue/60 px-1.5 py-0.5 font-mono text-[0.87em] text-deep-navy"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      const isExternal = /^https?:\/\//.test(href);
      if (isExternal) {
        return (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded font-semibold text-primary-blue underline decoration-primary-blue/30 underline-offset-4 transition hover:decoration-primary-blue"
          >
            {label}
          </a>
        );
      }
      return (
        <Link
          key={key}
          href={href}
          className="focus-ring rounded font-semibold text-primary-blue underline decoration-primary-blue/30 underline-offset-4 transition hover:decoration-primary-blue"
        >
          {label}
        </Link>
      );
    }

    return <span key={key}>{part}</span>;
  });
}

/**
 * Post body. Every element is styled from the site's existing tokens rather
 * than a typography plugin, so headings, links, and rules match the rest of
 * the site exactly.
 */
export default function PostBody({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="mt-10 grid gap-6">
      {blocks.map((block, index) => {
        const key = `block-${index}`;

        switch (block.type) {
          /*
            A body h1 is unusual — the post title above is already the page's
            h1 — but an author who writes one gets a real <h1>, because the
            point of this renderer is that the tag in the source is the tag in
            the HTML. The editor warns about it rather than rewriting it.
          */
          case "h1":
            return (
              <h1
                key={key}
                id={block.id}
                className="mt-6 scroll-mt-32 text-3xl font-semibold leading-snug text-deep-navy md:text-4xl"
              >
                {block.text}
              </h1>
            );

          case "h2":
            return (
              <h2
                key={key}
                id={block.id}
                className="mt-6 scroll-mt-32 text-2xl font-semibold leading-snug text-deep-navy md:text-3xl"
              >
                {block.text}
              </h2>
            );

          case "h3":
            return (
              <h3
                key={key}
                id={block.id}
                className="mt-2 scroll-mt-32 text-lg font-semibold leading-snug text-deep-navy md:text-xl"
              >
                {block.text}
              </h3>
            );

          case "p":
            return (
              <p key={key} className="text-[1.02rem] leading-8 text-dark-text/78">
                {renderInline(block.text, key)}
              </p>
            );

          case "ul":
            return (
              <ul key={key} className="grid gap-3">
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 leading-8 text-dark-text/78">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-green" aria-hidden="true" />
                    <span>{renderInline(item, `${key}-${itemIndex}`)}</span>
                  </li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol key={key} className="grid gap-3">
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 leading-8 text-dark-text/78">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-soft-blue text-xs font-semibold text-primary-blue">
                      {itemIndex + 1}
                    </span>
                    <span>{renderInline(item, `${key}-${itemIndex}`)}</span>
                  </li>
                ))}
              </ol>
            );

          case "quote":
            return (
              <figure key={key} className="my-2 border-l-2 border-primary-green bg-soft-green/30 py-5 pl-6 pr-5">
                <blockquote className="text-lg leading-8 text-deep-navy/85">
                  {renderInline(block.text, key)}
                </blockquote>
                {block.cite && (
                  <figcaption className="mt-3 text-sm text-dark-text/60">{block.cite}</figcaption>
                )}
              </figure>
            );

          case "code":
            return (
              <div key={key} className="overflow-hidden rounded-2xl border border-primary-blue/12 bg-deep-navy">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/55">{block.language}</span>
                </div>
                <pre className="overflow-x-auto px-4 py-4 text-sm leading-6">
                  <code className="font-mono text-white/88">{block.code}</code>
                </pre>
              </div>
            );

          case "figure":
            return (
              <figure key={key} className="my-2">
                <SectionImage
                  src={block.src}
                  alt={block.alt}
                  className="aspect-[16/9]"
                  sizes="(min-width: 1024px) 46rem, 100vw"
                />
                <figcaption className="mt-3 text-sm leading-6 text-dark-text/60">{block.caption}</figcaption>
              </figure>
            );

          case "table":
            return (
              <div key={key} className="overflow-x-auto">
                <table className="w-full min-w-[32rem] border-collapse text-left">
                  <caption className="sr-only">{block.caption}</caption>
                  <thead>
                    {/* Same contrast fix as the pricing table on the home page. */}
                    <tr className="border-b border-primary-blue/12 text-sm uppercase tracking-wider text-dark-text/65">
                      {block.head.map((cell) => (
                        <th key={cell} scope="col" className="py-3 pr-4 font-semibold">
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="border-b border-primary-blue/8">
                        {row.map((cell, cellIndex) =>
                          cellIndex === 0 ? (
                            <th key={cellIndex} scope="row" className="py-4 pr-4 font-semibold text-deep-navy">
                              {cell}
                            </th>
                          ) : (
                            <td key={cellIndex} className="py-4 pr-4 text-sm leading-6 text-dark-text/72">
                              {cell}
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
