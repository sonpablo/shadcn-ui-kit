/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import { useScrollSpy } from './use-scroll-spy';

/**
 * Represents a section tracked by the ScrollSpy system.
 */
export interface Section {
  /** The HTML `id` of the target element in the scrollable container. */
  id: string;
  /** The display label or name of the section. */
  label: string;
}

/**
 * Props for the {@link ScrollSpyProvider} component.
 */
export interface ScrollSpyProviderProps {
  /**
   * Child components that will have access to the ScrollSpy context.
   * Typically includes {@link ScrollSpyNav} and {@link ScrollSpyContent}.
   */
  children: ReactNode;

  /**
   * List of tracked sections, each defined by an `id` and `label`.
   * The IDs must match the `id` attributes of the DOM elements you want to observe.
   */
  sections: Section[];

  /**
   * Optional vertical offset (in pixels) used when scrolling to a section.
   * This helps align the target section properly when you have sticky headers.
   * @default 100
   */
  offset?: number;
}

/**
 * The value provided by {@link ScrollSpyContext}, available via {@link useScrollSpyContext}.
 */
export interface ScrollSpyContextValue {
  /**
   * The ID of the currently active section, or `null` if no section is active.
   */
  activeSection: string | null;

  /**
   * Smoothly scrolls the container to the given section ID.
   * @param id - The target section ID.
   */
  scrollToSection: (id: string) => void;

  /**
   * Registers the scrollable container DOM element.
   * Must be called by the component responsible for rendering the scrollable content.
   *
   * @param node - The container element or `null` to unregister.
   */
  registerContainer: (node: HTMLElement | null) => void;
}

/**
 * React Context used to share scroll spy state between navigation and content.
 * Do not access directly — use {@link useScrollSpyContext} instead.
 */
export const ScrollSpyContext = createContext<ScrollSpyContextValue | null>(
  null,
);

/**
 * **ScrollSpyProvider**
 *
 * A context provider that manages scroll tracking and section activation logic.
 *
 * This component must wrap your scrollable area (`ScrollSpy.Content`) and navigation (`ScrollSpy.Nav`).
 * It internally uses the {@link useScrollSpy} hook to detect which section is currently visible,
 * and exposes methods for scrolling and container registration.
 *
 * ### Responsibilities
 * - Tracks the currently active section via `useScrollSpy`.
 * - Provides the `scrollToSection` function to programmatically scroll to any section.
 * - Exposes a `registerContainer` function that must be called by the scrollable content component.
 *
 * ### Typical usage
 * ```tsx
 * <ScrollSpyProvider sections={[
 *   { id: 'intro', label: 'Introduction' },
 *   { id: 'usage', label: 'Usage' },
 * ]}>
 *   <div className="flex">
 *     <ScrollSpyNav sections={sections} />
 *     <ScrollSpyContent>
 *       <section id="intro">...</section>
 *       <section id="usage">...</section>
 *     </ScrollSpyContent>
 *   </div>
 * </ScrollSpyProvider>
 * ```
 */
export const ScrollSpyProvider = ({
  children,
  sections,
  offset = 100,
}: ScrollSpyProviderProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  const activeSection = useScrollSpy(
    sections.map((s) => s.id),
    { rootRef: { current: container } },
  );

  const scrollToSection = useCallback(
    (id: string) => {
      if (!container) return;
      const section = container.querySelector<HTMLElement>(`#${id}`);
      if (section) {
        container.scrollTo({
          top: section.offsetTop - offset,
          behavior: 'smooth',
        });
      }
    },
    [container, offset],
  );

  const registerContainer = useCallback((node: HTMLElement | null) => {
    setContainer(node);
  }, []);

  return (
    <ScrollSpyContext.Provider
      value={{
        activeSection,
        scrollToSection,
        registerContainer,
      }}
    >
      {children}
    </ScrollSpyContext.Provider>
  );
};

/**
 * Hook to access the ScrollSpy context.
 *
 * Must be used **inside** a {@link ScrollSpyProvider}.
 * Throws an error if called outside the provider.
 *
 * @example
 * ```tsx
 * const { activeSection, scrollToSection } = useScrollSpyContext();
 * ```
 *
 * @throws If used outside of `ScrollSpyProvider`.
 */
export const useScrollSpyContext = () => {
  const ctx = useContext(ScrollSpyContext);
  if (!ctx)
    throw new Error(
      'useScrollSpyContext must be used within a ScrollSpyProvider',
    );
  return ctx;
};
