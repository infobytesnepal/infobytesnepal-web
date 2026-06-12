import fs from "node:fs/promises";
import path from "node:path";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

async function main() {
  const { rawClient } = await import("../src/lib/db/client");
  const dir = path.join(process.cwd(), "drizzle");
  const files = (await fs.readdir(dir)).filter((file) => file.endsWith(".sql")).sort();
  for (const file of files) {
    const sql = await fs.readFile(path.join(dir, file), "utf8");
    const statements = sql
      .split(";")
      .map((statement) => statement.trim())
      .filter(Boolean);
    for (const statement of statements) {
      await rawClient.execute(statement);
    }
    console.log(`Applied ${file}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
