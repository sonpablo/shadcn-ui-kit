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
  tooltip?: React.ReactNode;
  sortable?: boolean;
  sticky?: boolean;
  width?: number;
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
}

interface NeuraTableBodyProps<TData> {
  stripedRows?: boolean;
  onRowClick?: (row: Row<TData>) => void;
}

export function useNeuraTable<TData>({
  columns,
  data,
  pagination: paginationConfig,
}: UseNeuraTableProps<TData>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: paginationConfig?.pageIndex ?? 0,
    pageSize: paginationConfig?.pageSize ?? data.length,
  });

  // eslint-disable-next-line react-hooks/incompatible-library -- TanStack Table is intentionally used
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      ...(paginationConfig && { pagination }),
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    ...(paginationConfig && { getPaginationRowModel: getPaginationRowModel() }),
  });

  const columnCount = columns.length;

  // Header component
  const NeuraTableHeader = React.memo(function NeuraTableHeader() {
    return (
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
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
  });

  // Body component
  const NeuraTableBody = React.memo(function NeuraTableBody({
    onRowClick,
    stripedRows = false,
  }: NeuraTableBodyProps<TData> = {}) {
    return (
      <TableBody>
        {table.getRowModel().rows.map((row, rowIndex) => (
          <TableRow
            key={row.id}
            className={cn(
              onRowClick && 'cursor-pointer',
              stripedRows && rowIndex % 2 === 1 && 'bg-muted/30',
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
    const totalItems = data.length;
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
