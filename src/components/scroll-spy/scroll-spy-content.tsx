import { forwardRef, useEffect, useRef } from 'react';
import { useScrollSpyContext } from './scroll-spy-provider';
import { cn } from '@/lib/utils';

type ScrollSpyContentProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * **ScrollSpyContent**
 *
 * A container component that wraps the scrollable content of a page and
 * automatically integrates with the `ScrollSpyProvider` to track visible sections.
 *
 * This component must be placed **inside** a `ScrollSpy.Provider` and typically
 * rendered alongside a `ScrollSpy.Nav`. It registers itself with the provider
 * so that section visibility can be tracked as the user scrolls.
 *
 * ### Features
 * - Provides the scrollable container for the scroll spy system.
 * - Automatically registers/unregisters itself with the `ScrollSpyContext`.
 * - Supports all standard `<div>` HTML attributes.
 * - Accepts a custom `className` to control layout and visual appearance.
 * - Supports `ref` forwarding for direct DOM access.
 *
 * ### Usage
 * ```tsx
 * <ScrollSpy.Provider sections={sections}>
 *   <ScrollSpy.Nav sections={sections} />
 *   <ScrollSpy.Content className="p-6 bg-neutral-900 rounded-lg overflow-auto">
 *     <Section id="intro" title="Introduction" />
 *     <Section id="usage" title="Usage" />
 *     <Section id="api" title="API Reference" />
 *   </ScrollSpy.Content>
 * </ScrollSpy.Provider>
 * ```
 *
 * @component
 * @param {ScrollSpyContentProps} props - React div attributes and custom className.
 * @param {React.Ref<HTMLDivElement>} ref - Forwarded ref for DOM access.
 *
 * @example
 * // Adding custom styling to the scrollable area
 * <ScrollSpy.Content className="flex-1 p-8 border rounded-xl overflow-y-scroll" />
 */
export const ScrollSpyContent = forwardRef<
  HTMLDivElement,
  ScrollSpyContentProps
>(({ className, children, ...props }, ref) => {
  const { registerContainer } = useScrollSpyContext();
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = innerRef.current;
    if (node) registerContainer(node);
    return () => registerContainer(null);
  }, [registerContainer]);

  return (
    <div
      ref={(node) => {
        innerRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }}
      className={cn('flex-1 overflow-y-auto', className)}
      {...props}
    >
      {children}
    </div>
  );
});

ScrollSpyContent.displayName = 'ScrollSpyContent';
