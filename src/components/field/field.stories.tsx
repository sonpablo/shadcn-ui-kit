import type { Meta, StoryObj } from '@storybook/react';
import {
  Field,
  FieldSet,
  FieldLegend,
  FieldGroup,
  FieldContent,
  FieldLabel,
  FieldTitle,
  FieldDescription,
  FieldSeparator,
  FieldError,
  FieldControl,
} from './field';
import { Input } from '@/components/input/input';
import { Textarea } from '@/components/textarea/textarea';
import { Checkbox } from '@/components/checkbox/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select/select';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/radio-group/radio-group';
import { Label } from '@/components/label/label';
import { Button } from '@/components/button/button';

const meta = {
  title: 'Components/Field',
  component: Field,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A flexible field component for building accessible forms with labels, descriptions, and errors.

## Features
- Composable parts (Label, Description, Error, Content, Control)
- Support for all form controls (input, select, textarea, checkbox, radio)
- Error states with single or multiple messages
- Optional field indicators
- Horizontal and vertical layouts
- Field groups and fieldsets
- Responsive layouts

## Common Use Cases
- Form fields with labels and descriptions
- Error message display
- Grouped form fields
- Checkbox and radio selections
- Complex form layouts

## Composition
- **Field**: Container for a single form field
- **FieldLabel**: Label with optional indicator
- **FieldDescription**: Helper text
- **FieldError**: Error message(s)
- **FieldContent**: Content wrapper (for checkboxes/radios)
- **FieldControl**: Control wrapper (advanced)
- **FieldGroup**: Group multiple fields
- **FieldSet**: Semantic fieldset wrapper
- **FieldLegend**: Fieldset legend
- **FieldSeparator**: Visual separator between fields
- **FieldTitle**: Title for card-style fields
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof Field>;

// =============================================================================
// BASIC EXAMPLES
// =============================================================================

/**
 * ## Default
 *
 * Basic field usage with label, input, and description.
 */
export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Basic Field
        </h4>
        <Field className="w-[350px]">
          <FieldLabel htmlFor="operator-email">Operator Email</FieldLabel>
          <Input
            id="operator-email"
            type="email"
            placeholder="operator@neura.com"
          />
          <FieldDescription>
            Official email for system notifications.
          </FieldDescription>
        </Field>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Optional Field
        </h4>
        <Field className="w-[350px]">
          <FieldLabel htmlFor="phone" optional>
            Phone Number
          </FieldLabel>
          <Input id="phone" type="tel" placeholder="+49 123 456789" />
          <FieldDescription>For emergency contact only.</FieldDescription>
        </Field>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use <code>optional</code> prop on FieldLabel to
        indicate non-required fields.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// COMPOSITION
// =============================================================================

/**
 * ## Composition
 *
 * Understanding Field anatomy and composable parts.
 */
export const Composition: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="mb-2 text-sm font-semibold">Field Anatomy</h4>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>
            • <strong>FieldLabel</strong>: Label with htmlFor association
          </li>
          <li>
            • <strong>FieldDescription</strong>: Helper text below the control
          </li>
          <li>
            • <strong>FieldError</strong>: Error message(s) display
          </li>
          <li>
            • <strong>FieldContent</strong>: Content wrapper for checkbox/radio
            layouts
          </li>
          <li>
            • <strong>FieldControl</strong>: Control wrapper for advanced
            styling
          </li>
          <li>
            • <strong>FieldGroup</strong>: Group multiple fields together
          </li>
          <li>
            • <strong>FieldSet</strong>: Semantic fieldset with legend
          </li>
        </ul>
      </div>

      <Field className="w-[350px]">
        <FieldLabel htmlFor="demo-field">Robot ID</FieldLabel>
        <FieldControl>
          <Input id="demo-field" placeholder="MAiRA-001" />
        </FieldControl>
        <FieldDescription>
          Unique identifier for the robot unit.
        </FieldDescription>
      </Field>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> All parts are optional. Use only what you need
        for your use case.
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
 * Different field states: disabled, error (single and multiple).
 */
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Disabled
        </h4>
        <Field className="w-[350px]" data-disabled="true">
          <FieldLabel htmlFor="disabled-input">Robot Status</FieldLabel>
          <Input id="disabled-input" disabled value="Read-only value" />
          <FieldDescription>This field cannot be edited.</FieldDescription>
        </Field>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Single Error
        </h4>
        <Field className="w-[350px]" data-invalid="true">
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input
            id="username"
            placeholder="johndoe"
            defaultValue="a"
            aria-invalid="true"
          />
          <FieldError errors="Username must be at least 3 characters." />
        </Field>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Multiple Errors
        </h4>
        <Field className="w-[350px]" data-invalid="true">
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" type="password" aria-invalid="true" />
          <FieldError
            errors={[
              'Password must be at least 8 characters.',
              'Password must contain at least one uppercase letter.',
              'Password must contain at least one number.',
            ]}
          />
        </Field>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use <code>data-invalid</code> on Field and{' '}
        <code>aria-invalid</code> on inputs for proper error styling and
        accessibility.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// WITH CONTROLS
// =============================================================================

/**
 * ## With Controls
 *
 * Field with different form controls: input, textarea, select, checkbox, radio.
 */
export const WithControls: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          With Input
        </h4>
        <Field className="w-[350px]">
          <FieldLabel htmlFor="robot-name">Robot Name</FieldLabel>
          <Input id="robot-name" placeholder="MAiRA-001" />
          <FieldDescription>Friendly name for the robot unit.</FieldDescription>
        </Field>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          With Textarea
        </h4>
        <Field className="w-[350px]">
          <FieldLabel htmlFor="notes">Deployment Notes</FieldLabel>
          <Textarea
            id="notes"
            placeholder="Add any special instructions..."
            className="min-h-[100px]"
          />
          <FieldDescription>
            Optional notes for operators. Max 500 characters.
          </FieldDescription>
        </Field>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          With Select
        </h4>
        <Field className="w-[350px]">
          <FieldLabel htmlFor="location">Facility Location</FieldLabel>
          <Select>
            <SelectTrigger id="location">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="munich-a">Munich Plant A</SelectItem>
              <SelectItem value="stuttgart">Stuttgart Factory</SelectItem>
              <SelectItem value="berlin">Berlin Warehouse</SelectItem>
              <SelectItem value="hamburg">
                Hamburg Distribution Center
              </SelectItem>
            </SelectContent>
          </Select>
          <FieldDescription>
            Primary deployment location for this robot.
          </FieldDescription>
        </Field>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Checkbox Field
        </h4>
        <Field className="w-[350px] flex-row items-start gap-3">
          <Checkbox id="auto-deploy" />
          <FieldContent className="gap-1">
            <FieldLabel htmlFor="auto-deploy" className="cursor-pointer">
              Enable auto-deployment
            </FieldLabel>
            <FieldDescription>
              Automatically deploy updates when available.
            </FieldDescription>
          </FieldContent>
        </Field>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Radio Group Field
        </h4>
        <Field className="w-[350px]">
          <FieldLabel>Notification Preferences</FieldLabel>
          <RadioGroup defaultValue="email" className="mt-2">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="email" id="notify-email" />
              <Label htmlFor="notify-email">Email</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="sms" id="notify-sms" />
              <Label htmlFor="notify-sms">SMS</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="push" id="notify-push" />
              <Label htmlFor="notify-push">Push notifications</Label>
            </div>
          </RadioGroup>
          <FieldDescription>
            Choose how you'd like to receive system alerts.
          </FieldDescription>
        </Field>
      </div>
    </div>
  ),
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
 * Different field layouts: horizontal, vertical, responsive grid.
 */
export const Layouts: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Horizontal Layout
        </h4>
        <Field className="w-[500px] grid-cols-[150px_1fr] items-center">
          <FieldLabel htmlFor="horizontal-email">Email</FieldLabel>
          <Input
            id="horizontal-email"
            type="email"
            placeholder="operator@neura.com"
          />
        </Field>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Responsive Two-Column Grid
        </h4>
        <FieldSet className="w-[600px]">
          <FieldLegend>Robot Deployment Details</FieldLegend>
          <FieldGroup className="grid-cols-1 sm:grid-cols-2">
            <Field className="sm:col-span-2">
              <FieldLabel htmlFor="facility">Facility Address</FieldLabel>
              <Input id="facility" placeholder="123 Industry St" />
            </Field>
            <Field>
              <FieldLabel htmlFor="city">City</FieldLabel>
              <Input id="city" placeholder="Munich" />
            </Field>
            <Field>
              <FieldLabel htmlFor="state">State/Region</FieldLabel>
              <Input id="state" placeholder="Bavaria" />
            </Field>
            <Field>
              <FieldLabel htmlFor="zip">Postal Code</FieldLabel>
              <Input id="zip" placeholder="80331" />
            </Field>
            <Field>
              <FieldLabel htmlFor="country-ship">Country</FieldLabel>
              <Select>
                <SelectTrigger id="country-ship">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="de">Germany</SelectItem>
                  <SelectItem value="at">Austria</SelectItem>
                  <SelectItem value="ch">Switzerland</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use <code>grid-cols-[150px_1fr]</code> for
        horizontal layouts and responsive classes for adaptive grids.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// GROUPS & SETS
// =============================================================================

/**
 * ## Groups & Sets
 *
 * Grouping multiple fields with FieldGroup and FieldSet.
 */
export const GroupsAndSets: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Field Group
        </h4>
        <FieldGroup className="w-[350px]">
          <Field>
            <FieldLabel htmlFor="first-name">First Name</FieldLabel>
            <Input id="first-name" placeholder="John" />
          </Field>
          <Field>
            <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
            <Input id="last-name" placeholder="Doe" />
          </Field>
          <Field>
            <FieldLabel htmlFor="email-group">Email</FieldLabel>
            <Input
              id="email-group"
              type="email"
              placeholder="john.doe@neura.com"
            />
          </Field>
        </FieldGroup>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          FieldSet with Legend
        </h4>
        <FieldSet className="w-[400px]">
          <FieldLegend>Operator Information</FieldLegend>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="full-name">Full Name</FieldLabel>
              <Input id="full-name" placeholder="John Doe" />
            </Field>
            <Field>
              <FieldLabel htmlFor="email-set">Email</FieldLabel>
              <Input
                id="email-set"
                type="email"
                placeholder="john.doe@neura.com"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="hire-date">Hire Date</FieldLabel>
              <Input id="hire-date" type="date" />
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          With Separator
        </h4>
        <FieldGroup className="w-[350px]">
          <Field>
            <FieldLabel htmlFor="current-password">Current Password</FieldLabel>
            <Input id="current-password" type="password" />
          </Field>
          <FieldSeparator />
          <Field>
            <FieldLabel htmlFor="new-password">New Password</FieldLabel>
            <Input id="new-password" type="password" />
            <FieldDescription>At least 8 characters.</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
            <Input id="confirm-password" type="password" />
          </Field>
        </FieldGroup>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use FieldSet for semantic grouping and
        FieldSeparator to visually divide related sections.
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
 * Real-world example: Robot deployment configuration form with various field types.
 */
export const CompleteShowcase: Story = {
  render: () => (
    <div className="bg-card text-card-foreground w-[700px] space-y-6 rounded-lg border p-6 shadow-sm">
      <div>
        <h3 className="mb-2 text-lg font-semibold">
          Robot Deployment Configuration
        </h3>
        <p className="text-muted-foreground text-sm">
          Configure robot settings and deployment parameters
        </p>
      </div>

      <FieldSet>
        <FieldLegend>Basic Information</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="robot-id">Robot ID</FieldLabel>
            <Input id="robot-id" placeholder="MAiRA-001" />
            <FieldDescription>
              Unique identifier for the robot unit.
            </FieldDescription>
          </Field>

          <Field>
            <FieldLabel htmlFor="operator-name">Primary Operator</FieldLabel>
            <Input id="operator-name" placeholder="John Doe" />
          </Field>

          <Field>
            <FieldLabel htmlFor="location-select">
              Deployment Location
            </FieldLabel>
            <Select>
              <SelectTrigger id="location-select">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="munich-a">Munich Plant A</SelectItem>
                <SelectItem value="stuttgart">Stuttgart Factory</SelectItem>
                <SelectItem value="berlin">Berlin Warehouse</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </FieldGroup>
      </FieldSet>

      <FieldSet>
        <FieldLegend>Operational Settings</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="max-speed">Max Speed (km/h)</FieldLabel>
            <Input id="max-speed" type="number" placeholder="5.0" />
            <FieldDescription>
              Maximum operational speed for safety compliance.
            </FieldDescription>
          </Field>

          <Field>
            <FieldLabel>Operating Mode</FieldLabel>
            <RadioGroup defaultValue="autonomous" className="mt-2">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="autonomous" id="mode-auto" />
                <Label htmlFor="mode-auto">Autonomous</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="assisted" id="mode-assisted" />
                <Label htmlFor="mode-assisted">Operator Assisted</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="manual" id="mode-manual" />
                <Label htmlFor="mode-manual">Manual Control</Label>
              </div>
            </RadioGroup>
          </Field>

          <Field className="flex-row items-start gap-3">
            <Checkbox id="collision-avoidance" defaultChecked />
            <FieldContent className="gap-1">
              <FieldLabel
                htmlFor="collision-avoidance"
                className="cursor-pointer"
              >
                Enable collision avoidance
              </FieldLabel>
              <FieldDescription>
                Automatically stop when obstacles detected.
              </FieldDescription>
            </FieldContent>
          </Field>

          <Field className="flex-row items-start gap-3">
            <Checkbox id="auto-charging" defaultChecked />
            <FieldContent className="gap-1">
              <FieldLabel htmlFor="auto-charging" className="cursor-pointer">
                Auto-return for charging
              </FieldLabel>
              <FieldDescription>
                Return to charging station at 20% battery.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldGroup>
      </FieldSet>

      <FieldSet>
        <FieldLegend>Select Deployment Plan</FieldLegend>
        <FieldGroup>
          {[
            {
              id: 'plan-basic',
              title: 'Basic',
              description: 'Standard features for routine operations',
            },
            {
              id: 'plan-advanced',
              title: 'Advanced',
              description: 'Enhanced features with AI-powered optimization',
            },
            {
              id: 'plan-custom',
              title: 'Custom',
              description: 'Tailored configuration for specific requirements',
            },
          ].map((plan) => (
            <Field
              key={plan.id}
              className="has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 flex-row items-start gap-3 rounded-lg border p-4"
            >
              <Checkbox id={plan.id} />
              <FieldContent className="gap-0.5">
                <FieldTitle>{plan.title}</FieldTitle>
                <FieldDescription>{plan.description}</FieldDescription>
              </FieldContent>
            </Field>
          ))}
        </FieldGroup>
      </FieldSet>

      <div className="flex justify-end gap-3 border-t pt-6">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy Robot</Button>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 This form demonstrates various field types, layouts, and compositions
        for a robot deployment configuration.
      </p>
    </div>
  ),
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
 * Field components follow accessibility best practices for forms.
 */
export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="mb-2 text-sm font-semibold">Accessibility Features</h4>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>
            ✓ <strong>Label association</strong>: FieldLabel uses{' '}
            <code>htmlFor</code> for proper association
          </li>
          <li>
            ✓ <strong>Error states</strong>: Use <code>data-invalid</code> and{' '}
            <code>aria-invalid</code>
          </li>
          <li>
            ✓ <strong>Descriptions</strong>: Use <code>aria-describedby</code>{' '}
            for error/helper text
          </li>
          <li>
            ✓ <strong>Semantic HTML</strong>: FieldSet uses native{' '}
            <code>{'<fieldset>'}</code> and <code>{'<legend>'}</code>
          </li>
          <li>
            ✓ <strong>Optional fields</strong>: Clear visual indicator with{' '}
            <code>optional</code> prop
          </li>
          <li>
            ✓ <strong>Keyboard navigation</strong>: All controls are keyboard
            accessible
          </li>
        </ul>
      </div>

      <div className="w-[350px] space-y-6">
        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Proper Label Association
          </h4>
          <Field>
            <FieldLabel htmlFor="accessible-email">Email</FieldLabel>
            <Input
              id="accessible-email"
              type="email"
              placeholder="operator@neura.com"
            />
            <FieldDescription>
              Your official work email address.
            </FieldDescription>
          </Field>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Error State with ARIA
          </h4>
          <Field data-invalid="true">
            <FieldLabel htmlFor="error-field">Username</FieldLabel>
            <Input
              id="error-field"
              aria-invalid="true"
              aria-describedby="error-field-message"
              defaultValue="ab"
            />
            <FieldError
              id="error-field-message"
              errors="Username must be at least 3 characters."
            />
          </Field>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Fieldset with Legend
          </h4>
          <FieldSet>
            <FieldLegend>Contact Information</FieldLegend>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="contact-name">Name</FieldLabel>
                <Input id="contact-name" />
              </Field>
              <Field>
                <FieldLabel htmlFor="contact-email">Email</FieldLabel>
                <Input id="contact-email" type="email" />
              </Field>
            </FieldGroup>
          </FieldSet>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Always associate labels with inputs using{' '}
        <code>htmlFor</code>, provide error messages with{' '}
        <code>aria-describedby</code>, and use semantic HTML for groups.
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
<FieldLabel htmlFor="robot-id">Robot ID</FieldLabel>
<Input id="robot-id" />
\`\`\`

**Error Handling:**
\`\`\`tsx
<Field data-invalid="true">
  <FieldLabel htmlFor="field">Label</FieldLabel>
  <Input 
    id="field"
    aria-invalid="true" 
    aria-describedby="field-error"
  />
  <FieldError id="field-error" errors="Error message" />
</Field>
\`\`\`

**Fieldset Grouping:**
\`\`\`tsx
<FieldSet>
  <FieldLegend>Group Title</FieldLegend>
  <FieldGroup>
    {/* fields */}
  </FieldGroup>
</FieldSet>
\`\`\`

**Testing:**
- Test keyboard navigation (Tab, Shift+Tab)
- Verify screen reader announces labels, descriptions, errors
- Ensure error messages are linked with aria-describedby
- Check focus indicators are visible
        `,
      },
    },
  },
};
