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
        sm: 'h-7 rounded-sm gap-1 px-2 has-[>svg]:px-2',
        md: 'h-8 rounded-sm gap-1.5 px-3 has-[>svg]:px-2.5',
        default: 'h-9 px-4 py-2 rounded-md has-[>svg]:px-3',
        lg: 'h-10 rounded-lg px-6 has-[>svg]:px-4',
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
      className={cn(tagVariants({ variant, size }, 'rounde'), className)}
      {...props}
    />
  );
}
