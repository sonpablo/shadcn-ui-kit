'use client';

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const switchVariants = cva(
  'peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-input focus-visible:border-green-500 focus-visible:ring-green-500/50 dark:data-[state=unchecked]:bg-input/80 focus-visible:ring-[3px]',
        primary:
          'data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 focus-visible:ring-[3px]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const switchThumbVariants = cva(
  'pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0',
  {
    variants: {
      variant: {
        default:
          'bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-white',
        primary:
          'bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface SwitchProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchVariants> {}

function Switch({ className, variant, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(switchVariants({ variant }), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(switchThumbVariants({ variant }))}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
