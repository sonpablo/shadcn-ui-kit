'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends Omit<React.ComponentProps<'input'>, 'prefix'> {
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
  'aria-invalid': ariaInvalid,
  ...props
}: InputProps) {
  const hasAddons = prefix || suffix;

  // Base input styles (used when no prefix/suffix)
  const inputBaseStyles =
    'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm';

  const focusStyles =
    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]';

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
        className={cn(inputBaseStyles, focusStyles, invalidStyles, className)}
        {...props}
      />
    );
  }

  // Wrapper styles when prefix/suffix are present
  const wrapperStyles = cn(
    'border-input dark:bg-input/30 flex h-9 w-full items-center gap-2 rounded-md border bg-transparent px-3 shadow-xs transition-[color,box-shadow]',
    'focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]',
    ariaInvalid &&
      'ring-destructive/20 dark:ring-destructive/40 border-destructive',
    disabled && 'cursor-not-allowed opacity-50',
    className,
  );

  // Inner input styles (no border, no padding, no shadow)
  const innerInputStyles =
    'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground h-full w-full min-w-0 flex-1 bg-transparent text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed md:text-sm';

  return (
    <div data-slot="input-wrapper" aria-disabled={disabled} className={wrapperStyles}>
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
