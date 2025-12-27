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

module.exports = {
  // JavaScript/TypeScript files
  // Note: TypeScript type checking is NOT included here because tsc needs to check
  // the entire project for accurate results. Run `npm run typecheck` manually,
  // or set up CI/CD to catch type errors.
  '*.{js,jsx,ts,tsx}': [buildEslintFixCommand, buildPrettierCommand],
  
  // JSON, Markdown, CSS files
  '*.{json,md,css}': [buildPrettierCommand],
};
