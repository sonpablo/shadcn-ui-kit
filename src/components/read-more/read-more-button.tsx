'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { useReadMore } from './read-more-provider';

export interface ReadMoreButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  /** Only show this button when collapsed */
  whenCollapsed?: boolean;
  /** Only show this button when expanded */
  whenExpanded?: boolean;
  /** Use Slot to merge props with child element */
  asChild?: boolean;
  /** Additional class names */
  className?: string;
}

export function ReadMoreButton({
  children,
  whenCollapsed,
  whenExpanded,
  asChild = false,
  className,
  onClick,
  ...props
}: ReadMoreButtonProps) {
  const { isExpanded, toggleExpanded } = useReadMore();

  // Conditional rendering based on state
  if (whenCollapsed && isExpanded) return null;
  if (whenExpanded && !isExpanded) return null;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggleExpanded();
    onClick?.(e);
  };

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      type="button"
      onClick={handleClick}
      aria-expanded={isExpanded}
      className={cn(
        'focus-visible:ring-ring/30 dark:focus-visible:ring-ring/50 inline-flex cursor-pointer items-center text-sm transition-colors hover:underline focus-visible:ring-2 focus-visible:outline-none',
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
