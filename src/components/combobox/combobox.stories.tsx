import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from './combobox';
import { Label } from '@/components/label/label';

const meta = {
  title: 'Components/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the combobox is disabled',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no value is selected',
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Placeholder text for the search input',
    },
    emptyMessage: {
      control: 'text',
      description: 'Message shown when no results are found',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'Size of the combobox',
    },
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data - NEURA Robot Fleet Management Context
const robotOptions = [
  { value: 'maira-001', label: 'MAiRA-001' },
  { value: 'maira-002', label: 'MAiRA-002' },
  { value: 'lara-001', label: 'LARA-001' },
  { value: 'lara-003', label: 'LARA-003' },
  { value: 'mav-001', label: 'MAV-001' },
  { value: 'mipa-001', label: 'MiPA-001' },
  { value: '4ne1-001', label: '4NE1-001' },
  { value: '4ne1-002', label: '4NE1-002' },
];

const fleetOptions = [
  { value: 'munich-a', label: 'Munich Plant A' },
  { value: 'stuttgart', label: 'Stuttgart Factory' },
  { value: 'berlin', label: 'Berlin Warehouse' },
  { value: 'hamburg', label: 'Hamburg Distribution Center' },
  { value: 'frankfurt', label: 'Frankfurt Assembly Line' },
];

const projectOptions = [
  { value: 'proj-automation-2024', label: 'Automation Initiative 2024' },
  { value: 'proj-quality-control', label: 'Quality Control System' },
  { value: 'proj-warehouse-optimization', label: 'Warehouse Optimization' },
  { value: 'proj-predictive-maintenance', label: 'Predictive Maintenance' },
  { value: 'proj-fleet-expansion', label: 'Fleet Expansion Q1' },
];

const robotStatusOptions = [
  { value: 'maira-001', label: 'MAiRA-001 (Active)' },
  { value: 'maira-002', label: 'MAiRA-002 (Active)' },
  { value: 'lara-003', label: 'LARA-003 (Maintenance)', disabled: true },
  { value: '4ne1-001', label: '4NE1-001 (Active)' },
  { value: 'mav-001', label: 'MAV-001 (Offline)', disabled: true },
];

/**
 * ## Default Combobox
 *
 * Basic searchable combobox for selecting robots from your fleet.
 * Features real-time search and keyboard navigation.
 */
export const Default: Story = {
  render: function Render() {
    const [value, setValue] = React.useState('');

    return (
      <Combobox
        items={robotOptions}
        value={value}
        onValueChange={setValue}
        placeholder="Select robot..."
        searchPlaceholder="Search robots..."
        className="w-[300px]"
      />
    );
  },
  args: {
    items: [],
  },
};

/**
 * ## Controlled State
 *
 * Fully controlled combobox with external state management.
 * Perfect for forms and workflows requiring validation.
 */
export const Controlled: Story = {
  args: { items: [] },
  render: function Render() {
    const [value, setValue] = React.useState('');

    return (
      <div className="space-y-4">
        <Combobox
          items={robotOptions}
          value={value}
          onValueChange={setValue}
          placeholder="Select robot..."
          searchPlaceholder="Search robots..."
          className="w-[300px]"
        />
        <p className="text-muted-foreground text-sm">
          Selected: <strong>{value || 'None'}</strong>
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setValue('maira-001')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-3 py-1.5 text-sm"
          >
            Select MAiRA-001
          </button>
          <button
            onClick={() => setValue('')}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-md px-3 py-1.5 text-sm"
          >
            Clear
          </button>
        </div>
      </div>
    );
  },
};

/**
 * ## With Label
 *
 * Combobox with an accessible label for form fields.
 * Essential for proper form accessibility and usability.
 */
export const WithLabel: Story = {
  args: { items: [] },
  render: function Render() {
    const [value, setValue] = React.useState('');

    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="robot">Robot Unit</Label>
        <Combobox
          items={robotOptions}
          value={value}
          onValueChange={setValue}
          placeholder="Select robot..."
          searchPlaceholder="Search robots..."
          className="w-[300px]"
        />
      </div>
    );
  },
};

/**
 * ## Fleet Selection
 *
 * Select from available fleet locations across your facilities.
 * Search helps quickly find the right location in large deployments.
 */
export const FleetSelection: Story = {
  args: { items: [] },
  render: function Render() {
    const [value, setValue] = React.useState('');

    return (
      <div className="space-y-4">
        <Combobox
          items={fleetOptions}
          value={value}
          onValueChange={setValue}
          placeholder="Select fleet location..."
          searchPlaceholder="Search locations..."
          emptyMessage="No location found."
          className="w-[300px]"
        />
        <p className="text-muted-foreground text-sm">
          Selected: <strong>{value || 'None'}</strong>
        </p>
      </div>
    );
  },
};

/**
 * ## With Disabled Items
 *
 * Show robot status with disabled options for units in maintenance or offline.
 * Provides visual feedback while preventing selection of unavailable robots.
 */
export const WithDisabledItems: Story = {
  args: { items: [] },
  render: function Render() {
    const [value, setValue] = React.useState('');

    return (
      <Combobox
        items={robotStatusOptions}
        value={value}
        onValueChange={setValue}
        placeholder="Select robot..."
        searchPlaceholder="Search robots..."
        emptyMessage="No robot found."
        className="w-[300px]"
      />
    );
  },
};

/**
 * ## Disabled State
 *
 * Completely disabled combobox for read-only contexts.
 * Use when selection is temporarily unavailable or permissions prevent editing.
 */
export const Disabled: Story = {
  args: { items: [] },
  render: () => {
    return (
      <Combobox
        items={robotOptions}
        disabled
        placeholder="Select robot..."
        className="w-[300px]"
      />
    );
  },
};

/**
 * ## Sizes
 *
 * Three size variants matching other form components.
 *
 * **Size Reference:**
 * - sm: h-8 (32px) - Compact interfaces, toolbars, filters
 * - default: h-9 (36px) - Standard forms
 * - lg: h-10 (40px) - Landing pages, emphasis
 */
export const Sizes: Story = {
  args: { items: [] },
  render: function Render() {
    const [valueSm, setValueSm] = React.useState('');
    const [valueDefault, setValueDefault] = React.useState('');
    const [valueLg, setValueLg] = React.useState('');

    return (
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <Label className="text-muted-foreground text-xs">
            Size: sm (h-8 / 32px)
          </Label>
          <Combobox
            items={robotOptions.slice(0, 5)}
            value={valueSm}
            onValueChange={setValueSm}
            placeholder="Small combobox..."
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
            value={valueDefault}
            onValueChange={setValueDefault}
            placeholder="Default combobox..."
            searchPlaceholder="Search..."
            size="default"
            className="w-[250px]"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-muted-foreground text-xs">
            Size: lg (h-10 / 40px)
          </Label>
          <Combobox
            items={robotOptions.slice(0, 5)}
            value={valueLg}
            onValueChange={setValueLg}
            placeholder="Large combobox..."
            searchPlaceholder="Search..."
            size="lg"
            className="w-[250px]"
          />
        </div>
      </div>
    );
  },
};

/**
 * ## Full Width
 *
 * Combobox that fills its container width.
 * Perfect for forms and responsive layouts.
 */
export const FullWidth: Story = {
  args: { items: [] },
  render: function Render() {
    const [value, setValue] = React.useState('');

    return (
      <div className="w-80">
        <Combobox
          items={robotOptions}
          value={value}
          onValueChange={setValue}
          placeholder="Select robot..."
          searchPlaceholder="Search robots..."
        />
      </div>
    );
  },
};

/**
 * ## Project Selection
 *
 * Select from active robotics projects across your organization.
 * Useful for task assignment and project tracking interfaces.
 */
export const ProjectSelection: Story = {
  args: { items: [] },
  render: function Render() {
    const [value, setValue] = React.useState('');

    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Active Project</Label>
          <Combobox
            items={projectOptions}
            value={value}
            onValueChange={setValue}
            placeholder="Select project..."
            searchPlaceholder="Search projects..."
            emptyMessage="No project found."
            className="w-[350px]"
          />
        </div>
        {value && (
          <p className="text-muted-foreground text-sm">
            You selected: <strong className="text-foreground">{value}</strong>
          </p>
        )}
      </div>
    );
  },
};

/**
 * ## Error State
 *
 * Display validation errors for required or invalid selections.
 * Toggle the error state to see visual feedback with aria-invalid support.
 */
export const ErrorState: Story = {
  args: { items: [] },
  render: function Render() {
    const [hasError, setHasError] = React.useState(true);
    const [value, setValue] = React.useState('');

    return (
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
    );
  },
};

/**
 * ## Form Example
 *
 * Complete form demonstrating multiple comboboxes working together.
 * Shows real-world usage for task assignment and fleet management.
 */
export const FormExample: Story = {
  args: { items: [] },
  render: function Render() {
    const [robot, setRobot] = React.useState('');
    const [fleet, setFleet] = React.useState('');
    const [project, setProject] = React.useState('');

    return (
      <div className="w-96 space-y-6">
        <div>
          <h3 className="mb-4 text-lg font-semibold">Assign Robot to Task</h3>
          <p className="text-muted-foreground mb-6 text-sm">
            Configure robot assignment for automated workflow execution.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="robot">Robot Unit</Label>
          <Combobox
            items={robotOptions}
            value={robot}
            onValueChange={setRobot}
            placeholder="Select robot..."
            searchPlaceholder="Search robots..."
          />
          <p className="text-muted-foreground text-xs">
            Choose the robot to assign to this task.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="fleet">Fleet Location</Label>
          <Combobox
            items={fleetOptions}
            value={fleet}
            onValueChange={setFleet}
            placeholder="Select location..."
            searchPlaceholder="Search locations..."
          />
          <p className="text-muted-foreground text-xs">
            Deployment location for the robot.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="project">Project</Label>
          <Combobox
            items={projectOptions}
            value={project}
            onValueChange={setProject}
            placeholder="Select project..."
            searchPlaceholder="Search projects..."
          />
          <p className="text-muted-foreground text-xs">
            Associated project for tracking and reporting.
          </p>
        </div>

        <div className="border-t pt-4">
          <h3 className="mb-2 text-sm font-medium">Assignment Data:</h3>
          <pre className="bg-muted text-muted-foreground rounded-md p-3 text-xs">
            {JSON.stringify(
              {
                robot: robot || null,
                fleet: fleet || null,
                project: project || null,
              },
              null,
              2,
            )}
          </pre>
        </div>
      </div>
    );
  },
};
