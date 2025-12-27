import type { Meta, StoryObj } from '@storybook/react';
import { IconGallery } from './IconGallery';
import * as OutlineIcons from '../../../icons/dist/outline/esm/index.js';
import * as FilledIcons from '../../../icons/dist/filled/esm/index.js';

const meta = {
  title: 'Design System/Icons',
  component: IconGallery,
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: { type: 'code' },
      canvas: { sourceState: 'none' },
      description: {
        component: `
Icon library from Galileo's corporate design system. All icons are available in two variants:
- **Outline**: Line-based icons with strokes (309 icons)
- **Filled**: Solid filled icons (15 icons)

### Features
- 🎨 Consistent 24x24 viewBox
- 🎯 Inherits text color with \`currentColor\`
- ♿ Accessible with \`aria-hidden\` by default
- 📦 Tree-shakeable imports
- 💪 TypeScript support
- ⚡ Forward ref support

### Installation
\`\`\`bash
npm install @neura/shadcn-ui-kit-icons
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    icons: { table: { disable: true } },
    variant: { table: { disable: true } },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: {
    icons: OutlineIcons as Record<
      string,
      React.ComponentType<React.SVGProps<SVGSVGElement>>
    >,
    variant: 'outline',
  },
  parameters: {
    docs: {
      source: {
        code: `import { ChevronRightIcon, InfoCircleIcon, SearchIcon } from '@neura/shadcn-ui-kit-icons/outline';

function MyComponent() {
  return (
    <div>
      <ChevronRightIcon className="size-6" />
      <InfoCircleIcon className="size-5 text-blue-500" />
      <SearchIcon className="size-4 text-muted-foreground" />
    </div>
  );
}`,
      },
    },
  },
};

export const Filled: Story = {
  args: {
    icons: FilledIcons as Record<
      string,
      React.ComponentType<React.SVGProps<SVGSVGElement>>
    >,
    variant: 'filled',
  },
  parameters: {
    docs: {
      source: {
        code: `import { AccessibleIcon, AdIcon, AlertCircleIcon } from '@neura/shadcn-ui-kit-icons/filled';

function MyComponent() {
  return (
    <div>
      <AccessibleIcon className="size-6" />
      <AdIcon className="size-5 text-primary" />
      <AlertCircleIcon className="size-4 text-red-500" />
    </div>
  );
}`,
      },
    },
  },
};
