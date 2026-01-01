'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { useReadMore } from './read-more-provider';

export interface ReadMoreTextProps {
  children: string;
  /** Maximum number of characters to show when collapsed */
  maxLength?: number;
  /** Maximum number of lines to show when collapsed */
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
  const contentRef = React.useRef<HTMLDivElement>(null);
  const truncatedRef = React.useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = React.useState<
    number | undefined
  >();
  const [truncatedHeight, setTruncatedHeight] = React.useState<
    number | undefined
  >();

  // Calculate heights for animation (runs for both modes)
  React.useEffect(() => {
    const calculateHeights = () => {
      // Use requestAnimationFrame for better timing
      requestAnimationFrame(() => {
        // For maxLength mode
        if (maxLength !== undefined) {
          if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
          }
          if (truncatedRef.current) {
            setTruncatedHeight(truncatedRef.current.scrollHeight);
          }
        }

        // For maxLines mode
        if (maxLines !== undefined && contentRef.current) {
          setContentHeight(contentRef.current.scrollHeight);
        }
      });
    };

    calculateHeights();
    window.addEventListener('resize', calculateHeights);

    return () => {
      window.removeEventListener('resize', calculateHeights);
    };
  }, [children, maxLength, maxLines]);

  // Mode 1: Truncate by character count (WITH animation)
  if (maxLength !== undefined) {
    const shouldTruncate = children.length > maxLength;
    const displayText = shouldTruncate
      ? children.slice(0, maxLength).trim()
      : children;

    return (
      <div className={cn('relative', className)}>
        {/* Hidden elements to measure heights */}
        <div
          ref={contentRef}
          className="pointer-events-none absolute opacity-0"
          aria-hidden="true"
        >
          {children}
        </div>
        <div
          ref={truncatedRef}
          className="pointer-events-none absolute opacity-0"
          aria-hidden="true"
        >
          {displayText}
          {shouldTruncate && showEllipsis && '... '}
        </div>

        {/* Animated container */}
        <div
          className="overflow-hidden"
          style={{
            height: isExpanded ? contentHeight : truncatedHeight,
            transition: 'height 0.3s ease-in-out',
          }}
          aria-expanded={isExpanded}
        >
          {isExpanded ? children : displayText}
          {!isExpanded && shouldTruncate && showEllipsis && '... '}
        </div>
      </div>
    );
  }

  // Mode 2: Truncate by line count (animated with maxHeight)
  if (maxLines !== undefined) {
    // Calculate collapsed height based on line-height
    // Approximate: 1.5rem per line (24px)
    const collapsedHeight = maxLines * 24;

    return (
      <div
        ref={contentRef}
        className={cn('overflow-hidden', className)}
        style={{
          maxHeight: isExpanded ? contentHeight : collapsedHeight,
          transition: 'max-height 0.3s ease-in-out',
        }}
        aria-expanded={isExpanded}
      >
        {children}
      </div>
    );
  }

  // No truncation
  return <span className={cn('inline', className)}>{children}</span>;
}
