import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from './avatar';
import { Badge } from '@/components/badge/badge';
import { User, Crown, Shield, Star } from 'lucide-react';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default with Image
export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

// With Fallback (no image)
export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="/broken-image.jpg" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

// With Icon Fallback
export const WithIconFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="/broken-image.jpg" alt="User" />
      <AvatarFallback>
        <User className="size-4" />
      </AvatarFallback>
    </Avatar>
  ),
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="size-6">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="text-xs">CN</AvatarFallback>
      </Avatar>
      <Avatar className="size-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="size-10">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="size-12">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="size-16">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="text-lg">CN</AvatarFallback>
      </Avatar>
      <Avatar className="size-20">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="text-xl">CN</AvatarFallback>
      </Avatar>
    </div>
  ),
};

// With Status Indicator
export const WithStatusIndicator: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="relative">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="border-background absolute right-0 bottom-0 size-2.5 rounded-full border-2 bg-green-500" />
      </div>
      <div className="relative">
        <Avatar>
          <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
        <span className="border-background absolute right-0 bottom-0 size-2.5 rounded-full border-2 bg-yellow-500" />
      </div>
      <div className="relative">
        <Avatar>
          <AvatarImage src="https://github.com/github.png" alt="@github" />
          <AvatarFallback>GH</AvatarFallback>
        </Avatar>
        <span className="border-background absolute right-0 bottom-0 size-2.5 rounded-full border-2 bg-red-500" />
      </div>
      <div className="relative">
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <span className="border-background absolute right-0 bottom-0 size-2.5 rounded-full border-2 bg-gray-400" />
      </div>
    </div>
  ),
};

// Avatar Group / Stack
export const AvatarGroup: Story = {
  render: () => (
    <div className="flex -space-x-3">
      <Avatar className="border-background border-2">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="border-background border-2">
        <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <Avatar className="border-background border-2">
        <AvatarImage src="https://github.com/github.png" alt="@github" />
        <AvatarFallback>GH</AvatarFallback>
      </Avatar>
      <Avatar className="border-background border-2">
        <AvatarFallback>+3</AvatarFallback>
      </Avatar>
    </div>
  ),
};

// With Name and Email
export const WithUserInfo: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-sm font-medium">shadcn</span>
        <span className="text-muted-foreground text-xs">m@example.com</span>
      </div>
    </div>
  ),
};

// Colored Fallbacks
export const ColoredFallbacks: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback className="bg-red-500 text-white">AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-blue-500 text-white">CD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-green-500 text-white">EF</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-purple-500 text-white">GH</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-orange-500 text-white">IJ</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-pink-500 text-white">KL</AvatarFallback>
      </Avatar>
    </div>
  ),
};

// Square Avatars
export const SquareAvatars: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="rounded-md">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="rounded-md">CN</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-lg">
        <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
        <AvatarFallback className="rounded-lg">VC</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-none">
        <AvatarImage src="https://github.com/github.png" alt="@github" />
        <AvatarFallback className="rounded-none">GH</AvatarFallback>
      </Avatar>
    </div>
  ),
};

// With Ring/Border
export const WithRing: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Avatar className="ring-primary ring-offset-background ring-2 ring-offset-2">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="ring-offset-background ring-2 ring-green-500 ring-offset-2">
        <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <Avatar className="ring-destructive ring-offset-background ring-2 ring-offset-2">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  ),
};

// With Badge - Showing how Avatar and Badge components complement each other
export const WithBadge: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {/* Notification Badge */}
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm font-medium">
          Notification Badge
        </p>
        <div className="flex items-center gap-6">
          <div className="relative">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Badge className="absolute -top-1 -right-1 size-5 justify-center p-0 text-xs">
              3
            </Badge>
          </div>
          <div className="relative">
            <Avatar className="size-10">
              <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 size-5 justify-center p-0 text-xs"
            >
              9+
            </Badge>
          </div>
        </div>
      </div>

      {/* Role Badge */}
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm font-medium">Role Badge</p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">shadcn</span>
              <Badge variant="secondary" className="w-fit text-xs">
                <Crown className="size-3" />
                Admin
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-blue-500 text-white">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">John Doe</span>
              <Badge variant="outline" className="w-fit text-xs">
                <Shield className="size-3" />
                Moderator
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Status with Badge */}
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm font-medium">
          Status with Badge
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Avatar className="size-6">
              <AvatarFallback className="bg-green-500 text-xs text-white">
                A
              </AvatarFallback>
            </Avatar>
            <Badge
              variant="outline"
              className="border-green-500 text-green-500"
            >
              Active
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Avatar className="size-6">
              <AvatarFallback className="bg-yellow-500 text-xs text-white">
                P
              </AvatarFallback>
            </Avatar>
            <Badge
              variant="outline"
              className="border-yellow-500 text-yellow-500"
            >
              Pending
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Avatar className="size-6">
              <AvatarFallback className="bg-gray-400 text-xs text-white">
                I
              </AvatarFallback>
            </Avatar>
            <Badge variant="outline" className="border-gray-400 text-gray-400">
              Inactive
            </Badge>
          </div>
        </div>
      </div>

      {/* Premium User */}
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm font-medium">Premium User</p>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar className="ring-offset-background size-12 ring-2 ring-yellow-500 ring-offset-2">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Badge className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-yellow-500 text-xs hover:bg-yellow-500">
              <Star className="size-3" />
              PRO
            </Badge>
          </div>
          <div className="flex flex-col">
            <span className="font-medium">shadcn</span>
            <span className="text-muted-foreground text-sm">
              Premium member since 2024
            </span>
          </div>
        </div>
      </div>
    </div>
  ),
};

// User List
export const UserList: Story = {
  render: () => (
    <div className="w-72 space-y-3">
      {[
        {
          name: 'John Doe',
          email: 'john@example.com',
          initials: 'JD',
          status: 'online',
        },
        {
          name: 'Jane Smith',
          email: 'jane@example.com',
          initials: 'JS',
          status: 'away',
        },
        {
          name: 'Bob Johnson',
          email: 'bob@example.com',
          initials: 'BJ',
          status: 'offline',
        },
      ].map((user) => (
        <div
          key={user.email}
          className="hover:bg-muted flex items-center gap-3 rounded-lg p-2 transition-colors"
        >
          <div className="relative">
            <Avatar>
              <AvatarFallback>{user.initials}</AvatarFallback>
            </Avatar>
            <span
              className={`border-background absolute right-0 bottom-0 size-2.5 rounded-full border-2 ${
                user.status === 'online'
                  ? 'bg-green-500'
                  : user.status === 'away'
                    ? 'bg-yellow-500'
                    : 'bg-gray-400'
              }`}
            />
          </div>
          <div className="flex flex-1 flex-col">
            <span className="text-sm font-medium">{user.name}</span>
            <span className="text-muted-foreground text-xs">{user.email}</span>
          </div>
        </div>
      ))}
    </div>
  ),
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Default Sizes</h3>
        <div className="flex items-center gap-4">
          <Avatar className="size-6">
            <AvatarFallback className="text-xs">XS</AvatarFallback>
          </Avatar>
          <Avatar className="size-8">
            <AvatarFallback className="text-xs">SM</AvatarFallback>
          </Avatar>
          <Avatar className="size-10">
            <AvatarFallback className="text-sm">MD</AvatarFallback>
          </Avatar>
          <Avatar className="size-12">
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
          <Avatar className="size-16">
            <AvatarFallback className="text-lg">XL</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Shapes</h3>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback>RD</AvatarFallback>
          </Avatar>
          <Avatar className="rounded-lg">
            <AvatarFallback className="rounded-lg">LG</AvatarFallback>
          </Avatar>
          <Avatar className="rounded-md">
            <AvatarFallback className="rounded-md">MD</AvatarFallback>
          </Avatar>
          <Avatar className="rounded-sm">
            <AvatarFallback className="rounded-sm">SM</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">With Images</h3>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/github.png" alt="@github" />
            <AvatarFallback>GH</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Stacked Group</h3>
        <div className="flex -space-x-3">
          <Avatar className="border-background border-2">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="border-background border-2">
            <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <Avatar className="border-background border-2">
            <AvatarFallback>+5</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
