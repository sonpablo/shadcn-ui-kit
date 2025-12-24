import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';
import { Button } from '@/components/button/button';
import { Input } from '@/components/input/input';
import { Label } from '@/components/label/label';
import { Spinner } from '@/components/spinner/spinner';
import { Badge } from '@/components/badge/badge';
import { Textarea } from '@/components/textarea/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select/select';
import {
  Bot,
  CheckCircle,
  AlertTriangle,
  Settings,
  Copy,
  Check,
} from 'lucide-react';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A unified dialog component that combines the features of **Dialog** and **FullModal**.

## Variants

| Variant | Overlay | Content | Close on Escape | Close on Outside Click |
|---------|---------|---------|-----------------|------------------------|
| \`default\` | Dark (\`bg-black/50\`) | With background & border | ✅ Yes | ✅ Yes |
| \`blur\` | Blurred (\`backdrop-blur-[70px]\`) | Transparent | ❌ No | ❌ No |

## When to use each variant

- **default**: Standard modals, forms, confirmations
- **blur**: Immersive experiences, success states, critical actions that require explicit dismissal

## Key Props

| Prop | Location | Description |
|------|----------|-------------|
| \`autoCloseMs\` | Dialog (root) | Auto-close after X milliseconds |
| \`variant\` | DialogContent | \`"default"\` or \`"blur"\` |
| \`showCloseButton\` | DialogContent | Show/hide X button |
| \`closeOnEscapeKey\` | DialogContent | Override default Escape behavior |
| \`closeOnOutsideClick\` | DialogContent | Override default click-outside behavior |
`,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// DEFAULT VARIANT
// =============================================================================

/**
 * ## Default
 *
 * Standard modal with dark overlay. Closes on Escape and outside click.
 * This is the most common use case for dialogs.
 */
export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Robot Configuration</DialogTitle>
          <DialogDescription>
            Make changes to your robot configuration here. Click save when
            you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Robot Name</Label>
            <Input id="name" defaultValue="MAiRA-001" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" defaultValue="Munich Plant A" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/**
 * ## With Form
 *
 * Dialog containing a complete form with multiple fields.
 * Shows how to structure forms inside dialogs.
 */
export const WithForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Bot className="size-4" />
          Register Robot
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Register New Robot</DialogTitle>
          <DialogDescription>
            Add a new robot to your fleet. Fill in the details below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="robot-name">Robot Name</Label>
              <Input id="robot-name" placeholder="MAiRA-001" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="serial">Serial Number</Label>
              <Input id="serial" placeholder="NR-2025-MAI-0001" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Robot Model</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="maira">MAiRA</SelectItem>
                <SelectItem value="lara">LARA</SelectItem>
                <SelectItem value="mav">MAV</SelectItem>
                <SelectItem value="mipa">MiPA</SelectItem>
                <SelectItem value="4ne1">4NE1</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" placeholder="Additional notes..." />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Register Robot</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/**
 * ## Destructive Action
 *
 * Confirmation dialog for dangerous actions like deletion.
 * Always provide clear warning text and cancel option.
 */
export const DestructiveAction: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Decommission Robot</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="text-destructive size-5" />
            Decommission MAiRA-001?
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. All data will be permanently deleted.
          </DialogDescription>
        </DialogHeader>
        <div className="bg-destructive/10 rounded-md p-4">
          <p className="text-destructive text-sm font-medium">
            Warning: All task history and configurations will be lost.
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="destructive">Yes, Decommission</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/**
 * ## Settings Dialog
 *
 * Complex dialog with multiple sections and controls.
 * Shows how to structure more elaborate content.
 */
export const SettingsDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Settings className="size-4" />
          Robot Settings
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bot className="size-5" />
            MAiRA-001 Settings
          </DialogTitle>
          <DialogDescription>
            Configure robot behavior and preferences.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="font-medium">Status</Label>
              <Badge
                variant="secondary"
                className="bg-green-500/10 text-green-600"
              >
                Active
              </Badge>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Operating Mode</Label>
            <Select defaultValue="auto">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="auto">Autonomous</SelectItem>
                <SelectItem value="manual">Manual Control</SelectItem>
                <SelectItem value="standby">Standby</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Speed Limit</Label>
            <Select defaultValue="normal">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="slow">Slow (25%)</SelectItem>
                <SelectItem value="normal">Normal (75%)</SelectItem>
                <SelectItem value="fast">Fast (100%)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Save Settings</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/**
 * ## Share Link
 *
 * Dialog with copy-to-clipboard functionality.
 * Common pattern for sharing URLs or codes.
 */
export const ShareLink: Story = {
  render: function ShareLinkExample() {
    const [copied, setCopied] = useState(false);
    const link = 'https://neuraverse.io/fleet/maira-001';

    const handleCopy = () => {
      navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Share Robot</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share Robot Access</DialogTitle>
            <DialogDescription>
              Anyone with this link can view the robot status.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <Input value={link} readOnly className="flex-1" />
            <Button size="icon" variant="outline" onClick={handleCopy}>
              {copied ? (
                <Check className="size-4 text-green-500" />
              ) : (
                <Copy className="size-4" />
              )}
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button variant="secondary">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

/**
 * ## Without Close Button
 *
 * Dialog without the X close button in the corner.
 * User must use the provided buttons to close.
 */
export const WithoutCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open (No X Button)</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Important Notice</DialogTitle>
          <DialogDescription>
            This dialog has no close button. Use the button below to close it.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Got it</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/**
 * ## Controlled
 *
 * Dialog with controlled open state.
 * Useful when you need to open/close programmatically.
 */
export const Controlled: Story = {
  render: function ControlledExample() {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col items-center gap-4">
        <p className="text-muted-foreground text-sm">
          Dialog is {open ? 'open' : 'closed'}
        </p>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Open Controlled Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Controlled Dialog</DialogTitle>
              <DialogDescription>
                This dialog's state is controlled by React state.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button onClick={() => setOpen(false)}>Close via State</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};

// =============================================================================
// BLUR VARIANT
// =============================================================================

/**
 * ## Blur Variant
 *
 * Immersive modal with blurred backdrop.
 * Does NOT close on Escape or outside click by default.
 * Use for critical actions or success states.
 */
export const BlurVariant: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Blur Dialog</Button>
      </DialogTrigger>
      <DialogContent variant="blur" showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Edit Robot Configuration</DialogTitle>
          <DialogDescription>
            Make changes to your robot configuration here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name-blur">Robot Name</Label>
            <Input id="name-blur" defaultValue="MAiRA-001" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="location-blur">Location</Label>
            <Input id="location-blur" defaultValue="Munich Plant A" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/**
 * ## Blur Destructive
 *
 * Blur variant for destructive confirmations.
 * The immersive blur makes the action feel more critical.
 */
export const BlurDestructive: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Decommission (Blur)</Button>
      </DialogTrigger>
      <DialogContent variant="blur">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="text-destructive size-5" />
            Decommission MAiRA-001?
          </DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <div className="bg-destructive/10 mt-4 rounded-md p-4">
          <p className="text-destructive text-sm font-medium">
            Warning: All data will be lost.
          </p>
        </div>
        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="destructive">Yes, Decommission</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// =============================================================================
// BEHAVIOR CONTROL
// =============================================================================

/**
 * ## Close Behavior
 *
 * Demonstrates how to control Escape and outside-click behavior.
 * Default variant allows both; blur variant blocks both.
 * Use props to override.
 */
export const CloseBehavior: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Default (Escape ✓, Click ✓)</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Default Behavior</DialogTitle>
            <DialogDescription>
              Press Escape or click outside to close.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Blur (Escape ✗, Click ✗)</Button>
        </DialogTrigger>
        <DialogContent variant="blur">
          <DialogHeader>
            <DialogTitle>Blur Behavior</DialogTitle>
            <DialogDescription>
              Escape and click outside are blocked. Use the button.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Blur + Escape Enabled</Button>
        </DialogTrigger>
        <DialogContent variant="blur" closeOnEscapeKey>
          <DialogHeader>
            <DialogTitle>Blur with Escape</DialogTitle>
            <DialogDescription>
              Press Escape to close (outside click still blocked).
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary">Default - Escape Blocked</Button>
        </DialogTrigger>
        <DialogContent closeOnEscapeKey={false}>
          <DialogHeader>
            <DialogTitle>Escape Blocked</DialogTitle>
            <DialogDescription>
              Escape is blocked, but click outside works.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// AUTO CLOSE
// =============================================================================

/**
 * ## Auto Close
 *
 * Dialog that automatically closes after specified milliseconds.
 * Requires controlled state (open + onOpenChange).
 * Perfect for success messages and notifications.
 */
export const AutoClose: Story = {
  render: function AutoCloseExample() {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open (Auto-closes in 2s)</Button>
        <Dialog open={open} onOpenChange={setOpen} autoCloseMs={2000}>
          <DialogContent showCloseButton={false}>
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-green-500/10">
                <CheckCircle className="size-8 text-green-500" />
              </div>
              <DialogHeader className="text-center">
                <DialogTitle>Robot Deployed!</DialogTitle>
                <DialogDescription>
                  MAiRA-001 is now active. Closing automatically...
                </DialogDescription>
              </DialogHeader>
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  },
};

/**
 * ## Auto Close (Blur)
 *
 * Blur variant with auto-close. Great for success states.
 */
export const AutoCloseBlur: Story = {
  render: function AutoCloseBlurExample() {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Blur (Auto-closes)</Button>
        <Dialog open={open} onOpenChange={setOpen} autoCloseMs={2000}>
          <DialogContent variant="blur" showCloseButton={false}>
            <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-green-500/10">
              <CheckCircle className="size-8 text-green-500" />
            </div>
            <DialogHeader className="text-center">
              <DialogTitle>Success!</DialogTitle>
              <DialogDescription>
                Operation completed. Closing automatically...
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </>
    );
  },
};

/**
 * ## Loading State
 *
 * Dialog showing a loading/processing state.
 * Common pattern during async operations.
 */
export const LoadingState: Story = {
  render: function LoadingExample() {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Start Calibration</Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-sm" showCloseButton={false}>
            <div className="flex flex-col items-center gap-4 py-4 text-center">
              <Spinner className="size-10" />
              <DialogHeader className="text-center">
                <DialogTitle>Calibrating Robot</DialogTitle>
                <DialogDescription>
                  Please wait while we calibrate MAiRA-001...
                </DialogDescription>
              </DialogHeader>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  },
};

// =============================================================================
// ACCESSIBILITY
// =============================================================================

/**
 * ## Accessibility
 *
 * The Dialog component follows WAI-ARIA Dialog pattern:
 *
 * - **Focus trap**: Focus is trapped inside when open
 * - **Title & Description**: Use DialogTitle and DialogDescription for screen readers
 * - **Keyboard**: Tab through elements, configurable Escape
 * - **aria-labelledby**: Automatically linked via DialogTitle
 * - **aria-describedby**: Automatically linked via DialogDescription
 * - **role="dialog"**: Applied automatically by Radix
 */
export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="bg-muted/50 rounded-lg p-4">
        <h3 className="mb-2 font-semibold">Accessibility Features</h3>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>
            ✓ <strong>Focus trap</strong>: Focus stays inside the dialog
          </li>
          <li>
            ✓ <strong>Screen reader</strong>: Title and description announced
          </li>
          <li>
            ✓ <strong>Keyboard</strong>: Tab navigation, configurable Escape
          </li>
          <li>
            ✓ <strong>ARIA</strong>: role="dialog", aria-labelledby,
            aria-describedby
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Accessible Form Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Robot Maintenance Required</DialogTitle>
              <DialogDescription>
                MAiRA-001 needs scheduled maintenance. Please review the details
                and confirm.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="maintenance-date">Maintenance Date</Label>
                <Input
                  id="maintenance-date"
                  type="date"
                  aria-describedby="date-hint"
                />
                <p id="date-hint" className="text-muted-foreground text-xs">
                  Select a date when the robot can be offline.
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="a11y-notes">Additional Notes</Label>
                <Input
                  id="a11y-notes"
                  placeholder="Any special instructions..."
                  aria-describedby="notes-hint"
                />
                <p id="notes-hint" className="text-muted-foreground text-xs">
                  Optional notes for the maintenance team.
                </p>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button>Schedule Maintenance</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive">Destructive with Warning</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <AlertTriangle
                  className="text-destructive size-5"
                  aria-hidden="true"
                />
                <span>Confirm Deletion</span>
              </DialogTitle>
              <DialogDescription>
                You are about to permanently delete MAiRA-001 and all associated
                data.
              </DialogDescription>
            </DialogHeader>
            <div
              className="bg-destructive/10 rounded-md p-4"
              role="alert"
              aria-live="polite"
            >
              <p className="text-destructive text-sm font-medium">
                Warning: 1,247 task records and 89 configuration files will be
                deleted.
              </p>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button variant="destructive">Delete Permanently</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Best Practices

1. **Always use DialogTitle** - Required for screen readers
2. **Always use DialogDescription** - Provides context
3. **Use aria-describedby on inputs** - Link hints to form fields
4. **Use role="alert" for warnings** - Announces important messages
5. **Hide decorative icons** - Use \`aria-hidden="true"\` on icons
6. **Provide clear button labels** - "Cancel" and action verbs
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
 * Control dialog width using Tailwind's max-width classes.
 * Common sizes: sm:max-w-sm, sm:max-w-md, sm:max-w-lg (default), sm:max-w-xl, sm:max-w-2xl
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            Small (max-w-sm)
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Small Dialog</DialogTitle>
            <DialogDescription>
              384px max width. Good for simple confirmations.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button size="sm">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Medium (max-w-md)</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Medium Dialog</DialogTitle>
            <DialogDescription>
              448px max width. Good for forms with a few fields.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Default (max-w-lg)</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Default Dialog</DialogTitle>
            <DialogDescription>
              512px max width. The default size for most dialogs.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="lg">
            Large (max-w-xl)
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Large Dialog</DialogTitle>
            <DialogDescription>
              576px max width. Good for complex forms.
            </DialogDescription>
          </DialogHeader>
          <p className="text-muted-foreground text-sm">
            Use this size when you have multiple columns or more content.
          </p>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="lg">
            XL (max-w-2xl)
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Extra Large Dialog</DialogTitle>
            <DialogDescription>
              672px max width. For complex layouts and detailed views.
            </DialogDescription>
          </DialogHeader>
          <p className="text-muted-foreground text-sm">
            This is suitable for dialogs with tables, multi-column layouts, or
            detailed configuration panels.
          </p>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// VARIANT COMPARISON
// =============================================================================

/**
 * ## Variant Comparison
 *
 * Side-by-side comparison of default and blur variants.
 * Open both to see the visual difference.
 */
export const VariantComparison: Story = {
  render: () => (
    <div className="flex gap-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Default Variant</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Default Variant</DialogTitle>
            <DialogDescription>
              • Dark overlay (bg-black/50)
              <br />
              • Background & border on content
              <br />• Closes on Escape and outside click
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Blur Variant</Button>
        </DialogTrigger>
        <DialogContent variant="blur">
          <DialogHeader>
            <DialogTitle>Blur Variant</DialogTitle>
            <DialogDescription>
              • Blurred backdrop (70px blur)
              <br />
              • Transparent content
              <br />• Does NOT close on Escape/outside click
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
};

// =============================================================================
// COMPLETE SHOWCASE
// =============================================================================

/**
 * ## Complete Showcase
 *
 * All dialog variants and features in one view.
 * Use this as a reference for all available options.
 */
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Default Variant</h3>
        <div className="flex flex-wrap gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Standard</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Standard Dialog</DialogTitle>
                <DialogDescription>
                  Default behavior with dark overlay.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button>Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive">Destructive</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <AlertTriangle className="text-destructive size-5" />
                  Confirm Delete
                </DialogTitle>
                <DialogDescription>This cannot be undone.</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button variant="destructive">Delete</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">With Form</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Robot</DialogTitle>
                <DialogDescription>Update information.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label>Name</Label>
                  <Input defaultValue="MAiRA-001" />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button>Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost">No Close Button</Button>
            </DialogTrigger>
            <DialogContent showCloseButton={false}>
              <DialogHeader>
                <DialogTitle>Notice</DialogTitle>
                <DialogDescription>Close button is hidden.</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button>OK</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Blur Variant</h3>
        <div className="flex flex-wrap gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Blur Standard</Button>
            </DialogTrigger>
            <DialogContent variant="blur" showCloseButton={false}>
              <DialogHeader>
                <DialogTitle>Blur Dialog</DialogTitle>
                <DialogDescription>Immersive experience.</DialogDescription>
              </DialogHeader>
              <DialogFooter className="mt-4">
                <DialogClose asChild>
                  <Button>Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Blur + Escape</Button>
            </DialogTrigger>
            <DialogContent variant="blur" closeOnEscapeKey>
              <DialogHeader>
                <DialogTitle>Escape Enabled</DialogTitle>
                <DialogDescription>Press Escape to close.</DialogDescription>
              </DialogHeader>
              <DialogFooter className="mt-4">
                <DialogClose asChild>
                  <Button>Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Sizes</h3>
        <div className="flex flex-wrap gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                Small
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
              <DialogHeader>
                <DialogTitle>Small</DialogTitle>
                <DialogDescription>max-w-sm (384px)</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button size="sm">Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Default</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Default</DialogTitle>
                <DialogDescription>max-w-lg (512px)</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button>Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="lg">
                Large
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle>Large</DialogTitle>
                <DialogDescription>max-w-2xl (672px)</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button>Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
