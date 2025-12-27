import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pill } from './pill';
import { Bot, CheckCircle, Clock, AlertCircle, Zap } from 'lucide-react';

const meta = {
  title: 'Components/Pill',
  component: Pill,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A pill component for displaying status, filters, and selections in a compact, rounded format.

## Variants
- **default**: Neutral appearance for unselected/inactive state
- **selected**: Highlighted appearance for selected/active state

## Sizes
- **sm**: Small (12px text, 20px height)
- **default**: Medium (13px text, 24px height)
- **lg**: Large (14px text, 28px height)

## Common Use Cases
- Status indicators with colored dots
- Filter selections (single or multiple)
- Category tags
- Quick actions or toggles
- Compact navigation items

## Features
- \`asChild\` pattern for custom elements (buttons, links)
- Flexible content (text, icons, status dots)
- Interactive states when used with buttons
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'selected'],
      description: 'The visual style variant of the pill',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'The size of the pill',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as a Slot component for custom elements',
    },
  },
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// BASIC EXAMPLES
// =============================================================================

/**
 * ## Default
 *
 * Basic pill with default styling. Use for unselected or inactive states.
 */
export const Default: Story = {
  args: {
    children: 'Status',
  },
};

// =============================================================================
// VARIANTS
// =============================================================================

/**
 * ## Variants
 *
 * Pills come in two variants: default (unselected) and selected (active/highlighted).
 */
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Visual Variants
        </h4>
        <div className="flex items-center gap-4">
          <Pill variant="default">
            <span>Default</span>
            <span className="size-2 rounded-full bg-gray-400" />
          </Pill>
          <Pill variant="selected">
            <span>Selected</span>
            <span className="size-2 rounded-full bg-green-500" />
          </Pill>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Robot Status Examples
        </h4>
        <div className="flex items-center gap-3">
          <Pill variant="default">
            <span>Standby</span>
            <span className="size-2 rounded-full bg-gray-400" />
          </Pill>
          <Pill variant="selected">
            <span>Active</span>
            <span className="size-2 rounded-full bg-green-500" />
          </Pill>
          <Pill variant="default">
            <span>Pending</span>
            <span className="size-2 rounded-full bg-yellow-400" />
          </Pill>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use <code>variant="selected"</code> to
        highlight active or chosen items. Status dots help communicate state
        visually.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// SIZES
// =============================================================================

/**
 * ## Sizes
 *
 * Pills come in three sizes for different contexts and information density needs.
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          All Sizes
        </h4>
        <div className="flex items-center gap-4">
          <Pill size="sm">Small</Pill>
          <Pill size="default">Default</Pill>
          <Pill size="lg">Large</Pill>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Sizes with Status Dots
        </h4>
        <div className="flex items-center gap-4">
          <Pill size="sm" variant="selected">
            <span>Small</span>
            <span className="size-1.5 rounded-full bg-green-500" />
          </Pill>
          <Pill size="default" variant="selected">
            <span>Default</span>
            <span className="size-2 rounded-full bg-green-500" />
          </Pill>
          <Pill size="lg" variant="selected">
            <span>Large</span>
            <span className="size-2.5 rounded-full bg-green-500" />
          </Pill>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Match status dot size to pill size (1.5 for sm,
        2 for default, 2.5 for lg).
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// CUSTOM CONTENT
// =============================================================================

/**
 * ## Custom Content
 *
 * Pills can contain various types of content: icons, emojis, badges, and custom elements.
 */
export const CustomContent: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          With Icons
        </h4>
        <div className="flex items-center gap-3">
          <Pill>
            <Bot className="size-3.5" />
            <span>Robot</span>
          </Pill>
          <Pill variant="selected">
            <CheckCircle className="size-3.5" />
            <span>Completed</span>
          </Pill>
          <Pill>
            <Clock className="size-3.5" />
            <span>2 hours ago</span>
          </Pill>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Badge Style
        </h4>
        <div className="flex items-center gap-3">
          <Pill variant="selected">
            <span className="font-semibold">PRO</span>
          </Pill>
          <Pill variant="selected">
            <span className="font-semibold">NEW</span>
          </Pill>
          <Pill>
            <span>BETA</span>
          </Pill>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          With Emojis
        </h4>
        <div className="flex items-center gap-3">
          <Pill>
            <span>🔥</span>
            <span>Trending</span>
          </Pill>
          <Pill variant="selected">
            <span>⚡</span>
            <span>Fast</span>
          </Pill>
          <Pill>
            <span>✨</span>
            <span>Popular</span>
          </Pill>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Pills are flexible - combine text, icons,
        emojis, and status dots for rich visual communication.
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
 * Use the asChild pattern to make pills interactive as buttons or links.
 */
export const Interactive: Story = {
  render: function Render() {
    const [selected, setSelected] = React.useState('all');
    const filters = [
      { id: 'all', label: 'All Robots', count: 24 },
      { id: 'active', label: 'Active', count: 18 },
      { id: 'standby', label: 'Standby', count: 4 },
      { id: 'maintenance', label: 'Maintenance', count: 2 },
    ];

    return (
      <div className="flex flex-col gap-6 p-4">
        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Filter Pills (Interactive)
          </h4>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Pill
                key={filter.id}
                asChild
                variant={selected === filter.id ? 'selected' : 'default'}
                className="hover:bg-muted cursor-pointer transition-colors"
              >
                <button type="button" onClick={() => setSelected(filter.id)}>
                  <span>{filter.label}</span>
                  <span className="text-muted-foreground bg-background rounded px-1.5 text-xs">
                    {filter.count}
                  </span>
                </button>
              </Pill>
            ))}
          </div>
          <p className="text-muted-foreground mt-3 text-xs">
            Selected filter: <strong>{selected}</strong>
          </p>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Single Pill Button
          </h4>
          <Pill
            asChild
            variant="default"
            className="hover:bg-muted cursor-pointer"
          >
            <button type="button" onClick={() => alert('Pill clicked!')}>
              <Zap className="size-3.5" />
              <span>Quick Action</span>
            </button>
          </Pill>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Use <code>asChild</code> with buttons for
          interactive pills. Add hover effects for better UX.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Interactive Pattern

Use \`asChild\` to render pills as buttons or links:

\`\`\`tsx
<Pill asChild variant={selected ? 'selected' : 'default'}>
  <button onClick={handleClick}>
    Filter
  </button>
</Pill>
\`\`\`

**UX Tips:**
- Add hover effects (\`hover:bg-muted\`)
- Show counts or badges for context
- Use \`variant="selected"\` for active filters
- Ensure keyboard navigation works (native button behavior)
        `,
      },
    },
  },
};

// =============================================================================
// STATUS INDICATORS
// =============================================================================

/**
 * ## Status Indicators
 *
 * Pills work great for displaying status with colored dots and meaningful labels.
 */
export const StatusIndicators: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Robot Status
        </h4>
        <div className="flex flex-wrap items-center gap-3">
          <Pill variant="selected">
            <span>Active</span>
            <span className="size-2 rounded-full bg-green-500" />
          </Pill>
          <Pill variant="default">
            <span>Standby</span>
            <span className="size-2 rounded-full bg-gray-400" />
          </Pill>
          <Pill variant="default">
            <span>Calibrating</span>
            <span className="size-2 rounded-full bg-blue-500" />
          </Pill>
          <Pill variant="default">
            <span>Warning</span>
            <span className="size-2 rounded-full bg-yellow-400" />
          </Pill>
          <Pill variant="default">
            <span>Error</span>
            <span className="size-2 rounded-full bg-red-500" />
          </Pill>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Task Status
        </h4>
        <div className="flex flex-wrap items-center gap-3">
          <Pill variant="selected">
            <CheckCircle className="size-3.5" />
            <span>Completed</span>
          </Pill>
          <Pill variant="default">
            <Clock className="size-3.5" />
            <span>In Progress</span>
          </Pill>
          <Pill variant="default">
            <AlertCircle className="size-3.5" />
            <span>Pending</span>
          </Pill>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use colored dots or icons to make status
        immediately recognizable. Green for success, red for errors, yellow for
        warnings.
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
 * Real-world example showing pills in a Neura Robotics dashboard context.
 */
export const CompleteShowcase: Story = {
  render: function Render() {
    const [statusFilter, setStatusFilter] = React.useState('all');
    const [selectedRobots, setSelectedRobots] = React.useState<string[]>([
      'MAiRA',
    ]);

    const statusFilters = [
      { id: 'all', label: 'All', count: 24 },
      { id: 'active', label: 'Active', count: 18 },
      { id: 'standby', label: 'Standby', count: 4 },
      { id: 'error', label: 'Errors', count: 2 },
    ];

    const robotModels = ['MAiRA', 'LARA', 'MAV', 'MiPA', '4NE1'];

    const toggleRobot = (model: string) => {
      setSelectedRobots((prev) =>
        prev.includes(model)
          ? prev.filter((m) => m !== model)
          : [...prev, model],
      );
    };

    return (
      <div className="bg-card text-card-foreground w-[600px] space-y-6 rounded-lg border p-6 shadow-sm">
        <div>
          <h3 className="mb-2 text-lg font-semibold">Fleet Overview</h3>
          <p className="text-muted-foreground text-sm">
            Monitor and filter your robot fleet
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="mb-3 text-sm font-medium">Status Filter</h4>
            <div className="flex flex-wrap gap-2">
              {statusFilters.map((filter) => (
                <Pill
                  key={filter.id}
                  asChild
                  size="sm"
                  variant={statusFilter === filter.id ? 'selected' : 'default'}
                  className="hover:bg-muted cursor-pointer transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setStatusFilter(filter.id)}
                  >
                    <span>{filter.label}</span>
                    <span
                      className={`rounded px-1.5 text-xs ${
                        statusFilter === filter.id
                          ? 'bg-background text-muted-foreground'
                          : 'bg-muted/50 text-muted-foreground'
                      }`}
                    >
                      {filter.count}
                    </span>
                  </button>
                </Pill>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-medium">Robot Models</h4>
            <div className="flex flex-wrap gap-2">
              {robotModels.map((model) => (
                <Pill
                  key={model}
                  asChild
                  variant={
                    selectedRobots.includes(model) ? 'selected' : 'default'
                  }
                  className="hover:bg-muted cursor-pointer transition-colors"
                >
                  <button type="button" onClick={() => toggleRobot(model)}>
                    <Bot className="size-3.5" />
                    <span>{model}</span>
                  </button>
                </Pill>
              ))}
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="mb-3 text-sm font-medium">Current Status</h4>
            <div className="flex flex-wrap items-center gap-3">
              <Pill variant="selected" size="sm">
                <span>18 Active</span>
                <span className="size-1.5 rounded-full bg-green-500" />
              </Pill>
              <Pill size="sm">
                <span>4 Standby</span>
                <span className="size-1.5 rounded-full bg-gray-400" />
              </Pill>
              <Pill size="sm">
                <span>2 Errors</span>
                <span className="size-1.5 rounded-full bg-red-500" />
              </Pill>
            </div>
          </div>

          <div className="bg-muted/50 rounded-md p-3">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="text-primary size-4" />
              <span className="text-muted-foreground">
                Showing{' '}
                {selectedRobots.length > 0
                  ? selectedRobots.join(', ')
                  : 'all models'}{' '}
                • {statusFilter === 'all' ? 'All statuses' : statusFilter}
              </span>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 This showcase demonstrates pills as interactive filters with
          counts, model selectors, and status indicators.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Real-World Usage

This showcase demonstrates:
- **Filter pills** with counts for quick navigation
- **Multi-select pills** for filtering by robot model
- **Status pills** with colored dots for real-time monitoring
- **Interactive feedback** with visual states
- **Contextual information** showing current selections

**UX Patterns:**
- Show counts to help users understand data distribution
- Use selected state to indicate active filters
- Provide visual feedback on hover
- Combine multiple filter types for powerful data exploration
- Display selected filters in a summary view
        `,
      },
    },
  },
};

// =============================================================================
// ACCESSIBILITY
// =============================================================================

/**
 * ## Accessibility
 *
 * Pills support accessibility best practices for interactive and informational use cases.
 */
export const Accessibility: Story = {
  render: function Render() {
    const [selected, setSelected] = React.useState('active');

    return (
      <div className="flex flex-col gap-6 p-4">
        <div className="bg-muted/50 rounded-lg p-4">
          <h4 className="mb-2 text-sm font-semibold">Accessibility Features</h4>
          <ul className="text-muted-foreground space-y-1 text-sm">
            <li>
              ✓ <strong>Keyboard navigation</strong>: Tab to focus, Enter/Space
              to activate
            </li>
            <li>
              ✓ <strong>Focus visible</strong>: Clear focus ring for keyboard
              users
            </li>
            <li>
              ✓ <strong>Screen reader</strong>: Buttons announced with proper
              role
            </li>
            <li>
              ✓ <strong>Color contrast</strong>: Meets WCAG AA standards
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Interactive Pills with Proper Roles
          </h4>
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Robot status filter"
          >
            {['active', 'standby', 'error'].map((status) => (
              <Pill
                key={status}
                asChild
                variant={selected === status ? 'selected' : 'default'}
                className="hover:bg-muted cursor-pointer transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setSelected(status)}
                  aria-pressed={selected === status}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              </Pill>
            ))}
          </div>
          <p className="text-muted-foreground mt-2 text-xs">
            Selected: <strong>{selected}</strong>
          </p>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Status Pills with aria-label
          </h4>
          <div className="flex flex-wrap gap-3">
            <Pill variant="selected" aria-label="Robot is active">
              <span>Active</span>
              <span className="size-2 rounded-full bg-green-500" />
            </Pill>
            <Pill aria-label="Robot has 2 errors">
              <span>2 Errors</span>
              <span className="size-2 rounded-full bg-red-500" />
            </Pill>
          </div>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Use <code>aria-pressed</code> for toggle
          buttons, <code>aria-label</code> for status pills, and group related
          pills with <code>role="group"</code>.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Accessibility Best Practices

**Interactive Pills (Buttons):**
\`\`\`tsx
<Pill asChild>
  <button
    type="button"
    aria-pressed={isSelected}
    onClick={handleClick}
  >
    Filter
  </button>
</Pill>
\`\`\`

**Grouped Pills:**
\`\`\`tsx
<div role="group" aria-label="Status filters">
  {/* pills */}
</div>
\`\`\`

**Status Pills:**
\`\`\`tsx
<Pill aria-label="Robot is active">
  Active
  <span className="size-2 rounded-full bg-green-500" />
</Pill>
\`\`\`

**Testing:**
- Navigate with keyboard only (Tab, Enter, Space)
- Test with screen reader
- Verify focus indicators are visible
- Check color contrast (WCAG AA minimum)
        `,
      },
    },
  },
};
