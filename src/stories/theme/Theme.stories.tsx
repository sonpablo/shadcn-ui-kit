import type { Meta, StoryObj } from '@storybook/react';
import { ThemeTokens } from './ThemeTokens';

const meta = {
  title: 'Design System/Theme',
  component: ThemeTokens,
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        component: `
Complete design token system for the shadcn-ui-kit. This page shows all available colors, 
border radius values, and their corresponding Tailwind CSS classes.

## Using Design Tokens

### Color Classes
All colors are available as Tailwind utility classes:

\`\`\`tsx
// Background colors
<div className="bg-primary text-primary-foreground">Primary button</div>
<div className="bg-secondary text-secondary-foreground">Secondary</div>
<div className="bg-muted text-muted-foreground">Muted background</div>

// Text colors
<p className="text-foreground">Main text</p>
<p className="text-muted-foreground">Secondary text</p>
<p className="text-destructive">Error text</p>

// Border colors
<div className="border border-border">Default border</div>
<input className="border border-input">Input border</input>
<button className="ring-2 ring-ring">Focus ring</button>
\`\`\`

### Border Radius
Use Tailwind's rounded utilities with our custom radius values:

\`\`\`tsx
<div className="rounded-sm">Small radius (4px)</div>
<div className="rounded-md">Medium radius (6px)</div>
<div className="rounded-lg">Large radius (8px)</div>
<div className="rounded-xl">Extra large (12px)</div>
\`\`\`

### CSS Variables
You can also use CSS variables directly:

\`\`\`css
.custom-element {
  background-color: var(--color-primary);
  color: var(--color-primary-foreground);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}
\`\`\`

## Dark Mode
All tokens automatically adapt to dark mode. Use the theme toggle in the toolbar to preview both modes.

## OKLCH Color Format
All colors use the modern OKLCH color format for:
- **Perceptual uniformity**: Colors appear consistent across different hues
- **Better gradients**: Smoother color transitions
- **Wide gamut support**: Access to more vibrant colors
- **Accessibility**: Easier to maintain contrast ratios
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeTokens>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tokens: Story = {};

