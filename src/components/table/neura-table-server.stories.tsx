import { useState, useMemo, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  NeuraColumnDef,
  Row,
  useNeuraTable,
  type SortingState,
  type PaginationState,
} from './neura-table';
import { Table } from './table';
import { Spinner } from '@/components/spinner/spinner';
import { Badge } from '@/components/badge/badge';
import { simulateFetch, type Robot } from './stories-utils';

const meta: Meta = {
  title: 'Components/NeuraTable/Server Side',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Server-side pagination and sorting examples for NeuraTable.

Use server-side mode when:
- Your dataset is large (>10,000 rows)
- Data comes from an API with pagination support
- You need real-time data synchronization

## Key Props for Server-Side

\`\`\`tsx
const { ... } = useNeuraTable({
  data: pageData,           // Current page only
  columns,
  manualPagination: true,   // Tell TanStack data is pre-paginated
  manualSorting: true,      // Tell TanStack data is pre-sorted
  rowCount: totalFromAPI,   // Total rows for page calculation
  pagination: { pageSize: 10, pageIndex: currentPage },
  onPaginationChange: (p) => fetchData({ page: p.pageIndex }),
  onSortingChange: (s) => fetchData({ sort: s[0]?.id }),
});
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

function ServerSidePaginationExample() {
  const [data, setData] = useState<Robot[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [currentSorting, setCurrentSorting] = useState<SortingState>([]);
  const [currentPagination, setCurrentPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  // Fetch data when sorting or pagination changes
  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setIsLoading(true);
      const result = await simulateFetch({
        pageIndex: currentPagination.pageIndex,
        pageSize: currentPagination.pageSize,
        sorting: currentSorting,
      });
      if (!cancelled) {
        setData(result.data);
        setTotalCount(result.totalCount);
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [currentPagination, currentSorting]);

  const columns = useMemo<NeuraColumnDef<Robot>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'Robot ID',
        enableSorting: true,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        enableSorting: true,
      },
      {
        accessorKey: 'model',
        header: 'Model',
        enableSorting: true,
      },
      {
        accessorKey: 'facility',
        header: 'Facility',
        enableSorting: true,
      },
      {
        accessorKey: 'uptime',
        header: 'Uptime',
        enableSorting: true,
        cell: ({ row }: { row: Row<Robot> }) => `${row.original.uptime}%`,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        enableSorting: true,
        cell: ({ row }: { row: Row<Robot> }) => (
          <Badge
            variant={
              row.original.status === 'Active'
                ? 'default'
                : row.original.status === 'Maintenance'
                  ? 'secondary'
                  : 'outline'
            }
          >
            {row.original.status}
          </Badge>
        ),
      },
    ],
    [],
  );

  const { NeuraTableHeader, NeuraTableBody, NeuraTableFooter } = useNeuraTable({
    data,
    columns,
    // Server-side configuration
    manualPagination: true,
    manualSorting: true,
    rowCount: totalCount,
    // Pagination settings
    pagination: {
      pageSize: 5,
      pageIndex: currentPagination.pageIndex,
      itemLabel: 'robots',
    },
    // Callbacks to trigger refetch
    onPaginationChange: setCurrentPagination,
    onSortingChange: setCurrentSorting,
  });

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/50">
        <h3 className="mb-2 font-semibold text-blue-900 dark:text-blue-100">
          🌐 Server-Side Mode
        </h3>
        <p className="text-sm text-blue-800 dark:text-blue-200">
          This table fetches data from a simulated API. Sorting and pagination
          are handled on the server. Notice the loading delay when changing
          pages or sorting.
        </p>
        <div className="mt-2 text-xs text-blue-600 dark:text-blue-400">
          <code>manualPagination: true</code> | <code>manualSorting: true</code>{' '}
          | <code>rowCount: {totalCount}</code>
        </div>
      </div>

      <div className="relative">
        {isLoading && (
          <div className="bg-background/80 absolute inset-0 z-10 flex items-center justify-center">
            <Spinner className="size-8" />
          </div>
        )}
        <Table>
          <NeuraTableHeader />
          <NeuraTableBody />
          <NeuraTableFooter />
        </Table>
      </div>
    </div>
  );
}

/**
 * ## Server-Side Pagination + Sorting
 *
 * Data is fetched from a simulated API with 500ms delay.
 * Both sorting and pagination are handled on the server.
 * Only the current page's data is loaded into memory.
 */
export const Default: Story = {
  render: () => <ServerSidePaginationExample />,
};

function ServerPaginationOnlyExample() {
  const [data, setData] = useState<Robot[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPagination, setCurrentPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setIsLoading(true);
      const result = await simulateFetch({
        pageIndex: currentPagination.pageIndex,
        pageSize: currentPagination.pageSize,
        sorting: [], // No sorting from server
      });
      if (!cancelled) {
        setData(result.data);
        setTotalCount(result.totalCount);
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [currentPagination]);

  const columns = useMemo<NeuraColumnDef<Robot>[]>(
    () => [
      { accessorKey: 'id', header: 'Robot ID', enableSorting: false },
      { accessorKey: 'name', header: 'Name', enableSorting: false },
      { accessorKey: 'model', header: 'Model', enableSorting: false },
      { accessorKey: 'facility', header: 'Facility', enableSorting: false },
      {
        accessorKey: 'uptime',
        header: 'Uptime',
        cell: ({ row }: { row: Row<Robot> }) => `${row.original.uptime}%`,
        enableSorting: false,
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
                  : 'outline'
            }
          >
            {row.original.status}
          </Badge>
        ),
        enableSorting: false,
      },
    ],
    [],
  );

  const { NeuraTableHeader, NeuraTableBody, NeuraTableFooter } = useNeuraTable({
    data,
    columns,
    manualPagination: true,
    rowCount: totalCount,
    pagination: {
      pageSize: 5,
      pageIndex: currentPagination.pageIndex,
      itemLabel: 'robots',
    },
    onPaginationChange: setCurrentPagination,
  });

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950/50">
        <h3 className="mb-2 font-semibold text-purple-900 dark:text-purple-100">
          📄 Pagination Only
        </h3>
        <p className="text-sm text-purple-800 dark:text-purple-200">
          Only pagination is handled server-side. Sorting is disabled.
        </p>
        <div className="mt-2 text-xs text-purple-600 dark:text-purple-400">
          <code>manualPagination: true</code> |{' '}
          <code>rowCount: {totalCount}</code>
        </div>
      </div>

      <div className="relative">
        {isLoading && (
          <div className="bg-background/80 absolute inset-0 z-10 flex items-center justify-center">
            <Spinner className="size-8" />
          </div>
        )}
        <Table>
          <NeuraTableHeader />
          <NeuraTableBody />
          <NeuraTableFooter />
        </Table>
      </div>
    </div>
  );
}

/**
 * ## Pagination Only
 *
 * Only pagination is handled server-side.
 * Columns are not sortable in this example.
 */
export const PaginationOnly: Story = {
  render: () => <ServerPaginationOnlyExample />,
};

function ServerSortingOnlyExample() {
  const [data, setData] = useState<Robot[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSorting, setCurrentSorting] = useState<SortingState>([]);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setIsLoading(true);
      const result = await simulateFetch({
        pageIndex: 0,
        pageSize: 100, // Load all data, no pagination
        sorting: currentSorting,
      });
      if (!cancelled) {
        setData(result.data);
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [currentSorting]);

  const columns = useMemo<NeuraColumnDef<Robot>[]>(
    () => [
      { accessorKey: 'id', header: 'Robot ID', enableSorting: true },
      { accessorKey: 'name', header: 'Name', enableSorting: true },
      { accessorKey: 'model', header: 'Model', enableSorting: true },
      { accessorKey: 'facility', header: 'Facility', enableSorting: true },
      {
        accessorKey: 'uptime',
        header: 'Uptime',
        enableSorting: true,
        cell: ({ row }: { row: Row<Robot> }) => `${row.original.uptime}%`,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        enableSorting: true,
        cell: ({ row }: { row: Row<Robot> }) => (
          <Badge
            variant={
              row.original.status === 'Active'
                ? 'default'
                : row.original.status === 'Maintenance'
                  ? 'secondary'
                  : 'outline'
            }
          >
            {row.original.status}
          </Badge>
        ),
      },
    ],
    [],
  );

  const { NeuraTableHeader, NeuraTableBody } = useNeuraTable({
    data,
    columns,
    manualSorting: true,
    onSortingChange: setCurrentSorting,
  });

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/50">
        <h3 className="mb-2 font-semibold text-amber-900 dark:text-amber-100">
          🔀 Sorting Only
        </h3>
        <p className="text-sm text-amber-800 dark:text-amber-200">
          Only sorting is handled server-side. All data is loaded (no
          pagination). Click column headers to sort.
        </p>
        <div className="mt-2 text-xs text-amber-600 dark:text-amber-400">
          <code>manualSorting: true</code> |{' '}
          <code>
            current:{' '}
            {currentSorting.length > 0
              ? `${currentSorting[0].id} (${currentSorting[0].desc ? 'desc' : 'asc'})`
              : 'none'}
          </code>
        </div>
      </div>

      <div className="relative">
        {isLoading && (
          <div className="bg-background/80 absolute inset-0 z-10 flex items-center justify-center">
            <Spinner className="size-8" />
          </div>
        )}
        <Table>
          <NeuraTableHeader />
          <NeuraTableBody />
        </Table>
      </div>
    </div>
  );
}

/**
 * ## Sorting Only
 *
 * Only sorting is handled server-side.
 * All data is loaded at once (no pagination).
 */
export const SortingOnly: Story = {
  render: () => <ServerSortingOnlyExample />,
};

/**
 * ## Client vs Server Comparison
 *
 * Visual comparison of the two modes with code examples.
 */
export const Comparison: Story = {
  render: () => {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold">Client-Side vs Server-Side Mode</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Client-side */}
          <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950/50">
            <h3 className="mb-3 font-semibold text-green-900 dark:text-green-100">
              ✅ Client-Side (Default)
            </h3>
            <p className="mb-4 text-sm text-green-800 dark:text-green-200">
              All data loaded at once. TanStack handles sorting/pagination in
              the browser.
            </p>
            <pre className="overflow-x-auto rounded bg-green-100 p-3 text-xs dark:bg-green-900/50">
              {`const { ... } = useNeuraTable({
  data: allRobots, // All 100+ records
  columns,
  pagination: { pageSize: 10 },
  // That's it! Client handles the rest
});`}
            </pre>
            <div className="mt-3 text-xs text-green-600 dark:text-green-400">
              <strong>Best for:</strong> &lt;10,000 rows, simple datasets
            </div>
          </div>

          {/* Server-side */}
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/50">
            <h3 className="mb-3 font-semibold text-blue-900 dark:text-blue-100">
              🌐 Server-Side
            </h3>
            <p className="mb-4 text-sm text-blue-800 dark:text-blue-200">
              Only current page loaded. Server handles sorting/pagination via
              API.
            </p>
            <pre className="overflow-x-auto rounded bg-blue-100 p-3 text-xs dark:bg-blue-900/50">
              {`const { ... } = useNeuraTable({
  data: pageData, // Just 10 records
  columns,
  manualPagination: true,
  manualSorting: true,
  rowCount: totalFromAPI, // e.g., 50000
  pagination: { pageSize: 10 },
  onPaginationChange: (p) => 
    fetchData({ page: p.pageIndex }),
  onSortingChange: (s) => 
    fetchData({ sort: s[0]?.id }),
});`}
            </pre>
            <div className="mt-3 text-xs text-blue-600 dark:text-blue-400">
              <strong>Best for:</strong> Large datasets, real-time data, APIs
            </div>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-4">
          <h4 className="mb-2 font-semibold">Key Differences</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-left">Aspect</th>
                <th className="p-2 text-left">Client-Side</th>
                <th className="p-2 text-left">Server-Side</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 font-medium">Data in memory</td>
                <td className="p-2">All rows</td>
                <td className="p-2">Current page only</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Sorting/Pagination</td>
                <td className="p-2">TanStack (browser)</td>
                <td className="p-2">Your API (server)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Network requests</td>
                <td className="p-2">1 (initial load)</td>
                <td className="p-2">Per page/sort change</td>
              </tr>
              <tr>
                <td className="p-2 font-medium">Required props</td>
                <td className="p-2">
                  <code>data</code>, <code>columns</code>
                </td>
                <td className="p-2">
                  + <code>manualPagination</code>, <code>rowCount</code>,{' '}
                  <code>onPaginationChange</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  },
};
