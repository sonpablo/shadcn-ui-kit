import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PillRadioItem } from './pill-radio-item';
import { RadioGroup } from '@/components/radio-group/radio-group';
import { Label } from '@/components/label/label';
import { Bot, Zap, Settings } from 'lucide-react';

const meta = {
  title: 'Components/PillRadioItem',
  component: PillRadioItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A pill-styled radio button component that provides a more visual alternative to standard radio inputs.

## Features
- Three sizes (sm, default, lg)
- Works seamlessly with RadioGroup
- Support for icons and status indicators
- Keyboard accessible
- Disabled state
- Custom content support

## When to Use
- Visual selection of mutually exclusive options
- Filter controls
- Mode toggles
- Status selection
- Settings with limited options

## Common Use Cases
- Robot operation modes
- Fleet status filters
- Priority levels
- Time period selection
- View mode toggles
        `,
      },
    },
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

// =============================================================================
// BASIC EXAMPLES
// =============================================================================

/**
 * ## Default
 *
 * Basic pill radio items for simple selection scenarios.
 */
export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="space-y-2">
        <Label className="text-sm font-medium">Select Robot Mode</Label>
        <RadioGroup defaultValue="autonomous" className="flex gap-2">
          <PillRadioItem value="autonomous">Autonomous</PillRadioItem>
          <PillRadioItem value="manual">Manual</PillRadioItem>
          <PillRadioItem value="assisted">Assisted</PillRadioItem>
        </RadioGroup>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Pill radio items work within a RadioGroup for
        mutually exclusive selections.
      </p>
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
 * Three available sizes: sm, default, and lg.
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="space-y-2">
        <Label className="text-muted-foreground text-xs font-medium uppercase">
          Small
        </Label>
        <RadioGroup defaultValue="sm-1" className="flex gap-2">
          <PillRadioItem value="sm-1" size="sm">
            MAiRA
          </PillRadioItem>
          <PillRadioItem value="sm-2" size="sm">
            LARA
          </PillRadioItem>
          <PillRadioItem value="sm-3" size="sm">
            4NE1
          </PillRadioItem>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label className="text-muted-foreground text-xs font-medium uppercase">
          Default
        </Label>
        <RadioGroup defaultValue="md-1" className="flex gap-2">
          <PillRadioItem value="md-1">MAiRA</PillRadioItem>
          <PillRadioItem value="md-2">LARA</PillRadioItem>
          <PillRadioItem value="md-3">4NE1</PillRadioItem>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label className="text-muted-foreground text-xs font-medium uppercase">
          Large
        </Label>
        <RadioGroup defaultValue="lg-1" className="flex gap-2">
          <PillRadioItem value="lg-1" size="lg">
            MAiRA
          </PillRadioItem>
          <PillRadioItem value="lg-2" size="lg">
            LARA
          </PillRadioItem>
          <PillRadioItem value="lg-3" size="lg">
            4NE1
          </PillRadioItem>
        </RadioGroup>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use small for compact UIs, default for standard
        forms, and large for prominent selections.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// WITH ICONS & STATUS
// =============================================================================

/**
 * ## With Icons & Status
 *
 * Pill radio items with icons, status indicators, and custom content.
 */
export const WithIconsAndStatus: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="space-y-2">
        <Label className="text-sm font-medium">Robot Status</Label>
        <RadioGroup defaultValue="operational" className="flex flex-wrap gap-2">
          <PillRadioItem value="operational">
            <span>Operational</span>
            <span className="size-2 rounded-full bg-green-500" />
          </PillRadioItem>
          <PillRadioItem value="standby">
            <span>Standby</span>
            <span className="size-2 rounded-full bg-yellow-500" />
          </PillRadioItem>
          <PillRadioItem value="maintenance">
            <span>Maintenance</span>
            <span className="size-2 rounded-full bg-blue-500" />
          </PillRadioItem>
          <PillRadioItem value="offline">
            <span>Offline</span>
            <span className="size-2 rounded-full bg-gray-400" />
          </PillRadioItem>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium">Operation Mode</Label>
        <RadioGroup defaultValue="auto" className="flex flex-wrap gap-2">
          <PillRadioItem value="auto">
            <Bot className="size-4" />
            <span>Autonomous</span>
          </PillRadioItem>
          <PillRadioItem value="manual">
            <Settings className="size-4" />
            <span>Manual</span>
          </PillRadioItem>
          <PillRadioItem value="high-speed">
            <Zap className="size-4" />
            <span>High Speed</span>
          </PillRadioItem>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium">Priority Level</Label>
        <RadioGroup defaultValue="medium" className="flex gap-2">
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

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Combine icons and status dots for better visual
        communication.
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
 * Disabled state for unavailable options.
 */
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="space-y-2">
        <Label className="text-sm font-medium">Select Deployment Plan</Label>
        <RadioGroup defaultValue="standard" className="flex gap-2">
          <PillRadioItem value="standard">Standard</PillRadioItem>
          <PillRadioItem value="advanced">Advanced</PillRadioItem>
          <PillRadioItem value="enterprise" disabled>
            Enterprise (Coming soon)
          </PillRadioItem>
        </RadioGroup>
        <p className="text-muted-foreground text-xs">
          The Enterprise plan is currently unavailable.
        </p>
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium">Robot Model</Label>
        <RadioGroup defaultValue="maira" className="flex flex-wrap gap-2">
          <PillRadioItem value="maira">MAiRA</PillRadioItem>
          <PillRadioItem value="lara">LARA</PillRadioItem>
          <PillRadioItem value="4ne1" disabled>
            4NE1 (Out of stock)
          </PillRadioItem>
          <PillRadioItem value="mav" disabled>
            MAV (Pre-order)
          </PillRadioItem>
        </RadioGroup>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Disabled items are still visible but
        non-interactive.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// CONTROLLED
// =============================================================================

/**
 * ## Controlled
 *
 * Controlled pill radio items with external state management.
 */
export const Controlled: Story = {
  render: function ControlledExample() {
    const [billingCycle, setBillingCycle] = React.useState('monthly');
    const [viewMode, setViewMode] = React.useState('grid');

    return (
      <div className="flex flex-col gap-6 p-4">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Billing Cycle</Label>
          <RadioGroup
            value={billingCycle}
            onValueChange={setBillingCycle}
            className="flex gap-2"
          >
            <PillRadioItem value="monthly">Monthly</PillRadioItem>
            <PillRadioItem value="yearly">
              <span>Yearly</span>
              <span className="text-xs opacity-70">Save 20%</span>
            </PillRadioItem>
          </RadioGroup>
          <p className="text-muted-foreground text-sm">
            Selected: <strong>{billingCycle}</strong>
          </p>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">View Mode</Label>
          <RadioGroup
            value={viewMode}
            onValueChange={setViewMode}
            className="flex gap-2"
          >
            <PillRadioItem value="list">📋 List</PillRadioItem>
            <PillRadioItem value="grid">🔲 Grid</PillRadioItem>
            <PillRadioItem value="table">📊 Table</PillRadioItem>
          </RadioGroup>
          <p className="text-muted-foreground text-sm">
            Selected: <strong>{viewMode}</strong>
          </p>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Use controlled mode for form integration and
          dynamic UI updates.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// LAYOUTS
// =============================================================================

/**
 * ## Layouts
 *
 * Horizontal and vertical layouts for different UI contexts.
 */
export const Layouts: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div className="space-y-2">
        <Label className="text-sm font-medium">Horizontal (Default)</Label>
        <RadioGroup defaultValue="munich" className="flex gap-2">
          <PillRadioItem value="munich">Munich</PillRadioItem>
          <PillRadioItem value="stuttgart">Stuttgart</PillRadioItem>
          <PillRadioItem value="berlin">Berlin</PillRadioItem>
          <PillRadioItem value="hamburg">Hamburg</PillRadioItem>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium">Vertical Layout</Label>
        <RadioGroup defaultValue="light" className="flex flex-col gap-2">
          <PillRadioItem value="light">☀️ Light Mode</PillRadioItem>
          <PillRadioItem value="dark">🌙 Dark Mode</PillRadioItem>
          <PillRadioItem value="system">💻 System Default</PillRadioItem>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium">Wrapped Layout</Label>
        <RadioGroup defaultValue="opt1" className="flex flex-wrap gap-2">
          <PillRadioItem value="opt1" size="sm">
            Option 1
          </PillRadioItem>
          <PillRadioItem value="opt2" size="sm">
            Option 2
          </PillRadioItem>
          <PillRadioItem value="opt3" size="sm">
            Option 3
          </PillRadioItem>
          <PillRadioItem value="opt4" size="sm">
            Option 4
          </PillRadioItem>
          <PillRadioItem value="opt5" size="sm">
            Option 5
          </PillRadioItem>
          <PillRadioItem value="opt6" size="sm">
            Option 6
          </PillRadioItem>
        </RadioGroup>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use <code>flex-col</code> for vertical,{' '}
        <code>flex-wrap</code> for wrapping layouts.
      </p>
    </div>
  ),
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
 * Real-world example: Robot deployment configuration form with multiple pill radio selections.
 */
export const CompleteShowcase: Story = {
  render: function CompleteShowcaseExample() {
    const [robotModel, setRobotModel] = React.useState('maira');
    const [mode, setMode] = React.useState('autonomous');
    const [priority, setPriority] = React.useState('medium');
    const [location, setLocation] = React.useState('munich');

    return (
      <div className="bg-card text-card-foreground w-[600px] space-y-6 rounded-lg border p-6 shadow-sm">
        <div>
          <h3 className="mb-2 text-lg font-semibold">
            Robot Deployment Configuration
          </h3>
          <p className="text-muted-foreground text-sm">
            Configure your robot deployment settings
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <Label className="text-sm font-medium">Robot Model</Label>
            <RadioGroup
              value={robotModel}
              onValueChange={setRobotModel}
              className="flex flex-wrap gap-2"
            >
              <PillRadioItem value="maira">
                <Bot className="size-4" />
                <span>MAiRA</span>
              </PillRadioItem>
              <PillRadioItem value="lara">
                <Bot className="size-4" />
                <span>LARA</span>
              </PillRadioItem>
              <PillRadioItem value="4ne1">
                <Bot className="size-4" />
                <span>4NE1</span>
              </PillRadioItem>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium">Operation Mode</Label>
            <RadioGroup
              value={mode}
              onValueChange={setMode}
              className="flex flex-wrap gap-2"
            >
              <PillRadioItem value="autonomous">
                <Zap className="size-4" />
                <span>Autonomous</span>
              </PillRadioItem>
              <PillRadioItem value="manual">
                <Settings className="size-4" />
                <span>Manual</span>
              </PillRadioItem>
              <PillRadioItem value="assisted">
                <Bot className="size-4" />
                <span>Assisted</span>
              </PillRadioItem>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium">Priority Level</Label>
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
            <Label className="text-sm font-medium">Deployment Location</Label>
            <RadioGroup
              value={location}
              onValueChange={setLocation}
              className="flex flex-wrap gap-2"
            >
              <PillRadioItem value="munich">Munich Plant A</PillRadioItem>
              <PillRadioItem value="stuttgart">Stuttgart Factory</PillRadioItem>
              <PillRadioItem value="berlin">Berlin Warehouse</PillRadioItem>
              <PillRadioItem value="hamburg">Hamburg DC</PillRadioItem>
            </RadioGroup>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg border p-4">
          <h4 className="mb-2 text-sm font-semibold">Configuration Summary</h4>
          <dl className="text-muted-foreground grid grid-cols-2 gap-2 text-sm">
            <dt>Model:</dt>
            <dd className="font-medium">{robotModel.toUpperCase()}</dd>
            <dt>Mode:</dt>
            <dd className="font-medium">
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </dd>
            <dt>Priority:</dt>
            <dd className="font-medium">
              {priority.charAt(0).toUpperCase() + priority.slice(1)}
            </dd>
            <dt>Location:</dt>
            <dd className="font-medium">
              {location.charAt(0).toUpperCase() + location.slice(1)}
            </dd>
          </dl>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 This form demonstrates pill radio items in a complete deployment
          workflow.
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
 * Pill radio items follow accessibility best practices for keyboard navigation
 * and screen readers.
 */
export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="mb-2 text-sm font-semibold">Accessibility Features</h4>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>
            ✓ <strong>Keyboard navigation</strong>: Arrow keys to move, Space to
            select
          </li>
          <li>
            ✓ <strong>Focus indicators</strong>: Visible outline on focus
          </li>
          <li>
            ✓ <strong>ARIA attributes</strong>: Proper roles and states
          </li>
          <li>
            ✓ <strong>Labels</strong>: Associated labels for context
          </li>
          <li>
            ✓ <strong>Screen readers</strong>: Announced correctly
          </li>
          <li>
            ✓ <strong>Disabled state</strong>: Skipped in tab order
          </li>
        </ul>
      </div>

      <div className="w-[400px] space-y-4">
        <h4 className="text-sm font-medium">Test keyboard navigation:</h4>
        <div className="space-y-2">
          <Label htmlFor="robot-mode">Select Robot Mode</Label>
          <RadioGroup
            id="robot-mode"
            defaultValue="auto"
            className="flex gap-2"
          >
            <PillRadioItem value="auto">Autonomous</PillRadioItem>
            <PillRadioItem value="manual">Manual</PillRadioItem>
            <PillRadioItem value="assisted">Assisted</PillRadioItem>
          </RadioGroup>
        </div>
        <p className="text-muted-foreground text-xs">
          Press <kbd className="bg-background rounded border px-1">Tab</kbd> to
          focus, <kbd className="bg-background rounded border px-1">Arrow</kbd>{' '}
          keys to navigate,{' '}
          <kbd className="bg-background rounded border px-1">Space</kbd> to
          select.
        </p>
      </div>

      <div className="bg-muted/30 rounded-lg p-3">
        <h4 className="mb-2 text-sm font-semibold">Best Practices</h4>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>• Always provide a visible Label for context</li>
          <li>• Use descriptive text (not just icons) for screen readers</li>
          <li>• Ensure sufficient color contrast for status indicators</li>
          <li>• Group related options in a single RadioGroup</li>
          <li>• Provide clear visual feedback for selected state</li>
        </ul>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Test with keyboard-only navigation and screen
        readers for full accessibility.
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
<Label htmlFor="mode">Select Mode</Label>
<RadioGroup id="mode" value={value} onValueChange={setValue}>
  <PillRadioItem value="auto">Autonomous</PillRadioItem>
</RadioGroup>
\`\`\`

**Keyboard Support:**
- Tab or Shift+Tab to focus the radio group
- Arrow keys (↑↓←→) to navigate between options
- Space to select the focused option

**Screen Readers:**
- Radio group role is announced
- Selected state is communicated
- Label context is provided
        `,
      },
    },
  },
};
