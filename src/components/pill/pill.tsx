import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const pillVariants = cva(
  [
    'relative inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap shrink-0 transition-[color,background-color,box-shadow] select-none [&>svg]:size-3 [&>svg]:shrink-0',
    // Pseudo-element for gradient border
    'before:absolute before:inset-0 before:rounded-full before:border before:pointer-events-none',
    'before:[mask-image:linear-gradient(to_bottom,black_0%,black_50%,transparent_100%)]',
  ],
  {
    variants: {
      variant: {
        default:
          'bg-transparent text-foreground before:border-input',
        selected:
          'bg-primary text-primary-foreground before:border-primary',
      },
      size: {
        sm: 'h-7 px-2.5 text-xs',
        default: 'h-8 px-3 text-sm',
        lg: 'h-10 px-4 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface PillProps
  extends React.ComponentProps<'span'>,
    VariantProps<typeof pillVariants> {
  asChild?: boolean;
}

function Pill({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: PillProps) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot="pill"
      data-variant={variant}
      className={cn(pillVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Pill, pillVariants };

