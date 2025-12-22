import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PillRadioItem } from './pill-radio-item';
import { RadioGroup } from '@/components/radio-group/radio-group';
import { Label } from '@/components/label/label';

const meta = {
  title: 'Components/PillRadioItem',
  component: PillRadioItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'The value of the radio item (required for RadioGroup)',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'The size of the pill',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio item is disabled',
    },
  },
} satisfies Meta<typeof PillRadioItem>;

export default meta;
type Story = StoryObj<typeof PillRadioItem>;

// Default
export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1" className="flex gap-2">
      <PillRadioItem value="option-1">Option 1</PillRadioItem>
      <PillRadioItem value="option-2">Option 2</PillRadioItem>
      <PillRadioItem value="option-3">Option 3</PillRadioItem>
    </RadioGroup>
  ),
};

// With Status Dots
export const WithStatusDots: Story = {
  render: () => (
    <div className="space-y-4">
      <Label className="text-sm font-medium">Select status</Label>
      <RadioGroup defaultValue="online" className="flex flex-wrap gap-2">
        <PillRadioItem value="online">
          <span>Online</span>
          <span className="size-2 rounded-full bg-green-500" />
        </PillRadioItem>
        <PillRadioItem value="away">
          <span>Away</span>
          <span className="size-2 rounded-full bg-yellow-500" />
        </PillRadioItem>
        <PillRadioItem value="busy">
          <span>Busy</span>
          <span className="size-2 rounded-full bg-red-500" />
        </PillRadioItem>
        <PillRadioItem value="offline">
          <span>Offline</span>
          <span className="size-2 rounded-full bg-gray-400" />
        </PillRadioItem>
      </RadioGroup>
    </div>
  ),
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label className="text-muted-foreground text-xs">Small</Label>
        <RadioGroup defaultValue="sm-1" className="flex gap-2">
          <PillRadioItem value="sm-1" size="sm">
            Option 1
          </PillRadioItem>
          <PillRadioItem value="sm-2" size="sm">
            Option 2
          </PillRadioItem>
          <PillRadioItem value="sm-3" size="sm">
            Option 3
          </PillRadioItem>
        </RadioGroup>
      </div>
      <div className="space-y-2">
        <Label className="text-muted-foreground text-xs">Default</Label>
        <RadioGroup defaultValue="md-1" className="flex gap-2">
          <PillRadioItem value="md-1">Option 1</PillRadioItem>
          <PillRadioItem value="md-2">Option 2</PillRadioItem>
          <PillRadioItem value="md-3">Option 3</PillRadioItem>
        </RadioGroup>
      </div>
      <div className="space-y-2">
        <Label className="text-muted-foreground text-xs">Large</Label>
        <RadioGroup defaultValue="lg-1" className="flex gap-2">
          <PillRadioItem value="lg-1" size="lg">
            Option 1
          </PillRadioItem>
          <PillRadioItem value="lg-2" size="lg">
            Option 2
          </PillRadioItem>
          <PillRadioItem value="lg-3" size="lg">
            Option 3
          </PillRadioItem>
        </RadioGroup>
      </div>
    </div>
  ),
};

// Disabled Items
export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <Label className="text-sm font-medium">Select plan</Label>
      <RadioGroup defaultValue="pro" className="flex gap-2">
        <PillRadioItem value="free">Free</PillRadioItem>
        <PillRadioItem value="pro">Pro</PillRadioItem>
        <PillRadioItem value="enterprise" disabled>
          Enterprise (Coming soon)
        </PillRadioItem>
      </RadioGroup>
    </div>
  ),
};

// Controlled
export const Controlled: Story = {
  render: function Render() {
    const [value, setValue] = React.useState('monthly');

    return (
      <div className="space-y-4">
        <Label className="text-sm font-medium">Billing cycle</Label>
        <RadioGroup
          value={value}
          onValueChange={setValue}
          className="flex gap-2"
        >
          <PillRadioItem value="monthly">Monthly</PillRadioItem>
          <PillRadioItem value="yearly">
            <span>Yearly</span>
            <span className="text-xs opacity-70">Save 20%</span>
          </PillRadioItem>
        </RadioGroup>
        <p className="text-muted-foreground text-sm">
          Selected: <strong>{value}</strong>
        </p>
      </div>
    );
  },
};

// Vertical Layout
export const VerticalLayout: Story = {
  render: () => (
    <div className="space-y-4">
      <Label className="text-sm font-medium">Choose a theme</Label>
      <RadioGroup defaultValue="system" className="flex flex-col gap-2">
        <PillRadioItem value="light">☀️ Light</PillRadioItem>
        <PillRadioItem value="dark">🌙 Dark</PillRadioItem>
        <PillRadioItem value="system">💻 System</PillRadioItem>
      </RadioGroup>
    </div>
  ),
};

// With Icons
export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <Label className="text-sm font-medium">Notification preference</Label>
      <RadioGroup defaultValue="all" className="flex flex-wrap gap-2">
        <PillRadioItem value="all">
          <span>🔔</span>
          <span>All</span>
        </PillRadioItem>
        <PillRadioItem value="mentions">
          <span>@</span>
          <span>Mentions only</span>
        </PillRadioItem>
        <PillRadioItem value="none">
          <span>🔕</span>
          <span>None</span>
        </PillRadioItem>
      </RadioGroup>
    </div>
  ),
};

// Form Example
export const FormExample: Story = {
  render: function Render() {
    const [priority, setPriority] = React.useState('medium');
    const [category, setCategory] = React.useState('bug');

    return (
      <div className="w-80 space-y-6">
        <div className="space-y-3">
          <Label className="text-sm font-medium">Priority</Label>
          <RadioGroup
            value={priority}
            onValueChange={setPriority}
            className="flex gap-2"
          >
            <PillRadioItem value="low" size="sm">
              <span className="size-1.5 rounded-full bg-green-500" />
              <span>Low</span>
            </PillRadioItem>
            <PillRadioItem value="medium" size="sm">
              <span className="size-1.5 rounded-full bg-yellow-500" />
              <span>Medium</span>
            </PillRadioItem>
            <PillRadioItem value="high" size="sm">
              <span className="size-1.5 rounded-full bg-red-500" />
              <span>High</span>
            </PillRadioItem>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-medium">Category</Label>
          <RadioGroup
            value={category}
            onValueChange={setCategory}
            className="flex flex-wrap gap-2"
          >
            <PillRadioItem value="bug" size="sm">
              🐛 Bug
            </PillRadioItem>
            <PillRadioItem value="feature" size="sm">
              ✨ Feature
            </PillRadioItem>
            <PillRadioItem value="docs" size="sm">
              📚 Docs
            </PillRadioItem>
            <PillRadioItem value="question" size="sm">
              ❓ Question
            </PillRadioItem>
          </RadioGroup>
        </div>

        <div className="border-t pt-4">
          <p className="text-muted-foreground text-sm">
            Priority: <strong>{priority}</strong> | Category:{' '}
            <strong>{category}</strong>
          </p>
        </div>
      </div>
    );
  },
};
