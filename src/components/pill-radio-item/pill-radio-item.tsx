'use client';

import * as React from 'react';
import { RadioGroupItem } from '@/components/radio-group/radio-group';
import { Label } from '@/components/label/label';
import { Pill, type PillProps } from '@/components/pill/pill';
import { cn } from '@/lib/utils';

export interface PillRadioItemProps
  extends Omit<PillProps, 'asChild' | 'variant'> {
  /** The value of the radio item (required for RadioGroup) */
  value: string;
  /** Optional id for the radio item. If not provided, uses value */
  id?: string;
  /** Whether the radio item is disabled */
  disabled?: boolean;
}

function PillRadioItem({
  value,
  id,
  disabled,
  size,
  className,
  children,
  ...props
}: PillRadioItemProps) {
  const itemId = id || `pill-radio-${value}`;

  return (
    <Label
      htmlFor={itemId}
      className={cn('cursor-pointer', disabled && 'cursor-not-allowed opacity-50')}
    >
      <Pill
        size={size}
        className={cn(
          // Base styles for interactive state
          'transition-colors',
          // Checked state - uses has-* to detect RadioGroupItem state
          'has-[[data-state=checked]]:bg-primary has-[[data-state=checked]]:text-primary-foreground has-[[data-state=checked]]:before:border-primary',
          // Hover state when not checked
          'has-[[data-state=unchecked]]:hover:bg-muted/50',
          className,
        )}
        {...props}
      >
        <RadioGroupItem
          value={value}
          id={itemId}
          disabled={disabled}
          className="sr-only"
        />
        {children}
      </Pill>
    </Label>
  );
}

export { PillRadioItem };

