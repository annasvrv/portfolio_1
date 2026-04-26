// Reads every .svg file in src/icons/ and emits public/sprite.svg as a single
// <svg> containing one <symbol id="<filename-without-ext>" viewBox="…"> per
// source icon. Components reference symbols via <use href="/sprite.svg#name">.
//
// Source SVGs should be square, single-color, and use currentColor where they
// need to inherit the parent's color. The script preserves the source viewBox
// and the inner markup; everything outside <svg>...</svg> is dropped.

import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { join, basename, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ICON_DIR = join(ROOT, "src", "icons");
const OUTPUT = join(ROOT, "public", "sprite.svg");

const VIEWBOX_RE = /viewBox\s*=\s*"([^"]+)"/i;
const SVG_OPEN_RE = /<svg\b[^>]*>/i;
const SVG_CLOSE_RE = /<\/svg>\s*$/i;

async function main() {
  let entries;
  try {
    entries = await readdir(ICON_DIR);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.warn(`[build-sprite] no ${ICON_DIR}, skipping`);
      return;
    }
    throw err;
  }

  const svgs = entries.filter((f) => extname(f).toLowerCase() === ".svg").sort();

  if (svgs.length === 0) {
    console.warn(`[build-sprite] no .svg files in ${ICON_DIR}, skipping`);
    return;
  }

  const symbols = [];
  for (const file of svgs) {
    const name = basename(file, extname(file));
    const raw = await readFile(join(ICON_DIR, file), "utf8");

    const viewBoxMatch = raw.match(VIEWBOX_RE);
    if (!viewBoxMatch) {
      console.warn(`[build-sprite] ${file}: missing viewBox, skipping`);
      continue;
    }

    const inner = raw
      .replace(SVG_OPEN_RE, "")
      .replace(SVG_CLOSE_RE, "")
      .trim();

    symbols.push(
      `  <symbol id="${name}" viewBox="${viewBoxMatch[1]}">${inner}</symbol>`
    );
  }

  const sprite = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">
${symbols.join("\n")}
</svg>
`;

  await mkdir(dirname(OUTPUT), { recursive: true });
  await writeFile(OUTPUT, sprite, "utf8");
  console.log(`[build-sprite] wrote ${OUTPUT} (${symbols.length} icons)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
