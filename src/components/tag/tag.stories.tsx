import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './tag';
import {
  Check,
  X,
  AlertCircle,
  Clock,
  Star,
  Zap,
  ExternalLink,
  ChevronRight,
  Plus,
  Trash2,
  Bot,
  Activity,
  AlertTriangle,
  Settings,
} from 'lucide-react';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A versatile tag component for labels, status indicators, and metadata.

## Variants
- **default**: Blue primary color
- **green**: Success, active, positive states
- **red**: Errors, inactive, destructive states
- **yellow**: Warnings, pending, cautionary states
- **gray**: Neutral, draft, disabled states

## Sizes
- **xs**: Extra Small (11px text, 24px height) - Perfect for compact inputs
- **sm**: Small (13px text, 28px height)
- **md**: Medium (13px text, 32px height)
- **default**: Default (16px text, 36px height)
- **lg**: Large (16px text, 40px height)

## Usage
Tags work with icons, can be interactive (asChild with button/link), and support custom styling.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'green', 'red', 'yellow', 'gray'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'default', 'lg'],
    },
    asChild: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// BASIC EXAMPLES
// =============================================================================

/**
 * ## Default
 *
 * Basic tag with primary color. Use for general labels and metadata.
 */
export const Default: Story = {
  args: {
    children: 'Tag',
  },
};

// =============================================================================
// VARIANTS
// =============================================================================

/**
 * ## Variants
 *
 * All available color variants with their common use cases.
 */
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <h3 className="mb-2 text-sm font-semibold">Color Variants</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Tag variant="default">Default</Tag>
          <Tag variant="green">Green</Tag>
          <Tag variant="red">Red</Tag>
          <Tag variant="yellow">Yellow</Tag>
          <Tag variant="gray">Gray</Tag>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold">Custom Colors</h3>
        <p className="text-muted-foreground mb-3 text-xs">
          Use className to customize colors for specific needs.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Tag className="border-purple-500 text-purple-500">Custom Purple</Tag>
          <Tag className="border-pink-500 text-pink-500">Custom Pink</Tag>
          <Tag className="border-cyan-500 text-cyan-500">Custom Cyan</Tag>
          <Tag className="border-orange-500 bg-orange-500/10 text-orange-500">
            With Background
          </Tag>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Choose variants based on semantic meaning:
        green for success, red for errors, yellow for warnings, gray for
        neutral.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Choosing the Right Variant

**Default (Blue)**
- General labels and categories
- Primary metadata
- Technology tags

**Green**
- Success states
- Active/Online status
- Positive confirmations

**Red**
- Error states
- Inactive/Offline status
- Critical warnings

**Yellow**
- Warnings
- Pending/In Progress
- Requires attention

**Gray**
- Neutral information
- Draft status
- Disabled states
        `,
      },
    },
  },
};

// =============================================================================
// SIZES
// =============================================================================

/**
 * ## Sizes
 *
 * Tags come in 4 sizes to fit different contexts.
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <h3 className="mb-2 text-sm font-semibold">All Sizes</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Tag size="xs">Extra Small</Tag>
          <Tag size="sm">Small</Tag>
          <Tag size="md">Medium</Tag>
          <Tag size="default">Default</Tag>
          <Tag size="lg">Large</Tag>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold">Sizes with Icons</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Tag variant="green" size="xs">
            <Check className="size-3" />
            XS
          </Tag>
          <Tag variant="green" size="sm">
            <Check className="size-3.5" />
            Small
          </Tag>
          <Tag variant="green" size="md">
            <Check className="size-4" />
            Medium
          </Tag>
          <Tag variant="green" size="default">
            <Check className="size-4" />
            Default
          </Tag>
          <Tag variant="green" size="lg">
            <Check className="size-5" />
            Large
          </Tag>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use <code>size="xs"</code> for compact inputs,{' '}
        <code>size="sm"</code> for dense layouts, <code>size="default"</code>{' '}
        for standard use, and <code>size="lg"</code> for emphasis.
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
 * Tags work great with icons for enhanced visual communication.
 */
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <h3 className="mb-2 text-sm font-semibold">Icons with Text</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Tag variant="green">
            <Check className="size-3" />
            Completed
          </Tag>
          <Tag variant="red">
            <X className="size-3" />
            Rejected
          </Tag>
          <Tag variant="yellow">
            <AlertCircle className="size-3" />
            Warning
          </Tag>
          <Tag variant="gray">
            <Clock className="size-3" />
            Pending
          </Tag>
          <Tag variant="default">
            <Star className="size-3" />
            Featured
          </Tag>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold">Icon Only</h3>
        <p className="text-muted-foreground mb-3 text-xs">
          Use icons alone for compact displays. Add proper aria-label for
          accessibility.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Tag variant="green" size="sm" className="px-2" aria-label="Success">
            <Check className="size-3" />
          </Tag>
          <Tag variant="red" size="sm" className="px-2" aria-label="Error">
            <X className="size-3" />
          </Tag>
          <Tag variant="yellow" size="sm" className="px-2" aria-label="Warning">
            <AlertCircle className="size-3" />
          </Tag>
          <Tag
            variant="default"
            size="sm"
            className="px-2"
            aria-label="Featured"
          >
            <Zap className="size-3" />
          </Tag>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Match icon size to tag size (size-3 for sm,
        size-4 for default/lg).
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// INTERACTIVE
// =============================================================================

/**
 * ## Interactive
 *
 * Tags can be made interactive using the asChild prop with buttons or links.
 */
export const Interactive: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <h3 className="mb-2 text-sm font-semibold">As Link</h3>
        <p className="text-muted-foreground mb-3 text-xs">
          Use tags as navigational links to related content.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Tag variant="default" asChild>
            <a href="#" className="hover:bg-primary/10">
              Documentation
              <ExternalLink className="size-3" />
            </a>
          </Tag>
          <Tag variant="green" asChild>
            <a href="#" className="hover:bg-green-500/10">
              View Details
              <ChevronRight className="size-3" />
            </a>
          </Tag>
          <Tag variant="gray" asChild>
            <a href="#" className="hover:bg-gray-500/10">
              API Reference
              <ExternalLink className="size-3" />
            </a>
          </Tag>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold">As Button</h3>
        <p className="text-muted-foreground mb-3 text-xs">
          Use tags as action buttons for quick operations.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Tag variant="default" asChild>
            <button
              onClick={() => alert('Add clicked!')}
              className="hover:bg-primary/10 cursor-pointer"
            >
              <Plus className="size-3" />
              Add Tag
            </button>
          </Tag>
          <Tag variant="green" size="sm" asChild>
            <button
              onClick={() => alert('Confirmed!')}
              className="cursor-pointer hover:bg-green-500/10"
            >
              <Check className="size-3" />
              Confirm
            </button>
          </Tag>
          <Tag variant="red" asChild>
            <button
              onClick={() => alert('Delete clicked!')}
              className="cursor-pointer hover:bg-red-500/10"
            >
              <Trash2 className="size-3" />
              Remove
            </button>
          </Tag>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Add hover effects with className when using
        asChild for better interactivity feedback.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Interactive Tags Pattern

Use the \`asChild\` prop to render tags as links or buttons:

\`\`\`tsx
<Tag asChild>
  <a href="/details">View Details</a>
</Tag>

<Tag asChild>
  <button onClick={handleClick}>Action</button>
</Tag>
\`\`\`

**Accessibility:**
- Ensure proper hover states
- Add focus-visible styles
- Include aria-label for icon-only buttons
        `,
      },
    },
  },
};

// =============================================================================
// STATUS TAGS
// =============================================================================

/**
 * ## Status Tags
 *
 * Common pattern for showing robot and system status.
 */
export const StatusTags: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <div>
        <h3 className="mb-2 text-sm font-semibold">Robot Status</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Tag variant="green">
            <span className="size-2 rounded-full bg-green-500" />
            Active
          </Tag>
          <Tag variant="yellow">
            <span className="size-2 rounded-full bg-yellow-400" />
            Calibrating
          </Tag>
          <Tag variant="gray">
            <span className="size-2 rounded-full bg-gray-400" />
            Standby
          </Tag>
          <Tag variant="red">
            <span className="size-2 rounded-full bg-red-500" />
            Offline
          </Tag>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold">Task Status</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Tag variant="green" size="sm">
            <Check className="size-3" />
            Completed
          </Tag>
          <Tag variant="yellow" size="sm">
            <Clock className="size-3" />
            In Progress
          </Tag>
          <Tag variant="gray" size="sm">
            <Clock className="size-3" />
            Queued
          </Tag>
          <Tag variant="red" size="sm">
            <AlertTriangle className="size-3" />
            Failed
          </Tag>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use colored dots for real-time status and icons
        for task states.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// PRIORITY TAGS
// =============================================================================

/**
 * ## Priority Tags
 *
 * Visual indicators for priority levels in tasks and alerts.
 */
export const PriorityTags: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <div>
        <h3 className="mb-2 text-sm font-semibold">Task Priority</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Tag variant="red" size="sm">
            <AlertTriangle className="size-3" />
            High Priority
          </Tag>
          <Tag variant="yellow" size="sm">
            <AlertCircle className="size-3" />
            Medium Priority
          </Tag>
          <Tag variant="green" size="sm">
            <Check className="size-3" />
            Low Priority
          </Tag>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold">Alert Severity</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Tag variant="red">Critical</Tag>
          <Tag variant="yellow">Warning</Tag>
          <Tag variant="default">Info</Tag>
          <Tag variant="gray">Debug</Tag>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use consistent colors for priority across your
        application (red = high, yellow = medium, green = low).
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// TAG GROUPS
// =============================================================================

/**
 * ## Tag Groups
 *
 * Organize related tags into groups with labels.
 */
export const TagGroups: Story = {
  render: () => (
    <div className="w-[500px] space-y-6 p-4">
      <div>
        <p className="text-muted-foreground mb-2 text-sm font-medium">
          Robot Models
        </p>
        <div className="flex flex-wrap gap-2">
          <Tag size="sm">
            <Bot className="size-3" />
            MAiRA
          </Tag>
          <Tag size="sm">
            <Bot className="size-3" />
            LARA
          </Tag>
          <Tag size="sm">
            <Bot className="size-3" />
            MAV
          </Tag>
          <Tag size="sm">
            <Bot className="size-3" />
            MiPA
          </Tag>
          <Tag size="sm">
            <Bot className="size-3" />
            4NE1
          </Tag>
        </div>
      </div>

      <div>
        <p className="text-muted-foreground mb-2 text-sm font-medium">
          Active Locations
        </p>
        <div className="flex flex-wrap gap-2">
          <Tag variant="green" size="sm">
            Munich Plant A
          </Tag>
          <Tag variant="green" size="sm">
            Stuttgart Factory
          </Tag>
          <Tag variant="yellow" size="sm">
            Berlin Warehouse
          </Tag>
          <Tag variant="gray" size="sm">
            Hamburg DC
          </Tag>
        </div>
      </div>

      <div>
        <p className="text-muted-foreground mb-2 text-sm font-medium">
          System Capabilities
        </p>
        <div className="flex flex-wrap gap-2">
          <Tag variant="default" size="sm">
            Pick & Place
          </Tag>
          <Tag variant="default" size="sm">
            Quality Control
          </Tag>
          <Tag variant="default" size="sm">
            Assembly
          </Tag>
          <Tag variant="default" size="sm">
            Packaging
          </Tag>
          <Tag variant="default" size="sm">
            Inspection
          </Tag>
        </div>
      </div>
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
 * Comprehensive example showing tags in a real-world Neura Robotics dashboard context.
 */
export const CompleteShowcase: Story = {
  render: () => (
    <div className="bg-card text-card-foreground w-[600px] space-y-6 rounded-lg border p-6 shadow-sm">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">MAiRA-001</h3>
          <Tag variant="green">
            <span className="size-2 rounded-full bg-green-500" />
            Active
          </Tag>
        </div>
        <p className="text-muted-foreground text-sm">
          Collaborative robot - Assembly Line 3
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between border-b pb-2">
          <span className="text-sm">Model</span>
          <Tag size="sm">
            <Bot className="size-3" />
            MAiRA
          </Tag>
        </div>

        <div className="flex items-center justify-between border-b pb-2">
          <span className="text-sm">Location</span>
          <Tag variant="green" size="sm">
            Munich Plant A
          </Tag>
        </div>

        <div className="flex items-center justify-between border-b pb-2">
          <span className="text-sm">Current Task</span>
          <Tag variant="yellow" size="sm">
            <Activity className="size-3" />
            In Progress
          </Tag>
        </div>

        <div className="flex items-center justify-between border-b pb-2">
          <span className="text-sm">Priority</span>
          <Tag variant="red" size="sm">
            <AlertTriangle className="size-3" />
            High
          </Tag>
        </div>

        <div className="flex items-center justify-between pb-2">
          <span className="text-sm">Capabilities</span>
          <div className="flex flex-wrap gap-1.5">
            <Tag size="sm">Assembly</Tag>
            <Tag size="sm">QC</Tag>
            <Tag size="sm">Pick & Place</Tag>
          </div>
        </div>
      </div>

      <div className="flex gap-2 pt-2">
        <Tag variant="default" asChild>
          <button className="hover:bg-primary/10 cursor-pointer">
            View Details
            <ChevronRight className="size-3" />
          </button>
        </Tag>
        <Tag variant="gray" asChild>
          <button className="cursor-pointer hover:bg-gray-500/10">
            <Settings className="size-3" />
            Settings
          </button>
        </Tag>
      </div>

      <p className="text-muted-foreground pt-2 text-xs">
        💡 <strong>Tip:</strong> This example shows how tags can be used for
        status, metadata, priorities, and actions in a dashboard context.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Real-World Usage

This showcase demonstrates:
- **Status indicators** with colored dots
- **Metadata tags** for model, location
- **State tags** for current activity
- **Priority tags** for task urgency
- **Capability tags** for feature lists
- **Interactive tags** for actions

Tags are versatile and can be combined to create rich, informative interfaces.
        `,
      },
    },
  },
};
