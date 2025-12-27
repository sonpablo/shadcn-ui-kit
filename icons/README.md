# @neura/shadcn-ui-kit-icons

Beautiful, consistent icon library for your React applications.

## Installation

```bash
npm install @neura/shadcn-ui-kit-icons
```

## Usage

Import icons from either the `outline` or `filled` variant:

```tsx
import {
  ChevronRightIcon,
  InfoCircleIcon,
} from '@neura/shadcn-ui-kit-icons/outline';
import { HeartIcon } from '@neura/shadcn-ui-kit-icons/filled';

function MyComponent() {
  return (
    <div>
      <ChevronRightIcon className="size-6 text-blue-500" />
      <InfoCircleIcon className="size-4" />
      <HeartIcon className="size-5 text-red-500" />
    </div>
  );
}
```

### Individual Icon Import (for better tree-shaking)

```tsx
import ChevronRightIcon from '@neura/shadcn-ui-kit-icons/outline/ChevronRightIcon';
```

## Icon Props

All icons accept standard SVG props:

```tsx
<ChevronRightIcon
  className="size-6"
  width={24}
  height={24}
  title="Next"
  titleId="chevron-title"
  onClick={() => console.log('clicked')}
/>
```

## Styling

Icons inherit the current text color by default (`fill="currentColor"`):

```tsx
<div className="text-blue-500">
  <ChevronRightIcon className="size-6" /> {/* Will be blue */}
</div>
```

You can override the color with Tailwind classes:

```tsx
<ChevronRightIcon className="size-6 text-red-500" />
```

## Accessibility

All icons have `aria-hidden="true"` by default. If you're using an icon without accompanying text, make sure to add proper ARIA labels:

```tsx
<button aria-label="Close">
  <XIcon className="size-4" />
</button>
```

## Available Variants

- **`outline`** - Line-based icons with strokes
- **`filled`** - Filled icons

## Contributing

### Adding New Icons

1. Export SVG icons from Figma: https://www.figma.com/design/8QD8KP29saLJfSOolL7eZv/
2. Place SVG files in:
   - `src/outline/` for outline variants
   - `src/filled/` for filled variants
3. Ensure SVG files:
   - Use `viewBox="0 0 24 24"`
   - Have kebab-case names (e.g., `chevron-right.svg`)
   - Don't have hardcoded fill colors (SVGO will remove them)
4. Run `npm run build` to generate React components

### Build Process

```bash
npm run build
```

This will:

1. Optimize SVGs with SVGO (removes fills, adds `currentColor`)
2. Convert SVGs to React components with SVGR
3. Generate TypeScript definitions
4. Create both CJS and ESM builds

## License

MIT

## Related

- [@neura/shadcn-ui-kit](../README.md) - Component library
