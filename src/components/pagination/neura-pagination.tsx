import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './pagination';

type PaginationItemType = number | 'ellipsis';

/**
 * Calculate visible page numbers with optional siblings and ellipsis.
 */
function getVisiblePages({
  current,
  total,
  siblings,
  showFirstLast,
}: {
  current: number;
  total: number;
  siblings?: number;
  showFirstLast: boolean;
}): PaginationItemType[] {
  // If no siblings specified, show all pages
  if (siblings === undefined) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  if (total <= 1) return [1];

  const pages: PaginationItemType[] = [];

  const start = Math.max(1, current - siblings);
  const end = Math.min(total, current + siblings);

  if (showFirstLast && start > 1) {
    pages.push(1);
    if (start > 2) {
      pages.push('ellipsis');
    }
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (showFirstLast && end < total) {
    if (end < total - 1) {
      pages.push('ellipsis');
    }
    pages.push(total);
  }

  return pages;
}

export interface NeuraPaginationProps {
  /** Current active page (1-indexed) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Callback when page changes */
  onPageChange: (page: number) => void;
  /**
   * Number of sibling pages to show on each side of current page.
   * If undefined, all pages are shown.
   */
  siblings?: number;
  /** Whether to always show first and last page. Default: true */
  showFirstLast?: boolean;
  /** Optional className for the nav element */
  className?: string;
  /** Labels for i18n support */
  labels?: {
    /** Label for previous button. If not provided, only icon is shown */
    previous?: string;
    /** Label for next button. If not provided, only icon is shown */
    next?: string;
    /** Aria label for previous button */
    previousAriaLabel?: string;
    /** Aria label for next button */
    nextAriaLabel?: string;
    /** Screen reader label for ellipsis */
    ellipsis?: string;
  };
}

/**
 * Opinionated pagination component that handles all the logic internally.
 *
 */
export function NeuraPagination({
  currentPage,
  totalPages,
  onPageChange,
  siblings,
  showFirstLast = true,
  className,
  labels,
}: NeuraPaginationProps) {
  // Don't render if there are no pages or only one page
  if (totalPages < 1) return null;

  const pages = getVisiblePages({
    current: currentPage,
    total: totalPages,
    siblings,
    showFirstLast,
  });

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: number,
  ) => {
    e.preventDefault();
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <Pagination className={className}>
      <PaginationContent>
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            label={labels?.previous}
            ariaLabel={labels?.previousAriaLabel}
            onClick={(e) => handlePageClick(e, currentPage - 1)}
            className={cn(isFirstPage && 'pointer-events-none opacity-50')}
            aria-disabled={isFirstPage}
          />
        </PaginationItem>

        {/* Page Numbers */}
        {pages.map((page, index) => {
          if (page === 'ellipsis') {
            return (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis srLabel={labels?.ellipsis} />
              </PaginationItem>
            );
          }

          const isActive = currentPage === page;

          return (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={isActive}
                onClick={(e) => handlePageClick(e, page)}
                aria-current={isActive ? 'page' : undefined}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            href="#"
            label={labels?.next}
            ariaLabel={labels?.nextAriaLabel}
            onClick={(e) => handlePageClick(e, currentPage + 1)}
            className={cn(isLastPage && 'pointer-events-none opacity-50')}
            aria-disabled={isLastPage}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
