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
} from './table';
import { Badge } from '@/components/badge/badge';
import { Button } from '@/components/button/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/tooltip/tooltip';
import { Edit, Trash2, Eye } from 'lucide-react';

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

// Sample data
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
];

/**
 * Default table with basic structure
 */
export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((emp) => (
            <TableRow key={emp.id}>
              <TableCell className="font-medium">{emp.id}</TableCell>
              <TableCell>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="cursor-help">{emp.name}</span>
                  </TooltipTrigger>
                  <TooltipContent>Full name: {emp.name}</TooltipContent>
                </Tooltip>
              </TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>{emp.role}</TableCell>
              <TableCell>{emp.department}</TableCell>
              <TableCell>{emp.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TooltipProvider>
  ),
};

/**
 * Table with horizontal scroll disabled
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
            <TableCell>{emp.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

/**
 * Table with text wrapping enabled
 */
export const WithTextWrapping: Story = {
  render: () => (
    <div className="max-w-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead nowrap={false}>Description</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Project Alpha</TableCell>
            <TableCell nowrap={false}>
              This is a very long description that should wrap to multiple lines
              when the column width is constrained. It demonstrates the nowrap
              prop functionality.
            </TableCell>
            <TableCell>
              <Badge>Active</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Project Beta</TableCell>
            <TableCell nowrap={false}>
              Another detailed description that explains what this project is
              about and its current status in the development lifecycle.
            </TableCell>
            <TableCell>
              <Badge variant="secondary">Pending</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
};

/**
 * Table with badges
 */
export const WithBadges: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.map((emp) => (
          <TableRow key={emp.id}>
            <TableCell className="font-medium">{emp.id}</TableCell>
            <TableCell>{emp.name}</TableCell>
            <TableCell>
              <Badge variant="outline">{emp.role}</Badge>
            </TableCell>
            <TableCell>{emp.department}</TableCell>
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
  ),
};

/**
 * Table with action buttons
 */
export const WithActions: Story = {
  render: () => (
    <TooltipProvider>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead align="right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((emp) => (
            <TableRow key={emp.id}>
              <TableCell className="font-medium">{emp.id}</TableCell>
              <TableCell>{emp.name}</TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>{emp.role}</TableCell>
              <TableCell align="right">
                <div className="flex justify-end gap-1">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Eye className="size-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>View details</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Edit className="size-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Edit</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="size-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Delete</TooltipContent>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TooltipProvider>
  ),
};

/**
 * Table with footer and caption
 */
export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableCaption>Monthly payroll summary</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead align="right">Salary</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.slice(0, 3).map((emp) => (
          <TableRow key={emp.id}>
            <TableCell className="font-medium">{emp.id}</TableCell>
            <TableCell>{emp.name}</TableCell>
            <TableCell>{emp.role}</TableCell>
            <TableCell align="right">{emp.salary}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3} className="font-bold">
            Total
          </TableCell>
          <TableCell align="right" className="font-bold">
            $290,000
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

/**
 * Striped rows style
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
            <TableCell>{emp.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
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
                Offset from edge for multiple sticky columns
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">stickyBgClass</TableCell>
              <TableCell className="font-mono text-sm">string</TableCell>
              <TableCell className="font-mono text-sm">
                'bg-background'
              </TableCell>
              <TableCell nowrap={false}>
                Background class for sticky column
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">sortable</TableCell>
              <TableCell className="font-mono text-sm">boolean</TableCell>
              <TableCell className="font-mono text-sm">false</TableCell>
              <TableCell nowrap={false}>
                Enable sorting for this column
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">sortDirection</TableCell>
              <TableCell className="font-mono text-sm">
                'asc' | 'desc' | null
              </TableCell>
              <TableCell className="font-mono text-sm">null</TableCell>
              <TableCell nowrap={false}>Current sort direction</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-sm">onSort</TableCell>
              <TableCell className="font-mono text-sm">
                (direction: SortDirection) =&gt; void
              </TableCell>
              <TableCell className="font-mono text-sm">-</TableCell>
              <TableCell nowrap={false}>
                Callback when sort is toggled
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
