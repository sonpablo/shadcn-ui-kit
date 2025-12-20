import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  type SortDirection,
} from './table';
import { Badge } from '@/components/badge/badge';
import { Button } from '@/components/button/button';
import { MoreHorizontal, Edit, Trash2, Eye } from 'lucide-react';

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// Extended sample data with 10 columns
const employees = [
  {
    id: 'EMP001',
    name: 'John Doe',
    email: 'john@company.com',
    role: 'Developer',
    department: 'Engineering',
    location: 'New York',
    salary: '$95,000',
    startDate: '2021-01-15',
    manager: 'Sarah Wilson',
    status: 'Active',
  },
  {
    id: 'EMP002',
    name: 'Jane Smith',
    email: 'jane@company.com',
    role: 'Designer',
    department: 'Design',
    location: 'Los Angeles',
    salary: '$85,000',
    startDate: '2022-03-20',
    manager: 'Mike Johnson',
    status: 'Active',
  },
  {
    id: 'EMP003',
    name: 'Bob Johnson',
    email: 'bob@company.com',
    role: 'Manager',
    department: 'Marketing',
    location: 'Chicago',
    salary: '$110,000',
    startDate: '2020-07-10',
    manager: 'Lisa Brown',
    status: 'On Leave',
  },
  {
    id: 'EMP004',
    name: 'Alice Brown',
    email: 'alice@company.com',
    role: 'Analyst',
    department: 'Sales',
    location: 'Houston',
    salary: '$78,000',
    startDate: '2023-02-28',
    manager: 'Tom Davis',
    status: 'Active',
  },
  {
    id: 'EMP005',
    name: 'Charlie Wilson',
    email: 'charlie@company.com',
    role: 'Developer',
    department: 'Engineering',
    location: 'Miami',
    salary: '$92,000',
    startDate: '2021-11-05',
    manager: 'Sarah Wilson',
    status: 'Active',
  },
  {
    id: 'EMP006',
    name: 'Diana Martinez',
    email: 'diana@company.com',
    role: 'Designer',
    department: 'Design',
    location: 'Seattle',
    salary: '$88,000',
    startDate: '2022-06-15',
    manager: 'Mike Johnson',
    status: 'Remote',
  },
  {
    id: 'EMP007',
    name: 'Edward Lee',
    email: 'edward@company.com',
    role: 'Developer',
    department: 'Engineering',
    location: 'Boston',
    salary: '$98,000',
    startDate: '2020-09-01',
    manager: 'Sarah Wilson',
    status: 'Active',
  },
  {
    id: 'EMP008',
    name: 'Fiona Garcia',
    email: 'fiona@company.com',
    role: 'Manager',
    department: 'HR',
    location: 'Denver',
    salary: '$105,000',
    startDate: '2019-04-20',
    manager: 'Lisa Brown',
    status: 'Active',
  },
];

// Simple data for default story (5 columns)
const invoices = [
  {
    id: 'INV001',
    customer: 'Acme Corp',
    status: 'Paid',
    method: 'Credit Card',
    amount: '$250.00',
  },
  {
    id: 'INV002',
    customer: 'Globex Inc',
    status: 'Pending',
    method: 'PayPal',
    amount: '$150.00',
  },
  {
    id: 'INV003',
    customer: 'Stark Industries',
    status: 'Unpaid',
    method: 'Bank Transfer',
    amount: '$350.00',
  },
  {
    id: 'INV004',
    customer: 'Wayne Enterprises',
    status: 'Paid',
    method: 'Credit Card',
    amount: '$450.00',
  },
  {
    id: 'INV005',
    customer: 'Umbrella Corp',
    status: 'Paid',
    method: 'PayPal',
    amount: '$550.00',
  },
];

/**
 * Default table with 5 columns - basic structure
 */
export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.customer}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

/**
 * Table with horizontal scroll disabled - 10 columns
 * Note: Without scroll, content may overflow the container
 */
export const NoScroll: Story = {
  render: () => (
    <Table scrollable={false}>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Salary</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>Manager</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.slice(0, 5).map((emp) => (
          <TableRow key={emp.id}>
            <TableCell className="font-medium">{emp.id}</TableCell>
            <TableCell>{emp.name}</TableCell>
            <TableCell>{emp.email}</TableCell>
            <TableCell>{emp.role}</TableCell>
            <TableCell>{emp.department}</TableCell>
            <TableCell>{emp.location}</TableCell>
            <TableCell>{emp.salary}</TableCell>
            <TableCell>{emp.startDate}</TableCell>
            <TableCell>{emp.manager}</TableCell>
            <TableCell>{emp.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

/**
 * Table with sticky first column (left) - 10 columns
 */
export const StickyLeftColumn: Story = {
  render: () => (
    <div className="max-w-2xl rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead sticky className="w-[100px]">
              ID
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Salary</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>Manager</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((emp) => (
            <TableRow key={emp.id}>
              <TableCell sticky className="font-medium">
                {emp.id}
              </TableCell>
              <TableCell>{emp.name}</TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>{emp.role}</TableCell>
              <TableCell>{emp.department}</TableCell>
              <TableCell>{emp.location}</TableCell>
              <TableCell>{emp.salary}</TableCell>
              <TableCell>{emp.startDate}</TableCell>
              <TableCell>{emp.manager}</TableCell>
              <TableCell>{emp.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
};

/**
 * Table with sticky column and custom background color
 */
export const StickyWithCustomBackground: Story = {
  render: () => (
    <div className="max-w-2xl rounded-lg border bg-red-500 p-4">
      <Table>
        <TableHeader>
          <TableRow className="border-red-400">
            <TableHead
              sticky
              stickyBgClass="bg-red-500"
              className="w-[100px] text-white"
            >
              ID
            </TableHead>
            <TableHead className="text-white">Name</TableHead>
            <TableHead className="text-white">Email</TableHead>
            <TableHead className="text-white">Role</TableHead>
            <TableHead className="text-white">Department</TableHead>
            <TableHead className="text-white">Location</TableHead>
            <TableHead className="text-white">Salary</TableHead>
            <TableHead className="text-white">Start Date</TableHead>
            <TableHead className="text-white">Manager</TableHead>
            <TableHead className="text-white">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((emp) => (
            <TableRow
              key={emp.id}
              className="border-red-400 text-white hover:bg-red-600"
            >
              <TableCell
                sticky
                stickyBgClass="bg-red-500"
                className="font-medium"
              >
                {emp.id}
              </TableCell>
              <TableCell>{emp.name}</TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>{emp.role}</TableCell>
              <TableCell>{emp.department}</TableCell>
              <TableCell>{emp.location}</TableCell>
              <TableCell>{emp.salary}</TableCell>
              <TableCell>{emp.startDate}</TableCell>
              <TableCell>{emp.manager}</TableCell>
              <TableCell>{emp.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
};

/**
 * Table with sticky last column (right) - useful for actions - 10 columns
 */
export const StickyRightColumn: Story = {
  render: () => (
    <div className="max-w-2xl rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Salary</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>Manager</TableHead>
            <TableHead sticky="right" align="center" className="w-[100px]">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((emp) => (
            <TableRow key={emp.id}>
              <TableCell className="font-medium">{emp.id}</TableCell>
              <TableCell>{emp.name}</TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>{emp.role}</TableCell>
              <TableCell>{emp.department}</TableCell>
              <TableCell>{emp.location}</TableCell>
              <TableCell>{emp.salary}</TableCell>
              <TableCell>{emp.startDate}</TableCell>
              <TableCell>{emp.manager}</TableCell>
              <TableCell sticky="right" align="center">
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="size-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
};

/**
 * Table with multiple sticky columns using stickyOffset - 10 columns
 *
 * How to calculate stickyOffset:
 * - First sticky column: stickyOffset="0" (or omit it)
 * - Second sticky column: stickyOffset = width of first column
 * - Third sticky column: stickyOffset = width of first + second columns
 *
 * Note: The width should match the actual rendered width including padding.
 * If using w-[80px], the offset for next column is "80px".
 */
export const MultipleStickyColumns: Story = {
  render: () => (
    <div className="max-w-xl rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            {/* First sticky: offset 0, width 80px */}
            <TableHead sticky stickyOffset="0">
              ID
            </TableHead>
            {/* Second sticky: offset = width of first (80px) */}
            <TableHead sticky stickyOffset="72px" className="w-[120px]">
              Name
            </TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Salary</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>Manager</TableHead>
            <TableHead sticky="right" align="center" className="w-[100px]">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((emp) => (
            <TableRow key={emp.id}>
              {/* Must match header offsets */}
              <TableCell sticky stickyOffset="0" className="font-medium">
                {emp.id}
              </TableCell>
              <TableCell sticky stickyOffset="72px">
                {emp.name}
              </TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>{emp.role}</TableCell>
              <TableCell>{emp.department}</TableCell>
              <TableCell>{emp.location}</TableCell>
              <TableCell>{emp.salary}</TableCell>
              <TableCell>{emp.startDate}</TableCell>
              <TableCell>{emp.manager}</TableCell>
              <TableCell sticky="right" align="center">
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="size-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
};

/**
 * Table with text wrapping enabled (nowrap={false}) - 10 columns with descriptions
 */
export const WithTextWrapping: Story = {
  render: () => (
    <div className="max-w-3xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead nowrap={false}>Name</TableHead>
            <TableHead nowrap={false}>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead nowrap={false}>Department Description</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Salary</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead nowrap={false}>Manager Notes</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.slice(0, 4).map((emp, index) => (
            <TableRow key={emp.id}>
              <TableCell className="font-medium">{emp.id}</TableCell>
              <TableCell nowrap={false}>{emp.name}</TableCell>
              <TableCell nowrap={false}>{emp.email}</TableCell>
              <TableCell>{emp.role}</TableCell>
              <TableCell nowrap={false}>
                {index % 2 === 0
                  ? `${emp.department} - Responsible for company-wide initiatives and strategic planning`
                  : `${emp.department} - Handles day-to-day operations and team coordination`}
              </TableCell>
              <TableCell>{emp.location}</TableCell>
              <TableCell>{emp.salary}</TableCell>
              <TableCell>{emp.startDate}</TableCell>
              <TableCell nowrap={false}>
                {index % 2 === 0
                  ? `Reports to ${emp.manager} with quarterly reviews`
                  : `Direct report to ${emp.manager}, weekly 1:1 meetings`}
              </TableCell>
              <TableCell>{emp.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
};

/**
 * Table with badges and status indicators - 10 columns
 */
export const WithBadges: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Salary</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>Manager</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.map((emp) => (
          <TableRow key={emp.id}>
            <TableCell className="font-medium">{emp.id}</TableCell>
            <TableCell>{emp.name}</TableCell>
            <TableCell>{emp.email}</TableCell>
            <TableCell>
              <Badge variant="outline">{emp.role}</Badge>
            </TableCell>
            <TableCell>{emp.department}</TableCell>
            <TableCell>{emp.location}</TableCell>
            <TableCell>{emp.salary}</TableCell>
            <TableCell>{emp.startDate}</TableCell>
            <TableCell>{emp.manager}</TableCell>
            <TableCell>
              <Badge
                variant={
                  emp.status === 'Active'
                    ? 'default'
                    : emp.status === 'Remote'
                      ? 'secondary'
                      : 'destructive'
                }
              >
                {emp.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

/**
 * Table with action buttons - 10 columns
 */
export const WithActions: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Salary</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.map((emp) => (
          <TableRow key={emp.id}>
            <TableCell className="font-medium">{emp.id}</TableCell>
            <TableCell>{emp.name}</TableCell>
            <TableCell>{emp.email}</TableCell>
            <TableCell>{emp.role}</TableCell>
            <TableCell>{emp.department}</TableCell>
            <TableCell>{emp.location}</TableCell>
            <TableCell>{emp.salary}</TableCell>
            <TableCell>{emp.startDate}</TableCell>
            <TableCell>
              <Badge
                variant={emp.status === 'Active' ? 'default' : 'secondary'}
              >
                {emp.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-1">
                <Button variant="ghost" size="icon">
                  <Eye className="size-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Edit className="size-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="size-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

/**
 * Table with footer for totals - 10 columns
 */
export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableCaption>Employee salary summary by department</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Location</TableHead>
          <TableHead className="text-right">Salary</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>Manager</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.map((emp) => (
          <TableRow key={emp.id}>
            <TableCell className="font-medium">{emp.id}</TableCell>
            <TableCell>{emp.name}</TableCell>
            <TableCell>{emp.email}</TableCell>
            <TableCell>{emp.role}</TableCell>
            <TableCell>{emp.department}</TableCell>
            <TableCell>{emp.location}</TableCell>
            <TableCell className="text-right">{emp.salary}</TableCell>
            <TableCell>{emp.startDate}</TableCell>
            <TableCell>{emp.manager}</TableCell>
            <TableCell>{emp.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={6} className="font-bold">
            Total Payroll
          </TableCell>
          <TableCell className="text-right font-bold">$751,000</TableCell>
          <TableCell colSpan={3}></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

/**
 * Compact table with striped rows - 10 columns
 */
export const StripedRows: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Salary</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>Manager</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.map((emp, index) => (
          <TableRow
            key={emp.id}
            className={index % 2 === 0 ? 'bg-muted/50' : ''}
          >
            <TableCell className="font-medium">{emp.id}</TableCell>
            <TableCell>{emp.name}</TableCell>
            <TableCell>{emp.email}</TableCell>
            <TableCell>{emp.role}</TableCell>
            <TableCell>{emp.department}</TableCell>
            <TableCell>{emp.location}</TableCell>
            <TableCell>{emp.salary}</TableCell>
            <TableCell>{emp.startDate}</TableCell>
            <TableCell>{emp.manager}</TableCell>
            <TableCell>{emp.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

/**
 * Table with selectable rows - 10 columns
 * Click the header checkbox to select/deselect all rows
 */
export const SelectableRows: Story = {
  render: function SelectableRowsComponent() {
    const [selectedRows, setSelectedRows] = React.useState<Set<string>>(
      new Set(),
    );

    const allRowIds = employees.map((emp) => emp.id);
    const isAllSelected = selectedRows.size === employees.length;
    const isSomeSelected =
      selectedRows.size > 0 && selectedRows.size < employees.length;

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
      <div className="space-y-4">
        <div className="text-muted-foreground text-sm">
          Selected: {selectedRows.size} of {employees.length} rows
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <input
                  type="checkbox"
                  className="size-4"
                  checked={isAllSelected}
                  ref={(el) => {
                    if (el) el.indeterminate = isSomeSelected;
                  }}
                  onChange={handleSelectAll}
                  aria-label="Select all rows"
                />
              </TableHead>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Salary</TableHead>
              <TableHead>Manager</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((emp) => (
              <TableRow
                key={emp.id}
                data-state={selectedRows.has(emp.id) ? 'selected' : undefined}
              >
                <TableCell>
                  <input
                    type="checkbox"
                    className="size-4"
                    checked={selectedRows.has(emp.id)}
                    onChange={() => handleSelectRow(emp.id)}
                    aria-label={`Select row ${emp.name}`}
                  />
                </TableCell>
                <TableCell className="font-medium">{emp.id}</TableCell>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.email}</TableCell>
                <TableCell>{emp.role}</TableCell>
                <TableCell>{emp.department}</TableCell>
                <TableCell>{emp.location}</TableCell>
                <TableCell>{emp.salary}</TableCell>
                <TableCell>{emp.manager}</TableCell>
                <TableCell>
                  <Badge
                    variant={emp.status === 'Active' ? 'default' : 'secondary'}
                  >
                    {emp.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
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

    // Handle sort for a specific column
    const handleSort = (column: string, direction: SortDirection) => {
      if (direction === null) {
        setSortColumn(null);
        setSortDirection(null);
      } else {
        setSortColumn(column);
        setSortDirection(direction);
      }
    };

    // Sort data based on current sort state
    const sortedEmployees = React.useMemo(() => {
      if (!sortColumn || !sortDirection) return employees;

      return [...employees].sort((a, b) => {
        const aValue = a[sortColumn as keyof typeof a];
        const bValue = b[sortColumn as keyof typeof b];

        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }, [sortColumn, sortDirection]);

    // Helper to get sort direction for a column
    const getSortDirection = (column: string): SortDirection => {
      return sortColumn === column ? sortDirection : null;
    };

    return (
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
                ID
              </TableHead>
              <TableHead
                sortable
                sortDirection={getSortDirection('name')}
                onSort={(dir) => handleSort('name', dir)}
              >
                Name
              </TableHead>
              <TableHead
                sortable
                sortDirection={getSortDirection('email')}
                onSort={(dir) => handleSort('email', dir)}
              >
                Email
              </TableHead>
              <TableHead
                sortable
                sortDirection={getSortDirection('role')}
                onSort={(dir) => handleSort('role', dir)}
              >
                Role
              </TableHead>
              <TableHead
                sortable
                sortDirection={getSortDirection('department')}
                onSort={(dir) => handleSort('department', dir)}
              >
                Department
              </TableHead>
              <TableHead>Location</TableHead>
              <TableHead
                sortable
                sortDirection={getSortDirection('salary')}
                onSort={(dir) => handleSort('salary', dir)}
                align="right"
              >
                Salary
              </TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedEmployees.map((emp) => (
              <TableRow key={emp.id}>
                <TableCell className="font-medium">{emp.id}</TableCell>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.email}</TableCell>
                <TableCell>{emp.role}</TableCell>
                <TableCell>{emp.department}</TableCell>
                <TableCell>{emp.location}</TableCell>
                <TableCell align="right">{emp.salary}</TableCell>
                <TableCell>
                  <Badge
                    variant={emp.status === 'Active' ? 'default' : 'secondary'}
                  >
                    {emp.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  },
};

/**
 * Complete showcase with all features - 10 columns
 */
export const CompleteShowcase: Story = {
  render: () => (
    <div className="space-y-12 p-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Basic Table (10 columns)</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Salary</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>Manager</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.slice(0, 4).map((emp) => (
              <TableRow key={emp.id}>
                <TableCell className="font-medium">{emp.id}</TableCell>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.email}</TableCell>
                <TableCell>{emp.role}</TableCell>
                <TableCell>{emp.department}</TableCell>
                <TableCell>{emp.location}</TableCell>
                <TableCell>{emp.salary}</TableCell>
                <TableCell>{emp.startDate}</TableCell>
                <TableCell>{emp.manager}</TableCell>
                <TableCell>{emp.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">
          Sticky Columns (scroll horizontally →)
        </h3>
        <div className="max-w-xl rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead sticky className="w-[80px]">
                  ID
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Salary</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>Manager</TableHead>
                <TableHead sticky="right" align="center" className="w-[100px]">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.slice(0, 4).map((emp) => (
                <TableRow key={emp.id}>
                  <TableCell sticky className="font-medium">
                    {emp.id}
                  </TableCell>
                  <TableCell>{emp.name}</TableCell>
                  <TableCell>{emp.email}</TableCell>
                  <TableCell>{emp.role}</TableCell>
                  <TableCell>{emp.department}</TableCell>
                  <TableCell>{emp.location}</TableCell>
                  <TableCell>{emp.salary}</TableCell>
                  <TableCell>{emp.startDate}</TableCell>
                  <TableCell>{emp.manager}</TableCell>
                  <TableCell sticky="right" align="center">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">
          With Badges & Actions (10 columns)
        </h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Salary</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.slice(0, 4).map((emp) => (
              <TableRow key={emp.id}>
                <TableCell className="font-medium">{emp.id}</TableCell>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.email}</TableCell>
                <TableCell>
                  <Badge variant="outline">{emp.role}</Badge>
                </TableCell>
                <TableCell>{emp.department}</TableCell>
                <TableCell>{emp.location}</TableCell>
                <TableCell>{emp.salary}</TableCell>
                <TableCell>{emp.startDate}</TableCell>
                <TableCell>
                  <Badge
                    variant={emp.status === 'Active' ? 'default' : 'secondary'}
                  >
                    {emp.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-1">
                    <Button variant="ghost" size="icon">
                      <Eye className="size-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Edit className="size-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">With Footer (10 columns)</h3>
        <Table>
          <TableCaption>Monthly payroll summary</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="text-right">Salary</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>Manager</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.slice(0, 3).map((emp) => (
              <TableRow key={emp.id}>
                <TableCell className="font-medium">{emp.id}</TableCell>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.email}</TableCell>
                <TableCell>{emp.role}</TableCell>
                <TableCell>{emp.department}</TableCell>
                <TableCell>{emp.location}</TableCell>
                <TableCell className="text-right">{emp.salary}</TableCell>
                <TableCell>{emp.startDate}</TableCell>
                <TableCell>{emp.manager}</TableCell>
                <TableCell>{emp.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={6} className="font-bold">
                Total
              </TableCell>
              <TableCell className="text-right font-bold">$290,000</TableCell>
              <TableCell colSpan={3}></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * Table comparison in light and dark modes - 10 columns
 */
export const DarkModeComparison: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-8 p-8">
      {/* Light Mode */}
      <div className="space-y-4">
        <div className="mb-6 flex items-center gap-2">
          <span className="text-2xl">☀️</span>
          <h3 className="text-lg font-semibold">Light Mode</h3>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Salary</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.slice(0, 4).map((emp) => (
              <TableRow key={emp.id}>
                <TableCell className="font-medium">{emp.id}</TableCell>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.email}</TableCell>
                <TableCell>{emp.role}</TableCell>
                <TableCell>{emp.department}</TableCell>
                <TableCell>{emp.location}</TableCell>
                <TableCell>{emp.salary}</TableCell>
                <TableCell>{emp.startDate}</TableCell>
                <TableCell>
                  <Badge
                    variant={emp.status === 'Active' ? 'default' : 'secondary'}
                  >
                    {emp.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Dark Mode */}
      <div className="dark bg-background space-y-4 rounded-lg p-6">
        <div className="mb-6 flex items-center gap-2">
          <span className="text-2xl">🌙</span>
          <h3 className="text-foreground text-lg font-semibold">Dark Mode</h3>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Salary</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.slice(0, 4).map((emp) => (
              <TableRow key={emp.id}>
                <TableCell className="font-medium">{emp.id}</TableCell>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.email}</TableCell>
                <TableCell>{emp.role}</TableCell>
                <TableCell>{emp.department}</TableCell>
                <TableCell>{emp.location}</TableCell>
                <TableCell>{emp.salary}</TableCell>
                <TableCell>{emp.startDate}</TableCell>
                <TableCell>
                  <Badge
                    variant={emp.status === 'Active' ? 'default' : 'secondary'}
                  >
                    {emp.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * Props reference table
 */
export const PropsReference: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Table Props</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Prop</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Default</TableHead>
              <TableHead nowrap={false}>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-mono text-sm">scrollable</TableCell>
              <TableCell className="font-mono text-sm">boolean</TableCell>
              <TableCell className="font-mono text-sm">true</TableCell>
              <TableCell nowrap={false}>
                Enable horizontal scroll container
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">
          TableHead / TableCell Props
        </h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Prop</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Default</TableHead>
              <TableHead nowrap={false}>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-mono text-sm">nowrap</TableCell>
              <TableCell className="font-mono text-sm">boolean</TableCell>
              <TableCell className="font-mono text-sm">true</TableCell>
              <TableCell nowrap={false}>
                Prevent text wrapping in cell
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">align</TableCell>
              <TableCell className="font-mono text-sm">
                'left' | 'center' | 'right'
              </TableCell>
              <TableCell className="font-mono text-sm">'left'</TableCell>
              <TableCell nowrap={false}>
                Text alignment within the cell
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">sticky</TableCell>
              <TableCell className="font-mono text-sm">
                boolean | 'left' | 'right'
              </TableCell>
              <TableCell className="font-mono text-sm">false</TableCell>
              <TableCell nowrap={false}>
                Make column sticky. Use 'right' for last column
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">stickyOffset</TableCell>
              <TableCell className="font-mono text-sm">string</TableCell>
              <TableCell className="font-mono text-sm">'0'</TableCell>
              <TableCell nowrap={false}>
                Offset from edge for multiple sticky columns. Calculate as sum
                of widths of previous sticky columns. Example: if first column
                is w-[80px], second should have stickyOffset="80px"
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">stickyBgClass</TableCell>
              <TableCell className="font-mono text-sm">string</TableCell>
              <TableCell className="font-mono text-sm">
                'bg-background'
              </TableCell>
              <TableCell nowrap={false}>
                Background class for sticky column. Use when table is inside a
                colored container (e.g. 'bg-red-500')
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">sortable</TableCell>
              <TableCell className="font-mono text-sm">boolean</TableCell>
              <TableCell className="font-mono text-sm">false</TableCell>
              <TableCell nowrap={false}>
                Enable sorting for this column. Shows sort icons and makes
                header clickable
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">sortDirection</TableCell>
              <TableCell className="font-mono text-sm">
                'asc' | 'desc' | null
              </TableCell>
              <TableCell className="font-mono text-sm">null</TableCell>
              <TableCell nowrap={false}>
                Current sort direction. Use with sortable prop
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">onSort</TableCell>
              <TableCell className="font-mono text-sm">
                (direction: SortDirection) =&gt; void
              </TableCell>
              <TableCell className="font-mono text-sm">-</TableCell>
              <TableCell nowrap={false}>
                Callback when sort is toggled. Cycles: null → asc → desc → null
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
