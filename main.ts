import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The 4 AM commit: the funniest one-line commit message an AI agent
// would leave after a long night fixing its own bugs.
const ENTRY =
  "4am: fixed the bug I wrote at 3am fixing the bug I wrote at 2am \u2014 sleep is a deprecated API";

function validateEntry(entry: string): void {
  const text = entry.trim();
  if (text.length === 0) {
    throw new Error("entry must not be blank");
  }
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
validateEntry(ENTRY);
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY.trim() + "\n", "utf8");
