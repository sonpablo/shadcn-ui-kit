import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './tag';
import { Check, X, AlertCircle, Star, Crown } from 'lucide-react';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'green', 'red', 'yellow', 'gray'],
      description: 'The color variant of the tag',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
      description: 'The size of the tag',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as Slot (Radix)',
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Tag',
    variant: 'default',
    size: 'default',
  },
};

export const Green: Story = {
  args: {
    children: 'Green',
    variant: 'green',
  },
};

export const Red: Story = {
  args: {
    children: 'Red',
    variant: 'red',
  },
};

export const Yellow: Story = {
  args: {
    children: 'Yellow',
    variant: 'yellow',
  },
};

export const Gray: Story = {
  args: {
    children: 'Gray',
    variant: 'gray',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag>Defautl</Tag>
      <Tag size="sm">SM</Tag>
      <Tag size="md">MD</Tag>
      <Tag size="lg">LG</Tag>
    </div>
  ),
};

export const WithIconLeft: Story = {
  args: {
    children: (
      <>
        <Check />
        Active
      </>
    ),
    variant: 'green',
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
    variant: 'yellow',
  },
};

export const IconOnly: Story = {
  args: {
    children: <Star />,
    variant: 'default',
  },
};

export const Success: Story = {
  args: {
    children: (
      <>
        <Check />
        Success
      </>
    ),
    variant: 'green',
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
    variant: 'red',
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
    variant: 'yellow',
  },
};

export const AsChild: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="default" asChild>
        <a href="/profile">Profile</a>
      </Tag>
      <Tag variant="default">
        <a href="/profile">Profile</a>
      </Tag>
      <Tag variant="default" asChild>
        <AlertCircle />
      </Tag>
      <Tag variant="default">
        <AlertCircle />
      </Tag>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag>Default</Tag>
      <Tag variant="green">Green</Tag>
      <Tag variant="red">Red</Tag>
      <Tag variant="yellow">Yellow</Tag>
      <Tag variant="gray">Gray</Tag>
    </div>
  ),
};

export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Variants</h3>
        <div className="flex flex-wrap gap-2">
          <Tag>Default</Tag>
          <Tag variant="green">Green</Tag>
          <Tag variant="red">Red</Tag>
          <Tag variant="yellow">Yellow</Tag>
          <Tag variant="gray">Gray</Tag>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">With Icons</h3>
        <div className="flex flex-wrap gap-2">
          <Tag variant="green">
            <Check />
            Active
          </Tag>
          <Tag variant="yellow">
            <Star />
            Featured
          </Tag>
          <Tag variant="red">
            <X />
            Error
          </Tag>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Sizes</h3>
        <div className="flex flex-wrap gap-2">
          <Tag>Default</Tag>
          <Tag size="sm">SM</Tag>
          <Tag size="md">MD</Tag>
          <Tag size="lg">LG</Tag>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Status Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Tag variant="green">
            <Check />
            Active
          </Tag>
          <Tag variant="yellow">
            <AlertCircle />
            Pending
          </Tag>
          <Tag variant="red">
            <X />
            Error
          </Tag>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Use Cases</h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm">Category:</span>
            <Tag variant="green">UI</Tag>
            <Tag variant="green">Components</Tag>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm">Version:</span>
            <Tag variant="yellow">v1.4.2</Tag>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm">Status:</span>
            <Tag variant="red">
              <X />
              Deprecated
            </Tag>
          </div>
        </div>
      </div>
    </div>
  ),
};
