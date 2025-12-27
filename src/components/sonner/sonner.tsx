'use client';

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from 'lucide-react';
import { Toaster as Sonner, ToasterProps } from 'sonner';

/**
 * Toaster component for displaying toast notifications.
 *
 * Uses CSS variables for theming, so it automatically adapts to light/dark mode
 * without requiring useTheme or a ThemeProvider.
 *
 * If you need to explicitly set the theme, pass it as a prop:
 * ```tsx
 * <Toaster theme="dark" />
 * ```
 */
const Toaster = ({ position = 'top-center', ...props }: ToasterProps) => {
  return (
    <Sonner
      position={position}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        classNames: {
          toast: '!rounded-lg !shadow-lg',
          success:
            '!bg-toast-success !border-toast-success [&_*]:!text-white [&_svg]:!text-white',
          error:
            '!bg-toast-error !border-toast-error [&_*]:!text-white [&_svg]:!text-white',
          warning:
            '!bg-toast-warning !border-toast-warning [&_*]:!text-white [&_svg]:!text-white',
          info: '!bg-toast-info !border-toast-info [&_*]:!text-white [&_svg]:!text-white',
          actionButton:
            '!bg-transparent !text-foreground !border !border-white/20 !rounded-md !px-3 !py-1.5 !text-sm !font-medium hover:!bg-white/10',
          cancelButton:
            '!bg-transparent !text-white !border !border-white/30 !rounded-md !px-3 !py-1.5 !text-sm hover:!bg-white/10',
        },
      }}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
          '--border-radius': 'var(--radius)',
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
