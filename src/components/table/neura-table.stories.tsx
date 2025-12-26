import { useState, useMemo } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NeuraColumnDef, Row, useNeuraTable } from './neura-table';
import { Table } from './table';
import { Badge } from '@/components/badge/badge';
import { Button } from '@/components/button/button';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/tooltip/tooltip';
import {
  MoreHorizontal,
  AlertCircle,
  Eye,
  Pencil,
  Trash2,
  Copy,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/dropdown-menu/dropdown-menu';

// =============================================================================
// Sample Data
// =============================================================================

interface Robot {
  id: string;
  name: string;
  model: string;
  application: string;
  facility: string;
  uptime: number;
  status: 'Active' | 'Maintenance' | 'Offline';
}

const robots: Robot[] = [
  {
    id: 'MAiRA-001',
    name: 'MAiRA Alpha',
    model: 'MAiRA',
    application: 'Palletizing',
    facility: 'Munich Plant A',
    uptime: 99.8,
    status: 'Active',
  },
  {
    id: 'LARA-002',
    name: 'LARA Beta',
    model: 'LARA',
    application: 'Machine Tending',
    facility: 'Stuttgart Factory',
    uptime: 98.5,
    status: 'Active',
  },
  {
    id: 'MAV-003',
    name: 'MAV Gamma',
    model: 'MAV',
    application: 'Logistics',
    facility: 'Berlin Warehouse',
    uptime: 97.2,
    status: 'Maintenance',
  },
  {
    id: '4NE1-004',
    name: '4NE1 Delta',
    model: '4NE1',
    application: 'Quality Inspection',
    facility: 'Hamburg Line B',
    uptime: 99.1,
    status: 'Active',
  },
  {
    id: 'MAiRA-005',
    name: 'MAiRA Epsilon',
    model: 'MAiRA',
    application: 'Welding',
    facility: 'Metzingen HQ',
    uptime: 99.5,
    status: 'Active',
  },
  {
    id: 'MiPA-006',
    name: 'MiPA Zeta',
    model: 'MiPA',
    application: 'Assistance',
    facility: 'Frankfurt Office',
    uptime: 99.9,
    status: 'Active',
  },
  {
    id: 'LARA-007',
    name: 'LARA Eta',
    model: 'LARA',
    application: 'Assembly',
    facility: 'Munich Plant B',
    uptime: 96.3,
    status: 'Active',
  },
  {
    id: 'MAiRA-008',
    name: 'MAiRA Theta',
    model: 'MAiRA',
    application: 'Packaging',
    facility: 'Stuttgart Factory',
    uptime: 98.7,
    status: 'Active',
  },
  {
    id: 'MAV-009',
    name: 'MAV Iota',
    model: 'MAV',
    application: 'Transport',
    facility: 'Berlin Warehouse',
    uptime: 94.1,
    status: 'Offline',
  },
  {
    id: '4NE1-010',
    name: '4NE1 Kappa',
    model: '4NE1',
    application: 'Inspection',
    facility: 'Hamburg Line A',
    uptime: 99.4,
    status: 'Active',
  },
  {
    id: 'MAiRA-011',
    name: 'MAiRA Lambda',
    model: 'MAiRA',
    application: 'Sorting',
    facility: 'Munich Plant A',
    uptime: 97.8,
    status: 'Active',
  },
  {
    id: 'LARA-012',
    name: 'LARA Mu',
    model: 'LARA',
    application: 'Polishing',
    facility: 'Cologne Plant',
    uptime: 98.2,
    status: 'Maintenance',
  },
  {
    id: 'MiPA-013',
    name: 'MiPA Nu',
    model: 'MiPA',
    application: 'Collaboration',
    facility: 'Dresden Lab',
    uptime: 99.6,
    status: 'Active',
  },
  {
    id: 'MAV-014',
    name: 'MAV Xi',
    model: 'MAV',
    application: 'Delivery',
    facility: 'Leipzig Center',
    uptime: 95.9,
    status: 'Active',
  },
  {
    id: '4NE1-015',
    name: '4NE1 Omicron',
    model: '4NE1',
    application: 'Testing',
    facility: 'Metzingen HQ',
    uptime: 99.0,
    status: 'Active',
  },
  {
    id: 'MAiRA-016',
    name: 'MAiRA Pi',
    model: 'MAiRA',
    application: 'Deburring',
    facility: 'Stuttgart Factory',
    uptime: 98.4,
    status: 'Active',
  },
  {
    id: 'LARA-017',
    name: 'LARA Rho',
    model: 'LARA',
    application: 'Grinding',
    facility: 'Munich Plant B',
    uptime: 97.1,
    status: 'Offline',
  },
  {
    id: 'MAV-018',
    name: 'MAV Sigma',
    model: 'MAV',
    application: 'Warehousing',
    facility: 'Frankfurt Office',
    uptime: 96.8,
    status: 'Active',
  },
  {
    id: 'MiPA-019',
    name: 'MiPA Tau',
    model: 'MiPA',
    application: 'Training',
    facility: 'Berlin Warehouse',
    uptime: 99.7,
    status: 'Active',
  },
  {
    id: '4NE1-020',
    name: '4NE1 Upsilon',
    model: '4NE1',
    application: 'Measurement',
    facility: 'Hamburg Line B',
    uptime: 98.9,
    status: 'Active',
  },
  {
    id: 'MAiRA-021',
    name: 'MAiRA Phi',
    model: 'MAiRA',
    application: 'Dispensing',
    facility: 'Cologne Plant',
    uptime: 99.2,
    status: 'Active',
  },
  {
    id: 'LARA-022',
    name: 'LARA Chi',
    model: 'LARA',
    application: 'Screwing',
    facility: 'Dresden Lab',
    uptime: 97.5,
    status: 'Maintenance',
  },
  {
    id: 'MAV-023',
    name: 'MAV Psi',
    model: 'MAV',
    application: 'Picking',
    facility: 'Leipzig Center',
    uptime: 95.4,
    status: 'Active',
  },
  {
    id: '4NE1-024',
    name: '4NE1 Omega',
    model: '4NE1',
    application: 'Scanning',
    facility: 'Munich Plant A',
    uptime: 99.3,
    status: 'Active',
  },
  {
    id: 'MAiRA-025',
    name: 'MAiRA Prime',
    model: 'MAiRA',
    application: 'Coating',
    facility: 'Metzingen HQ',
    uptime: 98.8,
    status: 'Active',
  },
  {
    id: 'MiPA-026',
    name: 'MiPA Ultra',
    model: 'MiPA',
    application: 'Monitoring',
    facility: 'Frankfurt Office',
    uptime: 99.5,
    status: 'Active',
  },
];

// =============================================================================
// Meta
// =============================================================================

const meta: Meta = {
  title: 'Components/NeuraTable',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Hook-based table following the Astor pattern. Uses TanStack Table columns directly.

## Usage

\`\`\`tsx
import { useNeuraTable, type ColumnDef } from '@/components/table/neura-table';
import { Table } from '@/components/table/table';

const columns: ColumnDef<Robot>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    enableSorting: true,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <Badge>{row.original.status}</Badge>,
  },
];

function MyTable() {
  const { table, NeuraTableHeader, NeuraTableBody } = useNeuraTable({
    data: robots,
    columns,
  });

  return (
    <Table>
      <NeuraTableHeader />
      <NeuraTableBody stripedRows onRowClick={(idx) => console.log(idx)} />
    </Table>
  );
}
\`\`\`

## What you get

- \`table\`: TanStack Table instance for advanced operations
- \`NeuraTableHeader\`: Pre-built header with sorting
- \`NeuraTableBody\`: Pre-built body with striping and row click
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// =============================================================================
// Stories
// =============================================================================

/**
 * ## Basic Usage
 *
 * Define columns using TanStack's ColumnDef format directly.
 */
export const Basic: Story = {
  render: function BasicExample() {
    const columns: NeuraColumnDef<Robot>[] = [
      { accessorKey: 'id', header: 'Robot ID', enableSorting: true },
      { accessorKey: 'name', header: 'Name', enableSorting: true },
      { accessorKey: 'model', header: 'Model', enableSorting: true },
      { accessorKey: 'application', header: 'Application' },
      { accessorKey: 'facility', header: 'Facility' },
      {
        accessorKey: 'uptime',
        header: 'Uptime',
        enableSorting: true,
        cell: ({ row }) => `${row.original.uptime.toFixed(1)}%`,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => (
          <Badge
            variant={
              row.original.status === 'Active'
                ? 'default'
                : row.original.status === 'Maintenance'
                  ? 'secondary'
                  : 'destructive'
            }
          >
            {row.original.status}
          </Badge>
        ),
      },
    ];

    const { NeuraTableHeader, NeuraTableBody } = useNeuraTable({
      data: robots,
      columns,
    });

    return (
      <Table>
        <NeuraTableHeader />
        <NeuraTableBody />
      </Table>
    );
  },
};

/**
 * ## With Sorting
 *
 * Click column headers to sort. Access sort state via `table.getState().sorting`.
 */
export const WithSorting: Story = {
  render: function SortingExample() {
    const columns: NeuraColumnDef<Robot>[] = [
      { accessorKey: 'id', header: 'Robot ID', enableSorting: true },
      { accessorKey: 'name', header: 'Name', enableSorting: true },
      { accessorKey: 'model', header: 'Model', enableSorting: true },
      {
        accessorKey: 'uptime',
        header: 'Uptime',
        enableSorting: true,
        cell: ({ row }) => `${row.original.uptime.toFixed(1)}%`,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => (
          <Badge
            variant={row.original.status === 'Active' ? 'default' : 'secondary'}
          >
            {row.original.status}
          </Badge>
        ),
      },
    ];

    const { table, NeuraTableHeader, NeuraTableBody } = useNeuraTable({
      data: robots,
      columns,
    });

    const sortState = table.getState().sorting;

    return (
      <div className="space-y-4">
        <pre className="text-muted-foreground text-sm">
          <code>
            Sort:{' '}
            {sortState.length > 0
              ? `${sortState[0].id} (${sortState[0].desc ? 'desc' : 'asc'})`
              : 'none'}
          </code>
        </pre>
        <Table>
          <NeuraTableHeader />
          <NeuraTableBody />
        </Table>
      </div>
    );
  },
};

/**
 * ## With Row Click
 */
export const WithRowClick: Story = {
  render: function RowClickExample() {
    const [selectedRow, setSelectedRow] = useState<Row<Robot> | null>(null);

    const columns: NeuraColumnDef<Robot>[] = [
      { accessorKey: 'id', header: 'Robot ID' },
      { accessorKey: 'name', header: 'Name' },
      { accessorKey: 'model', header: 'Model' },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => (
          <Badge
            variant={row.original.status === 'Active' ? 'default' : 'secondary'}
          >
            {row.original.status}
          </Badge>
        ),
      },
    ];

    const { NeuraTableHeader, NeuraTableBody } = useNeuraTable({
      data: robots,
      columns,
    });

    return (
      <div className="space-y-4">
        <p className="text-muted-foreground text-sm">
          Clicked row:{' '}
          {selectedRow !== null
            ? `Row ID: ${selectedRow.id} Robot Id: ${selectedRow.original.id} Robot name: ${selectedRow.original.name}`
            : 'none'}
        </p>
        <Table>
          <NeuraTableHeader />
          <NeuraTableBody onRowClick={setSelectedRow} />
        </Table>
      </div>
    );
  },
};

/**
 * ## Striped Rows
 */
export const StripedRows: Story = {
  render: function StripedExample() {
    const columns: NeuraColumnDef<Robot>[] = [
      { accessorKey: 'id', header: 'Robot ID' },
      { accessorKey: 'name', header: 'Name' },
      { accessorKey: 'model', header: 'Model' },
      { accessorKey: 'facility', header: 'Facility' },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => (
          <Badge
            variant={row.original.status === 'Active' ? 'default' : 'secondary'}
          >
            {row.original.status}
          </Badge>
        ),
      },
    ];

    const { NeuraTableHeader, NeuraTableBody } = useNeuraTable({
      data: robots,
      columns,
    });

    return (
      <Table>
        <NeuraTableHeader />
        <NeuraTableBody stripedRows />
      </Table>
    );
  },
};

/**
 * ## With Actions Column
 *
 * Shows a dropdown menu with actions for each row.
 */
export const WithActions: Story = {
  render: function ActionsExample() {
    const columns: NeuraColumnDef<Robot>[] = [
      {
        accessorKey: 'id',
        header: 'Robot ID',
        cell: ({ row }) => (
          <span className="font-medium">{row.original.id}</span>
        ),
      },
      { accessorKey: 'name', header: 'Name' },
      { accessorKey: 'model', header: 'Model' },
      {
        accessorKey: 'uptime',
        header: 'Uptime',
        cell: ({ row }) => `${row.original.uptime.toFixed(1)}%`,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => (
          <Badge
            variant={
              row.original.status === 'Active'
                ? 'default'
                : row.original.status === 'Maintenance'
                  ? 'secondary'
                  : 'destructive'
            }
          >
            {row.original.status}
          </Badge>
        ),
      },
      {
        id: 'actions',
        header: 'Actions',
        accessorKey: '',
        cell: ({ row }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="size-8">
                <MoreHorizontal className="size-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(row.original.id)}
              >
                <Copy />
                Copy ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Eye />
                View details
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Pencil />
                Edit robot
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <Trash2 />
                Delete robot
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      },
    ];

    const { NeuraTableHeader, NeuraTableBody } = useNeuraTable({
      data: robots,
      columns,
    });

    return (
      <Table>
        <NeuraTableHeader />
        <NeuraTableBody
          onRowClick={(row) => {
            console.log(row);
          }}
        />
      </Table>
    );
  },
};

/**
 * ## TanStack Table Access
 *
 * The `table` instance gives you full access to TanStack Table's API.
 */
export const TanStackAccess: Story = {
  render: function TanStackExample() {
    const columns: NeuraColumnDef<Robot>[] = [
      { accessorKey: 'id', header: 'Robot ID', enableSorting: true },
      { accessorKey: 'name', header: 'Name', enableSorting: true },
      { accessorKey: 'model', header: 'Model' },
    ];

    const { table, NeuraTableHeader, NeuraTableBody } = useNeuraTable({
      data: robots,
      columns,
    });

    return (
      <div className="space-y-4">
        <div className="bg-muted/50 rounded-lg p-4">
          <h3 className="mb-2 font-semibold">TanStack Table Instance</h3>
          <ul className="text-muted-foreground space-y-1 text-sm">
            <li>• Rows: {table.getRowModel().rows.length}</li>
            <li>• Columns: {table.getAllColumns().length}</li>
            <li>• Sorting: {JSON.stringify(table.getState().sorting)}</li>
          </ul>
        </div>
        <Table>
          <NeuraTableHeader />
          <NeuraTableBody />
        </Table>
      </div>
    );
  },
};

/**
 * ## Sticky Column
 *
 * Use `meta.sticky` to make columns sticky.
 */
export const StickyColumn: Story = {
  render: function StickyExample() {
    const columns: NeuraColumnDef<Robot>[] = [
      {
        accessorKey: 'id',
        header: 'Robot ID',
        sticky: true,
        width: 100,
      },
      { accessorKey: 'name', header: 'Name', enableSorting: true },
      { accessorKey: 'model', header: 'Model' },
      { accessorKey: 'application', header: 'Application' },
      { accessorKey: 'facility', header: 'Facility' },
      {
        accessorKey: 'uptime',
        header: 'Uptime',
        cell: ({ row }) => `${row.original.uptime.toFixed(1)}%`,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => (
          <Badge
            variant={row.original.status === 'Active' ? 'default' : 'secondary'}
          >
            {row.original.status}
          </Badge>
        ),
      },
    ];

    const { NeuraTableHeader, NeuraTableBody } = useNeuraTable({
      data: robots,
      columns,
    });

    return (
      <div className="max-w-xl">
        <Table>
          <NeuraTableHeader />
          <NeuraTableBody />
        </Table>
      </div>
    );
  },
};

/**
 * ## With Tooltips
 *
 * Add tooltips to headers via `meta.tooltip` and to cells with custom renderers.
 */
export const WithTooltips: Story = {
  render: function TooltipsExample() {
    const columns = useMemo<NeuraColumnDef<Robot>[]>(
      () => [
        { accessorKey: 'id', header: 'Robot ID', enableSorting: true },
        { accessorKey: 'name', header: 'Name', enableSorting: true },
        {
          accessorKey: 'model',
          header: 'Model',

          tooltip: 'Robot model series (MAiRA, LARA, MAV, 4NE1, MiPA)',
        },
        {
          accessorKey: 'uptime',
          header: 'Uptime',
          enableSorting: true,
          tooltip:
            'Percentage of time the robot has been operational in the last 30 days',

          cell: ({ row }: { row: { original: Robot } }) =>
            `${row.original.uptime.toFixed(1)}%`,
        },
        {
          accessorKey: 'status',
          header: 'Status',
          tooltip: 'Current operational status',
          cell: ({ row }: { row: { original: Robot } }) => {
            const status = row.original.status;
            const isWarning = status === 'Maintenance' || status === 'Offline';

            return (
              <div className="flex items-center gap-1.5">
                <Badge
                  variant={
                    status === 'Active'
                      ? 'default'
                      : status === 'Maintenance'
                        ? 'secondary'
                        : 'destructive'
                  }
                >
                  {status}
                </Badge>
                {isWarning && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <AlertCircle className="text-destructive size-4 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      {status === 'Maintenance'
                        ? 'Scheduled maintenance in progress'
                        : 'Robot is offline - check connectivity'}
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
            );
          },
        },
      ],
      [],
    );

    const data = useMemo(() => robots.slice(0, 10), []);

    const { NeuraTableHeader, NeuraTableBody } = useNeuraTable({
      data,
      columns,
    });

    return (
      <Table>
        <NeuraTableHeader />
        <NeuraTableBody />
      </Table>
    );
  },
};

/**
 * ## Column Definition Guide
 *
 * This story demonstrates the different ways to define columns:
 *
 * - **accessorKey**: Simple key to access data from the row object
 * - **id**: Unique identifier (auto-generated from accessorKey if not provided)
 * - **cell**: Custom render function for the cell content
 * - **header**: Column header text
 * - **tooltip**: Optional tooltip for the header
 * - **sortable**: Enable sorting for this column
 * - **sticky**: Make the column sticky
 */
// Sample data defined outside component to avoid recreation
interface SampleRobot {
  id: string;
  name: string;
  specs: { weight: number; payload: number };
  status: string;
  uptime: number;
}

const sampleRobotData: SampleRobot[] = [
  {
    id: 'MAiRA-001',
    name: 'MAiRA Alpha',
    specs: { weight: 25, payload: 10 },
    status: 'Active',
    uptime: 99.8,
  },
  {
    id: 'LARA-002',
    name: 'LARA Beta',
    specs: { weight: 18, payload: 5 },
    status: 'Maintenance',
    uptime: 97.2,
  },
  {
    id: 'MAV-003',
    name: 'MAV Gamma',
    specs: { weight: 120, payload: 50 },
    status: 'Active',
    uptime: 98.5,
  },
];

export const ColumnDefinitionGuide: Story = {
  render: function ColumnGuideExample() {
    const columns = useMemo<NeuraColumnDef<SampleRobot>[]>(
      () => [
        // 1. Simple accessorKey - most common case
        // id is auto-generated as 'id'
        {
          accessorKey: 'id',
          header: 'Robot ID',
          tooltip: 'accessorKey: "id" - Simple key access',
        },

        // 2. accessorKey with custom cell renderer
        {
          accessorKey: 'name',
          header: 'Name',
          tooltip: 'accessorKey + cell: Custom rendering',
          cell: ({ row }: { row: Row<SampleRobot> }) => (
            <span className="font-semibold text-primary">
              {row.original.name}
            </span>
          ),
        },

        // 3. Computed value using cell (no direct accessorKey match)
        {
          accessorKey: 'specs',
          header: 'Specs',
          tooltip: 'Accessing nested object: specs.weight, specs.payload',
          cell: ({ row }: { row: Row<SampleRobot> }) => (
            <span className="text-muted-foreground text-sm">
              {row.original.specs.weight}kg / {row.original.specs.payload}kg
              payload
            </span>
          ),
        },

        // 4. Formatted value
        {
          accessorKey: 'uptime',
          header: 'Uptime',
          sortable: true,
          tooltip: 'Formatted number with sorting enabled',
          cell: ({ row }: { row: Row<SampleRobot> }) =>
            `${row.original.uptime.toFixed(1)}%`,
        },

        // 5. Conditional rendering
        {
          accessorKey: 'status',
          header: 'Status',
          tooltip: 'Conditional badge based on value',
          cell: ({ row }: { row: Row<SampleRobot> }) => (
            <Badge
              variant={
                row.original.status === 'Active' ? 'default' : 'secondary'
              }
            >
              {row.original.status}
            </Badge>
          ),
        },

        // 6. Action column - requires explicit id since no data field
        {
          id: 'actions', // ← Required! No accessorKey for this column
          accessorKey: '', // Empty string as placeholder
          header: 'Actions',
          tooltip: 'id: "actions" - No data field, just UI',
          cell: () => (
            <Button variant="outline" size="sm">
              View
            </Button>
          ),
        },
      ],
      [],
    );

    const { NeuraTableHeader, NeuraTableBody } = useNeuraTable({
      data: sampleRobotData,
      columns,
    });

    return (
      <div className="space-y-4">
        <div className="bg-muted/50 rounded-lg p-4">
          <h3 className="mb-3 font-semibold">Column Definition Patterns</h3>
          <ul className="text-muted-foreground space-y-2 text-sm">
            <li>
              <code className="bg-muted rounded px-1">accessorKey</code> - Key
              to access row data (e.g., "name" → row.name)
            </li>
            <li>
              <code className="bg-muted rounded px-1">id</code> - Unique
              identifier (auto-generated from accessorKey if not set)
            </li>
            <li>
              <code className="bg-muted rounded px-1">cell</code> - Custom
              render function, receives {'{row}'}
            </li>
            <li>
              <code className="bg-muted rounded px-1">header</code> - Column
              header text
            </li>
            <li>
              <code className="bg-muted rounded px-1">tooltip</code> - Info
              icon with tooltip on header
            </li>
            <li>
              <code className="bg-muted rounded px-1">sortable</code> - Enable
              column sorting
            </li>
          </ul>
        </div>
        <p className="text-muted-foreground text-sm">
          💡 Hover over the <span className="text-primary">ℹ️</span> icons in
          each column header to see how each column is defined.
        </p>
        <Table>
          <NeuraTableHeader />
          <NeuraTableBody />
        </Table>
      </div>
    );
  },
};
