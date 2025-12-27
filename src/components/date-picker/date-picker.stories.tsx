import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import type { DateRange as DateRangeType } from 'react-day-picker';

import {
  DatePicker,
  DatePickerWithPresets,
  DateRangePicker,
  DatePickerButton,
} from './date-picker';
import { Label } from '@/components/label/label';
import { Button } from '@/components/button/button';

// Date utility functions (private - not exported to avoid Storybook treating them as stories)
function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function subDays(date: Date, days: number): Date {
  return addDays(date, -days);
}

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A comprehensive date picker component built on react-day-picker with multiple variants.

## Features
- Single date selection
- Date range selection
- Preset shortcuts
- Custom formats (Intl.DateTimeFormat or custom formatters)
- Size variants (sm, default, lg)
- Disabled dates/ranges
- Alignment options
- Dropdown navigation (for birth dates, etc.)

## Common Use Cases
- Event scheduling
- Maintenance windows
- Deployment dates
- Task deadlines
- Birth dates
- Vacation/leave planning
- Report date ranges

## Components
- **DatePicker**: Basic single date picker
- **DatePickerButton**: Date picker with dropdown navigation
- **DatePickerWithPresets**: Date picker with preset shortcuts
- **DateRangePicker**: Range selection (from-to dates)
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof DatePicker>;

// =============================================================================
// BASIC EXAMPLES
// =============================================================================

/**
 * ## Default
 *
 * Basic date picker with optional label and default value.
 */
export const Default: Story = {
  render: function DefaultExample() {
    const [date, setDate] = React.useState<Date | undefined>(undefined);

    return (
      <div className="flex flex-col gap-6 p-4">
        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Basic Usage
          </h4>
          <DatePicker
            value={date}
            onChange={setDate}
            placeholder="Pick a date"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="labeled-date">Maintenance Date</Label>
          <DatePicker
            value={date}
            onChange={setDate}
            placeholder="Select date"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label>Deployment Date (Pre-selected)</Label>
          <DatePicker
            value={new Date()}
            onChange={() => {}}
            placeholder="Pick a date"
          />
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// SIZES
// =============================================================================

/**
 * ## Sizes
 *
 * Three available sizes: sm, default, and lg.
 */
export const Sizes: Story = {
  render: function SizesExample() {
    const [date1, setDate1] = React.useState<Date | undefined>(undefined);
    const [date2, setDate2] = React.useState<Date | undefined>(undefined);
    const [date3, setDate3] = React.useState<Date | undefined>(undefined);

    return (
      <div className="flex flex-col gap-6 p-4">
        <div className="flex flex-col gap-2">
          <Label className="text-muted-foreground text-xs">
            Size: sm (h-8 / 32px)
          </Label>
          <DatePicker
            size="sm"
            value={date1}
            onChange={setDate1}
            placeholder="Small date picker"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-muted-foreground text-xs">
            Size: default (h-9 / 36px)
          </Label>
          <DatePicker
            value={date2}
            onChange={setDate2}
            placeholder="Default date picker"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-muted-foreground text-xs">
            Size: lg (h-10 / 40px)
          </Label>
          <DatePicker
            size="lg"
            value={date3}
            onChange={setDate3}
            placeholder="Large date picker"
          />
        </div>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Use <code>size</code> prop to match input
          heights in your forms.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// DATE RANGE
// =============================================================================

/**
 * ## Date Range
 *
 * Select a range of dates with from-to functionality.
 */
export const DateRange: Story = {
  name: 'Date Range',
  render: function DateRangeExample() {
    const [range1, setRange1] = React.useState<DateRangeType | undefined>(
      undefined,
    );
    const [range2, setRange2] = React.useState<DateRangeType | undefined>({
      from: new Date(),
      to: addDays(new Date(), 7),
    });
    const [range3, setRange3] = React.useState<DateRangeType | undefined>(
      undefined,
    );

    return (
      <div className="flex flex-col gap-8 p-4">
        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Basic Range
          </h4>
          <div className="flex flex-col gap-2">
            <Label>Maintenance Window</Label>
            <DateRangePicker
              value={range1}
              onChange={setRange1}
              placeholder="Pick a date range"
              className="w-[350px]"
            />
          </div>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Pre-selected Range
          </h4>
          <div className="flex flex-col gap-2">
            <Label>Deployment Period</Label>
            <DateRangePicker
              value={range2}
              onChange={setRange2}
              className="w-[350px]"
            />
          </div>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Single Month View
          </h4>
          <div className="flex flex-col gap-2">
            <Label>Task Duration</Label>
            <DateRangePicker
              value={range3}
              onChange={setRange3}
              numberOfMonths={1}
              className="w-[280px]"
            />
          </div>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Use <code>numberOfMonths</code> prop to show
          1 or 2 months. Wider ranges benefit from 2-month view.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// FEATURES
// =============================================================================

/**
 * ## Features
 *
 * Presets, custom formats, and dropdown navigation for birth dates.
 */
export const Features: Story = {
  render: function FeaturesExample() {
    const [deployDate, setDeployDate] = React.useState<Date | undefined>(
      undefined,
    );
    const [birthDate, setBirthDate] = React.useState<Date | undefined>(
      undefined,
    );
    const [reportDate, setReportDate] = React.useState<Date | undefined>(
      new Date(),
    );
    const [customDate, setCustomDate] = React.useState<Date | undefined>(
      new Date(),
    );

    const presets = [
      { label: 'Today', value: new Date() },
      { label: 'Tomorrow', value: addDays(new Date(), 1) },
      { label: 'In 3 days', value: addDays(new Date(), 3) },
      { label: 'In a week', value: addDays(new Date(), 7) },
      { label: 'In a month', value: addDays(new Date(), 30) },
    ];

    return (
      <div className="flex flex-col gap-8 p-4">
        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            With Presets
          </h4>
          <div className="flex flex-col gap-2">
            <Label>Deployment Schedule</Label>
            <DatePickerWithPresets
              value={deployDate}
              onChange={setDeployDate}
              placeholder="Select date"
              presets={presets}
            />
          </div>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Dropdown Navigation (Birth Date)
          </h4>
          <div className="flex flex-col gap-2">
            <Label>Operator Birth Date</Label>
            <DatePickerButton
              value={birthDate}
              onChange={setBirthDate}
              placeholder="Select date"
              captionLayout="dropdown"
              dateFormat={{ year: 'numeric', month: 'short', day: 'numeric' }}
            />
          </div>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Custom Format (Intl.DateTimeFormat)
          </h4>
          <div className="space-y-3">
            <div className="flex flex-col gap-2">
              <Label>Long: "December 22, 2025"</Label>
              <DatePicker
                value={reportDate}
                onChange={setReportDate}
                dateFormat={{
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Short: "12/22/2025"</Label>
              <DatePicker
                value={reportDate}
                onChange={setReportDate}
                dateFormat={{
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Full: "Monday, December 22, 2025"</Label>
              <DatePicker
                value={reportDate}
                onChange={setReportDate}
                dateFormat={{
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }}
              />
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Custom Formatter (formatFn)
          </h4>
          <div className="space-y-3">
            <div className="flex flex-col gap-2">
              <Label>ISO format</Label>
              <DatePicker
                value={customDate}
                onChange={setCustomDate}
                formatFn={(d) => d.toISOString().split('T')[0]}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>German locale</Label>
              <DatePicker
                value={customDate}
                onChange={setCustomDate}
                formatFn={(d) => d.toLocaleDateString('de-DE')}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Custom DD/MM/YYYY</Label>
              <DatePicker
                value={customDate}
                onChange={setCustomDate}
                formatFn={(d) =>
                  `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`
                }
              />
            </div>
          </div>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Use <code>dateFormat</code> for native
          formatting or <code>formatFn</code> for full control (date-fns, dayjs,
          etc.).
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// STATES
// =============================================================================

/**
 * ## States
 *
 * Disabled and controlled states.
 */
export const States: Story = {
  render: function StatesExample() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
      <div className="flex flex-col gap-8 p-4">
        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Disabled
          </h4>
          <div className="flex flex-col gap-2">
            <Label>Read-only Date</Label>
            <DatePicker value={new Date()} disabled placeholder="Pick a date" />
          </div>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Controlled (Programmatic Control)
          </h4>
          <div className="flex flex-col gap-2">
            <Label>Deployment Date</Label>
            <DatePicker value={date} onChange={setDate} />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDate(new Date())}
            >
              Today
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDate(subDays(new Date(), 1))}
            >
              Yesterday
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDate(addDays(new Date(), 7))}
            >
              Next week
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDate(undefined)}
            >
              Clear
            </Button>
          </div>
          <p className="text-muted-foreground text-sm">
            Selected: {date ? date.toLocaleDateString() : 'None'}
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// ADVANCED
// =============================================================================

/**
 * ## Advanced
 *
 * Disabled dates, custom disabled logic, and alignment options.
 */
export const Advanced: Story = {
  render: function AdvancedExample() {
    const [date1, setDate1] = React.useState<Date | undefined>(undefined);
    const [date2, setDate2] = React.useState<Date | undefined>(undefined);
    const [date3, setDate3] = React.useState<Date | undefined>(undefined);
    const [date4, setDate4] = React.useState<Date | undefined>(undefined);
    const [date5, setDate5] = React.useState<Date | undefined>(undefined);

    // Disable dates before today and after 30 days from now
    const disabledDays = [
      { before: new Date() },
      { after: addDays(new Date(), 30) },
    ];

    // Disable weekends
    const disableWeekends = (date: Date) => {
      const day = date.getDay();
      return day === 0 || day === 6;
    };

    return (
      <div className="flex flex-col gap-8 p-4">
        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Disabled Dates (Min/Max)
          </h4>
          <div className="flex flex-col gap-2">
            <Label>Select a date (next 30 days only)</Label>
            <DatePicker
              value={date1}
              onChange={setDate1}
              calendarProps={{
                disabled: disabledDays,
              }}
            />
          </div>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Disabled Weekends (Custom Logic)
          </h4>
          <div className="flex flex-col gap-2">
            <Label>Select a weekday</Label>
            <DatePicker
              value={date2}
              onChange={setDate2}
              calendarProps={{
                disabled: disableWeekends,
              }}
            />
          </div>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Alignment Options
          </h4>
          <div className="space-y-3">
            <div className="flex flex-col gap-2">
              <Label>Align start</Label>
              <DatePicker value={date3} onChange={setDate3} align="start" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Align center</Label>
              <DatePicker value={date4} onChange={setDate4} align="center" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Align end</Label>
              <DatePicker value={date5} onChange={setDate5} align="end" />
            </div>
          </div>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Use <code>calendarProps.disabled</code> for
          date ranges, or pass a function for custom logic (weekends, holidays,
          etc.).
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
 * Real-world example: Robot maintenance scheduling in a Neura Robotics dashboard.
 */
export const CompleteShowcase: Story = {
  render: function CompleteShowcaseExample() {
    const [maintenanceDate, setMaintenanceDate] = React.useState<
      Date | undefined
    >(addDays(new Date(), 3));
    const [deploymentRange, setDeploymentRange] = React.useState<
      DateRangeType | undefined
    >({
      from: new Date(),
      to: addDays(new Date(), 14),
    });
    const [inspectionDate, setInspectionDate] = React.useState<
      Date | undefined
    >(undefined);

    const maintenancePresets = [
      { label: 'Next week', value: addDays(new Date(), 7) },
      { label: 'In 2 weeks', value: addDays(new Date(), 14) },
      { label: 'In a month', value: addDays(new Date(), 30) },
      { label: 'In 3 months', value: addDays(new Date(), 90) },
    ];

    // Disable weekends for inspections
    const disableWeekends = (date: Date) => {
      const day = date.getDay();
      return day === 0 || day === 6;
    };

    return (
      <div className="bg-card text-card-foreground w-[600px] space-y-6 rounded-lg border p-6 shadow-sm">
        <div>
          <h3 className="mb-2 text-lg font-semibold">
            Robot Fleet Maintenance Scheduler
          </h3>
          <p className="text-muted-foreground text-sm">
            Schedule maintenance windows and deployment periods for your robot
            fleet
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border p-4">
            <h4 className="mb-3 text-sm font-medium">
              Preventive Maintenance - MAiRA-001
            </h4>
            <div className="space-y-3">
              <div className="flex flex-col gap-2">
                <Label>Scheduled Date</Label>
                <DatePickerWithPresets
                  value={maintenanceDate}
                  onChange={setMaintenanceDate}
                  placeholder="Select maintenance date"
                  presets={maintenancePresets}
                />
              </div>
              {maintenanceDate && (
                <p className="text-muted-foreground text-sm">
                  📅 Maintenance scheduled for{' '}
                  <strong>
                    {maintenanceDate.toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </strong>
                </p>
              )}
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <h4 className="mb-3 text-sm font-medium">
              Deployment Period - LARA Fleet
            </h4>
            <div className="space-y-3">
              <div className="flex flex-col gap-2">
                <Label>Active Period</Label>
                <DateRangePicker
                  value={deploymentRange}
                  onChange={setDeploymentRange}
                  className="w-full"
                />
              </div>
              {deploymentRange?.from && deploymentRange?.to && (
                <p className="text-muted-foreground text-sm">
                  🚀 Deployment from{' '}
                  <strong>{deploymentRange.from.toLocaleDateString()}</strong>{' '}
                  to <strong>{deploymentRange.to.toLocaleDateString()}</strong>{' '}
                  (
                  {Math.ceil(
                    (deploymentRange.to.getTime() -
                      deploymentRange.from.getTime()) /
                      (1000 * 60 * 60 * 24),
                  )}{' '}
                  days)
                </p>
              )}
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <h4 className="mb-3 text-sm font-medium">
              Quality Inspection - 4NE1 Units
            </h4>
            <div className="space-y-3">
              <div className="flex flex-col gap-2">
                <Label>Inspection Date (Weekdays only)</Label>
                <DatePicker
                  value={inspectionDate}
                  onChange={setInspectionDate}
                  placeholder="Select inspection date"
                  calendarProps={{
                    disabled: disableWeekends,
                  }}
                  dateFormat={{
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  }}
                />
              </div>
              {inspectionDate && (
                <p className="text-muted-foreground text-sm">
                  🔍 Inspection scheduled for{' '}
                  <strong>{inspectionDate.toLocaleDateString()}</strong>
                </p>
              )}
            </div>
          </div>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 This showcase demonstrates date pickers for maintenance scheduling,
          deployment planning, and inspection dates with custom constraints.
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
 * Date pickers should follow accessibility best practices for keyboard navigation
 * and screen readers.
 */
export const Accessibility: Story = {
  render: function AccessibilityExample() {
    const [date, setDate] = React.useState<Date | undefined>(undefined);

    return (
      <div className="flex flex-col gap-6 p-4">
        <div className="bg-muted/50 rounded-lg p-4">
          <h4 className="mb-2 text-sm font-semibold">Accessibility Features</h4>
          <ul className="text-muted-foreground space-y-1 text-sm">
            <li>
              ✓ <strong>Keyboard navigation</strong>: Space/Enter to open, Arrow
              keys to navigate dates
            </li>
            <li>
              ✓ <strong>Labels</strong>: Always use <code>Label</code> with{' '}
              <code>htmlFor</code> for screen readers
            </li>
            <li>
              ✓ <strong>Focus management</strong>: Clear focus indicators on
              trigger and calendar
            </li>
            <li>
              ✓ <strong>ARIA attributes</strong>: Built-in ARIA labels for
              calendar navigation
            </li>
            <li>
              ✓ <strong>Error states</strong>: Use <code>aria-invalid</code> and{' '}
              <code>aria-describedby</code>
            </li>
            <li>
              ✓ <strong>Placeholder text</strong>: Descriptive placeholder for
              better UX
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Proper Labeling
          </h4>
          <div className="flex flex-col gap-2">
            <Label htmlFor="maintenance-date">Maintenance Date</Label>
            <DatePicker
              id="maintenance-date"
              value={date}
              onChange={setDate}
              placeholder="Select date (required)"
            />
          </div>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Keyboard Navigation
          </h4>
          <div className="bg-muted/30 rounded-lg p-3 text-sm">
            <ul className="text-muted-foreground space-y-1">
              <li>
                <kbd className="bg-background rounded border px-1 text-xs">
                  Space/Enter
                </kbd>{' '}
                - Open/close calendar
              </li>
              <li>
                <kbd className="bg-background rounded border px-1 text-xs">
                  Arrow keys
                </kbd>{' '}
                - Navigate dates
              </li>
              <li>
                <kbd className="bg-background rounded border px-1 text-xs">
                  Enter
                </kbd>{' '}
                - Select focused date
              </li>
              <li>
                <kbd className="bg-background rounded border px-1 text-xs">
                  Esc
                </kbd>{' '}
                - Close calendar
              </li>
              <li>
                <kbd className="bg-background rounded border px-1 text-xs">
                  Tab
                </kbd>{' '}
                - Move focus to next element
              </li>
            </ul>
          </div>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Always provide labels, ensure keyboard
          navigation works, and test with screen readers (NVDA, JAWS,
          VoiceOver).
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Accessibility Best Practices

**Label Association:**
\`\`\`tsx
<Label htmlFor="date-picker">Maintenance Date</Label>
<DatePicker id="date-picker" ... />
\`\`\`

**Error Handling:**
\`\`\`tsx
<DatePicker 
  aria-invalid={hasError}
  aria-describedby="date-error"
/>
<span id="date-error" className="text-destructive text-sm">
  {errorMessage}
</span>
\`\`\`

**Descriptive Placeholder:**
\`\`\`tsx
<DatePicker placeholder="Select deployment date (required)" />
\`\`\`

**Testing:**
- Test keyboard navigation (Tab, Arrow keys, Enter, Escape)
- Verify screen reader announces dates and navigation
- Ensure focus indicators are visible
- Check color contrast for disabled dates
        `,
      },
    },
  },
};
