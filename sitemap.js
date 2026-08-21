#!/usr/bin/env node
/* ════════════════════════════════════════════
   sitemap.js — auto-generates sitemap.xml for crii.me
   Scans top-level *.html pages in this repo and writes sitemap.xml
   with per-page lastmod from git history. Run manually or via the
   "Update sitemap" GitHub Action (mirrors the status monitor).
   ════════════════════════════════════════════ */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const BASE = 'https://crii.me';
const EXCLUDE = new Set(['404.html']); // error page — not a real URL to index

function listPages() {
  return fs.readdirSync(ROOT)
    .filter((f) => f.endsWith('.html') && fs.statSync(path.join(ROOT, f)).isFile())
    .filter((f) => !EXCLUDE.has(f))
    .sort();
}

function lastmod(file) {
  try {
    const date = execSync(`git log -1 --format=%cI -- "${file}"`, {
      cwd: ROOT,
      encoding: 'utf8',
    }).trim();
    if (date) return date.slice(0, 10); // YYYY-MM-DD
  } catch (e) { /* not a git repo / no commits yet */ }
  try {
    const st = fs.statSync(path.join(ROOT, file));
    return st.mtime.toISOString().slice(0, 10);
  } catch (e) {
    return new Date().toISOString().slice(0, 10);
  }
}

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

const pages = listPages();
const urls = pages.map((f) => {
  const loc = f === 'index.html' ? `${BASE}/` : `${BASE}/${f}`;
  return { loc, lastmod: lastmod(f) };
});

const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map((u) =>
    `  <url>\n    <loc>${esc(u.loc)}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n  </url>`
  ).join('\n') +
  '\n</urlset>\n';

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml);
console.log(`sitemap.xml written with ${urls.length} URL(s):`);
urls.forEach((u) => console.log(`  - ${u.loc} (${u.lastmod})`));
