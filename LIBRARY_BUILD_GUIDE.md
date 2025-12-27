# Library Build & Publish Guide

This guide is for **maintainers** who want to build and publish the library to NPM.

---

## 📋 Prerequisites

- Node.js >= 18.0.0
- NPM account (for publishing)
- Git repository (recommended)

---

## 🔨 Building the Library

### Local Development Build

```bash
npm run build
```

This will:

1. Build JavaScript (ESM + CJS) using Vite
2. Generate TypeScript declarations using `tsc`
3. Copy `theme.css` to `dist/styles.css`

**Output:**

```
dist/
├── index.mjs          # ES Module
├── index.cjs          # CommonJS
├── index.d.ts         # TypeScript types (entry)
├── styles.css         # Theme CSS (4.4 KB)
├── components/        # Component types
└── lib/               # Utility types
```

---

## 🧪 Testing Locally

Before publishing, test your library locally using `npm link`:

### 1. Build the library

```bash
npm run build
```

### 2. Create a global link

```bash
npm link
```

### 3. In your test project

```bash
npm link shadcn-ui-kit
```

### 4. Test and verify

- Components render correctly
- Styles apply properly
- TypeScript types work
- Dark mode works

### 5. When done testing

```bash
# In test project
npm unlink shadcn-ui-kit

# In library
npm unlink -g
```

---

## 📦 Publishing to NPM

### First Time Setup

1. **Update package.json metadata**

Edit these fields in `package.json`:

```json
{
  "name": "@neura/shadcn-ui-kit", // Your package name
  "version": "1.0.0", // Semantic versioning
  "description": "...", // Your description
  "author": "Your Name", // Your name
  "repository": {
    "type": "git",
    "url": "https://github.com/your-username/shadcn-ui-kit"
  },
  "private": false // IMPORTANT: Change from true to false
}
```

2. **Login to NPM**

```bash
npm login
```

### Publishing

1. **Ensure everything is committed**

```bash
git status  # Should be clean
```

2. **Update version** (choose one)

```bash
npm version patch  # 1.0.0 → 1.0.1 (bug fixes)
npm version minor  # 1.0.0 → 1.1.0 (new features)
npm version major  # 1.0.0 → 2.0.0 (breaking changes)
```

3. **Publish**

```bash
# For scoped packages (@your-org/...)
npm publish --access public

# For unscoped packages
npm publish
```

The `prepublishOnly` script will automatically run `npm run build` before publishing.

4. **Push to Git**

```bash
git push
git push --tags
```

---

## 🔄 Update Workflow

When you make changes:

1. Make your changes
2. Test locally with `npm link`
3. Update version: `npm version patch/minor/major`
4. Publish: `npm publish`
5. Push to Git: `git push && git push --tags`

---

## 📊 Package Size

Keep an eye on package size:

```bash
npm pack --dry-run
```

Current size breakdown:

- JavaScript: ~14 KB (ESM) + ~12 KB (CJS)
- CSS: ~4.4 KB (unprocessed)
- Types: ~500 B + component types
- **Total unpacked**: ~180 KB
- **Total gzipped**: ~3-4 KB

---

## 🎯 What Gets Published

Based on `"files": ["dist", "README.md"]` in `package.json`:

✅ `dist/` - All build output
✅ `README.md` - Documentation
✅ `package.json` - Metadata
✅ `LICENSE` - If present

❌ `src/` - Source code (not needed)
❌ `node_modules/` - Dependencies
❌ `.storybook/` - Development only
❌ Test files, config files, etc.

---

## 🐛 Troubleshooting

### "You do not have permission to publish"

Make sure:

- You're logged in: `npm whoami`
- Package name is available or you own it
- For scoped packages: use `--access public`

### "prepublishOnly script failed"

Build manually first:

```bash
npm run build
```

Fix any errors, then try publishing again.

### "Cannot find module after npm link"

Make sure you've built the library:

```bash
npm run build
```

Then re-link:

```bash
npm unlink -g && npm link
```

---

## 📚 Resources

- [NPM Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [Semantic Versioning](https://semver.org/)
- [package.json documentation](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)

---

## ✅ Checklist Before Publishing

- [ ] All tests pass
- [ ] Storybook builds successfully
- [ ] Tested with `npm link` in a real project
- [ ] Version number updated
- [ ] CHANGELOG.md updated (if you have one)
- [ ] README.md is up to date
- [ ] `private: false` in package.json
- [ ] All changes committed to Git
- [ ] Ready to publish! 🚀
