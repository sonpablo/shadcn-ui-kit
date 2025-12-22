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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar/avatar';
import {
  MoreHorizontal,
  Bell,
  CreditCard,
  Settings,
  Users,
  Activity,
  ArrowUpRight,
  Star,
  Heart,
  Share2,
  Bookmark,
} from 'lucide-react';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

// Default
export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content of the card.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

// With Action Button
export const WithAction: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
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
  ),
};

// Simple Card
export const Simple: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent className="pt-6">
        <p>A simple card with just content, no header or footer.</p>
      </CardContent>
    </Card>
  ),
};

// Login Form
export const LoginForm: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your credentials to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
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
  ),
};

// Stats Card
export const StatsCard: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <CreditCard className="text-muted-foreground size-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-muted-foreground text-xs">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
          <Users className="text-muted-foreground size-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+2,350</div>
          <p className="text-muted-foreground text-xs">
            +180.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Active Now</CardTitle>
          <Activity className="text-muted-foreground size-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+573</div>
          <p className="text-muted-foreground text-xs">+201 since last hour</p>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Notification Card
export const NotificationCard: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            Mark all as read
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-4">
        {[
          {
            title: 'Your call has been confirmed.',
            description: '1 hour ago',
          },
          {
            title: 'You have a new message!',
            description: '2 hours ago',
          },
          {
            title: 'Your subscription is expiring soon!',
            description: '3 hours ago',
          },
        ].map((notification, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-md border p-3"
          >
            <Bell className="text-primary mt-0.5 size-4" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {notification.title}
              </p>
              <p className="text-muted-foreground text-sm">
                {notification.description}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <Settings className="mr-2 size-4" />
          Notification settings
        </Button>
      </CardFooter>
    </Card>
  ),
};

// Profile Card
export const ProfileCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader className="items-center text-center">
        <Avatar className="size-20">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <CardTitle className="mt-4">Sofia Davis</CardTitle>
        <CardDescription>Product Designer at Acme Inc.</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <div className="flex justify-center gap-6">
          <div>
            <div className="text-2xl font-bold">142</div>
            <p className="text-muted-foreground text-xs">Posts</p>
          </div>
          <div>
            <div className="text-2xl font-bold">12.5K</div>
            <p className="text-muted-foreground text-xs">Followers</p>
          </div>
          <div>
            <div className="text-2xl font-bold">890</div>
            <p className="text-muted-foreground text-xs">Following</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-center gap-2">
        <Button>Follow</Button>
        <Button variant="outline">Message</Button>
      </CardFooter>
    </Card>
  ),
};

// Blog Post Card
export const BlogPostCard: Story = {
  render: () => (
    <Card className="w-[400px] overflow-hidden">
      <div className="bg-gradient-to-br from-violet-500 to-purple-600 h-48" />
      <CardHeader>
        <div className="flex gap-2">
          <Badge variant="secondary">Design</Badge>
          <Badge variant="secondary">Tutorial</Badge>
        </div>
        <CardTitle className="mt-2">
          Getting Started with Modern UI Design
        </CardTitle>
        <CardDescription>
          Learn the fundamentals of creating beautiful user interfaces.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-3">
          <Avatar className="size-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-muted-foreground text-xs">Dec 22, 2025</p>
          </div>
          <Button variant="ghost" size="sm">
            Read more
            <ArrowUpRight className="ml-1 size-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  ),
};

// Product Card
export const ProductCard: Story = {
  render: () => (
    <Card className="w-[300px] overflow-hidden">
      <div className="bg-muted relative h-48">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Product Image</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm"
        >
          <Heart className="size-4" />
        </Button>
      </div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-base">Wireless Headphones</CardTitle>
            <CardDescription>Premium sound quality</CardDescription>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Star className="size-4 fill-yellow-400 text-yellow-400" />
            <span>4.8</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">$299</span>
          <span className="text-muted-foreground text-sm line-through">
            $349
          </span>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="flex-1">Add to Cart</Button>
        <Button variant="outline" size="icon">
          <Share2 className="size-4" />
        </Button>
      </CardFooter>
    </Card>
  ),
};

// Team Member Card
export const TeamMemberCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader className="flex-row items-center gap-4">
        <Avatar className="size-14">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>AK</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <CardTitle>Alex Kim</CardTitle>
          <CardDescription>Senior Developer</CardDescription>
        </div>
        <CardAction>
          <Badge>Admin</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">
          Full-stack developer with 8+ years of experience in building scalable
          web applications.
        </p>
        <div className="mt-4 flex gap-2">
          <Badge variant="outline">React</Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">Node.js</Badge>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline" size="sm">
          View Profile
        </Button>
        <Button size="sm">Contact</Button>
      </CardFooter>
    </Card>
  ),
};

// Feature Card
export const FeatureCard: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-3">
      {[
        {
          icon: Bell,
          title: 'Smart Notifications',
          description:
            'Get notified about important updates instantly on any device.',
        },
        {
          icon: Settings,
          title: 'Customizable',
          description:
            'Tailor everything to your needs with extensive settings.',
        },
        {
          icon: Users,
          title: 'Team Collaboration',
          description:
            'Work together seamlessly with real-time collaboration tools.',
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
  ),
  parameters: {
    layout: 'padded',
  },
};

// With Borders
export const WithBorders: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader className="border-b">
        <CardTitle>Settings</CardTitle>
        <CardDescription>Manage your account preferences.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Email notifications</p>
              <p className="text-muted-foreground text-sm">
                Receive emails about activity
              </p>
            </div>
            <Button variant="outline" size="sm">
              Configure
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Two-factor auth</p>
              <p className="text-muted-foreground text-sm">
                Add an extra layer of security
              </p>
            </div>
            <Button variant="outline" size="sm">
              Enable
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t">
        <Button variant="outline" className="w-full">
          <Bookmark className="mr-2 size-4" />
          Save preferences
        </Button>
      </CardFooter>
    </Card>
  ),
};

