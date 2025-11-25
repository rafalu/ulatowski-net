#!/usr/bin/env node
/*
  Converts selected PNG/JPG images in public/images to WebP using sharp.
  Usage: node scripts/convert-images-to-webp.js
*/
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imageDir = path.join(__dirname, '..', 'public', 'images');

async function convertFile(file) {
  const ext = path.extname(file).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;
  const input = path.join(imageDir, file);
  const base = path.basename(file, ext);
  const out = path.join(imageDir, base + '.webp');
  try {
    await sharp(input).webp({quality: 80}).toFile(out);
    console.log('converted', file, '->', base + '.webp');
  } catch (e) {
    console.error('failed', file, e.message);
  }
}

async function run() {
  if (!fs.existsSync(imageDir)) {
    console.error('images directory not found:', imageDir);
    process.exit(1);
  }
  const files = fs.readdirSync(imageDir);
  for (const f of files) {
    await convertFile(f);
  }
}

run();
