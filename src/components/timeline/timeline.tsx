/* eslint-disable react-refresh/only-export-components */
'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

// Timeline wrapper - manages spacing between items
const timelineVariants = cva('relative flex flex-col', {
  variants: {
    size: {
      sm: 'gap-6',
      default: 'gap-8',
      lg: 'gap-10',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

// Timeline item - horizontal flex container with icon and content
const timelineItemVariants = cva('relative flex items-start gap-4');

// Timeline icon - stays at top
const timelineIconVariants = cva(
  'relative z-10 flex shrink-0 items-center justify-center rounded-full transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        success: 'bg-green-500 text-white dark:bg-green-600',
        warning: 'bg-yellow-500 text-white dark:bg-yellow-600',
        error: 'bg-destructive text-white',
        outline:
          'border-2 border-primary bg-background text-primary ring-4 ring-background',
        ghost: 'bg-muted text-muted-foreground',
      },
      size: {
        sm: 'size-6 text-xs',
        default: 'size-8 text-sm',
        lg: 'size-10 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

// Timeline content - flex-1 to take remaining space
const timelineContentVariants = cva('flex-1 mt-1 space-y-2', {
  variants: {
    variant: {
      default: '',
      card: 'rounded-lg border bg-card p-4 shadow-sm',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

// Context to pass variant and icon size from Timeline to items
const TimelineContext = React.createContext<{
  variant?: 'default' | 'dashed' | 'dotted' | 'gradient' | null;
  showLine?: boolean;
  iconSize?: 'sm' | 'default' | 'lg' | null;
  withoutIcons?: boolean;
}>({
  variant: 'default',
  showLine: true,
  iconSize: 'default',
  withoutIcons: true,
});

export interface TimelineProps
  extends React.ComponentProps<'ol'>,
    VariantProps<typeof timelineVariants> {
  /** Line style variant that gets passed to child items */
  variant?: 'default' | 'dashed' | 'dotted' | 'gradient';
  /** Whether to show the connecting line */
  showLine?: boolean;
  /** Use simple mode without icons (renders a continuous left border). Default is true. Set to false to use icons. */
  withoutIcons?: boolean;
}

export interface TimelineItemProps extends React.ComponentProps<'li'> {
  /** Whether this is the last item in the timeline */
  isLast?: boolean;
  /** Icon size for proper line centering (sm: 24px, default: 32px, lg: 40px) */
  iconSize?: 'sm' | 'default' | 'lg';
}

export interface TimelineIconProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof timelineIconVariants> {
  /** Icon content (React node or icon component) */
  icon?: React.ReactNode;
}

export interface TimelineContentProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof timelineContentVariants> {}

export type TimelineTitleProps = React.ComponentProps<'p'>;

export type TimelineDescriptionProps = React.ComponentProps<'p'>;

export type TimelineTimeProps = React.ComponentProps<'time'>;

function Timeline({
  className,
  variant = 'default',
  showLine = true,
  withoutIcons = true,
  size,
  children,
  ...props
}: TimelineProps) {
  return (
    <TimelineContext.Provider value={{ variant, showLine, withoutIcons }}>
      <ol
        data-slot="timeline"
        data-without-icons={withoutIcons}
        className={cn(
          timelineVariants({ size }),
          withoutIcons && 'border-border border-l-2',
          className,
        )}
        {...props}
      >
        {children}
      </ol>
    </TimelineContext.Provider>
  );
}

function TimelineItem({
  className,
  isLast = false,
  iconSize = 'default',
  children,
  ...props
}: TimelineItemProps) {
  const { variant, showLine, withoutIcons } = React.useContext(TimelineContext);

  // Check if there's an icon in the children (only when not explicitly withoutIcons)
  const hasIcon =
    !withoutIcons &&
    React.Children.toArray(children).some(
      (child) =>
        React.isValidElement(child) &&
        typeof child.type !== 'string' &&
        child.type === TimelineIcon,
    );

  // Calculate line position based on icon size (when icon exists)
  // sm (24px) → center at 12px → left-3
  // default (32px) → center at 16px → left-4
  // lg (40px) → center at 20px → left-5
  const linePosition = {
    sm: 'left-3',
    default: 'left-4',
    lg: 'left-5',
  }[iconSize];

  // Calculate top offset for line start (when icon exists)
  // sm (24px) → top-6
  // default (32px) → top-8
  // lg (40px) → top-10
  const lineTop = {
    sm: 'top-6',
    default: 'top-8',
    lg: 'top-10',
  }[iconSize];

  return (
    <li
      data-slot="timeline-item"
      data-last={isLast}
      data-has-icon={hasIcon}
      className={cn(
        timelineItemVariants(),
        'relative',
        withoutIcons && 'pl-4',
        className,
      )}
      {...props}
    >
      {children}
      {/* Connector line - positioned relative to the icon */}
      {!isLast && showLine && hasIcon && (
        <div
          className={cn(
            'absolute h-full w-0.5 -translate-x-1/2',
            linePosition,
            lineTop,
            variant === 'default' && 'bg-border',
            variant === 'dashed' &&
              'from-border via-border to-border bg-linear-to-b bg-size-[2px_8px] bg-repeat-y',
            variant === 'dotted' &&
              'from-border bg-linear-to-b via-transparent to-transparent bg-size-[2px_4px] bg-repeat-y',
            variant === 'gradient' &&
              'from-primary/20 via-primary/50 to-primary/20 bg-linear-to-b',
          )}
          aria-hidden="true"
        />
      )}
    </li>
  );
}

function TimelineIcon({
  className,
  variant,
  size,
  icon,
  children,
  ...props
}: TimelineIconProps) {
  return (
    <div
      data-slot="timeline-icon"
      className={cn(timelineIconVariants({ variant, size }), className)}
      {...props}
    >
      {icon || children || (
        <div className="size-2 rounded-full bg-current" aria-hidden="true" />
      )}
    </div>
  );
}

function TimelineContent({
  className,
  variant,
  children,
  ...props
}: TimelineContentProps) {
  return (
    <div
      data-slot="timeline-content"
      className={cn(timelineContentVariants({ variant }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

function TimelineTitle({ className, children, ...props }: TimelineTitleProps) {
  return (
    <p
      data-slot="timeline-title"
      className={cn('leading-none font-semibold tracking-tight', className)}
      {...props}
    >
      {children}
    </p>
  );
}

function TimelineDescription({
  className,
  children,
  ...props
}: TimelineDescriptionProps) {
  return (
    <p
      data-slot="timeline-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    >
      {children}
    </p>
  );
}

function TimelineTime({ className, children, ...props }: TimelineTimeProps) {
  return (
    <time
      data-slot="timeline-time"
      className={cn(
        'text-muted-foreground -mt-1 block text-xs leading-none font-medium',
        className,
      )}
      {...props}
    >
      {children}
    </time>
  );
}

export {
  Timeline,
  TimelineItem,
  TimelineIcon,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
  timelineVariants,
  timelineItemVariants,
  timelineIconVariants,
  timelineContentVariants,
};
