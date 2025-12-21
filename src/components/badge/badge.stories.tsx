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

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

// With icons
export const WithIconLeft: Story = {
  args: {
    children: (
      <>
        <Check />
        Verified
      </>
    ),
  },
};

export const WithIconRight: Story = {
  args: {
    children: (
      <>
        Premium
        <Crown />
      </>
    ),
    variant: 'secondary',
  },
};

export const IconOnly: Story = {
  args: {
    children: <Star />,
    variant: 'outline',
  },
};

// Status badges
export const Success: Story = {
  args: {
    children: (
      <>
        <Check />
        Success
      </>
    ),
    variant: 'default',
  },
};

export const Error: Story = {
  args: {
    children: (
      <>
        <X />
        Error
      </>
    ),
    variant: 'destructive',
  },
};

export const Warning: Story = {
  args: {
    children: (
      <>
        <AlertCircle />
        Warning
      </>
    ),
    variant: 'outline',
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

      <div>
        <h3 className="mb-4 text-lg font-semibold">In Context</h3>
        <div className="flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold">User Profile</h4>
              <p className="text-muted-foreground text-sm">
                john.doe@example.com
              </p>
            </div>
            <Badge>
              <Check />
              Verified
            </Badge>
          </div>

          <div className="flex items-center justify-between border-t pt-4">
            <div>
              <h4 className="font-semibold">Premium Plan</h4>
              <p className="text-muted-foreground text-sm">
                Expires in 30 days
              </p>
            </div>
            <Badge variant="secondary">
              <Crown />
              Pro
            </Badge>
          </div>

          <div className="flex items-center justify-between border-t pt-4">
            <div>
              <h4 className="font-semibold">Build Status</h4>
              <p className="text-muted-foreground text-sm">Last build failed</p>
            </div>
            <Badge variant="destructive">
              <X />
              Failed
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

// Interactive Example
export const InteractiveExample: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">
          Real-world Examples with Badges
        </h3>
      </div>

      {/* Notification List */}
      <div className="rounded-lg border">
        <div className="border-b p-4">
          <h4 className="font-semibold">Notifications</h4>
        </div>
        <div className="divide-y">
          <div className="flex items-center justify-between p-4">
            <div>
              <p className="font-medium">New message received</p>
              <p className="text-muted-foreground text-sm">2 minutes ago</p>
            </div>
            <Badge variant="default">New</Badge>
          </div>
          <div className="flex items-center justify-between p-4">
            <div>
              <p className="font-medium">Build completed</p>
              <p className="text-muted-foreground text-sm">1 hour ago</p>
            </div>
            <Badge variant="secondary">
              <Check />
              Success
            </Badge>
          </div>
          <div className="flex items-center justify-between p-4">
            <div>
              <p className="font-medium">Deployment failed</p>
              <p className="text-muted-foreground text-sm">3 hours ago</p>
            </div>
            <Badge variant="destructive">
              <X />
              Failed
            </Badge>
          </div>
        </div>
      </div>

      {/* Product Card */}
      <div className="rounded-lg border p-4">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h4 className="font-semibold">Premium Subscription</h4>
            <p className="text-muted-foreground text-sm">
              All features unlocked
            </p>
          </div>
          <Badge variant="secondary">
            <Crown />
            Popular
          </Badge>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline">
            <Zap />
            Fast
          </Badge>
          <Badge variant="outline">Unlimited</Badge>
          <Badge variant="outline">24/7 Support</Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
