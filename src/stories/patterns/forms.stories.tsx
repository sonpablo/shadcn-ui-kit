import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Field,
  FieldSet,
  FieldLegend,
  FieldGroup,
  FieldContent,
  FieldLabel,
  FieldDescription,
  FieldError,
} from '@/components/field/field';
import { Input } from '@/components/input/input';
import { Textarea } from '@/components/textarea/textarea';
import { Button } from '@/components/button/button';
import { Checkbox } from '@/components/checkbox/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select/select';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/radio-group/radio-group';
import { Label } from '@/components/label/label';
import {
  DatePicker,
  DatePickerButton,
  DateRangePicker,
} from '@/components/date-picker/date-picker';
import type { DateRange } from 'react-day-picker';

const meta = {
  title: 'Patterns/Forms',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

/* =============================================================================
 * Native HTML Forms
 * ============================================================================= */

// Support Request Form (Native HTML)
export const ContactForm: Story = {
  name: 'Support Request (Native)',
  render: function ContactFormExample() {
    const [submitted, setSubmitted] = React.useState(false);
    const [errors, setErrors] = React.useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const newErrors: Record<string, string> = {};

      const name = formData.get('name') as string;
      const email = formData.get('email') as string;

      if (!name || name.length < 2) {
        newErrors.name = 'Name must be at least 2 characters.';
      }
      if (!email || !email.includes('@')) {
        newErrors.email = 'Please enter a valid email address.';
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      setErrors({});
      setSubmitted(true);
    };

    if (submitted) {
      return (
        <div className="w-[400px] rounded-lg border border-green-500 bg-green-50 p-4 text-green-700 dark:bg-green-950 dark:text-green-300">
          Support request submitted successfully!
          <Button
            variant="link"
            onClick={() => setSubmitted(false)}
            className="ml-2"
          >
            Reset
          </Button>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="w-[400px]">
        <FieldSet>
          <FieldLegend>Support Request</FieldLegend>
          <FieldGroup>
            <Field data-invalid={!!errors.name}>
              <FieldLabel htmlFor="name">Operator Name</FieldLabel>
              <Input
                id="name"
                name="name"
                placeholder="Anna Schmidt"
                aria-invalid={!!errors.name}
              />
              <FieldError errors={errors.name} />
            </Field>

            <Field data-invalid={!!errors.email}>
              <FieldLabel htmlFor="email-native">Email</FieldLabel>
              <Input
                id="email-native"
                name="email"
                type="email"
                placeholder="anna@neura-robotics.com"
                aria-invalid={!!errors.email}
              />
              <FieldDescription>
                We'll send a ticket confirmation to this email.
              </FieldDescription>
              <FieldError errors={errors.email} />
            </Field>

            <Field>
              <FieldLabel htmlFor="message" optional>
                Issue Description
              </FieldLabel>
              <Textarea
                id="message"
                name="message"
                placeholder="Describe the robot issue or support needed..."
                className="min-h-[80px]"
              />
            </Field>

            <Field className="flex-row items-center gap-3">
              <Checkbox id="newsletter" name="newsletter" />
              <FieldLabel htmlFor="newsletter" className="cursor-pointer">
                Subscribe to fleet updates
              </FieldLabel>
            </Field>

            <Button type="submit" className="w-full">
              Submit Request
            </Button>
          </FieldGroup>
        </FieldSet>
      </form>
    );
  },
};

// Fleet Portal Login (Native HTML)
export const LoginForm: Story = {
  name: 'Fleet Portal Login (Native)',
  render: function LoginFormExample() {
    const [errors, setErrors] = React.useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const newErrors: Record<string, string> = {};

      const email = formData.get('login-email') as string;
      const password = formData.get('login-password') as string;

      if (!email) newErrors.email = 'Email is required.';
      if (!password) newErrors.password = 'Password is required.';

      setErrors(newErrors);
    };

    return (
      <form onSubmit={handleSubmit} className="w-[350px] space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Fleet Portal</h2>
          <p className="text-muted-foreground text-sm">
            Sign in to manage your robots
          </p>
        </div>

        <FieldGroup>
          <Field data-invalid={!!errors.email}>
            <FieldLabel htmlFor="login-email">Email</FieldLabel>
            <Input
              id="login-email"
              name="login-email"
              type="email"
              placeholder="operator@neura-robotics.com"
              aria-invalid={!!errors.email}
            />
            <FieldError errors={errors.email} />
          </Field>

          <Field data-invalid={!!errors.password}>
            <FieldLabel htmlFor="login-password">Password</FieldLabel>
            <Input
              id="login-password"
              name="login-password"
              type="password"
              aria-invalid={!!errors.password}
            />
            <FieldError errors={errors.password} />
          </Field>

          <Field className="flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <FieldLabel htmlFor="remember" className="cursor-pointer text-sm">
                Remember me
              </FieldLabel>
            </div>
            <Button variant="link" className="h-auto p-0 text-sm">
              Forgot password?
            </Button>
          </Field>

          <Button type="submit" className="w-full">
            Access Fleet
          </Button>
        </FieldGroup>
      </form>
    );
  },
};

/* =============================================================================
 * React Hook Form + Zod
 * ============================================================================= */

// Robot Registration with RHF + Zod
const basicFormSchema = z.object({
  robotName: z
    .string()
    .min(3, 'Robot name must be at least 3 characters.')
    .max(20, 'Robot name must be at most 20 characters.'),
  serialNumber: z.string().min(5, 'Please enter a valid serial number.'),
});

export const BasicRHFForm: Story = {
  name: 'Robot Registration (RHF + Zod)',
  render: function RHFBasicExample() {
    const [submitted, setSubmitted] = React.useState<z.infer<
      typeof basicFormSchema
    > | null>(null);

    const form = useForm<z.infer<typeof basicFormSchema>>({
      resolver: zodResolver(basicFormSchema),
      defaultValues: {
        robotName: '',
        serialNumber: '',
      },
    });

    function onSubmit(data: z.infer<typeof basicFormSchema>) {
      setSubmitted(data);
    }

    if (submitted) {
      return (
        <div className="w-[400px] space-y-4">
          <div className="rounded-lg border border-green-500 bg-green-50 p-4 text-green-700 dark:bg-green-950 dark:text-green-300">
            <p className="font-medium">Robot registered successfully!</p>
            <pre className="mt-2 text-xs">
              {JSON.stringify(submitted, null, 2)}
            </pre>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              setSubmitted(null);
              form.reset();
            }}
          >
            Register Another
          </Button>
        </div>
      );
    }

    return (
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[400px] space-y-6"
      >
        <FieldGroup>
          <Controller
            name="robotName"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="rhf-robotname">Robot Name</FieldLabel>
                <Input
                  {...field}
                  id="rhf-robotname"
                  placeholder="MAiRA Alpha"
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                />
                <FieldDescription>
                  A unique identifier for this robot unit.
                </FieldDescription>
                {fieldState.invalid && (
                  <FieldError errors={fieldState.error?.message} />
                )}
              </Field>
            )}
          />

          <Controller
            name="serialNumber"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="rhf-serial">Serial Number</FieldLabel>
                <Input
                  {...field}
                  id="rhf-serial"
                  placeholder="NR-2025-MAI-0001"
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={fieldState.error?.message} />
                )}
              </Field>
            )}
          />

          <div className="flex gap-2">
            <Button type="submit">Register Robot</Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
          </div>
        </FieldGroup>
      </form>
    );
  },
};

// Operator Registration with RHF + Zod
const registrationSchema = z
  .object({
    firstName: z.string().min(2, 'First name must be at least 2 characters.'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters.'),
    email: z.string().email('Please enter a valid email.'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters.')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter.')
      .regex(/[0-9]/, 'Password must contain at least one number.'),
    confirmPassword: z.string(),
    terms: z.boolean().refine((val) => val === true, {
      message: 'You must accept the terms and conditions.',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });

export const RegistrationForm: Story = {
  name: 'Operator Registration (RHF + Zod)',
  render: function RHFRegistrationExample() {
    const [submitted, setSubmitted] = React.useState(false);

    const form = useForm<z.infer<typeof registrationSchema>>({
      resolver: zodResolver(registrationSchema),
      defaultValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false,
      },
    });

    function onSubmit() {
      setSubmitted(true);
    }

    if (submitted) {
      return (
        <div className="w-[450px] space-y-4 text-center">
          <div className="rounded-lg border border-green-500 bg-green-50 p-6 dark:bg-green-950">
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">
              Registration Successful!
            </h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Check your email for access credentials.
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              setSubmitted(false);
              form.reset();
            }}
          >
            Register Another Operator
          </Button>
        </div>
      );
    }

    return (
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[450px] space-y-6"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold">Register as Operator</h2>
          <p className="text-muted-foreground text-sm">
            Join the Neuraverse fleet management platform
          </p>
        </div>

        <FieldGroup>
          <div className="grid grid-cols-2 gap-4">
            <Controller
              name="firstName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="rhf-firstname">First Name</FieldLabel>
                  <Input
                    {...field}
                    id="rhf-firstname"
                    placeholder="Anna"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={fieldState.error?.message} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="lastName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="rhf-lastname">Last Name</FieldLabel>
                  <Input
                    {...field}
                    id="rhf-lastname"
                    placeholder="Schmidt"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={fieldState.error?.message} />
                  )}
                </Field>
              )}
            />
          </div>

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="rhf-reg-email">Email</FieldLabel>
                <Input
                  {...field}
                  id="rhf-reg-email"
                  type="email"
                  placeholder="anna@neura-robotics.com"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={fieldState.error?.message} />
                )}
              </Field>
            )}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="rhf-password">Password</FieldLabel>
                <Input
                  {...field}
                  id="rhf-password"
                  type="password"
                  aria-invalid={fieldState.invalid}
                />
                <FieldDescription>
                  At least 8 characters, one uppercase letter, and one number.
                </FieldDescription>
                {fieldState.invalid && (
                  <FieldError errors={fieldState.error?.message} />
                )}
              </Field>
            )}
          />

          <Controller
            name="confirmPassword"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="rhf-confirm-password">
                  Confirm Password
                </FieldLabel>
                <Input
                  {...field}
                  id="rhf-confirm-password"
                  type="password"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={fieldState.error?.message} />
                )}
              </Field>
            )}
          />

          <Controller
            name="terms"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                className="flex-row items-start gap-3"
              >
                <Checkbox
                  id="rhf-terms"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  aria-invalid={fieldState.invalid}
                />
                <FieldContent className="gap-1">
                  <FieldLabel htmlFor="rhf-terms" className="cursor-pointer">
                    I accept the terms and conditions
                  </FieldLabel>
                  <FieldDescription>
                    By registering, you agree to our Terms of Service and
                    Privacy Policy.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={fieldState.error?.message} />
                  )}
                </FieldContent>
              </Field>
            )}
          />

          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </FieldGroup>
      </form>
    );
  },
};

// Fleet Configuration with Select and RadioGroup
const preferencesSchema = z.object({
  facility: z.string().min(1, 'Please select a facility.'),
  alertPreference: z.enum(['email', 'sms', 'push'], {
    message: 'Please select an alert preference.',
  }),
  notes: z
    .string()
    .max(200, 'Notes must be at most 200 characters.')
    .optional(),
});

export const PreferencesForm: Story = {
  name: 'Fleet Configuration (RHF + Select/Radio)',
  render: function RHFSelectExample() {
    const form = useForm<z.infer<typeof preferencesSchema>>({
      resolver: zodResolver(preferencesSchema),
      defaultValues: {
        facility: '',
        alertPreference: undefined,
        notes: '',
      },
    });

    function onSubmit(data: z.infer<typeof preferencesSchema>) {
      alert(JSON.stringify(data, null, 2));
    }

    return (
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[400px] space-y-6"
      >
        <FieldSet>
          <FieldLegend>Fleet Configuration</FieldLegend>
          <FieldGroup>
            <Controller
              name="facility"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="rhf-facility">Facility</FieldLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger
                      id="rhf-facility"
                      aria-invalid={fieldState.invalid}
                    >
                      <SelectValue placeholder="Select a facility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="munich">Munich Plant A</SelectItem>
                      <SelectItem value="stuttgart">
                        Stuttgart Factory
                      </SelectItem>
                      <SelectItem value="berlin">Berlin Warehouse</SelectItem>
                      <SelectItem value="hamburg">Hamburg Line B</SelectItem>
                      <SelectItem value="metzingen">Metzingen HQ</SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={fieldState.error?.message} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="alertPreference"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Alert Preference</FieldLabel>
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    className="mt-2"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="email" id="rhf-alert-email" />
                      <Label htmlFor="rhf-alert-email">Email</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="sms" id="rhf-alert-sms" />
                      <Label htmlFor="rhf-alert-sms">SMS</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="push" id="rhf-alert-push" />
                      <Label htmlFor="rhf-alert-push">Push Notifications</Label>
                    </div>
                  </RadioGroup>
                  {fieldState.invalid && (
                    <FieldError errors={fieldState.error?.message} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="notes"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="rhf-notes" optional>
                    Configuration Notes
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="rhf-notes"
                    placeholder="Add notes about this fleet configuration..."
                    className="min-h-[80px]"
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldDescription>
                    {field.value?.length || 0}/200 characters
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={fieldState.error?.message} />
                  )}
                </Field>
              )}
            />

            <div className="flex gap-2">
              <Button type="submit">Save Configuration</Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset()}
              >
                Reset
              </Button>
            </div>
          </FieldGroup>
        </FieldSet>
      </form>
    );
  },
};

// Real-time Validation Form
const realtimeSchema = z.object({
  operatorEmail: z.string().email('Invalid email format.'),
  accessCode: z.string().min(8, 'Access code too short.'),
});

export const RealtimeValidation: Story = {
  name: 'Real-time Validation (onChange)',
  render: function RHFRealtimeExample() {
    const form = useForm<z.infer<typeof realtimeSchema>>({
      resolver: zodResolver(realtimeSchema),
      mode: 'onChange',
      defaultValues: {
        operatorEmail: '',
        accessCode: '',
      },
    });

    const { isValid, isDirty } = form.formState;

    function onSubmit(data: z.infer<typeof realtimeSchema>) {
      alert(`Access granted for: ${data.operatorEmail}`);
    }

    return (
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[350px] space-y-6"
      >
        <div className="text-center">
          <h2 className="text-xl font-bold">Real-time Validation</h2>
          <p className="text-muted-foreground text-sm">
            Errors appear as you type (mode: onChange)
          </p>
        </div>

        <FieldGroup>
          <Controller
            name="operatorEmail"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="rhf-realtime-email">
                  Operator Email
                </FieldLabel>
                <Input
                  {...field}
                  id="rhf-realtime-email"
                  type="email"
                  placeholder="operator@neura-robotics.com"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={fieldState.error?.message} />
                )}
              </Field>
            )}
          />

          <Controller
            name="accessCode"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="rhf-realtime-accesscode">
                  Access Code
                </FieldLabel>
                <Input
                  {...field}
                  id="rhf-realtime-accesscode"
                  type="password"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={fieldState.error?.message} />
                )}
              </Field>
            )}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={!isValid || !isDirty}
          >
            {isValid && isDirty ? 'Submit' : 'Fill all fields correctly'}
          </Button>
        </FieldGroup>
      </form>
    );
  },
};

/* =============================================================================
 * Date Picker Forms
 * ============================================================================= */

// Maintenance Schedule Form with Date Picker
export const EventForm: Story = {
  name: 'Maintenance Schedule (with DatePicker)',
  render: function EventFormExample() {
    const [date, setDate] = React.useState<Date | undefined>(undefined);
    const [errors, setErrors] = React.useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const newErrors: Record<string, string> = {};

      const robotId = formData.get('title') as string;

      if (!robotId || robotId.length < 3) {
        newErrors.title = 'Robot ID must be at least 3 characters.';
      }
      if (!date) {
        newErrors.date = 'Please select a date.';
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      alert(
        `Maintenance scheduled for: ${robotId} on ${date?.toLocaleDateString()}`,
      );
    };

    return (
      <form onSubmit={handleSubmit} className="w-[400px]">
        <FieldSet>
          <FieldLegend>Schedule Maintenance</FieldLegend>
          <FieldGroup>
            <Field data-invalid={!!errors.title}>
              <FieldLabel htmlFor="event-title">Robot ID</FieldLabel>
              <Input
                id="event-title"
                name="title"
                placeholder="MAiRA-001"
                aria-invalid={!!errors.title}
              />
              <FieldError errors={errors.title} />
            </Field>

            <Field data-invalid={!!errors.date}>
              <FieldLabel>Maintenance Date</FieldLabel>
              <DatePicker
                value={date}
                onChange={setDate}
                placeholder="Select maintenance date"
                className="w-full"
              />
              <FieldDescription>
                When should the maintenance be performed?
              </FieldDescription>
              <FieldError errors={errors.date} />
            </Field>

            <Field>
              <FieldLabel htmlFor="event-description" optional>
                Notes
              </FieldLabel>
              <Textarea
                id="event-description"
                name="description"
                placeholder="Maintenance details or special instructions..."
                className="min-h-[80px]"
              />
            </Field>

            <Button type="submit" className="w-full">
              Schedule Maintenance
            </Button>
          </FieldGroup>
        </FieldSet>
      </form>
    );
  },
};

// Date and Time Picker Pattern
export const DateTimeForm: Story = {
  name: 'Date & Time Picker',
  render: function DateTimeFormExample() {
    const [date, setDate] = React.useState<Date | undefined>(undefined);
    const [time, setTime] = React.useState('10:00');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (date) {
        const [hours, minutes] = time.split(':').map(Number);
        const dateTime = new Date(date);
        dateTime.setHours(hours, minutes);
        alert(`Scheduled for: ${dateTime.toLocaleString()}`);
      }
    };

    return (
      <form onSubmit={handleSubmit} className="w-[400px]">
        <FieldSet>
          <FieldLegend>Schedule Appointment</FieldLegend>
          <FieldGroup>
            <div className="flex gap-4">
              <Field className="flex-1">
                <FieldLabel>Date</FieldLabel>
                <DatePickerButton
                  value={date}
                  onChange={setDate}
                  placeholder="Select date"
                  className="w-full"
                  captionLayout="dropdown"
                />
              </Field>

              <Field className="w-[120px]">
                <FieldLabel htmlFor="time-picker">Time</FieldLabel>
                <Input
                  type="time"
                  id="time-picker"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />
              </Field>
            </div>

            <FieldDescription>
              {date && time
                ? `Scheduled for ${date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} at ${time}`
                : 'Select a date and time for your appointment.'}
            </FieldDescription>

            <Button type="submit" className="w-full" disabled={!date}>
              Schedule
            </Button>
          </FieldGroup>
        </FieldSet>
      </form>
    );
  },
};

// Date of Birth Form
export const DateOfBirthForm: Story = {
  name: 'Date of Birth Form',
  render: function DateOfBirthFormExample() {
    const [dob, setDob] = React.useState<Date | undefined>(undefined);
    const [errors, setErrors] = React.useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const newErrors: Record<string, string> = {};

      const name = formData.get('name') as string;

      if (!name || name.length < 2) {
        newErrors.name = 'Name must be at least 2 characters.';
      }
      if (!dob) {
        newErrors.dob = 'Please select your date of birth.';
      } else if (dob > new Date()) {
        newErrors.dob = 'Date of birth cannot be in the future.';
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      alert(`Profile saved for ${name}, born on ${dob?.toLocaleDateString()}`);
    };

    return (
      <form onSubmit={handleSubmit} className="w-[350px]">
        <FieldSet>
          <FieldLegend>Personal Information</FieldLegend>
          <FieldGroup>
            <Field data-invalid={!!errors.name}>
              <FieldLabel htmlFor="user-name">Full Name</FieldLabel>
              <Input
                id="user-name"
                name="name"
                placeholder="John Doe"
                aria-invalid={!!errors.name}
              />
              <FieldError errors={errors.name} />
            </Field>

            <Field data-invalid={!!errors.dob}>
              <FieldLabel>Date of Birth</FieldLabel>
              <DatePickerButton
                value={dob}
                onChange={setDob}
                placeholder="Select date"
                dateFormat={{ year: 'numeric', month: 'short', day: 'numeric' }}
                className="w-full"
                captionLayout="dropdown"
                calendarProps={{
                  disabled: { after: new Date() },
                }}
              />
              <FieldError errors={errors.dob} />
            </Field>

            <Button type="submit" className="w-full">
              Save Profile
            </Button>
          </FieldGroup>
        </FieldSet>
      </form>
    );
  },
};

// Date Range Form (Robot Deployment Period)
export const DateRangeForm: Story = {
  name: 'Robot Deployment Period (Date Range)',
  render: function DateRangeFormExample() {
    const [dateRange, setDateRange] = React.useState<DateRange | undefined>(
      undefined,
    );
    const [errors, setErrors] = React.useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const newErrors: Record<string, string> = {};

      const description = formData.get('reason') as string;

      if (!description || description.length < 5) {
        newErrors.reason =
          'Please provide a description (at least 5 characters).';
      }
      if (!dateRange?.from || !dateRange?.to) {
        newErrors.dates = 'Please select both start and end dates.';
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      const days =
        dateRange?.from && dateRange?.to
          ? Math.ceil(
              (dateRange.to.getTime() - dateRange.from.getTime()) /
                (1000 * 60 * 60 * 24),
            ) + 1
          : 0;

      alert(
        `Deployment scheduled: ${days} days from ${dateRange?.from?.toLocaleDateString()} to ${dateRange?.to?.toLocaleDateString()}`,
      );
    };

    return (
      <form onSubmit={handleSubmit} className="w-[400px]">
        <FieldSet>
          <FieldLegend>Robot Deployment Period</FieldLegend>
          <FieldGroup>
            <Field data-invalid={!!errors.dates}>
              <FieldLabel>Deployment Dates</FieldLabel>
              <DateRangePicker
                value={dateRange}
                onChange={setDateRange}
                placeholder="Select date range"
                className="w-full"
                calendarProps={{
                  disabled: { before: new Date() },
                }}
              />
              <FieldDescription>
                Select the start and end dates for the robot deployment.
              </FieldDescription>
              <FieldError errors={errors.dates} />
            </Field>

            <Field data-invalid={!!errors.reason}>
              <FieldLabel htmlFor="vacation-reason">
                Project Description
              </FieldLabel>
              <Textarea
                id="vacation-reason"
                name="reason"
                placeholder="Describe the deployment project or mission..."
                aria-invalid={!!errors.reason}
              />
              <FieldError errors={errors.reason} />
            </Field>

            <Button type="submit" className="w-full">
              Schedule Deployment
            </Button>
          </FieldGroup>
        </FieldSet>
      </form>
    );
  },
};

// Robot Service Appointment with RHF + Zod
const appointmentSchema = z.object({
  robotId: z.string().min(2, 'Robot ID must be at least 2 characters.'),
  date: z.date({ message: 'Please select a date.' }),
  time: z.string().min(1, 'Please select a time.'),
  notes: z.string().optional(),
});

export const DatePickerRHF: Story = {
  name: 'Service Appointment (RHF + Zod)',
  render: function DatePickerRHFExample() {
    const [submitted, setSubmitted] = React.useState(false);

    const form = useForm<z.infer<typeof appointmentSchema>>({
      resolver: zodResolver(appointmentSchema),
      defaultValues: {
        robotId: '',
        date: undefined,
        time: '',
        notes: '',
      },
    });

    function onSubmit(data: z.infer<typeof appointmentSchema>) {
      console.log(data);
      setSubmitted(true);
    }

    if (submitted) {
      return (
        <div className="w-[400px] space-y-4 text-center">
          <div className="rounded-lg border border-green-500 bg-green-50 p-6 dark:bg-green-950">
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">
              Service Scheduled!
            </h3>
            <p className="text-muted-foreground mt-2 text-sm">
              A technician will arrive at the scheduled time.
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              setSubmitted(false);
              form.reset();
            }}
          >
            Schedule Another
          </Button>
        </div>
      );
    }

    return (
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[400px] space-y-6"
      >
        <FieldSet>
          <FieldLegend>Schedule Robot Service</FieldLegend>
          <FieldGroup>
            <Controller
              name="robotId"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="apt-robotid">Robot ID</FieldLabel>
                  <Input
                    {...field}
                    id="apt-robotid"
                    placeholder="MAiRA-001"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={fieldState.error?.message} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="date"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Service Date</FieldLabel>
                  <DatePicker
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Select date"
                    className="w-full"
                    calendarProps={{
                      disabled: { before: new Date() },
                    }}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={fieldState.error?.message} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="time"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Preferred Time</FieldLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger aria-invalid={fieldState.invalid}>
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">9:00 AM</SelectItem>
                      <SelectItem value="10:00">10:00 AM</SelectItem>
                      <SelectItem value="11:00">11:00 AM</SelectItem>
                      <SelectItem value="14:00">2:00 PM</SelectItem>
                      <SelectItem value="15:00">3:00 PM</SelectItem>
                      <SelectItem value="16:00">4:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={fieldState.error?.message} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="notes"
              control={form.control}
              render={({ field }) => (
                <Field>
                  <FieldLabel htmlFor="apt-notes" optional>
                    Additional Notes
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="apt-notes"
                    placeholder="Any special requirements?"
                  />
                </Field>
              )}
            />

            <Button type="submit" className="w-full">
              Book Appointment
            </Button>
          </FieldGroup>
        </FieldSet>
      </form>
    );
  },
};
