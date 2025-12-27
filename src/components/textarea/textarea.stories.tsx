import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Textarea } from './textarea';
import { Label } from '@/components/label/label';
import { Button } from '@/components/button/button';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A textarea component for multi-line text input.

## Features
- Customizable rows
- Disabled state
- Error state
- Placeholder text
- Character counting
- Auto-resize (optional)
- Accessibility support

## Common Use Cases
- Long-form text input (comments, descriptions, notes)
- User feedback forms
- Chat messages
- Code snippets
- Multi-line configuration
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    rows: {
      control: { type: 'number', min: 1, max: 20 },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// BASIC EXAMPLES
// =============================================================================

/**
 * ## Default
 *
 * Basic textarea with placeholder text and various configurations.
 */
export const Default: Story = {
  render: () => (
    <div className="flex w-[400px] flex-col gap-6">
      <div className="space-y-2">
        <Label htmlFor="basic">Basic Textarea</Label>
        <Textarea
          id="basic"
          placeholder="Enter your robot deployment notes..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="with-value">With Default Value</Label>
        <Textarea
          id="with-value"
          defaultValue="MAiRA-001 deployed successfully at Munich Plant A. All systems operational."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="rows">Custom Rows (8)</Label>
        <Textarea
          id="rows"
          rows={8}
          placeholder="Larger textarea for longer content..."
        />
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use the <code>rows</code> prop to control
        height.
      </p>
    </div>
  ),
};

// =============================================================================
// STATES
// =============================================================================

/**
 * ## States
 *
 * Disabled and error states for the textarea component.
 */
export const States: Story = {
  render: () => (
    <div className="flex w-[400px] flex-col gap-6">
      <div className="space-y-2">
        <Label htmlFor="disabled">Disabled</Label>
        <Textarea
          id="disabled"
          disabled
          placeholder="This textarea is disabled..."
        />
        <p className="text-muted-foreground text-xs">
          Non-interactive, typically for read-only data.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="error" className="text-destructive">
          Error State
        </Label>
        <Textarea
          id="error"
          aria-invalid
          placeholder="Enter deployment description..."
        />
        <p className="text-destructive text-sm">
          Deployment description is required and must be at least 10 characters.
        </p>
        <p className="text-muted-foreground text-xs">
          💡 Use <code>aria-invalid</code> for error styling and provide
          descriptive error messages.
        </p>
      </div>
    </div>
  ),
};

// =============================================================================
// WITH FEATURES
// =============================================================================

/**
 * ## With Features
 *
 * Character counting, auto-resize, and other interactive features.
 */
export const WithFeatures: Story = {
  render: function WithFeaturesExample() {
    const [text, setText] = React.useState('');
    const maxLength = 200;

    const [autoResizeText, setAutoResizeText] = React.useState('');
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    React.useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }, [autoResizeText]);

    return (
      <div className="flex w-[400px] flex-col gap-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="char-count">With Character Count</Label>
            <span
              className={`text-xs ${
                text.length > maxLength
                  ? 'text-destructive'
                  : 'text-muted-foreground'
              }`}
            >
              {text.length}/{maxLength}
            </span>
          </div>
          <Textarea
            id="char-count"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Describe the robot's task assignment..."
            maxLength={maxLength}
          />
          <p className="text-muted-foreground text-xs">
            {maxLength - text.length} characters remaining
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="auto-resize">Auto-Resize Textarea</Label>
          <Textarea
            id="auto-resize"
            ref={textareaRef}
            value={autoResizeText}
            onChange={(e) => setAutoResizeText(e.target.value)}
            placeholder="Start typing and watch the textarea grow..."
            rows={3}
            className="resize-none"
          />
          <p className="text-muted-foreground text-xs">
            💡 <strong>Auto-resize:</strong> The textarea expands as you type.
          </p>
        </div>
      </div>
    );
  },
};

// =============================================================================
// USAGE EXAMPLES
// =============================================================================

/**
 * ## Usage Examples
 *
 * Real-world examples: feedback form, task notes, configuration editor.
 */
export const UsageExamples: Story = {
  render: function UsageExamplesRender() {
    const [feedback, setFeedback] = React.useState('');
    const [taskNotes, setTaskNotes] = React.useState('');

    return (
      <div className="flex w-[500px] flex-col gap-8">
        {/* Feedback Form */}
        <div className="space-y-4 rounded-lg border p-4">
          <h4 className="font-medium">Robot Performance Feedback</h4>
          <div className="space-y-2">
            <Label htmlFor="feedback">
              How did the robot perform during the task?
            </Label>
            <Textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your observations..."
              rows={4}
            />
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground text-xs">
                Be as detailed as possible
              </p>
              <span className="text-muted-foreground text-xs">
                {feedback.length} characters
              </span>
            </div>
            <Button className="w-full">Submit Feedback</Button>
          </div>
        </div>

        {/* Task Notes */}
        <div className="space-y-4 rounded-lg border p-4">
          <h4 className="font-medium">Task Assignment Notes</h4>
          <div className="space-y-2">
            <Label htmlFor="task-notes">Deployment Instructions</Label>
            <Textarea
              id="task-notes"
              value={taskNotes}
              onChange={(e) => setTaskNotes(e.target.value)}
              placeholder="Enter detailed instructions for the robot's task..."
              rows={6}
            />
            <Button className="w-full" variant="outline">
              Save Notes
            </Button>
          </div>
        </div>

        {/* Code/Config Editor */}
        <div className="space-y-4 rounded-lg border p-4">
          <h4 className="font-medium">Configuration Editor</h4>
          <div className="space-y-2">
            <Label htmlFor="config">JSON Configuration</Label>
            <Textarea
              id="config"
              placeholder='{\n  "maxSpeed": 5.0,\n  "mode": "autonomous"\n}'
              rows={8}
              className="font-mono text-xs"
            />
            <Button className="w-full" variant="secondary">
              Apply Configuration
            </Button>
          </div>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 These examples show typical textarea use cases in a robotics
          dashboard.
        </p>
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
 * Full-featured robot deployment form with textarea for notes and description.
 */
export const CompleteShowcase: Story = {
  render: function CompleteShowcaseExample() {
    const [description, setDescription] = React.useState('');
    const [notes, setNotes] = React.useState('');
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    };

    return (
      <div className="bg-card text-card-foreground w-[600px] space-y-6 rounded-lg border p-6 shadow-sm">
        <div>
          <h3 className="mb-2 text-lg font-semibold">Robot Deployment Form</h3>
          <p className="text-muted-foreground text-sm">
            Provide detailed information about the robot deployment task
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="robot-select">Robot Unit</Label>
            <select
              id="robot-select"
              className="border-input bg-background ring-offset-background focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <option>MAiRA-001</option>
              <option>MAiRA-002</option>
              <option>LARA-001</option>
              <option>4NE1-001</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="deployment-desc">Task Description</Label>
            <Textarea
              id="deployment-desc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the robot's primary task and objectives..."
              rows={5}
              required
            />
            <p className="text-muted-foreground text-xs">
              Provide a clear and detailed description of what the robot should
              accomplish.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="additional-notes">
                Additional Notes (Optional)
              </Label>
              <span className="text-muted-foreground text-xs">
                {notes.length}/500
              </span>
            </div>
            <Textarea
              id="additional-notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any special instructions, safety notes, or concerns..."
              rows={4}
              maxLength={500}
            />
          </div>

          <Button type="submit" className="w-full" disabled={!description}>
            Deploy Robot
          </Button>

          {submitted && (
            <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-3 text-sm text-green-700 dark:text-green-400">
              ✓ Robot deployment task submitted successfully!
            </div>
          )}
        </form>

        <p className="text-muted-foreground text-xs">
          💡 This form demonstrates textareas in a complete deployment workflow.
        </p>
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
 * Textarea components follow accessibility best practices for keyboard navigation
 * and screen readers.
 */
export const Accessibility: Story = {
  render: () => (
    <div className="flex w-[450px] flex-col gap-6 p-4">
      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="mb-2 text-sm font-semibold">Accessibility Features</h4>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>
            ✓ <strong>Labels</strong>: All textareas have associated labels
          </li>
          <li>
            ✓ <strong>ARIA attributes</strong>: <code>aria-invalid</code> for
            errors, <code>aria-describedby</code> for hints
          </li>
          <li>
            ✓ <strong>Keyboard navigation</strong>: Tab to focus, type to input
          </li>
          <li>
            ✓ <strong>Error messages</strong>: Descriptive and linked to inputs
          </li>
          <li>
            ✓ <strong>Character limits</strong>: Announced to screen readers
          </li>
          <li>
            ✓ <strong>Required fields</strong>: Use <code>required</code>{' '}
            attribute
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="accessible-textarea">
            Deployment Notes <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="accessible-textarea"
            placeholder="Enter deployment notes..."
            required
            aria-describedby="textarea-hint"
          />
          <p id="textarea-hint" className="text-muted-foreground text-xs">
            Provide detailed notes about the robot deployment. This field is
            required.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="error-textarea" className="text-destructive">
            Task Description <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="error-textarea"
            aria-invalid
            aria-describedby="error-message"
            placeholder="Describe the task..."
          />
          <p id="error-message" className="text-destructive text-sm">
            Task description is required and must be at least 20 characters.
          </p>
        </div>
      </div>

      <div className="bg-muted/30 rounded-lg p-3">
        <h4 className="mb-2 text-sm font-semibold">Best Practices</h4>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>
            • Always provide a visible <code>Label</code>
          </li>
          <li>
            • Use <code>aria-describedby</code> to link hints/errors
          </li>
          <li>
            • Set <code>aria-invalid</code> when there's an error
          </li>
          <li>• Provide clear error messages below the textarea</li>
          <li>
            • Use <code>required</code> for mandatory fields
          </li>
        </ul>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Test with keyboard-only navigation and screen
        readers.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Accessibility Best Practices

**Label Association:**
\`\`\`tsx
<Label htmlFor="textarea-id">Label Text</Label>
<Textarea id="textarea-id" />
\`\`\`

**Error Handling:**
\`\`\`tsx
<Textarea
  id="input-id"
  aria-invalid
  aria-describedby="error-id"
/>
<p id="error-id" className="text-destructive text-sm">
  Error message here
</p>
\`\`\`

**Required Fields:**
\`\`\`tsx
<Label htmlFor="input-id">
  Label <span className="text-destructive">*</span>
</Label>
<Textarea id="input-id" required />
\`\`\`
        `,
      },
    },
  },
};
