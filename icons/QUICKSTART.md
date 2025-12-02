# 🚀 Icon Library Quick Start

Quick guide to get started with the icon system.

## 📝 Step 1: Export Icons from Figma

1. Open: https://www.figma.com/
2. Select icons you want to export
3. Right-click → Export → SVG
4. Download as ZIP and extract

## 📂 Step 2: Place SVGs in Source Folders

```bash
# Copy outline icons
cp ~/Downloads/icons/*.svg icons/src/outline/

# Copy filled icons (if you have them)
cp ~/Downloads/icons-filled/*.svg icons/src/filled/
```

**Requirements:**
- ✅ Files must use kebab-case naming (e.g., `chevron-right.svg`)
- ✅ SVGs must have `viewBox="0 0 24 24"`
- ✅ No hardcoded colors (SVGO will clean them)

## 🔨 Step 3: Build

```bash
# From project root
npm run build:icons
```

This will:
1. Optimize SVGs (remove fills, add `currentColor`)
2. Convert to React components
3. Generate TypeScript definitions
4. Create CJS and ESM builds

## ✅ Step 4: Verify

```bash
# Check generated files
ls icons/dist/outline/
# Should show: ChevronRightIcon.js, ChevronRightIcon.d.ts, index.js, etc.
```

## 🧪 Step 5: Test Locally

```bash
# From icons directory
cd icons
npm link

# In your test project
cd /path/to/your-app
npm link @neura/shadcn-ui-kit-icons
```

**Use in your app:**

```tsx
import { ChevronRightIcon } from '@neura/shadcn-ui-kit-icons/outline';

function App() {
  return <ChevronRightIcon className="size-6 text-blue-500" />;
}
```

## 🚀 Step 6: Publish

```bash
# From icons directory
npm publish --access public
```

## 📚 Next Steps

- **Full Guide**: See [ICONS_GUIDE.md](./ICONS_GUIDE.md)
- **Icon README**: See [icons/README.md](./icons/README.md)
- **Integration**: See [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md)

---

**Current Example Icons:**
- `chevron-right.svg` → `ChevronRightIcon`
- `info-circle.svg` → `InfoCircleIcon`
- `heart.svg` (filled) → `HeartIcon`

**Import them:**

```tsx
import { 
  ChevronRightIcon, 
  InfoCircleIcon 
} from '@neura/shadcn-ui-kit-icons/outline';
import { HeartIcon } from '@neura/shadcn-ui-kit-icons/filled';
```

