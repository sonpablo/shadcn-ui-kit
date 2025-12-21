import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { Label } from '@/components/label/label';
import { Pill } from '@/components/pill/pill';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the radio group is disabled',
    },
    defaultValue: {
      control: 'text',
      description: 'The default selected value',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the radio group',
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default
export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
};

// Horizontal Layout
export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable" className="flex gap-6">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="h-default" />
        <Label htmlFor="h-default">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="h-comfortable" />
        <Label htmlFor="h-comfortable">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="h-compact" />
        <Label htmlFor="h-compact">Compact</Label>
      </div>
    </RadioGroup>
  ),
};

// With Description
export const WithDescription: Story = {
  render: () => (
    <RadioGroup defaultValue="card" className="gap-4">
      <div className="flex items-start space-x-3">
        <RadioGroupItem value="card" id="payment-card" className="mt-1" />
        <div className="grid gap-1">
          <Label htmlFor="payment-card" className="font-medium">
            Credit Card
          </Label>
          <p className="text-muted-foreground text-sm">
            Pay with Visa, Mastercard, or American Express
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <RadioGroupItem value="paypal" id="payment-paypal" className="mt-1" />
        <div className="grid gap-1">
          <Label htmlFor="payment-paypal" className="font-medium">
            PayPal
          </Label>
          <p className="text-muted-foreground text-sm">
            Pay using your PayPal account
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <RadioGroupItem value="crypto" id="payment-crypto" className="mt-1" />
        <div className="grid gap-1">
          <Label htmlFor="payment-crypto" className="font-medium">
            Cryptocurrency
          </Label>
          <p className="text-muted-foreground text-sm">
            Pay with Bitcoin, Ethereum, or other cryptocurrencies
          </p>
        </div>
      </div>
    </RadioGroup>
  ),
};

// Disabled
export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="disabled-one" />
        <Label htmlFor="disabled-one" className="text-muted-foreground">
          Option One (selected)
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="disabled-two" />
        <Label htmlFor="disabled-two" className="text-muted-foreground">
          Option Two
        </Label>
      </div>
    </RadioGroup>
  ),
};

// Error State (aria-invalid) - Interactive
export const ErrorState: Story = {
  render: function ErrorStateComponent() {
    const [hasError, setHasError] = React.useState(true);

    return (
      <div className="w-80 space-y-6">
        {/* Toggle control */}
        <div className="flex items-center justify-between rounded-lg border p-3">
          <Label htmlFor="error-toggle" className="text-sm font-medium">
            Show error state
          </Label>
          <button
            id="error-toggle"
            type="button"
            role="switch"
            aria-checked={hasError}
            onClick={() => setHasError(!hasError)}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
              hasError ? 'bg-destructive' : 'bg-input'
            }`}
          >
            <span
              className={`pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform ${
                hasError ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Form field */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-base font-medium">Select an option</Label>
            {hasError && (
              <p className="text-destructive text-sm">
                Please select one of the options below
              </p>
            )}
          </div>
          <RadioGroup>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="option-one"
                id="error-one"
                aria-invalid={hasError}
              />
              <Label htmlFor="error-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="option-two"
                id="error-two"
                aria-invalid={hasError}
              />
              <Label htmlFor="error-two">Option Two</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="option-three"
                id="error-three"
                aria-invalid={hasError}
              />
              <Label htmlFor="error-three">Option Three</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    );
  },
};

// Single Disabled Item
export const SingleDisabledItem: Story = {
  render: () => (
    <RadioGroup defaultValue="available">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="available" id="item-available" />
        <Label htmlFor="item-available">Available</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="limited" id="item-limited" />
        <Label htmlFor="item-limited">Limited Stock</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="soldout" id="item-soldout" disabled />
        <Label htmlFor="item-soldout" className="text-muted-foreground">
          Sold Out (unavailable)
        </Label>
      </div>
    </RadioGroup>
  ),
};

// Card Style
export const CardStyle: Story = {
  render: () => (
    <RadioGroup defaultValue="standard" className="gap-3">
      {[
        {
          value: 'standard',
          title: 'Standard',
          description: 'Free shipping, 5-7 business days',
          price: 'Free',
        },
        {
          value: 'express',
          title: 'Express',
          description: 'Fast shipping, 2-3 business days',
          price: '$9.99',
        },
        {
          value: 'overnight',
          title: 'Overnight',
          description: 'Next business day delivery',
          price: '$24.99',
        },
      ].map((option) => (
        <Label
          key={option.value}
          htmlFor={`card-${option.value}`}
          className="border-input has-[[data-state=checked]]:border-green-500 has-[[data-state=checked]]:bg-green-50 dark:has-[[data-state=checked]]:bg-green-950/20 flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors"
        >
          <RadioGroupItem
            value={option.value}
            id={`card-${option.value}`}
            className="mt-0.5"
          />
          <div className="flex flex-1 items-start justify-between">
            <div className="grid gap-1">
              <span className="font-medium">{option.title}</span>
              <span className="text-muted-foreground text-sm">
                {option.description}
              </span>
            </div>
            <span className="font-semibold">{option.price}</span>
          </div>
        </Label>
      ))}
    </RadioGroup>
  ),
};

// Plan Selection
export const PlanSelection: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <h3 className="mb-4 text-lg font-semibold">Choose your plan</h3>
      <RadioGroup defaultValue="pro" className="gap-3">
        {[
          {
            value: 'free',
            title: 'Free',
            description: 'For individuals getting started',
            price: '$0',
            period: '/month',
          },
          {
            value: 'pro',
            title: 'Pro',
            description: 'For small teams and professionals',
            price: '$19',
            period: '/month',
          },
          {
            value: 'enterprise',
            title: 'Enterprise',
            description: 'For large organizations',
            price: '$99',
            period: '/month',
          },
        ].map((plan) => (
          <Label
            key={plan.value}
            htmlFor={`plan-${plan.value}`}
            className="border-input has-[[data-state=checked]]:border-green-500 has-[[data-state=checked]]:ring-2 has-[[data-state=checked]]:ring-green-500/20 flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition-all"
          >
            <RadioGroupItem value={plan.value} id={`plan-${plan.value}`} />
            <div className="flex-1">
              <span className="font-medium">{plan.title}</span>
              <p className="text-muted-foreground text-sm">
                {plan.description}
              </p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold">{plan.price}</span>
              <span className="text-muted-foreground text-sm">
                {plan.period}
              </span>
            </div>
          </Label>
        ))}
      </RadioGroup>
    </div>
  ),
};

// With Form Field
export const WithFormField: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div className="space-y-2">
        <Label className="text-base font-medium">Notification Preferences</Label>
        <p className="text-muted-foreground text-sm">
          How would you like to receive notifications?
        </p>
      </div>
      <RadioGroup defaultValue="email" className="gap-3">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="all" id="notify-all" />
          <Label htmlFor="notify-all">All notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="email" id="notify-email" />
          <Label htmlFor="notify-email">Email only</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="push" id="notify-push" />
          <Label htmlFor="notify-push">Push notifications only</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="none" id="notify-none" />
          <Label htmlFor="notify-none">No notifications</Label>
        </div>
      </RadioGroup>
    </div>
  ),
};

// Size Selector
export const SizeSelector: Story = {
  render: () => (
    <div className="space-y-3">
      <Label className="text-sm font-medium">Select Size</Label>
      <RadioGroup defaultValue="xxl" className="flex gap-2">
        {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
          <Label
            key={size}
            htmlFor={`size-${size}`}
            className="border-input has-[[data-state=checked]]:border-green-500 has-[[data-state=checked]]:bg-green-500 has-[[data-state=checked]]:text-white flex size-10 cursor-pointer items-center justify-center rounded-md border text-sm font-medium transition-colors"
          >
            <RadioGroupItem
              value={size.toLowerCase()}
              id={`size-${size}`}
              className="sr-only"
            />
            {size}
          </Label>
        ))}
      </RadioGroup>
    </div>
  ),
};

// Color Selector
export const ColorSelector: Story = {
  render: () => {
    const colors = [
      { value: 'black', bg: 'bg-gray-900', ring: 'ring-gray-900' },
      { value: 'white', bg: 'bg-white border border-gray-200', ring: 'ring-gray-400' },
      { value: 'red', bg: 'bg-red-500', ring: 'ring-red-500' },
      { value: 'blue', bg: 'bg-blue-500', ring: 'ring-blue-500' },
      { value: 'green', bg: 'bg-green-500', ring: 'ring-green-500' },
      { value: 'purple', bg: 'bg-purple-500', ring: 'ring-purple-500' },
    ];

    return (
      <div className="space-y-3">
        <Label className="text-sm font-medium">Select Color</Label>
        <RadioGroup defaultValue="black" className="flex gap-3">
          {colors.map((color) => (
            <Label
              key={color.value}
              htmlFor={`color-${color.value}`}
              className={`has-[[data-state=checked]]:ring-2 has-[[data-state=checked]]:ring-offset-2 ${color.bg} has-[[data-state=checked]]:${color.ring} size-8 cursor-pointer rounded-full transition-all`}
            >
              <RadioGroupItem
                value={color.value}
                id={`color-${color.value}`}
                className="sr-only"
              />
              <span className="sr-only">{color.value}</span>
            </Label>
          ))}
        </RadioGroup>
      </div>
    );
  },
};

// With Pill Component - Showing how components complement each other
export const WithPill: Story = {
  render: () => (
    <div className="space-y-4">
      <Label className="text-sm font-medium">Select your status</Label>
      <RadioGroup defaultValue="online" className="flex flex-wrap gap-2">
        {[
          { value: 'online', label: 'Online', dot: 'bg-green-500' },
          { value: 'away', label: 'Away', dot: 'bg-yellow-500' },
          { value: 'busy', label: 'Busy', dot: 'bg-red-500' },
          { value: 'offline', label: 'Offline', dot: 'bg-gray-400' },
        ].map((status) => (
          <Label
            key={status.value}
            htmlFor={`pill-status-${status.value}`}
            className="cursor-pointer"
          >
            <Pill className="has-[[data-state=checked]]:bg-primary has-[[data-state=checked]]:text-primary-foreground has-[[data-state=checked]]:before:border-primary">
              <RadioGroupItem
                value={status.value}
                id={`pill-status-${status.value}`}
                className="sr-only"
              />
              <span>{status.label}</span>
              <span className={`size-2 rounded-full ${status.dot}`} />
            </Pill>
          </Label>
        ))}
      </RadioGroup>
      <p className="text-muted-foreground text-xs">
        This example shows how RadioGroup and Pill components work together.
        The RadioGroupItem is hidden (sr-only) and the Pill changes style based on the radio state.
      </p>
    </div>
  ),
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Vertical (Default)</h3>
        <RadioGroup defaultValue="a">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="a" id="v-a" />
            <Label htmlFor="v-a">Option A</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="b" id="v-b" />
            <Label htmlFor="v-b">Option B</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Horizontal</h3>
        <RadioGroup defaultValue="1" className="flex gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1" id="h-1" />
            <Label htmlFor="h-1">First</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2" id="h-2" />
            <Label htmlFor="h-2">Second</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3" id="h-3" />
            <Label htmlFor="h-3">Third</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Disabled State</h3>
        <RadioGroup defaultValue="checked" disabled>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="checked" id="d-checked" />
            <Label htmlFor="d-checked" className="text-muted-foreground">
              Selected & Disabled
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="unchecked" id="d-unchecked" />
            <Label htmlFor="d-unchecked" className="text-muted-foreground">
              Unselected & Disabled
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

