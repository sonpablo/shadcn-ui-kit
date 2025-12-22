'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

function FieldSet({ className, ...props }: React.ComponentProps<'fieldset'>) {
  return (
    <fieldset
      data-slot="fieldset"
      className={cn(
        'grid gap-6 rounded-lg border p-4 [&:has([data-slot=field-legend])]:pt-0',
        className,
      )}
      {...props}
    />
  );
}

function FieldLegend({ className, ...props }: React.ComponentProps<'legend'>) {
  return (
    <legend
      data-slot="field-legend"
      className={cn(
        'text-foreground -ml-1 px-1 text-sm font-medium',
        className,
      )}
      {...props}
    />
  );
}

function FieldGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="field-group"
      className={cn('grid gap-6', className)}
      {...props}
    />
  );
}

function Field({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="field"
      className={cn(
        'group grid gap-2',
        // When invalid, propagate to children
        'data-[invalid=true]:text-destructive',
        className,
      )}
      {...props}
    />
  );
}

function FieldContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="field-content"
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  );
}

interface FieldLabelProps
  extends React.ComponentProps<typeof LabelPrimitive.Root> {
  optional?: boolean;
}

function FieldLabel({
  className,
  children,
  optional,
  ...props
}: FieldLabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="field-label"
      className={cn(
        'flex items-center gap-2 text-sm leading-none font-medium select-none',
        'group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50',
        'group-data-[invalid=true]:text-destructive',
        className,
      )}
      {...props}
    >
      {children}
      {optional && (
        <span className="text-muted-foreground text-xs font-normal">
          (optional)
        </span>
      )}
    </LabelPrimitive.Root>
  );
}

function FieldTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="field-title"
      className={cn('text-sm leading-none font-medium', className)}
      {...props}
    />
  );
}

function FieldDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="field-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
}

function FieldSeparator({ className, ...props }: React.ComponentProps<'hr'>) {
  return (
    <hr
      data-slot="field-separator"
      className={cn('border-border border-t', className)}
      {...props}
    />
  );
}

interface FieldErrorProps extends React.ComponentProps<'div'> {
  /** Error messages to display. Can be a string, array of strings, or undefined */
  errors?: string | string[] | null;
  /** For Standard Schema compatibility (Zod, Valibot, etc.) */
  issues?: Array<{ message: string }> | null;
}

function FieldError({
  className,
  errors,
  issues,
  children,
  ...props
}: FieldErrorProps) {
  // Normalize errors to an array
  const errorMessages = React.useMemo(() => {
    if (issues && issues.length > 0) {
      return issues.map((issue) => issue.message);
    }
    if (errors) {
      return Array.isArray(errors) ? errors : [errors];
    }
    return [];
  }, [errors, issues]);

  // If no errors and no children, don't render
  if (errorMessages.length === 0 && !children) {
    return null;
  }

  return (
    <div
      data-slot="field-error"
      role="alert"
      aria-live="polite"
      className={cn('text-destructive text-sm', className)}
      {...props}
    >
      {children}
      {errorMessages.length === 1 && <span>{errorMessages[0]}</span>}
      {errorMessages.length > 1 && (
        <ul className="list-disc pl-4">
          {errorMessages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FieldControl({
  className,
  ...props
}: React.ComponentProps<typeof Slot>) {
  return (
    <Slot
      data-slot="field-control"
      className={cn(
        'group-data-[invalid=true]:border-destructive group-data-[invalid=true]:ring-destructive/20',
        className,
      )}
      {...props}
    />
  );
}

export {
  Field,
  FieldSet,
  FieldLegend,
  FieldGroup,
  FieldContent,
  FieldLabel,
  FieldTitle,
  FieldDescription,
  FieldSeparator,
  FieldError,
  FieldControl,
};
