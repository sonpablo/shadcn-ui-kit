import type { Meta, StoryObj } from '@storybook/react';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from './tooltip';
import { Button } from '@/components/button/button';
import {
  HelpCircle,
  Info,
  Settings,
  Power,
  Trash2,
  AlertCircle,
} from 'lucide-react';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A tooltip component that displays informative text when hovering over an element.

## Features
- Hover to reveal
- Multiple positioning options
- Keyboard accessible (focus trigger shows tooltip)
- Customizable delay
- Works with any trigger element

## Common Use Cases
- Icon button labels
- Help text
- Feature explanations
- Keyboard shortcuts
- Status information

## vs Popover
Use **Tooltip** for simple, read-only text hints.  
Use **Popover** for interactive content (forms, buttons, links).

## Important
Wrap your app with \`<TooltipProvider>\` at the root level to enable tooltips.
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// BASIC EXAMPLES
// =============================================================================

/**
 * ## Default
 *
 * Basic tooltip on a button.
 */
export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

// =============================================================================
// POSITIONING
// =============================================================================

/**
 * ## Positioning
 *
 * Tooltips can be positioned on different sides of the trigger element.
 */
export const Positioning: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Tooltip on top</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Tooltip on bottom</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Tooltip on left</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Tooltip on right</p>
        </TooltipContent>
      </Tooltip>

      <p className="text-muted-foreground w-full text-xs">
        💡 <strong>Tip:</strong> Use <code>side</code> prop to control
        positioning (top, bottom, left, right).
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// ON ICON BUTTONS
// =============================================================================

/**
 * ## On Icon Buttons
 *
 * Common use case: labeling icon buttons for clarity.
 */
export const OnIconButtons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Settings className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Robot Settings</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Power className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Power On/Off</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Trash2 className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Delete Robot</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <HelpCircle className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Need help? Click for documentation</p>
        </TooltipContent>
      </Tooltip>

      <p className="text-muted-foreground w-full text-xs">
        💡 <strong>Best practice:</strong> Always provide tooltips for icon
        buttons to improve usability.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// WITH INFO ICONS
// =============================================================================

/**
 * ## With Info Icons
 *
 * Tooltips paired with info icons for contextual help.
 */
export const WithInfoIcons: Story = {
  render: () => (
    <div className="flex w-[400px] flex-col gap-4 p-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Robot Uptime</span>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Info className="size-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Percentage of time the robot has been operational</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Task Success Rate</span>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <HelpCircle className="size-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>
              Percentage of completed tasks without errors or manual
              intervention
            </p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Fleet Efficiency</span>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <AlertCircle className="size-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Overall efficiency of the robot fleet based on active time</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use info icons with tooltips to provide
        contextual help without cluttering the UI.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// CONTENT VARIANTS
// =============================================================================

/**
 * ## Content Variants
 *
 * Tooltips with different content styles and lengths.
 */
export const ContentVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Short</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Quick tip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Medium</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This tooltip has a bit more text to explain the action.</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Long</Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <p>
            This is a longer tooltip with more detailed information. It wraps to
            multiple lines for better readability and can contain more context.
          </p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">With Shortcut</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            Save <kbd className="bg-background rounded border px-1">⌘S</kbd>
          </p>
        </TooltipContent>
      </Tooltip>

      <p className="text-muted-foreground w-full text-xs">
        💡 <strong>Tip:</strong> Use <code>max-w-xs</code> or similar for longer
        content to ensure proper wrapping.
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
 * Tooltips work with disabled elements by wrapping them in a span.
 */
export const States: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Enabled Button</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This button is active and clickable</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <span tabIndex={0} className="inline-block">
            <Button disabled>Disabled Button</Button>
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>This action is disabled because no robot is selected</p>
        </TooltipContent>
      </Tooltip>

      <p className="text-muted-foreground w-full text-xs">
        💡 <strong>Tip:</strong> Wrap disabled elements in a{' '}
        <code>&lt;span&gt;</code> to enable tooltips on them.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// BUTTON VARIANTS
// =============================================================================

/**
 * ## On Button Variants
 *
 * Tooltips work with all button variants and sizes.
 */
export const OnButtonVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Button Variants
        </h4>
        <div className="flex flex-wrap gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="default">Default</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Primary action button</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary">Secondary</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Secondary action button</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Outline</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Outlined action button</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">Ghost</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Subtle action button</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="destructive">Destructive</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete or remove action</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Button Sizes
        </h4>
        <div className="flex flex-wrap items-center gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm">Small</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Small button</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="default">Default</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Default button</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="lg">Large</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Large button</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon">
                <Settings className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Icon-only button</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 Tooltips work seamlessly with all button styles and sizes.
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
 * Real-world example: Robot control panel with tooltips throughout.
 */
export const CompleteShowcase: Story = {
  render: () => (
    <div className="bg-card text-card-foreground w-[500px] space-y-6 rounded-lg border p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Robot Control Panel</h3>
          <p className="text-muted-foreground text-sm">MAiRA-001</p>
        </div>
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Settings className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Configure robot settings</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <HelpCircle className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>View documentation</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="mb-3 text-sm font-medium">Robot Statistics</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm">Uptime</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    <Info className="size-3" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Percentage of operational time in the last 30 days</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <span className="font-medium">98.5%</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm">Tasks Completed</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    <Info className="size-3" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Total tasks completed successfully this month</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <span className="font-medium">1,247</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm">Success Rate</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    <Info className="size-3" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tasks completed without errors or manual intervention</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <span className="font-medium">99.2%</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-medium">Quick Actions</h4>
        <div className="flex flex-wrap gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">
                <Power className="mr-2 size-3" />
                Power
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                Toggle robot power{' '}
                <kbd className="bg-background ml-1 rounded border px-1">P</kbd>
              </p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">
                Reset
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                Reset to default settings{' '}
                <kbd className="bg-background ml-1 rounded border px-1">R</kbd>
              </p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <span tabIndex={0} className="inline-block">
                <Button variant="outline" size="sm" disabled>
                  Deploy
                </Button>
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Deployment is disabled while robot is offline</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="destructive" size="sm">
                <Trash2 className="mr-2 size-3" />
                Delete
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Permanently delete this robot from the fleet</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 This dashboard uses tooltips to provide context without cluttering
        the interface.
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
 * Tooltip components follow accessibility best practices for keyboard navigation
 * and screen readers.
 */
export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="mb-2 text-sm font-semibold">Accessibility Features</h4>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>
            ✓ <strong>Keyboard support</strong>: Focus trigger to show tooltip
          </li>
          <li>
            ✓ <strong>Screen readers</strong>: Content is announced
          </li>
          <li>
            ✓ <strong>Hover & focus</strong>: Tooltip appears on both
          </li>
          <li>
            ✓ <strong>ARIA attributes</strong>: Proper roles and states
          </li>
          <li>
            ✓ <strong>Dismissible</strong>: Move away or blur to dismiss
          </li>
          <li>
            ✓ <strong>Non-interactive content</strong>: No buttons/links in
            tooltips
          </li>
        </ul>
      </div>

      <div className="w-[400px] space-y-4">
        <h4 className="text-sm font-medium">Test keyboard navigation:</h4>
        <div className="flex flex-wrap gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Button 1</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Tooltip for button 1</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Button 2</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Tooltip for button 2</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Button 3</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Tooltip for button 3</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <p className="text-muted-foreground text-xs">
          Press <kbd className="bg-background rounded border px-1">Tab</kbd> to
          navigate and see tooltips appear on focus.
        </p>
      </div>

      <div className="bg-muted/30 rounded-lg p-3">
        <h4 className="mb-2 text-sm font-semibold">Best Practices</h4>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>• Keep tooltip text concise and informative</li>
          <li>• Use tooltips for non-essential information</li>
          <li>• Avoid interactive elements (buttons, links) in tooltips</li>
          <li>• Ensure trigger elements are keyboard accessible</li>
          <li>• Don't hide critical information in tooltips</li>
        </ul>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Test with keyboard-only navigation to ensure
        all tooltips are accessible.
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
- Tab or Shift+Tab to focus elements
- Tooltip appears on focus
- Tooltip dismisses when focus moves away

**Disabled Elements:**
\`\`\`tsx
<Tooltip>
  <TooltipTrigger asChild>
    <span tabIndex={0}>
      <Button disabled>Disabled Button</Button>
    </span>
  </TooltipTrigger>
  <TooltipContent>
    <p>Why this is disabled</p>
  </TooltipContent>
</Tooltip>
\`\`\`

**Important:**
- Use tooltips for supplementary information only
- Critical information should be visible by default
- No interactive elements in tooltip content
        `,
      },
    },
  },
};
