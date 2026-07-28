import fs from 'node:fs';
import zlib from 'node:zlib';

const iconsDir = new URL('../icons/', import.meta.url);
fs.mkdirSync(iconsDir, { recursive: true });

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let i = 0; i < 8; i += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  const crc = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])), 0);
  return Buffer.concat([length, typeBuffer, data, crc]);
}

function writePng(fileName, size, maskable = false) {
  const pixels = Buffer.alloc((size * 4 + 1) * size);
  const safe = maskable ? 0.16 : 0.08;
  const center = size / 2;
  const radius = size * (maskable ? 0.34 : 0.42);
  const outerRadius = size * (maskable ? 0.48 : 0.5);

  for (let y = 0; y < size; y += 1) {
    const row = y * (size * 4 + 1);
    pixels[row] = 0;
    for (let x = 0; x < size; x += 1) {
      const dx = x - center;
      const dy = y - center;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const offset = row + 1 + x * 4;
      const grid = (x % Math.round(size / 10) < 2 || y % Math.round(size / 10) < 2) ? 12 : 0;
      const inSafeArea = x > size * safe && y > size * safe && x < size * (1 - safe) && y < size * (1 - safe);
      const inTerminal = inSafeArea && Math.abs(dx) < radius && Math.abs(dy) < radius * 0.72;
      const inRing = distance > outerRadius * 0.72 && distance < outerRadius;

      let r = 9 + grid;
      let g = 13 + grid;
      let b = 20 + grid;

      if (inRing) {
        r = 245;
        g = 158;
        b = 11;
      }

      if (inTerminal) {
        r = 17;
        g = 24;
        b = 39;
      }

      const qShape = inTerminal && x > center - radius * 0.62 && x < center - radius * 0.2 && y > center - radius * 0.32 && y < center + radius * 0.32;
      const aShape = inTerminal && x > center + radius * 0.12 && x < center + radius * 0.56 && y > center - radius * 0.32 && y < center + radius * 0.32;
      const divider = inTerminal && Math.abs(x - center) < Math.max(2, size * 0.012) && Math.abs(y - center) < radius * 0.42;

      if (qShape || aShape || divider) {
        r = qShape ? 56 : divider ? 148 : 34;
        g = qShape ? 189 : divider ? 163 : 211;
        b = qShape ? 248 : divider ? 184 : 238;
      }

      pixels[offset] = r;
      pixels[offset + 1] = g;
      pixels[offset + 2] = b;
      pixels[offset + 3] = 255;
    }
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;

  const png = Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(pixels, { level: 9 })),
    chunk('IEND', Buffer.alloc(0))
  ]);

  fs.writeFileSync(new URL(fileName, iconsDir), png);
}

writePng('icon-192.png', 192);
writePng('icon-512.png', 512);
writePng('maskable-512.png', 512, true);
