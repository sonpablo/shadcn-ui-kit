import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Switch } from './switch';
import { Label } from '../label/label';

import { Button } from '../button/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../card/card';
import { Separator } from '../separator/separator';
import { Volume2 } from 'lucide-react';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A toggle control for binary settings. Built on Radix UI Switch primitive.

## Features
- Accessible with keyboard navigation
- Smooth animations
- Support for disabled state
- Works seamlessly with forms
- ARIA compliant

## Usage
Perfect for on/off settings like notifications, features, and preferences.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary'],
      description: 'The visual style variant',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    checked: {
      control: 'boolean',
      description: 'The controlled checked state of the switch',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'The default checked state (uncontrolled)',
    },
    disabled: {
      control: 'boolean',
      description: 'When true, prevents interaction',
    },
    onCheckedChange: {
      action: 'checked changed',
      description: 'Event handler called when the checked state changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
  render: (args) => <Switch {...args} />,
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => <Switch {...args} />,
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <h3 className="mb-3 text-sm font-semibold">
            Default Variant (Green)
          </h3>
          <div className="flex items-center gap-6">
            <div className="flex items-center space-x-2">
              <Switch id="default-off" variant="default" />
              <Label htmlFor="default-off" className="text-sm">
                Unchecked
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="default-on" variant="default" defaultChecked />
              <Label htmlFor="default-on" className="text-sm">
                Checked
              </Label>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="mb-3 text-sm font-semibold">Primary Variant (Blue)</h3>
          <div className="flex items-center gap-6">
            <div className="flex items-center space-x-2">
              <Switch id="primary-off" variant="primary" />
              <Label htmlFor="primary-off" className="text-sm">
                Unchecked
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="primary-on" variant="primary" defaultChecked />
              <Label htmlFor="primary-on" className="text-sm">
                Checked
              </Label>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg border p-4">
        <p className="text-sm">
          <span className="font-semibold">Default (Green):</span> Used in most
          contexts as the standard success/enabled state
        </p>
        <p className="text-muted-foreground mt-1 text-xs">
          Green aligns with Neura Robotics brand for active/operational states
        </p>
        <p className="mt-3 text-sm">
          <span className="font-semibold">Primary (Blue):</span> Alternative
          variant for brand-specific or informational contexts
        </p>
        <p className="text-muted-foreground mt-1 text-xs">
          Blue can be used when you need consistency with other primary-colored
          elements
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The Switch component comes in two color variants: `default` (green) and `primary` (blue). Green is the default as it aligns with Neura Robotics branding for active states.',
      },
    },
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="mb-2 text-sm font-medium">Default Variant</h4>
        <div className="flex items-center gap-6">
          <Switch disabled variant="default" />
          <Switch disabled checked variant="default" />
        </div>
      </div>
      <div>
        <h4 className="mb-2 text-sm font-medium">Primary Variant</h4>
        <div className="flex items-center gap-6">
          <Switch disabled variant="primary" />
          <Switch disabled checked variant="primary" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Switches can be disabled in both checked and unchecked states, across all variants.',
      },
    },
  },
};

export const WithLabel: Story = {
  render: function WithLabelExample() {
    const [enabled, setEnabled] = React.useState(false);

    return (
      <div className="flex items-center space-x-2">
        <Switch
          id="airplane-mode"
          checked={enabled}
          onCheckedChange={setEnabled}
        />
        <Label htmlFor="airplane-mode" className="cursor-pointer">
          Airplane Mode
        </Label>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Always pair switches with labels for clarity. Use `htmlFor` to associate the label with the switch.',
      },
    },
  },
};

export const WithDescription: Story = {
  render: function WithDescriptionExample() {
    const [notifications, setNotifications] = React.useState(true);

    return (
      <div className="flex items-center justify-between space-x-4">
        <div className="space-y-0.5">
          <Label htmlFor="notifications" className="cursor-pointer">
            Push Notifications
          </Label>
          <p className="text-muted-foreground text-sm">
            Receive alerts about robot status changes
          </p>
        </div>
        <Switch
          id="notifications"
          checked={notifications}
          onCheckedChange={setNotifications}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Provide descriptive text to help users understand what the switch controls.',
      },
    },
  },
};

export const Controlled: Story = {
  render: function ControlledExample() {
    const [checked, setChecked] = React.useState(false);

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between space-x-4 rounded-lg border p-4">
          <div className="space-y-0.5">
            <Label htmlFor="controlled-switch" className="cursor-pointer">
              Enable Feature
            </Label>
            <p className="text-muted-foreground text-sm">
              Current state: {checked ? 'Enabled' : 'Disabled'}
            </p>
          </div>
          <Switch
            id="controlled-switch"
            checked={checked}
            onCheckedChange={setChecked}
          />
        </div>

        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setChecked(true)}
            disabled={checked}
          >
            Enable
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setChecked(false)}
            disabled={!checked}
          >
            Disable
          </Button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Controlled switch example where the state is managed by React useState.',
      },
    },
  },
};

export const AccessibilityExample: Story = {
  name: 'Accessibility Features',
  render: function AccessibilityDemo() {
    const [soundEnabled, setSoundEnabled] = React.useState(true);

    return (
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Accessibility Demo</CardTitle>
          <CardDescription>
            All switches are fully accessible with keyboard navigation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted/50 rounded-lg border p-3 text-sm">
            <p className="mb-2 font-medium">Keyboard Navigation:</p>
            <ul className="text-muted-foreground space-y-1 text-xs">
              <li>
                • <kbd className="bg-background rounded px-1.5 py-0.5">Tab</kbd>{' '}
                - Focus switch
              </li>
              <li>
                •{' '}
                <kbd className="bg-background rounded px-1.5 py-0.5">Space</kbd>{' '}
                - Toggle switch
              </li>
              <li>
                •{' '}
                <kbd className="bg-background rounded px-1.5 py-0.5">Enter</kbd>{' '}
                - Toggle switch
              </li>
            </ul>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label
                htmlFor="sound-effects"
                className="flex cursor-pointer items-center gap-1.5"
              >
                <Volume2 className="size-4" />
                Sound Effects
              </Label>
              <p
                className="text-muted-foreground text-xs"
                id="sound-description"
              >
                Play audio feedback for actions
              </p>
            </div>
            <Switch
              id="sound-effects"
              checked={soundEnabled}
              onCheckedChange={setSoundEnabled}
              aria-describedby="sound-description"
            />
          </div>

          <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-3 text-xs">
            <p className="text-blue-700 dark:text-blue-400">
              ✓ ARIA-compliant with proper labeling
              <br />
              ✓ Screen reader friendly
              <br />
              ✓ Full keyboard support
              <br />✓ Focus visible indicator
            </p>
          </div>
        </CardContent>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates accessibility features including keyboard navigation and ARIA attributes.',
      },
    },
  },
};
