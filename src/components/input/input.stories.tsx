import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import { Label } from '@/components/label/label';
import {
  Mail,
  Search,
  Eye,
  EyeOff,
  X,
  Phone,
  Globe,
  DollarSign,
  Percent,
  Lock,
  User,
  AtSign,
  Link,
  Copy,
  Check,
} from 'lucide-react';
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
    prefix: {
      control: false,
      description: 'Content to display before the input (icons, text, etc.)',
    },
    suffix: {
      control: false,
      description: 'Content to display after the input (icons, buttons, etc.)',
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
      <Input
        id="input-label"
        type="email"
        placeholder="email@example.com"
        prefix={<Mail />}
      />
    </div>
  ),
};

// Prefix Examples
export const WithPrefix: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <Input placeholder="Email" prefix={<Mail />} />
      <Input placeholder="Search..." prefix={<Search />} />
      <Input placeholder="Username" prefix={<User />} />
      <Input placeholder="Phone number" prefix={<Phone />} />
      <Input placeholder="Website" prefix={<Globe />} />
    </div>
  ),
};

// Suffix Examples
export const WithSuffix: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <Input placeholder="Search..." suffix={<Search />} />
      <Input placeholder="Email" suffix={<AtSign />} />
      <Input placeholder="Link" suffix={<Link />} />
    </div>
  ),
};

// Prefix and Suffix Combined
export const WithPrefixAndSuffix: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <Input placeholder="Amount" prefix={<DollarSign />} suffix={<span className="text-sm">.00</span>} />
      <Input placeholder="Discount" prefix={<span className="text-sm">-</span>} suffix={<Percent />} />
      <Input placeholder="your-domain" prefix={<span className="text-sm">https://</span>} suffix={<span className="text-sm">.com</span>} />
    </div>
  ),
};

// Password Toggle with prefix/suffix
function PasswordToggleComponent() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Input
      type={showPassword ? 'text' : 'password'}
      placeholder="Enter password"
      prefix={<Lock />}
      suffix={
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      }
      className="w-80"
    />
  );
}

export const PasswordToggle: Story = {
  render: () => <PasswordToggleComponent />,
};

// Clearable Input with prefix/suffix
function ClearableInputComponent() {
  const [value, setValue] = useState('Clearable text');
  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Type something..."
      prefix={<Search />}
      suffix={
        value ? (
          <button
            type="button"
            onClick={() => setValue('')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="size-4" />
          </button>
        ) : null
      }
      className="w-80"
    />
  );
}

export const ClearableInput: Story = {
  render: () => <ClearableInputComponent />,
};

// Copy to clipboard example
function CopyInputComponent() {
  const [copied, setCopied] = useState(false);
  const value = 'https://example.com/share/abc123';

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Input
      value={value}
      readOnly
      prefix={<Link />}
      suffix={
        <button
          type="button"
          onClick={handleCopy}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? (
            <Check className="size-4 text-green-500" />
          ) : (
            <Copy className="size-4" />
          )}
        </button>
      }
      className="w-96"
    />
  );
}

export const CopyInput: Story = {
  render: () => <CopyInputComponent />,
};

// Disabled with prefix/suffix
export const DisabledWithAddons: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <Input placeholder="Email" prefix={<Mail />} disabled />
      <Input
        placeholder="Amount"
        prefix={<DollarSign />}
        suffix={<span className="text-sm">.00</span>}
        disabled
      />
    </div>
  ),
};

// Error state with prefix/suffix
export const ErrorWithAddons: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-2">
      <Label className="text-destructive">Email</Label>
      <Input
        placeholder="email@example.com"
        prefix={<Mail />}
        aria-invalid
      />
      <p className="text-destructive text-sm">Please enter a valid email.</p>
    </div>
  ),
};

// Form Example
export const FormExample: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="John Doe" prefix={<User />} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          prefix={<Mail />}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          prefix={<Phone />}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          type="url"
          placeholder="your-site"
          prefix={<span className="text-sm">https://</span>}
          suffix={<span className="text-sm">.com</span>}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          type="number"
          placeholder="0.00"
          prefix={<DollarSign />}
        />
      </div>
    </div>
  ),
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="w-96 space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Without Addons</h3>
        <Input placeholder="Basic input" />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Prefix</h3>
        <Input placeholder="With icon prefix" prefix={<Search />} />
        <Input placeholder="With text prefix" prefix={<span className="text-sm">$</span>} />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Suffix</h3>
        <Input placeholder="With icon suffix" suffix={<Search />} />
        <Input placeholder="With text suffix" suffix={<span className="text-sm">kg</span>} />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Both</h3>
        <Input
          placeholder="Amount"
          prefix={<DollarSign />}
          suffix={<span className="text-sm">USD</span>}
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">States</h3>
        <Input placeholder="Disabled" prefix={<Mail />} disabled />
        <Input placeholder="Error" prefix={<Mail />} aria-invalid />
      </div>
    </div>
  ),
};
