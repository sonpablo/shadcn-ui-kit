'use client';

import * as React from 'react';
import { ChevronUp, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';

/** Sort direction type for sortable columns */
export type SortDirection = 'asc' | 'desc' | null;

interface TableProps extends React.ComponentProps<'table'> {
  /** Enable horizontal scroll container. Default: true */
  scrollable?: boolean;
  /** Add border and rounded corners to table. Default: true */
  bordered?: boolean;
}

function Table({
  className,
  scrollable = true,
  bordered = true,
  ...props
}: TableProps) {
  const table = (
    <table
      data-slot="table"
      className={cn(
        'w-full caption-bottom text-sm',
        !scrollable && bordered && 'border-separate rounded-lg border',
        className,
      )}
      {...props}
    />
  );

  if (!scrollable) return table;

  return (
    <div
      data-slot="table-container"
      className={cn(
        'relative w-full overflow-x-auto',
        bordered && 'rounded-lg border',
      )}
    >
      {table}
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return (
    <thead
      data-slot="table-header"
      className={cn('[&_tr]:border-b', className)}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return (
    <tbody
      data-slot="table-body"
      className={cn('[&_tr:last-child]:border-0', className)}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        'bg-muted/50 border-t font-medium [&>tr]:last:border-b-0',
        className,
      )}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        'group/row hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors',
        className,
      )}
      {...props}
    />
  );
}

type StickyPosition = 'left' | 'right' | boolean;

interface TableHeadProps extends React.ComponentProps<'th'> {
  /** Prevent text wrapping. Default: true */
  nowrap?: boolean;
  /** Text alignment. Default: 'left' */
  align?: 'left' | 'center' | 'right';
  /** Make column sticky. Can be true/'left' for left sticky, or 'right' for right sticky */
  sticky?: StickyPosition;
  /**
   * Offset from edge when sticky (for multiple sticky columns).
   * Use CSS values like '0', '80px', '5rem'.
   * Calculate as: sum of widths of previous sticky columns.
   * Example: If first sticky column is w-[80px], second should have stickyOffset="80px"
   */
  stickyOffset?: string;
  /** Background class for sticky column. Default: 'bg-background'. Use when table is inside a colored container */
  stickyBgClass?: string;
  /** Enable sorting for this column */
  sortable?: boolean;
  /** Current sort direction. Use with sortable. null = not sorted */
  sortDirection?: SortDirection;
  /** Callback when sort is toggled. Cycles: null → asc → desc → null */
  onSort?: (direction: SortDirection) => void;
}

function TableHead({
  className,
  children,
  nowrap = true,
  align = 'left',
  sticky = false,
  stickyOffset,
  stickyBgClass = 'bg-background',
  sortable = false,
  sortDirection,
  onSort,
  style,
  ...props
}: TableHeadProps) {
  const isSticky = sticky !== false;
  const stickyPosition = sticky === 'right' ? 'right' : 'left';

  const stickyStyles: React.CSSProperties | undefined = isSticky
    ? {
        [stickyPosition]: stickyOffset ? `${stickyOffset}` : 0,
        ...style,
      }
    : style;

  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  // Handle sort toggle: null → asc → desc → null
  const handleSort = () => {
    if (!sortable || !onSort) return;

    const nextDirection: SortDirection =
      sortDirection === null || sortDirection === undefined
        ? 'asc'
        : sortDirection === 'asc'
          ? 'desc'
          : null;

    onSort(nextDirection);
  };

  // Handle keyboard navigation for a11y
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!sortable) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSort();
    }
  };

  // Get aria-sort value for accessibility
  const getAriaSort = (): 'ascending' | 'descending' | 'none' | undefined => {
    if (!sortable) return undefined;
    if (sortDirection === 'asc') return 'ascending';
    if (sortDirection === 'desc') return 'descending';
    return 'none';
  };

  // Sort icon classes with animation
  const iconClass =
    'ml-1 inline-block size-4 shrink-0 transition-transform duration-200';

  return (
    <th
      data-slot="table-head"
      aria-sort={getAriaSort()}
      className={cn(
        'text-foreground h-10 px-2 align-middle font-medium [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]',
        alignmentClass,
        nowrap && 'whitespace-nowrap',
        sortable &&
          'hover:bg-muted/50 cursor-pointer transition-colors select-none',
        isSticky && [
          'sticky z-20 transition-colors',
          stickyBgClass,
          // Hover state: use solid color for sticky cells (not semi-transparent)
          'group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted',
          // Shadow to indicate sticky column
          stickyPosition === 'left' &&
            'after:bg-border after:absolute after:top-0 after:right-0 after:h-full after:w-px',
          stickyPosition === 'right' &&
            'before:bg-border before:absolute before:top-0 before:left-0 before:h-full before:w-px',
        ],
        className,
      )}
      style={stickyStyles}
      onClick={sortable ? handleSort : undefined}
      onKeyDown={sortable ? handleKeyDown : undefined}
      tabIndex={sortable ? 0 : undefined}
      role={sortable ? 'columnheader button' : undefined}
      {...props}
    >
      <span className="inline-flex items-center">
        {children}
        {sortable && (sortDirection === 'asc' || sortDirection === 'desc') && (
          <ChevronUp
            className={cn(
              iconClass,
              'text-foreground',
              sortDirection === 'desc' && 'rotate-180',
            )}
            aria-hidden="true"
          />
        )}
        {sortable && sortDirection !== 'asc' && sortDirection !== 'desc' && (
          <ChevronsUpDown
            className={cn(iconClass, 'text-muted-foreground')}
            aria-hidden="true"
          />
        )}
      </span>
    </th>
  );
}

interface TableCellProps extends React.ComponentProps<'td'> {
  /** Prevent text wrapping. Default: true */
  nowrap?: boolean;
  /** Text alignment. Default: 'left' */
  align?: 'left' | 'center' | 'right';
  /** Make column sticky. Can be true/'left' for left sticky, or 'right' for right sticky */
  sticky?: StickyPosition;
  /**
   * Offset from edge when sticky (for multiple sticky columns).
   * Use CSS values like '0', '80px', '5rem'.
   * Calculate as: sum of widths of previous sticky columns.
   * Example: If first sticky column is w-[80px], second should have stickyOffset="80px"
   */
  stickyOffset?: string;
  /** Background class for sticky column. Default: 'bg-background'. Use when table is inside a colored container */
  stickyBgClass?: string;
}

function TableCell({
  className,
  nowrap = true,
  align = 'left',
  sticky = false,
  stickyOffset,
  stickyBgClass = 'bg-background',
  style,
  ...props
}: TableCellProps) {
  const isSticky = sticky !== false;
  const stickyPosition = sticky === 'right' ? 'right' : 'left';

  const stickyStyles: React.CSSProperties | undefined = isSticky
    ? {
        [stickyPosition]: stickyOffset ? `${stickyOffset}` : 0,
        ...style,
      }
    : style;

  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  return (
    <td
      data-slot="table-cell"
      className={cn(
        'p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        alignmentClass,
        nowrap && 'whitespace-nowrap',
        isSticky && [
          'sticky z-10 transition-colors',
          stickyBgClass,
          // Hover state: use solid color for sticky cells (not semi-transparent)
          'group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted',
          // Shadow to indicate sticky column
          stickyPosition === 'left' &&
            'after:bg-border after:absolute after:top-0 after:right-0 after:h-full after:w-px',
          stickyPosition === 'right' &&
            'before:bg-border before:absolute before:top-0 before:left-0 before:h-full before:w-px',
        ],
        className,
      )}
      style={stickyStyles}
      {...props}
    />
  );
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<'caption'>) {
  return (
    <caption
      data-slot="table-caption"
      className={cn('text-muted-foreground mt-4 text-sm', className)}
      {...props}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
