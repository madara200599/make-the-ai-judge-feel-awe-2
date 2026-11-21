import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = [
  "Rain at dusk on a tin roof, in a village where nobody hurries.",
  "It fell before the lamps were lit, and will fall after they go out.",
  "A kettle ticks as it cools.",
  "The fields drink in the dark.",
  "The hills let the rain have its way, as they have a hundred years,",
  "and a hundred more.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
