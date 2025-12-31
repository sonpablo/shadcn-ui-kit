'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { useReadMore } from './read-more-provider';

export interface ReadMoreTextProps {
  children: string;
  /** Maximum number of characters to show when collapsed */
  maxLength?: number;
  /** Maximum number of lines to show when collapsed (uses CSS line-clamp) */
  maxLines?: number;
  /** Whether to show ellipsis (...) when truncated */
  showEllipsis?: boolean;
  /** Additional class names for the text container */
  className?: string;
}

export function ReadMoreText({
  children,
  maxLength,
  maxLines,
  showEllipsis = true,
  className,
}: ReadMoreTextProps) {
  const { isExpanded } = useReadMore();

  // Mode 1: Truncate by character count
  if (maxLength !== undefined && !isExpanded) {
    const shouldTruncate = children.length > maxLength;
    const displayText = shouldTruncate
      ? children.slice(0, maxLength).trim()
      : children;

    return (
      <span className={cn('inline', className)}>
        {displayText}
        {shouldTruncate && showEllipsis && '... '}
      </span>
    );
  }

  // Mode 2: Truncate by line count (CSS line-clamp)
  if (maxLines !== undefined && !isExpanded) {
    return (
      <div
        className={cn('overflow-hidden', className)}
        style={{
          display: '-webkit-box',
          WebkitLineClamp: maxLines,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {children}
      </div>
    );
  }

  // Expanded or no truncation
  return <span className={cn('inline', className)}>{children}</span>;
}
