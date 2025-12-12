#!/usr/bin/env node
/*
  Checks and optimizes OG image dimensions and quality.
  Usage: node scripts/optimize-og-image.js
*/
/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require('sharp');
const path = require('path');

const ogImagePath = path.join(__dirname, '..', 'public', 'og', 'senior-dotnet-azure-cloud-engineer.webp');

async function optimizeOgImage() {
  try {
    const image = sharp(ogImagePath);
    const metadata = await image.metadata();
    
    console.log(`Current dimensions: ${metadata.width}x${metadata.height}`);
    console.log(`Current format: ${metadata.format}`);
    console.log(`Current size: ${(metadata.size / 1024).toFixed(2)} KB`);
    
    if (metadata.width === 1200 && metadata.height === 630) {
      console.log('✓ Image already has correct dimensions (1200x630)');
      
      // Re-optimize with high quality
      const fs = require('fs');
      const tempPath = ogImagePath + '.tmp';
      
      await image
        .webp({ quality: 90, effort: 6 })
        .toFile(tempPath);
      
      // Delete original and rename temp
      fs.unlinkSync(ogImagePath);
      fs.renameSync(tempPath, ogImagePath);
      
      const newMetadata = await sharp(ogImagePath).metadata();
      console.log(`✓ Optimized! New size: ${(newMetadata.size / 1024).toFixed(2)} KB`);
    } else {
      console.log('! Resizing to 1200x630...');
      
      const outputPath = path.join(__dirname, '..', 'public', 'og', 'senior-dotnet-azure-cloud-engineer-optimized.webp');
      
      await image
        .resize(1200, 630, {
          fit: 'cover',
          position: 'center'
        })
        .webp({ quality: 90, effort: 6 })
        .toFile(outputPath);
      
      const newMetadata = await sharp(outputPath).metadata();
      console.log(`✓ Resized and optimized! New size: ${(newMetadata.size / 1024).toFixed(2)} KB`);
      console.log(`✓ Saved to: senior-dotnet-azure-cloud-engineer-optimized.webp`);
      console.log('→ Please manually delete the old file and rename this one.');
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

optimizeOgImage();
