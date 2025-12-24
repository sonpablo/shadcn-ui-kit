'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

interface DialogProps
  extends React.ComponentProps<typeof DialogPrimitive.Root> {
  /**
   * Automatically close the dialog after specified milliseconds.
   * Requires `open` and `onOpenChange` to be controlled.
   */
  autoCloseMs?: number;
}

function Dialog({ autoCloseMs, open, onOpenChange, ...props }: DialogProps) {
  React.useEffect(() => {
    if (open && autoCloseMs && onOpenChange) {
      const timeout = setTimeout(() => {
        onOpenChange(false);
      }, autoCloseMs);
      return () => clearTimeout(timeout);
    }
  }, [open, autoCloseMs, onOpenChange]);

  return (
    <DialogPrimitive.Root
      data-slot="dialog"
      open={open}
      onOpenChange={onOpenChange}
      {...props}
    />
  );
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

const overlayVariants = cva(
  'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50',
  {
    variants: {
      variant: {
        default: 'bg-black/50',
        blur: 'bg-[rgba(16,16,16,0.30)] backdrop-blur-[70px]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface DialogOverlayProps
  extends React.ComponentProps<typeof DialogPrimitive.Overlay>,
    VariantProps<typeof overlayVariants> {}

function DialogOverlay({ className, variant, ...props }: DialogOverlayProps) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(overlayVariants({ variant }), className)}
      {...props}
    />
  );
}

const contentVariants = cva(
  'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 p-6 duration-200 outline-none sm:max-w-lg',
  {
    variants: {
      variant: {
        default: 'bg-background rounded-lg border shadow-lg',
        blur: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface DialogContentProps
  extends React.ComponentProps<typeof DialogPrimitive.Content>,
    VariantProps<typeof contentVariants> {
  /**
   * Show the close button in the top-right corner.
   * @default true
   */
  showCloseButton?: boolean;
  /**
   * Close the dialog when clicking outside the content.
   * @default true (for "default" variant)
   * @default false (for "blur" variant)
   */
  closeOnOutsideClick?: boolean;
  /**
   * Close the dialog when pressing the Escape key.
   * @default true (for "default" variant)
   * @default false (for "blur" variant)
   */
  closeOnEscapeKey?: boolean;
}

function DialogContent({
  className,
  children,
  variant = 'default',
  showCloseButton = true,
  closeOnOutsideClick,
  closeOnEscapeKey,
  ...props
}: DialogContentProps) {
  const shouldCloseOnOutsideClick =
    closeOnOutsideClick ?? variant === 'default';
  const shouldCloseOnEscapeKey = closeOnEscapeKey ?? variant === 'default';

  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay variant={variant} />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        onInteractOutside={(e) => {
          if (!shouldCloseOnOutsideClick) e.preventDefault();
        }}
        onEscapeKeyDown={(e) => {
          if (!shouldCloseOnEscapeKey) e.preventDefault();
        }}
        className={cn(contentVariants({ variant }), className)}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className={cn(
              'ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 cursor-pointer rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
            )}
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
        className,
      )}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn('text-lg leading-none font-semibold', className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};

export type { DialogProps, DialogContentProps, DialogOverlayProps };
