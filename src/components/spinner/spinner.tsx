import { Loader2Icon } from 'lucide-react';

import { cn } from '@/lib/utils';

export interface SpinnerProps extends React.ComponentProps<'svg'> {
  /**
   * Accessible label for screen readers.
   * Optional - if not provided, no aria-label will be rendered.
   * @example "Loading data..." or "Cargando datos..."
   */
  ariaLabel?: string;
}

function Spinner({ className, ariaLabel, ...props }: SpinnerProps) {
  return (
    <Loader2Icon
      role="status"
      aria-label={ariaLabel}
      className={cn('text-primary size-4 animate-spin', className)}
      {...props}
    />
  );
}

export { Spinner };
