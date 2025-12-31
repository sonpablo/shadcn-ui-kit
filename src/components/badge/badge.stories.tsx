import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';
import { Check, X, AlertCircle, Star, Zap, Crown } from 'lucide-react';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'success', 'warning'],
      description: 'The color variant of the badge',
    },
    appearance: {
      control: 'select',
      options: [undefined, 'outline'],
      description:
        'The visual appearance style (solid by default, outline optional)',
    },
    shape: {
      control: 'select',
      options: ['pill', 'square'],
      description: 'The shape of the badge',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'default', 'md', 'lg'],
      description: 'The size of the badge',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as a Slot component',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default variants
export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Appearance variants (solid vs outline)
export const Appearances: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-3 text-sm font-medium">Solid (Default)</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">Outline</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default" appearance="outline">
            Default
          </Badge>
          <Badge variant="secondary" appearance="outline">
            Secondary
          </Badge>
          <Badge variant="destructive" appearance="outline">
            Destructive
          </Badge>
          <Badge variant="success" appearance="outline">
            Success
          </Badge>
          <Badge variant="warning" appearance="outline">
            Warning
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">Outline with Icons</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default" appearance="outline">
            <Check />
            Active
          </Badge>
          <Badge variant="secondary" appearance="outline">
            <Star />
            Premium
          </Badge>
          <Badge variant="destructive" appearance="outline">
            <AlertCircle />
            Alert
          </Badge>
          <Badge variant="success" appearance="outline">
            <Check />
            Success
          </Badge>
          <Badge variant="warning" appearance="outline">
            <AlertCircle />
            Warning
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">
          Comparison: Solid vs Outline
        </h3>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <Badge variant="default">Solid Default</Badge>
            <Badge variant="default" appearance="outline">
              Outline Default
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary">Solid Secondary</Badge>
            <Badge variant="secondary" appearance="outline">
              Outline Secondary
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="destructive">Solid Destructive</Badge>
            <Badge variant="destructive" appearance="outline">
              Outline Destructive
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="success">Solid Success</Badge>
            <Badge variant="success" appearance="outline">
              Outline Success
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="warning">Solid Warning</Badge>
            <Badge variant="warning" appearance="outline">
              Outline Warning
            </Badge>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Shape variants
export const Shapes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-3 text-sm font-medium">Pill (Default)</h3>
        <div className="flex flex-wrap gap-2">
          <Badge shape="pill" variant="default">
            Default
          </Badge>
          <Badge shape="pill" variant="secondary">
            Secondary
          </Badge>
          <Badge shape="pill" variant="destructive">
            Destructive
          </Badge>
          <Badge shape="pill" variant="success">
            Success
          </Badge>
          <Badge shape="pill" variant="warning">
            Warning
          </Badge>
          <Badge variant="default" shape="pill" appearance="outline">
            Outline
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">Square</h3>
        <div className="flex flex-wrap gap-2">
          <Badge shape="square" variant="default">
            Default
          </Badge>
          <Badge shape="square" variant="secondary">
            Secondary
          </Badge>
          <Badge shape="square" variant="destructive">
            Destructive
          </Badge>
          <Badge shape="square" variant="success">
            Success
          </Badge>
          <Badge shape="square" variant="warning">
            Warning
          </Badge>
          <Badge variant="default" shape="square" appearance="outline">
            Outline
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">Square with Icons</h3>
        <div className="flex flex-wrap gap-2">
          <Badge shape="square" variant="default">
            <Check />
            Verified
          </Badge>
          <Badge shape="square" variant="secondary">
            <Star />
            Featured
          </Badge>
          <Badge shape="square" variant="destructive">
            <X />
            Error
          </Badge>
          <Badge shape="square" variant="success">
            <Check />
            Success
          </Badge>
          <Badge shape="square" variant="warning">
            <AlertCircle />
            Warning
          </Badge>
          <Badge variant="default" shape="square" appearance="outline">
            <Zap />
            Fast
          </Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Square badges only
export const SquareBadges: Story = {
  name: 'Square Shape',
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-3 text-sm font-medium">
          All Variants - Shape: square
        </h3>
        <div className="flex flex-wrap gap-2">
          <Badge shape="square" variant="default">
            Default
          </Badge>
          <Badge shape="square" variant="secondary">
            Secondary
          </Badge>
          <Badge shape="square" variant="destructive">
            Destructive
          </Badge>
          <Badge shape="square" variant="success">
            Success
          </Badge>
          <Badge shape="square" variant="warning">
            Warning
          </Badge>
          <Badge variant="default" shape="square" appearance="outline">
            Outline
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">
          All Variants - Appearance: outline
        </h3>
        <div className="flex flex-wrap gap-2">
          <Badge shape="square" variant="default" appearance="outline">
            Default
          </Badge>
          <Badge shape="square" variant="secondary" appearance="outline">
            Secondary
          </Badge>
          <Badge shape="square" variant="destructive" appearance="outline">
            Destructive
          </Badge>
          <Badge shape="square" variant="success" appearance="outline">
            Success
          </Badge>
          <Badge shape="square" variant="warning" appearance="outline">
            Warning
          </Badge>
          <Badge variant="default" shape="square" appearance="outline">
            Outline
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">With Icons</h3>
        <div className="flex flex-wrap gap-2">
          <Badge shape="square" variant="default">
            <Check />
            Active
          </Badge>
          <Badge shape="square" variant="secondary">
            <Star />
            Premium
          </Badge>
          <Badge shape="square" variant="destructive">
            <AlertCircle />
            Alert
          </Badge>
          <Badge shape="square" variant="success">
            <Check />
            Success
          </Badge>
          <Badge shape="square" variant="warning">
            <AlertCircle />
            Warning
          </Badge>
          <Badge variant="default" shape="square" appearance="outline">
            <Zap />
            Fast
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">Icon Only</h3>
        <div className="flex flex-wrap gap-2">
          <Badge shape="square" variant="default">
            <Check />
          </Badge>
          <Badge shape="square" variant="secondary">
            <Star />
          </Badge>
          <Badge shape="square" variant="destructive">
            <X />
          </Badge>
          <Badge shape="square" variant="success">
            <Check />
          </Badge>
          <Badge shape="square" variant="warning">
            <AlertCircle />
          </Badge>
          <Badge variant="default" shape="square" appearance="outline">
            <Crown />
          </Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Size variants
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-3 text-sm font-medium">All Sizes - Default</h3>
        <div className="flex flex-wrap items-center gap-2">
          <Badge size="xs" variant="default">
            XS
          </Badge>
          <Badge size="sm" variant="default">
            SM
          </Badge>
          <Badge size="default" variant="default">
            Default
          </Badge>
          <Badge size="md" variant="default">
            MD
          </Badge>
          <Badge size="lg" variant="default">
            LG
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">Sizes with Text</h3>
        <div className="flex flex-wrap items-center gap-2">
          <Badge size="xs" variant="destructive" shape="square">
            Extra Small
          </Badge>
          <Badge size="sm" variant="destructive" shape="square">
            Small
          </Badge>
          <Badge size="default" variant="destructive" shape="square">
            Default
          </Badge>
          <Badge size="md" variant="destructive" shape="square">
            Medium
          </Badge>
          <Badge size="lg" variant="destructive" shape="square">
            Large
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">Sizes with Icons</h3>
        <div className="flex flex-wrap items-center gap-2">
          <Badge size="xs" variant="default">
            <Check />
            XS
          </Badge>
          <Badge size="sm" variant="default">
            <Check />
            SM
          </Badge>
          <Badge size="default" variant="default">
            <Check />
            Default
          </Badge>
          <Badge size="md" variant="default">
            <Check />
            MD
          </Badge>
          <Badge size="lg" variant="default">
            <Check />
            LG
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">Sizes - Square Shape</h3>
        <div className="flex flex-wrap items-center gap-2">
          <Badge
            variant="default"
            size="xs"
            shape="square"
            appearance="outline"
          >
            <Star />
            XS
          </Badge>
          <Badge
            variant="default"
            size="sm"
            shape="square"
            appearance="outline"
          >
            <Star />
            SM
          </Badge>
          <Badge
            variant="default"
            size="default"
            shape="square"
            appearance="outline"
          >
            <Star />
            Default
          </Badge>
          <Badge
            variant="default"
            size="md"
            shape="square"
            appearance="outline"
          >
            <Star />
            MD
          </Badge>
          <Badge
            variant="default"
            size="lg"
            shape="square"
            appearance="outline"
          >
            <Star />
            LG
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">
          Robot Status - Different Sizes
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          <Badge size="xs" variant="default">
            <Check />
            Active
          </Badge>
          <Badge size="sm" variant="secondary">
            Idle
          </Badge>
          <Badge size="default" variant="destructive">
            <AlertCircle />
            Error
          </Badge>
          <Badge variant="default" size="md" appearance="outline">
            Maintenance
          </Badge>
          <Badge size="lg" variant="default">
            <Zap />
            Online
          </Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const AsChild: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default" asChild={true}>
        <button
          className="cursor-pointer"
          onClick={() => alert('button clicked')}
        >
          As button
        </button>
      </Badge>
      <Badge variant="default" asChild={true} appearance="outline">
        <a href="#" target="_blank">
          As link
        </a>
      </Badge>
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
        <h3 className="mb-4 text-lg font-semibold">Color Variants</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="default" appearance="outline">
            Outline
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Sizes</h3>
        <div className="flex flex-wrap items-center gap-2">
          <Badge size="xs">Extra Small</Badge>
          <Badge size="sm">Small</Badge>
          <Badge size="default">Default</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Shapes</h3>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-muted-foreground mb-2 text-sm">Pill (Default)</p>
            <div className="flex flex-wrap gap-2">
              <Badge shape="pill" variant="default">
                Default
              </Badge>
              <Badge shape="pill" variant="secondary">
                Secondary
              </Badge>
              <Badge shape="pill" variant="destructive">
                Destructive
              </Badge>
              <Badge variant="default" shape="pill" appearance="outline">
                Outline
              </Badge>
            </div>
          </div>
          <div>
            <p className="text-muted-foreground mb-2 text-sm">Square</p>
            <div className="flex flex-wrap gap-2">
              <Badge shape="square" variant="default">
                Default
              </Badge>
              <Badge shape="square" variant="secondary">
                Secondary
              </Badge>
              <Badge shape="square" variant="destructive">
                Destructive
              </Badge>
              <Badge variant="default" shape="square" appearance="outline">
                Outline
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">With Icons</h3>
        <div className="flex flex-wrap gap-2">
          <Badge>
            <Check />
            Verified
          </Badge>
          <Badge variant="secondary">
            <Star />
            Featured
          </Badge>
          <Badge variant="destructive">
            <X />
            Declined
          </Badge>
          <Badge variant="default" appearance="outline">
            <Zap />
            Fast
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Icon on Right</h3>
        <div className="flex flex-wrap gap-2">
          <Badge>
            Premium
            <Crown />
          </Badge>
          <Badge variant="secondary">
            Active
            <Check />
          </Badge>
          <Badge variant="default" appearance="outline">
            Alert
            <AlertCircle />
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Icon Only</h3>
        <div className="flex flex-wrap gap-2">
          <Badge>
            <Check />
          </Badge>
          <Badge variant="secondary">
            <Star />
          </Badge>
          <Badge variant="destructive">
            <X />
          </Badge>
          <Badge variant="default" appearance="outline">
            <Zap />
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">
          Different Sizes with Icons
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          <Badge size="xs" variant="default">
            <Check />
            XS
          </Badge>
          <Badge size="sm" variant="secondary">
            <Star />
            Small
          </Badge>
          <Badge size="default" variant="default">
            <Crown />
            Default
          </Badge>
          <Badge variant="default" size="md" appearance="outline">
            <Zap />
            Medium
          </Badge>
          <Badge size="lg" variant="destructive">
            <AlertCircle />
            Large
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Square Badges</h3>
        <div className="flex flex-wrap gap-2">
          <Badge shape="square" variant="default">
            <Check />
            Active
          </Badge>
          <Badge shape="square" variant="secondary">
            <Star />
            Premium
          </Badge>
          <Badge shape="square" variant="destructive">
            <X />
            Error
          </Badge>
          <Badge variant="default" shape="square" appearance="outline">
            Draft
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Robot Status (Use Case)</h3>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-muted-foreground mb-2 text-sm">
              Standard Status
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">
                <Check />
                Online
              </Badge>
              <Badge variant="secondary">Idle</Badge>
              <Badge variant="destructive">
                <AlertCircle />
                Error
              </Badge>
              <Badge variant="default" appearance="outline">
                Maintenance
              </Badge>
            </div>
          </div>
          <div>
            <p className="text-muted-foreground mb-2 text-sm">
              Compact Status (Small)
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge size="sm" variant="default">
                <Check />
                Online
              </Badge>
              <Badge size="sm" variant="secondary">
                Idle
              </Badge>
              <Badge size="sm" variant="destructive">
                <X />
                Error
              </Badge>
              <Badge variant="default" size="sm" appearance="outline">
                Off
              </Badge>
            </div>
          </div>
          <div>
            <p className="text-muted-foreground mb-2 text-sm">
              Square Status Badges
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge shape="square" size="md" variant="default">
                <Check />
                Active
              </Badge>
              <Badge shape="square" size="md" variant="secondary">
                <Star />
                Featured
              </Badge>
              <Badge shape="square" size="md" variant="destructive">
                <AlertCircle />
                Alert
              </Badge>
              <Badge shape="square" size="md" appearance="outline">
                Pending
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">
          Combinations (Size + Shape + Variant)
        </h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge size="xs" shape="pill" variant="default">
              XS Pill
            </Badge>
            <Badge size="xs" shape="square" variant="secondary">
              XS Square
            </Badge>
            <Badge size="sm" shape="pill" variant="destructive">
              SM Pill
            </Badge>
            <Badge
              variant="default"
              size="sm"
              shape="square"
              appearance="outline"
            >
              SM Square
            </Badge>
            <Badge size="md" shape="pill" variant="default">
              <Star />
              MD Pill
            </Badge>
            <Badge size="md" shape="square" variant="secondary">
              <Crown />
              MD Square
            </Badge>
            <Badge size="lg" shape="pill" variant="destructive">
              <AlertCircle />
              LG Pill
            </Badge>
            <Badge
              variant="default"
              size="lg"
              shape="square"
              appearance="outline"
            >
              <Zap />
              LG Square
            </Badge>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
