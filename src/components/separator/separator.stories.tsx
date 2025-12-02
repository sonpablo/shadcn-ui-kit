import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './separator';

const meta = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the separator',
    },
    decorative: {
      control: 'boolean',
      description: 'Whether the separator is decorative',
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic examples
export const Horizontal: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <div>
        <h3 className="text-sm font-medium">Section 1</h3>
        <p className="text-muted-foreground text-sm">Content above separator</p>
      </div>
      <Separator />
      <div>
        <h3 className="text-sm font-medium">Section 2</h3>
        <p className="text-muted-foreground text-sm">Content below separator</p>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-20 items-center gap-4">
      <div className="text-sm">Left</div>
      <Separator orientation="vertical" />
      <div className="text-sm">Middle</div>
      <Separator orientation="vertical" />
      <div className="text-sm">Right</div>
    </div>
  ),
};

export const InText: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span className="text-sm">Before</span>
      <Separator orientation="vertical" className="h-4" />
      <span className="text-sm">After</span>
    </div>
  ),
};

// Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Horizontal Separators</h3>
        <div className="w-full max-w-2xl space-y-4">
          <div>
            <h4 className="text-sm font-medium">Default</h4>
            <p className="text-muted-foreground text-sm">
              Standard horizontal separator
            </p>
          </div>
          <Separator />
          <div>
            <h4 className="text-sm font-medium">Next Section</h4>
            <p className="text-muted-foreground text-sm">
              Another section after separator
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Vertical Separators</h3>
        <div className="flex h-24 items-center gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">Column 1</span>
            <span className="text-muted-foreground text-sm">Some content</span>
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">Column 2</span>
            <span className="text-muted-foreground text-sm">Some content</span>
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">Column 3</span>
            <span className="text-muted-foreground text-sm">Some content</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">In Navigation</h3>
        <nav className="flex items-center gap-4 rounded-lg border p-4">
          <a href="#" className="text-sm hover:underline">
            Home
          </a>
          <Separator orientation="vertical" className="h-4" />
          <a href="#" className="text-sm hover:underline">
            About
          </a>
          <Separator orientation="vertical" className="h-4" />
          <a href="#" className="text-sm hover:underline">
            Contact
          </a>
        </nav>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">In Cards</h3>
        <div className="max-w-md rounded-lg border">
          <div className="p-4">
            <h4 className="font-semibold">Card Title</h4>
            <p className="text-muted-foreground text-sm">
              This is the card header
            </p>
          </div>
          <Separator />
          <div className="p-4">
            <p className="text-sm">This is the card content area</p>
          </div>
          <Separator />
          <div className="p-4">
            <div className="flex gap-2">
              <button className="rounded-md border px-3 py-1.5 text-sm">
                Cancel
              </button>
              <button className="bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">In Lists</h3>
        <div className="max-w-md rounded-lg border">
          <div className="p-4">
            <h4 className="font-medium">Item 1</h4>
            <p className="text-muted-foreground text-sm">
              Description for item 1
            </p>
          </div>
          <Separator />
          <div className="p-4">
            <h4 className="font-medium">Item 2</h4>
            <p className="text-muted-foreground text-sm">
              Description for item 2
            </p>
          </div>
          <Separator />
          <div className="p-4">
            <h4 className="font-medium">Item 3</h4>
            <p className="text-muted-foreground text-sm">
              Description for item 3
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Breadcrumbs</h3>
        <div className="flex items-center gap-2 text-sm">
          <a href="#" className="hover:underline">
            Home
          </a>
          <Separator orientation="vertical" className="h-4" />
          <a href="#" className="hover:underline">
            Products
          </a>
          <Separator orientation="vertical" className="h-4" />
          <span className="text-muted-foreground">Current Page</span>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Toolbar</h3>
        <div className="flex items-center gap-2 rounded-lg border p-2">
          <button className="hover:bg-accent rounded px-2 py-1 text-sm">
            Bold
          </button>
          <button className="hover:bg-accent rounded px-2 py-1 text-sm">
            Italic
          </button>
          <Separator orientation="vertical" className="mx-1 h-6" />
          <button className="hover:bg-accent rounded px-2 py-1 text-sm">
            Align Left
          </button>
          <button className="hover:bg-accent rounded px-2 py-1 text-sm">
            Align Center
          </button>
          <Separator orientation="vertical" className="mx-1 h-6" />
          <button className="hover:bg-accent rounded px-2 py-1 text-sm">
            Link
          </button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// Dark Mode Comparison
export const DarkModeComparison: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {/* Light Mode */}
      <div className="light border-border rounded-lg border-2 p-8">
        <div className="bg-primary/10 mb-6 rounded-md p-4">
          <h2 className="text-xl font-bold">☀️ Light Mode</h2>
          <p className="text-muted-foreground text-sm">
            Separators in light theme
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-muted-foreground mb-2 text-sm font-semibold">
              Horizontal
            </h4>
            <div className="space-y-3">
              <p className="text-sm">Content above</p>
              <Separator />
              <p className="text-sm">Content below</p>
            </div>
          </div>

          <div>
            <h4 className="text-muted-foreground mb-2 text-sm font-semibold">
              Vertical
            </h4>
            <div className="flex items-center gap-3">
              <span className="text-sm">Left</span>
              <Separator orientation="vertical" className="h-8" />
              <span className="text-sm">Right</span>
            </div>
          </div>

          <div>
            <h4 className="text-muted-foreground mb-2 text-sm font-semibold">
              In Card
            </h4>
            <div className="rounded-lg border">
              <div className="p-3">
                <p className="text-sm font-medium">Header</p>
              </div>
              <Separator />
              <div className="p-3">
                <p className="text-muted-foreground text-sm">Content</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Mode */}
      <div className="dark border-border rounded-lg border-2 p-8">
        <div className="bg-primary/10 mb-6 rounded-md p-4">
          <h2 className="text-xl font-bold">🌙 Dark Mode</h2>
          <p className="text-muted-foreground text-sm">
            Separators in dark theme
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-muted-foreground mb-2 text-sm font-semibold">
              Horizontal
            </h4>
            <div className="space-y-3">
              <p className="text-sm">Content above</p>
              <Separator />
              <p className="text-sm">Content below</p>
            </div>
          </div>

          <div>
            <h4 className="text-muted-foreground mb-2 text-sm font-semibold">
              Vertical
            </h4>
            <div className="flex items-center gap-3">
              <span className="text-sm">Left</span>
              <Separator orientation="vertical" className="h-8" />
              <span className="text-sm">Right</span>
            </div>
          </div>

          <div>
            <h4 className="text-muted-foreground mb-2 text-sm font-semibold">
              In Card
            </h4>
            <div className="rounded-lg border">
              <div className="p-3">
                <p className="text-sm font-medium">Header</p>
              </div>
              <Separator />
              <div className="p-3">
                <p className="text-muted-foreground text-sm">Content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    themes: {
      disable: true,
    },
  },
};
