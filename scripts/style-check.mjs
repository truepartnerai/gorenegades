// Flags banned phrases and choppy one-line-paragraph structure.
// Usage: node scripts/style-check.mjs queue/RC-011-*.md [more files]
import { readFileSync } from 'node:fs';

const BANNED = [
  /fast-paced (digital )?(world|landscape)/i, /\bdelve/i, /look no further/i, /whether you'?re .{1,40} or /i,
  /at its core/i, /unlock the power/i, /harness the power/i, /\belevat(e|es|ing)\b/i, /navigate the complexities/i,
  /\bfoster/i, /\bunderscore/i, /\bseamless/i, /\brobust\b/i, /game[- ]changing/i, /\btransformative\b/i,
  /cutting[- ]edge/i, /\bpivotal\b/i, /\bcrucial\b/i, /\btapestry\b/i, /a testament to/i, /it'?s not just .{1,40}, it'?s/i,
  /in conclusion/i, /the bottom line is/i, /here'?s the thing/i, /changes everything/i, /far less obvious/i,
  /everything you'?ve been told/i, /experts don'?t want you/i, /nobody tells you/i, /read that again/i,
  /dirty little secret/i, /let that sink in/i,
];

let failed = false;
for (const file of process.argv.slice(2)) {
  const text = readFileSync(file, 'utf8').replace(/^---[\s\S]*?\n---\n/, '');
  const hits = [];
  text.split('\n').forEach((line, i) => {
    for (const re of BANNED) if (re.test(line)) hits.push(`  line ${i + 1}: ${line.match(re)[0]}`);
  });
  const paras = text.split(/\n\s*\n/).map((p) => p.trim()).filter((p) => p && !/^(#|\[|-|\||→|https?:)/.test(p));
  const oneLiners = paras.filter((p) => !p.includes('\n') && (p.match(/[.!?](\s|$)/g) || []).length <= 1).length;
  const ratio = paras.length ? oneLiners / paras.length : 0;
  console.log(`${file}: ${hits.length} banned hits, ${Math.round(ratio * 100)}% one-sentence paragraphs`);
  hits.forEach((h) => console.log(h));
  if (hits.length || ratio > 0.35) failed = true;
}
process.exit(failed ? 1 : 0);
