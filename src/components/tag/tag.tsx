import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const tagVariants = cva(
  'inline-flex items-center font-medium border bg-transparent w-fit shrink-0 whitespace-nowrap transition-[color,background-color,border-color,box-shadow] select-none',
  {
    variants: {
      variant: {
        green: 'text-green-500 border-green-500',
        red: 'text-red-500 border-red-500',
        yellow: 'text-yellow-400 border-yellow-400',
        gray: 'text-gray-400 border-gray-400',
        default: 'text-primary border-primary',
      },
      size: {
        xs: 'h-6 rounded-sm gap-1 px-1.5 text-xs has-[>svg]:px-1.5 [&>svg]:size-3',
        sm: 'h-7 rounded-sm gap-1 px-2 text-sm has-[>svg]:px-2 [&>svg]:size-3.5',
        md: 'h-8 rounded-sm gap-1.5 px-3 text-sm has-[>svg]:px-2.5 [&>svg]:size-4',
        default:
          'h-9 px-4 py-2 text-base rounded-md has-[>svg]:px-3 [&>svg]:size-4',
        lg: 'h-10 rounded-lg px-6 text-base has-[>svg]:px-4 [&>svg]:size-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface TagProps
  extends React.ComponentProps<'span'>,
    VariantProps<typeof tagVariants> {
  asChild?: boolean;
}

export function Tag({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: TagProps) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot="tag"
      className={cn(tagVariants({ variant, size }), className)}
      {...props}
    />
  );
}
