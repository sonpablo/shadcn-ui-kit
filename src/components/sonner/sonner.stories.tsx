import type { Meta, StoryObj } from '@storybook/react';
import { toast } from 'sonner';
import { Toaster } from './sonner';
import { Button } from '@/components/button/button';

const meta: Meta<typeof Toaster> = {
  title: 'Components/Sonner',
  component: Toaster,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
An opinionated toast component for React, built on top of [Sonner](https://sonner.emilkowal.ski/).

## Setup

Add the \`<Toaster />\` component once at the **root of your application** (e.g., \`App.tsx\`, \`layout.tsx\`, or \`main.tsx\`):

\`\`\`tsx
import { Toaster } from '@/components/sonner/sonner';

function App() {
  return (
    <>
      <YourRoutes />
      <Toaster />
    </>
  );
}
\`\`\`

## Usage

Import \`toast\` from \`sonner\` anywhere in your app to show notifications:

\`\`\`tsx
import { toast } from 'sonner';

// Default toast
toast('Hello World');

// Typed toasts
toast.success('Operation completed');
toast.error('Something went wrong');
toast.warning('Please review');
toast.info('New update available');

// With description
toast.success('Robot deployed', {
  description: 'MAiRA-001 is now operational',
});

// With action button
toast('Task paused', {
  action: {
    label: 'Resume',
    onClick: () => resumeTask(),
  },
});
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex min-h-[400px] w-full items-center justify-center pb-8">
        <Story />
        <Toaster />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toaster>;

/**
 * ## Default
 *
 * Click the button to show a default toast.
 */
export const Default: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast('Robot deployed successfully')}
    >
      Show Toast
    </Button>
  ),
};

/**
 * ## Types
 *
 * Sonner provides different toast types for various use cases.
 */
export const Types: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() => toast('Robot deployed successfully')}
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.success('MAiRA-001 is now online')}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.info('Firmware update available for LARA-002')}
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.warning('Battery level below 20%')}
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error('Connection to MAV-003 lost')}
      >
        Error
      </Button>
    </div>
  ),
};

/**
 * ## With Description
 *
 * Add more context to your toasts with descriptions.
 */
export const WithDescription: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() =>
          toast('Deployment scheduled', {
            description:
              'MAiRA-001 will be deployed to Munich Plant A at 9:00 AM',
          })
        }
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.success('Robot calibrated', {
            description: 'All sensors are within optimal parameters',
          })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.info('Firmware update available', {
            description: 'Version 2.4.1 is ready to install on LARA-002',
          })
        }
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning('Battery level low', {
            description: 'MAV-003 battery at 18%, charging recommended',
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.error('Connection lost', {
            description: 'Unable to reach MAiRA-005, check network status',
          })
        }
      >
        Error
      </Button>
    </div>
  ),
};

/**
 * ## With Action
 *
 * Add interactive actions to your toasts.
 */
export const WithAction: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() =>
          toast('Robot stopped', {
            description: 'MAV-003 has been paused',
            action: {
              label: 'Resume',
              onClick: () => toast.success('MAV-003 resumed'),
            },
          })
        }
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.success('Deployment complete', {
            description: 'MAiRA-001 is now operational',
            action: {
              label: 'View',
              onClick: () => toast('Opening robot details...'),
            },
          })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.info('Update available', {
            description: 'New firmware v2.4.1 ready',
            action: {
              label: 'Install',
              onClick: () => toast.success('Installing update...'),
            },
          })
        }
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning('Battery low', {
            description: 'MAV-003 at 15%',
            action: {
              label: 'Charge',
              onClick: () => toast.success('Returning to charging station'),
            },
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.error('Task failed', {
            description: 'Palletizing operation error',
            action: {
              label: 'Retry',
              onClick: () => toast.success('Task restarted'),
            },
          })
        }
      >
        Error
      </Button>
    </div>
  ),
};

/**
 * ## Promise Toast
 *
 * Show loading, success, and error states for async operations.
 */
export const PromiseToast: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() => {
          toast.promise<{ name: string }>(
            () =>
              new Promise((resolve) =>
                setTimeout(() => resolve({ name: 'MAiRA-001' }), 2000),
              ),
            {
              loading: 'Connecting to robot...',
              success: (data) => `${data.name} is now online`,
              error: 'Failed to connect',
            },
          );
        }}
      >
        Success Promise
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast.promise(
            () =>
              new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Timeout')), 2000),
              ),
            {
              loading: 'Uploading firmware...',
              success: 'Firmware updated',
              error: 'Upload failed - connection timeout',
            },
          );
        }}
      >
        Failed Promise
      </Button>
    </div>
  ),
};

/**
 * ## Positions
 *
 * Toasts can be positioned in different areas of the screen.
 * Note: Position is set on the Toaster component, not individual toasts.
 * This demo uses separate Toasters to show each position.
 */
export const Positions: Story = {
  decorators: [
    (Story) => (
      <div className="flex min-h-[500px] w-full items-center justify-center">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="space-y-4">
      <p className="text-muted-foreground text-center text-sm">
        Click a button to see the toast appear in that position
      </p>
      <div className="grid grid-cols-3 gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => toast('Top Left', { position: 'top-left' })}
        >
          Top Left
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => toast('Top Center', { position: 'top-center' })}
        >
          Top Center
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => toast('Top Right', { position: 'top-right' })}
        >
          Top Right
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => toast('Bottom Left', { position: 'bottom-left' })}
        >
          Bottom Left
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => toast('Bottom Center', { position: 'bottom-center' })}
        >
          Bottom Center
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => toast('Bottom Right', { position: 'bottom-right' })}
        >
          Bottom Right
        </Button>
      </div>
    </div>
  ),
};

/**
 * ## Custom Duration
 *
 * Control how long toasts stay visible.
 */
export const CustomDuration: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() =>
          toast('Quick notification', {
            duration: 1000,
          })
        }
      >
        1 second
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast('Standard notification', {
            duration: 4000,
          })
        }
      >
        4 seconds (default)
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast('Important notification', {
            duration: 10000,
          })
        }
      >
        10 seconds
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast('Persistent notification', {
            duration: Infinity,
            action: {
              label: 'Dismiss',
              onClick: () => {},
            },
          })
        }
      >
        Until dismissed
      </Button>
    </div>
  ),
};

/**
 * ## Dismiss Programmatically
 *
 * Dismiss toasts using their ID.
 */
export const DismissProgrammatically: Story = {
  render: () => {
    let toastId: string | number;

    return (
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() => {
            toastId = toast('This toast can be dismissed', {
              duration: Infinity,
            });
          }}
        >
          Show Toast
        </Button>
        <Button variant="outline" onClick={() => toast.dismiss(toastId)}>
          Dismiss Toast
        </Button>
        <Button variant="destructive" onClick={() => toast.dismiss()}>
          Dismiss All
        </Button>
      </div>
    );
  },
};

/**
 * ## Complete Showcase
 *
 * All toast variations in one view.
 */
export const CompleteShowcase: Story = {
  render: () => (
    <div className="space-y-6">
      {/* Toast Types */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold">Toast Types</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => toast('Default message')}
          >
            Default
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => toast.success('Success!')}
          >
            Success
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => toast.info('Information')}
          >
            Info
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => toast.warning('Warning!')}
          >
            Warning
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => toast.error('Error!')}
          >
            Error
          </Button>
        </div>
      </div>

      {/* With Content */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold">With Content</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              toast('Title', { description: 'With a description' })
            }
          >
            + Description
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              toast('Action required', {
                action: { label: 'Undo', onClick: () => {} },
              })
            }
          >
            + Action
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              toast('Complete', {
                description: 'Operation successful',
                action: { label: 'View', onClick: () => {} },
              })
            }
          >
            + Both
          </Button>
        </div>
      </div>

      {/* Async */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold">Async Operations</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              toast.promise(
                new Promise((resolve) => setTimeout(resolve, 2000)),
                {
                  loading: 'Loading...',
                  success: 'Completed!',
                  error: 'Failed',
                },
              )
            }
          >
            Promise (Success)
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              toast.promise(
                new Promise((_, reject) => setTimeout(reject, 2000)),
                {
                  loading: 'Loading...',
                  success: 'Completed!',
                  error: 'Operation failed',
                },
              )
            }
          >
            Promise (Error)
          </Button>
        </div>
      </div>

      {/* Duration */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold">Duration</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => toast('Fast', { duration: 1000 })}
          >
            1s
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => toast('Default', { duration: 4000 })}
          >
            4s
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              toast('Persistent', {
                duration: Infinity,
                action: { label: 'Close', onClick: () => {} },
              })
            }
          >
            ∞
          </Button>
        </div>
      </div>
    </div>
  ),
};
