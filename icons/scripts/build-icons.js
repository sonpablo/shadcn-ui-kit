import { execSync } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve();

await fs.rm('./dist', { recursive: true, force: true });
await fs.mkdir('./dist/outline', { recursive: true });
await fs.mkdir('./dist/filled', { recursive: true });

execSync(
  'npx svgo --config=svgo.outline.mjs -f ./src/outline -o ./dist/outline --pretty --indent=2',
  { stdio: 'inherit' },
);
execSync(
  'npx svgo --config=svgo.filled.mjs -f ./src/filled -o ./dist/filled --pretty --indent=2',
  { stdio: 'inherit' },
);

await fs.copyFile('./src/all-icon-names.js', './dist/all-icon-names.js');
await fs.copyFile('./src/index.js', './dist/index.js');
await fs.copyFile('./src/index.esm.js', './dist/index.esm.js');
await fs.copyFile('./src/index.d.ts', './dist/index.d.ts');

execSync('node ./scripts/build.js', { stdio: 'inherit' });
