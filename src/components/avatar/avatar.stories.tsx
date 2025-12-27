import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from './avatar';
import { Badge } from '@/components/badge/badge';
import { User, Bot, Settings, Zap, Shield, AlertCircle } from 'lucide-react';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
An avatar component for displaying user profile images with fallback support.

## Features
- Image loading with automatic fallback
- Text-based initials fallback
- Icon fallback support
- Multiple sizes (6, 8, 10, 12, 16, 20)
- Shape variants (circle, rounded, square)
- Status indicators
- Avatar groups/stacks
- Ring/border styling
- Colored backgrounds

## Common Use Cases
- User profiles
- Team member lists
- Comment sections
- Chat interfaces
- Operator/robot assignments
- Status displays

## Composition
- **Avatar**: Container component
- **AvatarImage**: Image element with loading support
- **AvatarFallback**: Fallback content (initials, icon)
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// BASIC EXAMPLES
// =============================================================================

/**
 * ## Default
 *
 * Basic avatar with image and fallback initials.
 */
export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback>OP</AvatarFallback>
      </Avatar>

      <Avatar>
        <AvatarImage src="/broken-image.jpg" alt="User" />
        <AvatarFallback>RO</AvatarFallback>
      </Avatar>

      <Avatar>
        <AvatarImage src="/broken-image.jpg" alt="User" />
        <AvatarFallback>
          <User className="size-4" />
        </AvatarFallback>
      </Avatar>
    </div>
  ),
};

// =============================================================================
// SIZES & VARIANTS
// =============================================================================

/**
 * ## Sizes & Variants
 *
 * Avatars in different sizes and shapes.
 */
export const SizesAndVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Sizes
        </h4>
        <div className="flex items-center gap-4">
          <Avatar className="size-6">
            <AvatarFallback className="text-xs">XS</AvatarFallback>
          </Avatar>
          <Avatar className="size-8">
            <AvatarFallback className="text-xs">S</AvatarFallback>
          </Avatar>
          <Avatar className="size-10">
            <AvatarFallback className="text-sm">M</AvatarFallback>
          </Avatar>
          <Avatar className="size-12">
            <AvatarFallback>L</AvatarFallback>
          </Avatar>
          <Avatar className="size-16">
            <AvatarFallback className="text-lg">XL</AvatarFallback>
          </Avatar>
          <Avatar className="size-20">
            <AvatarFallback className="text-xl">2X</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Shapes (Circle, Rounded, Square)
        </h4>
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
          <Avatar className="rounded-none">
            <AvatarFallback className="rounded-none">SQ</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          With Images
        </h4>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>OP</AvatarFallback>
          </Avatar>
          <Avatar className="size-12">
            <AvatarImage src="https://github.com/vercel.png" alt="Team" />
            <AvatarFallback>TM</AvatarFallback>
          </Avatar>
          <Avatar className="size-16">
            <AvatarImage src="https://github.com/github.png" alt="Org" />
            <AvatarFallback className="text-lg">OR</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use Tailwind size utilities (size-8, size-12,
        etc.) to control avatar dimensions. Adjust fallback text size for larger
        avatars.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// FEATURES
// =============================================================================

/**
 * ## Features
 *
 * Avatars with status indicators, rings, and colored backgrounds.
 */
export const Features: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Status Indicators
        </h4>
        <div className="flex items-center gap-6">
          <div className="relative">
            <Avatar>
              <AvatarFallback className="bg-green-500 text-white">
                OP1
              </AvatarFallback>
            </Avatar>
            <span className="border-background absolute right-0 bottom-0 size-2.5 rounded-full border-2 bg-green-500" />
          </div>
          <div className="relative">
            <Avatar>
              <AvatarFallback className="bg-yellow-500 text-white">
                OP2
              </AvatarFallback>
            </Avatar>
            <span className="border-background absolute right-0 bottom-0 size-2.5 rounded-full border-2 bg-yellow-500" />
          </div>
          <div className="relative">
            <Avatar>
              <AvatarFallback className="bg-red-500 text-white">
                OP3
              </AvatarFallback>
            </Avatar>
            <span className="border-background absolute right-0 bottom-0 size-2.5 rounded-full border-2 bg-red-500" />
          </div>
          <div className="relative">
            <Avatar>
              <AvatarFallback className="bg-gray-400 text-white">
                OP4
              </AvatarFallback>
            </Avatar>
            <span className="border-background absolute right-0 bottom-0 size-2.5 rounded-full border-2 bg-gray-400" />
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          With Ring/Border
        </h4>
        <div className="flex items-center gap-6">
          <Avatar className="ring-primary ring-offset-background ring-2 ring-offset-2">
            <AvatarFallback>PR</AvatarFallback>
          </Avatar>
          <Avatar className="ring-offset-background ring-2 ring-green-500 ring-offset-2">
            <AvatarFallback className="bg-green-500 text-white">
              AC
            </AvatarFallback>
          </Avatar>
          <Avatar className="ring-destructive ring-offset-background ring-2 ring-offset-2">
            <AvatarFallback className="bg-red-500 text-white">
              ER
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Colored Backgrounds
        </h4>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback className="bg-red-500 text-white">
              R1
            </AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback className="bg-blue-500 text-white">
              R2
            </AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback className="bg-green-500 text-white">
              R3
            </AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback className="bg-purple-500 text-white">
              R4
            </AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback className="bg-orange-500 text-white">
              R5
            </AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback className="bg-pink-500 text-white">
              R6
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use status dots for online/offline state, rings
        for emphasis or roles, and colored backgrounds to distinguish
        users/robots.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Feature Patterns

**Status Indicator:**
\`\`\`tsx
<div className="relative">
  <Avatar>
    <AvatarFallback>OP</AvatarFallback>
  </Avatar>
  <span className="absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-background bg-green-500" />
</div>
\`\`\`

**Ring/Border:**
\`\`\`tsx
<Avatar className="ring-2 ring-primary ring-offset-2 ring-offset-background">
  {/* content */}
</Avatar>
\`\`\`

**Colored Background:**
\`\`\`tsx
<AvatarFallback className="bg-blue-500 text-white">
  AB
</AvatarFallback>
\`\`\`
        `,
      },
    },
  },
};

// =============================================================================
// AVATAR GROUP
// =============================================================================

/**
 * ## Avatar Group
 *
 * Stacked avatars to show multiple users or team members.
 */
export const AvatarGroup: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Basic Group
        </h4>
        <div className="flex -space-x-3">
          <Avatar className="border-background border-2">
            <AvatarFallback className="bg-blue-500 text-white">
              OP1
            </AvatarFallback>
          </Avatar>
          <Avatar className="border-background border-2">
            <AvatarFallback className="bg-green-500 text-white">
              OP2
            </AvatarFallback>
          </Avatar>
          <Avatar className="border-background border-2">
            <AvatarFallback className="bg-purple-500 text-white">
              OP3
            </AvatarFallback>
          </Avatar>
          <Avatar className="border-background border-2">
            <AvatarFallback>+5</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          With Images
        </h4>
        <div className="flex -space-x-3">
          <Avatar className="border-background border-2">
            <AvatarImage src="https://github.com/shadcn.png" alt="Operator 1" />
            <AvatarFallback>OP1</AvatarFallback>
          </Avatar>
          <Avatar className="border-background border-2">
            <AvatarImage src="https://github.com/vercel.png" alt="Operator 2" />
            <AvatarFallback>OP2</AvatarFallback>
          </Avatar>
          <Avatar className="border-background border-2">
            <AvatarImage src="https://github.com/github.png" alt="Operator 3" />
            <AvatarFallback>OP3</AvatarFallback>
          </Avatar>
          <Avatar className="border-background border-2">
            <AvatarFallback>+3</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Larger Group
        </h4>
        <div className="flex -space-x-4">
          <Avatar className="border-background size-12 border-2">
            <AvatarFallback className="bg-red-500 text-white">
              M1
            </AvatarFallback>
          </Avatar>
          <Avatar className="border-background size-12 border-2">
            <AvatarFallback className="bg-blue-500 text-white">
              L1
            </AvatarFallback>
          </Avatar>
          <Avatar className="border-background size-12 border-2">
            <AvatarFallback className="bg-green-500 text-white">
              A1
            </AvatarFallback>
          </Avatar>
          <Avatar className="border-background size-12 border-2">
            <AvatarFallback>+12</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use negative margins (-space-x-3) to overlap
        avatars. Add borders to separate overlapping elements. Show "+N" for
        additional count.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Avatar Group Pattern

Create stacked/overlapping avatars:

\`\`\`tsx
<div className="flex -space-x-3">
  <Avatar className="border-2 border-background">
    {/* avatar 1 */}
  </Avatar>
  <Avatar className="border-2 border-background">
    {/* avatar 2 */}
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>+5</AvatarFallback>
  </Avatar>
</div>
\`\`\`

**Use Cases:**
- Team members on a project
- Operators assigned to robots
- Participants in a chat
- Shared access indicators
        `,
      },
    },
  },
};

// =============================================================================
// WITH CONTENT
// =============================================================================

/**
 * ## With Content
 *
 * Avatars combined with user information, badges, and interactive lists.
 */
export const WithContent: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          With Name & Email
        </h4>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-blue-500 text-white">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">John Doe</span>
              <span className="text-muted-foreground text-xs">
                john.doe@neura.com
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar>
                <AvatarFallback className="bg-green-500 text-white">
                  JS
                </AvatarFallback>
              </Avatar>
              <span className="border-background absolute right-0 bottom-0 size-2.5 rounded-full border-2 bg-green-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Jane Smith</span>
              <span className="text-muted-foreground text-xs">
                jane.smith@neura.com
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          With Role Badges
        </h4>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-purple-500 text-white">
                AM
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">Anna Miller</span>
              <Badge variant="secondary" className="w-fit text-xs">
                <Shield className="size-3" />
                Admin
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-blue-500 text-white">
                RW
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">Robert Wilson</span>
              <Badge variant="outline" className="w-fit text-xs">
                <Settings className="size-3" />
                Operator
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Interactive List
        </h4>
        <div className="w-72 space-y-2">
          {[
            {
              name: 'Operator Alpha',
              email: 'alpha@neura.com',
              initials: 'OA',
              status: 'online',
              color: 'bg-blue-500',
            },
            {
              name: 'Operator Beta',
              email: 'beta@neura.com',
              initials: 'OB',
              status: 'away',
              color: 'bg-green-500',
            },
            {
              name: 'Operator Gamma',
              email: 'gamma@neura.com',
              initials: 'OG',
              status: 'offline',
              color: 'bg-purple-500',
            },
          ].map((user) => (
            <div
              key={user.email}
              className="hover:bg-muted flex items-center gap-3 rounded-lg p-2 transition-colors"
            >
              <div className="relative">
                <Avatar>
                  <AvatarFallback className={`${user.color} text-white`}>
                    {user.initials}
                  </AvatarFallback>
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
                <span className="text-muted-foreground text-xs">
                  {user.email}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Combine avatars with text, badges, and status
        indicators for rich user/operator displays.
      </p>
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
 * Real-world example showing avatars in a Neura Robotics operator dashboard.
 */
export const CompleteShowcase: Story = {
  render: () => (
    <div className="bg-card text-card-foreground w-[600px] space-y-6 rounded-lg border p-6 shadow-sm">
      <div>
        <h3 className="mb-2 text-lg font-semibold">Fleet Operators</h3>
        <p className="text-muted-foreground text-sm">
          Current operators managing robot fleet
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="mb-3 text-sm font-medium">Active Operators</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar>
                    <AvatarFallback className="bg-blue-500 text-white">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <span className="border-background absolute right-0 bottom-0 size-2.5 rounded-full border-2 bg-green-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">John Doe</span>
                  <span className="text-muted-foreground text-xs">
                    Managing 5 robots
                  </span>
                </div>
              </div>
              <Badge variant="secondary" className="text-xs">
                <Shield className="size-3" />
                Admin
              </Badge>
            </div>

            <div className="flex items-center justify-between rounded-lg border p-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar>
                    <AvatarFallback className="bg-green-500 text-white">
                      SM
                    </AvatarFallback>
                  </Avatar>
                  <span className="border-background absolute right-0 bottom-0 size-2.5 rounded-full border-2 bg-green-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Sarah Miller</span>
                  <span className="text-muted-foreground text-xs">
                    Managing 3 robots
                  </span>
                </div>
              </div>
              <Badge variant="outline" className="text-xs">
                <Settings className="size-3" />
                Operator
              </Badge>
            </div>

            <div className="flex items-center justify-between rounded-lg border p-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar>
                    <AvatarFallback className="bg-purple-500 text-white">
                      RW
                    </AvatarFallback>
                  </Avatar>
                  <span className="border-background absolute right-0 bottom-0 size-2.5 rounded-full border-2 bg-yellow-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Robert Wilson</span>
                  <span className="text-muted-foreground text-xs">
                    Managing 2 robots
                  </span>
                </div>
              </div>
              <Badge variant="outline" className="text-xs">
                <Bot className="size-3" />
                Supervisor
              </Badge>
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <h4 className="mb-3 text-sm font-medium">Robot Assignments</h4>
          <div className="space-y-3">
            <div className="bg-muted/50 flex items-center justify-between rounded-lg p-3">
              <div className="flex items-center gap-3">
                <Avatar className="ring-primary ring-offset-background ring-2 ring-offset-2">
                  <AvatarFallback className="bg-blue-500 text-white">
                    <Bot className="size-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">MAiRA-001</span>
                  <span className="text-muted-foreground text-xs">
                    Munich Plant A
                  </span>
                </div>
              </div>
              <div className="flex -space-x-2">
                <Avatar className="border-background size-8 border-2">
                  <AvatarFallback className="bg-blue-500 text-xs text-white">
                    JD
                  </AvatarFallback>
                </Avatar>
                <Avatar className="border-background size-8 border-2">
                  <AvatarFallback className="bg-green-500 text-xs text-white">
                    SM
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>

            <div className="bg-muted/50 flex items-center justify-between rounded-lg p-3">
              <div className="flex items-center gap-3">
                <Avatar className="ring-offset-background ring-2 ring-green-500 ring-offset-2">
                  <AvatarFallback className="bg-green-500 text-white">
                    <Zap className="size-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">LARA-003</span>
                  <span className="text-muted-foreground text-xs">
                    Stuttgart Factory
                  </span>
                </div>
              </div>
              <div className="flex -space-x-2">
                <Avatar className="border-background size-8 border-2">
                  <AvatarFallback className="bg-purple-500 text-xs text-white">
                    RW
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>

            <div className="bg-muted/50 flex items-center justify-between rounded-lg p-3">
              <div className="flex items-center gap-3">
                <Avatar className="ring-offset-background ring-2 ring-yellow-500 ring-offset-2">
                  <AvatarFallback className="bg-yellow-500 text-white">
                    <AlertCircle className="size-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">MAV-002</span>
                  <span className="text-muted-foreground text-xs">
                    Berlin Warehouse
                  </span>
                </div>
              </div>
              <div className="flex -space-x-2">
                <Avatar className="border-background size-8 border-2">
                  <AvatarFallback className="bg-green-500 text-xs text-white">
                    SM
                  </AvatarFallback>
                </Avatar>
                <Avatar className="border-background size-8 border-2">
                  <AvatarFallback className="bg-purple-500 text-xs text-white">
                    RW
                  </AvatarFallback>
                </Avatar>
                <Avatar className="border-background size-8 border-2">
                  <AvatarFallback className="text-xs">+2</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 This showcase demonstrates avatars for operators with status
        indicators, roles, and robot assignments with grouped avatars.
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
 * Avatars should follow accessibility best practices for images and fallbacks.
 */
export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="mb-2 text-sm font-semibold">Accessibility Features</h4>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>
            ✓ <strong>Alt text</strong>: Always provide descriptive alt text for
            images
          </li>
          <li>
            ✓ <strong>Fallback</strong>: Initials or icon when image fails to
            load
          </li>
          <li>
            ✓ <strong>Color contrast</strong>: Ensure fallback text meets WCAG
            standards
          </li>
          <li>
            ✓ <strong>Status indicators</strong>: Use aria-label for screen
            readers
          </li>
          <li>
            ✓ <strong>Interactive elements</strong>: Provide proper button/link
            semantics
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Proper Alt Text
        </h4>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="John Doe, Senior Operator"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/vercel.png"
              alt="Team Avatar"
            />
            <AvatarFallback>TM</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Status with ARIA Label
        </h4>
        <div className="flex items-center gap-4">
          <div className="relative" aria-label="John Doe, online">
            <Avatar>
              <AvatarFallback className="bg-blue-500 text-white">
                JD
              </AvatarFallback>
            </Avatar>
            <span
              className="border-background absolute right-0 bottom-0 size-2.5 rounded-full border-2 bg-green-500"
              aria-hidden="true"
            />
          </div>
          <div className="relative" aria-label="Jane Smith, away">
            <Avatar>
              <AvatarFallback className="bg-green-500 text-white">
                JS
              </AvatarFallback>
            </Avatar>
            <span
              className="border-background absolute right-0 bottom-0 size-2.5 rounded-full border-2 bg-yellow-500"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Color Contrast
        </h4>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback className="bg-blue-700 text-white">
              ✓ Good
            </AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback className="bg-yellow-200 text-yellow-800">
              ✓ Good
            </AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback className="bg-gray-100 text-gray-900">
              ✓ Good
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Always provide meaningful alt text, ensure
        color contrast meets WCAG AA (4.5:1), and mark decorative elements with{' '}
        <code>aria-hidden="true"</code>.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Accessibility Best Practices

**Alt Text:**
\`\`\`tsx
<AvatarImage 
  src="..." 
  alt="John Doe, Senior Operator" 
/>
\`\`\`

**Status Indicators:**
\`\`\`tsx
<div aria-label="John Doe, online">
  <Avatar>{/* ... */}</Avatar>
  <span aria-hidden="true" className="status-dot" />
</div>
\`\`\`

**Color Contrast:**
- Text on background must meet WCAG AA (4.5:1 minimum)
- Use darker colors for better contrast
- Test with tools like WebAIM or browser DevTools

**Interactive Avatars:**
\`\`\`tsx
<button aria-label="View profile for John Doe">
  <Avatar>{/* ... */}</Avatar>
</button>
\`\`\`

**Testing:**
- Test with screen reader
- Verify images have alt text
- Check color contrast ratios
- Ensure status indicators are announced
        `,
      },
    },
  },
};
