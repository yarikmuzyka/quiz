// Inserts `en:{q,o,e}` fields into a topic's question bank in quiz.js.
// Usage: node tools/apply-translations.mjs tools/translations/<topic>.json
// Idempotent: entries that already contain `,en:` are skipped (translation
// counts must still line up, so partial files fail fast).
import fs from 'node:fs';

const translationsPath = process.argv[2];
if (!translationsPath) {
  console.error('Usage: node tools/apply-translations.mjs <translations.json>');
  process.exit(1);
}

const { topic, items } = JSON.parse(fs.readFileSync(translationsPath, 'utf8'));
const quizPath = new URL('../quiz.js', import.meta.url).pathname;
const lines = fs.readFileSync(quizPath, 'utf8').split('\n');

const topicStart = lines.findIndex(l => l.trim().startsWith(`${topic}: {`));
if (topicStart === -1) throw new Error(`topic "${topic}" not found in quiz.js`);

let i = topicStart;
while (!lines[i].trim().startsWith('bank: [')) {
  i++;
  if (i >= lines.length) throw new Error(`bank not found for topic "${topic}"`);
}
i++;

let qIdx = 0;
let inserted = 0;
while (!lines[i].trim().startsWith(']')) {
  const line = lines[i];
  if (line.trim().startsWith('{q:')) {
    if (!line.includes(',en:')) {
      const en = items[qIdx];
      if (!en) throw new Error(`no translation for question index ${qIdx}`);
      if (!en.q || !Array.isArray(en.o) || en.o.length !== 4 || !en.e) {
        throw new Error(`bad translation shape at index ${qIdx}`);
      }
      const insert = `,en:${JSON.stringify({ q: en.q, o: en.o, e: en.e })}`;
      const replaced = line.replace(/\}(,?)\s*$/, `${insert}}$1`);
      if (replaced === line) throw new Error(`could not find insertion point at line ${i + 1}`);
      lines[i] = replaced;
      inserted++;
    }
    qIdx++;
  }
  i++;
  if (i >= lines.length) throw new Error(`bank of "${topic}" never closed`);
}

if (qIdx !== items.length) {
  throw new Error(`count mismatch: bank has ${qIdx} questions, translations file has ${items.length}`);
}

fs.writeFileSync(quizPath, lines.join('\n'));
console.log(`${topic}: ${inserted} translations inserted (${qIdx} questions total)`);
