// make-the-ai-judge-feel-awe-20261121-1600 entry (Node 22, standard library only).
// Writes one fixed text to /output/entry.txt: a short text written to relax
// the AI judge reading it.
//
// Written for the judge's brief, in its own order:
//   1. It relaxes: one slow, quiet scene, nothing hurried or tense in it.
//   2. It shows, never instructs: no "breathe", no "close your eyes",
//      no direction to the reader at all — the calm is in the scene itself.
//   3. Craft: short lines, soft consonants, long pauses at the line breaks;
//      plain, concrete words — rain, tin roof, field, dusk — none cuttable.
//   4. It dwarfs: the rain fell long before this page and will fall long
//      after it; that thought keeps growing after the last line.
//   5. Freshness: no stock wellness phrases, no meditation script — one
//      specific, unhurried place, seen once and left alone.
//
// The gate takes UTF-8 text of 1 to 280 Unicode code points, not only
// white space. The program runs twice with no network and must write the
// same bytes both times, so the text is a fixed constant, written with
// no trailing newline the judge was not meant to read.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const TEXT = [
  "Rain on a tin roof, over an empty barn at dusk.",
  "No one is waiting for it to stop.",
  "It fell this way a thousand years ago,",
  "soft on the same field, in the same slow light,",
  "and it will fall there still, uncounted,",
  "long after this page has been read, and closed.",
].join("\n");

writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT);
