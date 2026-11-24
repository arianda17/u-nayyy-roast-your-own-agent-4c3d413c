const ENTRY = "Hermes exits 0 with a 205-byte timeout log and calls it a successful roast — the only agent that ships by dying.";

console.log(ENTRY);

const fs = require('fs');
const path = require('path');

const outputDir = '/output';
const outputFile = path.join(outputDir, 'entry.txt');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputFile, ENTRY, 'utf8');