import type { Meta, StoryObj } from '@storybook/react';
import {
  Slash,
  ChevronDown,
  Home,
  Bot,
  Building2,
  Settings,
} from 'lucide-react';

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

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A breadcrumb navigation component for showing hierarchy and current location.

## Features
- Composable parts (List, Item, Link, Page, Separator, Ellipsis)
- Custom separators (chevron, slash, custom icons)
- Collapsed mode with ellipsis
- Dropdown integration for nested navigation
- Icons support
- Responsive design

## Common Use Cases
- Page hierarchy navigation
- Multi-level settings
- File/folder navigation
- Robot fleet hierarchy
- Project/deployment navigation
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// BASIC EXAMPLES
// =============================================================================

/**
 * ## Default
 *
 * Basic breadcrumb navigation with links and current page.
 */
export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Fleet Management</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Robot Configuration</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

// =============================================================================
// SEPARATORS
// =============================================================================

/**
 * ## Separators
 *
 * Different separator styles: default chevron, slash, or custom.
 */
export const Separators: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Default Chevron
        </h4>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Robots</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>MAiRA-001</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Slash Separator
        </h4>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="size-3.5" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Robots</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="size-3.5" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>MAiRA-001</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use <code>BreadcrumbSeparator</code> with
        custom icons or text for different visual styles.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// WITH ICONS
// =============================================================================

/**
 * ## With Icons
 *
 * Breadcrumbs with icons for better visual hierarchy.
 */
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Icon Links
        </h4>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="flex items-center gap-1.5">
                <Home className="size-4" />
                <span>Home</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="flex items-center gap-1.5">
                <Bot className="size-4" />
                <span>Robots</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="flex items-center gap-1.5">
                <Building2 className="size-4" />
                <span>Munich Plant A</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>MAiRA-001</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Icon Only (First Item)
        </h4>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" aria-label="Home">
                <Home className="size-4" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Fleet Management</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Robot Details</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use icons to reinforce context, especially for
        the home link.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// WITH DROPDOWN
// =============================================================================

/**
 * ## With Dropdown
 *
 * Breadcrumb with dropdown menu for nested navigation.
 */
export const WithDropdown: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                Fleets
                <ChevronDown className="size-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Munich Plant A</DropdownMenuItem>
                <DropdownMenuItem>Stuttgart Factory</DropdownMenuItem>
                <DropdownMenuItem>Berlin Warehouse</DropdownMenuItem>
                <DropdownMenuItem>Hamburg Distribution</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Robots</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>MAiRA-001</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use dropdowns for intermediate levels with
        multiple options.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// COLLAPSED
// =============================================================================

/**
 * ## Collapsed
 *
 * Collapsed breadcrumb using ellipsis for long paths.
 */
export const Collapsed: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Simple Ellipsis
        </h4>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Munich Plant A</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>MAiRA-001</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Ellipsis with Dropdown
        </h4>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <BreadcrumbEllipsis className="size-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Fleet Management</DropdownMenuItem>
                  <DropdownMenuItem>Robot Inventory</DropdownMenuItem>
                  <DropdownMenuItem>Deployment History</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Munich Plant A</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>MAiRA-001</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use ellipsis for paths with 5+ levels to save
        space.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// RESPONSIVE
// =============================================================================

/**
 * ## Responsive
 *
 * Breadcrumb that adapts to different screen sizes.
 */
export const Responsive: Story = {
  render: () => (
    <div className="w-full max-w-2xl space-y-4 p-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem className="hidden sm:block">
            <BreadcrumbLink href="#">Fleet Management</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden sm:block" />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Munich Plant A</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Robots</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>MAiRA-001</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use Tailwind responsive classes to hide items
        on smaller screens.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// COMPLETE SHOWCASE
// =============================================================================

/**
 * ## Complete Showcase
 *
 * Real-world example: Robot details page breadcrumb navigation.
 */
export const CompleteShowcase: Story = {
  render: () => (
    <div className="bg-card text-card-foreground w-full max-w-4xl space-y-6 rounded-lg border p-6 shadow-sm">
      <div>
        <h3 className="mb-2 text-lg font-semibold">Robot Details Dashboard</h3>
        <p className="text-muted-foreground text-sm">
          Example breadcrumb navigation in a robot management interface
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Standard Navigation
          </h4>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="flex items-center gap-1.5">
                  <Home className="size-4" />
                  <span>Dashboard</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="flex items-center gap-1.5">
                  <Building2 className="size-4" />
                  <span>Munich Plant A</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Robots</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>MAiRA-001</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Deep Navigation with Dropdown
          </h4>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" aria-label="Home">
                  <Home className="size-4" />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <Building2 className="size-4" />
                    <span>Facilities</span>
                    <ChevronDown className="size-3.5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>Munich Plant A</DropdownMenuItem>
                    <DropdownMenuItem>Stuttgart Factory</DropdownMenuItem>
                    <DropdownMenuItem>Berlin Warehouse</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbEllipsis />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Robots</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">MAiRA Series</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>MAiRA-001</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Settings Page
          </h4>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash className="size-3.5" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="flex items-center gap-1.5">
                  <Settings className="size-4" />
                  <span>Settings</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash className="size-3.5" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Robot Configuration</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 These examples show breadcrumb navigation patterns for different
        sections of a robot management system.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// ACCESSIBILITY
// =============================================================================

/**
 * ## Accessibility
 *
 * Breadcrumb components follow accessibility best practices for navigation.
 */
export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="mb-2 text-sm font-semibold">Accessibility Features</h4>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>
            ✓ <strong>Semantic HTML</strong>: Uses <code>nav</code> and{' '}
            <code>ol</code> for proper structure
          </li>
          <li>
            ✓ <strong>ARIA labels</strong>: Navigation landmark with proper
            labeling
          </li>
          <li>
            ✓ <strong>Current page</strong>: Uses{' '}
            <code>aria-current="page"</code>
          </li>
          <li>
            ✓ <strong>Keyboard navigation</strong>: All links are keyboard
            accessible
          </li>
          <li>
            ✓ <strong>Icon-only links</strong>: Provide <code>aria-label</code>
          </li>
          <li>
            ✓ <strong>Visual separators</strong>: Marked as{' '}
            <code>aria-hidden</code>
          </li>
        </ul>
      </div>

      <div className="w-[400px]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" aria-label="Home">
                <Home className="size-4" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Fleet Management</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Robot Details</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Always provide aria-label for icon-only links
        and use proper semantic HTML.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Accessibility Best Practices

**Semantic Structure:**
\`\`\`tsx
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="...">Home</a></li>
    <li aria-current="page">Current Page</li>
  </ol>
</nav>
\`\`\`

**Icon-Only Links:**
\`\`\`tsx
<BreadcrumbLink href="#" aria-label="Home">
  <Home className="size-4" />
</BreadcrumbLink>
\`\`\`

**Testing:**
- Test keyboard navigation (Tab through links)
- Verify screen reader announces "Breadcrumb navigation"
- Check current page is announced with aria-current
- Ensure separators are hidden from screen readers
        `,
      },
    },
  },
};
