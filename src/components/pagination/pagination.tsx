import * as React from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from 'lucide-react';

import { cn } from '@/lib/utils';

function Pagination({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn('flex flex-row items-center gap-px', className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<'li'>) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
  size?: 'default' | 'sm' | 'lg';
} & React.ComponentProps<'a'>;

function PaginationLink({
  className,
  isActive,
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        // Base styles
        'inline-flex items-center justify-center px-3 py-2 text-sm font-medium',
        'border-border text-muted-foreground border',
        'focus-visible:ring-ring transition-colors focus-visible:ring-2 focus-visible:outline-none',
        // Conditional styles
        isActive
          ? 'bg-muted text-foreground cursor-default'
          : 'hover:bg-muted/50 cursor-pointer',
        className,
      )}
      {...props}
    />
  );
}

type PaginationPreviousProps = {
  /** Optional label text for i18n. If not provided, only the icon is shown. */
  label?: string;
  /** Aria label for accessibility. Defaults to "Go to previous page" */
  ariaLabel?: string;
} & Omit<React.ComponentProps<typeof PaginationLink>, 'aria-label'>;

function PaginationPrevious({
  className,
  label,
  ariaLabel = 'Go to previous page',
  ...props
}: PaginationPreviousProps) {
  return (
    <PaginationLink
      aria-label={ariaLabel}
      className={cn('gap-1 rounded-l-md', className)}
      {...props}
    >
      <ChevronLeftIcon className="size-4" />
      {label && <span className="hidden sm:block">{label}</span>}
    </PaginationLink>
  );
}

type PaginationNextProps = {
  /** Optional label text for i18n. If not provided, only the icon is shown. */
  label?: string;
  /** Aria label for accessibility. Defaults to "Go to next page" */
  ariaLabel?: string;
} & Omit<React.ComponentProps<typeof PaginationLink>, 'aria-label'>;

function PaginationNext({
  className,
  label,
  ariaLabel = 'Go to next page',
  ...props
}: PaginationNextProps) {
  return (
    <PaginationLink
      aria-label={ariaLabel}
      className={cn('gap-1 rounded-r-md', className)}
      {...props}
    >
      {label && <span className="hidden sm:block">{label}</span>}
      <ChevronRightIcon className="size-4" />
    </PaginationLink>
  );
}

type PaginationEllipsisProps = {
  /** Screen reader label for accessibility. Defaults to "More pages" */
  srLabel?: string;
} & React.ComponentProps<'span'>;

function PaginationEllipsis({
  className,
  srLabel = 'More pages',
  ...props
}: PaginationEllipsisProps) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        'text-muted-foreground flex items-center justify-center px-3 py-2 select-none',
        className,
      )}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">{srLabel}</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
