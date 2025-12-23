import type { Meta, StoryObj } from '@storybook/react';
import {
  Home,
  Settings,
  FileText,
  Bot,
  Cpu,
  Wrench,
  Slash,
} from 'lucide-react';

import { NeuraBreadcrumb, type BreadcrumbItemConfig } from './neura-breadcrumb';

const meta = {
  title: 'Components/NeuraBreadcrumb',
  component: NeuraBreadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    linkProp: {
      control: 'select',
      options: ['href', 'to'],
      description: 'The prop name to use for the navigation path',
    },
    maxItems: {
      control: { type: 'number', min: 0, max: 10 },
      description: 'Maximum items before collapsing',
    },
    showIcons: {
      control: 'boolean',
      description: 'Show icons in breadcrumb items',
    },
  },
} satisfies Meta<typeof NeuraBreadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample items
const basicItems: BreadcrumbItemConfig[] = [
  { label: 'Home', to: '/' },
  { label: 'Components', to: '/components' },
  { label: 'Breadcrumb', to: '/components/breadcrumb' },
];

const itemsWithIcons: BreadcrumbItemConfig[] = [
  { label: 'Home', to: '/', icon: <Home className="size-3.5" /> },
  {
    label: 'Settings',
    to: '/settings',
    icon: <Settings className="size-3.5" />,
  },
  {
    label: 'Profile',
    to: '/settings/profile',
    icon: <FileText className="size-3.5" />,
  },
];

const longPathItems: BreadcrumbItemConfig[] = [
  { label: 'Home', to: '/' },
  { label: 'Documentation', to: '/docs' },
  { label: 'Building Your Application', to: '/docs/building' },
  { label: 'Data Fetching', to: '/docs/building/data' },
  { label: 'Caching and Revalidating', to: '/docs/building/data/caching' },
];

const neuraItems: BreadcrumbItemConfig[] = [
  { label: 'Fleet Dashboard', to: '/', icon: <Home className="size-3.5" /> },
  { label: 'Robots', to: '/robots', icon: <Bot className="size-3.5" /> },
  {
    label: 'MAiRA Units',
    to: '/robots/maira',
    icon: <Cpu className="size-3.5" />,
  },
  { label: 'MAiRA-7-500', to: '/robots/maira/7-500' },
  {
    label: 'Diagnostics',
    to: '/robots/maira/7-500/diagnostics',
    icon: <Wrench className="size-3.5" />,
  },
];

/**
 * Basic breadcrumb with simple items. Uses native anchor tags by default.
 */
export const Default: Story = {
  args: {
    items: basicItems,
  },
};

/**
 * Breadcrumb with icons for visual enhancement.
 */
export const WithIcons: Story = {
  args: {
    items: itemsWithIcons,
    showIcons: true,
  },
};

/**
 * Long path without collapsing - shows all items.
 */
export const LongPath: Story = {
  args: {
    items: longPathItems,
  },
};

/**
 * Long path with maxItems set to collapse middle items into a dropdown.
 */
export const CollapsedWithMaxItems: Story = {
  name: 'Collapsed (maxItems=3)',
  args: {
    items: longPathItems,
    maxItems: 3,
  },
};

/**
 * Custom separator using a Slash icon.
 */
export const CustomSeparator: Story = {
  args: {
    items: basicItems,
    separator: <Slash className="size-3.5" />,
  },
};

/**
 * Custom separator using text.
 */
export const TextSeparator: Story = {
  args: {
    items: basicItems,
    separator: <span className="text-muted-foreground px-1">/</span>,
  },
};

/**
 * Without icons even if they are provided in items.
 */
export const HiddenIcons: Story = {
  name: 'Icons Hidden',
  args: {
    items: itemsWithIcons,
    showIcons: false,
  },
};

/**
 * Single item breadcrumb (just the current page).
 */
export const SingleItem: Story = {
  args: {
    items: [{ label: 'Dashboard', to: '/dashboard' }],
  },
};

/**
 * Example showing how to use with React Router.
 * Note: This story uses a mock Link component for demonstration.
 */
export const ReactRouterExample: Story = {
  name: 'React Router Usage',
  args: {
    items: basicItems,
  },
  render: () => {
    // Mock Link component simulating react-router-dom's Link
    const MockRouterLink = ({
      to,
      children,
      className,
    }: {
      to: string;
      children: React.ReactNode;
      className?: string;
    }) => (
      <a
        href={to}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          console.log(`Navigate to: ${to}`);
        }}
      >
        {children}
      </a>
    );

    return (
      <div className="flex flex-col gap-4">
        <NeuraBreadcrumb
          items={basicItems}
          linkComponent={MockRouterLink}
          linkProp="to"
        />
        <p className="text-muted-foreground text-sm">
          Using{' '}
          <code className="bg-muted rounded px-1">
            linkComponent=&#123;Link&#125;
          </code>{' '}
          and{' '}
          <code className="bg-muted rounded px-1">linkProp=&quot;to&quot;</code>{' '}
          for React Router
        </p>
      </div>
    );
  },
};

/**
 * Example showing how to use with Next.js.
 * Note: This story uses a mock Link component for demonstration.
 */
export const NextJsExample: Story = {
  name: 'Next.js Usage',
  args: {
    items: basicItems,
  },
  render: () => {
    // Mock Link component simulating next/link's Link
    const MockNextLink = ({
      href,
      children,
      className,
    }: {
      href: string;
      children: React.ReactNode;
      className?: string;
    }) => (
      <a
        href={href}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          console.log(`Navigate to: ${href}`);
        }}
      >
        {children}
      </a>
    );

    return (
      <div className="flex flex-col gap-4">
        <NeuraBreadcrumb
          items={basicItems}
          linkComponent={MockNextLink}
          linkProp="href"
        />
        <p className="text-muted-foreground text-sm">
          Using{' '}
          <code className="bg-muted rounded px-1">
            linkComponent=&#123;Link&#125;
          </code>{' '}
          and{' '}
          <code className="bg-muted rounded px-1">
            linkProp=&quot;href&quot;
          </code>{' '}
          for Next.js
        </p>
      </div>
    );
  },
};

/**
 * Accessibility features showcase.
 * Demonstrates all a11y props: ariaLabel, collapsedItemsLabel, ariaDescribedBy, and per-item ariaLabel.
 */
export const Accessibility: Story = {
  name: 'Accessibility Features',
  args: {
    items: basicItems,
  },
  render: () => {
    // Items with abbreviated labels that need accessible descriptions
    const abbreviatedItems: BreadcrumbItemConfig[] = [
      { label: '🏠', to: '/', ariaLabel: 'Home page' },
      { label: 'MAiRA-7', to: '/maira', ariaLabel: 'MAiRA Robot Series 7' },
      {
        label: 'Diag.',
        to: '/maira/diagnostics',
        ariaLabel: 'Diagnostics panel',
      },
    ];

    // Full accessible example with all features
    const fullAccessibleItems: BreadcrumbItemConfig[] = [
      {
        label: '🏠',
        to: '/',
        icon: <Home className="size-3.5" />,
        ariaLabel: 'Fleet Dashboard - Home',
      },
      {
        label: 'Robots',
        to: '/robots',
        icon: <Bot className="size-3.5" />,
        ariaLabel: 'All robots in fleet',
      },
      {
        label: 'MAiRA',
        to: '/robots/maira',
        icon: <Cpu className="size-3.5" />,
        ariaLabel: 'MAiRA collaborative robot series',
      },
      {
        label: 'Unit 7-500',
        to: '/robots/maira/7-500',
        ariaLabel: 'MAiRA unit serial number 7-500',
      },
      {
        label: 'Diagnostics',
        to: '/robots/maira/7-500/diagnostics',
        icon: <Wrench className="size-3.5" />,
        ariaLabel: 'Robot diagnostics and health monitoring',
      },
    ];

    return (
      <div className="flex flex-col gap-8">
        {/* Example 1: Custom item labels */}
        <div>
          <h3 className="mb-2 text-sm font-medium">
            1. Custom Item Labels (ariaLabel)
          </h3>
          <p className="text-muted-foreground mb-3 text-xs">
            For abbreviated or icon-only labels, provide expanded descriptions
            for screen readers.
          </p>
          <NeuraBreadcrumb items={abbreviatedItems} />
        </div>

        {/* Example 2: Custom nav label */}
        <div>
          <h3 className="mb-2 text-sm font-medium">
            2. Custom Navigation Label
          </h3>
          <p className="text-muted-foreground mb-3 text-xs">
            Important when a page has multiple navigation regions.
          </p>
          <NeuraBreadcrumb
            items={neuraItems}
            ariaLabel="Fleet management navigation"
          />
        </div>

        {/* Example 3: Collapsed with custom label */}
        <div>
          <h3 className="mb-2 text-sm font-medium">
            3. Custom Collapsed Label
          </h3>
          <p className="text-muted-foreground mb-3 text-xs">
            Describes what the ellipsis contains for screen reader users.
          </p>
          <NeuraBreadcrumb
            items={longPathItems}
            maxItems={3}
            collapsedItemsLabel="View 2 hidden documentation sections"
          />
        </div>

        {/* Example 4: With description */}
        <div>
          <h3 className="mb-2 text-sm font-medium">
            4. With Description (ariaDescribedBy)
          </h3>
          <p className="text-muted-foreground mb-3 text-xs">
            Links the breadcrumb to a descriptive help text.
          </p>
          <NeuraBreadcrumb
            items={basicItems}
            ariaDescribedBy="breadcrumb-help-1"
          />
          <p
            id="breadcrumb-help-1"
            className="text-muted-foreground mt-1 text-xs"
          >
            Use this navigation to go back to previous sections.
          </p>
        </div>

        {/* Example 5: Full accessibility */}
        <div className="border-t pt-6">
          <h3 className="mb-2 text-sm font-medium">
            5. Complete Example (All Features)
          </h3>
          <NeuraBreadcrumb
            items={fullAccessibleItems}
            maxItems={4}
            ariaLabel="Robot fleet navigation"
            collapsedItemsLabel="Show hidden navigation levels"
            ariaDescribedBy="nav-help-full"
            showIcons={true}
          />
          <p id="nav-help-full" className="text-muted-foreground mt-1 text-xs">
            Navigate through the robot fleet hierarchy.
          </p>
          <div className="bg-muted/50 mt-4 rounded-lg p-4 text-sm">
            <p className="mb-2 font-medium">Props used:</p>
            <ul className="text-muted-foreground list-inside list-disc space-y-1 text-xs">
              <li>
                <code className="bg-muted rounded px-1">ariaLabel</code> on nav
              </li>
              <li>
                <code className="bg-muted rounded px-1">ariaLabel</code> on each
                item
              </li>
              <li>
                <code className="bg-muted rounded px-1">
                  collapsedItemsLabel
                </code>
              </li>
              <li>
                <code className="bg-muted rounded px-1">ariaDescribedBy</code>
              </li>
              <li>
                Icons with{' '}
                <code className="bg-muted rounded px-1">
                  aria-hidden=&quot;true&quot;
                </code>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};

/**
 * All variations at a glance.
 */
export const AllVariations: Story = {
  args: {
    items: basicItems,
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-muted-foreground mb-2 text-sm font-medium">Basic</p>
        <NeuraBreadcrumb items={basicItems} />
      </div>
      <div>
        <p className="text-muted-foreground mb-2 text-sm font-medium">
          With Icons
        </p>
        <NeuraBreadcrumb items={itemsWithIcons} />
      </div>
      <div>
        <p className="text-muted-foreground mb-2 text-sm font-medium">
          Long Path
        </p>
        <NeuraBreadcrumb items={longPathItems} />
      </div>
      <div>
        <p className="text-muted-foreground mb-2 text-sm font-medium">
          Long Path Collapsed (maxItems=3)
        </p>
        <NeuraBreadcrumb items={longPathItems} maxItems={3} />
      </div>
      <div>
        <p className="text-muted-foreground mb-2 text-sm font-medium">
          Custom Separator
        </p>
        <NeuraBreadcrumb
          items={basicItems}
          separator={<Slash className="size-3.5" />}
        />
      </div>
      <div>
        <p className="text-muted-foreground mb-2 text-sm font-medium">
          Neura Robotics
        </p>
        <NeuraBreadcrumb items={neuraItems} maxItems={4} />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
