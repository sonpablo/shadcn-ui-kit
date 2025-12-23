/* eslint-disable react-refresh/only-export-components */
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  [
    // Layout
    'inline-flex items-center justify-center gap-2 shrink-0',
    // Typography
    'text-sm font-medium whitespace-nowrap',
    // Shape
    'rounded-md',
    // Interaction
    'cursor-pointer transition-all outline-none',
    // Disabled state
    'disabled:pointer-events-none disabled:opacity-50',
    // Focus ring (base)
    'focus-visible:ring-[2px]',
    // SVG handling
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    // Invalid state
    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
  ],
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary/90 dark:hover:bg-primary/80 focus-visible:ring-primary/30 dark:focus-visible:ring-primary/50',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 dark:hover:bg-destructive/80 focus-visible:ring-destructive/40 dark:focus-visible:ring-red-400/60',
        outline:
          'border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring/30 dark:bg-input/30 dark:hover:bg-input/50 dark:focus-visible:ring-ring/50 aria-invalid:border-destructive',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:hover:bg-secondary/60 focus-visible:ring-secondary/30 dark:focus-visible:ring-secondary/50',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 focus-visible:ring-accent/30 dark:focus-visible:ring-accent/50',
        link: 'text-primary underline-offset-4 hover:underline focus-visible:ring-primary/30 dark:focus-visible:ring-primary/50',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
