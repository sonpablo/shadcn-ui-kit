import { useEffect, useRef, useState } from 'react';

interface ScrollSpyOptions {
  /**
   * Optional reference to the scrollable container that holds the tracked sections.
   * If omitted, the hook will not attach any scroll listener.
   *
   * Typically this is a ref passed from `ScrollSpyContent`.
   *
   * @example
   * ```tsx
   * const containerRef = useRef<HTMLDivElement>(null);
   * const activeId = useScrollSpy(['intro', 'usage', 'api'], { rootRef: containerRef });
   * ```
   */
  rootRef?: React.RefObject<HTMLElement | null>;
}

/**
 * **useScrollSpy**
 *
 * A custom React hook that observes scroll position inside a container
 * and returns the ID of the section currently closest to the top.
 *
 * Designed to work with `ScrollSpyProvider`, `ScrollSpyNav`, and `ScrollSpyContent`
 * as part of the scroll spy system, but can also be used independently.
 *
 * ### Features
 * - Tracks the scroll position of a specific container (via `rootRef`).
 * - Determines which section is closest to the top based on element offsets.
 * - Returns the active section’s ID as a string.
 * - Lightweight, no external dependencies.
 *
 * ### Behavior
 * - The hook attaches a scroll listener to the given `rootRef` element.
 * - On every scroll event, it measures each section’s offset and finds
 *   the one with the smallest distance to the current scroll position.
 * - When the active section changes, the returned `activeId` updates reactively.
 *
 * ### Usage
 * ```tsx
 * const containerRef = useRef<HTMLDivElement>(null);
 * const sections = ['overview', 'details', 'examples'];
 * const activeSection = useScrollSpy(sections, { rootRef: containerRef });
 *
 * return (
 *   <div ref={containerRef} style={{ height: 400, overflowY: 'auto' }}>
 *     <div id="overview">Overview content</div>
 *     <div id="details">Details content</div>
 *     <div id="examples">Examples content</div>
 *   </div>
 * );
 * ```
 *
 * @param {string[]} ids - An array of element IDs representing tracked sections.
 * @param {ScrollSpyOptions} [options] - Optional configuration object with a scroll container ref.
 * @returns {string} The ID of the currently active section.
 *
 * @example
 * // Basic usage
 * const activeId = useScrollSpy(['section1', 'section2'], { rootRef: containerRef });
 */
export const useScrollSpy = (
  ids: string[],
  options?: ScrollSpyOptions,
): string => {
  const [activeId, setActiveId] = useState('');
  const activeIdRef = useRef(activeId);

  useEffect(() => {
    activeIdRef.current = activeId;
  }, [activeId]);

  useEffect(() => {
    const rootEl = options?.rootRef?.current;
    if (!rootEl) return;

    const handleScroll = () => {
      const scrollTop = rootEl.scrollTop;

      let closestId = '';
      let minDistance = Infinity;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;

        const elTop = el.offsetTop - rootEl.offsetTop;
        const distance = Math.abs(elTop - scrollTop);

        if (distance < minDistance) {
          minDistance = distance;
          closestId = id;
        }
      }

      if (closestId && closestId !== activeIdRef.current) {
        activeIdRef.current = closestId;
        setActiveId(closestId);
      }
    };

    handleScroll();
    rootEl.addEventListener('scroll', handleScroll, { passive: true });

    return () => rootEl.removeEventListener('scroll', handleScroll);
  }, [ids, options?.rootRef]);

  return activeId;
};
