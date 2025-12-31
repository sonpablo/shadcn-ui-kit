/* eslint-disable react-refresh/only-export-components */
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center font-medium w-fit whitespace-nowrap shrink-0 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow,background-color,border-color] overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
        secondary:
          'bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
        destructive:
          'bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        success:
          'bg-green-500 text-white [a&]:hover:bg-green-500/90 dark:bg-green-500/80 dark:[a&]:hover:bg-green-500/70',
        warning:
          'bg-yellow-400 text-black [a&]:hover:bg-yellow-400/90 dark:bg-yellow-400/90 dark:[a&]:hover:bg-yellow-400/80',
      },
      appearance: {
        outline: 'border',
      },
      shape: {
        pill: 'rounded-full',
        square: 'rounded-md',
      },
      size: {
        xs: 'h-5 px-1.5 py-0 text-[10px] [&>svg]:size-2.5',
        sm: 'h-6 px-2 py-0 text-xs [&>svg]:size-3',
        default: 'h-7 px-2.5 py-0 text-xs [&>svg]:size-3',
        md: 'h-8 px-3 py-0 text-sm [&>svg]:size-3.5',
        lg: 'h-9 px-4 py-0 text-sm [&>svg]:size-4',
      },
    },
    compoundVariants: [
      // Solid variants (no appearance specified)
      {
        variant: 'default',
        appearance: undefined,
        class: 'border-transparent',
      },
      {
        variant: 'secondary',
        appearance: undefined,
        class: 'border-transparent',
      },
      {
        variant: 'destructive',
        appearance: undefined,
        class: 'border-transparent',
      },
      {
        variant: 'success',
        appearance: undefined,
        class: 'border-transparent',
      },
      {
        variant: 'warning',
        appearance: undefined,
        class: 'border-transparent',
      },
      // Outline variants with specific colors
      {
        variant: 'default',
        appearance: 'outline',
        class: '!bg-transparent text-primary border-primary',
      },
      {
        variant: 'secondary',
        appearance: 'outline',
        class: '!bg-transparent text-muted-foreground border-border',
      },
      {
        variant: 'destructive',
        appearance: 'outline',
        class:
          '!bg-transparent dark:!bg-transparent text-destructive border-destructive',
      },
      {
        variant: 'success',
        appearance: 'outline',
        class:
          '!bg-transparent dark:!bg-transparent text-green-500 border-green-500',
      },
      {
        variant: 'warning',
        appearance: 'outline',
        class:
          '!bg-transparent dark:!bg-transparent text-yellow-400 border-yellow-400',
      },
    ],
    defaultVariants: {
      variant: 'default',
      shape: 'pill',
      size: 'default',
    },
  },
);

function Badge({
  className,
  variant,
  appearance,
  shape,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot="badge"
      className={cn(
        badgeVariants({ variant, appearance, shape, size }),
        className,
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
