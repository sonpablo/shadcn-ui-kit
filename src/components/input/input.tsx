'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const inputVariants = cva(
  'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        sm: 'h-8 px-2.5 py-1 text-sm file:text-xs file:h-6',
        default: 'h-9 px-3 py-1 text-base md:text-sm file:text-sm file:h-7',
        lg: 'h-10 px-3.5 py-1.5 text-base file:text-sm file:h-7',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

const wrapperVariants = cva(
  'border-input dark:bg-input/30 flex w-full items-center gap-2 rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] focus-within:border-ring focus-within:ring-ring/30 dark:focus-within:ring-ring/50 focus-within:ring-[3px]',
  {
    variants: {
      size: {
        sm: 'h-8 px-2.5',
        default: 'h-9 px-3',
        lg: 'h-10 px-3.5',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

export interface InputProps
  extends Omit<React.ComponentProps<'input'>, 'prefix' | 'size'>,
    VariantProps<typeof inputVariants> {
  /** Content to display before the input (icons, text, etc.) */
  prefix?: React.ReactNode;
  /** Content to display after the input (icons, buttons, etc.) */
  suffix?: React.ReactNode;
}

function Input({
  className,
  type,
  prefix,
  suffix,
  disabled,
  size,
  'aria-invalid': ariaInvalid,
  ...props
}: InputProps) {
  const hasAddons = prefix || suffix;

  const focusStyles =
    'focus-visible:border-ring focus-visible:ring-ring/30 dark:focus-visible:ring-ring/50 focus-visible:ring-[3px]';

  const invalidStyles =
    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive';

  // If no prefix/suffix, render simple input
  if (!hasAddons) {
    return (
      <input
        type={type}
        data-slot="input"
        disabled={disabled}
        aria-invalid={ariaInvalid}
        className={cn(
          inputVariants({ size }),
          focusStyles,
          invalidStyles,
          className,
        )}
        {...props}
      />
    );
  }

  // Inner input styles (no border, no padding, no shadow)
  const innerInputStyles = cn(
    'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground h-full w-full min-w-0 flex-1 bg-transparent outline-none file:inline-flex file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed',
    size === 'sm' && 'text-sm file:text-xs file:h-6',
    size === 'lg' && 'text-base file:text-sm file:h-7',
    (!size || size === 'default') &&
      'text-base md:text-sm file:text-sm file:h-7',
  );

  return (
    <div
      data-slot="input-wrapper"
      aria-disabled={disabled}
      className={cn(
        wrapperVariants({ size }),
        ariaInvalid &&
          'ring-destructive/20 dark:ring-destructive/40 border-destructive',
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
    >
      {prefix && (
        <span
          data-slot="input-prefix"
          className="text-muted-foreground flex shrink-0 items-center [&>svg]:size-4"
        >
          {prefix}
        </span>
      )}
      <input
        type={type}
        data-slot="input"
        disabled={disabled}
        aria-invalid={ariaInvalid}
        className={innerInputStyles}
        {...props}
      />
      {suffix && (
        <span
          data-slot="input-suffix"
          className="text-muted-foreground flex shrink-0 items-center [&>svg]:size-4"
        >
          {suffix}
        </span>
      )}
    </div>
  );
}

export { Input };
