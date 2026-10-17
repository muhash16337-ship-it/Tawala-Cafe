const path = require("node:path");
const { stat } = require("node:fs/promises");
const sharp = require("sharp");

const imageDirectory = path.join(__dirname, "..", "images", "menu");
const imageNames = ["breakfast", "drinks", "lunch", "desserts", "juice", "soda"];

async function optimiseImage(name) {
  const inputPath = path.join(imageDirectory, `${name}.jpg`);
  const fullImagePath = path.join(imageDirectory, `${name}.webp`);
  const thumbnailPath = path.join(imageDirectory, `${name}-thumb.webp`);

  await sharp(inputPath)
    .webp({ quality: 78 })
    .toFile(fullImagePath);

  await sharp(inputPath)
    .resize({ width: 400, withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(thumbnailPath);

  const { size: fullImageBytes } = await stat(fullImagePath);
  if (fullImageBytes > 150 * 1024) {
    console.warn(`${name}.webp is ${Math.ceil(fullImageBytes / 1024)} KB; target is about 150 KB.`);
  }
}

async function main() {
  for (const name of imageNames) {
    await optimiseImage(name);
    console.log(`Optimised ${name}.jpg`);
  }
}

main().catch((error) => {
  console.error("Unable to optimise the menu images.", error);
  process.exitCode = 1;
});
