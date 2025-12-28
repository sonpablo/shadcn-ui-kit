# Husky + lint-staged + commitlint Configuration

This project uses **Husky**, **lint-staged**, and **commitlint** to ensure code quality and consistent commit messages.

## What Happens on Commit?

When you run `git commit`, the following checks run **automatically**:

### 1. Pre-commit Hook (on staged files only)

1. **ESLint Fix** (`eslint --fix`) - Auto-fixes linting issues
2. **Prettier Format** (`prettier --write`) - Formats code consistently

### 2. Commit-msg Hook (on commit message)

3. **Commitlint** - Validates commit message follows Conventional Commits

## Files Affected

Only **staged/modified files** are checked. This makes commits fast and efficient!

- `*.{js,jsx,ts,tsx}` - ESLint + Prettier + TypeCheck
- `*.{json,md,css}` - Prettier only

## Commit Message Format (Conventional Commits)

All commit messages must follow this format:

```
<type>(<optional scope>): <subject>

[optional body]

[optional footer]
```

### Valid Types:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, semicolons, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `build:` - Build system or dependencies changes
- `ci:` - CI/CD configuration changes
- `chore:` - Other changes (maintenance, etc.)
- `revert:` - Revert previous commit

### Examples:

```bash
✅ Good:
git commit -m "feat: add calendar component with date picker"
git commit -m "fix: resolve button hover state issue"
git commit -m "docs: update component API documentation"
git commit -m "refactor(utils): simplify date formatting logic"
git commit -m "chore: update dependencies"

❌ Bad (will be rejected):
git commit -m "added stuff"
git commit -m "fix bug"
git commit -m "WIP"
git commit -m "Update components"
```

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

# Test commit message format
echo "feat: test message" | npx commitlint
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

- `.husky/pre-commit` - Pre-commit hook script (runs lint-staged)
- `.husky/commit-msg` - Commit message hook script (runs commitlint)
- `.lintstagedrc.cjs` - lint-staged configuration
- `.commitlintrc.json` - commitlint configuration
- `package.json` - Scripts and prepare hook

## Benefits

✅ Catches errors before they reach the repository  
✅ Enforces consistent code style  
✅ Enforces consistent commit message format  
✅ Fast - only checks modified files  
✅ Automatic - no manual intervention needed  
✅ Prevents broken code from being committed  
✅ Enables automatic changelog generation  
✅ Improves git history readability
