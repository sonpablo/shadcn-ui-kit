import type { Meta, StoryObj } from '@storybook/react-vite';
import { DropdownFilters } from './dropdown-filters';
import { Bot, Cpu, AlertCircle, Battery, Wrench } from 'lucide-react';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/card/card';

const meta: Meta<typeof DropdownFilters> = {
  title: 'Components/DropdownFilters',
  component: DropdownFilters,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A flexible filtering system using multi-select dropdowns built on top of the MultiSelect component.

## Features
- **Multiple Filters** - Configure any number of independent filter dropdowns
- **React Hook Form Integration** - Built-in form state management
- **Pre-selected Values** - Support for default selections
- **Search & Select All** - Inherited from MultiSelect component
- **Custom Icons** - Add visual context with Lucide icons
- **Responsive Grid** - Automatically adapts to screen size
- **Reset Functionality** - One-click reset to clear all filters

## Use Cases
- Fleet management dashboards
- Robot selection and filtering
- Project and task filtering
- Location-based filtering
- Status and capability filters

## Basic Usage
\`\`\`tsx
const filterConfigs = [
  {
    name: 'robotType',
    label: 'Robot Type',
    options: [
      { id: 'maira', label: 'MAiRA', icon: Bot },
      { id: 'lara', label: 'LARA', icon: Bot },
    ],
  },
];

<DropdownFilters
  filterConfigs={filterConfigs}
  onFilterApply={(data) => console.log(data)}
/>
\`\`\`

## With Pre-selected Values
\`\`\`tsx
const filterConfigs = [
  {
    name: 'status',
    label: 'Status',
    options: [
      { id: 'active', label: 'Active', selected: true },
      { id: 'idle', label: 'Idle', selected: true },
    ],
  },
];
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    filterConfigs: {
      description: 'Array of filter configurations',
      control: 'object',
    },
    onFilterApply: {
      description: 'Callback function when filters are applied',
      action: 'filterApply',
    },
    literals: {
      description: 'Custom text for UI elements',
      control: 'object',
    },
    hideHeader: {
      description: 'Hide the header with title and reset button',
      control: 'boolean',
    },
    disabled: {
      description: 'Disable all filter interactions',
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownFilters>;

/**
 * Basic filter example demonstrating all three filter types.
 * Shows MultiSelect (multi), Combobox (single + searchable), and Select (single + no search).
 */
export const Default: Story = {
  render: function DefaultRender() {
    const [appliedFilters, setAppliedFilters] = useState<Record<
      string,
      string[] | string
    > | null>(null);

    const filterConfigs = [
      {
        name: 'robotType',
        label: 'Robot Type (Multi)',
        mode: 'multi' as const,
        options: [
          { id: 'maira', label: 'MAiRA' },
          { id: 'lara', label: 'LARA' },
          { id: 'mav', label: 'MAV' },
          { id: '4ne1', label: '4NE-1' },
        ],
      },
      {
        name: 'location',
        label: 'Location (Searchable)',
        mode: 'single' as const,
        searchable: true,
        options: [
          { id: 'munich', label: 'Munich Plant A' },
          { id: 'stuttgart', label: 'Stuttgart Factory' },
          { id: 'berlin', label: 'Berlin Warehouse' },
          { id: 'hamburg', label: 'Hamburg Distribution' },
        ],
      },
      {
        name: 'status',
        label: 'Status',
        mode: 'single' as const,
        searchable: false,
        options: [
          { id: 'active', label: 'Active' },
          { id: 'idle', label: 'Idle' },
          { id: 'maintenance', label: 'Maintenance' },
          { id: 'offline', label: 'Offline' },
        ],
      },
    ];

    return (
      <div className="w-[1000px] space-y-6 p-6">
        <DropdownFilters
          filterConfigs={filterConfigs}
          onFilterApply={(data) => {
            console.log('Filters applied:', data);
            setAppliedFilters(data);
          }}
        />

        {appliedFilters && (
          <div className="rounded-lg border p-4">
            <h3 className="mb-3 text-sm font-semibold">Applied Filters:</h3>
            <pre className="overflow-auto text-xs">
              {JSON.stringify(appliedFilters, null, 2)}
            </pre>
          </div>
        )}
      </div>
    );
  },
};

/**
 * Fleet management filters with multiple categories.
 * Shows a comprehensive filtering system for robot fleet operations.
 */
export const FleetManagement: Story = {
  render: function FleetManagementRender() {
    const [appliedFilters, setAppliedFilters] = useState<Record<
      string,
      string[] | string
    > | null>(null);

    const filterConfigs = [
      {
        name: 'robotModel',
        label: 'Robot Model',
        options: [
          {
            id: 'maira',
            label: 'MAiRA (Cognitive)',
            icon: Bot,
            selected: true,
          },
          { id: 'lara', label: 'LARA (Collaborative)', icon: Bot },
          { id: 'mav', label: 'MAV (Autonomous)', icon: Bot },
        ],
      },
      {
        name: 'status',
        label: 'Status',
        options: [
          { id: 'active', label: 'Active', icon: Battery, selected: true },
          { id: 'idle', label: 'Idle', icon: Battery },
          { id: 'charging', label: 'Charging', icon: Battery },
          { id: 'maintenance', label: 'Maintenance', icon: Wrench },
          { id: 'error', label: 'Error', icon: AlertCircle },
        ],
      },
      {
        name: 'capability',
        label: 'Capability',
        options: [
          { id: 'picking', label: 'Material Picking', icon: Cpu },
          { id: 'sorting', label: 'Object Sorting', icon: Cpu },
          { id: 'welding', label: 'Precision Welding', icon: Cpu },
          { id: 'assembly', label: 'Assembly', icon: Cpu },
        ],
      },
    ];

    return (
      <div className="w-[1000px] space-y-6 p-8">
        <Card>
          <CardHeader>
            <CardTitle>Fleet Filter System</CardTitle>
          </CardHeader>
          <CardContent>
            <DropdownFilters
              filterConfigs={filterConfigs}
              onFilterApply={(data) => {
                console.log('Fleet filters applied:', data);
                setAppliedFilters(data);
              }}
              literals={{
                filter: 'Filter Robots',
                reset: 'Clear All',
                apply: 'Apply Filters',
              }}
            />

            {appliedFilters && (
              <div className="mt-6 rounded-lg border p-4">
                <h3 className="mb-3 text-sm font-semibold">Active Filters:</h3>
                <pre className="overflow-auto text-xs">
                  {JSON.stringify(appliedFilters, null, 2)}
                </pre>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  },
};

/**
 * Compact layout with no header.
 * Ideal for embedding in dashboards or side panels.
 */
export const CompactLayout: Story = {
  render: () => {
    const filterConfigs = [
      {
        name: 'type',
        label: 'Type',
        options: [
          { id: 'maira', label: 'MAiRA' },
          { id: 'lara', label: 'LARA' },
        ],
        hideSelectAll: true,
      },
      {
        name: 'zone',
        label: 'Zone',
        options: [
          { id: 'z1', label: 'Zone 1' },
          { id: 'z2', label: 'Zone 2' },
          { id: 'z3', label: 'Zone 3' },
        ],
        hideSelectAll: true,
      },
    ];

    return (
      <div className="w-[600px] rounded-lg border p-4">
        <DropdownFilters
          filterConfigs={filterConfigs}
          hideHeader
          onFilterApply={(data) => console.log('Filters:', data)}
        />
      </div>
    );
  },
};

/**
 * Single filter for robot type selection.
 * Demonstrates minimal configuration.
 */
export const SingleFilter: Story = {
  render: () => {
    const filterConfigs = [
      {
        name: 'robotModel',
        label: 'Robot Model',
        placeholder: 'Select robot models...',
        options: [
          { id: 'maira-001', label: 'MAiRA-001', icon: Bot },
          { id: 'maira-002', label: 'MAiRA-002', icon: Bot },
          { id: 'lara-001', label: 'LARA-001', icon: Bot },
          { id: 'lara-002', label: 'LARA-002', icon: Bot },
          { id: 'mav-001', label: 'MAV-001', icon: Bot },
        ],
      },
    ];

    return (
      <div className="w-[500px] space-y-4 p-6">
        <DropdownFilters
          filterConfigs={filterConfigs}
          onFilterApply={(data) => console.log('Selected robots:', data)}
          literals={{
            filter: 'Robot Selection',
            reset: 'Clear',
            apply: 'Confirm',
          }}
        />
      </div>
    );
  },
};

/**
 * Disabled state example.
 * Shows how filters look when disabled.
 */
export const Disabled: Story = {
  render: () => {
    const filterConfigs = [
      {
        name: 'robotType',
        label: 'Robot Type',
        options: [
          { id: 'maira', label: 'MAiRA', icon: Bot, selected: true },
          { id: 'lara', label: 'LARA', icon: Bot },
        ],
      },
      {
        name: 'status',
        label: 'Status',
        options: [
          { id: 'active', label: 'Active', selected: true },
          { id: 'idle', label: 'Idle' },
        ],
      },
    ];

    return (
      <div className="w-[700px] space-y-6 p-6">
        <div className="space-y-2">
          <p className="text-muted-foreground text-sm">
            Filters are currently disabled (e.g., loading data)
          </p>
          <DropdownFilters
            filterConfigs={filterConfigs}
            disabled
            onFilterApply={(data) => console.log('Filters:', data)}
          />
        </div>
      </div>
    );
  },
};

/**
 * Project and deployment filters.
 * Advanced example with many filter categories for project management.
 */
export const ProjectFilters: Story = {
  render: () => {
    const filterConfigs = [
      {
        name: 'project',
        label: 'Project',
        options: [
          { id: 'warehouse-auto', label: 'Warehouse Automation' },
          { id: 'assembly-line', label: 'Assembly Line Integration' },
          { id: 'quality-control', label: 'Quality Control System' },
          { id: 'logistics-hub', label: 'Logistics Hub Deployment' },
        ],
      },
      {
        name: 'priority',
        label: 'Priority',
        options: [
          { id: 'critical', label: 'Critical', icon: AlertCircle },
          { id: 'high', label: 'High' },
          { id: 'medium', label: 'Medium' },
          { id: 'low', label: 'Low' },
        ],
        hideSelectAll: true,
      },
      {
        name: 'assignee',
        label: 'Assigned To',
        options: [
          { id: 'team-a', label: 'Team Alpha' },
          { id: 'team-b', label: 'Team Beta' },
          { id: 'team-c', label: 'Team Gamma' },
        ],
      },
    ];

    return (
      <div className="w-[1000px] space-y-6 p-8">
        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-xl font-bold">Project Management Filters</h2>
          <DropdownFilters
            filterConfigs={filterConfigs}
            onFilterApply={(data) => console.log('Project filters:', data)}
          />
        </div>
      </div>
    );
  },
};

/**
 * Single selection mode with Combobox (searchable).
 * Uses mode: 'single' with searchable: true to show a Combobox.
 */
export const SingleModeWithSearch: Story = {
  render: () => {
    const filterConfigs = [
      {
        name: 'robot',
        label: 'Robot',
        mode: 'single' as const,
        searchable: true,
        options: [
          { id: 'maira-001', label: 'MAiRA-001' },
          { id: 'maira-002', label: 'MAiRA-002' },
          { id: 'lara-001', label: 'LARA-001' },
          { id: 'lara-002', label: 'LARA-002' },
          { id: 'mav-001', label: 'MAV-001' },
        ],
      },
      {
        name: 'location',
        label: 'Location',
        mode: 'single' as const,
        searchable: true,
        options: [
          { id: 'munich', label: 'Munich Plant A' },
          { id: 'stuttgart', label: 'Stuttgart Factory' },
          { id: 'berlin', label: 'Berlin Warehouse' },
          { id: 'hamburg', label: 'Hamburg Distribution' },
        ],
      },
    ];

    return (
      <div className="w-[700px] space-y-6 p-6">
        <DropdownFilters
          filterConfigs={filterConfigs}
          onFilterApply={(data) => console.log('Single selection:', data)}
          literals={{
            filter: 'Single Selection (Searchable)',
            reset: 'Reset',
            apply: 'Apply',
          }}
        />
      </div>
    );
  },
};

/**
 * Single selection mode with Select (no search).
 * Uses mode: 'single' with searchable: false to show a Select dropdown.
 */
export const SingleModeWithoutSearch: Story = {
  render: () => {
    const filterConfigs = [
      {
        name: 'priority',
        label: 'Priority',
        mode: 'single' as const,
        searchable: false,
        options: [
          { id: 'critical', label: 'Critical' },
          { id: 'high', label: 'High' },
          { id: 'medium', label: 'Medium' },
          { id: 'low', label: 'Low' },
        ],
      },
      {
        name: 'status',
        label: 'Status',
        mode: 'single' as const,
        searchable: false,
        options: [
          { id: 'active', label: 'Active' },
          { id: 'idle', label: 'Idle' },
          { id: 'maintenance', label: 'Maintenance' },
          { id: 'offline', label: 'Offline' },
        ],
      },
    ];

    return (
      <div className="w-[700px] space-y-6 p-6">
        <DropdownFilters
          filterConfigs={filterConfigs}
          onFilterApply={(data) => console.log('Single selection:', data)}
          literals={{
            filter: 'Single Selection (No Search)',
            reset: 'Reset',
            apply: 'Apply',
          }}
        />
      </div>
    );
  },
};

/**
 * Filters without labels.
 * Demonstrates using the component without labels for compact layouts.
 */
export const WithoutLabels: Story = {
  render: () => {
    const filterConfigs = [
      {
        name: 'robots',
        options: [
          { id: 'maira-001', label: 'MAiRA-001' },
          { id: 'maira-002', label: 'MAiRA-002' },
          { id: 'lara-001', label: 'LARA-001' },
        ],
        placeholder: 'Select robots',
      },
      {
        name: 'location',
        mode: 'single' as const,
        searchable: true,
        options: [
          { id: 'munich', label: 'Munich Plant A' },
          { id: 'stuttgart', label: 'Stuttgart Factory' },
          { id: 'berlin', label: 'Berlin Warehouse' },
        ],
        placeholder: 'Select location',
      },
      {
        name: 'status',
        mode: 'single' as const,
        searchable: false,
        options: [
          { id: 'active', label: 'Active' },
          { id: 'idle', label: 'Idle' },
          { id: 'offline', label: 'Offline' },
        ],
        placeholder: 'Status',
      },
    ];

    return (
      <div className="w-[900px] space-y-6 p-6">
        <DropdownFilters
          filterConfigs={filterConfigs}
          onFilterApply={(data) => console.log('Without labels:', data)}
        />
      </div>
    );
  },
};

/**
 * Mixed modes demonstration.
 * Combines multi-select, single searchable, and single non-searchable filters.
 */
export const MixedModes: Story = {
  render: () => {
    const filterConfigs = [
      {
        name: 'robots',
        label: 'Robots (Multi)',
        mode: 'multi' as const,
        options: [
          { id: 'maira-001', label: 'MAiRA-001', icon: Bot },
          { id: 'lara-001', label: 'LARA-001', icon: Bot },
          { id: 'mav-001', label: 'MAV-001', icon: Bot },
        ],
      },
      {
        name: 'location',
        label: 'Location (Single + Search)',
        mode: 'single' as const,
        searchable: true,
        options: [
          { id: 'munich', label: 'Munich Plant A' },
          { id: 'stuttgart', label: 'Stuttgart Factory' },
          { id: 'berlin', label: 'Berlin Warehouse' },
        ],
      },
      {
        name: 'priority',
        label: 'Priority (Single)',
        mode: 'single' as const,
        searchable: false,
        options: [
          { id: 'high', label: 'High' },
          { id: 'medium', label: 'Medium' },
          { id: 'low', label: 'Low' },
        ],
      },
    ];

    return (
      <div className="w-[900px] space-y-6 p-6">
        <DropdownFilters
          filterConfigs={filterConfigs}
          onFilterApply={(data) => console.log('Mixed modes:', data)}
          literals={{
            filter: 'Mixed Selection Modes',
            reset: 'Reset',
            apply: 'Apply',
          }}
        />
      </div>
    );
  },
};
