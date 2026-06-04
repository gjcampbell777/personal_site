#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

async function main() {
  let sharp;
  try {
    sharp = require('sharp');
  } catch (e) {
    console.error('\nError: the package "sharp" is not installed.');
    console.error('Install it with: npm install --save-dev sharp');
    console.error('Or run: npm run optimize-images:install to install prerequisites.\n');
    process.exit(1);
  }

  const assetsDir = path.join(__dirname, '..', 'src', 'assets');
  const outDir = path.join(__dirname, '..', 'public', 'images');
  if (!fs.existsSync(assetsDir)) {
    console.error('No assets directory found at', assetsDir);
    process.exit(1);
  }
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const files = fs.readdirSync(assetsDir).filter((f) => /\.(jpe?g|png)$/i.test(f));
  if (!files.length) {
    console.log('No PNG/JPG assets found to optimize.');
    return;
  }

  console.log(`Optimizing ${files.length} images to ${outDir} ...`);
  const sizes = [320, 640, 1024];

  for (const file of files) {
    const input = path.join(assetsDir, file);
    const name = path.parse(file).name;

    for (const w of sizes) {
      const outPath = path.join(outDir, `${name}-${w}.webp`);
      try {
        await sharp(input)
          .resize({ width: w })
          .webp({ quality: 80 })
          .toFile(outPath);
        console.log('wrote', outPath);
      } catch (err) {
        console.error('failed to process', input, err.message);
      }
    }
  }

  console.log('\nImage optimization complete. Copy generated files into your build or update components to reference them.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
