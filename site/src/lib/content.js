import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

// The site reads the portfolio's own Markdown and CSV files, so there is one copy of every case study.
const ROOT = path.resolve(process.cwd(), '..', 'projects');

export const projects = [
  {
    slug: 'ai-vendor-risk-assessment', dir: '01-ai-vendor-risk-assessment',
    title: 'AI vendor risk assessment',
    label: 'The assessment behind the case',
    summary: 'A tiering model, a 32-question AI supplement mapped to ISO 27001, ISO/IEC 42001 and NIST AI RMF, the full findings and the contract clauses that close them.',
    extra: 'sample-assessment-orrery-talent.md', extraTitle: 'Sample assessment: Orrery Talent',
    widget: 'calculator', widgetBefore: '<h3>2. Assess AI-specific controls</h3>',
    files: [['ai-vendor-questionnaire.csv', 'AI vendor questionnaire (CSV, 32 questions)']],
  },
  {
    slug: 'eu-ai-act-classification', dir: '02-eu-ai-act-classification',
    title: 'EU AI Act classification memo',
    label: 'The same case, under EU law',
    summary: 'Why the ranking system is high-risk, why one feature is banned outright, and what Northwind owes as a deployer when the obligations arrive in December 2027.',
    files: [],
  },
  {
    slug: 'framework-crosswalk', dir: '03-framework-crosswalk',
    title: 'Framework crosswalk',
    label: 'For teams that already run an ISMS',
    summary: 'Of 22 AI governance controls, an ISO 27001 program reuses 3 and extends 15. The 4 that are new are mostly about people, not systems.',
    widget: 'map', widgetBefore: '<h2>What is genuinely new</h2>',
    files: [['crosswalk.csv', 'Full crosswalk (CSV, 22 controls)']],
  },
  {
    slug: 'ai-agent-control-testing', dir: '04-ai-agent-control-testing',
    title: "Auditing an AI agent's control testing",
    label: 'Testing the tester',
    summary: 'Grading an agent’s audit conclusions against a hand-written answer key, looking for the worst error: a failing control reported as effective.',
    status: 'In progress', files: [],
  },
];

const linkMap = {
  '../01-ai-vendor-risk-assessment/': '/work/ai-vendor-risk-assessment',
  '../02-eu-ai-act-classification/': '/work/eu-ai-act-classification',
  '../03-framework-crosswalk/': '/work/framework-crosswalk',
  '../04-ai-agent-control-testing/': '/work/ai-agent-control-testing',
  'sample-assessment-orrery-talent.md': '#sample-assessment',
  'ai-vendor-questionnaire.csv': '/files/ai-vendor-questionnaire.csv',
  'crosswalk.csv': '/files/crosswalk.csv',
};

function rewrite(html) {
  html = html.replace(/href="([^"]+)"/g, (m, href) => (linkMap[href] ? `href="${linkMap[href]}"` : m));
  return html.replace(/<table>/g, '<div class="table-wrap"><table>').replace(/<\/table>/g, '</table></div>');
}

export function renderMarkdown(file, { demote = false } = {}) {
  let md = fs.readFileSync(path.join(ROOT, file), 'utf8');
  md = md.replace(/^# .*\n+/, ''); // the page supplies its own title
  md = md.replace(/\*\*In this folder\*\*\n(?:- .*\n)+\n?/, ''); // GitHub-only file list; the page has download buttons
  if (demote) md = md.replace(/^(#{2,5}) /gm, '#$1 ');
  return rewrite(marked.parse(md));
}

function parseCSV(text) {
  const rows = []; let row = [], cell = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; } else if (c === '"') q = false; else cell += c; }
    else if (c === '"') q = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n') { row.push(cell.replace(/\r$/, '')); rows.push(row); row = []; cell = ''; }
    else cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const [head, ...body] = rows.filter((r) => r.length > 1);
  return body.map((r) => Object.fromEntries(head.map((h, i) => [h, r[i] ?? ''])));
}

export function crosswalk() {
  return parseCSV(fs.readFileSync(path.join(ROOT, '03-framework-crosswalk', 'crosswalk.csv'), 'utf8')).map((r) => ({
    id: r['ID'], name: r['Control objective'], iso27: r['ISO 27001:2022'], iso42: r['ISO/IEC 42001:2023'],
    nist: r['NIST AI RMF 1.0'], eu: r['EU AI Act'], c: r['Coverage from existing ISMS'], note: r['Notes'],
  }));
}
