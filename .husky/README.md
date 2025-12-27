# Husky + lint-staged Configuration

This project uses **Husky** and **lint-staged** to ensure code quality before commits.

## What Happens on Commit?

When you run `git commit`, the following checks run **automatically on staged files only**:

1. **ESLint Fix** (`eslint --fix`) - Auto-fixes linting issues
2. **Prettier Format** (`prettier --write`) - Formats code consistently
3. **TypeScript Check** (`tsc --noEmit`) - Verifies type safety

## Files Affected

Only **staged/modified files** are checked. This makes commits fast and efficient!

- `*.{js,jsx,ts,tsx}` - ESLint + Prettier + TypeCheck
- `*.{json,md,css}` - Prettier only

## Manual Commands

```bash
# Run lint-staged manually (simulates pre-commit hook)
npm run lint-staged

# Fix all ESLint issues in project
npm run lint:fix

# Format all files in project
npm run format

# Type check entire project
npm run typecheck
```

## Skipping Hooks (Emergency Only)

If you **absolutely need** to skip the pre-commit hook:

```bash
git commit --no-verify -m "your message"
```

⚠️ **Warning**: Only use this in emergencies. Always run checks manually after!

## How It Works

1. **Husky** installs Git hooks in `.husky/` directory
2. **lint-staged** configuration in `.lintstagedrc.js`
3. `prepare` script in `package.json` initializes Husky after `npm install`

## Configuration Files

- `.husky/pre-commit` - Pre-commit hook script
- `.lintstagedrc.js` - lint-staged configuration
- `package.json` - Scripts and prepare hook

## Benefits

✅ Catches errors before they reach the repository  
✅ Enforces consistent code style  
✅ Fast - only checks modified files  
✅ Automatic - no manual intervention needed  
✅ Prevents broken code from being committed

