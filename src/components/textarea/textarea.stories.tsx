import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';
import { Label } from '@/components/label/label';
import { useState } from 'react';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    rows: {
      control: 'number',
      description: 'Number of visible rows',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    placeholder: 'Type your message here...',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue:
      'This is a textarea with some default content.\n\nYou can edit this text.',
    rows: 5,
  },
};

export const WithRows: Story = {
  args: {
    placeholder: 'This textarea has 8 rows',
    rows: 8,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'This textarea is disabled',
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'This field has an error',
    'aria-invalid': true,
  },
};

// With Label
export const WithLabel: Story = {
  render: () => (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" placeholder="Type your message here..." rows={4} />
    </div>
  ),
};

// With Character Count
function WithCharacterCountComponent() {
  const [value, setValue] = useState('');
  const maxLength = 280;

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Label htmlFor="tweet">Tweet</Label>
      <Textarea
        id="tweet"
        placeholder="What's happening?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
        rows={4}
      />
      <p className="text-muted-foreground text-right text-sm">
        {value.length} / {maxLength}
      </p>
    </div>
  );
}

export const WithCharacterCount: Story = {
  render: () => <WithCharacterCountComponent />,
};

// Auto Resize (CSS field-sizing-content)
export const AutoResize: Story = {
  render: () => (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Label htmlFor="auto-resize">Auto Resize</Label>
      <Textarea
        id="auto-resize"
        placeholder="This textarea auto-resizes as you type..."
        rows={3}
      />
      <p className="text-muted-foreground text-sm">
        The textarea uses CSS field-sizing-content for auto-resize
      </p>
    </div>
  ),
};

// Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Basic Textareas</h3>
        <div className="grid w-full max-w-2xl gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="default-textarea">Default</Label>
            <Textarea
              id="default-textarea"
              placeholder="Type something..."
              rows={3}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="with-value">With Value</Label>
            <Textarea
              id="with-value"
              defaultValue="This textarea has default content."
              rows={3}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="placeholder">With Placeholder</Label>
            <Textarea
              id="placeholder"
              placeholder="Enter your feedback here..."
              rows={4}
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Different Sizes</h3>
        <div className="grid w-full max-w-2xl gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="small">Small (3 rows)</Label>
            <Textarea id="small" placeholder="Small textarea" rows={3} />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="medium">Medium (5 rows)</Label>
            <Textarea id="medium" placeholder="Medium textarea" rows={5} />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="large">Large (8 rows)</Label>
            <Textarea id="large" placeholder="Large textarea" rows={8} />
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">States</h3>
        <div className="grid w-full max-w-2xl gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="normal">Normal</Label>
            <Textarea id="normal" placeholder="Normal state" rows={3} />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="disabled-textarea">Disabled</Label>
            <Textarea
              id="disabled-textarea"
              placeholder="This is disabled"
              rows={3}
              disabled
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="error-textarea">Error State</Label>
            <Textarea
              id="error-textarea"
              placeholder="Invalid input"
              rows={3}
              aria-invalid
            />
            <p className="text-destructive text-sm">This field has an error</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Form Examples</h3>
        <div className="grid w-full max-w-2xl gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="feedback">
              Feedback
              <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="feedback"
              placeholder="Tell us what you think..."
              rows={5}
              required
            />
            <p className="text-muted-foreground text-sm">
              Your feedback helps us improve
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              placeholder="Tell us about yourself..."
              rows={6}
              maxLength={500}
            />
            <p className="text-muted-foreground text-sm">
              Maximum 500 characters
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Product Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your product..."
              rows={8}
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">With Helpers</h3>
        <div className="grid w-full max-w-2xl gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="helper-text">With Helper Text</Label>
            <Textarea
              id="helper-text"
              placeholder="Enter your comment..."
              rows={4}
            />
            <p className="text-muted-foreground text-sm">
              Be respectful and constructive in your feedback
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="required-field">
              Required Field
              <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="required-field"
              placeholder="This field is required"
              rows={4}
              required
            />
            <p className="text-muted-foreground text-sm">
              Please provide a detailed description
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// Real World Examples
export const RealWorldExamples: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Contact Form</h3>
        <div className="w-full max-w-2xl rounded-lg border p-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-name">
                Name
                <span className="text-destructive">*</span>
              </Label>
              <input
                id="contact-name"
                type="text"
                placeholder="Your name"
                className="rounded-md border px-3 py-2 text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-email">
                Email
                <span className="text-destructive">*</span>
              </Label>
              <input
                id="contact-email"
                type="email"
                placeholder="your@email.com"
                className="rounded-md border px-3 py-2 text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-message">
                Message
                <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="contact-message"
                placeholder="How can we help you?"
                rows={6}
              />
              <p className="text-muted-foreground text-sm">
                Please provide as much detail as possible
              </p>
            </div>

            <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium">
              Send Message
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Comment Section</h3>
        <div className="w-full max-w-2xl space-y-4">
          <div className="rounded-lg border p-4">
            <div className="mb-4 flex items-start gap-3">
              <div className="bg-muted flex size-10 items-center justify-center rounded-full">
                JD
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">John Doe</span>
                  <span className="text-muted-foreground text-sm">2h ago</span>
                </div>
                <p className="text-muted-foreground mt-1 text-sm">
                  This looks great! Really excited about this feature.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <Label htmlFor="new-comment">Add a comment</Label>
            <Textarea
              id="new-comment"
              placeholder="Share your thoughts..."
              rows={3}
              className="mt-2"
            />
            <div className="mt-2 flex justify-end">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium">
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
