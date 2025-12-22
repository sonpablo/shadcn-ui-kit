import type { Meta, StoryObj } from '@storybook/react';
import {
  Field,
  FieldSet,
  FieldLegend,
  FieldGroup,
  FieldContent,
  FieldLabel,
  FieldTitle,
  FieldDescription,
  FieldSeparator,
  FieldError,
  FieldControl,
} from './field';
import { Input } from '@/components/input/input';
import { Textarea } from '@/components/textarea/textarea';
import { Checkbox } from '@/components/checkbox/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select/select';
import { RadioGroup, RadioGroupItem } from '@/components/radio-group/radio-group';
import { Label } from '@/components/label/label';

const meta = {
  title: 'Components/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof Field>;

// Basic Input Field
export const BasicInput: Story = {
  render: () => (
    <Field className="w-[350px]">
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" type="email" placeholder="you@example.com" />
      <FieldDescription>
        We'll never share your email with anyone else.
      </FieldDescription>
    </Field>
  ),
};

// With Optional Label
export const OptionalField: Story = {
  render: () => (
    <Field className="w-[350px]">
      <FieldLabel htmlFor="phone" optional>
        Phone Number
      </FieldLabel>
      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
      <FieldDescription>For account recovery only.</FieldDescription>
    </Field>
  ),
};

// With Error State
export const WithError: Story = {
  render: () => (
    <Field className="w-[350px]" data-invalid="true">
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input
        id="username"
        placeholder="johndoe"
        defaultValue="a"
        aria-invalid="true"
      />
      <FieldError errors="Username must be at least 3 characters." />
    </Field>
  ),
};

// Multiple Errors
export const MultipleErrors: Story = {
  render: () => (
    <Field className="w-[350px]" data-invalid="true">
      <FieldLabel htmlFor="password">Password</FieldLabel>
      <Input id="password" type="password" aria-invalid="true" />
      <FieldError
        errors={[
          'Password must be at least 8 characters.',
          'Password must contain at least one uppercase letter.',
          'Password must contain at least one number.',
        ]}
      />
    </Field>
  ),
};

// Disabled State
export const Disabled: Story = {
  render: () => (
    <Field className="w-[350px]" data-disabled="true">
      <FieldLabel htmlFor="disabled-input">Disabled Field</FieldLabel>
      <Input id="disabled-input" disabled placeholder="Can't edit this" />
      <FieldDescription>This field is currently disabled.</FieldDescription>
    </Field>
  ),
};

// With Textarea
export const WithTextarea: Story = {
  render: () => (
    <Field className="w-[350px]">
      <FieldLabel htmlFor="bio">Bio</FieldLabel>
      <Textarea
        id="bio"
        placeholder="Tell us about yourself..."
        className="min-h-[100px]"
      />
      <FieldDescription>
        Write a short bio. Max 500 characters.
      </FieldDescription>
    </Field>
  ),
};

// With Select
export const WithSelect: Story = {
  render: () => (
    <Field className="w-[350px]">
      <FieldLabel htmlFor="country">Country</FieldLabel>
      <Select>
        <SelectTrigger id="country">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          <SelectItem value="au">Australia</SelectItem>
        </SelectContent>
      </Select>
      <FieldDescription>
        Select your country of residence.
      </FieldDescription>
    </Field>
  ),
};

// Field Group
export const FieldGroupExample: Story = {
  render: () => (
    <FieldGroup className="w-[350px]">
      <Field>
        <FieldLabel htmlFor="first-name">First Name</FieldLabel>
        <Input id="first-name" placeholder="John" />
      </Field>
      <Field>
        <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
        <Input id="last-name" placeholder="Doe" />
      </Field>
      <Field>
        <FieldLabel htmlFor="email-group">Email</FieldLabel>
        <Input id="email-group" type="email" placeholder="john@example.com" />
      </Field>
    </FieldGroup>
  ),
};

// FieldSet with Legend
export const FieldSetExample: Story = {
  render: () => (
    <FieldSet className="w-[400px]">
      <FieldLegend>Personal Information</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="full-name">Full Name</FieldLabel>
          <Input id="full-name" placeholder="John Doe" />
        </Field>
        <Field>
          <FieldLabel htmlFor="email-set">Email</FieldLabel>
          <Input id="email-set" type="email" placeholder="john@example.com" />
        </Field>
        <Field>
          <FieldLabel htmlFor="dob">Date of Birth</FieldLabel>
          <Input id="dob" type="date" />
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

// Horizontal Layout
export const HorizontalLayout: Story = {
  render: () => (
    <Field className="w-[500px] grid-cols-[150px_1fr] items-center">
      <FieldLabel htmlFor="horizontal-email">Email</FieldLabel>
      <Input id="horizontal-email" type="email" placeholder="you@example.com" />
    </Field>
  ),
};

// Checkbox Field
export const CheckboxField: Story = {
  render: () => (
    <Field className="w-[350px] flex-row items-start gap-3">
      <Checkbox id="terms" />
      <FieldContent className="gap-1">
        <FieldLabel htmlFor="terms" className="cursor-pointer">
          Accept terms and conditions
        </FieldLabel>
        <FieldDescription>
          You agree to our Terms of Service and Privacy Policy.
        </FieldDescription>
      </FieldContent>
    </Field>
  ),
};

// Radio Group Field
export const RadioGroupField: Story = {
  render: () => (
    <Field className="w-[350px]">
      <FieldLabel>Notification Preferences</FieldLabel>
      <RadioGroup defaultValue="email" className="mt-2">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="email" id="notify-email" />
          <Label htmlFor="notify-email">Email</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="sms" id="notify-sms" />
          <Label htmlFor="notify-sms">SMS</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="push" id="notify-push" />
          <Label htmlFor="notify-push">Push notifications</Label>
        </div>
      </RadioGroup>
      <FieldDescription>
        Choose how you'd like to receive notifications.
      </FieldDescription>
    </Field>
  ),
};

// With Field Separator
export const WithSeparator: Story = {
  render: () => (
    <FieldGroup className="w-[350px]">
      <Field>
        <FieldLabel htmlFor="current-password">Current Password</FieldLabel>
        <Input id="current-password" type="password" />
      </Field>
      <FieldSeparator />
      <Field>
        <FieldLabel htmlFor="new-password">New Password</FieldLabel>
        <Input id="new-password" type="password" />
        <FieldDescription>At least 8 characters.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
        <Input id="confirm-password" type="password" />
      </Field>
    </FieldGroup>
  ),
};

// Responsive Two Column Layout
export const ResponsiveLayout: Story = {
  render: () => (
    <FieldSet className="w-[600px]">
      <FieldLegend>Shipping Address</FieldLegend>
      <FieldGroup className="grid-cols-1 sm:grid-cols-2">
        <Field className="sm:col-span-2">
          <FieldLabel htmlFor="street">Street Address</FieldLabel>
          <Input id="street" placeholder="123 Main St" />
        </Field>
        <Field>
          <FieldLabel htmlFor="city">City</FieldLabel>
          <Input id="city" placeholder="New York" />
        </Field>
        <Field>
          <FieldLabel htmlFor="state">State</FieldLabel>
          <Input id="state" placeholder="NY" />
        </Field>
        <Field>
          <FieldLabel htmlFor="zip">ZIP Code</FieldLabel>
          <Input id="zip" placeholder="10001" />
        </Field>
        <Field>
          <FieldLabel htmlFor="country-ship">Country</FieldLabel>
          <Select>
            <SelectTrigger id="country-ship">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="mx">Mexico</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

// Card-Style Checkbox
export const CardCheckbox: Story = {
  render: () => (
    <FieldGroup className="w-[400px]">
      {[
        {
          id: 'plan-free',
          title: 'Free',
          description: 'Basic features for personal use',
        },
        {
          id: 'plan-pro',
          title: 'Pro',
          description: 'Advanced features for professionals',
        },
        {
          id: 'plan-enterprise',
          title: 'Enterprise',
          description: 'Custom solutions for large teams',
        },
      ].map((plan) => (
        <Field
          key={plan.id}
          className="has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5 flex-row items-start gap-3 rounded-lg border p-4"
        >
          <Checkbox id={plan.id} />
          <FieldContent className="gap-0.5">
            <FieldTitle>{plan.title}</FieldTitle>
            <FieldDescription>{plan.description}</FieldDescription>
          </FieldContent>
        </Field>
      ))}
    </FieldGroup>
  ),
};

// With FieldControl (Slot wrapper for custom styling)
export const WithFieldControl: Story = {
  render: () => (
    <Field className="w-[350px]" data-invalid="true">
      <FieldLabel htmlFor="controlled">Email</FieldLabel>
      <FieldControl>
        <Input id="controlled" placeholder="test@example.com" />
      </FieldControl>
      <FieldError errors="This email is already taken." />
    </Field>
  ),
};
