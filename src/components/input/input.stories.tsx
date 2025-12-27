import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import { Label } from '@/components/label/label';
import { Button } from '@/components/button/button';
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
  Bot,
  Building2,
} from 'lucide-react';
import { useState } from 'react';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A flexible input component with support for sizes, types, prefixes, suffixes, and various states.

## Features
- Three sizes (sm, default, lg)
- Multiple types (text, email, password, number, tel, url, search, date)
- Prefix and suffix slots for icons or text
- Disabled and error states
- Keyboard accessibility
- Form integration support

## Common Use Cases
- Text entry in forms
- Search inputs with icon prefixes
- Email/password fields
- Numeric inputs with currency symbols
- Interactive inputs (clearable, password toggle, copy)
- Robot/operator ID entry
- Settings configuration

## Composition
- **Input**: Main input element
- **prefix**: Content before the input (icon, text)
- **suffix**: Content after the input (icon, button, text)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'The size of the input',
    },
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

// =============================================================================
// BASIC EXAMPLES
// =============================================================================

/**
 * ## Default
 *
 * Basic input with optional value, label, and placeholder.
 */
export const Default: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-6 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Basic Usage
        </h4>
        <Input placeholder="Enter text..." />
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          With Default Value
        </h4>
        <Input defaultValue="MAiRA-001" />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="robot-id">Robot ID</Label>
        <Input id="robot-id" placeholder="Enter robot ID..." />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// SIZES
// =============================================================================

/**
 * ## Sizes
 *
 * Three available sizes: sm, default, and lg, with and without addons.
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-8 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Without Addons
        </h4>
        <div className="flex flex-col gap-3">
          <div className="space-y-2">
            <Label className="text-muted-foreground text-xs">
              Size: sm (h-8 / 32px)
            </Label>
            <Input size="sm" placeholder="Small input" />
          </div>
          <div className="space-y-2">
            <Label className="text-muted-foreground text-xs">
              Size: default (h-9 / 36px)
            </Label>
            <Input placeholder="Default input" />
          </div>
          <div className="space-y-2">
            <Label className="text-muted-foreground text-xs">
              Size: lg (h-10 / 40px)
            </Label>
            <Input size="lg" placeholder="Large input" />
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          With Prefixes
        </h4>
        <div className="flex flex-col gap-3">
          <Input size="sm" placeholder="Search..." prefix={<Search />} />
          <Input placeholder="Search..." prefix={<Search />} />
          <Input size="lg" placeholder="Search..." prefix={<Search />} />
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use <code>size</code> prop to match button
        heights in forms or toolbars.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// TYPES
// =============================================================================

/**
 * ## Types
 *
 * Common input types for different data entry scenarios.
 */
export const Types: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-6 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Email
        </h4>
        <Input
          type="email"
          placeholder="operator@neura.com"
          prefix={<Mail />}
        />
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Password
        </h4>
        <Input type="password" placeholder="Enter password" prefix={<Lock />} />
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Number
        </h4>
        <Input type="number" placeholder="0" />
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Search
        </h4>
        <Input
          type="search"
          placeholder="Search robots..."
          prefix={<Search />}
        />
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Phone
        </h4>
        <Input type="tel" placeholder="+49 123 456789" prefix={<Phone />} />
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          URL
        </h4>
        <Input
          type="url"
          placeholder="https://neura-robotics.com"
          prefix={<Globe />}
        />
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use proper input types for native browser
        validation and better mobile keyboards.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// WITH ADDONS
// =============================================================================

/**
 * ## With Addons
 *
 * Inputs with prefix, suffix, or both for enhanced context.
 */
export const WithAddons: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-8 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          With Prefix
        </h4>
        <div className="flex flex-col gap-3">
          <Input placeholder="Email" prefix={<Mail />} />
          <Input placeholder="Search..." prefix={<Search />} />
          <Input placeholder="Username" prefix={<User />} />
          <Input placeholder="Phone number" prefix={<Phone />} />
          <Input placeholder="Robot ID" prefix={<Bot />} />
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          With Suffix
        </h4>
        <div className="flex flex-col gap-3">
          <Input placeholder="Search..." suffix={<Search />} />
          <Input placeholder="Email" suffix={<AtSign />} />
          <Input placeholder="Link" suffix={<Link />} />
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          With Both (Prefix + Suffix)
        </h4>
        <div className="flex flex-col gap-3">
          <Input
            placeholder="Amount"
            prefix={<DollarSign />}
            suffix={<span className="text-sm">.00</span>}
          />
          <Input
            placeholder="Discount"
            prefix={<span className="text-sm">-</span>}
            suffix={<Percent />}
          />
          <Input
            placeholder="your-domain"
            prefix={<span className="text-sm">https://</span>}
            suffix={<span className="text-sm">.com</span>}
          />
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use prefix/suffix to provide context without
        cluttering labels.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// STATES
// =============================================================================

/**
 * ## States
 *
 * Disabled and error states, with and without addons.
 */
export const States: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-8 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Disabled
        </h4>
        <div className="flex flex-col gap-3">
          <Input placeholder="Disabled input" disabled />
          <Input placeholder="Email" prefix={<Mail />} disabled />
          <Input
            placeholder="Amount"
            prefix={<DollarSign />}
            suffix={<span className="text-sm">.00</span>}
            disabled
          />
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Error State
        </h4>
        <div className="flex flex-col gap-3">
          <div className="space-y-2">
            <Input placeholder="Enter value" aria-invalid />
          </div>
          <div className="space-y-2">
            <Label className="text-destructive">Email</Label>
            <Input
              placeholder="email@example.com"
              prefix={<Mail />}
              aria-invalid
            />
            <p className="text-destructive text-sm">
              Please enter a valid email.
            </p>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use <code>aria-invalid</code> for error states
        and provide clear error messages.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// INTERACTIVE
// =============================================================================

/**
 * ## Interactive
 *
 * Advanced interactive patterns: password toggle, clearable input, copy to clipboard.
 */
export const Interactive: Story = {
  render: function InteractiveExample() {
    const [showPassword, setShowPassword] = useState(false);
    const [searchValue, setSearchValue] = useState('MAiRA-001');
    const [copied, setCopied] = useState(false);
    const shareLink = 'https://neura-robotics.com/fleet/maira-001';

    const handleCopy = () => {
      navigator.clipboard.writeText(shareLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <div className="flex w-96 flex-col gap-8 p-4">
        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Password Toggle
          </h4>
          <div className="space-y-2">
            <Label>Password</Label>
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
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              }
            />
          </div>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Clearable Input
          </h4>
          <div className="space-y-2">
            <Label>Search Robot</Label>
            <Input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Type something..."
              prefix={<Search />}
              suffix={
                searchValue ? (
                  <button
                    type="button"
                    onClick={() => setSearchValue('')}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="size-4" />
                  </button>
                ) : null
              }
            />
          </div>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Copy to Clipboard
          </h4>
          <div className="space-y-2">
            <Label>Share Link</Label>
            <Input
              value={shareLink}
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
            />
          </div>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Use suffix slots for interactive buttons.
          Keep actions simple and predictable.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// COMPLETE SHOWCASE
// =============================================================================

/**
 * ## Complete Showcase
 *
 * Real-world example: Robot configuration form in a Neura Robotics dashboard.
 */
export const CompleteShowcase: Story = {
  render: function CompleteShowcaseExample() {
    const [robotId, setRobotId] = useState('MAiRA-001');

    return (
      <div className="bg-card text-card-foreground w-[600px] space-y-6 rounded-lg border p-6 shadow-sm">
        <div>
          <h3 className="mb-2 text-lg font-semibold">
            Robot Configuration Form
          </h3>
          <p className="text-muted-foreground text-sm">
            Configure robot settings and deployment details
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border p-4">
            <h4 className="mb-4 text-sm font-medium">Basic Information</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="robot-id">Robot ID</Label>
                <Input
                  id="robot-id"
                  value={robotId}
                  onChange={(e) => setRobotId(e.target.value)}
                  prefix={<Bot />}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="operator-name">Operator Name</Label>
                <Input
                  id="operator-name"
                  placeholder="John Doe"
                  prefix={<User />}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="operator-email">Operator Email</Label>
                <Input
                  id="operator-email"
                  type="email"
                  placeholder="operator@neura.com"
                  prefix={<Mail />}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Contact Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+49 123 456789"
                  prefix={<Phone />}
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <h4 className="mb-4 text-sm font-medium">Deployment Details</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="location">Facility Location</Label>
                <Input
                  id="location"
                  placeholder="Munich Plant A"
                  prefix={<Building2 />}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Fleet Dashboard URL</Label>
                <Input
                  id="website"
                  type="url"
                  placeholder="your-site"
                  prefix={<span className="text-sm">https://</span>}
                  suffix={<span className="text-sm">.neura.com</span>}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="max-speed">Max Speed (km/h)</Label>
                <Input
                  id="max-speed"
                  type="number"
                  placeholder="5.0"
                  suffix={<span className="text-sm">km/h</span>}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Maintenance Budget</Label>
                <Input
                  id="budget"
                  type="number"
                  placeholder="0.00"
                  prefix={<DollarSign />}
                  suffix={<span className="text-sm">USD</span>}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline">Cancel</Button>
            <Button>Save Configuration</Button>
          </div>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 This form demonstrates various input types, prefixes, and suffixes
          for a robot configuration interface.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// ACCESSIBILITY
// =============================================================================

/**
 * ## Accessibility
 *
 * Inputs should follow accessibility best practices for keyboard navigation,
 * labeling, and error states.
 */
export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="mb-2 text-sm font-semibold">Accessibility Features</h4>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>
            ✓ <strong>Labels</strong>: Always use <code>Label</code> with{' '}
            <code>htmlFor</code> for screen readers
          </li>
          <li>
            ✓ <strong>Placeholder</strong>: Provide descriptive placeholders,
            but don't rely on them as labels
          </li>
          <li>
            ✓ <strong>Error states</strong>: Use <code>aria-invalid</code> and{' '}
            <code>aria-describedby</code> for error messages
          </li>
          <li>
            ✓ <strong>Keyboard navigation</strong>: Full keyboard support with
            Tab, Shift+Tab
          </li>
          <li>
            ✓ <strong>Focus indicators</strong>: Clear visual focus states
          </li>
          <li>
            ✓ <strong>Input types</strong>: Use proper types for native
            validation and better mobile keyboards
          </li>
        </ul>
      </div>

      <div className="w-80 space-y-6">
        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Proper Labeling
          </h4>
          <div className="space-y-2">
            <Label htmlFor="robot-name">Robot Name</Label>
            <Input
              id="robot-name"
              placeholder="Enter robot name"
              prefix={<Bot />}
            />
          </div>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Error Handling
          </h4>
          <div className="space-y-2">
            <Label htmlFor="error-email" className="text-destructive">
              Email
            </Label>
            <Input
              id="error-email"
              type="email"
              placeholder="email@example.com"
              prefix={<Mail />}
              aria-invalid
              aria-describedby="error-email-message"
            />
            <p id="error-email-message" className="text-destructive text-sm">
              Please enter a valid email address.
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Required Fields
          </h4>
          <div className="space-y-2">
            <Label htmlFor="required-input">
              Operator ID <span className="text-destructive">*</span>
            </Label>
            <Input
              id="required-input"
              placeholder="Enter operator ID"
              required
            />
            <p className="text-muted-foreground text-xs">
              This field is required.
            </p>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Always provide labels, use proper input types,
        and ensure error messages are linked with <code>aria-describedby</code>.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Accessibility Best Practices

**Label Association:**
\`\`\`tsx
<Label htmlFor="robot-id">Robot ID</Label>
<Input id="robot-id" ... />
\`\`\`

**Error Handling:**
\`\`\`tsx
<Label htmlFor="email" className="text-destructive">Email</Label>
<Input 
  id="email"
  aria-invalid 
  aria-describedby="email-error"
/>
<p id="email-error" className="text-destructive text-sm">
  {errorMessage}
</p>
\`\`\`

**Required Fields:**
\`\`\`tsx
<Label htmlFor="name">
  Name <span className="text-destructive">*</span>
</Label>
<Input id="name" required />
\`\`\`

**Testing:**
- Test keyboard navigation (Tab, Shift+Tab)
- Verify screen reader announces labels and errors
- Ensure focus indicators are visible
- Check placeholder text is not the only label
- Test with different input types on mobile
        `,
      },
    },
  },
};
