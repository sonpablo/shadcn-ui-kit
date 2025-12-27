import type { Meta, StoryObj } from '@storybook/react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuGroup,
} from './dropdown-menu';
import { Button } from '@/components/button/button';
import {
  User,
  Settings,
  LogOut,
  Mail,
  MessageSquare,
  PlusCircle,
  UserPlus,
  LifeBuoy,
  Keyboard,
  Users,
  Plus,
  MoreHorizontal,
  FileText,
  Trash2,
  Archive,
  Share,
  Download,
  Bot,
  Activity,
  AlertCircle,
  Zap,
  Shield,
  Eye,
  EyeOff,
  Lock,
} from 'lucide-react';
import { useState } from 'react';

const meta = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A dropdown menu component for displaying a list of actions or options.

## Features
- Keyboard navigation (Arrow keys, Enter, Escape)
- Submenus support
- Checkboxes and radio groups
- Keyboard shortcuts display
- Destructive item styling
- Disabled items
- Separators and labels for organization
- Accessible by default (ARIA attributes, focus management)

## Common Use Cases
- User account menus
- Action menus (Edit, Share, Delete)
- Context menus
- Settings and preferences
- Multi-select options (checkboxes)
- Single-choice options (radio groups)

## Composition
- **DropdownMenu**: Root component
- **DropdownMenuTrigger**: Button or element that opens the menu
- **DropdownMenuContent**: Container for menu items
- **DropdownMenuItem**: Individual menu item
- **DropdownMenuLabel**: Section heading
- **DropdownMenuSeparator**: Visual divider
- **DropdownMenuShortcut**: Keyboard shortcut display
- **DropdownMenuSub**: Submenu container
- **DropdownMenuGroup**: Logical grouping
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// BASIC EXAMPLES
// =============================================================================

/**
 * ## Default
 *
 * Basic dropdown menu with simple items.
 */
export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Bot className="size-4" />
          Robot Actions
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>View Status</DropdownMenuItem>
        <DropdownMenuItem>Configure</DropdownMenuItem>
        <DropdownMenuItem>View Logs</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

// =============================================================================
// WITH ICONS & SHORTCUTS
// =============================================================================

/**
 * ## With Icons & Shortcuts
 *
 * Menu items with icons and keyboard shortcuts for improved usability.
 */
export const WithIconsAndShortcuts: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          With Icons
        </h4>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Bot className="size-4" />
              Robot Menu
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>
              <Activity className="size-4" />
              View Status
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="size-4" />
              Configuration
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Zap className="size-4" />
              Performance
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <AlertCircle className="size-4" />
              Emergency Stop
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          With Shortcuts
        </h4>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Fleet Control</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>
              <Bot className="size-4" />
              Robot Status
              <DropdownMenuShortcut>⇧⌘R</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Activity className="size-4" />
              Analytics
              <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="size-4" />
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Keyboard className="size-4" />
              Shortcuts
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use icons to improve scannability. Shortcuts
        are for display only - implement actual keyboard handlers separately.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// LABELS & GROUPS
// =============================================================================

/**
 * ## Labels & Groups
 *
 * Organize menu items with labels and groups for better structure.
 */
export const WithLabelsAndGroups: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Fleet Management</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Robot Control</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Bot className="size-4" />
            View All Robots
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Activity className="size-4" />
            Fleet Analytics
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="size-4" />
            Fleet Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Team</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users className="size-4" />
            Team Members
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UserPlus className="size-4" />
            Invite Operators
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LifeBuoy className="size-4" />
          Support
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Organizing Menu Items

**Labels** provide section headings:
\`\`\`tsx
<DropdownMenuLabel>Robot Control</DropdownMenuLabel>
\`\`\`

**Groups** logically cluster related items:
\`\`\`tsx
<DropdownMenuGroup>
  {/* related items */}
</DropdownMenuGroup>
\`\`\`

**Separators** create visual divisions:
\`\`\`tsx
<DropdownMenuSeparator />
\`\`\`
        `,
      },
    },
  },
};

// =============================================================================
// WITH CHECKBOXES & RADIO
// =============================================================================

/**
 * ## With Checkboxes & Radio
 *
 * Use checkboxes for multi-select and radio groups for single-select options.
 */
export const WithCheckboxesAndRadio: Story = {
  render: function Render() {
    const [showActive, setShowActive] = useState(true);
    const [showStandby, setShowStandby] = useState(false);
    const [showMaintenance, setShowMaintenance] = useState(false);
    const [sortBy, setSortBy] = useState('name');

    return (
      <div className="flex flex-col gap-6 p-4">
        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Checkboxes (Multi-select)
          </h4>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Eye className="size-4" />
                Filter Status
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Show Robots</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={showActive}
                onCheckedChange={setShowActive}
              >
                Active
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showStandby}
                onCheckedChange={setShowStandby}
              >
                Standby
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showMaintenance}
                onCheckedChange={setShowMaintenance}
              >
                Maintenance
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Radio Group (Single-select)
          </h4>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Sort By: <strong className="ml-1 capitalize">{sortBy}</strong>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Sort Robots By</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
                <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="status">
                  Status
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="location">
                  Location
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="battery">
                  Battery Level
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Use checkboxes when users can select multiple
          options. Use radio groups when only one option can be selected.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// WITH SUBMENU
// =============================================================================

/**
 * ## With Submenu
 *
 * Nested menus for organizing complex hierarchical actions.
 */
export const WithSubmenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <MoreHorizontal className="size-4" />
          Actions
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <FileText className="size-4" />
          View Details
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Activity className="size-4" />
          Performance
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Share className="size-4" />
            Share Access
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <Mail className="size-4" />
              Email
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MessageSquare className="size-4" />
              Message
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <PlusCircle className="size-4" />
              More Options...
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Settings className="size-4" />
            Configure
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <Zap className="size-4" />
              Speed Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Shield className="size-4" />
              Safety Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Lock className="size-4" />
              Permissions
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Download className="size-4" />
          Export Logs
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Submenu Pattern

Use submenus to organize related actions:

\`\`\`tsx
<DropdownMenuSub>
  <DropdownMenuSubTrigger>
    Share Access
  </DropdownMenuSubTrigger>
  <DropdownMenuSubContent>
    {/* submenu items */}
  </DropdownMenuSubContent>
</DropdownMenuSub>
\`\`\`

**Best Practices:**
- Limit nesting to 2 levels (avoid sub-submenus)
- Group related actions logically
- Use clear, descriptive labels
        `,
      },
    },
  },
};

// =============================================================================
// DESTRUCTIVE ITEMS
// =============================================================================

/**
 * ## Destructive Items
 *
 * Highlight dangerous actions with destructive styling.
 */
export const DestructiveItems: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Action Menu
        </h4>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <MoreHorizontal className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuItem>
              <FileText className="size-4" />
              Edit Robot Config
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Share className="size-4" />
              Share Access
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Download className="size-4" />
              Export Data
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Archive className="size-4" />
              Archive
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <Trash2 className="size-4" />
              Decommission
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Robot Control
        </h4>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Settings className="size-4" />
              Control
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>
              <Activity className="size-4" />
              Resume Operation
            </DropdownMenuItem>
            <DropdownMenuItem>
              <EyeOff className="size-4" />
              Pause
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <AlertCircle className="size-4" />
              Emergency Stop
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use <code>variant="destructive"</code> for
        dangerous actions like delete, stop, or decommission. Place them at the
        bottom of the menu.
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
 * Real-world examples showing dropdown menus in Neura Robotics contexts.
 */
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">User Account Menu</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <User className="size-4" />
              My Account
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="size-4" />
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="size-4" />
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Keyboard className="size-4" />
              Shortcuts
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LifeBuoy className="size-4" />
              Support
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <LogOut className="size-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Robot Context Menu</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <MoreHorizontal className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>MAiRA-001 Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Activity className="size-4" />
                View Status
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="size-4" />
                View Logs
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Zap className="size-4" />
                Performance
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Settings className="size-4" />
                Configure
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Share className="size-4" />
                  Share Access
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Mail className="size-4" />
                    Email
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare className="size-4" />
                    Message
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuItem>
                <Download className="size-4" />
                Export Data
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Archive className="size-4" />
              Archive
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <Trash2 className="size-4" />
              Decommission
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Fleet Control Panel</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              <Bot className="size-4" />
              Fleet Control
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Fleet Management</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Bot className="size-4" />
                All Robots
                <DropdownMenuShortcut>⇧⌘R</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Activity className="size-4" />
                Analytics
                <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="size-4" />
                Fleet Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Team</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Users className="size-4" />
                Team Members
              </DropdownMenuItem>
              <DropdownMenuItem>
                <UserPlus className="size-4" />
                Invite Operators
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Plus className="size-4" />
                New Team
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LifeBuoy className="size-4" />
              Support
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Shield className="size-4" />
              Security
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 These examples show common dropdown menu patterns in a dashboard
        context with proper organization, icons, and shortcuts.
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
 * Dropdown menus follow WAI-ARIA Menu pattern with full keyboard and screen reader support.
 */
export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="mb-2 text-sm font-semibold">Accessibility Features</h4>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>
            ✓ <strong>Keyboard navigation</strong>: Arrow keys navigate, Enter
            selects, Escape closes
          </li>
          <li>
            ✓ <strong>Focus management</strong>: Focus returns to trigger on
            close
          </li>
          <li>
            ✓ <strong>Screen reader</strong>: Proper roles and labels announced
          </li>
          <li>
            ✓ <strong>ARIA attributes</strong>: role="menu", aria-haspopup,
            aria-expanded
          </li>
          <li>
            ✓ <strong>Disabled items</strong>: Not focusable, announced as
            disabled
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Try Keyboard Navigation
        </h4>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open Menu (Tab to focus)</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Keyboard Navigation</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Bot className="size-4" />
              Navigate with Arrow keys
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Keyboard className="size-4" />
              Press Enter to select
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="size-4" />
              Tab moves to next item
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem disabled>
              <EyeOff className="size-4" />
              Disabled item (skipped)
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Press Escape to close</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Disabled Items
        </h4>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Feature Access</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>
              <Bot className="size-4" />
              Basic Features (Available)
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <Zap className="size-4" />
              Advanced Analytics (Pro Plan)
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <Shield className="size-4" />
              Enterprise Security (Enterprise)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Always use <code>asChild</code> on
        DropdownMenuTrigger to maintain proper button semantics. Test with
        keyboard only and screen reader.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Keyboard Shortcuts

- **Enter/Space**: Open menu
- **Arrow Down/Up**: Navigate items
- **Arrow Right**: Open submenu
- **Arrow Left**: Close submenu
- **Enter**: Select item
- **Escape**: Close menu
- **Tab**: Move to next focusable element (closes menu)

### Best Practices

**Trigger Button:**
\`\`\`tsx
<DropdownMenuTrigger asChild>
  <Button variant="outline">
    Menu
  </Button>
</DropdownMenuTrigger>
\`\`\`

**Disabled Items:**
\`\`\`tsx
<DropdownMenuItem disabled>
  Pro Feature
</DropdownMenuItem>
\`\`\`

**Testing:**
- Navigate with keyboard only
- Test with screen reader (NVDA, JAWS, VoiceOver)
- Verify focus returns to trigger
- Check disabled items are skipped
- Ensure submenus work with keyboard
        `,
      },
    },
  },
};
