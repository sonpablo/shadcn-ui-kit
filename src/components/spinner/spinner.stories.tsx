import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './spinner';
import { Button } from '@/components/button/button';
import { Badge } from '@/components/badge/badge';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A simple spinner component to indicate loading states.`,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * ## Default Spinner
 *
 * The default spinner with standard size (16px).
 */
export const Default: Story = {};

/**
 * ## Sizes
 *
 * Use Tailwind's `size-*` utility to change the spinner size.
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-3" />
        <span className="text-muted-foreground text-xs">size-3</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-4" />
        <span className="text-muted-foreground text-xs">size-4</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-6" />
        <span className="text-muted-foreground text-xs">size-6</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-8" />
        <span className="text-muted-foreground text-xs">size-8</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-12" />
        <span className="text-muted-foreground text-xs">size-12</span>
      </div>
    </div>
  ),
};

/**
 * ## Colors
 *
 * Use Tailwind's `text-*` utility to change the spinner color.
 */
export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner className="size-6" />
      <Spinner className="size-6 text-green-500" />
      <Spinner className="size-6 text-red-500" />
      <Spinner className="size-6 text-yellow-500" />
      <Spinner className="size-6 text-purple-500" />
      <Spinner className="text-muted-foreground size-6" />
    </div>
  ),
};

/**
 * ## With Button
 *
 * Common pattern: spinner inside a disabled button to show loading state.
 */
export const WithButton: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <Button disabled size="sm" variant="destructive">
        <Spinner />
        Connecting to MAiRA...
      </Button>
      <Button variant="outline" disabled size="default">
        <Spinner />
        Deploying Robot
      </Button>
      <Button variant="secondary" disabled size="lg">
        <Spinner className="size-5" />
        Processing Fleet Command
      </Button>
    </div>
  ),
};

/**
 * ## With Badge
 *
 * Use spinner inside a badge to show syncing or updating states.
 */
export const WithBadge: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge variant="destructive">
        <Spinner className="size-3" />
        Syncing Fleet
      </Badge>
      <Badge variant="secondary">
        <Spinner className="size-3" />
        Updating Firmware
      </Badge>
      <Badge variant="outline">
        <Spinner className="size-3" />
        Calibrating
      </Badge>
    </div>
  ),
};

/**
 * ## Inline Loading
 *
 * Spinner used inline with text for status messages.
 */
export const InlineLoading: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-sm">
        <Spinner className="size-4" />
        <span>Connecting to MAiRA-001...</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <Spinner className="size-4 text-green-500" />
        <span>Downloading firmware update...</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <Spinner className="size-4" />
        <span>Syncing fleet data...</span>
      </div>
    </div>
  ),
};

// Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Sizes</h3>
        <div className="flex flex-wrap items-end gap-6">
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-3" />
            <span className="text-muted-foreground text-xs">size-3</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-4" />
            <span className="text-muted-foreground text-xs">size-4</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-6" />
            <span className="text-muted-foreground text-xs">size-6</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-8" />
            <span className="text-muted-foreground text-xs">size-8</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-12" />
            <span className="text-muted-foreground text-xs">size-12</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Colors</h3>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-6" />
            <span className="text-muted-foreground text-xs">primary</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-6 text-green-500" />
            <span className="text-muted-foreground text-xs">green</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-6 text-red-500" />
            <span className="text-muted-foreground text-xs">red</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-6 text-yellow-500" />
            <span className="text-muted-foreground text-xs">yellow</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="text-muted-foreground size-6" />
            <span className="text-muted-foreground text-xs">muted</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">With Buttons</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button disabled size="sm">
            <Spinner className="text-background" />
            Loading
          </Button>
          <Button disabled variant="outline">
            <Spinner />
            Processing
          </Button>
          <Button disabled variant="secondary" size="lg">
            <Spinner className="size-5" />
            Connecting
          </Button>
          <Button disabled variant="destructive">
            <Spinner />
            Deleting
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">With Badges</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Badge>
            <Spinner className="text-background size-3" />
            Syncing
          </Badge>
          <Badge variant="secondary">
            <Spinner className="size-3" />
            Updating
          </Badge>
          <Badge variant="outline">
            <Spinner className="size-3" />
            Calibrating
          </Badge>
          <Badge variant="destructive">
            <Spinner className="size-3" />
            Error
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Inline Status</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Spinner className="size-4" />
            <span>Connecting to MAiRA-001...</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Spinner className="size-4 text-green-500" />
            <span>Downloading firmware...</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Spinner className="text-muted-foreground size-4" />
            <span className="text-muted-foreground">Idle</span>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
