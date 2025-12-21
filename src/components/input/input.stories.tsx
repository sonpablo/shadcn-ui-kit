import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import { Label } from '@/components/label/label';
import { Textarea } from '@/components/textarea/textarea';
import { Mail, Search, Eye, EyeOff, X } from 'lucide-react';
import { useState } from 'react';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: [
        'text',
        'email',
        'password',
        'number',
        'tel',
        'url',
        'search',
        'date',
      ],
      description: 'The type of input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Inputs
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'Hello World',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'email@example.com',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '0',
  },
};

export const SearchType: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Enter value',
    'aria-invalid': true,
  },
};

// With Label
export const WithLabel: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-2">
      <Label htmlFor="input-label">Email Address</Label>
      <Input id="input-label" type="email" placeholder="email@example.com" />
    </div>
  ),
};

// With Icon
export const WithIconLeft: Story = {
  render: () => (
    <div className="relative w-80">
      <Mail className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
      <Input placeholder="Email" className="pl-10" />
    </div>
  ),
};

export const WithIconRight: Story = {
  render: () => (
    <div className="relative w-80">
      <Search className="text-muted-foreground absolute top-1/2 right-3 size-4 -translate-y-1/2" />
      <Input placeholder="Search" className="pr-10" />
    </div>
  ),
};

// Password Toggle
function PasswordToggleComponent() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative w-80">
      <Input
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter password"
        className="pr-10"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
      >
        {showPassword ? (
          <EyeOff className="size-4" />
        ) : (
          <Eye className="size-4" />
        )}
      </button>
    </div>
  );
}

export const PasswordToggle: Story = {
  render: () => <PasswordToggleComponent />,
};

// Clearable Input
function ClearableInputComponent() {
  const [value, setValue] = useState('Clearable text');
  return (
    <div className="relative w-80">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
        className="pr-10"
      />
      {value && (
        <button
          type="button"
          onClick={() => setValue('')}
          className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  );
}

export const ClearableInput: Story = {
  render: () => <ClearableInputComponent />,
};

// Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Input Types</h3>
        <div className="grid w-full max-w-2xl gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="text-input">Text</Label>
            <Input id="text-input" type="text" placeholder="Enter text" />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email-input">Email</Label>
            <Input
              id="email-input"
              type="email"
              placeholder="email@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password-input">Password</Label>
            <Input
              id="password-input"
              type="password"
              placeholder="Enter password"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="number-input">Number</Label>
            <Input id="number-input" type="number" placeholder="0" />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="tel-input">Phone</Label>
            <Input id="tel-input" type="tel" placeholder="+1 (555) 000-0000" />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="url-input">URL</Label>
            <Input
              id="url-input"
              type="url"
              placeholder="https://example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="date-input">Date</Label>
            <Input id="date-input" type="date" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">With Icons</h3>
        <div className="grid w-full max-w-2xl gap-4">
          <div className="flex flex-col gap-2">
            <Label>Email with Icon</Label>
            <div className="relative">
              <Mail className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
              <Input placeholder="email@example.com" className="pl-10" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Search with Icon</Label>
            <div className="relative">
              <Search className="text-muted-foreground absolute top-1/2 right-3 size-4 -translate-y-1/2" />
              <Input placeholder="Search..." className="pr-10" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">States</h3>
        <div className="grid w-full max-w-2xl gap-4">
          <div className="flex flex-col gap-2">
            <Label>Default</Label>
            <Input placeholder="Normal input" />
          </div>

          <div className="flex flex-col gap-2">
            <Label>With Value</Label>
            <Input defaultValue="Has a value" />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Disabled</Label>
            <Input placeholder="Disabled input" disabled />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Error State</Label>
            <Input placeholder="Invalid input" aria-invalid />
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Textarea</h3>
        <div className="grid w-full max-w-2xl gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="textarea">Message</Label>
            <Textarea
              id="textarea"
              placeholder="Enter your message..."
              rows={4}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="textarea-disabled">Disabled Textarea</Label>
            <Textarea
              id="textarea-disabled"
              placeholder="Cannot edit"
              rows={4}
              disabled
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Sizes</h3>
        <div className="grid w-full max-w-2xl gap-4">
          <div className="flex flex-col gap-2">
            <Label>Default (h-9)</Label>
            <Input placeholder="Default size" />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Small (h-8)</Label>
            <Input placeholder="Small size" className="h-8" />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Large (h-10)</Label>
            <Input placeholder="Large size" className="h-10" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

