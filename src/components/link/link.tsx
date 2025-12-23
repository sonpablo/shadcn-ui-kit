import * as React from 'react';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const linkVariants = cva(
  [
    'inline-flex items-center gap-1',
    'font-regular font-name',
    'text-primary',
    'hover:underline hover:cursor-pointer hover:text-primary-600',
    'focus:outline-none focus:ring-2 focus:ring-primary-100 focus:rounded-md focus:text-primary-600',
  ],
  {
    variants: {
      size: {
        md: 'text-base',
        sm: 'text-sm',
        xs: 'text-xs',
      },
      weight: {
        regular: 'font-normal',
        bold: 'font-bold',
      },
      disabled: {
        true: 'text-neutral-500 cursor-not-allowed pointer-events-none hover:no-underline',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      weight: 'regular',
      disabled: false,
    },
  },
);

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  asChild?: boolean;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { className, size, weight, asChild = false, disabled = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'a';

    const linkClass = cn(linkVariants({ size, weight, disabled }), className);

    return (
      <Comp className={linkClass} ref={ref} {...(disabled ? {} : props)}>
        <Slottable>{props.children}</Slottable>
      </Comp>
    );
  },
);

Link.displayName = 'Link';

export { Link, type LinkProps };
