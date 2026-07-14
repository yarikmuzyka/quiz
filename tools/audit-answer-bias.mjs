import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../quiz.js', import.meta.url), 'utf8');
const start = source.indexOf('const TOPICS =');
const end = source.indexOf('// ─── State');

if (start === -1 || end === -1 || end <= start) {
  throw new Error('Could not find TOPICS block in quiz.js');
}

const context = {};
vm.createContext(context);
vm.runInContext(`${source.slice(start, end)}\nthis.TOPICS = TOPICS;`, context);

const threshold = Number(process.argv[2] || 20);
const limit = Number(process.argv[3] || 50);
const rows = [];
const topicStats = {};
let total = 0;
let correctIsLongest = 0;
let correctIsShortest = 0;

for (const [topicKey, topic] of Object.entries(context.TOPICS)) {
  topicStats[topicKey] = {
    total: topic.bank.length,
    longest: 0,
    shortest: 0,
    flagged: 0,
  };

  topic.bank.forEach((question, index) => {
    total += 1;

    const lengths = question.o.map(option => String(option).length);
    const correctLength = lengths[question.c];
    const wrongLengths = lengths.filter((_, optionIndex) => optionIndex !== question.c);
    const averageWrongLength =
      wrongLengths.reduce((sum, length) => sum + length, 0) / wrongLengths.length;
    const delta = correctLength - averageWrongLength;
    const maxLength = Math.max(...lengths);
    const minLength = Math.min(...lengths);

    if (correctLength === maxLength && lengths.filter(length => length === maxLength).length === 1) {
      correctIsLongest += 1;
      topicStats[topicKey].longest += 1;
    }

    if (correctLength === minLength && lengths.filter(length => length === minLength).length === 1) {
      correctIsShortest += 1;
      topicStats[topicKey].shortest += 1;
    }

    if (delta >= threshold) {
      topicStats[topicKey].flagged += 1;
      rows.push({
        topic: topicKey,
        number: index + 1,
        delta: Math.round(delta),
        lengths: lengths.join('/'),
        question: question.q,
        correct: question.o[question.c],
      });
    }
  });
}

rows.sort((a, b) => b.delta - a.delta);

console.log(`Questions: ${total}`);
console.log(`Correct answer uniquely longest: ${correctIsLongest}`);
console.log(`Correct answer uniquely shortest: ${correctIsShortest}`);
console.log(`Flagged with +${threshold} chars over wrong-answer average: ${rows.length}`);
console.log('');

console.log('By topic:');
Object.entries(topicStats).forEach(([topicKey, stats]) => {
  console.log(
    `- ${topicKey}: ${stats.flagged}/${stats.total} flagged, ` +
    `${stats.longest} longest, ${stats.shortest} shortest`
  );
});
console.log('');

console.log(`Top ${Math.min(limit, rows.length)} biased questions:`);
rows.slice(0, limit).forEach(row => {
  console.log(`[${row.topic} #${row.number}] +${row.delta} chars (${row.lengths})`);
  console.log(`Q: ${row.question}`);
  console.log(`A: ${row.correct}`);
  console.log('');
});
