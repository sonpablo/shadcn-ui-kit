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
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'The visual style variant of the badge',
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
      <Badge variant="outline">Outline</Badge>
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
        <button onClick={() => alert('button clicked')}>As button</button>
      </Badge>
      <Badge asChild={true} variant="outline">
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

// With icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">
        <Check />
        Verified
      </Badge>
      <Badge variant="secondary">
        Premium
        <Crown />
      </Badge>
      <Badge variant="destructive">
        <X />
        Error
      </Badge>
      <Badge variant="outline">
        <Star />
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
        <h3 className="mb-4 text-lg font-semibold">Variants</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
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
          <Badge variant="outline">
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
          <Badge variant="outline">
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
          <Badge variant="outline">
            <Zap />
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Status Badges</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">
            <Check />
            Active
          </Badge>
          <Badge variant="secondary">
            <AlertCircle />
            Pending
          </Badge>
          <Badge variant="destructive">
            <X />
            Error
          </Badge>
          <Badge variant="outline">Draft</Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Use Cases</h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm">
              Notifications:
            </span>
            <Badge variant="destructive">5 new</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm">User role:</span>
            <Badge variant="default">
              <Crown />
              Admin
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm">Tags:</span>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Tailwind</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm">Status:</span>
            <Badge variant="outline">
              <Check />
              Published
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
