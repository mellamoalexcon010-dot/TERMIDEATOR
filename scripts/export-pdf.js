#!/usr/bin/env node
/**
 * TERMIDEATOR — Blueprint PDF Exporter
 * Convierte un blueprint .md a PDF profesional para compartir con inversores/co-founders
 * 
 * Requires: npm install -g md-to-pdf
 * Or: npx md-to-pdf blueprint.md
 */

const { mdToPdf } = require('md-to-pdf');
const fs = require('fs');
const path = require('path');

const CSS = `
  :root {
    --primary: #0f172a;
    --accent: #6366f1;
    --muted: #64748b;
    --border: #e2e8f0;
    --bg-code: #f8fafc;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 11pt;
    line-height: 1.6;
    color: var(--primary);
    max-width: 100%;
  }

  h1 {
    font-size: 28pt;
    font-weight: 700;
    color: var(--primary);
    border-bottom: 3px solid var(--accent);
    padding-bottom: 8px;
    margin-bottom: 24px;
  }

  h2 {
    font-size: 16pt;
    font-weight: 600;
    color: var(--primary);
    border-left: 4px solid var(--accent);
    padding-left: 12px;
    margin-top: 32px;
    page-break-before: auto;
  }

  h3 {
    font-size: 12pt;
    font-weight: 600;
    color: var(--muted);
    margin-top: 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10pt;
    margin: 16px 0;
  }

  th {
    background: var(--primary);
    color: white;
    padding: 8px 12px;
    text-align: left;
    font-weight: 600;
  }

  td {
    padding: 7px 12px;
    border-bottom: 1px solid var(--border);
    vertical-align: top;
  }

  tr:nth-child(even) td {
    background: #f8fafc;
  }

  code {
    font-family: 'Courier New', monospace;
    font-size: 9pt;
    background: var(--bg-code);
    padding: 2px 5px;
    border-radius: 3px;
    color: var(--accent);
  }

  pre {
    background: var(--bg-code);
    border: 1px solid var(--border);
    border-left: 4px solid var(--accent);
    padding: 12px 16px;
    border-radius: 4px;
    overflow-x: auto;
    font-size: 9pt;
    line-height: 1.5;
  }

  pre code {
    background: none;
    padding: 0;
    color: var(--primary);
  }

  blockquote {
    border-left: 4px solid var(--accent);
    margin: 16px 0;
    padding: 8px 16px;
    background: #f0f4ff;
    border-radius: 0 4px 4px 0;
    font-style: italic;
    color: var(--muted);
  }

  .page-break { page-break-after: always; }

  @page {
    margin: 2cm 2.5cm;
    size: A4;

    @bottom-center {
      content: "TERMIDEATOR Blueprint — " string(project-name) " — Page " counter(page) " of " counter(pages);
      font-size: 8pt;
      color: #94a3b8;
    }

    @top-right {
      content: "CONFIDENTIAL";
      font-size: 8pt;
      color: #94a3b8;
    }
  }
`;

async function exportToPDF(inputFile, outputFile) {
  if (!fs.existsSync(inputFile)) {
    console.error(`❌ File not found: ${inputFile}`);
    process.exit(1);
  }

  const baseName = path.basename(inputFile, '.md');
  const outputPath = outputFile || path.join(path.dirname(inputFile), `${baseName}.pdf`);

  console.log('\n📄 TERMIDEATOR — Blueprint PDF Exporter\n');
  console.log(`Input:  ${inputFile}`);
  console.log(`Output: ${outputPath}`);
  console.log('\nGenerating PDF...');

  try {
    await mdToPdf(
      { path: inputFile },
      {
        dest: outputPath,
        pdf_options: {
          format: 'A4',
          margin: { top: '2cm', right: '2.5cm', bottom: '2cm', left: '2.5cm' },
          printBackground: true,
          displayHeaderFooter: true,
          headerTemplate: `
            <div style="font-size: 8px; color: #94a3b8; width: 100%; padding: 0 2.5cm; text-align: right;">
              TERMIDEATOR Blueprint — ${baseName}
            </div>
          `,
          footerTemplate: `
            <div style="font-size: 8px; color: #94a3b8; width: 100%; padding: 0 2.5cm; display: flex; justify-content: space-between;">
              <span>Built with TERMIDEATOR</span>
              <span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
            </div>
          `,
        },
        stylesheet_encoding: 'utf8',
        css: CSS,
        body_class: 'markdown-body',
      }
    );

    const stats = fs.statSync(outputPath);
    console.log(`\n✅ PDF generated successfully`);
    console.log(`📦 Size: ${Math.round(stats.size / 1024)}KB`);
    console.log(`📍 Path: ${outputPath}`);

  } catch (err) {
    console.error('\n❌ Export failed:', err.message);
    console.log('\nMake sure md-to-pdf is installed:');
    console.log('  npm install -g md-to-pdf');
    process.exit(1);
  }
}

const inputFile = process.argv[2];
const outputFile = process.argv[3];

if (!inputFile) {
  console.log('Usage:   node export-pdf.js <blueprint.md> [output.pdf]');
  console.log('Example: node export-pdf.js output/my-saas-blueprint.md');
  console.log('\nRequires: npm install -g md-to-pdf');
  process.exit(1);
}

exportToPDF(inputFile, outputFile);
