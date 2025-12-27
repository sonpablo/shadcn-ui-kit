import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { Label } from '@/components/label/label';
import { Pill } from '@/components/pill/pill';
import { Bot, Zap, Shield, Gauge } from 'lucide-react';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A radio group component for single-choice selections.

## When to Use
Use radio buttons when users must select **exactly one** option from a list. For multiple selections, use checkboxes instead.

## Features
- Mutually exclusive selection (only one can be selected)
- Keyboard navigation (Arrow keys to navigate, Space to select)
- Disabled state (entire group or individual items)
- Error state with \`aria-invalid\`
- Flexible layouts (vertical or horizontal)
- Accessible by default (proper ARIA attributes)

## Layouts
- **Vertical** (default): Stack options vertically
- **Horizontal**: Display options in a row (add \`className="flex gap-6"\`)

## Common Patterns
- Simple list of options
- Options with descriptions
- Card-style selection (plans, shipping options)
- Visual selectors (sizes, colors)
- Form fields with validation
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the radio group is disabled',
    },
    defaultValue: {
      control: 'text',
      description: 'The default selected value',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the radio group',
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// BASIC EXAMPLES
// =============================================================================

/**
 * ## Default
 *
 * Basic radio group with vertical layout (default orientation).
 */
export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="maira">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="maira" id="robot-maira" />
        <Label htmlFor="robot-maira">MAiRA (Collaborative Robot)</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="lara" id="robot-lara" />
        <Label htmlFor="robot-lara">LARA (Logistics Assistant)</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="mav" id="robot-mav" />
        <Label htmlFor="robot-mav">MAV (Mobile Autonomous)</Label>
      </div>
    </RadioGroup>
  ),
};

// =============================================================================
// LAYOUTS
// =============================================================================

/**
 * ## Layouts
 *
 * Radio groups can be displayed vertically (default) or horizontally.
 */
export const Layouts: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Vertical Layout (Default)
        </h4>
        <RadioGroup defaultValue="auto">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="auto" id="mode-auto" />
            <Label htmlFor="mode-auto">Autonomous</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="manual" id="mode-manual" />
            <Label htmlFor="mode-manual">Manual Control</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="assisted" id="mode-assisted" />
            <Label htmlFor="mode-assisted">Assisted Mode</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Horizontal Layout
        </h4>
        <RadioGroup defaultValue="medium" className="flex gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="low" id="speed-low" />
            <Label htmlFor="speed-low">Low Speed</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="medium" id="speed-medium" />
            <Label htmlFor="speed-medium">Medium</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="high" id="speed-high" />
            <Label htmlFor="speed-high">High Speed</Label>
          </div>
        </RadioGroup>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use vertical layout for 4+ options or when
        descriptions are included. Use horizontal for 2-3 simple options.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// WITH DESCRIPTION
// =============================================================================

/**
 * ## With Description
 *
 * Radio buttons with helpful descriptions for each option.
 */
export const WithDescription: Story = {
  render: () => (
    <div className="w-[400px] p-4">
      <RadioGroup defaultValue="smart" className="gap-4">
        <div className="flex items-start space-x-3">
          <RadioGroupItem value="smart" id="deploy-smart" className="mt-1" />
          <div className="grid gap-1">
            <Label htmlFor="deploy-smart" className="font-medium">
              <div className="flex items-center gap-2">
                <Zap className="size-4" />
                Smart Deployment
              </div>
            </Label>
            <p className="text-muted-foreground text-sm">
              Automatically optimize robot placement based on task requirements
              and workspace layout.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <RadioGroupItem value="manual" id="deploy-manual" className="mt-1" />
          <div className="grid gap-1">
            <Label htmlFor="deploy-manual" className="font-medium">
              <div className="flex items-center gap-2">
                <Gauge className="size-4" />
                Manual Deployment
              </div>
            </Label>
            <p className="text-muted-foreground text-sm">
              Choose specific positions for each robot. Provides full control
              over fleet placement.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <RadioGroupItem value="zone" id="deploy-zone" className="mt-1" />
          <div className="grid gap-1">
            <Label htmlFor="deploy-zone" className="font-medium">
              <div className="flex items-center gap-2">
                <Shield className="size-4" />
                Zone-Based Deployment
              </div>
            </Label>
            <p className="text-muted-foreground text-sm">
              Deploy robots to predefined safety zones with automatic load
              balancing.
            </p>
          </div>
        </div>
      </RadioGroup>

      <p className="text-muted-foreground mt-4 text-xs">
        💡 <strong>Tip:</strong> Use <code>className="mt-1"</code> on
        RadioGroupItem to align it with the first line when using descriptions.
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
 * Radio groups support various states including disabled and error.
 */
export const States: Story = {
  render: function Render() {
    const [hasError, setHasError] = React.useState(true);

    return (
      <div className="flex flex-col gap-8 p-4">
        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Disabled Group
          </h4>
          <RadioGroup defaultValue="option-one" disabled>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="disabled-one" />
              <Label htmlFor="disabled-one" className="text-muted-foreground">
                Option One (selected)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="disabled-two" />
              <Label htmlFor="disabled-two" className="text-muted-foreground">
                Option Two
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Single Disabled Item
          </h4>
          <RadioGroup defaultValue="available">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="available" id="item-available" />
              <Label htmlFor="item-available">Munich Plant A (Available)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="limited" id="item-limited" />
              <Label htmlFor="item-limited">Stuttgart Factory (Limited)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="maintenance"
                id="item-maintenance"
                disabled
              />
              <Label
                htmlFor="item-maintenance"
                className="text-muted-foreground"
              >
                Berlin Warehouse (Under Maintenance)
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Error State
          </h4>
          <div className="flex items-center space-x-2 rounded-lg border p-3">
            <input
              type="checkbox"
              id="error-toggle"
              checked={hasError}
              onChange={(e) => setHasError(e.target.checked)}
              className="size-4"
            />
            <Label htmlFor="error-toggle" className="text-sm">
              Show error state
            </Label>
          </div>
          <div className="mt-4 space-y-4">
            <div className="space-y-2">
              <Label className="text-base font-medium">
                Select deployment mode
              </Label>
              {hasError && (
                <p className="text-destructive text-sm" role="alert">
                  Please select a deployment mode to continue
                </p>
              )}
            </div>
            <RadioGroup>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-one"
                  id="error-one"
                  aria-invalid={hasError}
                />
                <Label htmlFor="error-one">Automatic</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-two"
                  id="error-two"
                  aria-invalid={hasError}
                />
                <Label htmlFor="error-two">Manual</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Use <code>aria-invalid</code> on error for
          accessibility. Disable entire group or individual items as needed.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### State Management

**Disabled Group:**
\`\`\`tsx
<RadioGroup disabled>
  {/* all items disabled */}
</RadioGroup>
\`\`\`

**Single Disabled Item:**
\`\`\`tsx
<RadioGroupItem disabled />
\`\`\`

**Error State:**
\`\`\`tsx
<RadioGroupItem aria-invalid={hasError} />
\`\`\`
        `,
      },
    },
  },
};

// =============================================================================
// CARD STYLE
// =============================================================================

/**
 * ## Card Style
 *
 * Radio buttons styled as interactive cards for visual emphasis.
 */
export const CardStyle: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div className="w-full max-w-md">
        <h4 className="mb-4 text-sm font-medium">Service Plans</h4>
        <RadioGroup defaultValue="pro" className="gap-3">
          {[
            {
              value: 'basic',
              title: 'Basic Monitoring',
              description: 'Essential robot status and alerts',
              price: 'Free',
              period: '',
              icon: Bot,
            },
            {
              value: 'pro',
              title: 'Pro Analytics',
              description: 'Advanced performance insights and reports',
              price: '$29',
              period: '/month',
              icon: Zap,
            },
            {
              value: 'enterprise',
              title: 'Enterprise Security',
              description: 'Full compliance and security features',
              price: '$99',
              period: '/month',
              icon: Shield,
            },
          ].map((plan) => {
            const Icon = plan.icon;
            return (
              <Label
                key={plan.value}
                htmlFor={`plan-${plan.value}`}
                className="border-input has-data-[state=checked]:border-primary has-data-[state=checked]:ring-primary/20 flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition-all has-data-[state=checked]:ring-2"
              >
                <RadioGroupItem value={plan.value} id={`plan-${plan.value}`} />
                <div className="bg-muted flex size-10 items-center justify-center rounded-lg">
                  <Icon className="size-5" />
                </div>
                <div className="flex-1">
                  <span className="font-medium">{plan.title}</span>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground text-sm">
                      {plan.period}
                    </span>
                  )}
                </div>
              </Label>
            );
          })}
        </RadioGroup>
      </div>

      <div className="w-full max-w-md">
        <h4 className="mb-4 text-sm font-medium">Deployment Speed</h4>
        <RadioGroup defaultValue="express" className="gap-3">
          {[
            {
              value: 'standard',
              title: 'Standard Deployment',
              description: 'Deploy within 24 hours',
              time: '24h',
            },
            {
              value: 'express',
              title: 'Express Deployment',
              description: 'Priority deployment within 4 hours',
              time: '4h',
            },
            {
              value: 'instant',
              title: 'Instant Deployment',
              description: 'Immediate robot activation',
              time: 'Now',
            },
          ].map((option) => (
            <Label
              key={option.value}
              htmlFor={`speed-${option.value}`}
              className="border-input flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors has-data-[state=checked]:border-green-500 has-data-[state=checked]:bg-green-50 dark:has-data-[state=checked]:bg-green-950/20"
            >
              <RadioGroupItem
                value={option.value}
                id={`speed-${option.value}`}
                className="mt-0.5"
              />
              <div className="flex flex-1 items-start justify-between">
                <div className="grid gap-1">
                  <span className="font-medium">{option.title}</span>
                  <span className="text-muted-foreground text-sm">
                    {option.description}
                  </span>
                </div>
                <span className="font-semibold">{option.time}</span>
              </div>
            </Label>
          ))}
        </RadioGroup>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use <code>has-data-[state=checked]:</code> CSS
        selector to style card based on radio state.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Card Pattern

Wrap RadioGroupItem and content in a Label for the entire card to be clickable:

\`\`\`tsx
<Label
  htmlFor="plan-pro"
  className="has-data-[state=checked]:border-primary ..."
>
  <RadioGroupItem value="pro" id="plan-pro" />
  {/* card content */}
</Label>
\`\`\`

The \`has-[[data-state=checked]]\` CSS selector allows the card to react to the radio state.
        `,
      },
    },
  },
};

// =============================================================================
// CUSTOM STYLES
// =============================================================================

/**
 * ## Custom Styles
 *
 * Radio groups can be styled creatively for size selectors, color pickers, and status indicators.
 */
export const CustomStyles: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <h4 className="mb-3 text-sm font-medium">Size Selector</h4>
        <RadioGroup defaultValue="xl" className="flex gap-2">
          {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <Label
              key={size}
              htmlFor={`size-${size}`}
              className="border-input has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary has-data-[state=checked]:text-primary-foreground hover:bg-muted flex size-10 cursor-pointer items-center justify-center rounded-md border text-sm font-medium transition-colors"
            >
              <RadioGroupItem
                value={size.toLowerCase()}
                id={`size-${size}`}
                className="sr-only"
              />
              {size}
            </Label>
          ))}
        </RadioGroup>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-medium">Speed Preset</h4>
        <RadioGroup defaultValue="medium" className="flex gap-2">
          {[
            { value: 'slow', label: '25%', icon: '🐢' },
            { value: 'medium', label: '75%', icon: '🚶' },
            { value: 'fast', label: '100%', icon: '🚀' },
          ].map((preset) => (
            <Label
              key={preset.value}
              htmlFor={`preset-${preset.value}`}
              className="border-input hover:bg-muted flex min-w-20 cursor-pointer flex-col items-center gap-1 rounded-lg border p-3 text-center transition-colors has-data-[state=checked]:border-green-500 has-data-[state=checked]:bg-green-500 has-data-[state=checked]:text-white"
            >
              <RadioGroupItem
                value={preset.value}
                id={`preset-${preset.value}`}
                className="sr-only"
              />
              <span className="text-2xl">{preset.icon}</span>
              <span className="text-xs font-medium">{preset.label}</span>
            </Label>
          ))}
        </RadioGroup>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-medium">Robot Status (With Pill)</h4>
        <RadioGroup defaultValue="active" className="flex flex-wrap gap-2">
          {[
            { value: 'active', label: 'Active', dot: 'bg-green-500' },
            { value: 'standby', label: 'Standby', dot: 'bg-yellow-500' },
            { value: 'maintenance', label: 'Maintenance', dot: 'bg-blue-500' },
            { value: 'offline', label: 'Offline', dot: 'bg-gray-400' },
          ].map((status) => (
            <Label
              key={status.value}
              htmlFor={`status-${status.value}`}
              className="cursor-pointer"
            >
              <Pill
                variant="default"
                className="has-data-[state=checked]:variant-selected has-data-[state=checked]:border-primary"
              >
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

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use <code>sr-only</code> to hide the radio
        button visually while keeping it accessible. The Label handles clicks.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Creative Styling

Hide the radio button with \`sr-only\` and style the Label as the interactive element:

\`\`\`tsx
<Label className="has-data-[state=checked]:bg-primary ...">
  <RadioGroupItem className="sr-only" />
  {/* custom UI */}
</Label>
\`\`\`

**Use Cases:**
- Size/color pickers
- Visual preset selectors
- Status indicators
- Icon-based options
        `,
      },
    },
  },
};

// =============================================================================
// COMPLETE SHOWCASE
// =============================================================================

/**
 * ## Complete Showcase
 *
 * Real-world example showing radio groups in a Neura Robotics configuration panel.
 */
export const CompleteShowcase: Story = {
  render: function Render() {
    const [operatingMode, setOperatingMode] = React.useState('autonomous');
    const [speedPreset, setSpeedPreset] = React.useState('optimal');
    const [maintenanceWindow, setMaintenanceWindow] = React.useState('night');

    return (
      <div className="bg-card text-card-foreground w-[600px] space-y-6 rounded-lg border p-6 shadow-sm">
        <div>
          <h3 className="mb-2 text-lg font-semibold">
            MAiRA-001 Configuration
          </h3>
          <p className="text-muted-foreground text-sm">
            Configure robot behavior and operational parameters
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <Label className="mb-3 text-sm font-medium">Operating Mode</Label>
            <RadioGroup
              value={operatingMode}
              onValueChange={setOperatingMode}
              className="gap-3"
            >
              <div className="flex items-start space-x-3">
                <RadioGroupItem
                  value="autonomous"
                  id="mode-auto"
                  className="mt-1"
                />
                <div className="grid gap-1">
                  <Label htmlFor="mode-auto" className="font-medium">
                    <div className="flex items-center gap-2">
                      <Bot className="size-4" />
                      Autonomous
                    </div>
                  </Label>
                  <p className="text-muted-foreground text-sm">
                    Robot operates independently using AI navigation
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <RadioGroupItem
                  value="assisted"
                  id="mode-assist"
                  className="mt-1"
                />
                <div className="grid gap-1">
                  <Label htmlFor="mode-assist" className="font-medium">
                    <div className="flex items-center gap-2">
                      <Zap className="size-4" />
                      Assisted
                    </div>
                  </Label>
                  <p className="text-muted-foreground text-sm">
                    Human oversight with automatic safety interventions
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <RadioGroupItem
                  value="manual"
                  id="mode-manual"
                  className="mt-1"
                />
                <div className="grid gap-1">
                  <Label htmlFor="mode-manual" className="font-medium">
                    <div className="flex items-center gap-2">
                      <Gauge className="size-4" />
                      Manual Control
                    </div>
                  </Label>
                  <p className="text-muted-foreground text-sm">
                    Direct operator control via remote interface
                  </p>
                </div>
              </div>
            </RadioGroup>
          </div>

          <div className="border-t pt-6">
            <Label className="mb-3 text-sm font-medium">Speed Preset</Label>
            <RadioGroup
              value={speedPreset}
              onValueChange={setSpeedPreset}
              className="flex gap-2"
            >
              {['conservative', 'optimal', 'maximum'].map((preset) => (
                <Label
                  key={preset}
                  htmlFor={`preset-${preset}`}
                  className="border-input has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary has-data-[state=checked]:text-primary-foreground hover:bg-muted flex flex-1 cursor-pointer items-center justify-center rounded-lg border p-3 text-sm font-medium capitalize transition-colors"
                >
                  <RadioGroupItem
                    value={preset}
                    id={`preset-${preset}`}
                    className="sr-only"
                  />
                  {preset}
                </Label>
              ))}
            </RadioGroup>
          </div>

          <div className="border-t pt-6">
            <Label className="mb-3 text-sm font-medium">
              Maintenance Window
            </Label>
            <RadioGroup
              value={maintenanceWindow}
              onValueChange={setMaintenanceWindow}
              className="gap-2"
            >
              {[
                { value: 'night', label: 'Night (00:00 - 06:00)', icon: '🌙' },
                { value: 'weekend', label: 'Weekends Only', icon: '📅' },
                { value: 'scheduled', label: 'Custom Schedule', icon: '⏰' },
              ].map((option) => (
                <Label
                  key={option.value}
                  htmlFor={`maint-${option.value}`}
                  className="border-input flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors has-data-[state=checked]:border-green-500 has-data-[state=checked]:bg-green-50 dark:has-data-[state=checked]:bg-green-950/20"
                >
                  <RadioGroupItem
                    value={option.value}
                    id={`maint-${option.value}`}
                  />
                  <span className="text-xl">{option.icon}</span>
                  <span className="text-sm">{option.label}</span>
                </Label>
              ))}
            </RadioGroup>
          </div>

          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="mb-2 text-sm font-semibold">
              Current Configuration
            </h4>
            <dl className="text-muted-foreground grid gap-1 text-sm">
              <div className="flex justify-between">
                <dt>Operating Mode:</dt>
                <dd className="font-medium capitalize">{operatingMode}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Speed Preset:</dt>
                <dd className="font-medium capitalize">{speedPreset}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Maintenance Window:</dt>
                <dd className="font-medium capitalize">{maintenanceWindow}</dd>
              </div>
            </dl>
          </div>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 This showcase demonstrates radio groups with descriptions, visual
          presets, and card styles in a real configuration panel.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Real-World Configuration Panel

This example demonstrates:
- **Options with descriptions** for complex choices
- **Visual presets** for speed settings
- **Card-style selection** for maintenance windows
- **Controlled state** with React state management
- **Summary display** showing current selections

**UX Tips:**
- Group related radio options under clear headings
- Use descriptions to explain consequences
- Show current selection in a summary
- Provide visual feedback for selected state
- Use icons to improve scannability
        `,
      },
    },
  },
};

// =============================================================================
// ACCESSIBILITY
// =============================================================================

/**
 * ## Accessibility
 *
 * Radio groups follow WAI-ARIA Radio Group pattern for full keyboard and screen reader support.
 */
export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="mb-2 text-sm font-semibold">Accessibility Features</h4>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>
            ✓ <strong>Keyboard navigation</strong>: Tab to focus group, Arrow
            keys to navigate, Space to select
          </li>
          <li>
            ✓ <strong>Screen reader</strong>: Announced as radio group with
            proper roles
          </li>
          <li>
            ✓ <strong>Focus management</strong>: One radio in group is always
            focusable
          </li>
          <li>
            ✓ <strong>ARIA attributes</strong>: role="radiogroup", aria-checked,
            aria-disabled
          </li>
          <li>
            ✓ <strong>Labels</strong>: Always use Label with htmlFor for larger
            click areas
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Proper Label Association
        </h4>
        <RadioGroup defaultValue="good" className="gap-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="good" id="a11y-good" />
            <Label htmlFor="a11y-good">✓ With htmlFor (recommended)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="bad" id="a11y-bad" />
            <span className="text-sm">✗ Without Label (not recommended)</span>
          </div>
        </RadioGroup>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Error State with ARIA
        </h4>
        <div className="space-y-2">
          <Label className="text-base font-medium">
            Select deployment region
          </Label>
          <p
            id="region-error"
            className="text-destructive text-sm"
            role="alert"
          >
            Please select a region to continue
          </p>
        </div>
        <RadioGroup aria-describedby="region-error" className="mt-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="eu" id="region-eu" aria-invalid={true} />
            <Label htmlFor="region-eu">Europe</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="us" id="region-us" aria-invalid={true} />
            <Label htmlFor="region-us">United States</Label>
          </div>
        </RadioGroup>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use <code>aria-describedby</code> to link error
        messages. Always pair RadioGroupItem with Label using{' '}
        <code>htmlFor</code>.
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
<RadioGroupItem value="option" id="my-option" />
<Label htmlFor="my-option">Label text</Label>
\`\`\`

**Error Messages:**
\`\`\`tsx
<p id="error-msg" role="alert">Error text</p>
<RadioGroup aria-describedby="error-msg">
  <RadioGroupItem aria-invalid={true} />
</RadioGroup>
\`\`\`

**Keyboard Navigation:**
- **Tab**: Move focus to/from radio group
- **Arrow Up/Down**: Navigate between options (vertical)
- **Arrow Left/Right**: Navigate between options (horizontal)
- **Space**: Select focused option

**Testing:**
- Navigate with keyboard only
- Test with screen reader (NVDA, JAWS, VoiceOver)
- Verify all labels are announced
- Check focus indicators are visible
- Ensure error messages are read
        `,
      },
    },
  },
};
