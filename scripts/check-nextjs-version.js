#!/usr/bin/env node

/**
 * Pre-push security check for Next.js vulnerabilities
 * Blocks push if vulnerable Next.js version is detected
 * 
 * Multiple CVEs affecting Next.js 15.x and 16.x:
 * - CVE-2025-66478 (React2Shell - RCE)
 * - CVE-2025-55184 / CVE-2025-67779 (DoS)
 * - CVE-2025-55183 (Source Code Exposure)
 * 
 * See: https://nextjs.org/blog/security-update-2025-12-11
 * 
 * Patched versions (as of Dec 11, 2025):
 * - 14.x    → 14.2.35
 * - 15.0.x  → 15.0.7
 * - 15.1.x  → 15.1.11
 * - 15.2.x  → 15.2.8
 * - 15.3.x  → 15.3.8
 * - 15.4.x  → 15.4.10
 * - 15.5.x  → 15.5.9
 * - 16.0.x  → 16.0.10
 */

const fs = require('fs');
const path = require('path');

// Minimum patched versions for each minor release
const PATCHED_VERSIONS = {
  '14.2': { patch: 35 },
  '15.0': { patch: 7 },
  '15.1': { patch: 11 },
  '15.2': { patch: 8 },
  '15.3': { patch: 8 },
  '15.4': { patch: 10 },
  '15.5': { patch: 9 },
  '16.0': { patch: 10 },
};

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
  const majorMinor = `${parsed.major}.${parsed.minor}`;
  
  // Check if this major.minor version has a known patched version
  const patchedInfo = PATCHED_VERSIONS[majorMinor];
  
  if (!patchedInfo) {
    // Version not in our known vulnerable range
    // Versions before 14.2 are not affected by these CVEs
    if (parsed.major < 14) {
      return false;
    }
    if (parsed.major === 14 && parsed.minor < 2) {
      return false;
    }
    // Future versions (16.1+) should be safe
    if (parsed.major === 16 && parsed.minor >= 1) {
      return false;
    }
    if (parsed.major > 16) {
      return false;
    }
    // Unknown vulnerable version - assume vulnerable
    return true;
  }
  
  // Check if patch version is below the minimum safe version
  return parsed.patch < patchedInfo.patch;
}

function getMinimumSafeVersion(version) {
  const parsed = parseVersion(version);
  const majorMinor = `${parsed.major}.${parsed.minor}`;
  const patchedInfo = PATCHED_VERSIONS[majorMinor];
  
  if (patchedInfo) {
    return `${majorMinor}.${patchedInfo.patch}`;
  }
  return '15.1.9'; // Default recommendation
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
    const safeVersion = getMinimumSafeVersion(nextVersion);
    console.error('\n❌ SECURITY VULNERABILITY DETECTED!\n');
    console.error(`   Next.js version ${nextVersion} is vulnerable to multiple CVEs:`);
    console.error(`   - CVE-2025-66478 (React2Shell - RCE)`);
    console.error(`   - CVE-2025-67779 / CVE-2025-55184 (DoS)`);
    console.error(`   - CVE-2025-55183 (Source Code Exposure)\n`);
    console.error(`   This would cause deployment failure on Vercel.\n`);
    console.error(`   Please update to Next.js ${safeVersion} or later:`);
    console.error(`   pnpm add next@${safeVersion}\n`);
    console.error('   Or run: npx fix-react2shell-next\n');
    console.error('   Learn more: https://nextjs.org/blog/security-update-2025-12-11\n');
    process.exit(1);
  }
  
  console.log('✅ Next.js version is secure (patched for all known CVEs)\n');
  process.exit(0);
}

// Run the check
checkNextJsVersion();
