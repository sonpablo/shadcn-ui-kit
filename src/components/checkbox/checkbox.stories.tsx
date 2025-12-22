import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';
import { Label } from '@/components/label/label';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default
export const Default: Story = {
  render: () => <Checkbox />,
};

// With Label
export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

// Checked by default
export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="checked" defaultChecked />
      <Label htmlFor="checked">This is checked by default</Label>
    </div>
  ),
};

// Disabled
export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled" className="text-muted-foreground">
          Disabled unchecked
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-checked" disabled defaultChecked />
        <Label htmlFor="disabled-checked" className="text-muted-foreground">
          Disabled checked
        </Label>
      </div>
    </div>
  ),
};

// With Description
export const WithDescription: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-start space-x-3">
        <Checkbox id="marketing" className="mt-1" />
        <div className="grid gap-1">
          <Label htmlFor="marketing" className="font-medium">
            Marketing emails
          </Label>
          <p className="text-muted-foreground text-sm">
            Receive emails about new products, features, and more.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <Checkbox id="security" className="mt-1" defaultChecked />
        <div className="grid gap-1">
          <Label htmlFor="security" className="font-medium">
            Security emails
          </Label>
          <p className="text-muted-foreground text-sm">
            Receive emails about your account security.
          </p>
        </div>
      </div>
    </div>
  ),
};

// Indeterminate State
export const Indeterminate: Story = {
  render: function Render() {
    const [checked, setChecked] = React.useState<boolean | 'indeterminate'>(
      'indeterminate',
    );

    return (
      <div className="space-y-4">
        <div className="bg-muted/50 rounded-md p-3">
          <p className="text-muted-foreground text-sm">
            Click the checkbox to cycle through states: indeterminate → checked
            → unchecked → indeterminate
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="indeterminate"
            checked={checked}
            onCheckedChange={(value) => {
              if (checked === 'indeterminate') {
                setChecked(true);
              } else if (checked === true) {
                setChecked(false);
              } else {
                setChecked('indeterminate');
              }
            }}
          />
          <Label htmlFor="indeterminate">
            Current state: {String(checked)}
          </Label>
        </div>
      </div>
    );
  },
};

// Error State
export const ErrorState: Story = {
  render: function Render() {
    const [hasError, setHasError] = React.useState(true);

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="toggle-error"
            checked={hasError}
            onCheckedChange={(checked) => setHasError(checked as boolean)}
          />
          <Label htmlFor="toggle-error">Toggle error state</Label>
        </div>
        <div className="border-t pt-4">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="terms-error"
              aria-invalid={hasError}
              className="mt-1"
            />
            <div className="grid gap-1">
              <Label
                htmlFor="terms-error"
                className={hasError ? 'text-destructive' : ''}
              >
                I agree to the terms of service
              </Label>
              {hasError && (
                <p className="text-destructive text-sm">
                  You must accept the terms to continue.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// Form Example
export const FormExample: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <div className="space-y-4">
        <h4 className="text-sm font-medium leading-none">Notification Settings</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="email-notif" defaultChecked />
            <Label htmlFor="email-notif">Email notifications</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="push-notif" defaultChecked />
            <Label htmlFor="push-notif">Push notifications</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="sms-notif" />
            <Label htmlFor="sms-notif">SMS notifications</Label>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-medium leading-none">Privacy Settings</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="profile-public" />
            <Label htmlFor="profile-public">Make profile public</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="show-email" />
            <Label htmlFor="show-email">Show email on profile</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="analytics" defaultChecked />
            <Label htmlFor="analytics">Allow analytics tracking</Label>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Card Checkboxes
export const CardCheckboxes: Story = {
  render: function Render() {
    const [selected, setSelected] = React.useState<string[]>(['starter']);

    const togglePlan = (plan: string) => {
      setSelected((prev) =>
        prev.includes(plan)
          ? prev.filter((p) => p !== plan)
          : [...prev, plan],
      );
    };

    const plans = [
      {
        id: 'starter',
        name: 'Starter',
        price: '$9/mo',
        description: 'Perfect for small projects',
      },
      {
        id: 'pro',
        name: 'Pro',
        price: '$29/mo',
        description: 'For growing businesses',
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        price: '$99/mo',
        description: 'For large organizations',
      },
    ];

    return (
      <div className="w-80 space-y-3">
        {plans.map((plan) => (
          <label
            key={plan.id}
            htmlFor={plan.id}
            className={`flex cursor-pointer items-start space-x-3 rounded-lg border p-4 transition-colors ${
              selected.includes(plan.id)
                ? 'border-primary bg-primary/5'
                : 'border-input hover:bg-muted/50'
            }`}
          >
            <Checkbox
              id={plan.id}
              checked={selected.includes(plan.id)}
              onCheckedChange={() => togglePlan(plan.id)}
              className="mt-0.5"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-medium">{plan.name}</span>
                <span className="text-muted-foreground text-sm">
                  {plan.price}
                </span>
              </div>
              <p className="text-muted-foreground text-sm">{plan.description}</p>
            </div>
          </label>
        ))}
      </div>
    );
  },
};

// Select All Pattern
export const SelectAll: Story = {
  render: function Render() {
    const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
    const [selected, setSelected] = React.useState<string[]>(['Apple', 'Banana']);

    const allSelected = selected.length === items.length;
    const someSelected = selected.length > 0 && selected.length < items.length;

    const toggleAll = () => {
      setSelected(allSelected ? [] : [...items]);
    };

    const toggleItem = (item: string) => {
      setSelected((prev) =>
        prev.includes(item)
          ? prev.filter((i) => i !== item)
          : [...prev, item],
      );
    };

    return (
      <div className="w-64 space-y-4">
        <div className="border-b pb-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="select-all"
              checked={someSelected ? 'indeterminate' : allSelected}
              onCheckedChange={toggleAll}
            />
            <Label htmlFor="select-all" className="font-medium">
              Select all ({selected.length}/{items.length})
            </Label>
          </div>
        </div>
        <div className="space-y-2">
          {items.map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox
                id={item.toLowerCase()}
                checked={selected.includes(item)}
                onCheckedChange={() => toggleItem(item)}
              />
              <Label htmlFor={item.toLowerCase()}>{item}</Label>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// Controlled Checkbox
export const Controlled: Story = {
  render: function Render() {
    const [checked, setChecked] = React.useState(false);

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="controlled"
            checked={checked}
            onCheckedChange={(value) => setChecked(value as boolean)}
          />
          <Label htmlFor="controlled">Controlled checkbox</Label>
        </div>
        <p className="text-muted-foreground text-sm">
          Checkbox is: <strong>{checked ? 'checked' : 'unchecked'}</strong>
        </p>
        <button
          onClick={() => setChecked(!checked)}
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-3 py-1.5 text-sm"
        >
          Toggle externally
        </button>
      </div>
    );
  },
};

