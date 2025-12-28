import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Timeline,
  TimelineItem,
  TimelineIcon,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
} from './timeline';
import {
  CheckCircle,
  Bot,
  Wrench,
  Package,
  Clock,
  AlertTriangle,
  Activity,
  Zap,
  Shield,
  Settings,
} from 'lucide-react';
import { Badge } from '@/components/badge/badge';
import { Button } from '@/components/button/button';

const meta: Meta<typeof Timeline> = {
  title: 'Components/Timeline',
  component: Timeline,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A flexible timeline component for displaying chronological sequences of events.

## Features
- Simple continuous line mode (default)
- Icon mode with perfect alignment
- Multiple line styles (solid, dashed, dotted, gradient)
- Three size variants (sm, default, lg)
- Card variant for highlighted content
- Semantic HTML for accessibility

## Common Use Cases
- Activity feeds and logs
- Comment threads
- Process tracking
- Event history
- Robot operation logs
- Manufacturing workflows
- Status updates

## Modes
- **Simple Mode** (default): \`withoutIcons={true}\` - Just a continuous line with content
- **Icon Mode**: \`withoutIcons={false}\` - Icons with perfectly aligned content and connecting lines

## Composition
- **Timeline**: Container with spacing and line configuration
- **TimelineItem**: Individual timeline entry
- **TimelineIcon**: Icon container (only in icon mode)
- **TimelineContent**: Content wrapper
- **TimelineTitle**: Title of the event
- **TimelineDescription**: Detailed description
- **TimelineTime**: Timestamp display
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'Size of spacing between timeline items',
    },
    variant: {
      control: 'select',
      options: ['default', 'dashed', 'dotted', 'gradient'],
      description: 'Style of the connecting line',
    },
    showLine: {
      control: 'boolean',
      description: 'Whether to show the connecting line between items',
    },
    withoutIcons: {
      control: 'boolean',
      description:
        'Use simple mode without icons (default: true). Set to false to enable icons with perfect alignment.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

// =============================================================================
// BASIC EXAMPLES
// =============================================================================

/**
 *
 * Simple timeline with continuous line - perfect for activity feeds, comments, and chronological lists.
 * The default behavior is without icons (withoutIcons={true}).
 *
 * **Use Cases:**
 * - Activity logs
 * - Comment threads
 * - Simple event lists
 * - Robot operation history
 */
export const Default: Story = {
  render: () => {
    return (
      <div className="w-full max-w-2xl">
        <Timeline>
          <TimelineItem>
            <TimelineContent>
              <TimelineTime>2 hours ago</TimelineTime>
              <TimelineTitle className="mt-1">
                Robot Deployed Successfully
              </TimelineTitle>
              <TimelineDescription>
                MAiRA-001 successfully deployed to Production Line A and
                completed initial diagnostics.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineContent>
              <TimelineTime>5 hours ago</TimelineTime>
              <TimelineTitle className="mt-1">System Initialized</TimelineTitle>
              <TimelineDescription>
                All sensors calibrated and system ready for operation.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem isLast>
            <TimelineContent>
              <TimelineTime>1 day ago</TimelineTime>
              <TimelineTitle className="mt-1">Robot Registered</TimelineTitle>
              <TimelineDescription>
                New robot unit added to fleet inventory.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    );
  },
  parameters: {
    layout: 'centered',
  },
};

// =============================================================================
// VARIANTS & SIZES
// =============================================================================

/**
 *
 * Three size variants control the spacing between timeline items.
 * Set `withoutIcons={false}` to enable icons.
 *
 * - **sm**: Compact spacing for dense information
 * - **default**: Balanced spacing for most use cases
 * - **lg**: Spacious layout for emphasis
 */
export const Sizes: Story = {
  render: () => {
    return (
      <div className="flex gap-12">
        {/* Small */}
        <div>
          <h3 className="mb-4 text-sm font-bold">Small</h3>
          <Timeline size="sm" withoutIcons={false}>
            <TimelineItem iconSize="sm">
              <TimelineIcon variant="success" size="sm" />
              <TimelineContent>
                <TimelineTitle className="text-sm">Deployed</TimelineTitle>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem iconSize="sm">
              <TimelineIcon variant="default" size="sm" />
              <TimelineContent>
                <TimelineTitle className="text-sm">Configured</TimelineTitle>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem isLast iconSize="sm">
              <TimelineIcon variant="ghost" size="sm" />
              <TimelineContent>
                <TimelineTitle className="text-sm">Registered</TimelineTitle>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>

        {/* Default */}
        <div>
          <h3 className="mb-4 text-sm font-bold">Default</h3>
          <Timeline size="default" withoutIcons={false}>
            <TimelineItem>
              <TimelineIcon variant="success" size="default" />
              <TimelineContent>
                <TimelineTitle>Deployed</TimelineTitle>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineIcon variant="default" size="default" />
              <TimelineContent>
                <TimelineTitle>Configured</TimelineTitle>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem isLast>
              <TimelineIcon variant="ghost" size="default" />
              <TimelineContent>
                <TimelineTitle>Registered</TimelineTitle>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>

        {/* Large */}
        <div>
          <h3 className="mb-4 text-sm font-bold">Large</h3>
          <Timeline size="lg" withoutIcons={false}>
            <TimelineItem iconSize="lg">
              <TimelineIcon variant="success" size="lg" />
              <TimelineContent>
                <TimelineTitle className="text-lg">Deployed</TimelineTitle>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem iconSize="lg">
              <TimelineIcon variant="default" size="lg" />
              <TimelineContent>
                <TimelineTitle className="text-lg">Configured</TimelineTitle>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem isLast iconSize="lg">
              <TimelineIcon variant="ghost" size="lg" />
              <TimelineContent>
                <TimelineTitle className="text-lg">Registered</TimelineTitle>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'centered',
  },
};

/**
 *
 * Different line styles for visual distinction.
 *
 * - **default**: Solid line for standard timelines
 * - **dashed**: Dashed line for planned or tentative events
 * - **dotted**: Dotted line for optional or secondary information
 * - **gradient**: Gradient line for visual emphasis
 */
export const LineVariants: Story = {
  render: () => {
    return (
      <div className="grid grid-cols-2 gap-16">
        <div>
          <h3 className="mb-4 text-sm font-bold">Default Line (Solid)</h3>
          <Timeline variant="default" withoutIcons={false}>
            <TimelineItem>
              <TimelineIcon variant="success" />
              <TimelineContent>
                <TimelineTitle>Step 1</TimelineTitle>
                <TimelineDescription>Completed</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem isLast>
              <TimelineIcon variant="default" />
              <TimelineContent>
                <TimelineTitle>Step 2</TimelineTitle>
                <TimelineDescription>In progress</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold">Dashed Line</h3>
          <Timeline variant="dashed" withoutIcons={false}>
            <TimelineItem>
              <TimelineIcon variant="success" />
              <TimelineContent>
                <TimelineTitle>Step 1</TimelineTitle>
                <TimelineDescription>Completed</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem isLast>
              <TimelineIcon variant="default" />
              <TimelineContent>
                <TimelineTitle>Step 2</TimelineTitle>
                <TimelineDescription>Planned</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold">Dotted Line</h3>
          <Timeline variant="dotted" withoutIcons={false}>
            <TimelineItem>
              <TimelineIcon variant="success" />
              <TimelineContent>
                <TimelineTitle>Step 1</TimelineTitle>
                <TimelineDescription>Primary</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem isLast>
              <TimelineIcon variant="ghost" />
              <TimelineContent>
                <TimelineTitle>Step 2</TimelineTitle>
                <TimelineDescription>Optional</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold">Gradient Line</h3>
          <Timeline variant="gradient" withoutIcons={false}>
            <TimelineItem>
              <TimelineIcon variant="success" />
              <TimelineContent>
                <TimelineTitle>Step 1</TimelineTitle>
                <TimelineDescription>Highlighted</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem isLast>
              <TimelineIcon variant="default" />
              <TimelineContent>
                <TimelineTitle>Step 2</TimelineTitle>
                <TimelineDescription>Featured</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'centered',
  },
};

/**
 *
 * Different icon styles for status indication.
 *
 * - **success**: Completed or successful events (green)
 * - **warning**: Warning or attention needed (yellow)
 * - **error**: Error or failed events (red)
 * - **default**: Standard events (primary color)
 * - **secondary**: Alternative styling
 * - **outline**: Outlined style with ring
 * - **ghost**: Subtle, muted style
 */
export const IconVariants: Story = {
  render: () => {
    return (
      <div className="w-[700px]">
        <Timeline withoutIcons={false}>
          <TimelineItem>
            <TimelineIcon variant="success">
              <CheckCircle className="size-4" />
            </TimelineIcon>
            <TimelineContent>
              <TimelineTitle>Success</TimelineTitle>
              <TimelineDescription>
                Operation completed successfully
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineIcon variant="warning">
              <AlertTriangle className="size-4" />
            </TimelineIcon>
            <TimelineContent>
              <TimelineTitle>Warning</TimelineTitle>
              <TimelineDescription>Attention required</TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineIcon variant="error">
              <Package className="size-4" />
            </TimelineIcon>
            <TimelineContent>
              <TimelineTitle>Error</TimelineTitle>
              <TimelineDescription>Operation failed</TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineIcon variant="default">
              <Bot className="size-4" />
            </TimelineIcon>
            <TimelineContent>
              <TimelineTitle>Default</TimelineTitle>
              <TimelineDescription>Standard event</TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineIcon variant="secondary">
              <Settings className="size-4" />
            </TimelineIcon>
            <TimelineContent>
              <TimelineTitle>Secondary</TimelineTitle>
              <TimelineDescription>Alternative style</TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineIcon variant="outline">
              <Shield className="size-4" />
            </TimelineIcon>
            <TimelineContent>
              <TimelineTitle>Outline</TimelineTitle>
              <TimelineDescription>Emphasized event</TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem isLast>
            <TimelineIcon variant="ghost">
              <Clock className="size-4" />
            </TimelineIcon>
            <TimelineContent>
              <TimelineTitle>Ghost</TimelineTitle>
              <TimelineDescription>Subtle event</TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    );
  },
};

// =============================================================================
// FEATURES
// =============================================================================

/**
 *
 * Timeline with icons showing robot deployment history.
 * Set `withoutIcons={false}` to enable icon mode with perfect alignment.
 */
export const WithIcons: Story = {
  args: {
    variant: 'default',
    size: 'default',
    showLine: true,
    withoutIcons: false,
  },
  render: (args) => {
    return (
      <div className="w-[700px]">
        <Timeline {...args}>
          <TimelineItem>
            <TimelineIcon variant="success">
              <CheckCircle className="size-4" />
            </TimelineIcon>
            <TimelineContent>
              <TimelineTime dateTime="2025-01-15T14:30:00">
                2 hours ago
              </TimelineTime>
              <TimelineTitle>Robot Deployed Successfully</TimelineTitle>
              <TimelineDescription>
                MAiRA-001 successfully deployed to Production Line A
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineIcon variant="default">
              <Bot className="size-4" />
            </TimelineIcon>
            <TimelineContent>
              <TimelineTime dateTime="2025-01-15T09:15:00">
                5 hours ago
              </TimelineTime>
              <TimelineTitle>System Initialized</TimelineTitle>
              <TimelineDescription>
                All sensors calibrated and system ready for operation
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem isLast>
            <TimelineIcon variant="ghost">
              <Clock className="size-4" />
            </TimelineIcon>
            <TimelineContent>
              <TimelineTime dateTime="2025-01-14T08:00:00">
                1 day ago
              </TimelineTime>
              <TimelineTitle>Robot Registered</TimelineTitle>
              <TimelineDescription>
                New robot unit added to fleet inventory
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    );
  },
};

/**
 *
 * Timeline with icons but without connecting lines for simpler layouts.
 * Set `withoutIcons={false}` to enable icons, and `showLine={false}` to hide the line.
 */
export const WithoutConnectingLine: Story = {
  render: () => {
    return (
      <div className="w-[700px]">
        <Timeline showLine={false} withoutIcons={false}>
          <TimelineItem>
            <TimelineIcon variant="success">
              <CheckCircle className="size-4" />
            </TimelineIcon>
            <TimelineContent>
              <TimelineTime>2 hours ago</TimelineTime>
              <TimelineTitle>Robot Deployed Successfully</TimelineTitle>
              <TimelineDescription>
                MAiRA-001 successfully deployed to Production Line A
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineIcon variant="default">
              <Bot className="size-4" />
            </TimelineIcon>
            <TimelineContent>
              <TimelineTime>5 hours ago</TimelineTime>
              <TimelineTitle>System Initialized</TimelineTitle>
              <TimelineDescription>
                All sensors calibrated and system ready for operation
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem isLast>
            <TimelineIcon variant="ghost">
              <Clock className="size-4" />
            </TimelineIcon>
            <TimelineContent>
              <TimelineTime>1 day ago</TimelineTime>
              <TimelineTitle>Robot Registered</TimelineTitle>
              <TimelineDescription>
                New robot unit added to fleet inventory
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    );
  },
};

/**
 * ## Card Variant
 *
 * Timeline with card-style content for highlighted information.
 * Useful for important milestones or featured events.
 */
export const CardVariant: Story = {
  render: () => {
    return (
      <div className="w-[700px]">
        <Timeline withoutIcons={false}>
          <TimelineItem iconSize="lg">
            <TimelineIcon variant="success" size="lg">
              <Bot className="size-5" />
            </TimelineIcon>
            <TimelineContent variant="card">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <TimelineTime>January 15, 2025 • 14:30</TimelineTime>
                  <TimelineTitle className="text-lg">
                    MAiRA-001 Production Milestone
                  </TimelineTitle>
                  <TimelineDescription>
                    Robot completed 10,000 successful operations with 99.8%
                    accuracy rate.
                  </TimelineDescription>
                </div>
                <Badge variant="default">Milestone</Badge>
              </div>
              <div className="mt-4 flex gap-2">
                <Button size="sm" variant="outline">
                  View Details
                </Button>
                <Button size="sm" variant="ghost">
                  Export Report
                </Button>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem iconSize="lg">
            <TimelineIcon variant="warning" size="lg">
              <Wrench className="size-5" />
            </TimelineIcon>
            <TimelineContent variant="card">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <TimelineTime>January 10, 2025 • 09:15</TimelineTime>
                  <TimelineTitle className="text-lg">
                    Scheduled Maintenance
                  </TimelineTitle>
                  <TimelineDescription>
                    Routine sensor calibration and software update performed.
                  </TimelineDescription>
                </div>
                <Badge variant="outline">Maintenance</Badge>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem isLast iconSize="lg">
            <TimelineIcon variant="default" size="lg">
              <Package className="size-5" />
            </TimelineIcon>
            <TimelineContent variant="card">
              <div className="space-y-1">
                <TimelineTime>January 1, 2025 • 08:00</TimelineTime>
                <TimelineTitle className="text-lg">
                  Robot Activated
                </TimelineTitle>
                <TimelineDescription>
                  Initial setup and registration completed successfully.
                </TimelineDescription>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    );
  },
};

// =============================================================================
// NEURA ROBOTICS EXAMPLES
// =============================================================================

/**
 * ## Manufacturing Process
 *
 * Real-world example: Robot manufacturing and deployment timeline.
 */
export const ManufacturingProcess: Story = {
  render: () => {
    return (
      <div className="w-[700px]">
        <div className="mb-6">
          <h2 className="text-xl font-bold">MAiRA-001 Lifecycle</h2>
          <p className="text-muted-foreground text-sm">
            Complete manufacturing and deployment process
          </p>
        </div>

        <Timeline withoutIcons={false}>
          <TimelineItem iconSize="lg">
            <TimelineIcon variant="success" size="lg">
              <CheckCircle className="size-5" />
            </TimelineIcon>
            <TimelineContent>
              <TimelineTime dateTime="2025-01-15T14:30:00">
                January 15, 2025 • 14:30
              </TimelineTime>
              <TimelineTitle>Deployed to Production Line A</TimelineTitle>
              <TimelineDescription>
                Robot successfully deployed and running first production cycle
                with 99.2% accuracy.
              </TimelineDescription>
              <div className="mt-2 flex gap-2">
                <Badge variant="default">Active</Badge>
                <Badge variant="outline">Production</Badge>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem iconSize="lg">
            <TimelineIcon variant="default" size="lg">
              <Shield className="size-5" />
            </TimelineIcon>
            <TimelineContent>
              <TimelineTime dateTime="2025-01-14T09:00:00">
                January 14, 2025 • 09:00
              </TimelineTime>
              <TimelineTitle>Safety Testing Completed</TimelineTitle>
              <TimelineDescription>
                All safety protocols verified. Emergency stop, collision
                detection, and fail-safe systems passed.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem iconSize="lg">
            <TimelineIcon variant="default" size="lg">
              <Activity className="size-5" />
            </TimelineIcon>
            <TimelineContent>
              <TimelineTime dateTime="2025-01-12T15:20:00">
                January 12, 2025 • 15:20
              </TimelineTime>
              <TimelineTitle>Calibration & Testing</TimelineTitle>
              <TimelineDescription>
                Sensors calibrated, movement accuracy tested, and quality
                assurance completed.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem iconSize="lg">
            <TimelineIcon variant="default" size="lg">
              <Wrench className="size-5" />
            </TimelineIcon>
            <TimelineContent>
              <TimelineTime dateTime="2025-01-10T08:00:00">
                January 10, 2025 • 08:00
              </TimelineTime>
              <TimelineTitle>Assembly Completed</TimelineTitle>
              <TimelineDescription>
                All mechanical and electrical components assembled and
                integrated.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem isLast iconSize="lg">
            <TimelineIcon variant="ghost" size="lg">
              <Package className="size-5" />
            </TimelineIcon>
            <TimelineContent>
              <TimelineTime dateTime="2025-01-05T10:00:00">
                January 5, 2025 • 10:00
              </TimelineTime>
              <TimelineTitle>Order Received</TimelineTitle>
              <TimelineDescription>
                Manufacturing order placed by Automotive Assembly Plant - Site
                B.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};

/**
 * ## Robot Status Updates
 *
 * Real-world example: Live robot operational status feed.
 */
export const RobotStatusUpdates: Story = {
  render: () => {
    return (
      <div className="w-[700px]">
        <div className="mb-6">
          <h2 className="text-xl font-bold">Robot Activity Feed</h2>
          <p className="text-muted-foreground text-sm">
            MAiRA-001 • Production Line A
          </p>
        </div>

        <Timeline>
          <TimelineItem>
            <TimelineContent>
              <TimelineTime>15 minutes ago</TimelineTime>
              <TimelineTitle className="mt-1">
                Completed batch #2847
              </TimelineTitle>
              <TimelineDescription>
                Successfully processed 50 units. Quality check: 100% passed.
                Moving to next batch.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineContent>
              <TimelineTime>1 hour ago</TimelineTime>
              <TimelineTitle className="mt-1">Maintenance cycle</TimelineTitle>
              <TimelineDescription>
                Automatic maintenance routine completed. All systems nominal.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineContent>
              <TimelineTime>3 hours ago</TimelineTime>
              <TimelineTitle className="mt-1">Tool change</TimelineTitle>
              <TimelineDescription>
                End effector replaced with precision gripper for delicate
                assembly tasks.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineContent>
              <TimelineTime>6 hours ago</TimelineTime>
              <TimelineTitle className="mt-1">Shift started</TimelineTitle>
              <TimelineDescription>
                Robot initialized and ready for production. Target: 500 units.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem isLast>
            <TimelineContent>
              <TimelineTime>Yesterday at 22:00</TimelineTime>
              <TimelineTitle className="mt-1">
                Night shift completed
              </TimelineTitle>
              <TimelineDescription>
                Previous shift ended. Total output: 480 units (96% of target).
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    );
  },
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
 * Comprehensive example demonstrating all Timeline capabilities.
 */
export const CompleteShowcase: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-12 p-8">
        {/* Simple Mode */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Simple Mode (Default)</h3>
          <p className="text-muted-foreground mb-4 text-sm">
            Perfect for activity feeds, comments, and simple chronological lists
          </p>
          <div className="w-full max-w-2xl">
            <Timeline>
              <TimelineItem>
                <TimelineContent>
                  <TimelineTime>2 hours ago</TimelineTime>
                  <TimelineTitle className="mt-1">
                    System Update Applied
                  </TimelineTitle>
                  <TimelineDescription>
                    Firmware v2.4.1 installed successfully
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineContent>
                  <TimelineTime>5 hours ago</TimelineTime>
                  <TimelineTitle className="mt-1">
                    Performance Optimized
                  </TimelineTitle>
                  <TimelineDescription>
                    Motion planning algorithms updated
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem isLast>
                <TimelineContent>
                  <TimelineTime>1 day ago</TimelineTime>
                  <TimelineTitle className="mt-1">
                    Maintenance Scheduled
                  </TimelineTitle>
                  <TimelineDescription>
                    Next service window: January 20, 2025
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>

        {/* Icon Mode with Variants */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Icon Mode with Status Variants
          </h3>
          <p className="text-muted-foreground mb-4 text-sm">
            Use icons and colors to indicate status and importance
          </p>
          <div className="w-full max-w-2xl">
            <Timeline withoutIcons={false}>
              <TimelineItem>
                <TimelineIcon variant="success">
                  <CheckCircle className="size-4" />
                </TimelineIcon>
                <TimelineContent>
                  <TimelineTime>Just now</TimelineTime>
                  <TimelineTitle>Deployment Successful</TimelineTitle>
                  <TimelineDescription>
                    MAiRA-001 is now live on Production Line A
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineIcon variant="warning">
                  <AlertTriangle className="size-4" />
                </TimelineIcon>
                <TimelineContent>
                  <TimelineTime>10 minutes ago</TimelineTime>
                  <TimelineTitle>Sensor Calibration Warning</TimelineTitle>
                  <TimelineDescription>
                    Force sensor readings slightly off - recalibration
                    recommended
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem isLast>
                <TimelineIcon variant="default">
                  <Activity className="size-4" />
                </TimelineIcon>
                <TimelineContent>
                  <TimelineTime>1 hour ago</TimelineTime>
                  <TimelineTitle>System Started</TimelineTitle>
                  <TimelineDescription>
                    All subsystems initialized and ready
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>

        {/* Card Variant */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Card Variant for Milestones
          </h3>
          <p className="text-muted-foreground mb-4 text-sm">
            Highlight important events with card-style content
          </p>
          <div className="w-full max-w-2xl">
            <Timeline withoutIcons={false}>
              <TimelineItem iconSize="lg">
                <TimelineIcon variant="success" size="lg">
                  <Zap className="size-5" />
                </TimelineIcon>
                <TimelineContent variant="card">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <TimelineTime>December 28, 2025</TimelineTime>
                      <TimelineTitle className="text-lg">
                        100,000 Operations Milestone
                      </TimelineTitle>
                      <TimelineDescription>
                        Fleet has successfully completed 100K operations with
                        99.7% success rate
                      </TimelineDescription>
                    </div>
                    <Badge variant="default">Achievement</Badge>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" variant="outline">
                      View Analytics
                    </Button>
                    <Button size="sm" variant="ghost">
                      Share Report
                    </Button>
                  </div>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem isLast iconSize="lg">
                <TimelineIcon variant="outline" size="lg">
                  <Bot className="size-5" />
                </TimelineIcon>
                <TimelineContent variant="card">
                  <div className="space-y-1">
                    <TimelineTime>December 1, 2025</TimelineTime>
                    <TimelineTitle className="text-lg">
                      Fleet Expansion
                    </TimelineTitle>
                    <TimelineDescription>
                      10 new MAiRA units deployed across 3 production lines
                    </TimelineDescription>
                  </div>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>

        {/* Line Variants */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Line Style Variants</h3>
          <p className="text-muted-foreground mb-4 text-sm">
            Different line styles for different contexts
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="mb-3 text-sm font-medium">Solid (Completed)</h4>
              <Timeline variant="default" withoutIcons={false}>
                <TimelineItem>
                  <TimelineIcon variant="success" size="sm" />
                  <TimelineContent>
                    <TimelineTitle className="text-sm">Step 1</TimelineTitle>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem isLast>
                  <TimelineIcon variant="success" size="sm" />
                  <TimelineContent>
                    <TimelineTitle className="text-sm">Step 2</TimelineTitle>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-medium">Dashed (Planned)</h4>
              <Timeline variant="dashed" withoutIcons={false}>
                <TimelineItem>
                  <TimelineIcon variant="default" size="sm" />
                  <TimelineContent>
                    <TimelineTitle className="text-sm">Step 1</TimelineTitle>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem isLast>
                  <TimelineIcon variant="ghost" size="sm" />
                  <TimelineContent>
                    <TimelineTitle className="text-sm">Step 2</TimelineTitle>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </div>
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
 * Timeline uses semantic HTML and ARIA attributes for accessibility.
 *
 * **Accessibility Features:**
 * - Uses semantic `<ol>` (ordered list) for timeline container
 * - Uses `<li>` for each timeline item
 * - Uses `<time>` element with datetime attribute for timestamps
 * - Proper heading hierarchy for titles
 * - Descriptive text for all events
 * - ARIA attributes for hidden decorative elements
 *
 * **Best Practices:**
 * - Always provide meaningful TimelineTitle for each event
 * - Use TimelineTime with proper datetime attribute
 * - Provide context in TimelineDescription
 * - Ensure sufficient color contrast for icons and text
 * - Test with screen readers
 */
export const Accessibility: Story = {
  render: () => {
    return (
      <div className="w-[700px]">
        <div className="bg-muted/50 mb-6 rounded-lg p-4">
          <h3 className="mb-2 text-sm font-semibold">
            ♿ Accessibility Features
          </h3>
          <ul className="text-muted-foreground space-y-1 text-xs">
            <li>✓ Semantic HTML (ol, li, time elements)</li>
            <li>✓ Proper datetime attributes for timestamps</li>
            <li>✓ Descriptive text for all events</li>
            <li>✓ ARIA labels for decorative elements</li>
            <li>✓ Keyboard navigable (when interactive)</li>
            <li>✓ Screen reader friendly structure</li>
          </ul>
        </div>

        <Timeline>
          <TimelineItem>
            <TimelineContent>
              <TimelineTime dateTime="2025-01-15T14:30:00">
                January 15, 2025 at 2:30 PM
              </TimelineTime>
              <TimelineTitle className="mt-1">
                Robot Deployment Completed
              </TimelineTitle>
              <TimelineDescription>
                MAiRA-001 has been successfully deployed to Production Line A.
                All systems are operational and the robot is ready to begin
                production tasks.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineContent>
              <TimelineTime dateTime="2025-01-15T09:00:00">
                January 15, 2025 at 9:00 AM
              </TimelineTime>
              <TimelineTitle className="mt-1">
                Safety Testing Passed
              </TimelineTitle>
              <TimelineDescription>
                All safety protocols have been verified and approved. The robot
                meets all regulatory requirements for operation in the
                production environment.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem isLast>
            <TimelineContent>
              <TimelineTime dateTime="2025-01-14T08:00:00">
                January 14, 2025 at 8:00 AM
              </TimelineTime>
              <TimelineTitle className="mt-1">
                Initial Registration
              </TimelineTitle>
              <TimelineDescription>
                New robot unit MAiRA-001 has been registered in the fleet
                management system and assigned to Production Line A.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};
