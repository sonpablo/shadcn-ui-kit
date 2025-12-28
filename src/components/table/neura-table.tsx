'use client';

import * as React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  type SortingState,
  type PaginationState,
  type ColumnDef,
  type Cell,
  type Row,
  Column,
} from '@tanstack/react-table';
import { Info } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
} from './table';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/tooltip/tooltip';
import { NeuraPagination } from '@/components/pagination/neura-pagination';

export interface NeuraColumnDef<TData>
  extends Omit<Column<TData, unknown>['columnDef'], 'header'> {
  header: string;
  accessorKey: string;
  /** Tooltip content for the header */
  tooltip?: React.ReactNode;
  /** Make column sticky */
  sticky?: boolean;
  /** Column width in pixels */
  width?: number;
  /** Custom cell renderer */
  cell?: (params: {
    cell: Cell<TData, unknown>;
    row: Row<TData>;
  }) => React.ReactNode;
}

export interface NeuraPaginationConfig {
  /** Page size (items per page) */
  pageSize: number;
  /** Initial page index (0-based). Default: 0 */
  pageIndex?: number;
  /** Number of sibling pages to show. Default: 1 */
  siblings?: number;
  /** Show first/last page buttons. Default: true */
  showFirstLast?: boolean;
  /** Custom label for items (e.g., "robots", "users"). Default: "items" */
  itemLabel?: string;
}

interface UseNeuraTableProps<TData> {
  columns: NeuraColumnDef<TData>[];
  data: TData[];
  /** Pagination configuration. If provided, pagination is enabled. */
  pagination?: NeuraPaginationConfig;

  /**
   * Make table header sticky. When enabled, the header stays fixed while scrolling.
   *
   * ⚠️ IMPORTANT: Requires special container structure to work correctly.
   * The Table component must be wrapped in a container with these classes:
   *
   * @example
   * <div className="grid w-full [&>div]:max-h-[400px] [&>div]:overflow-auto [&>div]:rounded-lg [&>div]:border">
   *   <Table scrollable={false}>
   *     <NeuraTableHeader />
   *     <NeuraTableBody />
   *     <NeuraTableFooter />
   *   </Table>
   * </div>
   *
   * Note: The `[&>div]` selector targets child divs and applies overflow/styling there,
   * which is necessary because applying overflow directly to a parent breaks sticky positioning.
   *
   * @default false
   */
  stickyHeader?: boolean;

  // ─────────────────────────────────────────────────────────────
  // Server-side mode props (following TanStack Table patterns)
  // ─────────────────────────────────────────────────────────────

  /**
   * Enable manual/server-side pagination.
   * When true, data is assumed to be already paginated by the server.
   * You must provide rowCount and handle onPaginationChange.
   */
  manualPagination?: boolean;

  /**
   * Enable manual/server-side sorting.
   * When true, data is assumed to be already sorted by the server.
   * You must handle onSortingChange to fetch sorted data.
   */
  manualSorting?: boolean;

  /**
   * Total number of rows in the server dataset.
   * Required for server-side pagination to calculate page count.
   */
  rowCount?: number;

  /**
   * Callback fired when pagination state changes.
   * Use this to fetch new data from your API.
   * @example onPaginationChange: (p) => fetchData({ page: p.pageIndex, size: p.pageSize })
   */
  onPaginationChange?: (pagination: PaginationState) => void;

  /**
   * Callback fired when sorting state changes.
   * Use this to fetch sorted data from your API.
   * @example onSortingChange: (s) => fetchData({ sort: s[0]?.id, order: s[0]?.desc ? 'desc' : 'asc' })
   */
  onSortingChange?: (sorting: SortingState) => void;

  /**
   * Initial sorting state.
   * Useful for server-side when you want to start with a specific sort.
   */
  initialSorting?: SortingState;
}

interface NeuraTableBodyProps<TData> {
  stripedRows?: boolean;
  onRowClick?: (row: Row<TData>) => void;
}

export function useNeuraTable<TData>({
  columns,
  data,
  pagination: paginationConfig,
  stickyHeader = false,
  // Server-side props
  manualPagination = false,
  manualSorting = false,
  rowCount,
  onPaginationChange: onPaginationChangeCallback,
  onSortingChange: onSortingChangeCallback,
  initialSorting = [],
}: UseNeuraTableProps<TData>) {
  const [sorting, setSorting] = React.useState<SortingState>(initialSorting);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: paginationConfig?.pageIndex ?? 0,
    pageSize: paginationConfig?.pageSize ?? data.length,
  });

  // Handle sorting changes (internal + callback for server-side)
  const handleSortingChange = React.useCallback(
    (updater: SortingState | ((old: SortingState) => SortingState)) => {
      setSorting((prev) => {
        const newSorting =
          typeof updater === 'function' ? updater(prev) : updater;
        // Fire callback for server-side mode
        onSortingChangeCallback?.(newSorting);
        return newSorting;
      });
    },
    [onSortingChangeCallback],
  );

  // Handle pagination changes (internal + callback for server-side)
  const handlePaginationChange = React.useCallback(
    (
      updater: PaginationState | ((old: PaginationState) => PaginationState),
    ) => {
      setPagination((prev) => {
        const newPagination =
          typeof updater === 'function' ? updater(prev) : updater;
        // Fire callback for server-side mode
        onPaginationChangeCallback?.(newPagination);
        return newPagination;
      });
    },
    [onPaginationChangeCallback],
  );

  // Determine if we need pagination row model (only for client-side)
  const needsPaginationRowModel = paginationConfig && !manualPagination;
  // Determine if we need sorted row model (only for client-side)
  const needsSortedRowModel = !manualSorting;

  // eslint-disable-next-line react-hooks/incompatible-library -- TanStack Table is intentionally used
  const table = useReactTable({
    data,
    columns: columns,
    state: {
      sorting,
      ...(paginationConfig && { pagination }),
    },
    // Server-side configuration
    manualPagination,
    manualSorting,
    ...(manualPagination && rowCount !== undefined && { rowCount }),
    // Change handlers
    onSortingChange: handleSortingChange,
    onPaginationChange: handlePaginationChange,
    // Row models
    getCoreRowModel: getCoreRowModel(),
    ...(needsSortedRowModel && { getSortedRowModel: getSortedRowModel() }),
    ...(needsPaginationRowModel && {
      getPaginationRowModel: getPaginationRowModel(),
    }),
  });

  const columnCount = columns.length;

  // Header component (no memo to allow sorting animation)
  const NeuraTableHeader = function NeuraTableHeader() {
    return (
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow
            key={headerGroup.id}
            className={cn(
              stickyHeader &&
                "bg-background after:bg-border sticky top-0 *:whitespace-nowrap after:absolute after:inset-x-0 after:bottom-0 after:h-px after:content-['']",
            )}
          >
            {headerGroup.headers.map((header) => {
              const meta = header.column.columnDef as NeuraColumnDef<TData>;
              const isSortable = header.column.getCanSort();
              const sortDir = header.column.getIsSorted();

              return (
                <TableHead
                  key={header.id}
                  sticky={meta?.sticky}
                  sortable={isSortable}
                  sortDirection={
                    sortDir === 'asc'
                      ? 'asc'
                      : sortDir === 'desc'
                        ? 'desc'
                        : null
                  }
                  onSort={
                    isSortable ? () => header.column.toggleSorting() : undefined
                  }
                  className={cn(meta?.sticky && 'bg-background')}
                  style={{
                    width: meta?.width ? `${meta.width}px` : undefined,
                    minWidth: meta?.width ? `${meta.width}px` : undefined,
                  }}
                >
                  <span className="flex items-center gap-1">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                    {meta?.tooltip && (
                      <Tooltip>
                        <TooltipTrigger asChild aria-label="help">
                          <Info className="text-muted-foreground size-3.5 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>{meta.tooltip}</TooltipContent>
                      </Tooltip>
                    )}
                  </span>
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
    );
  };

  // Body component
  const NeuraTableBody = React.memo(function NeuraTableBody({
    onRowClick,
    stripedRows = false,
  }: NeuraTableBodyProps<TData> = {}) {
    return (
      <TableBody className={cn(stickyHeader && 'overflow-hidden')}>
        {table.getRowModel().rows.map((row, rowIndex) => (
          <TableRow
            key={row.id}
            className={cn(
              onRowClick && 'cursor-pointer',
              stripedRows && rowIndex % 2 === 1 && 'bg-muted/30',
              stickyHeader && '*:whitespace-nowrap',
            )}
            onClick={() => onRowClick?.(row)}
          >
            {row.getVisibleCells().map((cell) => {
              const meta = cell.column.columnDef as NeuraColumnDef<TData>;

              return (
                <TableCell
                  key={cell.id}
                  sticky={meta?.sticky}
                  className={cn(
                    meta?.sticky && 'bg-background',
                    meta?.sticky &&
                      stripedRows &&
                      rowIndex % 2 === 1 &&
                      'bg-muted/30',
                  )}
                  style={{
                    width: meta?.width ? `${meta.width}px` : undefined,
                    minWidth: meta?.width ? `${meta.width}px` : undefined,
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    );
  });

  // Footer with pagination component
  const NeuraTableFooter = React.memo(function NeuraTableFooter() {
    if (!paginationConfig) return null;

    const totalPages = table.getPageCount();
    const currentPage = table.getState().pagination.pageIndex + 1;
    const pageSize = table.getState().pagination.pageSize;
    // Use rowCount for server-side, data.length for client-side
    const totalItems =
      manualPagination && rowCount !== undefined ? rowCount : data.length;
    const startIndex = (currentPage - 1) * pageSize + 1;
    const endIndex = Math.min(currentPage * pageSize, totalItems);
    const itemLabel = paginationConfig.itemLabel ?? 'items';

    const leftColSpan = Math.ceil(columnCount / 2);
    const rightColSpan = columnCount - leftColSpan;

    return (
      <TableFooter>
        <TableRow>
          <TableCell colSpan={leftColSpan}>
            <span className="text-muted-foreground text-sm">
              Showing {startIndex}-{endIndex} of {totalItems} {itemLabel}
            </span>
          </TableCell>
          <TableCell colSpan={rightColSpan} align="right">
            {totalPages > 1 && (
              <NeuraPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => table.setPageIndex(page - 1)}
                siblings={paginationConfig.siblings ?? 1}
                showFirstLast={paginationConfig.showFirstLast ?? true}
                className="justify-end"
              />
            )}
          </TableCell>
        </TableRow>
      </TableFooter>
    );
  });

  return {
    table,
    NeuraTableHeader,
    NeuraTableBody,
    NeuraTableFooter,
  };
}

// Re-export types for consumers
export type { ColumnDef, Row, Cell, SortingState, PaginationState };
