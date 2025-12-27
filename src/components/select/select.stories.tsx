import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './select';
import { Label } from '@/components/label/label';
import { Button } from '@/components/button/button';
import { Bot, Building2, Cpu, Briefcase, Package } from 'lucide-react';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A select dropdown component for choosing from a list of options.

## Features
- Single selection from a list
- Grouped options with labels
- Disabled options
- Icons support
- Three sizes (sm, default, lg)
- Controlled and uncontrolled
- Error states
- Full keyboard navigation

## When to Use
- **Short lists** (< 10 items): Best for dropdowns
- **Known options**: Users know what they're looking for
- **Quick selection**: Single click to select

## Common Use Cases
- Robot selection from fleet
- Location/facility selection
- Status or priority selection
- Project assignment
- Configuration options

## vs Combobox
Use **Select** for short, simple lists.  
Use **Combobox** for long lists or when search is needed.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
    defaultValue: {
      control: 'text',
      description: 'The default selected value',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data - NEURA Robot Fleet Management Context
const robots = [
  { value: 'maira-001', label: 'MAiRA-001' },
  { value: 'maira-002', label: 'MAiRA-002' },
  { value: 'lara-001', label: 'LARA-001' },
  { value: 'lara-003', label: 'LARA-003' },
  { value: '4ne1-001', label: '4NE1-001' },
  { value: '4ne1-002', label: '4NE1-002' },
  { value: 'mav-001', label: 'MAV-001' },
];

const fleets = [
  { value: 'munich-a', label: 'Munich Plant A' },
  { value: 'stuttgart', label: 'Stuttgart Factory' },
  { value: 'berlin', label: 'Berlin Warehouse' },
  { value: 'hamburg', label: 'Hamburg Distribution Center' },
  { value: 'frankfurt', label: 'Frankfurt Assembly Line' },
];

const projects = [
  { value: 'automation-2024', label: 'Automation Initiative 2024' },
  { value: 'quality-control', label: 'Quality Control System' },
  { value: 'warehouse-opt', label: 'Warehouse Optimization' },
  { value: 'predictive-maint', label: 'Predictive Maintenance' },
  { value: 'fleet-expansion', label: 'Fleet Expansion Q1' },
];

// =============================================================================
// BASIC EXAMPLES
// =============================================================================

/**
 * ## Default
 *
 * Basic select with label and placeholder.
 */
export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Basic Usage
        </h4>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select robot..." />
          </SelectTrigger>
          <SelectContent>
            {robots.map((robot) => (
              <SelectItem key={robot.value} value={robot.value}>
                {robot.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          With Label
        </h4>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="robot">Robot Unit</Label>
          <Select defaultValue="maira-001">
            <SelectTrigger id="robot" className="w-[200px]">
              <SelectValue placeholder="Select robot..." />
            </SelectTrigger>
            <SelectContent>
              {robots.map((robot) => (
                <SelectItem key={robot.value} value={robot.value}>
                  {robot.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Always use <code>Label</code> with{' '}
        <code>htmlFor</code> for accessibility.
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
      <div className="flex flex-col gap-2">
        <Label className="text-muted-foreground text-xs">
          Size: sm (h-8 / 32px)
        </Label>
        <Select defaultValue="maira-001">
          <SelectTrigger className="w-[200px]" size="sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {robots.slice(0, 3).map((robot) => (
              <SelectItem key={robot.value} value={robot.value}>
                {robot.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label className="text-muted-foreground text-xs">
          Size: default (h-9 / 36px)
        </Label>
        <Select defaultValue="maira-001">
          <SelectTrigger className="w-[200px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {robots.slice(0, 3).map((robot) => (
              <SelectItem key={robot.value} value={robot.value}>
                {robot.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label className="text-muted-foreground text-xs">
          Size: lg (h-10 / 40px)
        </Label>
        <Select defaultValue="maira-001">
          <SelectTrigger className="w-[200px]" size="lg">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {robots.slice(0, 3).map((robot) => (
              <SelectItem key={robot.value} value={robot.value}>
                {robot.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use <code>size</code> prop to match input
        heights in forms.
      </p>
    </div>
  ),
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
 * Select with groups, icons, and separators.
 */
export const Features: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Grouped Options
        </h4>
        <Select>
          <SelectTrigger className="w-[250px]">
            <SelectValue placeholder="Select location..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Germany</SelectLabel>
              <SelectItem value="munich-a">Munich Plant A</SelectItem>
              <SelectItem value="stuttgart">Stuttgart Factory</SelectItem>
              <SelectItem value="berlin">Berlin Warehouse</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Austria</SelectLabel>
              <SelectItem value="vienna">Vienna Distribution</SelectItem>
              <SelectItem value="graz">Graz Assembly</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          With Icons
        </h4>
        <Select>
          <SelectTrigger className="w-[250px]">
            <SelectValue placeholder="Select project..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="automation">
              <div className="flex items-center gap-2">
                <Bot className="size-4" />
                <span>Automation Initiative</span>
              </div>
            </SelectItem>
            <SelectItem value="quality">
              <div className="flex items-center gap-2">
                <Cpu className="size-4" />
                <span>Quality Control</span>
              </div>
            </SelectItem>
            <SelectItem value="warehouse">
              <div className="flex items-center gap-2">
                <Package className="size-4" />
                <span>Warehouse Optimization</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Disabled Items
        </h4>
        <Select>
          <SelectTrigger className="w-[250px]">
            <SelectValue placeholder="Select robot..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="maira-001">MAiRA-001</SelectItem>
            <SelectItem value="maira-002" disabled>
              MAiRA-002 (Maintenance)
            </SelectItem>
            <SelectItem value="lara-001">LARA-001</SelectItem>
            <SelectItem value="lara-003" disabled>
              LARA-003 (Offline)
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use groups and separators for better
        organization of long lists.
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
 * Disabled and error states.
 */
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Disabled
        </h4>
        <Select disabled defaultValue="maira-001">
          <SelectTrigger className="w-[200px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {robots.slice(0, 3).map((robot) => (
              <SelectItem key={robot.value} value={robot.value}>
                {robot.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Error State
        </h4>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="error-select" className="text-destructive">
            Robot Unit
          </Label>
          <Select>
            <SelectTrigger
              id="error-select"
              className="w-[200px]"
              aria-invalid="true"
            >
              <SelectValue placeholder="Select robot..." />
            </SelectTrigger>
            <SelectContent>
              {robots.slice(0, 3).map((robot) => (
                <SelectItem key={robot.value} value={robot.value}>
                  {robot.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-destructive text-sm">
            Please select a robot unit.
          </p>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Full Width
        </h4>
        <Select defaultValue="maira-001">
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {robots.map((robot) => (
              <SelectItem key={robot.value} value={robot.value}>
                {robot.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
// CONTROLLED
// =============================================================================

/**
 * ## Controlled
 *
 * Controlled select with external state management.
 */
export const Controlled: Story = {
  render: function ControlledExample() {
    const [value, setValue] = React.useState('maira-001');

    return (
      <div className="flex flex-col gap-4 p-4">
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger className="w-[250px]">
            <SelectValue placeholder="Select robot..." />
          </SelectTrigger>
          <SelectContent>
            {robots.map((robot) => (
              <SelectItem key={robot.value} value={robot.value}>
                {robot.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

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
          when you need to programmatically set values.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// LONG LIST
// =============================================================================

/**
 * ## Long List
 *
 * Select with a longer list of options. For very long lists, consider using Combobox instead.
 */
export const LongList: Story = {
  render: () => {
    const allRobots = [
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
      { value: 'pioneer-001', label: 'Pioneer-001' },
      { value: 'explorer-001', label: 'Explorer-001' },
    ];

    return (
      <div className="space-y-4 p-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="robot-list">Select Robot from Fleet</Label>
          <Select>
            <SelectTrigger id="robot-list" className="w-[250px]">
              <SelectValue placeholder="Choose a robot..." />
            </SelectTrigger>
            <SelectContent>
              {allRobots.map((robot) => (
                <SelectItem key={robot.value} value={robot.value}>
                  {robot.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <p className="text-muted-foreground max-w-sm text-xs">
          💡 <strong>Note:</strong> For lists with 20+ items or when users need
          to search, use <strong>Combobox</strong> instead for better UX.
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
 * Real-world example: Robot deployment configuration form with multiple selects.
 */
export const CompleteShowcase: Story = {
  render: function CompleteShowcaseExample() {
    const [robot, setRobot] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [project, setProject] = React.useState('');

    return (
      <div className="bg-card text-card-foreground w-[500px] space-y-6 rounded-lg border p-6 shadow-sm">
        <div>
          <h3 className="mb-2 text-lg font-semibold">
            Robot Deployment Configuration
          </h3>
          <p className="text-muted-foreground text-sm">
            Configure robot assignment and deployment parameters
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="showcase-robot">Robot Unit</Label>
            <Select value={robot} onValueChange={setRobot}>
              <SelectTrigger id="showcase-robot">
                <SelectValue placeholder="Select robot..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>MAiRA Series</SelectLabel>
                  <SelectItem value="maira-001">
                    <div className="flex items-center gap-2">
                      <Bot className="size-4" />
                      <span>MAiRA-001</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="maira-002">
                    <div className="flex items-center gap-2">
                      <Bot className="size-4" />
                      <span>MAiRA-002</span>
                    </div>
                  </SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>LARA Series</SelectLabel>
                  <SelectItem value="lara-001">
                    <div className="flex items-center gap-2">
                      <Cpu className="size-4" />
                      <span>LARA-001</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="lara-003">
                    <div className="flex items-center gap-2">
                      <Cpu className="size-4" />
                      <span>LARA-003</span>
                    </div>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="showcase-location">Deployment Location</Label>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger id="showcase-location">
                <SelectValue placeholder="Select location..." />
              </SelectTrigger>
              <SelectContent>
                {fleets.map((fleet) => (
                  <SelectItem key={fleet.value} value={fleet.value}>
                    <div className="flex items-center gap-2">
                      <Building2 className="size-4" />
                      <span>{fleet.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="showcase-project">Assign to Project</Label>
            <Select value={project} onValueChange={setProject}>
              <SelectTrigger id="showcase-project">
                <SelectValue placeholder="Select project..." />
              </SelectTrigger>
              <SelectContent>
                {projects.map((proj) => (
                  <SelectItem key={proj.value} value={proj.value}>
                    <div className="flex items-center gap-2">
                      <Briefcase className="size-4" />
                      <span>{proj.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end gap-3 border-t pt-4">
          <Button variant="outline">Cancel</Button>
          <Button disabled={!robot || !location || !project}>
            Deploy Robot
          </Button>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 This form demonstrates multiple select components for configuring
          robot deployment parameters.
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
 * Select components follow accessibility best practices for keyboard navigation
 * and screen readers.
 */
export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="mb-2 text-sm font-semibold">Accessibility Features</h4>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>
            ✓ <strong>Keyboard navigation</strong>: Arrow keys to navigate,
            Enter to select, Escape to close
          </li>
          <li>
            ✓ <strong>Labels</strong>: Always use <code>Label</code> with{' '}
            <code>htmlFor</code>
          </li>
          <li>
            ✓ <strong>ARIA attributes</strong>: Proper roles and states for
            screen readers
          </li>
          <li>
            ✓ <strong>Error states</strong>: Use <code>aria-invalid</code> and{' '}
            <code>aria-describedby</code>
          </li>
          <li>
            ✓ <strong>Focus management</strong>: Clear focus indicators
          </li>
          <li>
            ✓ <strong>Disabled items</strong>: Announced to screen readers
          </li>
        </ul>
      </div>

      <div className="w-[300px]">
        <div className="grid gap-2">
          <Label htmlFor="accessible-select">Robot Selection</Label>
          <Select>
            <SelectTrigger id="accessible-select">
              <SelectValue placeholder="Select robot..." />
            </SelectTrigger>
            <SelectContent>
              {robots.map((robot) => (
                <SelectItem key={robot.value} value={robot.value}>
                  {robot.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="bg-muted/30 rounded-lg p-3">
        <h4 className="mb-2 text-sm font-semibold">Keyboard Shortcuts</h4>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>
            <kbd className="bg-background rounded border px-1 text-xs">
              Space/Enter
            </kbd>{' '}
            - Open dropdown
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
            <kbd className="bg-background rounded border px-1 text-xs">Esc</kbd>{' '}
            - Close dropdown
          </li>
          <li>
            <kbd className="bg-background rounded border px-1 text-xs">Tab</kbd>{' '}
            - Move focus to next element
          </li>
        </ul>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Always provide labels, ensure keyboard
        navigation works, and test with screen readers.
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
<Label htmlFor="robot">Robot Unit</Label>
<Select>
  <SelectTrigger id="robot">
    <SelectValue placeholder="Select..." />
  </SelectTrigger>
  {/* ... */}
</Select>
\`\`\`

**Error Handling:**
\`\`\`tsx
<Label htmlFor="select" className="text-destructive">Label</Label>
<SelectTrigger id="select" aria-invalid="true" aria-describedby="error">
  {/* ... */}
</SelectTrigger>
<p id="error" className="text-destructive text-sm">
  {errorMessage}
</p>
\`\`\`

**Testing:**
- Test keyboard navigation (Space, Arrow keys, Enter, Escape)
- Verify screen reader announces options and selection
- Check focus indicators are visible
- Ensure disabled items are announced
        `,
      },
    },
  },
};
