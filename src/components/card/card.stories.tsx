import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from './card';
import { Button } from '@/components/button/button';
import { Input } from '@/components/input/input';
import { Label } from '@/components/label/label';
import { Badge } from '@/components/badge/badge';
import { Avatar, AvatarFallback } from '@/components/avatar/avatar';
import {
  MoreHorizontal,
  Bell,
  Settings,
  Activity,
  Bot,
  Zap,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  Calendar,
  MapPin,
  User,
} from 'lucide-react';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A flexible card component for containing content and actions.

## Features
- Composable parts (Header, Content, Footer, Action)
- Action button placement in header
- Border variants
- Flexible layout options

## Common Use Cases
- Content containers
- Forms
- Stats/metrics displays
- Profile cards
- Feature highlights
- Robot/fleet status cards

## Composition
- **Card**: Container component
- **CardHeader**: Header with title, description, and optional action
- **CardTitle**: Main title text
- **CardDescription**: Secondary description text
- **CardAction**: Action button placement (top-right of header)
- **CardContent**: Main content area
- **CardFooter**: Footer for actions or additional info
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

// =============================================================================
// BASIC EXAMPLES
// =============================================================================

/**
 * ## Default
 *
 * Basic card variants with different combinations of header, content, and footer.
 */
export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Full Card (Header + Content + Footer)
        </h4>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Robot Status</CardTitle>
            <CardDescription>Current operational status.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">All systems operational.</p>
          </CardContent>
          <CardFooter>
            <Button>View Details</Button>
          </CardFooter>
        </Card>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Simple Card (Content Only)
        </h4>
        <Card className="w-[350px]">
          <CardContent className="pt-6">
            <p className="text-sm">
              A simple card with just content, no header or footer.
            </p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          With Action Button
        </h4>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread alerts.</CardDescription>
            <CardAction>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="size-4" />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Check your inbox for new updates.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// COMPOSITION
// =============================================================================

/**
 * ## Composition
 *
 * Understanding card parts and how to compose them.
 */
export const Composition: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="mb-2 text-sm font-semibold">Card Anatomy</h4>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>
            • <strong>CardHeader</strong>: Contains title, description, and
            optional action
          </li>
          <li>
            • <strong>CardTitle</strong>: Main heading
          </li>
          <li>
            • <strong>CardDescription</strong>: Secondary text
          </li>
          <li>
            • <strong>CardAction</strong>: Action button (top-right of header)
          </li>
          <li>
            • <strong>CardContent</strong>: Main content area
          </li>
          <li>
            • <strong>CardFooter</strong>: Actions or additional info
          </li>
        </ul>
      </div>

      <Card className="w-[350px]">
        <CardHeader className="border-b">
          <CardTitle>Card Composition</CardTitle>
          <CardDescription>
            This card demonstrates all available parts.
          </CardDescription>
          <CardAction>
            <Button variant="ghost" size="icon">
              <Settings className="size-4" />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-sm">
            The content area is flexible and can contain any elements.
          </p>
        </CardContent>
        <CardFooter className="border-t">
          <Button variant="outline" className="w-full">
            Footer Action
          </Button>
        </CardFooter>
      </Card>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use <code>border-b</code> on CardHeader and{' '}
        <code>border-t</code> on CardFooter for visual separation.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// FORMS
// =============================================================================

/**
 * ## Forms
 *
 * Cards as form containers for authentication or data entry.
 */
export const Forms: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6 p-4">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Operator Login</CardTitle>
          <CardDescription>
            Enter your credentials to access the system.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="operator@neura.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button className="w-full">Sign In</Button>
          <Button variant="link" className="text-sm">
            Forgot password?
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Robot Configuration</CardTitle>
          <CardDescription>Configure robot settings.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="robot-id">Robot ID</Label>
            <Input id="robot-id" placeholder="MAiRA-001" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="Munich Plant A" />
          </div>
        </CardContent>
        <CardFooter className="justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// STATS & METRICS
// =============================================================================

/**
 * ## Stats & Metrics
 *
 * Cards for displaying key metrics and statistics.
 */
export const StatsAndMetrics: Story = {
  render: () => (
    <div className="grid gap-4 p-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Active Robots</CardTitle>
          <Bot className="text-muted-foreground size-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24</div>
          <p className="text-muted-foreground flex items-center gap-1 text-xs">
            <TrendingUp className="size-3 text-green-500" />
            <span className="text-green-500">+12.5%</span> from last week
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
          <CheckCircle2 className="text-muted-foreground size-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,834</div>
          <p className="text-muted-foreground flex items-center gap-1 text-xs">
            <TrendingUp className="size-3 text-green-500" />
            <span className="text-green-500">+8.2%</span> from last week
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">System Alerts</CardTitle>
          <AlertCircle className="text-muted-foreground size-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">5</div>
          <p className="text-muted-foreground flex items-center gap-1 text-xs">
            <TrendingDown className="size-3 text-red-500" />
            <span className="text-red-500">-20%</span> from last week
          </p>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Fleet Performance</CardTitle>
          <CardDescription>Overview of robot fleet activity</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="text-muted-foreground size-4" />
              <span className="text-sm">Uptime</span>
            </div>
            <span className="text-sm font-medium">99.8%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="text-muted-foreground size-4" />
              <span className="text-sm">Efficiency</span>
            </div>
            <span className="text-sm font-medium">94.2%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-muted-foreground size-4" />
              <span className="text-sm">Success Rate</span>
            </div>
            <span className="text-sm font-medium">96.5%</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Bot className="mr-2 size-4" />
            Deploy Robot
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Calendar className="mr-2 size-4" />
            Schedule Task
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Settings className="mr-2 size-4" />
            Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// CONTENT CARDS
// =============================================================================

/**
 * ## Content Cards
 *
 * Cards for displaying rich content like articles, features, or updates.
 */
export const ContentCards: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6 p-4">
      {/* Feature Card */}
      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            icon: Bell,
            title: 'Smart Notifications',
            description: 'Get notified about robot status changes instantly.',
          },
          {
            icon: Settings,
            title: 'Customizable',
            description: 'Tailor fleet settings to your specific needs.',
          },
          {
            icon: Activity,
            title: 'Real-time Monitoring',
            description: 'Monitor robot performance with live updates.',
          },
        ].map((feature, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <div className="bg-primary/10 text-primary mx-auto mb-2 flex size-12 items-center justify-center rounded-lg">
                <feature.icon className="size-6" />
              </div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Update Card */}
      <Card className="w-[400px] overflow-hidden">
        <div className="h-32 bg-linear-to-br from-blue-500 to-purple-600" />
        <CardHeader>
          <div className="flex gap-2">
            <Badge variant="secondary">Update</Badge>
            <Badge variant="secondary">v2.5.0</Badge>
          </div>
          <CardTitle className="mt-2">New Fleet Management Features</CardTitle>
          <CardDescription>
            Introducing advanced scheduling and multi-site support.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3">
            <Avatar className="size-8">
              <AvatarFallback className="bg-blue-500 text-white">
                NR
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium">Neura Robotics</p>
              <p className="text-muted-foreground text-xs">Dec 22, 2025</p>
            </div>
            <Button variant="ghost" size="sm">
              Learn more
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// PROFILE & TEAM
// =============================================================================

/**
 * ## Profile & Team
 *
 * Cards for displaying user profiles, team members, and notifications.
 */
export const ProfileAndTeam: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6 p-4">
      {/* Profile Card */}
      <Card className="w-[350px]">
        <CardHeader className="items-center text-center">
          <Avatar className="size-20">
            <AvatarFallback className="bg-blue-500 text-lg text-white">
              JD
            </AvatarFallback>
          </Avatar>
          <CardTitle className="mt-4">John Doe</CardTitle>
          <CardDescription>Fleet Operator at Neura Robotics</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="flex justify-center gap-6">
            <div>
              <div className="text-2xl font-bold">12</div>
              <p className="text-muted-foreground text-xs">Robots</p>
            </div>
            <div>
              <div className="text-2xl font-bold">342</div>
              <p className="text-muted-foreground text-xs">Tasks</p>
            </div>
            <div>
              <div className="text-2xl font-bold">98.5%</div>
              <p className="text-muted-foreground text-xs">Success</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-center gap-2">
          <Button>View Profile</Button>
          <Button variant="outline">Contact</Button>
        </CardFooter>
      </Card>

      {/* Team Member Card */}
      <Card className="w-[350px]">
        <CardHeader className="flex-row items-center gap-4">
          <Avatar className="size-14">
            <AvatarFallback className="bg-green-500 text-white">
              SM
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle>Sarah Miller</CardTitle>
            <CardDescription>Senior Operator</CardDescription>
          </div>
          <CardAction>
            <Badge>Lead</Badge>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            Specialist in robotic fleet management with 6+ years of experience.
          </p>
          <div className="mt-4 flex gap-2">
            <Badge variant="outline">MAiRA</Badge>
            <Badge variant="outline">LARA</Badge>
            <Badge variant="outline">4NE1</Badge>
          </div>
        </CardContent>
        <CardFooter className="justify-between">
          <Button variant="outline" size="sm">
            View Profile
          </Button>
          <Button size="sm">Assign Task</Button>
        </CardFooter>
      </Card>

      {/* Notification Card */}
      <Card className="w-[380px]">
        <CardHeader>
          <CardTitle>System Alerts</CardTitle>
          <CardDescription>You have 3 unread notifications.</CardDescription>
          <CardAction>
            <Button variant="outline" size="sm">
              Mark all read
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="grid gap-3">
          {[
            {
              title: 'Robot MAiRA-001 maintenance scheduled',
              description: '30 minutes ago',
              icon: Calendar,
            },
            {
              title: 'Task completed successfully',
              description: '1 hour ago',
              icon: CheckCircle2,
            },
            {
              title: 'Low battery alert - LARA-003',
              description: '2 hours ago',
              icon: AlertCircle,
            },
          ].map((notification, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-md border p-3"
            >
              <notification.icon className="text-primary mt-0.5 size-4" />
              <div className="space-y-1">
                <p className="text-sm leading-none font-medium">
                  {notification.title}
                </p>
                <p className="text-muted-foreground text-xs">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            <Bell className="mr-2 size-4" />
            Notification settings
          </Button>
        </CardFooter>
      </Card>
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
 * Real-world example: Robot fleet dashboard with various card types.
 */
export const CompleteShowcase: Story = {
  render: () => (
    <div className="w-full max-w-6xl space-y-6 p-6">
      <div>
        <h3 className="mb-2 text-2xl font-semibold">Robot Fleet Dashboard</h3>
        <p className="text-muted-foreground text-sm">
          Comprehensive overview of your robotic fleet operations
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Robots</CardTitle>
            <Bot className="text-muted-foreground size-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-muted-foreground text-xs">+2 since last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tasks Today</CardTitle>
            <Activity className="text-muted-foreground size-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-muted-foreground text-xs">+12% from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Efficiency</CardTitle>
            <Zap className="text-muted-foreground size-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-muted-foreground text-xs">Target: 90%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Alerts</CardTitle>
            <AlertCircle className="text-muted-foreground size-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-muted-foreground text-xs">2 require attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Row */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Robot Status */}
        <Card>
          <CardHeader>
            <CardTitle>Robot Status</CardTitle>
            <CardDescription>Real-time fleet overview</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { id: 'MAiRA-001', location: 'Munich Plant A', status: 'active' },
              {
                id: 'LARA-003',
                location: 'Stuttgart Factory',
                status: 'active',
              },
              {
                id: '4NE1-002',
                location: 'Berlin Warehouse',
                status: 'maintenance',
              },
            ].map((robot) => (
              <div
                key={robot.id}
                className="flex items-center justify-between rounded-lg border p-3"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="size-10">
                    <AvatarFallback className="bg-blue-500 text-xs text-white">
                      <Bot className="size-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{robot.id}</p>
                    <p className="text-muted-foreground flex items-center gap-1 text-xs">
                      <MapPin className="size-3" />
                      {robot.location}
                    </p>
                  </div>
                </div>
                <Badge
                  variant={robot.status === 'active' ? 'default' : 'secondary'}
                >
                  {robot.status}
                </Badge>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Robots
            </Button>
          </CardFooter>
        </Card>

        {/* Operators */}
        <Card>
          <CardHeader>
            <CardTitle>Active Operators</CardTitle>
            <CardDescription>Currently managing fleet</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              {
                name: 'John Doe',
                role: 'Lead Operator',
                robots: 5,
                initials: 'JD',
                color: 'bg-blue-500',
              },
              {
                name: 'Sarah Miller',
                role: 'Senior Operator',
                robots: 4,
                initials: 'SM',
                color: 'bg-green-500',
              },
              {
                name: 'Robert Wilson',
                role: 'Operator',
                robots: 3,
                initials: 'RW',
                color: 'bg-purple-500',
              },
            ].map((operator) => (
              <div
                key={operator.name}
                className="flex items-center justify-between rounded-lg border p-3"
              >
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className={`${operator.color} text-white`}>
                      {operator.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{operator.name}</p>
                    <p className="text-muted-foreground text-xs">
                      {operator.role}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{operator.robots}</p>
                  <p className="text-muted-foreground text-xs">robots</p>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <User className="mr-2 size-4" />
              Manage Team
            </Button>
          </CardFooter>
        </Card>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 This dashboard showcases various card patterns for a robot fleet
        management system.
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
 * Cards should follow accessibility best practices for keyboard navigation
 * and screen readers.
 */
export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="mb-2 text-sm font-semibold">Accessibility Features</h4>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>
            ✓ <strong>Semantic HTML</strong>: Cards use proper heading hierarchy
          </li>
          <li>
            ✓ <strong>Keyboard navigation</strong>: Interactive elements are
            keyboard accessible
          </li>
          <li>
            ✓ <strong>Focus indicators</strong>: Clear focus states on buttons
          </li>
          <li>
            ✓ <strong>Color contrast</strong>: Text meets WCAG AA standards
          </li>
          <li>
            ✓ <strong>Labels</strong>: All form inputs have associated labels
          </li>
          <li>
            ✓ <strong>ARIA attributes</strong>: Use when native semantics aren't
            enough
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-6">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Accessible Form</CardTitle>
            <CardDescription>
              All inputs have proper labels and associations.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="robot-name">Robot Name</Label>
              <Input id="robot-name" placeholder="Enter robot name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="Enter location" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Submit</Button>
          </CardFooter>
        </Card>

        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Keyboard Navigation</CardTitle>
            <CardDescription>
              Test with Tab, Shift+Tab, Enter, and Space keys.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full">
              Button 1
            </Button>
            <Button variant="outline" className="w-full">
              Button 2
            </Button>
            <Button variant="outline" className="w-full">
              Button 3
            </Button>
          </CardContent>
        </Card>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Always use proper heading hierarchy (CardTitle
        uses h3 by default), provide labels for inputs, and ensure all
        interactive elements are keyboard accessible.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Accessibility Best Practices

**Heading Hierarchy:**
\`\`\`tsx
<Card>
  <CardHeader>
    <CardTitle>Heading Level 3 (h3)</CardTitle>
    <CardDescription>Supporting text</CardDescription>
  </CardHeader>
</Card>
\`\`\`

**Form Labels:**
\`\`\`tsx
<CardContent>
  <Label htmlFor="input-id">Label Text</Label>
  <Input id="input-id" />
</CardContent>
\`\`\`

**Keyboard Navigation:**
- Ensure all interactive elements (buttons, inputs) are reachable via Tab
- Provide clear focus indicators
- Use Enter/Space to activate buttons

**Testing:**
- Test with keyboard only (Tab, Shift+Tab, Enter, Space)
- Verify screen reader announces titles and descriptions
- Check color contrast for text (WCAG AA: 4.5:1 minimum)
- Test with high contrast mode enabled
        `,
      },
    },
  },
};
