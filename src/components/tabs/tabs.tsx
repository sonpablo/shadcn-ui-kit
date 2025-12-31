/* eslint-disable react-refresh/only-export-components */
'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

// Context to share variant from TabsList to TabsTrigger
type TabsVariant = 'line' | 'pills';

const TabsVariantContext = React.createContext<TabsVariant | undefined>(
  undefined,
);

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  );
}

const tabsListVariants = cva('inline-flex items-center justify-center', {
  variants: {
    variant: {
      line: 'h-auto w-full gap-0 border-b border-border bg-transparent p-0',
      pills:
        'bg-muted text-muted-foreground h-9 w-fit gap-1 rounded-lg p-[3px]',
    },
  },
  defaultVariants: {
    variant: 'line',
  },
});

interface TabsListProps
  extends React.ComponentProps<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

function TabsList({ className, variant, ...props }: TabsListProps) {
  const resolvedVariant = variant || 'line';

  return (
    <TabsVariantContext.Provider value={resolvedVariant}>
      <TabsPrimitive.List
        data-slot="tabs-list"
        data-variant={resolvedVariant}
        className={cn(
          tabsListVariants({ variant: resolvedVariant }),
          className,
        )}
        {...props}
      />
    </TabsVariantContext.Provider>
  );
}

const tabsTriggerVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
  {
    variants: {
      variant: {
        line: [
          'relative px-4 py-3 rounded-none border-b-2 border-transparent bg-transparent',
          'text-muted-foreground hover:text-foreground',
          'data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:font-semibold',
          // Offset the parent border
          '-mb-px',
        ],
        pills: [
          'h-[calc(100%-1px)] flex-1 rounded-md border border-transparent px-3 py-1.5',
          'text-muted-foreground',
          'data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
          'dark:data-[state=active]:bg-input/30 dark:data-[state=active]:border-input',
        ],
      },
    },
    defaultVariants: {
      variant: 'line',
    },
  },
);

interface TabsTriggerProps
  extends React.ComponentProps<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {}

function TabsTrigger({ className, variant, ...props }: TabsTriggerProps) {
  // Get variant from context if not explicitly provided
  const contextVariant = React.useContext(TabsVariantContext);
  const resolvedVariant = variant || contextVariant || 'line';

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        tabsTriggerVariants({ variant: resolvedVariant }),
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('mt-4 flex-1 outline-none', className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
export { tabsListVariants, tabsTriggerVariants };
