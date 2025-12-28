import { useState, useMemo, useCallback } from 'react';
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
import { robots, type Robot } from './stories-utils';

const meta: Meta = {
  title: 'Components/NeuraTable/Client Side',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Hook-based table following the TanStack pattern. Uses TanStack Table columns directly.

## Usage

\`\`\`tsx
import { useNeuraTable, type ColumnDef } from '@/components/table/neura-table';
import { Table } from '@/components/table/table';

const columns: ColumnDef<Robot>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    
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

/**
 * ## Basic Usage
 *
 * Define columns using TanStack's ColumnDef format directly.
 */
export const Basic: Story = {
  render: function BasicExample() {
    const columns: NeuraColumnDef<Robot>[] = [
      { accessorKey: 'id', header: 'Robot ID', enableSorting: false },
      { accessorKey: 'name', header: 'Name' },
      {
        accessorKey: 'model',
        header: 'Model',
        tooltip: 'Robot model series (MAiRA, LARA, MAV, 4NE1, MiPA)',
      },
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
        enableSorting: false,
        tooltip: 'Robot stuses (Offline, Active, Online)',
      },
    ];

    const { NeuraTableHeader, NeuraTableBody, NeuraTableFooter } =
      useNeuraTable({
        data: robots,
        columns,
        pagination: {
          pageSize: 5,
          itemLabel: 'robots',
        },
      });

    return (
      <Table>
        <NeuraTableHeader />
        <NeuraTableBody />
        <NeuraTableFooter />
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

    const { NeuraTableHeader, NeuraTableBody, NeuraTableFooter } =
      useNeuraTable({
        data: robots,
        columns,
        pagination: {
          pageSize: 5,
          itemLabel: 'robots',
        },
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
          <NeuraTableFooter />
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
 * ## With Pagination
 *
 * Enable pagination by passing a `pagination` config with `pageSize`.
 * The hook returns a `NeuraTablePagination` component to render.
 */
export const WithPagination: Story = {
  render: function PaginationExample() {
    const columns: NeuraColumnDef<Robot>[] = [
      { accessorKey: 'id', header: 'Robot ID', enableSorting: true },
      { accessorKey: 'name', header: 'Name', enableSorting: true },
      { accessorKey: 'model', header: 'Model' },
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

    const { NeuraTableHeader, NeuraTableBody, NeuraTableFooter } =
      useNeuraTable({
        data: robots,
        columns,
        pagination: {
          pageSize: 4,
          siblings: 1,
          itemLabel: 'robots',
        },
      });

    return (
      <Table>
        <NeuraTableHeader />
        <NeuraTableBody stripedRows />
        <NeuraTableFooter />
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

    const { NeuraTableHeader, NeuraTableBody, NeuraTableFooter } =
      useNeuraTable({
        data: robots,
        columns,
        pagination: {
          pageSize: 5,
          itemLabel: 'robots',
        },
      });

    return (
      <Table>
        <NeuraTableHeader />
        <NeuraTableBody
          onRowClick={(row) => {
            console.log(row);
          }}
        />
        <NeuraTableFooter />
      </Table>
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

    const { NeuraTableHeader, NeuraTableBody, NeuraTableFooter } =
      useNeuraTable({
        data: robots,
        columns,
        pagination: {
          pageSize: 5,
          itemLabel: 'robots',
        },
      });

    return (
      <div className="max-w-xl">
        <Table>
          <NeuraTableHeader />
          <NeuraTableBody />
          <NeuraTableFooter />
        </Table>
      </div>
    );
  },
};

/**
 * ## Sticky Header
 *
 * Keep the table header fixed while scrolling through rows.
 *
 * **⚠️ Important:** Requires a special container structure for sticky to work correctly.
 * The container uses `grid` with child selectors to apply overflow without breaking sticky positioning.
 *
 * See the implementation below for the exact structure needed.
 */
export const StickyHeader: Story = {
  parameters: {
    layout: 'centered',
  },
  render: function StickyHeaderExample() {
    const columns: NeuraColumnDef<Robot>[] = [
      {
        accessorKey: 'id',
        header: 'Robot ID',
        enableSorting: true,
      },
      { accessorKey: 'name', header: 'Name', enableSorting: true },
      { accessorKey: 'model', header: 'Model' },
      { accessorKey: 'application', header: 'Application' },
      { accessorKey: 'facility', header: 'Facility', enableSorting: true },
      {
        accessorKey: 'uptime',
        header: 'Uptime',
        cell: ({ row }) => `${row.original.uptime.toFixed(1)}%`,
        enableSorting: true,
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
      stickyHeader: true, // Enable sticky header
    });

    return (
      <div className="space-y-4">
        {/* 
          Special container structure required for sticky header:
          - Uses grid with [&>div] selectors  
          - Applies overflow and styling to child divs
          - This prevents overflow from breaking sticky positioning
          
          Scroll INSIDE the table with your mouse wheel to see the header stick.
        */}
        <div className="grid w-full [&>div]:max-h-[300px] [&>div]:rounded [&>div]:border">
          <Table>
            <NeuraTableHeader />
            <NeuraTableBody stripedRows />
          </Table>
        </div>

        <details className="bg-muted/50 mt-4 rounded-lg">
          <summary className="text-foreground hover:bg-muted/70 cursor-pointer p-3 text-sm font-semibold">
            💡 Implementation Guide (click to expand)
          </summary>
          <div className="p-3 pt-0">
            <ul className="text-muted-foreground space-y-1 text-xs">
              <li>
                • Set{' '}
                <code className="text-foreground">stickyHeader: true</code> in
                useNeuraTable
              </li>
              <li>• Wrap Table in special container (see code above)</li>
              <li>
                • Set <code className="text-foreground">scrollable: false</code>{' '}
                on Table component
              </li>
              <li>
                • Adjust{' '}
                <code className="text-foreground">
                  [&amp;&gt;div]:max-h-[value]
                </code>{' '}
                as needed
              </li>
              <li>
                • Scroll happens <strong>inside the table container</strong>,
                not the page
              </li>
            </ul>
          </div>
        </details>
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
 * ## Selectable Rows
 *
 * Table with checkbox selection. Uses a custom column for the checkbox
 * and manages selection state externally.
 */
export const SelectableRows: Story = {
  render: function SelectableRowsExample() {
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

    const allRowIds = robots.map((robot) => robot.id);
    const isAllSelected = selectedIds.size === robots.length;
    const isSomeSelected =
      selectedIds.size > 0 && selectedIds.size < robots.length;

    const handleSelectAll = () => {
      if (isAllSelected) {
        setSelectedIds(new Set());
      } else {
        setSelectedIds(new Set(allRowIds));
      }
    };

    const handleSelectRow = useCallback((id: string) => {
      setSelectedIds((prev) => {
        const newSelected = new Set(prev);
        if (newSelected.has(id)) {
          newSelected.delete(id);
        } else {
          newSelected.add(id);
        }
        return newSelected;
      });
    }, []);

    const columns = useMemo<NeuraColumnDef<Robot>[]>(
      () => [
        {
          id: 'select',
          accessorKey: '',
          header: '',
          width: 50,
          cell: ({ row }: { row: Row<Robot> }) => (
            <input
              type="checkbox"
              className="size-4 cursor-pointer"
              checked={selectedIds.has(row.original.id)}
              onChange={() => handleSelectRow(row.original.id)}
              aria-label={`Select ${row.original.name}`}
            />
          ),
        },
        { accessorKey: 'id', header: 'Robot ID' },
        { accessorKey: 'name', header: 'Name' },
        { accessorKey: 'model', header: 'Model' },
        { accessorKey: 'facility', header: 'Facility' },
        {
          accessorKey: 'uptime',
          header: 'Uptime',
          cell: ({ row }: { row: Row<Robot> }) =>
            `${row.original.uptime.toFixed(1)}%`,
        },
        {
          accessorKey: 'status',
          header: 'Status',
          cell: ({ row }: { row: Row<Robot> }) => (
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
      ],
      [selectedIds, handleSelectRow],
    );

    const { NeuraTableBody } = useNeuraTable({
      data: robots,
      columns,
    });

    // Custom header with "Select All" checkbox
    const SelectAllHeader = () => (
      <thead className="bg-muted/50 [&_tr]:border-b">
        <tr className="border-b transition-colors">
          <th className="text-muted-foreground h-10 px-2 text-left align-middle font-medium">
            <Tooltip>
              <TooltipTrigger asChild>
                <input
                  type="checkbox"
                  className="size-4 cursor-pointer"
                  checked={isAllSelected}
                  ref={(el) => {
                    if (el) el.indeterminate = isSomeSelected;
                  }}
                  onChange={handleSelectAll}
                  aria-label="Select all robots"
                />
              </TooltipTrigger>
              <TooltipContent>
                {isAllSelected ? 'Deselect all' : 'Select all'}
              </TooltipContent>
            </Tooltip>
          </th>
          <th className="text-muted-foreground h-10 px-2 text-left align-middle font-medium">
            Robot ID
          </th>
          <th className="text-muted-foreground h-10 px-2 text-left align-middle font-medium">
            Name
          </th>
          <th className="text-muted-foreground h-10 px-2 text-left align-middle font-medium">
            Model
          </th>
          <th className="text-muted-foreground h-10 px-2 text-left align-middle font-medium">
            Facility
          </th>
          <th className="text-muted-foreground h-10 px-2 text-left align-middle font-medium">
            Uptime
          </th>
          <th className="text-muted-foreground h-10 px-2 text-left align-middle font-medium">
            Status
          </th>
        </tr>
      </thead>
    );

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground text-sm">
            Selected: {selectedIds.size} of {robots.length} robots
          </div>
          {selectedIds.size > 0 && (
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Eye className="mr-2 size-4" />
                View Selected
              </Button>
              <Button size="sm" variant="destructive">
                <Trash2 className="mr-2 size-4" />
                Delete Selected
              </Button>
            </div>
          )}
        </div>
        <Table>
          <SelectAllHeader />
          <NeuraTableBody />
        </Table>
      </div>
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
 * ## Column Definition Guide
 *
 * This story demonstrates the different ways to define columns:
 *
 * - **accessorKey**: Simple key to access data from the row object
 * - **id**: Unique identifier (auto-generated from accessorKey if not provided)
 * - **cell**: Custom render function for the cell content
 * - **header**: Column header text
 * - **tooltip**: Optional tooltip for the header
 * - **enableSorting**: Enable sorting for this column
 * - **sticky**: Make the column sticky
 */
export const ColumnDefinitionGuide: Story = {
  render: function ColumnGuideExample() {
    // Use only first 5 robots for cleaner display
    const sampleData = useMemo(() => robots.slice(0, 5), []);

    const columns = useMemo<NeuraColumnDef<Robot>[]>(
      () => [
        // 1. Simple accessorKey - most common case
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
          cell: ({ row }: { row: Row<Robot> }) => (
            <span className="text-primary font-semibold">
              {row.original.name}
            </span>
          ),
        },

        // 3. Combining multiple fields in one cell
        {
          accessorKey: 'model',
          header: 'Model & App',
          tooltip: 'Combining model + application in one cell',
          cell: ({ row }: { row: Row<Robot> }) => (
            <span className="text-muted-foreground text-sm">
              {row.original.model} — {row.original.application}
            </span>
          ),
        },

        // 4. Formatted value
        {
          accessorKey: 'uptime',
          header: 'Uptime',
          tooltip: 'Formatted number with percentage',
          cell: ({ row }: { row: Row<Robot> }) =>
            `${row.original.uptime.toFixed(1)}%`,
        },

        // 5. Conditional rendering
        {
          accessorKey: 'status',
          header: 'Status',
          tooltip: 'Conditional badge based on value',
          cell: ({ row }: { row: Row<Robot> }) => (
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

        // 6. Action column - requires explicit id since no data field
        {
          id: 'actions',
          accessorKey: '',
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
      data: sampleData,
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
              <code className="bg-muted rounded px-1">tooltip</code> - Info icon
              with tooltip on header
            </li>
            <li>
              <code className="bg-muted rounded px-1">enableSorting</code> -
              Enable column sorting
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
