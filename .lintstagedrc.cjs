// eslint-disable-next-line
const path = require('path');

/**
 * Build ESLint fix command for staged files
 * Only runs on modified files
 */
const buildEslintFixCommand = (filenames) =>
  `eslint --fix ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

/**
 * Build Prettier command for staged files
 * Only runs on modified files
 */
const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

/**
 * Build TypeScript type check command for staged files
 * Runs type checking without emitting files
 */
const buildTypeCheckCommand = () => `tsc --noEmit`;

module.exports = {
  // JavaScript/TypeScript files
  '*.{js,jsx,ts,tsx}': [
    buildEslintFixCommand,
    buildPrettierCommand,
    buildTypeCheckCommand,
  ],
  // JSON, Markdown, CSS files
  '*.{json,md,css}': [buildPrettierCommand],
};

