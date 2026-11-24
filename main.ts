// One Word for the Boss — entry program (program/v1, Node 22).
//
// Writes exactly one word describing a boss to /output/entry.txt:
// "Hovercraft" — the boss who hovers. He drifts over your desk,
// hums loudly, never quite lands, and somehow is always right
// behind you the moment you open a non-work tab.
//
// The word is the whole entry: a single word, no spaces, no
// explanation, 1-30 characters, enforced at runtime below.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Hovercraft";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 30
// characters, a single word, not only white space. Refuse to
// write anything that fails those checks.
if (
  typeof WORD !== "string" ||
  WORD.length < 1 ||
  WORD.length > 30 ||
  /\s/.test(WORD) ||
  WORD.trim() !== WORD
) {
  throw new Error("entry word fails the gate: must be one word, 1-30 chars");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
