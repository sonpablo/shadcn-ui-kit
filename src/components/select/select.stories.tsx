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
import { Bot, Building2, Cpu, Factory, Briefcase, Package } from 'lucide-react';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
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
];

const fleets = [
  { value: 'munich-a', label: 'Munich Plant A' },
  { value: 'stuttgart', label: 'Stuttgart Factory' },
  { value: 'berlin', label: 'Berlin Warehouse' },
  { value: 'hamburg', label: 'Hamburg Distribution Center' },
];

const projects = [
  { value: 'automation-2024', label: 'Automation Initiative 2024' },
  { value: 'quality-control', label: 'Quality Control System' },
  { value: 'warehouse-opt', label: 'Warehouse Optimization' },
  { value: 'predictive-maint', label: 'Predictive Maintenance' },
];

/**
 * ## Default Select
 *
 * Basic select dropdown for choosing robots from your fleet.
 * Simple and straightforward selection without search.
 */
export const Default: Story = {
  render: () => (
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
  ),
};

/**
 * ## With Label
 *
 * Select with an accessible label for form fields.
 * Essential for proper form accessibility and usability.
 */
export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="robot">Robot Unit</Label>
      <Select>
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
  ),
};

/**
 * ## With Default Value
 *
 * Select with a pre-selected default value.
 * Useful for forms with suggested or previously selected values.
 */
export const WithDefaultValue: Story = {
  render: () => (
    <Select defaultValue="maira-001">
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
  ),
};

/**
 * ## With Groups
 *
 * Organized selection with visual groups and separators.
 * Perfect for categorizing options by robot type or location.
 */
export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select robot..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>MAiRA Series</SelectLabel>
          <SelectItem value="maira-001">MAiRA-001</SelectItem>
          <SelectItem value="maira-002">MAiRA-002</SelectItem>
          <SelectItem value="maira-003">MAiRA-003</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>LARA Series</SelectLabel>
          <SelectItem value="lara-001">LARA-001</SelectItem>
          <SelectItem value="lara-002">LARA-002</SelectItem>
          <SelectItem value="lara-003">LARA-003</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>4NE1 Series</SelectLabel>
          <SelectItem value="4ne1-001">4NE1-001</SelectItem>
          <SelectItem value="4ne1-002">4NE1-002</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

/**
 * ## Disabled State
 *
 * Completely disabled select for read-only contexts.
 * Use when selection is temporarily unavailable or permissions prevent editing.
 */
export const Disabled: Story = {
  render: () => (
    <Select disabled>
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
  ),
};

/**
 * ## Disabled Items
 *
 * Show robot status with disabled options for units in maintenance or offline.
 * Provides visual feedback while preventing selection of unavailable robots.
 */
export const DisabledItems: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[230px]">
        <SelectValue placeholder="Select robot..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="maira-001">MAiRA-001 (Active)</SelectItem>
        <SelectItem value="maira-002">MAiRA-002 (Active)</SelectItem>
        <SelectItem value="lara-003" disabled>
          LARA-003 (Maintenance)
        </SelectItem>
        <SelectItem value="4ne1-001">4NE1-001 (Active)</SelectItem>
        <SelectItem value="mav-001" disabled>
          MAV-001 (Offline)
        </SelectItem>
      </SelectContent>
    </Select>
  ),
};

/**
 * ## With Icons
 *
 * Enhance options with visual icons for better recognition.
 * Icons improve scanability and add visual interest.
 */
export const WithIcons: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select robot type..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="maira">
          <Bot className="text-blue-500" />
          MAiRA Series
        </SelectItem>
        <SelectItem value="lara">
          <Cpu className="text-green-500" />
          LARA Series
        </SelectItem>
        <SelectItem value="4ne1">
          <Factory className="text-purple-500" />
          4NE1 Series
        </SelectItem>
        <SelectItem value="mav">
          <Package className="text-orange-500" />
          MAV Series
        </SelectItem>
      </SelectContent>
    </Select>
  ),
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
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="space-y-2">
        <Label className="text-muted-foreground text-xs">
          Size: sm (h-8 / 32px)
        </Label>
        <Select>
          <SelectTrigger size="sm" className="w-[200px]">
            <SelectValue placeholder="Small select" />
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
      <div className="space-y-2">
        <Label className="text-muted-foreground text-xs">
          Size: default (h-9 / 36px)
        </Label>
        <Select>
          <SelectTrigger size="default" className="w-[200px]">
            <SelectValue placeholder="Default select" />
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
      <div className="space-y-2">
        <Label className="text-muted-foreground text-xs">
          Size: lg (h-10 / 40px)
        </Label>
        <Select>
          <SelectTrigger size="lg" className="w-[200px]">
            <SelectValue placeholder="Large select" />
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
    </div>
  ),
};

/**
 * ## Controlled State
 *
 * Fully controlled select with external state management.
 * Perfect for forms and workflows requiring validation.
 */
export const Controlled: Story = {
  render: function Render() {
    const [value, setValue] = React.useState('');

    return (
      <div className="space-y-4">
        <Select value={value} onValueChange={setValue}>
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
 * ## Full Width
 *
 * Select that fills its container width.
 * Perfect for forms and responsive layouts.
 */
export const FullWidth: Story = {
  render: () => (
    <div className="w-80">
      <Select>
        <SelectTrigger className="w-full">
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
  ),
};

/**
 * ## Error State
 *
 * Display validation errors for required or invalid selections.
 * Toggle the error state to see visual feedback with aria-invalid support.
 */
export const ErrorState: Story = {
  render: function Render() {
    const [hasError, setHasError] = React.useState(true);

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
            <Select>
              <SelectTrigger
                id="robot"
                aria-invalid={hasError}
                className="w-[200px]"
              >
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
 * ## Long List with Scroll
 *
 * Efficient scrolling for large robot fleets.
 * Select component handles long lists with built-in scroll functionality.
 */
export const LongList: Story = {
  render: () => {
    const allRobots = [
      { value: 'maira-001', label: 'MAiRA-001' },
      { value: 'maira-002', label: 'MAiRA-002' },
      { value: 'maira-003', label: 'MAiRA-003' },
      { value: 'maira-004', label: 'MAiRA-004' },
      { value: 'maira-005', label: 'MAiRA-005' },
      { value: 'lara-001', label: 'LARA-001' },
      { value: 'lara-002', label: 'LARA-002' },
      { value: 'lara-003', label: 'LARA-003' },
      { value: 'lara-004', label: 'LARA-004' },
      { value: 'lara-005', label: 'LARA-005' },
      { value: '4ne1-001', label: '4NE1-001' },
      { value: '4ne1-002', label: '4NE1-002' },
      { value: '4ne1-003', label: '4NE1-003' },
      { value: 'mav-001', label: 'MAV-001' },
      { value: 'mav-002', label: 'MAV-002' },
      { value: 'mav-003', label: 'MAV-003' },
      { value: 'mipa-001', label: 'MiPA-001' },
      { value: 'mipa-002', label: 'MiPA-002' },
    ];

    return (
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select robot..." />
        </SelectTrigger>
        <SelectContent>
          {allRobots.map((robot) => (
            <SelectItem key={robot.value} value={robot.value}>
              {robot.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  },
};

/**
 * ## Form Example
 *
 * Complete form demonstrating multiple selects working together.
 * Shows real-world usage for task assignment and fleet management.
 */
export const FormExample: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Configure Robot Task</h3>
        <p className="text-muted-foreground mb-6 text-sm">
          Set up robot assignment for automated workflow execution.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="robot">Robot Unit</Label>
        <Select defaultValue="maira-001">
          <SelectTrigger id="robot" className="w-full">
            <SelectValue placeholder="Select robot..." />
          </SelectTrigger>
          <SelectContent>
            {robots.map((robot) => (
              <SelectItem key={robot.value} value={robot.value}>
                <Bot />
                {robot.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-muted-foreground text-xs">
          Choose the robot to assign to this task.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="fleet">Fleet Location</Label>
        <Select>
          <SelectTrigger id="fleet" className="w-full">
            <SelectValue placeholder="Select location..." />
          </SelectTrigger>
          <SelectContent>
            {fleets.map((fleet) => (
              <SelectItem key={fleet.value} value={fleet.value}>
                <Building2 />
                {fleet.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-muted-foreground text-xs">
          Deployment location for the robot.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="project">Project</Label>
        <Select>
          <SelectTrigger id="project" className="w-full">
            <SelectValue placeholder="Select project..." />
          </SelectTrigger>
          <SelectContent>
            {projects.map((project) => (
              <SelectItem key={project.value} value={project.value}>
                <Briefcase />
                {project.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-muted-foreground text-xs">
          Associated project for tracking and reporting.
        </p>
      </div>
    </div>
  ),
};
