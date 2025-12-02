import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Mail, Download, ChevronRight, Loader2 } from 'lucide-react';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      description: 'The visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon', 'icon-sm', 'icon-lg'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as a Slot component',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default variants
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Link',
    variant: 'link',
  },
};

// Sizes
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

// Icon buttons
export const Icon: Story = {
  args: {
    children: <ChevronRight />,
    size: 'icon',
    variant: 'outline',
  },
};

export const IconSmall: Story = {
  args: {
    children: <ChevronRight />,
    size: 'icon-sm',
    variant: 'outline',
  },
};

export const IconLarge: Story = {
  args: {
    children: <ChevronRight />,
    size: 'icon-lg',
    variant: 'outline',
  },
};

// With icons
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail />
        Login with Email
      </>
    ),
  },
};

export const WithIconRight: Story = {
  args: {
    children: (
      <>
        Download
        <Download />
      </>
    ),
  },
};

export const Loading: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <Loader2 className="animate-spin" />
        Please wait
      </>
    ),
  },
};

// States
export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// All Sizes Showcase
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="icon-sm" variant="outline">
          <ChevronRight />
        </Button>
        <Button size="icon" variant="outline">
          <ChevronRight />
        </Button>
        <Button size="icon-lg" variant="outline">
          <ChevronRight />
        </Button>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Variants</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Sizes</h3>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Icon Sizes</h3>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="icon-sm" variant="outline">
            <ChevronRight />
          </Button>
          <Button size="icon" variant="outline">
            <ChevronRight />
          </Button>
          <Button size="icon-lg" variant="outline">
            <ChevronRight />
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">With Icons</h3>
        <div className="flex flex-wrap gap-2">
          <Button>
            <Mail />
            Login with Email
          </Button>
          <Button variant="outline">
            Download
            <Download />
          </Button>
          <Button variant="secondary">
            <ChevronRight />
            Continue
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">States</h3>
        <div className="flex flex-wrap gap-2">
          <Button disabled>Disabled</Button>
          <Button disabled variant="destructive">
            Disabled Destructive
          </Button>
          <Button disabled variant="outline">
            Disabled Outline
          </Button>
          <Button disabled>
            <Loader2 className="animate-spin" />
            Loading...
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">All Variants × All Sizes</h3>
        <div className="space-y-2">
          {(
            ['default', 'destructive', 'outline', 'secondary', 'ghost'] as const
          ).map((variant) => (
            <div key={variant} className="flex flex-wrap items-center gap-2">
              <span className="text-muted-foreground w-24 text-sm capitalize">
                {variant}:
              </span>
              <Button variant={variant} size="sm" className="min-w-[70px]">
                Small
              </Button>
              <Button variant={variant} className="min-w-[80px]">
                Default
              </Button>
              <Button variant={variant} size="lg" className="min-w-[90px]">
                Large
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// Dark Mode Comparison - Side by Side
export const DarkModeComparison: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {/* Light Mode */}
      <div className="light border-border rounded-lg border-2 p-8">
        <div className="bg-primary/10 mb-6 rounded-md p-4">
          <h2 className="text-xl font-bold">☀️ Light Mode</h2>
          <p className="text-muted-foreground text-sm">
            All variants in light theme
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-muted-foreground mb-2 text-sm font-semibold">
              Primary Variants
            </h4>
            <div className="flex flex-wrap gap-2">
              <Button variant="default">Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <div>
            <h4 className="text-muted-foreground mb-2 text-sm font-semibold">
              With Icons
            </h4>
            <div className="flex flex-wrap gap-2">
              <Button>
                <Mail />
                Email
              </Button>
              <Button variant="outline">
                <Download />
                Download
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-muted-foreground mb-2 text-sm font-semibold">
              States
            </h4>
            <div className="flex flex-wrap gap-2">
              <Button disabled>Disabled</Button>
              <Button disabled variant="outline">
                Disabled Outline
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Mode */}
      <div className="dark border-border rounded-lg border-2 p-8">
        <div className="bg-primary/10 mb-6 rounded-md p-4">
          <h2 className="text-xl font-bold">🌙 Dark Mode</h2>
          <p className="text-muted-foreground text-sm">
            All variants in dark theme
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-muted-foreground mb-2 text-sm font-semibold">
              Primary Variants
            </h4>
            <div className="flex flex-wrap gap-2">
              <Button variant="default">Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <div>
            <h4 className="text-muted-foreground mb-2 text-sm font-semibold">
              With Icons
            </h4>
            <div className="flex flex-wrap gap-2">
              <Button>
                <Mail />
                Email
              </Button>
              <Button variant="outline">
                <Download />
                Download
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-muted-foreground mb-2 text-sm font-semibold">
              States
            </h4>
            <div className="flex flex-wrap gap-2">
              <Button disabled>Disabled</Button>
              <Button disabled variant="outline">
                Disabled Outline
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    // Disable theme switching for this story to show both themes
    themes: {
      disable: true,
    },
  },
};
