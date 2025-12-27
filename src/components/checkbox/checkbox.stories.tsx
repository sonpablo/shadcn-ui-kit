import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';
import { Label } from '@/components/label/label';
import { Bot, Shield, Zap } from 'lucide-react';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A checkbox component for selecting one or multiple options.

## Features
- Controlled and uncontrolled modes
- Indeterminate state support
- Disabled state
- Error state with \`aria-invalid\`
- Accessible by default (keyboard navigation, screen reader support)

## States
- **Unchecked**: Default state
- **Checked**: User selected
- **Indeterminate**: Partial selection (e.g., "Select All" with some items)
- **Disabled**: Not interactive

## Common Patterns
- Single checkboxes for boolean options
- Checkbox groups for multiple selections
- "Select All" with indeterminate state
- Form validation with error states
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// BASIC EXAMPLES
// =============================================================================

/**
 * ## Default
 *
 * Basic checkbox without a label. Always pair with a label in production.
 */
export const Default: Story = {
  render: () => <Checkbox />,
};

// =============================================================================
// STATES
// =============================================================================

/**
 * ## States
 *
 * All available checkbox states including checked, unchecked, and disabled.
 */
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Interactive States
        </h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="unchecked" />
            <Label htmlFor="unchecked">Unchecked (default)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="checked" defaultChecked />
            <Label htmlFor="checked">Checked by default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="with-icon" defaultChecked />
            <Label htmlFor="with-icon" className="flex items-center gap-2">
              <Shield className="size-4" />
              With icon in label
            </Label>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Disabled States
        </h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled-unchecked" disabled />
            <Label
              htmlFor="disabled-unchecked"
              className="text-muted-foreground"
            >
              Disabled unchecked
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled-checked" disabled defaultChecked />
            <Label htmlFor="disabled-checked" className="text-muted-foreground">
              Disabled checked
            </Label>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Always pair checkboxes with labels using{' '}
        <code>htmlFor</code> for better accessibility and larger click areas.
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
 * Checkboxes with labels and helper text for additional context.
 */
export const WithDescription: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-start space-x-3">
        <Checkbox id="robot-monitoring" className="mt-1" defaultChecked />
        <div className="grid gap-1">
          <Label htmlFor="robot-monitoring" className="font-medium">
            <div className="flex items-center gap-2">
              <Bot className="size-4" />
              Enable Robot Monitoring
            </div>
          </Label>
          <p className="text-muted-foreground text-sm">
            Receive real-time alerts about robot status, battery levels, and
            task progress.
          </p>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <Checkbox id="security-alerts" className="mt-1" defaultChecked />
        <div className="grid gap-1">
          <Label htmlFor="security-alerts" className="font-medium">
            <div className="flex items-center gap-2">
              <Shield className="size-4" />
              Security Alerts
            </div>
          </Label>
          <p className="text-muted-foreground text-sm">
            Get notified about unauthorized access attempts and security events.
          </p>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <Checkbox id="performance-reports" className="mt-1" />
        <div className="grid gap-1">
          <Label htmlFor="performance-reports" className="font-medium">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              Performance Reports
            </div>
          </Label>
          <p className="text-muted-foreground text-sm">
            Weekly summaries of robot efficiency, uptime, and task completion
            rates.
          </p>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use <code>className="mt-1"</code> on the
        checkbox to align it with the first line of text when using
        descriptions.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// INDETERMINATE
// =============================================================================

/**
 * ## Indeterminate
 *
 * The indeterminate state represents partial selection, commonly used with "Select All" functionality.
 */
export const Indeterminate: Story = {
  render: function Render() {
    const [checked, setChecked] = React.useState<boolean | 'indeterminate'>(
      'indeterminate',
    );

    return (
      <div className="flex flex-col gap-4 p-4">
        <div className="bg-muted/50 rounded-md p-3">
          <p className="text-muted-foreground text-sm">
            Click the checkbox to cycle through states:
            <br />
            <code className="text-xs">indeterminate → checked → unchecked</code>
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="indeterminate"
            checked={checked}
            onCheckedChange={() => {
              if (checked === 'indeterminate') {
                setChecked(true);
              } else if (checked === true) {
                setChecked(false);
              } else {
                setChecked('indeterminate');
              }
            }}
          />
          <Label htmlFor="indeterminate">
            Current state: <strong>{String(checked)}</strong>
          </Label>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Use indeterminate state for "Select All"
          checkboxes when some (but not all) child items are selected.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Indeterminate State

The indeterminate state is neither checked nor unchecked. It's typically used to indicate:

- **Partial selection**: In a "Select All" checkbox when some items are selected
- **Mixed state**: When child checkboxes have different values

**Implementation:**
\`\`\`tsx
<Checkbox checked="indeterminate" />
// or
<Checkbox checked={someSelected ? 'indeterminate' : allSelected} />
\`\`\`
        `,
      },
    },
  },
};

// =============================================================================
// ERROR STATE
// =============================================================================

/**
 * ## Error State
 *
 * Error validation for required checkboxes (e.g., terms and conditions).
 */
export const ErrorState: Story = {
  render: function Render() {
    const [hasError, setHasError] = React.useState(true);
    const [accepted, setAccepted] = React.useState(false);

    return (
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="toggle-error"
            checked={hasError}
            onCheckedChange={(checked) => setHasError(checked as boolean)}
          />
          <Label htmlFor="toggle-error">Toggle error state</Label>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="terms-error"
              checked={accepted}
              onCheckedChange={(checked) => setAccepted(checked as boolean)}
              aria-invalid={hasError}
              aria-describedby={hasError ? 'terms-error-message' : undefined}
              className="mt-1"
            />
            <div className="grid gap-1">
              <Label
                htmlFor="terms-error"
                className={hasError ? 'text-destructive' : ''}
              >
                I accept the Robot Safety Guidelines and Terms of Service
              </Label>
              {hasError && (
                <p
                  id="terms-error-message"
                  className="text-destructive text-sm"
                  role="alert"
                >
                  You must accept the terms to deploy robots.
                </p>
              )}
            </div>
          </div>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Use <code>aria-invalid</code> and{' '}
          <code>aria-describedby</code> to link error messages for screen
          readers.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Error State Best Practices

**Accessibility:**
- Use \`aria-invalid={true}\` on error
- Link error message with \`aria-describedby\`
- Add \`role="alert"\` to error message for dynamic announcements
- Apply \`text-destructive\` class to label when showing error

**UX:**
- Show error message below the checkbox
- Clear, actionable error text
- Don't disable submit button, show validation errors instead
        `,
      },
    },
  },
};

// =============================================================================
// SELECT ALL
// =============================================================================

/**
 * ## Select All
 *
 * Common pattern for selecting/deselecting multiple items with indeterminate state.
 */
export const SelectAll: Story = {
  render: function Render() {
    const robots = ['MAiRA-001', 'LARA-003', '4NE1-002', 'MAV-001', 'MiPA-001'];
    const [selected, setSelected] = React.useState<string[]>([
      'MAiRA-001',
      'LARA-003',
    ]);

    const allSelected = selected.length === robots.length;
    const someSelected = selected.length > 0 && selected.length < robots.length;

    const toggleAll = () => {
      setSelected(allSelected ? [] : [...robots]);
    };

    const toggleRobot = (robot: string) => {
      setSelected((prev) =>
        prev.includes(robot)
          ? prev.filter((r) => r !== robot)
          : [...prev, robot],
      );
    };

    return (
      <div className="w-[300px] space-y-4 p-4">
        <div className="border-b pb-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="select-all"
              checked={someSelected ? 'indeterminate' : allSelected}
              onCheckedChange={toggleAll}
            />
            <Label htmlFor="select-all" className="font-medium">
              <div className="flex items-center gap-2">
                <Bot className="size-4" />
                Select all robots ({selected.length}/{robots.length})
              </div>
            </Label>
          </div>
        </div>

        <div className="space-y-2">
          {robots.map((robot) => (
            <div key={robot} className="flex items-center space-x-2">
              <Checkbox
                id={robot}
                checked={selected.includes(robot)}
                onCheckedChange={() => toggleRobot(robot)}
              />
              <Label htmlFor={robot}>{robot}</Label>
            </div>
          ))}
        </div>

        {selected.length > 0 && (
          <div className="bg-primary/10 border-primary rounded-md border p-3">
            <p className="text-sm">
              <strong>{selected.length}</strong> robot(s) selected for
              deployment
            </p>
          </div>
        )}

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> The parent checkbox shows indeterminate when
          some (but not all) items are selected.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Select All Pattern

**Logic:**
\`\`\`tsx
const allSelected = selected.length === items.length;
const someSelected = selected.length > 0 && selected.length < items.length;

<Checkbox
  checked={someSelected ? 'indeterminate' : allSelected}
  onCheckedChange={() => {
    setSelected(allSelected ? [] : [...items]);
  }}
/>
\`\`\`

**UX:**
- Show count of selected items
- Use indeterminate state for partial selection
- Provide visual feedback for selected state
        `,
      },
    },
  },
};

// =============================================================================
// CONTROLLED
// =============================================================================

/**
 * ## Controlled
 *
 * Checkbox with controlled state for programmatic control.
 */
export const Controlled: Story = {
  render: function Render() {
    const [checked, setChecked] = React.useState(false);

    return (
      <div className="flex flex-col gap-4 p-4">
        <div className="bg-muted/50 rounded-lg p-4">
          <p className="text-muted-foreground text-sm">
            Checkbox state: <strong>{checked ? 'checked' : 'unchecked'}</strong>
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="controlled"
            checked={checked}
            onCheckedChange={(value) => setChecked(value as boolean)}
          />
          <Label htmlFor="controlled">Enable auto-deployment</Label>
        </div>

        <button
          onClick={() => setChecked(!checked)}
          className="bg-primary text-primary-foreground hover:bg-primary/90 w-fit rounded-md px-3 py-1.5 text-sm"
        >
          Toggle externally
        </button>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Use controlled state when you need to
          validate, transform, or react to checkbox changes in your component
          logic.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Controlled vs Uncontrolled

**Controlled (recommended for forms):**
\`\`\`tsx
const [checked, setChecked] = useState(false);

<Checkbox
  checked={checked}
  onCheckedChange={setChecked}
/>
\`\`\`

**Uncontrolled (simpler for static forms):**
\`\`\`tsx
<Checkbox defaultChecked />
\`\`\`

Use controlled when you need to:
- Validate input before updating state
- Transform the value
- Submit to an API
- Integrate with form libraries (React Hook Form, Formik)
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
 * Real-world examples showing checkboxes in various Neura Robotics contexts.
 */
export const CompleteShowcase: Story = {
  render: function Render() {
    const [selectedPlans, setSelectedPlans] = React.useState<string[]>([
      'basic-monitoring',
    ]);
    const [notifications, setNotifications] = React.useState({
      email: true,
      push: true,
      sms: false,
    });

    const togglePlan = (planId: string) => {
      setSelectedPlans((prev) =>
        prev.includes(planId)
          ? prev.filter((p) => p !== planId)
          : [...prev, planId],
      );
    };

    const plans = [
      {
        id: 'basic-monitoring',
        name: 'Basic Monitoring',
        price: 'Free',
        description: 'Essential robot status and alerts',
        icon: Bot,
      },
      {
        id: 'advanced-analytics',
        name: 'Advanced Analytics',
        price: '$29/mo',
        description: 'Detailed performance insights',
        icon: Zap,
      },
      {
        id: 'enterprise-security',
        name: 'Enterprise Security',
        price: '$99/mo',
        description: 'Advanced security and compliance',
        icon: Shield,
      },
    ];

    return (
      <div className="w-[500px] space-y-6 p-4">
        <div>
          <h3 className="mb-4 text-lg font-semibold">Service Plans</h3>
          <div className="space-y-3">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <label
                  key={plan.id}
                  htmlFor={plan.id}
                  className={`flex cursor-pointer items-start space-x-3 rounded-lg border p-4 transition-colors ${
                    selectedPlans.includes(plan.id)
                      ? 'border-primary bg-primary/5'
                      : 'border-input hover:bg-muted/50'
                  }`}
                >
                  <Checkbox
                    id={plan.id}
                    checked={selectedPlans.includes(plan.id)}
                    onCheckedChange={() => togglePlan(plan.id)}
                    className="mt-0.5"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 font-medium">
                        <Icon className="size-4" />
                        {plan.name}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {plan.description}
                    </p>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="mb-4 text-lg font-semibold">Notification Settings</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="notif-email"
                checked={notifications.email}
                onCheckedChange={(checked) =>
                  setNotifications((prev) => ({
                    ...prev,
                    email: checked as boolean,
                  }))
                }
                className="mt-1"
              />
              <div className="grid gap-1">
                <Label htmlFor="notif-email" className="font-medium">
                  Email Notifications
                </Label>
                <p className="text-muted-foreground text-sm">
                  Receive alerts via email about robot status and tasks
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="notif-push"
                checked={notifications.push}
                onCheckedChange={(checked) =>
                  setNotifications((prev) => ({
                    ...prev,
                    push: checked as boolean,
                  }))
                }
                className="mt-1"
              />
              <div className="grid gap-1">
                <Label htmlFor="notif-push" className="font-medium">
                  Push Notifications
                </Label>
                <p className="text-muted-foreground text-sm">
                  Get instant mobile alerts for critical events
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="notif-sms"
                checked={notifications.sms}
                onCheckedChange={(checked) =>
                  setNotifications((prev) => ({
                    ...prev,
                    sms: checked as boolean,
                  }))
                }
                className="mt-1"
              />
              <div className="grid gap-1">
                <Label htmlFor="notif-sms" className="font-medium">
                  SMS Notifications
                </Label>
                <p className="text-muted-foreground text-sm">
                  Emergency alerts sent via text message
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 rounded-md p-3 text-xs">
          <p className="text-muted-foreground">
            💡 This showcase demonstrates checkboxes in card selection and
            settings contexts with Neura-specific data.
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Real-World Patterns

This showcase demonstrates:
- **Card-based selection** with visual feedback
- **Settings panels** with descriptions
- **Interactive state** with controlled checkboxes
- **Grouped checkboxes** for related options
- **Icons and labels** for visual hierarchy

**UX Tips:**
- Make entire card clickable for better usability
- Show visual feedback for selected state
- Group related checkboxes under headings
- Use descriptions to clarify consequences
        `,
      },
    },
  },
};
