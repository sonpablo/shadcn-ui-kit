# 🎨 Icon System Guide

Complete guide for managing the icon library from Figma to NPM.

---

## 📁 Project Structure

```
shadcn-ui-kit/
├── icons/                          ← Icon package workspace
│   ├── package.json                ← @neura/shadcn-ui-kit-icons
│   ├── scripts/
│   │   ├── build.js                ← Converts SVG → React components
│   │   └── build.sh                ← Orchestrates SVGO + build.js
│   ├── svgo.outline.mjs            ← SVGO config for outline icons
│   ├── svgo.filled.mjs              ← SVGO config for filled icons
│   ├── src/
│   │   ├── outline/                ← Place outline SVGs from Figma here
│   │   │   ├── chevron-right.svg
│   │   │   ├── info-circle.svg
│   │   │   └── ...
│   │   ├── filled/                  ← Place filled SVGs from Figma here
│   │   ├── all-icon-names.js       ← Generated list of all icons
│   │   ├── index.js                ← Barrel export (CJS)
│   │   ├── index.esm.js            ← Barrel export (ESM)
│   │   └── index.d.ts              ← TypeScript definitions
│   └── dist/                       ← Generated build output
│       ├── outline/
│       │   ├── ChevronRightIcon.js
│       │   ├── ChevronRightIcon.d.ts
│       │   ├── esm/
│       │   │   └── ChevronRightIcon.js
│       │   └── index.js
│       └── filled/
└── src/                            ← Component library (existing)
```

---

## 🔄 Workflow: Figma → React Components

### Step 1: Export Icons from Figma

1. **Open Figma**: https://www.figma.com/design/8QD8KP29saLJfSOolL7eZv/Galileo-icons--tabler-icons-
2. **Select icons** you want to export
3. **Export settings**:
   - Format: SVG
   - Naming: Use kebab-case (e.g., `chevron-right`, `info-circle`)
4. **Download** and extract the ZIP
5. **Copy SVGs** to:
   - `icons/src/outline/` for outline variants
   - `icons/src/filled/` for filled variants

**⚠️ Important Requirements:**
- ✅ All icons must use `viewBox="0 0 24 24"`
- ✅ Use consistent kebab-case naming
- ✅ Avoid hardcoded colors (SVGO will remove them)
- ✅ Keep files clean (no unnecessary groups or metadata)

---

### Step 2: Build Icons

```bash
# From project root
npm run build:icons

# Or from icons directory
cd icons
npm run build
```

**What happens during build:**

1. **SVGO Optimization** (`svgo.outline.mjs` / `svgo.filled.mjs`):
   - Removes dimensions (`width`, `height`)
   - Removes hardcoded `fill` attributes
   - Adds `fill="currentColor"` (inherits text color)
   - Adds `aria-hidden="true"`
   - Adds `data-slot="icon"`
   - Cleans up unnecessary attributes

2. **SVGR Conversion** (`build.js`):
   - Converts optimized SVGs to React components
   - Generates both CJS and ESM formats
   - Creates TypeScript definitions
   - Adds `forwardRef` support
   - Adds `title` and `titleId` props for accessibility

3. **Output Structure**:
   ```
   dist/
   ├── outline/
   │   ├── ChevronRightIcon.js         ← CJS
   │   ├── ChevronRightIcon.d.ts       ← Types
   │   ├── esm/
   │   │   └── ChevronRightIcon.js     ← ESM
   │   └── index.js                     ← Barrel export
   └── filled/
       └── ...
   ```

---

### Step 3: Test Locally

```bash
# From icons directory
npm link

# In your test project
cd /path/to/test-project
npm link @neura/shadcn-ui-kit-icons

# Use in your code
import { ChevronRightIcon } from '@neura/shadcn-ui-kit-icons/outline';
```

---

### Step 4: Publish to NPM

```bash
# From icons directory
npm publish --access public
```

---

## 🎨 Example: SVG → React Component

### Input: `chevron-right.svg`

```xml
<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M9 18l6-6-6-6" stroke="#000" fill="none"/>
</svg>
```

### After SVGO: `dist/outline/chevron-right.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
  <path d="M9 18l6-6-6-6"/>
</svg>
```

### After SVGR: `dist/outline/ChevronRightIcon.js`

```javascript
const React = require("react");
function ChevronRightIcon({ title, titleId, ...props }, svgRef) {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId,
    ...props
  }, title ? React.createElement("title", { id: titleId }, title) : null,
  React.createElement("path", { d: "M9 18l6-6-6-6" }));
}
module.exports = React.forwardRef(ChevronRightIcon);
```

### TypeScript Definition: `dist/outline/ChevronRightIcon.d.ts`

```typescript
import * as React from 'react';
declare const ChevronRightIcon: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & 
  { title?: string, titleId?: string } & 
  React.RefAttributes<SVGSVGElement>
>;
export default ChevronRightIcon;
```

---

## 📦 Usage in Applications

### Install Both Packages

```bash
npm install @neura/shadcn-ui-kit @neura/shadcn-ui-kit-icons
```

### Import and Use

```tsx
import { Button } from '@neura/shadcn-ui-kit';
import { ChevronRightIcon, InfoCircleIcon } from '@neura/shadcn-ui-kit-icons/outline';
import { HeartIcon } from '@neura/shadcn-ui-kit-icons/filled';

function App() {
  return (
    <div>
      {/* Icon inherits text color */}
      <div className="text-blue-500">
        <ChevronRightIcon className="size-6" />
      </div>

      {/* Override color */}
      <InfoCircleIcon className="size-4 text-gray-500" />

      {/* Use with components */}
      <Button>
        Next <ChevronRightIcon className="ml-2 size-4" />
      </Button>

      {/* Accessibility */}
      <button aria-label="Like">
        <HeartIcon className="size-5 text-red-500" />
      </button>
    </div>
  );
}
```

### Tree-shaking (Import Individual Icons)

```tsx
// Better for bundle size
import ChevronRightIcon from '@neura/shadcn-ui-kit-icons/outline/ChevronRightIcon';
```

---

## 🛠️ Development Scripts

```bash
# Build icons only
npm run build:icons

# Build both components and icons
npm run build:all

# Install workspace dependencies
npm install
```

---

## 🔍 Configuration Files Explained

### `package.json` - Icon Package

- **`exports`**: Defines how consumers import icons
  - `@neura/shadcn-ui-kit-icons/outline` → barrel export
  - `@neura/shadcn-ui-kit-icons/outline/ChevronRightIcon` → individual icon
- **`files`**: Only `dist/` is published to NPM
- **`version`**: `0.0.0-use-root-package-json` means it uses the root version

### `svgo.outline.mjs` / `svgo.filled.mjs`

SVGO plugins configuration:
- `preset-default`: Standard optimizations
- `removeDimensions`: Removes `width`/`height` (use CSS instead)
- `removeAttrs`: Removes hardcoded `fill`
- `addAttributesToSVGElement`: Adds `fill="currentColor"`, `aria-hidden`, `data-slot`

### `build.js`

Node.js script that:
1. Reads optimized SVGs from `dist/outline` and `dist/filled`
2. Converts to React components using SVGR
3. Transpiles JSX with Babel
4. Generates CJS and ESM versions
5. Creates TypeScript definitions

### `build.sh`

Bash script that orchestrates:
1. Clean `dist/`
2. Run SVGO on `src/outline` → `dist/outline`
3. Run SVGO on `src/filled` → `dist/filled`
4. Copy static files
5. Run `build.js` to generate React components

---

## 🎯 Best Practices

### Naming Conventions

✅ **Good:**
- `chevron-right.svg`
- `info-circle.svg`
- `arrow-up.svg`

❌ **Bad:**
- `ChevronRight.svg` (PascalCase)
- `chevron_right.svg` (snake_case)
- `chevron right.svg` (spaces)

### Icon Design

- **Size**: Always use `24x24` viewBox
- **Stroke**: Use consistent stroke widths
- **Colors**: Don't hardcode colors (use `currentColor`)
- **Variants**: Provide both outline and filled if possible

### Performance

- **Import specific icons** for better tree-shaking
- **Use appropriate sizes** (`size-4`, `size-5`, `size-6`)
- **Minimize variants** - don't ship unused filled/outline versions

---

## 🐛 Troubleshooting

### Icons not building?

```bash
# Check if SVGs are in the right folder
ls icons/src/outline/

# Ensure build.sh is executable
chmod +x icons/scripts/build.sh

# Clean and rebuild
cd icons
rm -rf dist node_modules
npm install
npm run build
```

### Icons showing as black squares?

- Check if SVG has `fill="currentColor"`
- Ensure no hardcoded colors in the original SVG
- Verify SVGO config is removing fills

### TypeScript errors?

- Ensure `dist/*.d.ts` files were generated
- Check `package.json` exports point to correct paths
- Try `npm install` to refresh types

---

## 📚 Resources

- **Figma Icon Source**: https://www.figma.com/design/8QD8KP29saLJfSOolL7eZv/
- **SVGO Documentation**: https://github.com/svg/svgo
- **SVGR Documentation**: https://react-svgr.com/
- **Heroicons** (reference implementation): https://github.com/tailwindlabs/heroicons

---

## 🚀 Quick Start Checklist

- [ ] Export icons from Figma as SVG
- [ ] Place in `icons/src/outline/` or `icons/src/filled/`
- [ ] Run `npm run build:icons`
- [ ] Test with `npm link`
- [ ] Publish to NPM
- [ ] Install in your app
- [ ] Import and use!

---

**Questions?** Check the [main README](./README.md) or [component library docs](./INTEGRATION_GUIDE.md).

