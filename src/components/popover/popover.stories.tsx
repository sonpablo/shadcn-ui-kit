import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from './popover';
import { Button } from '@/components/button/button';
import { Input } from '@/components/input/input';
import { Label } from '@/components/label/label';

const meta = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default popover with simple content
 */
export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Popover</h4>
          <p className="text-sm text-muted-foreground">
            This is a simple popover component.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

/**
 * Popover with form fields
 */
export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Edit Profile</h4>
            <p className="text-sm text-muted-foreground">
              Update your profile information.
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <Button className="w-full">Save Changes</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

/**
 * Popover with different alignments
 */
export const Alignments: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Align Start</Button>
        </PopoverTrigger>
        <PopoverContent align="start">
          <p className="text-sm">Aligned to start</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Align Center</Button>
        </PopoverTrigger>
        <PopoverContent align="center">
          <p className="text-sm">Aligned to center</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Align End</Button>
        </PopoverTrigger>
        <PopoverContent align="end">
          <p className="text-sm">Aligned to end</p>
        </PopoverContent>
      </Popover>
    </div>
  ),
};

/**
 * Popover with different sides
 */
export const Sides: Story = {
  render: () => (
    <div className="flex gap-4 items-center flex-wrap">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Top</Button>
        </PopoverTrigger>
        <PopoverContent side="top">
          <p className="text-sm">Popover on top</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Right</Button>
        </PopoverTrigger>
        <PopoverContent side="right">
          <p className="text-sm">Popover on right</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </PopoverTrigger>
        <PopoverContent side="bottom">
          <p className="text-sm">Popover on bottom</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Left</Button>
        </PopoverTrigger>
        <PopoverContent side="left">
          <p className="text-sm">Popover on left</p>
        </PopoverContent>
      </Popover>
    </div>
  ),
};

/**
 * Popover with custom width
 */
export const CustomWidth: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Small (w-40)</Button>
        </PopoverTrigger>
        <PopoverContent className="w-40">
          <p className="text-sm">Small popover content</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Default (w-72)</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p className="text-sm">Default width popover content</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Large (w-96)</Button>
        </PopoverTrigger>
        <PopoverContent className="w-96">
          <p className="text-sm">Large popover with more content space</p>
        </PopoverContent>
      </Popover>
    </div>
  ),
};

/**
 * Popover with controlled state
 */
export const Controlled: Story = {
  render: function ControlledComponent() {
    const [open, setOpen] = React.useState(false);

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setOpen(true)}>
            Open
          </Button>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button variant="outline" onClick={() => setOpen(!open)}>
            Toggle
          </Button>
        </div>

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button>Controlled Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-2">
              <h4 className="font-medium">Controlled State</h4>
              <p className="text-sm text-muted-foreground">
                This popover's state is controlled externally.
              </p>
              <Button
                size="sm"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Close from inside
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        <p className="text-sm text-muted-foreground">
          State: {open ? 'Open' : 'Closed'}
        </p>
      </div>
    );
  },
};

/**
 * Popover with anchor element
 */
export const WithAnchor: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <p className="text-sm text-muted-foreground">
          Click the button to show a popover anchored to the text below
        </p>
        <Popover>
          <PopoverAnchor>
            <div className="inline-block px-4 py-2 bg-accent rounded-md">
              📍 Anchor Point
            </div>
          </PopoverAnchor>
          <PopoverTrigger asChild>
            <Button variant="outline">Show Popover at Anchor</Button>
          </PopoverTrigger>
          <PopoverContent>
            <p className="text-sm">
              This popover is anchored to the element above, not the trigger.
            </p>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  ),
};

/**
 * Popover with rich content
 */
export const RichContent: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">View Details</Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
              JD
            </div>
            <div>
              <h4 className="font-medium">John Doe</h4>
              <p className="text-sm text-muted-foreground">Software Engineer</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Email:</span>
              <span>john@example.com</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Location:</span>
              <span>San Francisco, CA</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Member since:</span>
              <span>Jan 2024</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" className="flex-1">
              View Profile
            </Button>
            <Button size="sm" variant="outline" className="flex-1">
              Send Message
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

/**
 * Popover with list content
 */
export const WithList: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Quick Actions</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-2">
        <div className="space-y-1">
          <button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
            📄 Create Document
          </button>
          <button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
            📁 Create Folder
          </button>
          <button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
            📤 Upload File
          </button>
          <button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
            🔗 Create Link
          </button>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

/**
 * Complete showcase with all features
 */
export const CompleteShowcase: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Basic Popover</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button>Click me</Button>
          </PopoverTrigger>
          <PopoverContent>
            <p className="text-sm">Simple popover content</p>
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Form Popover</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Add Item</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-4">
              <h4 className="font-medium">Add New Item</h4>
              <div className="space-y-2">
                <Label htmlFor="item-name">Item Name</Label>
                <Input id="item-name" placeholder="Enter name..." />
              </div>
              <Button className="w-full">Add</Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Different Positions</h3>
        <div className="flex gap-2 flex-wrap">
          <Popover>
            <PopoverTrigger asChild>
              <Button size="sm" variant="secondary">
                Top
              </Button>
            </PopoverTrigger>
            <PopoverContent side="top">
              <p className="text-sm">Content on top</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button size="sm" variant="secondary">
                Bottom
              </Button>
            </PopoverTrigger>
            <PopoverContent side="bottom">
              <p className="text-sm">Content on bottom</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button size="sm" variant="secondary">
                Left
              </Button>
            </PopoverTrigger>
            <PopoverContent side="left">
              <p className="text-sm">Content on left</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button size="sm" variant="secondary">
                Right
              </Button>
            </PopoverTrigger>
            <PopoverContent side="right">
              <p className="text-sm">Content on right</p>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};


