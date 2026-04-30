#!/usr/bin/env node
/**
 * TERMIDEATOR — Blueprint Validator
 * Verifica que el blueprint tenga las 20 secciones completas antes de entregar
 */

const fs = require('fs');
const path = require('path');

const REQUIRED_SECTIONS = [
  { n: 1,  pattern: /##\s*1\..*Executive Summary/i },
  { n: 2,  pattern: /##\s*2\..*Business Model/i },
  { n: 3,  pattern: /##\s*3\..*Target Users/i },
  { n: 4,  pattern: /##\s*4\..*Competitive/i },
  { n: 5,  pattern: /##\s*5\..*Data Model/i },
  { n: 6,  pattern: /##\s*6\..*API Design/i },
  { n: 7,  pattern: /##\s*7\..*Design System/i },
  { n: 8,  pattern: /##\s*8\..*File.*Storage/i },
  { n: 9,  pattern: /##\s*9\..*Tech Stack/i },
  { n: 10, pattern: /##\s*10\..*Environment/i },
  { n: 11, pattern: /##\s*11\..*Auth/i },
  { n: 12, pattern: /##\s*12\..*Payment/i },
  { n: 13, pattern: /##\s*13\..*Testing/i },
  { n: 14, pattern: /##\s*14\..*Error Handling/i },
  { n: 15, pattern: /##\s*15\..*Skills/i },
  { n: 16, pattern: /##\s*16\..*Non-Negotiable/i },
  { n: 17, pattern: /##\s*17\..*Build Order/i },
  { n: 18, pattern: /##\s*18\..*Analytics/i },
  { n: 19, pattern: /##\s*19\..*Growth/i },
  { n: 20, pattern: /##\s*20\..*Post-Launch/i },
];

const PLACEHOLDER_PATTERNS = [
  /\{[A-Z][^}]+\}/g,       // {PLACEHOLDER}
  /\[insert [^\]]+\]/gi,    // [insert something]
  /TODO/g,
  /FIXME/g,
  /\.\.\. \(describe/gi,
];

const REQUIRED_FIELDS = [
  { field: 'Project name', pattern: /project.{0,20}name|nombre.{0,20}proyecto/i },
  { field: 'Tech stack', pattern: /next\.js|react|supabase|firebase|vercel/i },
  { field: 'Pricing', pattern: /\$\d+|free tier|subscription|pricing/i },
  { field: 'Build Order steps', pattern: /step \d+|paso \d+/i },
  { field: 'RLS policies', pattern: /auth\.uid\(\)|row.level.security/i },
];

function validateBlueprint(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1);
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  let errors = [];
  let warnings = [];
  let passed = [];

  console.log('\n🔍 TERMIDEATOR — Blueprint Validator\n');
  console.log(`📄 File: ${path.basename(filePath)}`);
  console.log(`📏 Length: ${lines.length} lines, ${Math.round(content.length / 1024)}KB\n`);

  // Check 1: All 20 sections present
  console.log('── Checking sections...');
  REQUIRED_SECTIONS.forEach(({ n, pattern }) => {
    if (pattern.test(content)) {
      passed.push(`Section ${n}`);
    } else {
      errors.push(`Missing Section ${n} (pattern: ${pattern})`);
    }
  });

  const sectionsOk = REQUIRED_SECTIONS.length - errors.filter(e => e.startsWith('Missing Section')).length;
  console.log(`   ${sectionsOk}/20 sections present`);

  // Check 2: No empty placeholders
  console.log('\n── Checking for unfilled placeholders...');
  let placeholderCount = 0;
  lines.forEach((line, i) => {
    PLACEHOLDER_PATTERNS.forEach(pattern => {
      const matches = line.match(pattern);
      if (matches) {
        matches.forEach(match => {
          placeholderCount++;
          warnings.push(`Line ${i + 1}: Unfilled placeholder "${match}"`);
        });
      }
    });
  });
  if (placeholderCount === 0) {
    passed.push('No unfilled placeholders');
    console.log('   ✅ No placeholders found');
  } else {
    console.log(`   ⚠️  ${placeholderCount} placeholder(s) found`);
  }

  // Check 3: Required content fields
  console.log('\n── Checking required content...');
  REQUIRED_FIELDS.forEach(({ field, pattern }) => {
    if (pattern.test(content)) {
      passed.push(field);
      console.log(`   ✅ ${field}`);
    } else {
      warnings.push(`Missing or incomplete: ${field}`);
      console.log(`   ⚠️  ${field} not found`);
    }
  });

  // Check 4: Minimum length check
  console.log('\n── Checking blueprint completeness...');
  const minLength = 3000;
  if (content.length >= minLength) {
    passed.push(`Minimum length (${Math.round(content.length/1024)}KB)`);
    console.log(`   ✅ Length: ${Math.round(content.length/1024)}KB (min: ${Math.round(minLength/1024)}KB)`);
  } else {
    errors.push(`Blueprint too short: ${content.length} chars (minimum: ${minLength})`);
    console.log(`   ❌ Too short: ${content.length} chars`);
  }

  // Check 5: Build Order has steps
  const buildOrderMatch = content.match(/##\s*17\..*Build Order[\s\S]*?(?=##\s*18\.)/i);
  if (buildOrderMatch) {
    const stepCount = (buildOrderMatch[0].match(/step \d+|paso \d+|\*\*step/gi) || []).length;
    if (stepCount >= 10) {
      passed.push(`Build Order (${stepCount} steps)`);
      console.log(`   ✅ Build Order: ${stepCount} steps`);
    } else {
      warnings.push(`Build Order has only ${stepCount} steps (recommended: 15+)`);
      console.log(`   ⚠️  Build Order: only ${stepCount} steps`);
    }
  }

  // Final Report
  console.log('\n' + '═'.repeat(50));
  console.log('VALIDATION REPORT');
  console.log('═'.repeat(50));
  console.log(`✅ Passed: ${passed.length}`);
  console.log(`⚠️  Warnings: ${warnings.length}`);
  console.log(`❌ Errors: ${errors.length}`);

  if (errors.length > 0) {
    console.log('\n❌ ERRORS (must fix before delivery):');
    errors.forEach(e => console.log(`   • ${e}`));
  }

  if (warnings.length > 0 && warnings.length <= 10) {
    console.log('\n⚠️  WARNINGS (review before delivery):');
    warnings.slice(0, 10).forEach(w => console.log(`   • ${w}`));
    if (warnings.length > 10) console.log(`   ... and ${warnings.length - 10} more`);
  }

  console.log('\n' + '═'.repeat(50));

  if (errors.length === 0 && warnings.length <= 5) {
    console.log('🚀 BLUEPRINT READY FOR DELIVERY');
    process.exit(0);
  } else if (errors.length === 0) {
    console.log('⚠️  BLUEPRINT HAS WARNINGS — Review before delivery');
    process.exit(0);
  } else {
    console.log('❌ BLUEPRINT NOT READY — Fix errors before delivery');
    process.exit(1);
  }
}

const filePath = process.argv[2];
if (!filePath) {
  console.log('Usage: node validate-blueprint.js <blueprint.md>');
  console.log('Example: node validate-blueprint.js output/my-saas-blueprint.md');
  process.exit(1);
}

validateBlueprint(filePath);
