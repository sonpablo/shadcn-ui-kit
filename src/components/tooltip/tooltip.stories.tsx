import type { Meta, StoryObj } from '@storybook/react';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from './tooltip';
import { Button } from '@/components/button/button';
import { Info, HelpCircle, Settings, Trash2, Edit, Plus } from 'lucide-react';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default tooltip on a button
 */
export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

/**
 * Tooltip with different sides
 */
export const Sides: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Tooltip on top</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Tooltip on right</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Tooltip on bottom</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Tooltip on left</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

/**
 * Tooltip on icon buttons
 */
export const OnIconButtons: Story = {
  render: () => (
    <div className="flex gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="icon" size="icon">
            <Edit className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Edit</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="icon" size="icon">
            <Trash2 className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Delete</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="icon" size="icon">
            <Settings className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Settings</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="icon" size="icon">
            <Plus className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add new</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

/**
 * Tooltip with info icon
 */
export const WithInfoIcon: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span className="text-sm">Hover the icon for more info</span>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Info className="size-4" />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This provides additional context</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

/**
 * Tooltip with help icon
 */
export const WithHelpIcon: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">Need help?</span>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <HelpCircle className="size-4" />
          </button>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <p>
            Click here to access our help documentation and support resources.
          </p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

/**
 * Tooltip with longer content
 */
export const WithLongContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Read more</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p>
          This is a longer tooltip that contains multiple lines of text to
          provide more detailed information to the user.
        </p>
      </TooltipContent>
    </Tooltip>
  ),
};

/**
 * Tooltip on disabled button
 */
export const OnDisabledButton: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="inline-block">
          <Button disabled>Disabled Button</Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>This action is currently unavailable</p>
      </TooltipContent>
    </Tooltip>
  ),
};

/**
 * Tooltips with different variants of buttons
 */
export const OnButtonVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="default">Default</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Default button</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Secondary</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Secondary button</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="destructive">Destructive</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Destructive action</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Outline</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Outline button</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost">Ghost</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Ghost button</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

/**
 * Tooltip with custom styling
 */
export const CustomStyling: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Success</Button>
        </TooltipTrigger>
        <TooltipContent className="bg-green-600 text-white">
          <p>Action completed successfully!</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Warning</Button>
        </TooltipTrigger>
        <TooltipContent className="bg-yellow-600 text-white">
          <p>Please review before proceeding</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Error</Button>
        </TooltipTrigger>
        <TooltipContent className="bg-red-600 text-white">
          <p>This action cannot be undone</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

/**
 * Complete showcase with all features
 */
export const CompleteShowcase: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Basic Tooltips</h3>
        <div className="flex flex-wrap gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Default</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Simple tooltip</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary">With Arrow</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Tooltip with arrow pointer</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Icon Buttons</h3>
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="outline">
                <Edit className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Edit</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="outline">
                <Trash2 className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="outline">
                <Settings className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Settings</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Different Positions</h3>
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="secondary">
                Top
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Top</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="secondary">
                Bottom
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Bottom</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="secondary">
                Left
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Left</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="secondary">
                Right
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Right</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Info Icons</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm">Username</span>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="size-4" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Must be unique</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm">Password</span>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="text-muted-foreground hover:text-foreground">
                  <HelpCircle className="size-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>Must contain at least 8 characters</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * Tooltip comparison in light and dark modes
 */
export const DarkModeComparison: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-8 p-8">
      {/* Light Mode */}
      <div className="space-y-4">
        <div className="mb-6 flex items-center gap-2">
          <span className="text-2xl">☀️</span>
          <h3 className="text-lg font-semibold">Light Mode</h3>
        </div>

        <div className="flex flex-wrap gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Tooltip in light mode</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="outline">
                <Info className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Info tooltip</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* Dark Mode */}
      <div className="dark bg-background space-y-4 rounded-lg p-6">
        <div className="mb-6 flex items-center gap-2">
          <span className="text-2xl">🌙</span>
          <h3 className="text-foreground text-lg font-semibold">Dark Mode</h3>
        </div>

        <div className="flex flex-wrap gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Tooltip in dark mode</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="outline">
                <Info className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Info tooltip</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
