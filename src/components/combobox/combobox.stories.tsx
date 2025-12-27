import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Combobox } from './combobox';
import { Label } from '@/components/label/label';
import { Button } from '@/components/button/button';

const meta = {
  title: 'Components/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A searchable combobox component for selecting from a list of options with filtering.

## Features
- Search/filter functionality
- Keyboard navigation
- Three sizes (sm, default, lg)
- Disabled items support
- Empty state message
- Controlled and uncontrolled
- Error states

## When to Use
- **Long lists** (> 10 items): Searchability is essential
- **Unknown options**: Users need to search/discover
- **Faster selection**: Type to filter quickly

## Common Use Cases
- Robot selection from large fleet
- Location search
- User/operator search
- Project search
- Any searchable dropdown

## vs Select
Use **Combobox** for long, searchable lists.  
Use **Select** for short, simple dropdowns.
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data - NEURA Robot Fleet Management Context
const robotOptions = [
  { value: 'maira-001', label: 'MAiRA-001' },
  { value: 'maira-002', label: 'MAiRA-002' },
  { value: 'lara-001', label: 'LARA-001' },
  { value: 'lara-003', label: 'LARA-003' },
  { value: '4ne1-001', label: '4NE1-001' },
  { value: '4ne1-002', label: '4NE1-002' },
  { value: 'mav-001', label: 'MAV-001' },
  { value: 'mipa-001', label: 'MiPA-001' },
  { value: 'sentinel-001', label: 'Sentinel-001' },
  { value: 'guardian-001', label: 'Guardian-001' },
];

const fleetOptions = [
  { value: 'munich-a', label: 'Munich Plant A' },
  { value: 'stuttgart', label: 'Stuttgart Factory' },
  { value: 'berlin', label: 'Berlin Warehouse' },
  { value: 'hamburg', label: 'Hamburg Distribution Center' },
  { value: 'frankfurt', label: 'Frankfurt Assembly Line' },
];

const projectOptions = [
  { value: 'automation-2024', label: 'Automation Initiative 2024' },
  { value: 'quality-control', label: 'Quality Control System' },
  { value: 'warehouse-opt', label: 'Warehouse Optimization' },
  { value: 'predictive-maint', label: 'Predictive Maintenance' },
  { value: 'fleet-expansion', label: 'Fleet Expansion Q1' },
  { value: 'safety-upgrade', label: 'Safety Systems Upgrade' },
];

// =============================================================================
// BASIC EXAMPLES
// =============================================================================

/**
 * ## Default
 *
 * Basic combobox with search functionality.
 */
export const Default: Story = {
  args: { items: [] },
  render: function DefaultExample() {
    const [value, setValue] = React.useState('');

    return (
      <div className="flex flex-col gap-6 p-4">
        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Basic Usage
          </h4>
          <Combobox
            items={robotOptions}
            value={value}
            onValueChange={setValue}
            placeholder="Select robot..."
            searchPlaceholder="Search robots..."
            emptyMessage="No robot found."
            className="w-[300px]"
          />
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            With Label
          </h4>
          <div className="space-y-2">
            <Label htmlFor="robot-combo">Robot Unit</Label>
            <Combobox
              items={robotOptions}
              placeholder="Select robot..."
              searchPlaceholder="Search robots..."
              className="w-[300px]"
            />
          </div>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Combobox is ideal for lists with 10+ items
          where users benefit from search.
        </p>
      </div>
    );
  },
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
  args: { items: [] },
  render: function SizesExample() {
    return (
      <div className="flex flex-col gap-6 p-4">
        <div className="space-y-2">
          <Label className="text-muted-foreground text-xs">
            Size: sm (h-8 / 32px)
          </Label>
          <Combobox
            items={robotOptions.slice(0, 5)}
            placeholder="Select robot..."
            searchPlaceholder="Search..."
            size="sm"
            className="w-[250px]"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-muted-foreground text-xs">
            Size: default (h-9 / 36px)
          </Label>
          <Combobox
            items={robotOptions.slice(0, 5)}
            placeholder="Select robot..."
            searchPlaceholder="Search..."
            className="w-[250px]"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-muted-foreground text-xs">
            Size: lg (h-10 / 40px)
          </Label>
          <Combobox
            items={robotOptions.slice(0, 5)}
            placeholder="Select robot..."
            searchPlaceholder="Search..."
            size="lg"
            className="w-[250px]"
          />
        </div>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Use <code>size</code> prop to match input
          heights in forms.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// FEATURES
// =============================================================================

/**
 * ## Features
 *
 * Combobox with disabled items and full width.
 */
export const Features: Story = {
  args: { items: [] },
  render: function FeaturesExample() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');

    const robotsWithDisabled = [
      { value: 'maira-001', label: 'MAiRA-001' },
      { value: 'maira-002', label: 'MAiRA-002 (Maintenance)', disabled: true },
      { value: 'lara-001', label: 'LARA-001' },
      { value: 'lara-003', label: 'LARA-003 (Offline)', disabled: true },
      { value: '4ne1-001', label: '4NE1-001' },
    ];

    return (
      <div className="flex flex-col gap-8 p-4">
        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            With Disabled Items
          </h4>
          <div className="space-y-2">
            <Label>Robot Selection</Label>
            <Combobox
              items={robotsWithDisabled}
              value={value1}
              onValueChange={setValue1}
              placeholder="Select robot..."
              searchPlaceholder="Search robots..."
              className="w-[300px]"
            />
            <p className="text-muted-foreground text-xs">
              Robots in maintenance or offline are disabled
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Full Width
          </h4>
          <div className="space-y-2">
            <Label>Project Assignment</Label>
            <Combobox
              items={projectOptions}
              value={value2}
              onValueChange={setValue2}
              placeholder="Select project..."
              searchPlaceholder="Search projects..."
              className="w-full"
            />
          </div>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Use <code>disabled</code> property on items
          to prevent selection of unavailable options.
        </p>
      </div>
    );
  },
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
 * Disabled and error states.
 */
export const States: Story = {
  args: { items: [] },
  render: function StatesExample() {
    const [hasError, setHasError] = React.useState(true);
    const [value, setValue] = React.useState('');

    return (
      <div className="flex flex-col gap-8 p-4">
        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Disabled
          </h4>
          <div className="space-y-2">
            <Label>Robot Selection</Label>
            <Combobox
              items={robotOptions.slice(0, 5)}
              placeholder="Select robot..."
              disabled
              className="w-[300px]"
            />
          </div>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Error State
          </h4>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="toggle-error"
                checked={hasError}
                onChange={(e) => setHasError(e.target.checked)}
                className="size-4"
              />
              <Label htmlFor="toggle-error">Show error state</Label>
            </div>
            <div className="border-t pt-4">
              <div className="space-y-2">
                <Label
                  htmlFor="robot"
                  className={hasError ? 'text-destructive' : ''}
                >
                  Robot Unit
                </Label>
                <Combobox
                  items={robotOptions}
                  value={value}
                  onValueChange={setValue}
                  placeholder="Select robot..."
                  searchPlaceholder="Search robots..."
                  aria-invalid={hasError}
                  className="w-[300px]"
                />
                {hasError && (
                  <p className="text-destructive text-sm">
                    Please select a robot unit.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Use <code>aria-invalid</code> for error
          states and provide clear error messages.
        </p>
      </div>
    );
  },
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
 * Controlled combobox with external state management.
 */
export const Controlled: Story = {
  args: { items: [] },
  render: function ControlledExample() {
    const [value, setValue] = React.useState('maira-001');

    return (
      <div className="flex flex-col gap-4 p-4">
        <Combobox
          items={robotOptions}
          value={value}
          onValueChange={setValue}
          placeholder="Select robot..."
          searchPlaceholder="Search robots..."
          className="w-[300px]"
        />

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setValue('maira-001')}
          >
            Set MAiRA-001
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setValue('lara-001')}
          >
            Set LARA-001
          </Button>
          <Button variant="outline" size="sm" onClick={() => setValue('')}>
            Clear
          </Button>
        </div>

        <p className="text-muted-foreground text-sm">
          Selected: <strong>{value || 'None'}</strong>
        </p>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Use controlled mode for complex form logic or
          validation requirements.
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
 * Real-world example: Robot task assignment form with multiple comboboxes.
 */
export const CompleteShowcase: Story = {
  args: { items: [] },
  render: function CompleteShowcaseExample() {
    const [robot, setRobot] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [project, setProject] = React.useState('');

    return (
      <div className="bg-card text-card-foreground w-[500px] space-y-6 rounded-lg border p-6 shadow-sm">
        <div>
          <h3 className="mb-2 text-lg font-semibold">Robot Task Assignment</h3>
          <p className="text-muted-foreground text-sm">
            Assign a robot to a project at a specific location
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="showcase-robot">Select Robot</Label>
            <Combobox
              items={robotOptions}
              value={robot}
              onValueChange={setRobot}
              placeholder="Search robots..."
              searchPlaceholder="Type to search..."
              emptyMessage="No robot found."
              className="w-full"
            />
            <p className="text-muted-foreground text-xs">
              Search from {robotOptions.length} available robots
            </p>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="showcase-location">Deployment Location</Label>
            <Combobox
              items={fleetOptions}
              value={location}
              onValueChange={setLocation}
              placeholder="Search locations..."
              searchPlaceholder="Type to search..."
              emptyMessage="No location found."
              className="w-full"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="showcase-project">Assign to Project</Label>
            <Combobox
              items={projectOptions}
              value={project}
              onValueChange={setProject}
              placeholder="Search projects..."
              searchPlaceholder="Type to search..."
              emptyMessage="No project found."
              className="w-full"
            />
          </div>
        </div>

        {robot && location && project && (
          <div className="bg-muted/50 rounded-lg p-4 text-sm">
            <h4 className="mb-2 font-medium">Assignment Summary</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>
                <strong>Robot:</strong>{' '}
                {robotOptions.find((r) => r.value === robot)?.label}
              </li>
              <li>
                <strong>Location:</strong>{' '}
                {fleetOptions.find((f) => f.value === location)?.label}
              </li>
              <li>
                <strong>Project:</strong>{' '}
                {projectOptions.find((p) => p.value === project)?.label}
              </li>
            </ul>
          </div>
        )}

        <div className="flex justify-end gap-3 border-t pt-4">
          <Button variant="outline">Cancel</Button>
          <Button disabled={!robot || !location || !project}>
            Assign Task
          </Button>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 This form demonstrates combobox for searching and selecting from
          large lists.
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
 * Combobox follows accessibility best practices for keyboard navigation and
 * screen readers.
 */
export const Accessibility: Story = {
  args: { items: [] },
  render: function AccessibilityExample() {
    const [value, setValue] = React.useState('');

    return (
      <div className="flex flex-col gap-6 p-4">
        <div className="bg-muted/50 rounded-lg p-4">
          <h4 className="mb-2 text-sm font-semibold">Accessibility Features</h4>
          <ul className="text-muted-foreground space-y-1 text-sm">
            <li>
              ✓ <strong>Keyboard navigation</strong>: Arrow keys to navigate,
              Enter to select
            </li>
            <li>
              ✓ <strong>Search</strong>: Type to filter options immediately
            </li>
            <li>
              ✓ <strong>Labels</strong>: Always use proper label association
            </li>
            <li>
              ✓ <strong>ARIA attributes</strong>: Built-in roles and states
            </li>
            <li>
              ✓ <strong>Focus management</strong>: Clear focus indicators
            </li>
            <li>
              ✓ <strong>Error states</strong>: Announced to screen readers
            </li>
          </ul>
        </div>

        <div className="w-[300px]">
          <div className="space-y-2">
            <Label htmlFor="accessible-combo">Robot Selection</Label>
            <Combobox
              items={robotOptions}
              value={value}
              onValueChange={setValue}
              placeholder="Select robot..."
              searchPlaceholder="Search robots..."
              className="w-full"
            />
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-3">
          <h4 className="mb-2 text-sm font-semibold">Keyboard Shortcuts</h4>
          <ul className="text-muted-foreground space-y-1 text-sm">
            <li>
              <kbd className="bg-background rounded border px-1 text-xs">
                Click/Space
              </kbd>{' '}
              - Open dropdown
            </li>
            <li>
              <kbd className="bg-background rounded border px-1 text-xs">
                Type
              </kbd>{' '}
              - Filter options
            </li>
            <li>
              <kbd className="bg-background rounded border px-1 text-xs">
                Arrow keys
              </kbd>{' '}
              - Navigate options
            </li>
            <li>
              <kbd className="bg-background rounded border px-1 text-xs">
                Enter
              </kbd>{' '}
              - Select focused option
            </li>
            <li>
              <kbd className="bg-background rounded border px-1 text-xs">
                Esc
              </kbd>{' '}
              - Close dropdown
            </li>
          </ul>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Always provide labels, ensure search is
          keyboard accessible, and test with screen readers.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Accessibility Best Practices

**Label Association:**
\`\`\`tsx
<Label htmlFor="robot">Robot Unit</Label>
<Combobox items={items} placeholder="Select..." />
\`\`\`

**Error Handling:**
\`\`\`tsx
<Label className={hasError ? 'text-destructive' : ''}>Label</Label>
<Combobox aria-invalid={hasError} ... />
<p className="text-destructive text-sm">{errorMessage}</p>
\`\`\`

**Testing:**
- Test keyboard navigation and search
- Verify screen reader announces options and filtering
- Check focus indicators are visible
- Test with long lists (100+ items)
        `,
      },
    },
  },
};
