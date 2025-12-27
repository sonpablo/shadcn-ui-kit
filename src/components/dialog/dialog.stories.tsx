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
  Zap,
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
// BASIC EXAMPLES
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

// =============================================================================
// VARIANTS
// =============================================================================

/**
 * ## Variants
 *
 * The Dialog component supports different visual variants and behaviors.
 * Choose the right variant based on your use case.
 */
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="mb-2 text-lg font-semibold">Default Variant</h3>
        <p className="text-muted-foreground mb-4 text-sm">
          Dark overlay, closes on Escape and outside click. Use for standard
          modals, forms, and confirmations.
        </p>
        <div className="flex flex-wrap gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Standard Dialog</Button>
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
              <Button variant="outline">No Close Button</Button>
            </DialogTrigger>
            <DialogContent showCloseButton={false}>
              <DialogHeader>
                <DialogTitle>Without Close Button</DialogTitle>
                <DialogDescription>
                  The X button is hidden. User must use the provided buttons.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button>Got it</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Escape Disabled</Button>
            </DialogTrigger>
            <DialogContent closeOnEscapeKey={false}>
              <DialogHeader>
                <DialogTitle>Escape Key Blocked</DialogTitle>
                <DialogDescription>
                  Escape key is blocked, but clicking outside still works.
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
      </div>

      <div>
        <h3 className="mb-2 text-lg font-semibold">Blur Variant</h3>
        <p className="text-muted-foreground mb-4 text-sm">
          Blurred backdrop, does NOT close on Escape or outside click. Use for
          immersive experiences and critical actions.
        </p>
        <div className="flex flex-wrap gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Blur Dialog</Button>
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

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Blur + Escape Enabled</Button>
            </DialogTrigger>
            <DialogContent variant="blur" closeOnEscapeKey>
              <DialogHeader>
                <DialogTitle>Blur with Escape</DialogTitle>
                <DialogDescription>
                  Blur variant but with Escape key enabled. Click outside is
                  still blocked.
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
      </div>

      <p className="text-muted-foreground text-sm">
        💡 <strong>Tip:</strong> Use <code>variant="blur"</code> for success
        states and critical confirmations where you want the user's full
        attention.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Choosing the Right Variant

**Default Variant**
- Standard modals and forms
- Quick actions and confirmations
- When users should be able to dismiss easily

**Blur Variant**
- Success/completion messages
- Critical confirmations
- Immersive experiences where you want full attention
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
// STATES
// =============================================================================

/**
 * ## States
 *
 * Common dialog states: loading, success, error, and warning.
 * These patterns help communicate status to users effectively.
 */
export const States: Story = {
  render: function StatesExample() {
    const [loadingOpen, setLoadingOpen] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);

    return (
      <div className="flex flex-wrap gap-4">
        <Button onClick={() => setLoadingOpen(true)}>Loading State</Button>
        <Dialog open={loadingOpen} onOpenChange={setLoadingOpen}>
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
                onClick={() => setLoadingOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <Button onClick={() => setSuccessOpen(true)} variant="secondary">
          Success State
        </Button>
        <Dialog
          open={successOpen}
          onOpenChange={setSuccessOpen}
          autoCloseMs={3000}
        >
          <DialogContent variant="blur" showCloseButton={false}>
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-green-500/10">
                <CheckCircle className="size-8 text-green-500" />
              </div>
              <DialogHeader className="text-center">
                <DialogTitle>Robot Deployed Successfully!</DialogTitle>
                <DialogDescription>
                  MAiRA-001 is now active and operational. Closing
                  automatically...
                </DialogDescription>
              </DialogHeader>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <AlertTriangle className="size-4" />
              Warning State
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <AlertTriangle className="size-5 text-amber-500" />
                Low Battery Warning
              </DialogTitle>
              <DialogDescription>
                MAiRA-001 battery is below 20%. Consider recharging soon.
              </DialogDescription>
            </DialogHeader>
            <div className="rounded-md bg-amber-500/10 p-4">
              <p className="text-sm font-medium text-amber-600">
                Battery: 18% remaining (~45 minutes of operation)
              </p>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Dismiss</Button>
              </DialogClose>
              <Button>Schedule Recharge</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Zap className="size-4" />
              Error State
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-destructive flex items-center gap-2">
                <AlertTriangle className="size-5" />
                Connection Lost
              </DialogTitle>
              <DialogDescription>
                Unable to connect to MAiRA-001. The robot may be offline.
              </DialogDescription>
            </DialogHeader>
            <div className="bg-destructive/10 rounded-md p-4" role="alert">
              <p className="text-destructive text-sm font-medium">
                Error Code: CONN_TIMEOUT_001
              </p>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button>Retry Connection</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### State Patterns

**Loading State**
- Use a spinner and clear message
- Provide a cancel option when possible
- Hide the close button to prevent accidental dismissal

**Success State**
- Use blur variant for emphasis
- Consider auto-close for better UX
- Include a success icon for visual confirmation

**Warning State**
- Use amber/yellow colors
- Provide context about the warning
- Offer actionable next steps

**Error State**
- Use destructive colors
- Provide error details (codes, messages)
- Offer retry or contact support options
        `,
      },
    },
  },
};

// =============================================================================
// DESTRUCTIVE ACTIONS
// =============================================================================

/**
 * ## Destructive Actions
 *
 * Confirmation dialogs for dangerous actions like deletion.
 * Always provide clear warning text and a cancel option.
 */
export const DestructiveActions: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
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
              This action cannot be undone. All data will be permanently
              deleted.
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
            <DialogDescription>
              This action cannot be undone. The blur variant adds extra emphasis
              to this critical action.
            </DialogDescription>
          </DialogHeader>
          <div className="bg-destructive/10 mt-4 rounded-md p-4">
            <p className="text-destructive text-sm font-medium">
              Warning: 1,247 task records and 89 configuration files will be
              permanently deleted.
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
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Best Practices for Destructive Actions

1. **Clear Title** - Use action verbs and specify what will be affected
2. **Warning Icon** - Include AlertTriangle or similar icon
3. **Consequences** - Explain what will happen (data loss, etc.)
4. **Visual Warning** - Use a colored background box for emphasis
5. **Cancel Button** - Always provide an easy way to cancel
6. **Explicit Confirmation** - Button text should confirm the action ("Yes, Delete")
7. **Consider Blur Variant** - For extra-critical actions, blur adds emphasis
        `,
      },
    },
  },
};

// =============================================================================
// FEATURES
// =============================================================================

/**
 * ## Features
 *
 * Special features like auto-close and other advanced capabilities.
 */
export const Features: Story = {
  render: function FeaturesExample() {
    const [autoCloseOpen, setAutoCloseOpen] = useState(false);
    const [autoCloseBlurOpen, setAutoCloseBlurOpen] = useState(false);

    return (
      <div className="flex flex-col gap-8 p-4">
        <div>
          <h3 className="mb-2 font-semibold">Auto-Close</h3>
          <p className="text-muted-foreground mb-4 text-sm">
            Dialogs can automatically close after a specified duration. Perfect
            for success messages and notifications.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => setAutoCloseOpen(true)}>
              Auto-close (2s)
            </Button>
            <Dialog
              open={autoCloseOpen}
              onOpenChange={setAutoCloseOpen}
              autoCloseMs={2000}
            >
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

            <Button
              onClick={() => setAutoCloseBlurOpen(true)}
              variant="secondary"
            >
              Auto-close Blur (3s)
            </Button>
            <Dialog
              open={autoCloseBlurOpen}
              onOpenChange={setAutoCloseBlurOpen}
              autoCloseMs={3000}
            >
              <DialogContent variant="blur" showCloseButton={false}>
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="flex size-20 items-center justify-center rounded-full bg-green-500/10">
                    <CheckCircle className="size-10 text-green-500" />
                  </div>
                  <DialogHeader className="text-center">
                    <DialogTitle className="text-2xl">Success!</DialogTitle>
                    <DialogDescription className="text-base">
                      Fleet deployment completed successfully. All robots are
                      operational.
                    </DialogDescription>
                  </DialogHeader>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <p className="text-muted-foreground text-sm">
          💡 <strong>Tip:</strong> Auto-close requires controlled state (
          <code>open</code> and <code>onOpenChange</code> props). Use reasonable
          durations (2-4 seconds) to give users time to read the message.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Auto-Close Feature

The \`autoCloseMs\` prop automatically closes the dialog after the specified milliseconds.

**Requirements:**
- Must use controlled state (\`open\` and \`onOpenChange\` props)
- Set \`autoCloseMs\` on the \`Dialog\` root component

**Best Use Cases:**
- Success confirmations
- Brief notifications
- Status updates that don't require user action

**Recommended Durations:**
- Quick success: 2000ms (2 seconds)
- With more content: 3000-4000ms (3-4 seconds)
        `,
      },
    },
  },
};

// =============================================================================
// CONTROLLED
// =============================================================================

/**
 * ## Controlled
 *
 * Dialog with controlled open state.
 * Useful when you need to open/close programmatically or react to state changes.
 */
export const Controlled: Story = {
  render: function ControlledExample() {
    const [open, setOpen] = useState(false);
    const [actionCount, setActionCount] = useState(0);

    const handleAction = () => {
      setActionCount((prev) => prev + 1);
      setOpen(false);
    };

    return (
      <div className="flex flex-col items-center gap-4">
        <div className="bg-muted/50 rounded-lg p-4 text-center">
          <p className="text-muted-foreground text-sm">
            Dialog is <strong>{open ? 'open' : 'closed'}</strong>
          </p>
          <p className="text-muted-foreground text-sm">
            Actions performed: <strong>{actionCount}</strong>
          </p>
        </div>

        <div className="flex gap-2">
          <Button onClick={() => setOpen(true)}>Open Dialog</Button>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close Dialog (External)
          </Button>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Controlled Dialog</DialogTitle>
              <DialogDescription>
                This dialog's state is controlled by React state. You can
                open/close it programmatically.
              </DialogDescription>
            </DialogHeader>
            <div className="bg-muted/50 rounded-md p-4">
              <p className="text-sm">
                The external "Close Dialog" button can close this modal, and the
                counter tracks actions.
              </p>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAction}>Perform Action</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
### Controlled Dialog Pattern

Use controlled state when you need to:
- Open/close the dialog programmatically
- Track dialog state in parent component
- Perform actions before closing
- Integrate with form validation
- Implement auto-close functionality

**Implementation:**
\`\`\`tsx
const [open, setOpen] = useState(false);

<Dialog open={open} onOpenChange={setOpen}>
  {/* ... */}
</Dialog>
\`\`\`
        `,
      },
    },
  },
};

// =============================================================================
// COMPLETE SHOWCASE
// =============================================================================

/**
 * ## Complete Showcase
 *
 * Real-world examples showing common dialog patterns in the Neura Robotics context.
 */
export const CompleteShowcase: Story = {
  render: function CompleteShowcaseExample() {
    const [copied, setCopied] = useState(false);
    const shareLink = 'https://neuraverse.io/fleet/maira-001';

    const handleCopy = () => {
      navigator.clipboard.writeText(shareLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <div className="flex flex-col gap-6 p-4">
        <div>
          <h3 className="mb-2 text-lg font-semibold">Common Dialog Patterns</h3>
          <p className="text-muted-foreground text-sm">
            Real-world examples of dialogs in action.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {/* Register Robot Form */}
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

          {/* Robot Settings */}
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

          {/* Share Link */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Share Robot Access</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Share Robot Access</DialogTitle>
                <DialogDescription>
                  Anyone with this link can view the robot status.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center gap-2">
                <Input value={shareLink} readOnly className="flex-1" />
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
        </div>

        <p className="text-muted-foreground text-sm">
          💡 <strong>Tip:</strong> These examples show common patterns like
          forms, settings panels, and share dialogs. Use them as templates for
          your own dialogs.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Common Dialog Patterns

**Form Dialog**
- Use for creating/editing resources
- Include clear labels and helpful placeholders
- Provide Cancel and Submit buttons
- Consider validation feedback

**Settings Dialog**
- Use for configuration panels
- Group related settings
- Show current status/values
- Save changes explicitly

**Share Dialog**
- Use for sharing links or invites
- Provide copy-to-clipboard functionality
- Show visual feedback when copied
- Keep it simple with minimal fields
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
 * The Dialog component follows WAI-ARIA Dialog pattern with full keyboard
 * and screen reader support.
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
          <li>
            ✓ <strong>Focus restoration</strong>: Returns focus to trigger on
            close
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
            <Button variant="destructive">Destructive with Alerts</Button>
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
### Accessibility Best Practices

**Always Include:**
1. **DialogTitle** - Required for screen readers (\`aria-labelledby\`)
2. **DialogDescription** - Provides context (\`aria-describedby\`)
3. **Proper Labels** - Use \`<Label>\` with \`htmlFor\` for form fields
4. **Hints with IDs** - Link hints to inputs with \`aria-describedby\`

**For Warnings/Errors:**
- Use \`role="alert"\` on warning boxes
- Add \`aria-live="polite"\` for dynamic content
- Mark decorative icons with \`aria-hidden="true"\`

**Button Labels:**
- Use clear, action-oriented text ("Save Changes" not just "Save")
- Provide "Cancel" option for all destructive actions
- Make primary action visually distinct

**Keyboard Navigation:**
- Tab through all interactive elements
- Escape key closes (unless disabled)
- Focus trap keeps users inside dialog
- Focus returns to trigger when closed

**Testing:**
- Test with keyboard only (no mouse)
- Test with screen reader (NVDA, JAWS, VoiceOver)
- Verify focus trap is working
- Ensure all content is announced
        `,
      },
    },
  },
};
