import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './tag';
import {
  Check,
  X,
  AlertCircle,
  Clock,
  Star,
  Zap,
  ExternalLink,
  ChevronRight,
  Plus,
  Trash2,
} from 'lucide-react';

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
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'default', 'lg'],
    },
    asChild: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default
export const Default: Story = {
  args: {
    children: 'Tag',
  },
};

// All Variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Tag variant="default">Default</Tag>
      <Tag variant="green">Green</Tag>
      <Tag variant="red">Red</Tag>
      <Tag variant="yellow">Yellow</Tag>
      <Tag variant="gray">Gray</Tag>
    </div>
  ),
};

// All Sizes
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Tag size="sm">Small</Tag>
      <Tag size="md">Medium</Tag>
      <Tag size="default">Default</Tag>
      <Tag size="lg">Large</Tag>
    </div>
  ),
};

// With Icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Tag variant="green">
        <Check className="size-3" />
        Completed
      </Tag>
      <Tag variant="red">
        <X className="size-3" />
        Rejected
      </Tag>
      <Tag variant="yellow">
        <AlertCircle className="size-3" />
        Warning
      </Tag>
      <Tag variant="gray">
        <Clock className="size-3" />
        Pending
      </Tag>
      <Tag variant="default">
        <Star className="size-3" />
        Featured
      </Tag>
    </div>
  ),
};

// Icon Only
export const IconOnly: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Tag variant="green" size="sm" className="px-2">
        <Check className="size-3" />
      </Tag>
      <Tag variant="red" size="sm" className="px-2">
        <X className="size-3" />
      </Tag>
      <Tag variant="yellow" size="sm" className="px-2">
        <AlertCircle className="size-3" />
      </Tag>
      <Tag variant="default" size="sm" className="px-2">
        <Zap className="size-3" />
      </Tag>
    </div>
  ),
};

// As Link (asChild)
export const AsLink: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Tag variant="default" asChild>
        <a href="#" className="hover:bg-primary/10">
          Link Tag
          <ExternalLink className="size-3" />
        </a>
      </Tag>
      <Tag variant="green" asChild>
        <a href="#" className="hover:bg-green-500/10">
          View Details
          <ChevronRight className="size-3" />
        </a>
      </Tag>
      <Tag variant="gray" asChild>
        <a href="#" className="hover:bg-gray-500/10">
          Documentation
          <ExternalLink className="size-3" />
        </a>
      </Tag>
    </div>
  ),
};

// As Button (asChild)
export const AsButton: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Tag variant="default" asChild>
        <button
          onClick={() => alert('Clicked!')}
          className="hover:bg-primary/10 cursor-pointer"
        >
          <Plus className="size-3" />
          Add Tag
        </button>
      </Tag>
      <Tag variant="red" asChild>
        <button
          onClick={() => alert('Delete clicked!')}
          className="cursor-pointer hover:bg-red-500/10"
        >
          <Trash2 className="size-3" />
          Remove
        </button>
      </Tag>
      <Tag variant="green" size="sm" asChild>
        <button
          onClick={() => alert('Confirmed!')}
          className="cursor-pointer hover:bg-green-500/10"
        >
          <Check className="size-3" />
          Confirm
        </button>
      </Tag>
    </div>
  ),
};

// Status Tags
export const StatusTags: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Tag variant="green">
        <span className="size-2 rounded-full bg-green-500" />
        Active
      </Tag>
      <Tag variant="yellow">
        <span className="size-2 rounded-full bg-yellow-400" />
        Pending
      </Tag>
      <Tag variant="red">
        <span className="size-2 rounded-full bg-red-500" />
        Inactive
      </Tag>
      <Tag variant="gray">
        <span className="size-2 rounded-full bg-gray-400" />
        Draft
      </Tag>
    </div>
  ),
};

// Priority Tags
export const PriorityTags: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Tag variant="red" size="sm">
        High Priority
      </Tag>
      <Tag variant="yellow" size="sm">
        Medium Priority
      </Tag>
      <Tag variant="green" size="sm">
        Low Priority
      </Tag>
    </div>
  ),
};

// Tag Group
export const TagGroup: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Technologies</p>
        <div className="flex flex-wrap gap-2">
          <Tag size="sm">React</Tag>
          <Tag size="sm">TypeScript</Tag>
          <Tag size="sm">Tailwind</Tag>
          <Tag size="sm">Node.js</Tag>
          <Tag size="sm">PostgreSQL</Tag>
        </div>
      </div>
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Categories</p>
        <div className="flex flex-wrap gap-2">
          <Tag variant="green" size="sm">
            Frontend
          </Tag>
          <Tag variant="yellow" size="sm">
            Backend
          </Tag>
          <Tag variant="default" size="sm">
            DevOps
          </Tag>
          <Tag variant="gray" size="sm">
            Design
          </Tag>
        </div>
      </div>
    </div>
  ),
};

// Sizes with Icons
export const SizesWithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Tag variant="green" size="sm">
        <Check className="size-3" />
        Small
      </Tag>
      <Tag variant="green" size="md">
        <Check className="size-3.5" />
        Medium
      </Tag>
      <Tag variant="green" size="default">
        <Check className="size-4" />
        Default
      </Tag>
      <Tag variant="green" size="lg">
        <Check className="size-4" />
        Large
      </Tag>
    </div>
  ),
};

// Custom Styling
export const CustomStyling: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Tag className="border-purple-500 text-purple-500">Custom Purple</Tag>
      <Tag className="border-pink-500 text-pink-500">Custom Pink</Tag>
      <Tag className="border-cyan-500 text-cyan-500">Custom Cyan</Tag>
      <Tag className="border-orange-500 bg-orange-500/10 text-orange-500">
        With Background
      </Tag>
    </div>
  ),
};
