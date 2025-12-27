import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from './popover';
import { Button } from '@/components/button/button';
import { Input } from '@/components/input/input';
import { Label } from '@/components/label/label';
import { Calendar } from '@/components/calendar/calendar';
import { Settings, Info, HelpCircle, Bot } from 'lucide-react';

const meta = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A popover component for displaying rich content in a floating panel.

## Features
- Flexible positioning (sides and alignments)
- Custom width and content
- Controlled and uncontrolled modes
- Anchor support
- Keyboard accessible (Escape to close)
- Click outside to close

## Common Use Cases
- Forms and inputs
- Settings panels
- Help/info tooltips
- Date pickers
- Action menus
- Context-sensitive information

## vs Tooltip
Use **Popover** for interactive content (forms, buttons, links).  
Use **Tooltip** for simple, read-only text hints.
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// BASIC EXAMPLES
// =============================================================================

/**
 * ## Default
 *
 * Basic popover with simple content.
 */
export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="leading-none font-medium">Robot Status</h4>
          <p className="text-muted-foreground text-sm">
            MAiRA-001 is currently operational at Munich Plant A.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

// =============================================================================
// POSITIONING
// =============================================================================

/**
 * ## Positioning
 *
 * Popover can be positioned on different sides and alignments.
 */
export const Positioning: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Sides
        </h4>
        <div className="flex flex-wrap gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Top</Button>
            </PopoverTrigger>
            <PopoverContent side="top">
              <p className="text-sm">Positioned on top</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Bottom</Button>
            </PopoverTrigger>
            <PopoverContent side="bottom">
              <p className="text-sm">Positioned on bottom</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Left</Button>
            </PopoverTrigger>
            <PopoverContent side="left">
              <p className="text-sm">Positioned on left</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Right</Button>
            </PopoverTrigger>
            <PopoverContent side="right">
              <p className="text-sm">Positioned on right</p>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Alignments
        </h4>
        <div className="flex flex-wrap gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Align Start</Button>
            </PopoverTrigger>
            <PopoverContent align="start">
              <p className="text-sm">Aligned to start</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Align Center</Button>
            </PopoverTrigger>
            <PopoverContent align="center">
              <p className="text-sm">Aligned to center</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Align End</Button>
            </PopoverTrigger>
            <PopoverContent align="end">
              <p className="text-sm">Aligned to end</p>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use <code>side</code> and <code>align</code>{' '}
        props to control positioning.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// WITH FORMS
// =============================================================================

/**
 * ## With Forms
 *
 * Popover with form fields and interactive content.
 */
export const WithForms: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <Settings className="mr-2 size-4" />
            Robot Settings
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="leading-none font-medium">Robot Configuration</h4>
              <p className="text-muted-foreground text-sm">
                Adjust robot operational parameters.
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="robot-name">Robot Name</Label>
                <Input id="robot-name" placeholder="MAiRA-001" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="max-speed">Max Speed (km/h)</Label>
                <Input id="max-speed" type="number" placeholder="5.0" />
              </div>
              <Button className="w-full">Save Changes</Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <HelpCircle className="mr-2 size-4" />
            Need Help?
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-96">
          <div className="space-y-3">
            <h4 className="font-medium">Quick Help</h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>• Click the robot ID to view details</li>
              <li>• Use the status filter to narrow results</li>
              <li>• Right-click for more actions</li>
            </ul>
            <Button variant="link" className="p-0">
              View full documentation →
            </Button>
          </div>
        </PopoverContent>
      </Popover>

      <p className="text-muted-foreground w-full text-xs">
        💡 <strong>Tip:</strong> Use custom widths with{' '}
        <code>className="w-80"</code> for forms.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// RICH CONTENT
// =============================================================================

/**
 * ## Rich Content
 *
 * Popover with complex content like calendars, lists, and more.
 */
export const RichContent: Story = {
  render: function RichContentExample() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
      <div className="flex flex-wrap gap-4 p-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Pick a Date</Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} />
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <Bot className="mr-2 size-4" />
              Select Robot
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Available Robots</h4>
              <div className="space-y-1">
                {['MAiRA-001', 'MAiRA-002', 'LARA-001', 'LARA-003'].map(
                  (robot) => (
                    <button
                      key={robot}
                      className="hover:bg-muted flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors"
                    >
                      <Bot className="size-4" />
                      <span>{robot}</span>
                    </button>
                  ),
                )}
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <p className="text-muted-foreground w-full text-xs">
          💡 <strong>Tip:</strong> Popovers can contain any React components.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// CONTROLLED
// =============================================================================

/**
 * ## Controlled
 *
 * Controlled popover with external state management.
 */
export const Controlled: Story = {
  render: function ControlledExample() {
    const [open, setOpen] = React.useState(false);

    return (
      <div className="flex flex-col gap-4 p-4">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline">Toggle Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-2">
              <h4 className="leading-none font-medium">Controlled Popover</h4>
              <p className="text-muted-foreground text-sm">
                This popover is controlled externally.
              </p>
              <Button
                onClick={() => setOpen(false)}
                size="sm"
                className="w-full"
              >
                Close
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
            Open
          </Button>
          <Button variant="outline" size="sm" onClick={() => setOpen(false)}>
            Close
          </Button>
        </div>

        <p className="text-muted-foreground text-sm">
          Status: <strong>{open ? 'Open' : 'Closed'}</strong>
        </p>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Use controlled mode for complex logic or
          analytics tracking.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// WITH ANCHOR
// =============================================================================

/**
 * ## With Anchor
 *
 * Popover with custom anchor positioning.
 */
export const WithAnchor: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <p className="text-muted-foreground text-sm">
        Hover over the{' '}
        <Popover>
          <PopoverAnchor asChild>
            <span className="text-primary underline">highlighted text</span>
          </PopoverAnchor>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm" className="h-auto p-0">
              <Info className="size-3" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <p className="text-sm">This is additional information.</p>
          </PopoverContent>
        </Popover>{' '}
        to see the popover.
      </p>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use <code>PopoverAnchor</code> to position
        relative to a different element.
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
 * Real-world example: Robot management dashboard with multiple popovers.
 */
export const CompleteShowcase: Story = {
  render: function CompleteShowcaseExample() {
    return (
      <div className="bg-card text-card-foreground w-[600px] space-y-6 rounded-lg border p-6 shadow-sm">
        <div>
          <h3 className="mb-2 text-lg font-semibold">Robot Fleet Dashboard</h3>
          <p className="text-muted-foreground text-sm">
            Manage your robot fleet with quick actions
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <Bot className="mr-2 size-4" />
                Quick Actions
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Robot Actions</h4>
                <div className="space-y-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >
                    Deploy Robot
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >
                    Schedule Maintenance
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >
                    View Analytics
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <Settings className="mr-2 size-4" />
                Settings
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="leading-none font-medium">Fleet Settings</h4>
                  <p className="text-muted-foreground text-sm">
                    Configure fleet-wide parameters.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fleet-name">Fleet Name</Label>
                    <Input id="fleet-name" placeholder="Munich Fleet" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-robots">Max Active Robots</Label>
                    <Input id="max-robots" type="number" placeholder="10" />
                  </div>
                  <Button className="w-full">Update Settings</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <HelpCircle className="mr-2 size-4" />
                Help
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-96">
              <div className="space-y-3">
                <h4 className="font-medium">Getting Started</h4>
                <div className="text-muted-foreground space-y-2 text-sm">
                  <p>
                    <strong>Quick Tips:</strong>
                  </p>
                  <ul className="list-disc space-y-1 pl-4">
                    <li>Click robot IDs to view detailed status</li>
                    <li>Use filters to narrow down the fleet view</li>
                    <li>Schedule maintenance during off-peak hours</li>
                  </ul>
                </div>
                <Button variant="link" className="p-0">
                  View full documentation →
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="bg-muted/50 rounded-lg p-4">
          <h4 className="mb-2 text-sm font-medium">Active Robots</h4>
          <div className="flex flex-wrap gap-2">
            {['MAiRA-001', 'LARA-003', '4NE1-002'].map((robot) => (
              <Popover key={robot}>
                <PopoverTrigger asChild>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setSelectedRobot(robot)}
                  >
                    {robot}
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="space-y-2">
                    <h4 className="font-medium">{robot}</h4>
                    <div className="text-muted-foreground space-y-1 text-sm">
                      <p>Status: Operational</p>
                      <p>Location: Munich Plant A</p>
                      <p>Uptime: 98.5%</p>
                    </div>
                    <Button size="sm" className="w-full">
                      View Details
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            ))}
          </div>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 This dashboard demonstrates popovers for quick actions, settings,
          help, and robot details.
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
 * Popover components follow accessibility best practices for keyboard navigation
 * and screen readers.
 */
export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="mb-2 text-sm font-semibold">Accessibility Features</h4>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>
            ✓ <strong>Keyboard navigation</strong>: Escape to close, Tab to move
            focus
          </li>
          <li>
            ✓ <strong>Focus management</strong>: Focus returns to trigger on
            close
          </li>
          <li>
            ✓ <strong>ARIA attributes</strong>: Proper roles and states
          </li>
          <li>
            ✓ <strong>Click outside</strong>: Closes when clicking outside
          </li>
          <li>
            ✓ <strong>Form labels</strong>: All inputs have associated labels
          </li>
          <li>
            ✓ <strong>Interactive content</strong>: All buttons and links are
            keyboard accessible
          </li>
        </ul>
      </div>

      <div className="w-[350px]">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Accessible Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Robot Configuration</h4>
                <p className="text-muted-foreground text-sm">
                  All fields are keyboard accessible.
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="accessible-input">Robot Name</Label>
                <Input id="accessible-input" placeholder="MAiRA-001" />
              </div>
              <Button className="w-full">Save</Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="bg-muted/30 rounded-lg p-3">
        <h4 className="mb-2 text-sm font-semibold">Keyboard Shortcuts</h4>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>
            <kbd className="bg-background rounded border px-1 text-xs">
              Enter/Space
            </kbd>{' '}
            - Open popover
          </li>
          <li>
            <kbd className="bg-background rounded border px-1 text-xs">Esc</kbd>{' '}
            - Close popover
          </li>
          <li>
            <kbd className="bg-background rounded border px-1 text-xs">Tab</kbd>{' '}
            - Move focus through interactive elements
          </li>
        </ul>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Always provide labels for form inputs and test
        with keyboard-only navigation.
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
- Escape key closes the popover
- Tab moves focus through interactive elements
- Focus returns to trigger on close

**Form Labels:**
\`\`\`tsx
<Label htmlFor="input-id">Label Text</Label>
<Input id="input-id" />
\`\`\`

**Testing:**
- Test keyboard-only navigation
- Verify Escape closes the popover
- Check focus returns to trigger
- Ensure all interactive elements are reachable via Tab
        `,
      },
    },
  },
};
