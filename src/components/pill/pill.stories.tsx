import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pill } from './pill';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/radio-group/radio-group';
import { Label } from '@/components/label/label';

const meta = {
  title: 'Components/Pill',
  component: Pill,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'selected'],
      description: 'The visual style variant of the pill',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'The size of the pill',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as a Slot component for custom elements',
    },
  },
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default
export const Default: Story = {
  args: {
    children: 'Status',
  },
};

// Selected
export const Selected: Story = {
  args: {
    children: 'Active',
    variant: 'selected',
  },
};

// Sizes
export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium',
    size: 'default',
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
  },
};

// All Sizes with Status
export const AllSizesWithStatus: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Pill size="sm">
        <span>Small</span>
        <span className="size-1.5 rounded-full bg-green-500" />
      </Pill>
      <Pill size="default">
        <span>Medium</span>
        <span className="size-2 rounded-full bg-green-500" />
      </Pill>
      <Pill size="lg">
        <span>Large</span>
        <span className="size-2.5 rounded-full bg-green-500" />
      </Pill>
    </div>
  ),
};

// Variant Comparison
export const VariantComparison: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Pill variant="default">
        <span>Default</span>
        <span className="size-2 rounded-full bg-gray-400" />
      </Pill>
      <Pill variant="selected">
        <span>Selected</span>
        <span className="size-2 rounded-full bg-green-500" />
      </Pill>
    </div>
  ),
};

// As Button
export const AsButton: Story = {
  render: () => (
    <Pill asChild variant="default" className="hover:bg-muted cursor-pointer">
      <button type="button" onClick={() => alert('Clicked!')}>
        <span>Clickable</span>
        <span className="size-2 rounded-full bg-blue-500" />
      </button>
    </Pill>
  ),
};

// Custom Content
export const CustomContent: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Pill>
        <svg
          className="size-3"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
        <span>2 hours ago</span>
      </Pill>
      <Pill variant="selected">
        <span className="font-semibold">PRO</span>
      </Pill>
      <Pill>
        <span>🔥</span>
        <span>Trending</span>
      </Pill>
    </div>
  ),
};

// Interactive Filter Example
export const InteractiveFilter: Story = {
  render: function InteractiveFilterComponent() {
    const [selected, setSelected] = React.useState('all');
    const filters = ['all', 'active', 'pending', 'completed'];

    return (
      <div className="flex gap-2">
        {filters.map((filter) => (
          <Pill
            key={filter}
            asChild
            variant={selected === filter ? 'selected' : 'default'}
            className="hover:bg-muted cursor-pointer"
          >
            <button type="button" onClick={() => setSelected(filter)}>
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          </Pill>
        ))}
      </div>
    );
  },
};

// With RadioGroup - Accessible pill selector
export const WithRadioGroup: Story = {
  render: () => (
    <div className="space-y-4">
      <Label className="text-sm font-medium">Select status</Label>
      <RadioGroup defaultValue="online" className="flex flex-wrap gap-2">
        {[
          { value: 'online', label: 'Online', dot: 'bg-green-500' },
          { value: 'away', label: 'Away', dot: 'bg-yellow-500' },
          { value: 'busy', label: 'Busy', dot: 'bg-red-500' },
          { value: 'offline', label: 'Offline', dot: 'bg-gray-400' },
        ].map((status) => (
          <Label
            key={status.value}
            htmlFor={`status-${status.value}`}
            className="cursor-pointer"
          >
            <Pill className="has-[[data-state=checked]]:bg-primary has-[[data-state=checked]]:text-primary-foreground has-[[data-state=checked]]:before:border-primary">
              <RadioGroupItem
                value={status.value}
                id={`status-${status.value}`}
                className="sr-only"
              />
              <span>{status.label}</span>
              <span className={`size-2 rounded-full ${status.dot}`} />
            </Pill>
          </Label>
        ))}
      </RadioGroup>
    </div>
  ),
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Variants</h3>
        <div className="flex items-center gap-4">
          <Pill variant="default">Default</Pill>
          <Pill variant="selected">Selected</Pill>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <div className="flex items-center gap-4">
          <Pill size="sm">Small</Pill>
          <Pill size="default">Default</Pill>
          <Pill size="lg">Large</Pill>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">With Status Dots</h3>
        <div className="flex items-center gap-4">
          <Pill>
            <span>Status</span>
            <span className="size-2 rounded-full bg-gray-400" />
          </Pill>
          <Pill variant="selected">
            <span>Online</span>
            <span className="size-2 rounded-full bg-green-500" />
          </Pill>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Selected Sizes with Status</h3>
        <div className="flex items-center gap-4">
          <Pill variant="selected" size="sm">
            <span>Small</span>
            <span className="size-1.5 rounded-full bg-green-500" />
          </Pill>
          <Pill variant="selected" size="default">
            <span>Default</span>
            <span className="size-2 rounded-full bg-green-500" />
          </Pill>
          <Pill variant="selected" size="lg">
            <span>Large</span>
            <span className="size-2.5 rounded-full bg-green-500" />
          </Pill>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
