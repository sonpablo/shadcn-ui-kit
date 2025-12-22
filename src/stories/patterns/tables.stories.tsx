import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableHeader,
  TableBody,
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
import { MoreHorizontal, Info } from 'lucide-react';

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
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="size-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                      Manage {robot.name}
                    </TooltipContent>
                  </Tooltip>
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
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="size-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="left">Actions</TooltipContent>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TooltipProvider>
  ),
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
