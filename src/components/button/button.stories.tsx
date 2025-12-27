import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Button } from './button';
import {
  Mail,
  Download,
  ChevronRight,
  Loader2,
  Settings,
  Power,
  Trash2,
  Bot,
  AlertCircle,
} from 'lucide-react';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A versatile button component with multiple variants, sizes, and states.

## Features
- 6 visual variants (default, destructive, outline, secondary, ghost, link)
- 6 size options (sm, default, lg, icon-sm, icon, icon-lg)
- Icon support (leading, trailing, or icon-only)
- Loading and disabled states
- Accessible by default

## Common Use Cases
- Primary and secondary actions
- Form submissions
- Icon-only actions
- Loading states
- Destructive actions (delete, remove)
- Link-style buttons
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      description: 'The visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon', 'icon-sm', 'icon-lg'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as a Slot component',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// BASIC EXAMPLES
// =============================================================================

/**
 * ## Default
 *
 * Basic button with default styling.
 */
export const Default: Story = {
  args: {
    children: 'Deploy Robot',
    variant: 'default',
  },
};

// =============================================================================
// VARIANTS
// =============================================================================

/**
 * ## Variants
 *
 * All available button visual variants.
 *
 * - **default**: Primary actions
 * - **destructive**: Delete, remove, or dangerous actions
 * - **outline**: Secondary actions with border
 * - **secondary**: Alternative secondary actions
 * - **ghost**: Subtle actions, minimal visual weight
 * - **link**: Text-only, link-style actions
 */
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex flex-wrap gap-3">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>

      <div className="bg-muted/50 rounded-lg p-3">
        <h4 className="text-muted-foreground mb-2 text-xs font-medium uppercase">
          Usage Guidelines
        </h4>
        <ul className="text-muted-foreground space-y-1 text-xs">
          <li>
            • <strong>Default:</strong> Primary actions (submit, confirm, save)
          </li>
          <li>
            • <strong>Destructive:</strong> Dangerous actions (delete, remove)
          </li>
          <li>
            • <strong>Outline:</strong> Secondary actions with emphasis
          </li>
          <li>
            • <strong>Secondary:</strong> Alternative secondary actions
          </li>
          <li>
            • <strong>Ghost:</strong> Tertiary or subtle actions
          </li>
          <li>
            • <strong>Link:</strong> Navigation or minimal actions
          </li>
        </ul>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Choose variants based on action importance and
        visual hierarchy.
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
 * Buttons come in three sizes: small, default, and large.
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>

      <div className="bg-muted/50 rounded-lg p-3">
        <h4 className="text-muted-foreground mb-2 text-xs font-medium uppercase">
          Size Guidelines
        </h4>
        <ul className="text-muted-foreground space-y-1 text-xs">
          <li>
            • <strong>sm:</strong> Compact UIs, secondary actions, toolbars
          </li>
          <li>
            • <strong>default:</strong> Standard forms and interfaces
          </li>
          <li>
            • <strong>lg:</strong> Hero sections, CTAs, primary landing actions
          </li>
        </ul>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use consistent sizes throughout a section or
        form.
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
 * Buttons with leading or trailing icons for better visual communication.
 */
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Icon Positions
        </h4>
        <div className="flex flex-wrap gap-3">
          <Button>
            <Mail className="mr-2 size-4" />
            Login with Email
          </Button>
          <Button variant="outline">
            Download Report
            <Download className="ml-2 size-4" />
          </Button>
          <Button variant="secondary">
            <Bot className="mr-2 size-4" />
            Deploy
            <ChevronRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          All Variants with Icons
        </h4>
        <div className="flex flex-wrap gap-3">
          <Button variant="default">
            <Power className="mr-2 size-4" />
            Activate
          </Button>
          <Button variant="destructive">
            <Trash2 className="mr-2 size-4" />
            Delete
          </Button>
          <Button variant="outline">
            <Settings className="mr-2 size-4" />
            Settings
          </Button>
          <Button variant="secondary">
            <Download className="mr-2 size-4" />
            Export
          </Button>
          <Button variant="ghost">
            <AlertCircle className="mr-2 size-4" />
            Info
          </Button>
          <Button variant="link">
            Documentation
            <ChevronRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Icons improve recognition and scannability.
        Use <code>mr-2</code> for leading icons, <code>ml-2</code> for
        trailing.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// ICON ONLY
// =============================================================================

/**
 * ## Icon Only
 *
 * Icon-only buttons for compact UIs and toolbars.
 */
export const IconOnly: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Icon Sizes
        </h4>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="outline" size="icon-sm">
            <Settings className="size-3" />
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="size-4" />
          </Button>
          <Button variant="outline" size="icon-lg">
            <Settings className="size-5" />
          </Button>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Variants
        </h4>
        <div className="flex flex-wrap gap-3">
          <Button variant="default" size="icon">
            <Power className="size-4" />
          </Button>
          <Button variant="destructive" size="icon">
            <Trash2 className="size-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="size-4" />
          </Button>
          <Button variant="secondary" size="icon">
            <Download className="size-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Mail className="size-4" />
          </Button>
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-3">
        <h4 className="text-muted-foreground mb-2 text-xs font-medium uppercase">
          Accessibility Note
        </h4>
        <p className="text-muted-foreground text-xs">
          Icon-only buttons should always have an <code>aria-label</code> or be
          wrapped in a <code>Tooltip</code> for screen readers and clarity.
        </p>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use icon sizes that match button size
        (icon-sm → size-3, icon → size-4, icon-lg → size-5).
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// STATES
// =============================================================================

/**
 * ## States
 *
 * Disabled and loading states for buttons.
 */
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Disabled
        </h4>
        <div className="flex flex-wrap gap-3">
          <Button disabled>Disabled Default</Button>
          <Button disabled variant="destructive">
            Disabled Destructive
          </Button>
          <Button disabled variant="outline">
            Disabled Outline
          </Button>
          <Button disabled variant="secondary">
            Disabled Secondary
          </Button>
          <Button disabled variant="ghost">
            Disabled Ghost
          </Button>
          <Button disabled variant="link">
            Disabled Link
          </Button>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Loading
        </h4>
        <div className="flex flex-wrap gap-3">
          <Button disabled>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Deploying...
          </Button>
          <Button disabled variant="outline">
            <Loader2 className="mr-2 size-4 animate-spin" />
            Please wait
          </Button>
          <Button disabled variant="secondary">
            <Loader2 className="mr-2 size-4 animate-spin" />
            Loading
          </Button>
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-3">
        <h4 className="text-muted-foreground mb-2 text-xs font-medium uppercase">
          Loading Pattern
        </h4>
        <p className="text-muted-foreground text-xs">
          For loading states, combine <code>disabled</code> with a spinning{' '}
          <code>Loader2</code> icon and descriptive text.
        </p>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Always provide feedback when an action is
        processing or disabled.
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
 * Comprehensive example: Robot deployment dashboard with various button uses.
 */
export const CompleteShowcase: Story = {
  render: function CompleteShowcaseExample() {
    const [isDeploying, setIsDeploying] = React.useState(false);

    const handleDeploy = () => {
      setIsDeploying(true);
      setTimeout(() => setIsDeploying(false), 2000);
    };

    return (
      <div className="w-[700px] space-y-6 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Robot Deployment Center</h3>
            <p className="text-muted-foreground text-sm">
              Manage your robot fleet
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Settings className="size-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="size-4" />
            </Button>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-4">
          <h4 className="mb-3 text-sm font-medium">Quick Actions</h4>
          <div className="flex flex-wrap gap-2">
            <Button onClick={handleDeploy} disabled={isDeploying}>
              {isDeploying ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Deploying...
                </>
              ) : (
                <>
                  <Power className="mr-2 size-4" />
                  Deploy Robot
                </>
              )}
            </Button>
            <Button variant="outline">
              <Download className="mr-2 size-4" />
              Export Data
            </Button>
            <Button variant="secondary">
              <Settings className="mr-2 size-4" />
              Configure
            </Button>
            <Button variant="ghost">
              <AlertCircle className="mr-2 size-4" />
              View Logs
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-medium">Robot Units</h4>
          <div className="space-y-2">
            {[
              { name: 'MAiRA-001', status: 'active' },
              { name: 'LARA-003', status: 'idle' },
              { name: '4NE1-002', status: 'error' },
            ].map((robot) => (
              <div
                key={robot.name}
                className="bg-background flex items-center justify-between rounded-lg border p-3"
              >
                <div className="flex items-center gap-3">
                  <Bot className="text-muted-foreground size-5" />
                  <div>
                    <p className="text-sm font-medium">{robot.name}</p>
                    <p className="text-muted-foreground text-xs capitalize">
                      {robot.status}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Details
                  </Button>
                  {robot.status === 'error' && (
                    <Button size="sm" variant="destructive">
                      <Trash2 className="mr-1 size-3" />
                      Remove
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between border-t pt-4">
          <Button variant="link" className="px-0">
            View all robots →
          </Button>
          <div className="flex gap-2">
            <Button variant="outline">Cancel</Button>
            <Button>
              Save Changes
              <ChevronRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 This dashboard demonstrates buttons in a real-world robot
          management interface.
        </p>
      </div>
    );
  },
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
 * Button components follow accessibility best practices for keyboard navigation
 * and screen readers.
 */
export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="mb-2 text-sm font-semibold">Accessibility Features</h4>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>
            ✓ <strong>Keyboard support</strong>: Tab to focus, Enter/Space to
            activate
          </li>
          <li>
            ✓ <strong>Focus indicators</strong>: Visible outline on focus
          </li>
          <li>
            ✓ <strong>Disabled state</strong>: Non-focusable, announced to
            screen readers
          </li>
          <li>
            ✓ <strong>ARIA attributes</strong>: Proper roles and states
          </li>
          <li>
            ✓ <strong>Loading feedback</strong>: Visual and text indicators
          </li>
          <li>
            ✓ <strong>Clear labels</strong>: Descriptive text for all actions
          </li>
        </ul>
      </div>

      <div className="w-[400px] space-y-4">
        <h4 className="text-sm font-medium">Test keyboard navigation:</h4>
        <div className="flex flex-wrap gap-3">
          <Button>First</Button>
          <Button variant="outline">Second</Button>
          <Button variant="secondary">Third</Button>
          <Button disabled>Disabled (Skipped)</Button>
          <Button variant="ghost">Fourth</Button>
        </div>
        <p className="text-muted-foreground text-xs">
          Press <kbd className="bg-background rounded border px-1">Tab</kbd> to
          navigate, <kbd className="bg-background rounded border px-1">Enter</kbd>{' '}
          or <kbd className="bg-background rounded border px-1">Space</kbd> to
          activate.
        </p>
      </div>

      <div className="bg-muted/30 rounded-lg p-3">
        <h4 className="mb-2 text-sm font-semibold">Best Practices</h4>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>• Use descriptive text instead of just icons</li>
          <li>
            • Add <code>aria-label</code> for icon-only buttons
          </li>
          <li>
            • Provide feedback for loading states (text + spinner)
          </li>
          <li>• Use clear, action-oriented labels (e.g., "Deploy Robot" not "Submit")</li>
          <li>
            • Group related actions together visually
          </li>
        </ul>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Test with keyboard-only navigation and screen
        readers for full accessibility.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Accessibility Best Practices

**Keyboard Support:**
- Tab or Shift+Tab to navigate buttons
- Enter or Space to activate
- Disabled buttons are skipped in tab order

**Icon-Only Buttons:**
\`\`\`tsx
<Button variant="outline" size="icon" aria-label="Settings">
  <Settings className="size-4" />
</Button>
\`\`\`

**Loading State:**
\`\`\`tsx
<Button disabled>
  <Loader2 className="mr-2 size-4 animate-spin" />
  Deploying...
</Button>
\`\`\`

**Important:**
- Use descriptive labels for all buttons
- Provide visual and text feedback for loading
- Ensure sufficient color contrast for all variants
        `,
      },
    },
  },
};
