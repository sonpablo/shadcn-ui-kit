import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Components
import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';
import { Textarea } from '../../components/textarea/textarea';
import { Checkbox } from '../../components/checkbox/checkbox';
import { Switch } from '../../components/switch/switch';
import { Label } from '../../components/label/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/select/select';
import {
  RadioGroup,
  RadioGroupItem,
} from '../../components/radio-group/radio-group';
import {
  Field,
  FieldSet,
  FieldLegend,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  FieldError,
} from '../../components/field/field';
import { DatePicker } from '../../components/date-picker/date-picker';
import { DateRangePicker } from '../../components/date-picker/date-picker';
import { Combobox } from '../../components/combobox/combobox';
import { MultiSelect } from '../../components/multi-select/multi-select';
import { InputTag } from '../../components/input-tag/input-tag';
import type { DateRange } from 'react-day-picker';

const meta: Meta = {
  title: 'Patterns/Forms',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Form Patterns

This guide demonstrates three different approaches to building forms in React, 
showcasing best practices for validation, accessibility, and user experience.

## Approaches Covered

1. **Native HTML + React** - Built-in browser validation with React state
2. **React Hook Form** - Performance-optimized with uncontrolled components
3. **React Hook Form + Zod** - Type-safe validation with schema definitions

Each approach demonstrates the same comprehensive form using all available form components.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/* =============================================================================
 * Shared Data & Types
 * ============================================================================= */

// Robot options for Combobox
const robotOptions = [
  { value: 'maira-001', label: 'MAiRA-001' },
  { value: 'maira-002', label: 'MAiRA-002' },
  { value: 'lara-001', label: 'LARA-001' },
  { value: 'lara-003', label: 'LARA-003' },
  { value: '4ne1-001', label: '4NE1-001' },
  { value: 'mav-001', label: 'MAV-001' },
  { value: 'mipa-001', label: 'MiPA-001' },
];

// Facility options for MultiSelect
const facilityOptions = [
  { value: 'munich-a', label: 'Munich Plant A' },
  { value: 'stuttgart', label: 'Stuttgart Factory' },
  { value: 'berlin', label: 'Berlin Warehouse' },
  { value: 'hamburg', label: 'Hamburg Distribution' },
  { value: 'frankfurt', label: 'Frankfurt Assembly' },
];

/* =============================================================================
 * Story 1: Native HTML + React
 * ============================================================================= */

export const NativeHTMLForm: Story = {
  name: '1. Native HTML + React',
  parameters: {
    docs: {
      description: {
        story: `
### Native HTML Form with React State

This approach uses native HTML5 validation attributes combined with React state management.

**Strengths:**
- No external dependencies
- Built-in browser validation
- Simple and straightforward for basic forms

**Considerations:**
- Manual state management for each field
- Browser-dependent validation UI
- More verbose for complex validation logic
- Requires manual error tracking

**Accessibility Features:**
- \`aria-invalid\` for error states
- \`aria-describedby\` linking descriptions to inputs
- Required fields marked with \`required\` attribute
- Proper label associations with \`htmlFor\`
- Error messages announced to screen readers
        `,
      },
    },
  },
  render: function NativeFormExample() {
    // State for form fields
    const [projectName, setProjectName] = React.useState('');
    const [primaryRobot, setPrimaryRobot] = React.useState('');
    const [facilities, setFacilities] = React.useState<string[]>([]);
    const [capabilities, setCapabilities] = React.useState<string[]>([
      'autonomous',
      'ai-powered',
    ]);
    const [projectType, setProjectType] = React.useState('');
    const [priority, setPriority] = React.useState('');
    const [startDate, setStartDate] = React.useState<Date | undefined>();
    const [deploymentPeriod, setDeploymentPeriod] = React.useState<
      DateRange | undefined
    >();
    const [autoStart, setAutoStart] = React.useState(false);
    const [notifyOnComplete, setNotifyOnComplete] = React.useState(false);
    const [enableMonitoring, setEnableMonitoring] = React.useState(true);
    const [lowPowerMode, setLowPowerMode] = React.useState(false);

    // State for validation errors
    const [errors, setErrors] = React.useState<Record<string, string>>({});

    // State for submitted data
    const [submittedData, setSubmittedData] = React.useState<Record<
      string,
      string | string[] | boolean | object
    > | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const newErrors: Record<string, string> = {};

      // Manual validation
      const name = formData.get('projectName') as string;
      const description = formData.get('description') as string;
      const operatorEmail = formData.get('operatorEmail') as string;

      if (!name || name.length < 3) {
        newErrors.projectName = 'Project name must be at least 3 characters.';
      }

      if (!primaryRobot) {
        newErrors.primaryRobot = 'Please select a primary robot.';
      }

      if (!facilities || facilities.length === 0) {
        newErrors.facilities = 'Please select at least one facility.';
      }

      if (!projectType) {
        newErrors.projectType = 'Please select a project type.';
      }

      if (!priority) {
        newErrors.priority = 'Please select a priority level.';
      }

      if (!startDate) {
        newErrors.startDate = 'Please select a start date.';
      }

      if (!deploymentPeriod?.from || !deploymentPeriod?.to) {
        newErrors.deploymentPeriod = 'Please select deployment period.';
      }

      if (!operatorEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(operatorEmail)) {
        newErrors.operatorEmail = 'Please enter a valid email address.';
      }

      // If there are errors, set them and stop
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      // Clear errors and submit
      setErrors({});
      setSubmittedData({
        projectName: name,
        description,
        primaryRobot,
        facilities,
        capabilities,
        projectType,
        priority,
        startDate: startDate?.toLocaleDateString() || '',
        deploymentPeriod: {
          from: deploymentPeriod?.from?.toLocaleDateString() || '',
          to: deploymentPeriod?.to?.toLocaleDateString() || '',
        },
        operatorEmail,
        autoStart,
        notifyOnComplete,
        enableMonitoring,
        lowPowerMode,
      });
    };

    return (
      <div className="w-full max-w-2xl space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Native HTML + React</h2>
          <p className="text-muted-foreground text-sm">
            Uses native HTML5 validation with React state. Best for simple forms
            without complex validation requirements.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <FieldSet>
            <FieldLegend>Robot Deployment Configuration</FieldLegend>
            <FieldGroup>
              {/* Text Input */}
              <Field data-invalid={!!errors.projectName}>
                <FieldLabel htmlFor="projectName">
                  Project Name <span className="text-destructive">*</span>
                </FieldLabel>
                <Input
                  id="projectName"
                  name="projectName"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="Warehouse Automation 2024"
                  aria-invalid={!!errors.projectName}
                  aria-describedby={
                    errors.projectName
                      ? 'projectName-error'
                      : 'projectName-description'
                  }
                  required
                />
                <FieldDescription id="projectName-description">
                  A unique name to identify this deployment project.
                </FieldDescription>
                {errors.projectName && (
                  <FieldError
                    id="projectName-error"
                    errors={errors.projectName}
                  />
                )}
              </Field>

              {/* Textarea */}
              <Field>
                <FieldLabel htmlFor="description">
                  Project Description
                </FieldLabel>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe the goals and scope of this deployment..."
                  className="min-h-[100px]"
                  aria-describedby="description-hint"
                />
                <FieldDescription id="description-hint">
                  Optional. Provide context for the deployment team.
                </FieldDescription>
              </Field>

              {/* Combobox - Searchable Select */}
              <Field data-invalid={!!errors.primaryRobot}>
                <FieldLabel htmlFor="primaryRobot">
                  Primary Robot <span className="text-destructive">*</span>
                </FieldLabel>
                <Combobox
                  items={robotOptions}
                  value={primaryRobot}
                  onValueChange={setPrimaryRobot}
                  placeholder="Select primary robot..."
                  searchPlaceholder="Search robots..."
                  aria-invalid={!!errors.primaryRobot}
                  className="w-full"
                />
                <FieldDescription>
                  The main robot unit for this deployment. Use Combobox for
                  searchable lists.
                </FieldDescription>
                {errors.primaryRobot && (
                  <FieldError errors={errors.primaryRobot} />
                )}
              </Field>

              {/* MultiSelect */}
              <Field data-invalid={!!errors.facilities}>
                <FieldLabel>
                  Deployment Facilities{' '}
                  <span className="text-destructive">*</span>
                </FieldLabel>
                <MultiSelect
                  options={facilityOptions}
                  onValueChange={setFacilities}
                  defaultValue={facilities}
                  placeholder="Select facilities..."
                  className="w-full"
                  aria-invalid={!!errors.facilities}
                />
                <FieldDescription>
                  Select all facilities where robots will be deployed.
                </FieldDescription>
                {errors.facilities && <FieldError errors={errors.facilities} />}
              </Field>

              {/* InputTag */}
              <Field>
                <FieldLabel>Robot Capabilities</FieldLabel>
                <InputTag
                  value={capabilities}
                  onChange={setCapabilities}
                  tagType="badge"
                  badgeVariant="default"
                  placeholder="Add capability..."
                  maxTags={10}
                />
                <FieldDescription>
                  Add robot capabilities or features (press Enter or comma to
                  add).
                </FieldDescription>
              </Field>

              <div className="grid grid-cols-2 gap-4">
                {/* Radio Group */}
                <Field data-invalid={!!errors.projectType}>
                  <FieldLabel>
                    Project Type <span className="text-destructive">*</span>
                  </FieldLabel>
                  <RadioGroup
                    value={projectType}
                    onValueChange={setProjectType}
                    aria-invalid={!!errors.projectType}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="production" id="production" />
                      <Label htmlFor="production" className="font-normal">
                        Production
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="testing" id="testing" />
                      <Label htmlFor="testing" className="font-normal">
                        Testing
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="demo" id="demo" />
                      <Label htmlFor="demo" className="font-normal">
                        Demo
                      </Label>
                    </div>
                  </RadioGroup>
                  {errors.projectType && (
                    <FieldError errors={errors.projectType} />
                  )}
                </Field>

                {/* Select Dropdown */}
                <Field data-invalid={!!errors.priority}>
                  <FieldLabel htmlFor="priority">
                    Priority Level <span className="text-destructive">*</span>
                  </FieldLabel>
                  <Select value={priority} onValueChange={setPriority}>
                    <SelectTrigger
                      id="priority"
                      aria-invalid={!!errors.priority}
                    >
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.priority && <FieldError errors={errors.priority} />}
                </Field>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* DatePicker */}
                <Field data-invalid={!!errors.startDate}>
                  <FieldLabel>
                    Start Date <span className="text-destructive">*</span>
                  </FieldLabel>
                  <DatePicker
                    value={startDate}
                    onChange={setStartDate}
                    placeholder="Select start date"
                    className="w-full"
                    calendarProps={{
                      disabled: { before: new Date() },
                    }}
                  />
                  {errors.startDate && <FieldError errors={errors.startDate} />}
                </Field>

                {/* Date Range Picker */}
                <Field data-invalid={!!errors.deploymentPeriod}>
                  <FieldLabel>
                    Deployment Period{' '}
                    <span className="text-destructive">*</span>
                  </FieldLabel>
                  <DateRangePicker
                    value={deploymentPeriod}
                    onChange={setDeploymentPeriod}
                    placeholder="Select date range"
                    className="w-full"
                    calendarProps={{
                      disabled: { before: new Date() },
                    }}
                  />
                  {errors.deploymentPeriod && (
                    <FieldError errors={errors.deploymentPeriod} />
                  )}
                </Field>
              </div>

              {/* Email Input */}
              <Field data-invalid={!!errors.operatorEmail}>
                <FieldLabel htmlFor="operatorEmail">
                  Operator Email <span className="text-destructive">*</span>
                </FieldLabel>
                <Input
                  id="operatorEmail"
                  name="operatorEmail"
                  type="email"
                  placeholder="operator@neura-robotics.com"
                  aria-invalid={!!errors.operatorEmail}
                  required
                />
                <FieldDescription>
                  Notifications will be sent to this email address.
                </FieldDescription>
                {errors.operatorEmail && (
                  <FieldError errors={errors.operatorEmail} />
                )}
              </Field>

              {/* Checkboxes */}
              <div className="space-y-3">
                <Field className="flex-row items-center gap-3">
                  <Checkbox
                    id="autoStart"
                    checked={autoStart}
                    onCheckedChange={(checked) =>
                      setAutoStart(checked === true)
                    }
                  />
                  <FieldLabel htmlFor="autoStart" className="cursor-pointer">
                    Auto-start deployment on scheduled date
                  </FieldLabel>
                </Field>

                <Field className="flex-row items-center gap-3">
                  <Checkbox
                    id="notifyOnComplete"
                    checked={notifyOnComplete}
                    onCheckedChange={(checked) =>
                      setNotifyOnComplete(checked === true)
                    }
                  />
                  <FieldLabel
                    htmlFor="notifyOnComplete"
                    className="cursor-pointer"
                  >
                    Send notification on completion
                  </FieldLabel>
                </Field>
              </div>

              {/* Switches */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <FieldLabel
                      htmlFor="enableMonitoring"
                      className="cursor-pointer"
                    >
                      Enable Real-time Monitoring
                    </FieldLabel>
                    <FieldDescription>
                      Monitor robot performance and status in real-time
                    </FieldDescription>
                  </div>
                  <Switch
                    id="enableMonitoring"
                    checked={enableMonitoring}
                    onCheckedChange={setEnableMonitoring}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <FieldLabel
                      htmlFor="lowPowerMode"
                      className="cursor-pointer"
                    >
                      Low Power Mode
                    </FieldLabel>
                    <FieldDescription>
                      Reduce energy consumption during idle periods
                    </FieldDescription>
                  </div>
                  <Switch
                    id="lowPowerMode"
                    checked={lowPowerMode}
                    onCheckedChange={setLowPowerMode}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <Button type="submit" className="flex-1">
                  Create Deployment
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setProjectName('');
                    setPrimaryRobot('');
                    setFacilities([]);
                    setProjectType('');
                    setPriority('');
                    setStartDate(undefined);
                    setDeploymentPeriod(undefined);
                    setAutoStart(false);
                    setNotifyOnComplete(false);
                    setEnableMonitoring(true);
                    setLowPowerMode(false);
                    setErrors({});
                  }}
                >
                  Reset
                </Button>
              </div>
            </FieldGroup>
          </FieldSet>
        </form>

        {/* Result Display */}
        {submittedData && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Submitted Data:</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSubmittedData(null)}
              >
                Clear
              </Button>
            </div>
            <pre className="bg-muted text-muted-foreground overflow-auto rounded-md p-4 text-xs">
              <code>{JSON.stringify(submittedData, null, 2)}</code>
            </pre>
          </div>
        )}
      </div>
    );
  },
};

/* =============================================================================
 * Story 2: React Hook Form (without Zod)
 * ============================================================================= */

export const ReactHookForm: Story = {
  name: '2. React Hook Form',
  parameters: {
    docs: {
      description: {
        story: `
### React Hook Form (Uncontrolled Components)

This approach uses React Hook Form for optimized performance with uncontrolled components.

**Strengths:**
- Better performance (less re-renders)
- Built-in validation rules
- Automatic form state management
- Easy integration with UI libraries
- Smaller bundle size than RHF + Zod

**Best Use Cases:**
- Forms with simple validation rules
- When bundle size is a concern
- When you don't need TypeScript schema validation

**Accessibility Features:**
- Automatic \`aria-invalid\` management
- Field registration with proper attributes
- Error message associations
- Focus management on validation errors
        `,
      },
    },
  },
  render: function ReactHookFormExample() {
    const [submittedData, setSubmittedData] = React.useState<Record<
      string,
      string | string[] | boolean | object
    > | null>(null);

    type FormValues = {
      projectName: string;
      description: string;
      primaryRobot: string;
      facilities: string[];
      capabilities: string[];
      projectType: string;
      priority: string;
      startDate: Date | undefined;
      deploymentPeriod: DateRange | undefined;
      operatorEmail: string;
      autoStart: boolean;
      notifyOnComplete: boolean;
      enableMonitoring: boolean;
      lowPowerMode: boolean;
    };

    const {
      register,
      handleSubmit,
      control,
      reset,
      formState: { errors, isSubmitting },
    } = useForm<FormValues>({
      defaultValues: {
        projectName: '',
        description: '',
        primaryRobot: '',
        facilities: [],
        capabilities: ['autonomous', 'ai-powered'],
        projectType: '',
        priority: '',
        startDate: undefined,
        deploymentPeriod: undefined,
        operatorEmail: '',
        autoStart: false,
        notifyOnComplete: false,
        enableMonitoring: true,
        lowPowerMode: false,
      },
    });

    const onSubmit = (data: FormValues) => {
      setSubmittedData({
        ...data,
        startDate: data.startDate?.toLocaleDateString() || '',
        deploymentPeriod: {
          from: data.deploymentPeriod?.from?.toLocaleDateString() || '',
          to: data.deploymentPeriod?.to?.toLocaleDateString() || '',
        },
      });
    };

    return (
      <div className="w-full max-w-2xl space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">React Hook Form</h2>
          <p className="text-muted-foreground text-sm">
            Leverages uncontrolled components for better performance. Validation
            rules are defined inline.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FieldSet>
            <FieldLegend>Robot Deployment Configuration</FieldLegend>
            <FieldGroup>
              {/* Text Input with RHF */}
              <Field data-invalid={!!errors.projectName}>
                <FieldLabel htmlFor="projectName-rhf">
                  Project Name <span className="text-destructive">*</span>
                </FieldLabel>
                <Input
                  id="projectName-rhf"
                  placeholder="Warehouse Automation 2024"
                  aria-invalid={!!errors.projectName}
                  {...register('projectName', {
                    required: 'Project name is required',
                    minLength: {
                      value: 3,
                      message: 'Project name must be at least 3 characters',
                    },
                  })}
                />
                <FieldDescription>
                  A unique name to identify this deployment project.
                </FieldDescription>
                {errors.projectName && (
                  <FieldError errors={errors.projectName.message} />
                )}
              </Field>

              {/* Textarea */}
              <Field>
                <FieldLabel htmlFor="description-rhf">
                  Project Description
                </FieldLabel>
                <Textarea
                  id="description-rhf"
                  placeholder="Describe the goals and scope of this deployment..."
                  className="min-h-[100px]"
                  {...register('description')}
                />
                <FieldDescription>
                  Optional. Provide context for the deployment team.
                </FieldDescription>
              </Field>

              {/* Combobox with Controller */}
              <Controller
                name="primaryRobot"
                control={control}
                rules={{ required: 'Please select a primary robot' }}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>
                      Primary Robot <span className="text-destructive">*</span>
                    </FieldLabel>
                    <Combobox
                      items={robotOptions}
                      value={field.value}
                      onValueChange={field.onChange}
                      placeholder="Select primary robot..."
                      searchPlaceholder="Search robots..."
                      aria-invalid={fieldState.invalid}
                      className="w-full"
                    />
                    <FieldDescription>
                      The main robot unit for this deployment.
                    </FieldDescription>
                    {fieldState.error && (
                      <FieldError errors={fieldState.error.message} />
                    )}
                  </Field>
                )}
              />

              {/* MultiSelect with Controller */}
              <Controller
                name="facilities"
                control={control}
                rules={{
                  validate: (value) =>
                    value.length > 0 || 'Please select at least one facility',
                }}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>
                      Deployment Facilities{' '}
                      <span className="text-destructive">*</span>
                    </FieldLabel>
                    <MultiSelect
                      options={facilityOptions}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      placeholder="Select facilities..."
                      className="w-full"
                    />
                    <FieldDescription>
                      Select all facilities where robots will be deployed.
                    </FieldDescription>
                    {fieldState.error && (
                      <FieldError errors={fieldState.error.message} />
                    )}
                  </Field>
                )}
              />

              {/* InputTag with Controller */}
              <Controller
                name="capabilities"
                control={control}
                render={({ field }) => (
                  <Field>
                    <FieldLabel>Robot Capabilities</FieldLabel>
                    <InputTag
                      value={field.value}
                      onChange={field.onChange}
                      tagType="badge"
                      badgeVariant="default"
                      placeholder="Add capability..."
                      maxTags={10}
                    />
                    <FieldDescription>
                      Add robot capabilities or features (press Enter or comma
                      to add).
                    </FieldDescription>
                  </Field>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                {/* Radio Group with Controller */}
                <Controller
                  name="projectType"
                  control={control}
                  rules={{ required: 'Please select a project type' }}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>
                        Project Type <span className="text-destructive">*</span>
                      </FieldLabel>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="production"
                            id="production-rhf"
                          />
                          <Label
                            htmlFor="production-rhf"
                            className="font-normal"
                          >
                            Production
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="testing" id="testing-rhf" />
                          <Label htmlFor="testing-rhf" className="font-normal">
                            Testing
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="demo" id="demo-rhf" />
                          <Label htmlFor="demo-rhf" className="font-normal">
                            Demo
                          </Label>
                        </div>
                      </RadioGroup>
                      {fieldState.error && (
                        <FieldError errors={fieldState.error.message} />
                      )}
                    </Field>
                  )}
                />

                {/* Select with Controller */}
                <Controller
                  name="priority"
                  control={control}
                  rules={{ required: 'Please select a priority level' }}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>
                        Priority Level{' '}
                        <span className="text-destructive">*</span>
                      </FieldLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger aria-invalid={fieldState.invalid}>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="critical">Critical</SelectItem>
                        </SelectContent>
                      </Select>
                      {fieldState.error && (
                        <FieldError errors={fieldState.error.message} />
                      )}
                    </Field>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* DatePicker with Controller */}
                <Controller
                  name="startDate"
                  control={control}
                  rules={{ required: 'Please select a start date' }}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>
                        Start Date <span className="text-destructive">*</span>
                      </FieldLabel>
                      <DatePicker
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Select start date"
                        className="w-full"
                        calendarProps={{
                          disabled: { before: new Date() },
                        }}
                      />
                      {fieldState.error && (
                        <FieldError errors={fieldState.error.message} />
                      )}
                    </Field>
                  )}
                />

                {/* DateRangePicker with Controller */}
                <Controller
                  name="deploymentPeriod"
                  control={control}
                  rules={{
                    validate: (value) => {
                      if (!value?.from || !value?.to) {
                        return 'Please select deployment period';
                      }
                      return true;
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>
                        Deployment Period{' '}
                        <span className="text-destructive">*</span>
                      </FieldLabel>
                      <DateRangePicker
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Select date range"
                        className="w-full"
                        calendarProps={{
                          disabled: { before: new Date() },
                        }}
                      />
                      {fieldState.error && (
                        <FieldError errors={fieldState.error.message} />
                      )}
                    </Field>
                  )}
                />
              </div>

              {/* Email with validation */}
              <Field data-invalid={!!errors.operatorEmail}>
                <FieldLabel htmlFor="operatorEmail-rhf">
                  Operator Email <span className="text-destructive">*</span>
                </FieldLabel>
                <Input
                  id="operatorEmail-rhf"
                  type="email"
                  placeholder="operator@neura-robotics.com"
                  aria-invalid={!!errors.operatorEmail}
                  {...register('operatorEmail', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address',
                    },
                  })}
                />
                <FieldDescription>
                  Notifications will be sent to this email address.
                </FieldDescription>
                {errors.operatorEmail && (
                  <FieldError errors={errors.operatorEmail.message} />
                )}
              </Field>

              {/* Checkboxes */}
              <div className="space-y-3">
                <Field className="flex-row items-center gap-3">
                  <Checkbox id="autoStart-rhf" {...register('autoStart')} />
                  <FieldLabel
                    htmlFor="autoStart-rhf"
                    className="cursor-pointer"
                  >
                    Auto-start deployment on scheduled date
                  </FieldLabel>
                </Field>

                <Field className="flex-row items-center gap-3">
                  <Checkbox
                    id="notifyOnComplete-rhf"
                    {...register('notifyOnComplete')}
                  />
                  <FieldLabel
                    htmlFor="notifyOnComplete-rhf"
                    className="cursor-pointer"
                  >
                    Send notification on completion
                  </FieldLabel>
                </Field>
              </div>

              {/* Switches */}
              <div className="space-y-3">
                <Controller
                  name="enableMonitoring"
                  control={control}
                  render={({ field }) => (
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <FieldLabel
                          htmlFor="enableMonitoring-rhf"
                          className="cursor-pointer"
                        >
                          Enable Real-time Monitoring
                        </FieldLabel>
                        <FieldDescription>
                          Monitor robot performance and status in real-time
                        </FieldDescription>
                      </div>
                      <Switch
                        id="enableMonitoring-rhf"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </div>
                  )}
                />

                <Controller
                  name="lowPowerMode"
                  control={control}
                  render={({ field }) => (
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <FieldLabel
                          htmlFor="lowPowerMode-rhf"
                          className="cursor-pointer"
                        >
                          Low Power Mode
                        </FieldLabel>
                        <FieldDescription>
                          Reduce energy consumption during idle periods
                        </FieldDescription>
                      </div>
                      <Switch
                        id="lowPowerMode-rhf"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </div>
                  )}
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  type="submit"
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Creating...' : 'Create Deployment'}
                </Button>
                <Button type="button" variant="outline" onClick={() => reset()}>
                  Reset
                </Button>
              </div>
            </FieldGroup>
          </FieldSet>
        </form>

        {/* Result Display */}
        {submittedData && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Submitted Data:</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSubmittedData(null)}
              >
                Clear
              </Button>
            </div>
            <pre className="bg-muted text-muted-foreground overflow-auto rounded-md p-4 text-xs">
              <code>{JSON.stringify(submittedData, null, 2)}</code>
            </pre>
          </div>
        )}
      </div>
    );
  },
};

/* =============================================================================
 * Story 3: React Hook Form + Zod
 * ============================================================================= */

// Zod Schema for type-safe validation
const deploymentSchema = z.object({
  projectName: z
    .string()
    .min(3, 'Project name must be at least 3 characters')
    .max(50, 'Project name must be less than 50 characters'),
  description: z.string().optional(),
  primaryRobot: z.string().min(1, 'Please select a primary robot'),
  facilities: z
    .array(z.string())
    .min(1, 'Please select at least one facility')
    .max(5, 'You can select up to 5 facilities'),
  capabilities: z.array(z.string()),
  projectType: z.enum(['production', 'testing', 'demo']),
  priority: z.enum(['low', 'medium', 'high', 'critical']),
  startDate: z.date(),
  deploymentPeriod: z.object({
    from: z.date(),
    to: z.date(),
  }),
  operatorEmail: z
    .string()
    .email('Please enter a valid email address')
    .refine((email) => email.endsWith('@neura-robotics.com'), {
      message: 'Must be a Neura Robotics email',
    }),
  autoStart: z.boolean(),
  notifyOnComplete: z.boolean(),
  enableMonitoring: z.boolean(),
  lowPowerMode: z.boolean(),
});

type DeploymentFormData = z.infer<typeof deploymentSchema>;

export const ReactHookFormWithZod: Story = {
  name: '3. React Hook Form + Zod',
  parameters: {
    docs: {
      description: {
        story: `
### React Hook Form with Zod Schema Validation

This approach combines React Hook Form with Zod for type-safe, schema-based validation.

**Strengths:**
- Type-safe validation schemas
- Reusable validation logic
- Better developer experience with TypeScript
- Centralized validation rules
- Runtime type checking
- Easy to test validation logic independently

**Best Use Cases:**
- Complex forms with intricate validation rules
- TypeScript projects requiring type safety
- When validation logic needs to be shared/reused
- Forms that map to backend API schemas

**Accessibility Features:**
- Full ARIA support from React Hook Form
- Error messages properly associated
- Focus management on validation errors
- Screen reader announcements for errors

**Schema Benefits:**
- Single source of truth for validation
- Type inference for form data
- Easy to maintain and update
- Can be shared with backend for consistency
        `,
      },
    },
  },
  render: function ReactHookFormZodExample() {
    const [submittedData, setSubmittedData] = React.useState<Record<
      string,
      string | string[] | boolean | object
    > | null>(null);

    const form = useForm<DeploymentFormData>({
      resolver: zodResolver(deploymentSchema),
      defaultValues: {
        projectName: '',
        description: '',
        primaryRobot: '',
        facilities: [],
        capabilities: ['autonomous', 'ai-powered'],
        projectType: undefined,
        priority: undefined,
        startDate: undefined,
        deploymentPeriod: undefined,
        operatorEmail: '',
        autoStart: false,
        notifyOnComplete: false,
        enableMonitoring: true,
        lowPowerMode: false,
      },
    });

    const {
      register,
      handleSubmit,
      control,
      reset,
      formState: { errors, isSubmitting },
    } = form;

    const onSubmit = (data: DeploymentFormData) => {
      setSubmittedData({
        ...data,
        startDate: data.startDate.toLocaleDateString(),
        deploymentPeriod: {
          from: data.deploymentPeriod.from.toLocaleDateString(),
          to: data.deploymentPeriod.to.toLocaleDateString(),
        },
      });
    };

    return (
      <div className="w-full max-w-2xl space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">React Hook Form + Zod</h2>
          <p className="text-muted-foreground text-sm">
            Type-safe validation with centralized schema. Best for complex forms
            and TypeScript projects.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FieldSet>
            <FieldLegend>Robot Deployment Configuration</FieldLegend>
            <FieldGroup>
              {/* Text Input */}
              <Field data-invalid={!!errors.projectName}>
                <FieldLabel htmlFor="projectName-zod">
                  Project Name <span className="text-destructive">*</span>
                </FieldLabel>
                <Input
                  id="projectName-zod"
                  placeholder="Warehouse Automation 2024"
                  aria-invalid={!!errors.projectName}
                  {...register('projectName')}
                />
                <FieldDescription>
                  A unique name to identify this deployment project (3-50
                  characters).
                </FieldDescription>
                {errors.projectName && (
                  <FieldError errors={errors.projectName.message} />
                )}
              </Field>

              {/* Textarea */}
              <Field>
                <FieldLabel htmlFor="description-zod">
                  Project Description
                </FieldLabel>
                <Textarea
                  id="description-zod"
                  placeholder="Describe the goals and scope of this deployment..."
                  className="min-h-[100px]"
                  {...register('description')}
                />
                <FieldDescription>
                  Optional. Provide context for the deployment team.
                </FieldDescription>
              </Field>

              {/* Combobox */}
              <Controller
                name="primaryRobot"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>
                      Primary Robot <span className="text-destructive">*</span>
                    </FieldLabel>
                    <Combobox
                      items={robotOptions}
                      value={field.value}
                      onValueChange={field.onChange}
                      placeholder="Select primary robot..."
                      searchPlaceholder="Search robots..."
                      aria-invalid={fieldState.invalid}
                      className="w-full"
                    />
                    <FieldDescription>
                      The main robot unit for this deployment.
                    </FieldDescription>
                    {fieldState.error && (
                      <FieldError errors={fieldState.error.message} />
                    )}
                  </Field>
                )}
              />

              {/* MultiSelect */}
              <Controller
                name="facilities"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>
                      Deployment Facilities{' '}
                      <span className="text-destructive">*</span>
                    </FieldLabel>
                    <MultiSelect
                      options={facilityOptions}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      placeholder="Select facilities..."
                      maxCount={3}
                      className="w-full"
                    />
                    <FieldDescription>
                      Select 1-5 facilities where robots will be deployed.
                    </FieldDescription>
                    {fieldState.error && (
                      <FieldError errors={fieldState.error.message} />
                    )}
                  </Field>
                )}
              />

              {/* InputTag */}
              <Controller
                name="capabilities"
                control={control}
                render={({ field }) => (
                  <Field>
                    <FieldLabel>Robot Capabilities</FieldLabel>
                    <InputTag
                      value={field.value}
                      onChange={field.onChange}
                      tagType="badge"
                      badgeVariant="default"
                      placeholder="Add capability..."
                      maxTags={10}
                    />
                    <FieldDescription>
                      Add robot capabilities or features (press Enter or comma
                      to add).
                    </FieldDescription>
                  </Field>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                {/* Radio Group */}
                <Controller
                  name="projectType"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>
                        Project Type <span className="text-destructive">*</span>
                      </FieldLabel>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="production"
                            id="production-zod"
                          />
                          <Label
                            htmlFor="production-zod"
                            className="font-normal"
                          >
                            Production
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="testing" id="testing-zod" />
                          <Label htmlFor="testing-zod" className="font-normal">
                            Testing
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="demo" id="demo-zod" />
                          <Label htmlFor="demo-zod" className="font-normal">
                            Demo
                          </Label>
                        </div>
                      </RadioGroup>
                      {fieldState.error && (
                        <FieldError errors={fieldState.error.message} />
                      )}
                    </Field>
                  )}
                />

                {/* Select */}
                <Controller
                  name="priority"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>
                        Priority Level{' '}
                        <span className="text-destructive">*</span>
                      </FieldLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger aria-invalid={fieldState.invalid}>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="critical">Critical</SelectItem>
                        </SelectContent>
                      </Select>
                      {fieldState.error && (
                        <FieldError errors={fieldState.error.message} />
                      )}
                    </Field>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* DatePicker */}
                <Controller
                  name="startDate"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>
                        Start Date <span className="text-destructive">*</span>
                      </FieldLabel>
                      <DatePicker
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Select start date"
                        className="w-full"
                        calendarProps={{
                          disabled: { before: new Date() },
                        }}
                      />
                      {fieldState.error && (
                        <FieldError errors={fieldState.error.message} />
                      )}
                    </Field>
                  )}
                />

                {/* DateRangePicker */}
                <Controller
                  name="deploymentPeriod"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>
                        Deployment Period{' '}
                        <span className="text-destructive">*</span>
                      </FieldLabel>
                      <DateRangePicker
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Select date range"
                        className="w-full"
                        calendarProps={{
                          disabled: { before: new Date() },
                        }}
                      />
                      {fieldState.error && (
                        <FieldError errors={fieldState.error.message} />
                      )}
                    </Field>
                  )}
                />
              </div>

              {/* Email */}
              <Field data-invalid={!!errors.operatorEmail}>
                <FieldLabel htmlFor="operatorEmail-zod">
                  Operator Email <span className="text-destructive">*</span>
                </FieldLabel>
                <Input
                  id="operatorEmail-zod"
                  type="email"
                  placeholder="operator@neura-robotics.com"
                  aria-invalid={!!errors.operatorEmail}
                  {...register('operatorEmail')}
                />
                <FieldDescription>
                  Must be a valid @neura-robotics.com email address.
                </FieldDescription>
                {errors.operatorEmail && (
                  <FieldError errors={errors.operatorEmail.message} />
                )}
              </Field>

              {/* Checkboxes */}
              <div className="space-y-3">
                <Controller
                  name="autoStart"
                  control={control}
                  render={({ field }) => (
                    <Field className="flex-row items-center gap-3">
                      <Checkbox
                        id="autoStart-zod"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <FieldLabel
                        htmlFor="autoStart-zod"
                        className="cursor-pointer"
                      >
                        Auto-start deployment on scheduled date
                      </FieldLabel>
                    </Field>
                  )}
                />

                <Controller
                  name="notifyOnComplete"
                  control={control}
                  render={({ field }) => (
                    <Field className="flex-row items-center gap-3">
                      <Checkbox
                        id="notifyOnComplete-zod"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <FieldLabel
                        htmlFor="notifyOnComplete-zod"
                        className="cursor-pointer"
                      >
                        Send notification on completion
                      </FieldLabel>
                    </Field>
                  )}
                />
              </div>

              {/* Switches */}
              <div className="space-y-3">
                <Controller
                  name="enableMonitoring"
                  control={control}
                  render={({ field }) => (
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <FieldLabel
                          htmlFor="enableMonitoring-zod"
                          className="cursor-pointer"
                        >
                          Enable Real-time Monitoring
                        </FieldLabel>
                        <FieldDescription>
                          Monitor robot performance and status in real-time
                        </FieldDescription>
                      </div>
                      <Switch
                        id="enableMonitoring-zod"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </div>
                  )}
                />

                <Controller
                  name="lowPowerMode"
                  control={control}
                  render={({ field }) => (
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <FieldLabel
                          htmlFor="lowPowerMode-zod"
                          className="cursor-pointer"
                        >
                          Low Power Mode
                        </FieldLabel>
                        <FieldDescription>
                          Reduce energy consumption during idle periods
                        </FieldDescription>
                      </div>
                      <Switch
                        id="lowPowerMode-zod"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </div>
                  )}
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  type="submit"
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Creating...' : 'Create Deployment'}
                </Button>
                <Button type="button" variant="outline" onClick={() => reset()}>
                  Reset
                </Button>
              </div>
            </FieldGroup>
          </FieldSet>
        </form>

        {/* Result Display */}
        {submittedData && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Submitted Data:</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSubmittedData(null)}
              >
                Clear
              </Button>
            </div>
            <pre className="bg-muted text-muted-foreground overflow-auto rounded-md p-4 text-xs">
              <code>{JSON.stringify(submittedData, null, 2)}</code>
            </pre>
            <div className="bg-muted/50 rounded-md p-3 text-xs">
              <p className="text-muted-foreground">
                💡 <strong>Type Safety:</strong> This data is fully typed with
                TypeScript through Zod schema inference, providing compile-time
                type checking and autocomplete.
              </p>
            </div>
          </div>
        )}
      </div>
    );
  },
};
