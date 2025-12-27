import * as React from 'react';

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './breadcrumb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu/dropdown-menu';
import { cn } from '@/lib/utils';

/**
 * Breadcrumb item configuration
 */
export interface BreadcrumbItemConfig {
  /** Display text for the breadcrumb item */
  label: string;
  /** Navigation path (href or to depending on your router) */
  to: string;
  /** Optional icon to display before the label */
  icon?: React.ReactNode;
  /**
   * Accessible label for screen readers (useful when label is abbreviated or icon-only).
   * Falls back to `label` if not provided.
   */
  ariaLabel?: string;
}

/**
 * Props for the NeuraBreadcrumb component
 */
export interface NeuraBreadcrumbProps {
  /** Array of breadcrumb items. The last item is automatically treated as the current page. */
  items: BreadcrumbItemConfig[];
  /**
   * Custom link component to use (e.g., Link from react-router-dom or next/link).
   * If not provided, a native anchor tag is used.
   */
  linkComponent?: React.ElementType;
  /**
   * The prop name to use for the navigation path.
   * - Use "to" for react-router-dom
   * - Use "href" for next/link or native anchors
   * @default "href"
   */
  linkProp?: 'to' | 'href';
  /**
   * Custom separator element. Defaults to ChevronRight icon.
   */
  separator?: React.ReactNode;
  /**
   * Maximum number of items to show before collapsing.
   * When exceeded, middle items are replaced with an ellipsis dropdown.
   * Set to 0 or undefined to disable collapsing.
   */
  maxItems?: number;
  /**
   * Additional class name for the root element
   */
  className?: string;
  /**
   * Show icons if provided in items
   * @default true
   */
  showIcons?: boolean;
  /**
   * Custom aria-label for the navigation landmark.
   * Useful for pages with multiple navigation elements.
   * @default "Breadcrumb"
   * @example "Fleet navigation" or "Product hierarchy"
   */
  ariaLabel?: string;
  /**
   * Screen reader text for the collapsed items dropdown trigger.
   * @default "Show {n} more pages"
   */
  collapsedItemsLabel?: string;
  /**
   * ID of an element that describes the breadcrumb navigation.
   * Sets aria-describedby on the nav element.
   */
  ariaDescribedBy?: string;
}

/**
 * NeuraBreadcrumb - An opinionated breadcrumb component for Neura Robotics applications.
 */
function NeuraBreadcrumb({
  items,
  linkComponent,
  linkProp = 'href',
  separator,
  maxItems,
  className,
  showIcons = true,
  ariaLabel = 'Breadcrumb',
  collapsedItemsLabel,
  ariaDescribedBy,
}: NeuraBreadcrumbProps) {
  // If no items, render nothing
  if (!items || items.length === 0) {
    return null;
  }

  const LinkComp = linkComponent || 'a';

  // Determine if we need to collapse items
  const shouldCollapse = maxItems && maxItems > 0 && items.length > maxItems;

  // Calculate which items to show and which to collapse
  let visibleItems: BreadcrumbItemConfig[] = items;
  let collapsedItems: BreadcrumbItemConfig[] = [];

  if (shouldCollapse && maxItems >= 2) {
    // Always show first item and last (maxItems - 1) items
    const firstItem = items[0];
    const lastItems = items.slice(-(maxItems - 1));
    const middleItems = items.slice(1, -(maxItems - 1));

    visibleItems = [firstItem, ...lastItems];
    collapsedItems = middleItems;
  }

  const renderLink = (item: BreadcrumbItemConfig, isLast: boolean) => {
    const content = (
      <>
        {showIcons && item.icon && (
          <span className="mr-1.5 inline-flex" aria-hidden="true">
            {item.icon}
          </span>
        )}
        {/* If ariaLabel differs from label, use visually hidden text for screen readers */}
        {item.ariaLabel && item.ariaLabel !== item.label ? (
          <>
            <span aria-hidden="true">{item.label}</span>
            <span className="sr-only">{item.ariaLabel}</span>
          </>
        ) : (
          item.label
        )}
      </>
    );

    if (isLast) {
      return (
        <BreadcrumbPage
          className={cn(showIcons && item.icon && 'flex items-center')}
          aria-label={item.ariaLabel}
        >
          {content}
        </BreadcrumbPage>
      );
    }

    const linkProps = {
      [linkProp]: item.to,
      'aria-label': item.ariaLabel,
    };

    return (
      <BreadcrumbLink asChild>
        <LinkComp
          {...linkProps}
          className={cn(showIcons && item.icon && 'flex items-center')}
        >
          {content}
        </LinkComp>
      </BreadcrumbLink>
    );
  };

  const renderSeparator = (key: string) => (
    <BreadcrumbSeparator key={key}>{separator}</BreadcrumbSeparator>
  );

  const renderCollapsedDropdown = () => {
    const srLabel =
      collapsedItemsLabel ||
      `Show ${collapsedItems.length} more page${collapsedItems.length > 1 ? 's' : ''}`;

    return (
      <BreadcrumbItem key="collapsed">
        <DropdownMenu>
          <DropdownMenuTrigger
            className="flex items-center gap-1"
            aria-label={srLabel}
          >
            <BreadcrumbEllipsis className="size-4" />
            <span className="sr-only">{srLabel}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" aria-label="Hidden pages">
            {collapsedItems.map((item) => {
              const linkProps = {
                [linkProp]: item.to,
                'aria-label': item.ariaLabel,
              };
              return (
                <DropdownMenuItem key={item.to} asChild>
                  <LinkComp {...linkProps} className="flex items-center">
                    {showIcons && item.icon && (
                      <span className="mr-1.5" aria-hidden="true">
                        {item.icon}
                      </span>
                    )}
                    {item.label}
                  </LinkComp>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </BreadcrumbItem>
    );
  };

  return (
    <Breadcrumb
      className={className}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
    >
      <BreadcrumbList>
        {shouldCollapse ? (
          // Collapsed view: first item, ellipsis dropdown, then remaining items
          <>
            {/* First item */}
            <BreadcrumbItem>
              {renderLink(visibleItems[0], false)}
            </BreadcrumbItem>
            {renderSeparator('sep-first')}

            {/* Collapsed dropdown */}
            {renderCollapsedDropdown()}
            {renderSeparator('sep-collapsed')}

            {/* Remaining items (skip first since we already rendered it) */}
            {visibleItems.slice(1).map((item, index) => {
              const isLast = index === visibleItems.length - 2;
              return (
                <React.Fragment key={item.to}>
                  <BreadcrumbItem>{renderLink(item, isLast)}</BreadcrumbItem>
                  {!isLast && renderSeparator(`sep-${index}`)}
                </React.Fragment>
              );
            })}
          </>
        ) : (
          // Normal view: all items visible
          items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={item.to}>
                <BreadcrumbItem>{renderLink(item, isLast)}</BreadcrumbItem>
                {!isLast && renderSeparator(`sep-${index}`)}
              </React.Fragment>
            );
          })
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export { NeuraBreadcrumb };
