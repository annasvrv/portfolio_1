// Reads src/brand/logo.svg and emits the favicon + PWA icon set into
// public/. Run via `npm run build:icons` (also wired into prebuild).
//
// Output set:
//   public/logo.svg               — header logo (verbatim copy)
//   public/favicon.svg            — primary favicon for modern browsers
//   public/favicon-96.png         — fallback favicon for older browsers
//   public/apple-touch-icon.png   — iOS home-screen icon (180x180)
//   public/icon-192.png           — Android Chrome / PWA install
//   public/icon-512.png           — Android Chrome / PWA install
//   public/site.webmanifest       — PWA manifest referencing the icons
//
// SVG is the most optimal format for the logo (vector, ~4 KB, scales
// for retina automatically — no @2x needed). PNGs only exist because
// iOS home-screen and PWA install dialogs don't accept SVG.

import { readFile, writeFile, copyFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "src", "brand", "logo.svg");
const SRC_PNG = join(ROOT, "src", "brand", "logo.png");
const OUT = join(ROOT, "public");

// Header-logo render size (CSS pixels). 2x serves retina via srcset.
const HEADER_LOGO_SIZE = 32;

// Pad raster icons so the boat doesn't kiss the edges of the tile.
// SVG viewBox is 640×640; padding 80 on each side gives ~12.5% margin.
const PAD_RATIO = 0.125;

async function main() {
  await mkdir(OUT, { recursive: true });

  const svg = await readFile(SRC, "utf8");

  // 1. SVG outputs (logo for header + primary favicon).
  await copyFile(SRC, join(OUT, "logo.svg"));
  await copyFile(SRC, join(OUT, "favicon.svg"));

  // 2. PNG raster outputs at the four sizes that matter.
  const sizes = [
    { name: "favicon-96.png",       size: 96  },
    { name: "apple-touch-icon.png", size: 180 },
    { name: "icon-192.png",         size: 192 },
    { name: "icon-512.png",         size: 512 },
  ];

  for (const { name, size } of sizes) {
    const inner = Math.round(size * (1 - PAD_RATIO * 2));
    const offset = Math.round((size - inner) / 2);

    // Render the SVG at the inner size, then composite onto a transparent
    // canvas of the full size so each icon has consistent breathing room.
    const rendered = await sharp(Buffer.from(svg), { density: 384 })
      .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();

    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      },
    })
      .composite([{ input: rendered, top: offset, left: offset }])
      .png({ compressionLevel: 9 })
      .toFile(join(OUT, name));

    console.log(`[build-icons] ${name} (${size}×${size})`);
  }

  // 2b. Header-logo PNGs at 1x and 2x (downscaled from the 640×640
  // source PNG so each variant is sharp at its target size). The header
  // <img> uses srcset to pick the right one for the device pixel ratio.
  for (const scale of [1, 2]) {
    const size = HEADER_LOGO_SIZE * scale;
    await sharp(SRC_PNG)
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toFile(join(OUT, scale === 1 ? "logo.png" : `logo@${scale}x.png`));
    console.log(`[build-icons] logo${scale === 1 ? "" : "@2x"}.png (${size}×${size})`);
  }

  // 3. Web manifest for PWA install dialogs.
  const manifest = {
    name: "Anna Severova — Portfolio",
    short_name: "AnnaS",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "rgb(236 233 230)",
    theme_color: "rgb(236 233 230)",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any maskable" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" },
    ],
  };
  await writeFile(
    join(OUT, "site.webmanifest"),
    JSON.stringify(manifest, null, 2) + "\n",
  );

  console.log("[build-icons] site.webmanifest");
  console.log(`[build-icons] done.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
