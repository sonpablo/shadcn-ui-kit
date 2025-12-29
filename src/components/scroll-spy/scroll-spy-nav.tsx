import { ReactNode } from 'react';
import { useScrollSpyContext } from './scroll-spy-provider';
import { cn } from '@/lib/utils';

interface Section {
  id: string;
  label: string;
}

export interface ScrollSpyNavProps {
  /**
   * The list of sections to display in the navigation.
   * Each section should have a unique `id` and a human-readable `label`.
   */
  sections: Section[];

  /**
   * Optional custom render function for each navigation item.
   * Allows full control over item layout, styling, and behavior.
   *
   * @example
   * ```tsx
   * <ScrollSpy.Nav
   *   sections={sections}
   *   renderItem={({ section, isActive, onNavigate }) => (
   *     <button
   *       onClick={() => onNavigate(section.id)}
   *       className={isActive ? 'font-bold text-accent-400' : 'text-gray-400'}
   *     >
   *       {section.label}
   *     </button>
   *   )}
   * />
   * ```
   */
  renderItem?: (props: {
    section: Section;
    isActive: boolean;
    onNavigate: (id: string) => void;
  }) => ReactNode;

  /**
   * Additional CSS classes to apply to the root `<nav>` element.
   * Useful for customizing width, padding, colors, or layout behavior.
   */
  className?: string;
}

/**
 * **ScrollSpyNav**
 *
 * A navigational component that lists all tracked sections and highlights the
 * currently active one as the user scrolls through content.
 *
 * It must be rendered **inside** a `ScrollSpy.Provider`, which provides context
 * about the current active section and scroll-handling functions.
 *
 * ### Features
 * - Displays and highlights active sections automatically.
 * - Smoothly scrolls to a section when its nav item is clicked.
 * - Accepts a `renderItem` prop for fully custom rendering.
 * - Supports `className` for layout and style customization.
 *
 * ### Usage
 * ```tsx
 * <ScrollSpy.Provider sections={sections}>
 *   <ScrollSpy.Nav
 *     sections={sections}
 *     className="w-64 bg-neutral-800 rounded-lg p-4"
 *   />
 *   <ScrollSpy.Content className="flex-1 p-6 overflow-auto">
 *     {sections.map(s => <Section key={s.id} id={s.id} title={s.label} />)}
 *   </ScrollSpy.Content>
 * </ScrollSpy.Provider>
 * ```
 *
 * @component
 * @param {ScrollSpyNavProps} props - The properties for configuring the navigation.
 *
 * @see ScrollSpyProvider
 * @see ScrollSpyContent
 */
export const ScrollSpyNav = ({
  sections,
  renderItem,
  className,
}: ScrollSpyNavProps) => {
  const { activeSection, scrollToSection } = useScrollSpyContext();

  return (
    <nav
      aria-label="Scroll spy navigation"
      className={cn(
        'sticky top-0 w-64 min-w-1/3 shrink-0 overflow-y-auto',
        className,
      )}
    >
      <ul className="flex flex-col gap-4 p-1">
        {sections.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <li key={section.id}>
              {renderItem ? (
                renderItem({ section, isActive, onNavigate: scrollToSection })
              ) : (
                <DefaultItem
                  section={section}
                  isActive={isActive}
                  onNavigate={scrollToSection}
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const DefaultItem = ({
  section,
  isActive,
  onNavigate,
}: {
  section: Section;
  isActive: boolean;
  onNavigate: (id: string) => void;
}) => (
  <button
    type="button"
    onClick={() => onNavigate(section.id)}
    className={cn(
      'neura-font-label-xl flex w-full cursor-pointer items-center space-x-3 text-left transition-colors',
      'neura-text-neutral-100 hover:text-white',
      isActive && 'neura-font-label-xl-bold text-white',
    )}
  >
    <span
      className={cn(
        'h-2 w-2 rounded-full transition-colors',
        isActive && 'neura-bg-accent-400',
      )}
      aria-hidden="true"
    />
    <span className="flex items-center gap-2">{section.label}</span>
  </button>
);
