#!/usr/bin/env node

/**
 * Pre-push security check for Next.js vulnerabilities
 * Blocks push if vulnerable Next.js version is detected
 * 
 * CVE-2025-66478: Next.js versions 15.1.0 - 15.1.2 and 16.0.0 - 16.0.1 are vulnerable
 */

const fs = require('fs');
const path = require('path');

const VULNERABLE_VERSIONS = [
  // Next.js 15.1.x vulnerable versions
  '15.1.0', '15.1.1', '15.1.2',
  // Next.js 16.0.x vulnerable versions
  '16.0.0', '16.0.1'
];

const MIN_SAFE_VERSION = '15.1.3';

function parseVersion(version) {
  // Remove ^ or ~ prefix if present
  const cleanVersion = version.replace(/^[\^~]/, '');
  const parts = cleanVersion.split('.').map(Number);
  return {
    major: parts[0] || 0,
    minor: parts[1] || 0,
    patch: parts[2] || 0,
    original: version,
    clean: cleanVersion
  };
}

function isVersionVulnerable(version) {
  const parsed = parseVersion(version);
  
  // Exact match check for known vulnerable versions
  if (VULNERABLE_VERSIONS.includes(parsed.clean)) {
    return true;
  }
  
  // Range check: 15.1.0 - 15.1.2 or 16.0.0 - 16.0.1
  if (parsed.major === 15 && parsed.minor === 1 && parsed.patch <= 2) {
    return true;
  }
  if (parsed.major === 16 && parsed.minor === 0 && parsed.patch <= 1) {
    return true;
  }
  
  return false;
}

function checkNextJsVersion() {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  
  if (!fs.existsSync(packageJsonPath)) {
    console.error('❌ package.json not found');
    process.exit(1);
  }
  
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const nextVersion = packageJson.dependencies?.next || packageJson.devDependencies?.next;
  
  if (!nextVersion) {
    console.log('⚠️  Next.js not found in dependencies, skipping security check');
    process.exit(0);
  }
  
  console.log(`🔍 Checking Next.js version: ${nextVersion}`);
  
  if (isVersionVulnerable(nextVersion)) {
    console.error('\n❌ SECURITY VULNERABILITY DETECTED!\n');
    console.error(`   Next.js version ${nextVersion} is vulnerable to CVE-2025-66478`);
    console.error(`   This would cause deployment failure on Vercel.\n`);
    console.error(`   Please update to Next.js ${MIN_SAFE_VERSION} or later:`);
    console.error(`   pnpm add next@${MIN_SAFE_VERSION}\n`);
    console.error('   Learn more: https://vercel.link/CVE-2025-66478\n');
    process.exit(1);
  }
  
  console.log('✅ Next.js version is secure\n');
  process.exit(0);
}

// Run the check
checkNextJsVersion();
