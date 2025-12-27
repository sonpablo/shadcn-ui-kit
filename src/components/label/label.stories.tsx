import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './label';
import { Input } from '@/components/input/input';
import { Textarea } from '@/components/textarea/textarea';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/tooltip/tooltip';
import { Star, Info, AlertCircle } from 'lucide-react';

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    htmlFor: {
      control: 'text',
      description: 'Associates the label with a form element',
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic examples
export const Default: Story = {
  args: {
    children: 'Label',
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-2">
      <Label htmlFor="email">Email Address</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-2">
      <Label htmlFor="premium">
        <Star className="size-4" />
        Premium Feature
      </Label>
      <Input id="premium" type="text" placeholder="Enter code" />
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-2">
      <Label htmlFor="username">
        Username
        <span className="text-destructive">*</span>
      </Label>
      <Input id="username" type="text" placeholder="Required field" required />
    </div>
  ),
};

export const WithTooltip: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-2">
      <Label htmlFor="password" className="flex items-center gap-2">
        Password
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Info className="size-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Password must be at least 8 characters</p>
          </TooltipContent>
        </Tooltip>
      </Label>
      <Input id="password" type="password" placeholder="Enter password" />
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-2">
      <Label htmlFor="error-input">
        Email
        <AlertCircle className="text-destructive size-4" />
      </Label>
      <Input
        id="error-input"
        type="email"
        placeholder="email@example.com"
        aria-invalid
      />
      <p className="text-destructive text-sm">Please enter a valid email</p>
    </div>
  ),
};

// Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Basic Labels with Input</h3>
        <div className="grid w-full max-w-2xl gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" type="text" placeholder="John Doe" />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email-example">Email</Label>
            <Input
              id="email-example"
              type="email"
              placeholder="john@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">With Icons</h3>
        <div className="grid w-full max-w-2xl gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="premium-input">
              <Star className="size-4" />
              Premium Account
            </Label>
            <Input id="premium-input" type="text" placeholder="Enter code" />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="help">
              Support Message
              <Info className="text-muted-foreground size-4" />
            </Label>
            <Textarea id="help" placeholder="How can we help?" rows={3} />
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Required Fields</h3>
        <div className="grid w-full max-w-2xl gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="username-req">
              Username
              <span className="text-destructive">*</span>
            </Label>
            <Input
              id="username-req"
              type="text"
              placeholder="Required"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password-req">
              Password
              <span className="text-destructive">*</span>
            </Label>
            <Input
              id="password-req"
              type="password"
              placeholder="Required"
              required
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Error States</h3>
        <div className="grid w-full max-w-2xl gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="error-email">
              Email
              <AlertCircle className="text-destructive size-4" />
            </Label>
            <Input
              id="error-email"
              type="email"
              placeholder="email@example.com"
              aria-invalid
            />
            <p className="text-destructive text-sm">
              Please enter a valid email address
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="error-password">
              Password
              <AlertCircle className="text-destructive size-4" />
            </Label>
            <Input
              id="error-password"
              type="password"
              placeholder="Enter password"
              aria-invalid
            />
            <p className="text-destructive text-sm">
              Password must be at least 8 characters
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">With Checkboxes & Radio</h3>
        <div className="grid w-full max-w-2xl gap-4">
          <div className="flex items-center gap-2">
            <input
              id="terms"
              type="checkbox"
              className="size-4 rounded border"
            />
            <Label htmlFor="terms">I agree to the terms and conditions</Label>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Choose an option</Label>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input
                  id="option1"
                  type="radio"
                  name="options"
                  className="size-4"
                />
                <Label htmlFor="option1">Option 1</Label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="option2"
                  type="radio"
                  name="options"
                  className="size-4"
                />
                <Label htmlFor="option2">Option 2</Label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="option3"
                  type="radio"
                  name="options"
                  className="size-4"
                />
                <Label htmlFor="option3">Option 3</Label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Disabled State</h3>
        <div className="grid w-full max-w-2xl gap-4">
          <div className="group flex flex-col gap-2" data-disabled="true">
            <Label htmlFor="disabled">Disabled Field</Label>
            <Input
              id="disabled"
              type="text"
              defaultValue="Cannot edit"
              disabled
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Form Example</h3>
        <div className="w-full max-w-2xl rounded-lg border p-6">
          <h4 className="mb-4 text-base font-semibold">Contact Form</h4>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="form-name">
                Name
                <span className="text-destructive">*</span>
              </Label>
              <Input id="form-name" type="text" placeholder="Your name" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="form-email">
                Email
                <span className="text-destructive">*</span>
              </Label>
              <Input
                id="form-email"
                type="email"
                placeholder="your@email.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="form-subject">Subject</Label>
              <Input
                id="form-subject"
                type="text"
                placeholder="What's this about?"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="form-message">
                Message
                <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="form-message"
                placeholder="Your message..."
                rows={5}
              />
            </div>

            <button className="bg-primary text-primary-foreground hover:bg-primary/90 mt-2 rounded-md px-4 py-2 text-sm font-medium">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
