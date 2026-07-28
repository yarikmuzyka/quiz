import { execFileSync } from 'node:child_process';
import fs from 'node:fs';

const source = 'icons/icon-source.png';
const outputs = [
  ['192', 'icons/icon-192.png'],
  ['512', 'icons/icon-512.png'],
  ['512', 'icons/maskable-512.png']
];

if (!fs.existsSync(source)) {
  throw new Error(`${source} is missing. Add the selected source icon before generating PWA icons.`);
}

for (const [size, output] of outputs) {
  execFileSync('sips', ['-z', size, size, source, '--out', output], { stdio: 'inherit' });
}
