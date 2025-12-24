import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  FullModal,
  FullModalClose,
  FullModalContent,
  FullModalDescription,
  FullModalFooter,
  FullModalHeader,
  FullModalTitle,
  FullModalTrigger,
} from './full-modal';
import { Button } from '@/components/button/button';
import { Input } from '@/components/input/input';
import { Label } from '@/components/label/label';
import { Spinner } from '@/components/spinner/spinner';
import { Bot, CheckCircle, AlertTriangle } from 'lucide-react';

const meta = {
  title: 'Components/FullModal',
  component: FullModal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Same API as Dialog but with \`backdrop-blur\` overlay and optional \`autoCloseMs\`.
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FullModal>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * ## Default
 *
 * Same as Dialog but with blurred backdrop.
 */
export const Default: Story = {
  render: () => (
    <FullModal>
      <FullModalTrigger asChild>
        <Button variant="outline">Open Full Modal</Button>
      </FullModalTrigger>
      <FullModalContent>
        <FullModalHeader>
          <FullModalTitle>Edit Robot Configuration</FullModalTitle>
          <FullModalDescription>
            Make changes to your robot configuration here.
          </FullModalDescription>
        </FullModalHeader>
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
        <FullModalFooter>
          <FullModalClose asChild>
            <Button variant="outline">Cancel</Button>
          </FullModalClose>
          <Button>Save Changes</Button>
        </FullModalFooter>
      </FullModalContent>
    </FullModal>
  ),
};

/**
 * ## Auto Close
 *
 * Modal that automatically closes after specified milliseconds.
 */
export const AutoClose: Story = {
  render: function AutoCloseExample() {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open (Auto-closes in 3s)</Button>
        <FullModal open={open} onOpenChange={setOpen} autoCloseMs={3000}>
          <FullModalContent showCloseButton={false}>
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-green-500/10">
                <CheckCircle className="size-8 text-green-500" />
              </div>
              <FullModalHeader className="text-center">
                <FullModalTitle>Robot Deployed!</FullModalTitle>
                <FullModalDescription>
                  MAiRA-001 is now active. Closing in 3 seconds...
                </FullModalDescription>
              </FullModalHeader>
            </div>
          </FullModalContent>
        </FullModal>
      </>
    );
  },
};

/**
 * ## Destructive Action
 *
 * Confirmation for dangerous actions.
 */
export const DestructiveAction: Story = {
  render: () => (
    <FullModal>
      <FullModalTrigger asChild>
        <Button variant="destructive">Decommission Robot</Button>
      </FullModalTrigger>
      <FullModalContent>
        <FullModalHeader>
          <FullModalTitle className="flex items-center gap-2">
            <AlertTriangle className="text-destructive size-5" />
            Decommission MAiRA-001?
          </FullModalTitle>
          <FullModalDescription>
            This action cannot be undone. All data will be permanently deleted.
          </FullModalDescription>
        </FullModalHeader>
        <div className="bg-destructive/10 rounded-md p-4">
          <p className="text-destructive text-sm font-medium">
            Warning: All task history and configurations will be lost.
          </p>
        </div>
        <FullModalFooter>
          <FullModalClose asChild>
            <Button variant="outline">Cancel</Button>
          </FullModalClose>
          <Button variant="destructive">Yes, Decommission</Button>
        </FullModalFooter>
      </FullModalContent>
    </FullModal>
  ),
};

/**
 * ## Loading State
 *
 * Modal showing a loading/processing state.
 */
export const LoadingState: Story = {
  render: function LoadingExample() {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Start Calibration</Button>
        <FullModal open={open} onOpenChange={setOpen}>
          <FullModalContent showCloseButton={false} className="sm:max-w-sm">
            <div className="flex flex-col items-center gap-4 py-4 text-center">
              <Spinner className="size-10" />
              <FullModalHeader className="text-center">
                <FullModalTitle>Calibrating Robot</FullModalTitle>
                <FullModalDescription>
                  Please wait while we calibrate MAiRA-001...
                </FullModalDescription>
              </FullModalHeader>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </FullModalContent>
        </FullModal>
      </>
    );
  },
};

/**
 * ## With Form
 *
 * Modal with a registration form.
 */
export const WithForm: Story = {
  render: () => (
    <FullModal>
      <FullModalTrigger asChild>
        <Button>
          <Bot className="size-4" />
          Register Robot
        </Button>
      </FullModalTrigger>
      <FullModalContent className="sm:max-w-[500px]">
        <FullModalHeader>
          <FullModalTitle>Register New Robot</FullModalTitle>
          <FullModalDescription>
            Add a new robot to your fleet.
          </FullModalDescription>
        </FullModalHeader>
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
            <Label htmlFor="facility">Facility</Label>
            <Input id="facility" placeholder="Munich Plant A" />
          </div>
        </div>
        <FullModalFooter>
          <FullModalClose asChild>
            <Button variant="outline">Cancel</Button>
          </FullModalClose>
          <Button>Register Robot</Button>
        </FullModalFooter>
      </FullModalContent>
    </FullModal>
  ),
};

/**
 * ## Controlled
 *
 * Modal with controlled open state.
 */
export const Controlled: Story = {
  render: function ControlledExample() {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col items-center gap-4">
        <p className="text-muted-foreground text-sm">
          Modal is {open ? 'open' : 'closed'}
        </p>
        <FullModal open={open} onOpenChange={setOpen}>
          <FullModalTrigger asChild>
            <Button>Open Controlled Modal</Button>
          </FullModalTrigger>
          <FullModalContent>
            <FullModalHeader>
              <FullModalTitle>Controlled Modal</FullModalTitle>
              <FullModalDescription>
                State is controlled externally.
              </FullModalDescription>
            </FullModalHeader>
            <FullModalFooter>
              <Button onClick={() => setOpen(false)}>Close via State</Button>
            </FullModalFooter>
          </FullModalContent>
        </FullModal>
      </div>
    );
  },
};

/**
 * ## Close with Escape Key
 *
 * By default, the modal does NOT close with Escape key.
 * Use `closeOnEscapeKey` to enable this behavior.
 */
export const CloseWithEscape: Story = {
  render: () => (
    <div className="flex gap-4">
      <FullModal>
        <FullModalTrigger asChild>
          <Button variant="outline">Default (Escape disabled)</Button>
        </FullModalTrigger>
        <FullModalContent>
          <FullModalHeader>
            <FullModalTitle>Escape Disabled</FullModalTitle>
            <FullModalDescription>
              Press Escape - nothing happens. Use the close button.
            </FullModalDescription>
          </FullModalHeader>
          <FullModalFooter>
            <FullModalClose asChild>
              <Button>Close</Button>
            </FullModalClose>
          </FullModalFooter>
        </FullModalContent>
      </FullModal>

      <FullModal>
        <FullModalTrigger asChild>
          <Button>Escape Enabled</Button>
        </FullModalTrigger>
        <FullModalContent closeOnEscapeKey>
          <FullModalHeader>
            <FullModalTitle>Escape Enabled</FullModalTitle>
            <FullModalDescription>
              Press Escape to close this modal.
            </FullModalDescription>
          </FullModalHeader>
          <FullModalFooter>
            <FullModalClose asChild>
              <Button>Close</Button>
            </FullModalClose>
          </FullModalFooter>
        </FullModalContent>
      </FullModal>
    </div>
  ),
};

/**
 * ## Accessibility
 *
 * The FullModal component follows WAI-ARIA Dialog pattern:
 *
 * - **Focus management**: Focus is trapped inside the modal when open
 * - **Title & Description**: Use `FullModalTitle` and `FullModalDescription` for screen readers
 * - **Keyboard navigation**: Tab through focusable elements, optional Escape to close
 * - **aria-labelledby**: Automatically linked via `FullModalTitle`
 * - **aria-describedby**: Automatically linked via `FullModalDescription`
 * - **role="dialog"**: Applied automatically by Radix
 */
export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="bg-muted/50 rounded-lg p-4">
        <h3 className="mb-2 font-semibold">Accessibility Features</h3>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>
            ✓ <strong>Focus trap</strong>: Focus stays inside the modal
          </li>
          <li>
            ✓ <strong>Screen reader</strong>: Title and description announced
          </li>
          <li>
            ✓ <strong>Keyboard</strong>: Tab navigation, optional Escape
          </li>
          <li>
            ✓ <strong>ARIA</strong>: role="dialog", aria-labelledby,
            aria-describedby
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <FullModal>
          <FullModalTrigger asChild>
            <Button>Accessible Modal</Button>
          </FullModalTrigger>
          <FullModalContent closeOnEscapeKey>
            <FullModalHeader>
              <FullModalTitle>Robot Maintenance Required</FullModalTitle>
              <FullModalDescription>
                MAiRA-001 needs scheduled maintenance. Please review the details
                below and confirm the maintenance window.
              </FullModalDescription>
            </FullModalHeader>
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
                <Label htmlFor="notes">Additional Notes</Label>
                <Input
                  id="notes"
                  placeholder="Any special instructions..."
                  aria-describedby="notes-hint"
                />
                <p id="notes-hint" className="text-muted-foreground text-xs">
                  Optional notes for the maintenance team.
                </p>
              </div>
            </div>
            <FullModalFooter>
              <FullModalClose asChild>
                <Button variant="outline">Cancel</Button>
              </FullModalClose>
              <Button>Schedule Maintenance</Button>
            </FullModalFooter>
          </FullModalContent>
        </FullModal>

        <FullModal>
          <FullModalTrigger asChild>
            <Button variant="destructive">Destructive with Warning</Button>
          </FullModalTrigger>
          <FullModalContent>
            <FullModalHeader>
              <FullModalTitle className="flex items-center gap-2">
                <AlertTriangle
                  className="text-destructive size-5"
                  aria-hidden="true"
                />
                <span>Confirm Deletion</span>
              </FullModalTitle>
              <FullModalDescription>
                You are about to permanently delete MAiRA-001 and all associated
                data. This action cannot be undone.
              </FullModalDescription>
            </FullModalHeader>
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
            <FullModalFooter>
              <FullModalClose asChild>
                <Button variant="outline">Cancel</Button>
              </FullModalClose>
              <Button variant="destructive">Delete Permanently</Button>
            </FullModalFooter>
          </FullModalContent>
        </FullModal>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Best Practices

1. **Always use FullModalTitle** - Required for screen readers
2. **Always use FullModalDescription** - Provides context
3. **Use aria-describedby on inputs** - Link hints to form fields
4. **Use role="alert" for warnings** - Announces important messages
5. **Hide decorative icons** - Use \`aria-hidden="true"\` on icons
6. **Provide clear button labels** - "Cancel" and action verbs
        `,
      },
    },
  },
};

/**
 * ## Complete Showcase
 *
 * All modal variants in one view.
 */
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Modal Variants</h3>
        <div className="flex flex-wrap gap-4">
          <FullModal>
            <FullModalTrigger asChild>
              <Button variant="outline">Default</Button>
            </FullModalTrigger>
            <FullModalContent>
              <FullModalHeader>
                <FullModalTitle>Default Modal</FullModalTitle>
                <FullModalDescription>
                  With blurred backdrop.
                </FullModalDescription>
              </FullModalHeader>
              <FullModalFooter>
                <FullModalClose asChild>
                  <Button>Close</Button>
                </FullModalClose>
              </FullModalFooter>
            </FullModalContent>
          </FullModal>

          <FullModal>
            <FullModalTrigger asChild>
              <Button variant="destructive">Destructive</Button>
            </FullModalTrigger>
            <FullModalContent>
              <FullModalHeader>
                <FullModalTitle className="flex items-center gap-2">
                  <AlertTriangle className="text-destructive size-5" />
                  Confirm Delete
                </FullModalTitle>
                <FullModalDescription>
                  This cannot be undone.
                </FullModalDescription>
              </FullModalHeader>
              <FullModalFooter>
                <FullModalClose asChild>
                  <Button variant="outline">Cancel</Button>
                </FullModalClose>
                <Button variant="destructive">Delete</Button>
              </FullModalFooter>
            </FullModalContent>
          </FullModal>

          <FullModal>
            <FullModalTrigger asChild>
              <Button variant="secondary">With Form</Button>
            </FullModalTrigger>
            <FullModalContent>
              <FullModalHeader>
                <FullModalTitle>Edit Robot</FullModalTitle>
                <FullModalDescription>
                  Update configuration.
                </FullModalDescription>
              </FullModalHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label>Name</Label>
                  <Input defaultValue="MAiRA-001" />
                </div>
              </div>
              <FullModalFooter>
                <FullModalClose asChild>
                  <Button variant="outline">Cancel</Button>
                </FullModalClose>
                <Button>Save</Button>
              </FullModalFooter>
            </FullModalContent>
          </FullModal>

          <FullModal>
            <FullModalTrigger asChild>
              <Button variant="ghost">No Close Button</Button>
            </FullModalTrigger>
            <FullModalContent showCloseButton={false}>
              <FullModalHeader>
                <FullModalTitle>Notice</FullModalTitle>
                <FullModalDescription>
                  Close button is hidden.
                </FullModalDescription>
              </FullModalHeader>
              <FullModalFooter>
                <FullModalClose asChild>
                  <Button>OK</Button>
                </FullModalClose>
              </FullModalFooter>
            </FullModalContent>
          </FullModal>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Content Sizes</h3>
        <div className="flex flex-wrap gap-4">
          <FullModal>
            <FullModalTrigger asChild>
              <Button variant="outline" size="sm">
                Small (sm)
              </Button>
            </FullModalTrigger>
            <FullModalContent className="sm:max-w-sm">
              <FullModalHeader>
                <FullModalTitle>Small Modal</FullModalTitle>
                <FullModalDescription>max-w-sm</FullModalDescription>
              </FullModalHeader>
              <FullModalFooter>
                <FullModalClose asChild>
                  <Button size="sm">Close</Button>
                </FullModalClose>
              </FullModalFooter>
            </FullModalContent>
          </FullModal>

          <FullModal>
            <FullModalTrigger asChild>
              <Button variant="outline">Default (lg)</Button>
            </FullModalTrigger>
            <FullModalContent>
              <FullModalHeader>
                <FullModalTitle>Default Modal</FullModalTitle>
                <FullModalDescription>max-w-lg (default)</FullModalDescription>
              </FullModalHeader>
              <FullModalFooter>
                <FullModalClose asChild>
                  <Button>Close</Button>
                </FullModalClose>
              </FullModalFooter>
            </FullModalContent>
          </FullModal>

          <FullModal>
            <FullModalTrigger asChild>
              <Button variant="outline" size="lg">
                Large (2xl)
              </Button>
            </FullModalTrigger>
            <FullModalContent className="sm:max-w-2xl">
              <FullModalHeader>
                <FullModalTitle>Large Modal</FullModalTitle>
                <FullModalDescription>max-w-2xl</FullModalDescription>
              </FullModalHeader>
              <p className="text-muted-foreground text-sm">
                Suitable for complex content with more fields.
              </p>
              <FullModalFooter>
                <FullModalClose asChild>
                  <Button>Close</Button>
                </FullModalClose>
              </FullModalFooter>
            </FullModalContent>
          </FullModal>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
