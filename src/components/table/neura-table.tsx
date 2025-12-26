'use client';

import * as React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  type SortingState,
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
  TableHead,
  TableRow,
  TableCell,
} from './table';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/tooltip/tooltip';

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

interface UseNeuraTableProps<TData> {
  columns: NeuraColumnDef<TData>[];
  data: TData[];
}

interface NeuraTableBodyProps<TData> {
  stripedRows?: boolean;
  onRowClick?: (row: Row<TData>) => void;
}

export function useNeuraTable<TData>({
  columns,
  data,
}: UseNeuraTableProps<TData>) {
  console.log('🙅 son-p 👉🏻 neura-table-v2.tsx:56 👉🏻 useNeuraTable');
  const [sorting, setSorting] = React.useState<SortingState>([]);

  // eslint-disable-next-line react-hooks/incompatible-library -- TanStack Table is intentionally used
  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

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

  return {
    table,
    NeuraTableHeader,
    NeuraTableBody,
  };
}

// Re-export types for consumers
export type { ColumnDef, Row, Cell, SortingState };
