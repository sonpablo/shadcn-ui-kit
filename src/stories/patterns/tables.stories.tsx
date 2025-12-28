import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  type SortDirection,
} from '@/components/table/table';
import { Badge } from '@/components/badge/badge';
import { Button } from '@/components/button/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/tooltip/tooltip';
import { NeuraPagination } from '@/components/pagination/neura-pagination';
import { MoreHorizontal, Info, Eye, Pencil, Trash2, Copy } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/dropdown-menu/dropdown-menu';

// Sample data - Robot Fleet
const robots = [
  {
    id: 'MAiRA-001',
    name: 'MAiRA Alpha',
    serialNumber: 'NR-2025-MAI-0001',
    model: 'MAiRA',
    application: 'Palletizing',
    facility: 'Munich Plant A',
    uptime: '99.8%',
    deployDate: '2024-01-15',
    operator: 'Anna Schmidt',
    status: 'Active',
  },
  {
    id: 'LARA-002',
    name: 'LARA Beta',
    serialNumber: 'NR-2025-LAR-0002',
    model: 'LARA',
    application: 'Machine Tending',
    facility: 'Stuttgart Factory',
    uptime: '98.5%',
    deployDate: '2024-03-20',
    operator: 'Marcus Weber',
    status: 'Active',
  },
  {
    id: 'MAV-003',
    name: 'MAV Gamma',
    serialNumber: 'NR-2025-MAV-0003',
    model: 'MAV',
    application: 'Logistics',
    facility: 'Berlin Warehouse',
    uptime: '97.2%',
    deployDate: '2023-07-10',
    operator: 'Klaus Fischer',
    status: 'Maintenance',
  },
  {
    id: '4NE1-004',
    name: '4NE1 Delta',
    serialNumber: 'NR-2025-4NE-0004',
    model: '4NE1',
    application: 'Quality Inspection',
    facility: 'Hamburg Line B',
    uptime: '99.1%',
    deployDate: '2024-02-28',
    operator: 'Laura Müller',
    status: 'Active',
  },
  {
    id: 'MAiRA-005',
    name: 'MAiRA Epsilon',
    serialNumber: 'NR-2025-MAI-0005',
    model: 'MAiRA',
    application: 'Welding',
    facility: 'Metzingen HQ',
    uptime: '99.5%',
    deployDate: '2024-11-05',
    operator: 'Thomas Braun',
    status: 'Active',
  },
  {
    id: 'MiPA-006',
    name: 'MiPA Zeta',
    serialNumber: 'NR-2025-MIP-0006',
    model: 'MiPA',
    application: 'Assistance',
    facility: 'Frankfurt Office',
    uptime: '99.9%',
    deployDate: '2024-06-15',
    operator: 'Sophie Hoffmann',
    status: 'Active',
  },
];

const meta = {
  title: 'Patterns/Tables',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

/* =============================================================================
 * Sticky Columns
 * ============================================================================= */

/**
 * Table with sticky first column (left)
 */
export const StickyLeftColumn: Story = {
  render: () => (
    <TooltipProvider>
      <div className="max-w-2xl rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead sticky className="w-[100px]">
                Robot ID
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Serial Number</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Application</TableHead>
              <TableHead>Facility</TableHead>
              <TableHead>Uptime</TableHead>
              <TableHead>Deploy Date</TableHead>
              <TableHead>Operator</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {robots.map((robot) => (
              <TableRow key={robot.id}>
                <TableCell sticky className="font-medium">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="cursor-help">{robot.id}</span>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      Robot ID: {robot.id}
                    </TooltipContent>
                  </Tooltip>
                </TableCell>
                <TableCell>{robot.name}</TableCell>
                <TableCell>{robot.serialNumber}</TableCell>
                <TableCell>{robot.model}</TableCell>
                <TableCell>{robot.application}</TableCell>
                <TableCell>{robot.facility}</TableCell>
                <TableCell>{robot.uptime}</TableCell>
                <TableCell>{robot.deployDate}</TableCell>
                <TableCell>{robot.operator}</TableCell>
                <TableCell>{robot.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TooltipProvider>
  ),
};

/**
 * Table with sticky column and custom background color
 */
export const StickyWithCustomBackground: Story = {
  render: () => (
    <TooltipProvider>
      <div className="max-w-2xl rounded-lg border bg-red-500 p-4">
        <Table>
          <TableHeader>
            <TableRow className="border-red-400">
              <TableHead
                sticky
                stickyBgClass="bg-red-500"
                className="w-[100px] text-white"
              >
                Robot ID
              </TableHead>
              <TableHead className="text-white">Name</TableHead>
              <TableHead className="text-white">Serial Number</TableHead>
              <TableHead className="text-white">Model</TableHead>
              <TableHead className="text-white">Application</TableHead>
              <TableHead className="text-white">Facility</TableHead>
              <TableHead className="text-white">Uptime</TableHead>
              <TableHead className="text-white">Deploy Date</TableHead>
              <TableHead className="text-white">Operator</TableHead>
              <TableHead className="text-white">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {robots.map((robot) => (
              <TableRow
                key={robot.id}
                className="border-red-400 text-white hover:bg-red-600"
              >
                <TableCell
                  sticky
                  stickyBgClass="bg-red-500"
                  className="font-medium"
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="cursor-help">{robot.id}</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      Sticky with custom bg: {robot.id}
                    </TooltipContent>
                  </Tooltip>
                </TableCell>
                <TableCell>{robot.name}</TableCell>
                <TableCell>{robot.serialNumber}</TableCell>
                <TableCell>{robot.model}</TableCell>
                <TableCell>{robot.application}</TableCell>
                <TableCell>{robot.facility}</TableCell>
                <TableCell>{robot.uptime}</TableCell>
                <TableCell>{robot.deployDate}</TableCell>
                <TableCell>{robot.operator}</TableCell>
                <TableCell>{robot.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TooltipProvider>
  ),
};

/**
 * Table with sticky last column (right) - useful for actions
 */
export const StickyRightColumn: Story = {
  render: () => (
    <TooltipProvider>
      <div className="max-w-2xl rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Robot ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Serial Number</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Application</TableHead>
              <TableHead>Facility</TableHead>
              <TableHead>Uptime</TableHead>
              <TableHead>Deploy Date</TableHead>
              <TableHead>Operator</TableHead>
              <TableHead sticky="right" align="center" className="w-[100px]">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {robots.map((robot) => (
              <TableRow key={robot.id}>
                <TableCell className="font-medium">{robot.id}</TableCell>
                <TableCell>{robot.name}</TableCell>
                <TableCell>{robot.serialNumber}</TableCell>
                <TableCell>{robot.model}</TableCell>
                <TableCell>{robot.application}</TableCell>
                <TableCell>{robot.facility}</TableCell>
                <TableCell>{robot.uptime}</TableCell>
                <TableCell>{robot.deployDate}</TableCell>
                <TableCell>{robot.operator}</TableCell>
                <TableCell sticky="right" align="center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="size-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem
                        onClick={() => navigator.clipboard.writeText(robot.id)}
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TooltipProvider>
  ),
};

/**
 * Table with multiple sticky columns using stickyOffset
 *
 * How to calculate stickyOffset:
 * - First sticky column: stickyOffset="0" (or omit it)
 * - Second sticky column: stickyOffset = width of first column
 * - Third sticky column: stickyOffset = width of first + second columns
 */
export const MultipleStickyColumns: Story = {
  render: () => (
    <TooltipProvider>
      <div className="max-w-xl rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead sticky stickyOffset="0">
                Robot ID
              </TableHead>
              <TableHead sticky stickyOffset="90px" className="w-[120px]">
                Name
              </TableHead>
              <TableHead>Serial Number</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Application</TableHead>
              <TableHead>Facility</TableHead>
              <TableHead>Uptime</TableHead>
              <TableHead>Deploy Date</TableHead>
              <TableHead>Operator</TableHead>
              <TableHead sticky="right" align="center" className="w-[100px]">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {robots.map((robot) => (
              <TableRow key={robot.id}>
                <TableCell sticky stickyOffset="0" className="font-medium">
                  {robot.id}
                </TableCell>
                <TableCell sticky stickyOffset="90px">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="cursor-help">{robot.name}</span>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      Second sticky column: {robot.name}
                    </TooltipContent>
                  </Tooltip>
                </TableCell>
                <TableCell>{robot.serialNumber}</TableCell>
                <TableCell>{robot.model}</TableCell>
                <TableCell>{robot.application}</TableCell>
                <TableCell>{robot.facility}</TableCell>
                <TableCell>{robot.uptime}</TableCell>
                <TableCell>{robot.deployDate}</TableCell>
                <TableCell>{robot.operator}</TableCell>
                <TableCell sticky="right" align="center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="size-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem
                        onClick={() => navigator.clipboard.writeText(robot.id)}
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TooltipProvider>
  ),
};

/**
 * Table with sticky header - header remains visible while scrolling through rows.
 * Perfect for long lists of data where you need to keep column headers visible.
 */
export const StickyHeader: Story = {
  render: () => {
    // Generate extended robot data for scrolling demo
    const extendedRobots = [
      ...robots,
      {
        id: 'MAiRA-007',
        name: 'MAiRA Eta',
        serialNumber: 'NR-2025-MAI-0007',
        model: 'MAiRA',
        application: 'Assembly',
        facility: 'Cologne Plant',
        uptime: '99.3%',
        deployDate: '2024-08-12',
        operator: 'Julia Schneider',
        status: 'Active',
      },
      {
        id: 'LARA-008',
        name: 'LARA Theta',
        serialNumber: 'NR-2025-LAR-0008',
        model: 'LARA',
        application: 'Packaging',
        facility: 'Düsseldorf Facility',
        uptime: '98.8%',
        deployDate: '2024-09-01',
        operator: 'Michael Lang',
        status: 'Active',
      },
      {
        id: 'MAV-009',
        name: 'MAV Iota',
        serialNumber: 'NR-2025-MAV-0009',
        model: 'MAV',
        application: 'Transport',
        facility: 'Nuremberg Warehouse',
        uptime: '97.9%',
        deployDate: '2024-10-15',
        operator: 'Eva Klein',
        status: 'Active',
      },
      {
        id: '4NE1-010',
        name: '4NE1 Kappa',
        serialNumber: 'NR-2025-4NE-0010',
        model: '4NE1',
        application: 'Testing',
        facility: 'Dresden Lab',
        uptime: '99.6%',
        deployDate: '2024-11-20',
        operator: 'Stefan Meyer',
        status: 'Active',
      },
      {
        id: 'MAiRA-011',
        name: 'MAiRA Lambda',
        serialNumber: 'NR-2025-MAI-0011',
        model: 'MAiRA',
        application: 'Sorting',
        facility: 'Leipzig Center',
        uptime: '98.2%',
        deployDate: '2024-12-05',
        operator: 'Nina Becker',
        status: 'Maintenance',
      },
      {
        id: 'MiPA-012',
        name: 'MiPA Mu',
        serialNumber: 'NR-2025-MIP-0012',
        model: 'MiPA',
        application: 'Guidance',
        facility: 'Bonn Office',
        uptime: '99.7%',
        deployDate: '2025-01-10',
        operator: 'Oliver Richter',
        status: 'Active',
      },
    ];

    return (
      <div className="space-y-4">
        {/* 
          IMPORTANT: The container uses Tailwind's arbitrary variant selector [&>div]
          This applies styles to direct child divs, which is necessary because:
          - Applying overflow directly to a parent wrapper breaks sticky positioning
          - The [&>div] selector targets the <div> that Storybook wraps around the Table
          - This keeps the sticky header working correctly
        */}
        <div className="grid w-full [&>div]:max-h-[400px] [&>div]:overflow-auto [&>div]:rounded-lg [&>div]:border">
          <Table>
            <TableHeader>
              <TableRow className="bg-background after:bg-border sticky top-0 *:whitespace-nowrap after:absolute after:inset-x-0 after:bottom-0 after:h-px after:content-['']">
                <TableHead>Robot ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Application</TableHead>
                <TableHead>Facility</TableHead>
                <TableHead>Uptime</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="overflow-hidden">
              {extendedRobots.map((robot) => (
                <TableRow
                  key={robot.id}
                  className="odd:bg-muted/50 *:whitespace-nowrap"
                >
                  <TableCell className="font-medium">{robot.id}</TableCell>
                  <TableCell>{robot.name}</TableCell>
                  <TableCell>{robot.model}</TableCell>
                  <TableCell>{robot.application}</TableCell>
                  <TableCell>{robot.facility}</TableCell>
                  <TableCell>{robot.uptime}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        robot.status === 'Active' ? 'default' : 'secondary'
                      }
                    >
                      {robot.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="bg-muted/50 rounded-lg p-4">
          <h4 className="mb-2 text-sm font-semibold">
            💡 Implementation Guide
          </h4>

          <div className="mb-3 rounded border border-amber-500/20 bg-amber-500/10 p-2">
            <p className="text-xs font-medium text-amber-700 dark:text-amber-400">
              ⚠️ Why the special syntax?
            </p>
            <p className="text-muted-foreground mt-1 text-xs">
              The <code className="text-foreground">[&amp;&gt;div]</code>{' '}
              selector is necessary because applying{' '}
              <code className="text-foreground">overflow</code> to a parent
              wrapper breaks <code className="text-foreground">sticky</code>{' '}
              positioning. This Tailwind arbitrary variant targets child
              elements directly.
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-foreground mb-1.5 text-xs font-medium">
                1. Container with Grid + Child Selectors
              </p>
              <div className="bg-muted rounded p-2">
                <code className="text-foreground block text-xs">
                  &lt;div className="grid w-full
                  <br />
                  &nbsp;&nbsp;[&amp;&gt;div]:max-h-[400px]
                  <br />
                  &nbsp;&nbsp;[&amp;&gt;div]:overflow-auto
                  <br />
                  &nbsp;&nbsp;[&amp;&gt;div]:rounded-lg
                  <br />
                  &nbsp;&nbsp;[&amp;&gt;div]:border"&gt;
                </code>
              </div>
              <p className="text-muted-foreground mt-1 text-xs">
                Uses <code className="text-foreground">grid</code> container
                with child selectors to apply styles without breaking sticky
              </p>
            </div>

            <div>
              <p className="text-foreground mb-1.5 text-xs font-medium">
                2. Sticky Header Row
              </p>
              <div className="bg-muted rounded p-2">
                <code className="text-foreground block text-xs">
                  &lt;TableRow className="sticky top-0
                  <br />
                  &nbsp;&nbsp;bg-background
                  <br />
                  &nbsp;&nbsp;after:absolute after:inset-x-0
                  <br />
                  &nbsp;&nbsp;after:bottom-0 after:h-px
                  <br />
                  &nbsp;&nbsp;after:bg-border after:content-['']"&gt;
                </code>
              </div>
              <p className="text-muted-foreground mt-1 text-xs">
                The <code className="text-foreground">after:</code>{' '}
                pseudo-element creates the bottom border
              </p>
            </div>

            <div>
              <p className="text-foreground mb-1.5 text-xs font-medium">
                3. Cell Styling (Optional)
              </p>
              <ul className="text-muted-foreground space-y-1 text-xs">
                <li>
                  • <code className="text-foreground">*:whitespace-nowrap</code>{' '}
                  - Prevents text wrapping in all cells
                </li>
                <li>
                  • <code className="text-foreground">odd:bg-muted/50</code> -
                  Zebra striping for rows
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-3 rounded border border-blue-500/20 bg-blue-500/10 p-2">
            <p className="text-xs font-medium text-blue-700 dark:text-blue-400">
              💡 Alternative (simpler but no sticky)
            </p>
            <p className="text-muted-foreground mt-1 text-xs">
              If you don't need sticky header, you can use a simpler structure
              with nested divs and{' '}
              <code className="text-foreground">overflow-auto</code> on the
              inner container.
            </p>
          </div>

          <p className="text-muted-foreground mt-3 text-xs">
            📖 Based on{' '}
            <a
              href="https://www.shadcnui-blocks.com/components/table"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              shadcn UI Blocks
            </a>{' '}
            - Check their repo for more examples
          </p>
        </div>
      </div>
    );
  },
};

/* =============================================================================
 * Interactive Tables
 * ============================================================================= */

/**
 * Table with selectable rows and "select all" functionality
 */
export const SelectableRows: Story = {
  render: function SelectableRowsComponent() {
    const [selectedRows, setSelectedRows] = React.useState<Set<string>>(
      new Set(),
    );

    const allRowIds = robots.map((robot) => robot.id);
    const isAllSelected = selectedRows.size === robots.length;
    const isSomeSelected =
      selectedRows.size > 0 && selectedRows.size < robots.length;

    const handleSelectAll = () => {
      if (isAllSelected) {
        setSelectedRows(new Set());
      } else {
        setSelectedRows(new Set(allRowIds));
      }
    };

    const handleSelectRow = (id: string) => {
      const newSelected = new Set(selectedRows);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      setSelectedRows(newSelected);
    };

    return (
      <TooltipProvider>
        <div className="space-y-4">
          <div className="text-muted-foreground text-sm">
            Selected: {selectedRows.size} of {robots.length} robots
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
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
                </TableHead>
                <TableHead>Robot ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Serial Number</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Application</TableHead>
                <TableHead>Facility</TableHead>
                <TableHead>Uptime</TableHead>
                <TableHead>Operator</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {robots.map((robot) => (
                <TableRow
                  key={robot.id}
                  data-state={
                    selectedRows.has(robot.id) ? 'selected' : undefined
                  }
                >
                  <TableCell>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <input
                          type="checkbox"
                          className="size-4 cursor-pointer"
                          checked={selectedRows.has(robot.id)}
                          onChange={() => handleSelectRow(robot.id)}
                          aria-label={`Select ${robot.name}`}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        {selectedRows.has(robot.id) ? 'Deselect' : 'Select'}{' '}
                        {robot.name}
                      </TooltipContent>
                    </Tooltip>
                  </TableCell>
                  <TableCell className="font-medium">{robot.id}</TableCell>
                  <TableCell>{robot.name}</TableCell>
                  <TableCell>{robot.serialNumber}</TableCell>
                  <TableCell>{robot.model}</TableCell>
                  <TableCell>{robot.application}</TableCell>
                  <TableCell>{robot.facility}</TableCell>
                  <TableCell>{robot.uptime}</TableCell>
                  <TableCell>{robot.operator}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        robot.status === 'Active' ? 'default' : 'secondary'
                      }
                    >
                      {robot.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TooltipProvider>
    );
  },
};

/* =============================================================================
 * Pagination
 * ============================================================================= */

// Extended robot data for pagination demos
const allRobots = [
  ...robots,
  {
    id: 'LARA-007',
    name: 'LARA Eta',
    serialNumber: 'NR-2025-LAR-0007',
    model: 'LARA',
    application: 'Assembly',
    facility: 'Munich Plant B',
    uptime: '98.9%',
    deployDate: '2024-04-10',
    operator: 'Hans Gruber',
    status: 'Active',
  },
  {
    id: 'MAiRA-008',
    name: 'MAiRA Theta',
    serialNumber: 'NR-2025-MAI-0008',
    model: 'MAiRA',
    application: 'Painting',
    facility: 'Dresden Factory',
    uptime: '99.2%',
    deployDate: '2024-05-20',
    operator: 'Eva Braun',
    status: 'Active',
  },
  {
    id: 'MAV-009',
    name: 'MAV Iota',
    serialNumber: 'NR-2025-MAV-0009',
    model: 'MAV',
    application: 'Transport',
    facility: 'Leipzig Center',
    uptime: '96.8%',
    deployDate: '2023-12-01',
    operator: 'Fritz Meyer',
    status: 'Active',
  },
  {
    id: '4NE1-010',
    name: '4NE1 Kappa',
    serialNumber: 'NR-2025-4NE-0010',
    model: '4NE1',
    application: 'Sorting',
    facility: 'Cologne Depot',
    uptime: '99.4%',
    deployDate: '2024-07-15',
    operator: 'Helga Schmidt',
    status: 'Maintenance',
  },
  {
    id: 'MiPA-011',
    name: 'MiPA Lambda',
    serialNumber: 'NR-2025-MIP-0011',
    model: 'MiPA',
    application: 'Guidance',
    facility: 'Dusseldorf HQ',
    uptime: '99.7%',
    deployDate: '2024-08-01',
    operator: 'Karl Weber',
    status: 'Active',
  },
  {
    id: 'MAiRA-012',
    name: 'MAiRA Mu',
    serialNumber: 'NR-2025-MAI-0012',
    model: 'MAiRA',
    application: 'Pick & Place',
    facility: 'Nuremberg Line C',
    uptime: '99.0%',
    deployDate: '2024-09-10',
    operator: 'Ingrid Bauer',
    status: 'Active',
  },
];

/**
 * Table with NeuraPagination in TableFooter - complete pattern for paginated data.
 */
export const WithPagination: Story = {
  render: function TableWithPagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4;
    const totalPages = Math.ceil(allRobots.length / pageSize);

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedRobots = allRobots.slice(startIndex, endIndex);

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Robot ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Model</TableHead>
            <TableHead>Application</TableHead>
            <TableHead>Facility</TableHead>
            <TableHead>Uptime</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedRobots.map((robot) => (
            <TableRow key={robot.id}>
              <TableCell className="font-medium">{robot.id}</TableCell>
              <TableCell>{robot.name}</TableCell>
              <TableCell>{robot.model}</TableCell>
              <TableCell>{robot.application}</TableCell>
              <TableCell>{robot.facility}</TableCell>
              <TableCell>{robot.uptime}</TableCell>
              <TableCell>
                <Badge
                  variant={robot.status === 'Active' ? 'default' : 'secondary'}
                >
                  {robot.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>
              <span className="text-muted-foreground text-sm">
                Showing {startIndex + 1}-{Math.min(endIndex, allRobots.length)}{' '}
                of {allRobots.length} robots
              </span>
            </TableCell>
            <TableCell colSpan={3} align="right">
              <NeuraPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                siblings={1}
                className="justify-end"
              />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  },
};

/**
 * Table with pagination in TableFooter and text labels on Previous/Next buttons.
 */
export const WithPaginationLabels: Story = {
  render: function TableWithPaginationLabels() {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4;
    const totalPages = Math.ceil(allRobots.length / pageSize);

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedRobots = allRobots.slice(startIndex, endIndex);

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Robot ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Serial Number</TableHead>
            <TableHead>Application</TableHead>
            <TableHead>Operator</TableHead>
            <TableHead align="right">Uptime</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedRobots.map((robot) => (
            <TableRow key={robot.id}>
              <TableCell className="font-medium">{robot.id}</TableCell>
              <TableCell>{robot.name}</TableCell>
              <TableCell>{robot.serialNumber}</TableCell>
              <TableCell>{robot.application}</TableCell>
              <TableCell>{robot.operator}</TableCell>
              <TableCell align="right">{robot.uptime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>
              <span className="text-muted-foreground text-sm">
                Page {currentPage} of {totalPages}
              </span>
            </TableCell>
            <TableCell colSpan={3} align="right">
              <NeuraPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                siblings={1}
                labels={{
                  previous: 'Previous',
                  next: 'Next',
                }}
                className="justify-end"
              />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  },
};

/* =============================================================================
 * Sorting
 * ============================================================================= */

/**
 * Table with sortable columns - demonstrates sorting functionality
 * Click on column headers to sort. Cycles: unsorted → ascending → descending → unsorted
 */
export const SortableColumns: Story = {
  render: function SortableColumnsComponent() {
    const [sortColumn, setSortColumn] = React.useState<string | null>(null);
    const [sortDirection, setSortDirection] =
      React.useState<SortDirection>(null);

    const handleSort = (column: string, direction: SortDirection) => {
      if (direction === null) {
        setSortColumn(null);
        setSortDirection(null);
      } else {
        setSortColumn(column);
        setSortDirection(direction);
      }
    };

    const sortedRobots = React.useMemo(() => {
      if (!sortColumn || !sortDirection) return robots;

      return [...robots].sort((a, b) => {
        const aValue = a[sortColumn as keyof typeof a];
        const bValue = b[sortColumn as keyof typeof b];

        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }, [sortColumn, sortDirection]);

    const getSortDirection = (column: string): SortDirection => {
      return sortColumn === column ? sortDirection : null;
    };

    return (
      <TooltipProvider>
        <div className="space-y-4">
          <div className="text-muted-foreground text-sm">
            Current sort:{' '}
            {sortColumn ? `${sortColumn} (${sortDirection})` : 'None'}
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead
                  sortable
                  sortDirection={getSortDirection('id')}
                  onSort={(dir) => handleSort('id', dir)}
                >
                  Robot ID
                </TableHead>
                <TableHead
                  sortable
                  sortDirection={getSortDirection('name')}
                  onSort={(dir) => handleSort('name', dir)}
                >
                  <span className="inline-flex items-center gap-1">
                    Name
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="text-muted-foreground size-3.5 cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>Robot display name</TooltipContent>
                    </Tooltip>
                  </span>
                </TableHead>
                <TableHead
                  sortable
                  sortDirection={getSortDirection('model')}
                  onSort={(dir) => handleSort('model', dir)}
                >
                  Model
                </TableHead>
                <TableHead
                  sortable
                  sortDirection={getSortDirection('application')}
                  onSort={(dir) => handleSort('application', dir)}
                >
                  Application
                </TableHead>
                <TableHead
                  sortable
                  sortDirection={getSortDirection('facility')}
                  onSort={(dir) => handleSort('facility', dir)}
                >
                  Facility
                </TableHead>
                <TableHead>Operator</TableHead>
                <TableHead
                  sortable
                  sortDirection={getSortDirection('uptime')}
                  onSort={(dir) => handleSort('uptime', dir)}
                  align="right"
                >
                  Uptime
                </TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedRobots.map((robot) => (
                <TableRow key={robot.id}>
                  <TableCell className="font-medium">{robot.id}</TableCell>
                  <TableCell>{robot.name}</TableCell>
                  <TableCell>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="cursor-help">{robot.model}</span>
                      </TooltipTrigger>
                      <TooltipContent>
                        Neura Robotics {robot.model}
                      </TooltipContent>
                    </Tooltip>
                  </TableCell>
                  <TableCell>{robot.application}</TableCell>
                  <TableCell>{robot.facility}</TableCell>
                  <TableCell>{robot.operator}</TableCell>
                  <TableCell align="right">{robot.uptime}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        robot.status === 'Active' ? 'default' : 'secondary'
                      }
                    >
                      {robot.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TooltipProvider>
    );
  },
};
