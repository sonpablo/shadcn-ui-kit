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
import { Badge } from '@/components/badge/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select/select';
import { Textarea } from '@/components/textarea/textarea';
import { Bot, AlertTriangle, Trash2, Settings, Copy, Check } from 'lucide-react';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A modal dialog window overlaid on the primary window, rendering the content underneath inert.

## Features
- 🎯 Built on Radix UI Dialog primitive
- ♿ Fully accessible with keyboard navigation and focus management
- 🎨 Customizable with Tailwind CSS
- ✨ Smooth enter/exit animations
- ❌ Optional close button (via \`showCloseButton\` prop)

## Usage

\`\`\`tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@neura/shadcn-ui-kit';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description here.</DialogDescription>
    </DialogHeader>
    {/* Content */}
  </DialogContent>
</Dialog>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * ## Default Dialog
 *
 * Basic dialog with title, description, and action buttons.
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
 * Dialog containing a form with multiple fields.
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
 * Dialog for confirming dangerous actions like deletion.
 */
export const DestructiveAction: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">
          <Trash2 className="size-4" />
          Decommission Robot
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="size-5 text-destructive" />
            Decommission MAiRA-001?
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently remove the robot
            from your fleet and delete all associated data.
          </DialogDescription>
        </DialogHeader>
        <div className="bg-destructive/10 rounded-md p-4">
          <p className="text-destructive text-sm font-medium">
            Warning: All task history, calibration data, and configurations will
            be permanently deleted.
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
 * ## Without Close Button
 *
 * Dialog without the X close button in the corner.
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
            This dialog has no close button. Use the buttons below to close it.
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
 * ## Share Link
 *
 * Dialog for sharing a link with copy functionality.
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
 * ## Settings Dialog
 *
 * More complex dialog with multiple sections.
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
              <Badge variant="secondary" className="bg-green-500/10 text-green-600">
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
 * ## Controlled Dialog
 *
 * Dialog with controlled open state.
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

// Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Dialog Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Default</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Default Dialog</DialogTitle>
                <DialogDescription>
                  A standard dialog with title and description.
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
                  Confirm Deletion
                </DialogTitle>
                <DialogDescription>
                  This action cannot be undone.
                </DialogDescription>
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
                <DialogDescription>Update robot information.</DialogDescription>
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
                <DialogDescription>
                  Close button is hidden.
                </DialogDescription>
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
        <h3 className="mb-4 text-lg font-semibold">Dialog Sizes</h3>
        <div className="flex flex-wrap gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                Small (default)
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
              <DialogHeader>
                <DialogTitle>Small Dialog</DialogTitle>
                <DialogDescription>max-w-sm</DialogDescription>
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
              <Button variant="outline">Medium (lg)</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Medium Dialog</DialogTitle>
                <DialogDescription>max-w-lg (default)</DialogDescription>
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
                Large (2xl)
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle>Large Dialog</DialogTitle>
                <DialogDescription>max-w-2xl</DialogDescription>
              </DialogHeader>
              <p className="text-muted-foreground text-sm">
                This is a larger dialog suitable for more complex content like
                forms with many fields or detailed information displays.
              </p>
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

