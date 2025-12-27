import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './calendar';
import { useState } from 'react';
import type { DateRange as DateRangeType } from 'react-day-picker';
import { Button } from '@/components/button/button';
import { Badge } from '@/components/badge/badge';

// Date utility functions (private - not exported to avoid Storybook treating them as stories)
function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function addMonths(date: Date, months: number): Date {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

function subMonths(date: Date, months: number): Date {
  return addMonths(date, -months);
}

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A flexible calendar component built on react-day-picker with multiple selection modes and features.

## Features
- Multiple selection modes (single, range, multiple)
- Disabled dates and date ranges
- Month/year dropdown navigation
- Week numbers display
- Custom button variants
- Multiple months view
- Footer support
- Keyboard navigation

## Common Use Cases
- Date selection in forms
- Scheduling maintenance windows
- Deployment date ranges
- Task planning
- Report date filters
- Event calendar

## Props
- **mode**: 'single' | 'range' | 'multiple'
- **selected**: Selected date(s)
- **onSelect**: Selection callback
- **disabled**: Disabled dates/ranges
- **captionLayout**: 'buttons' | 'dropdown'
- **numberOfMonths**: Number of months to display
- **showWeekNumber**: Show week numbers
- **buttonVariant**: 'default' | 'outline'
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// BASIC EXAMPLES
// =============================================================================

/**
 * ## Default
 *
 * Basic calendar with no pre-selected date.
 */
export const Default: Story = {
  render: () => <Calendar />,
};

// =============================================================================
// MODES
// =============================================================================

/**
 * ## Modes
 *
 * Calendar supports three selection modes: single, range, and multiple.
 */
export const Modes: Story = {
  render: function ModesExample() {
    const [singleDate, setSingleDate] = useState<Date | undefined>(new Date());
    const [rangeDate, setRangeDate] = useState<DateRangeType | undefined>({
      from: new Date(),
      to: addDays(new Date(), 7),
    });
    const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([
      new Date(),
      addDays(new Date(), 2),
      addDays(new Date(), 5),
    ]);

    return (
      <div className="flex flex-col gap-8 p-4">
        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Single Selection
          </h4>
          <Calendar
            mode="single"
            selected={singleDate}
            onSelect={setSingleDate}
          />
          {singleDate && (
            <p className="text-muted-foreground mt-2 text-center text-sm">
              Selected: {singleDate.toLocaleDateString()}
            </p>
          )}
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Range Selection
          </h4>
          <Calendar mode="range" selected={rangeDate} onSelect={setRangeDate} />
          {rangeDate?.from && (
            <p className="text-muted-foreground mt-2 text-center text-sm">
              Range: {rangeDate.from.toLocaleDateString()} -{' '}
              {rangeDate.to?.toLocaleDateString() || '...'}
            </p>
          )}
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Multiple Selection
          </h4>
          <Calendar
            mode="multiple"
            selected={multipleDates}
            onSelect={setMultipleDates}
          />
          <p className="text-muted-foreground mt-2 text-center text-sm">
            {multipleDates?.length || 0} dates selected
          </p>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Use <code>mode</code> prop to control
          selection behavior.
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
 * Additional calendar features: dropdowns, week numbers, button variants, and more.
 */
export const Features: Story = {
  render: function FeaturesExample() {
    const [date1, setDate1] = useState<Date | undefined>(new Date());
    const [date2, setDate2] = useState<Date | undefined>(new Date());
    const [date3, setDate3] = useState<Date | undefined>(new Date());
    const [date4, setDate4] = useState<Date | undefined>(new Date());

    return (
      <div className="flex flex-col gap-8 p-4">
        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            With Month/Year Dropdowns
          </h4>
          <Calendar
            mode="single"
            selected={date1}
            onSelect={setDate1}
            captionLayout="dropdown"
            fromYear={2020}
            toYear={2030}
          />
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            With Week Numbers
          </h4>
          <Calendar
            mode="single"
            selected={date2}
            onSelect={setDate2}
            showWeekNumber
          />
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Outline Button Variant
          </h4>
          <Calendar
            mode="single"
            selected={date3}
            onSelect={setDate3}
            buttonVariant="outline"
          />
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Without Outside Days
          </h4>
          <Calendar
            mode="single"
            selected={date4}
            onSelect={setDate4}
            showOutsideDays={false}
          />
        </div>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Use <code>captionLayout="dropdown"</code> for
          birth date selection, <code>showWeekNumber</code> for scheduling.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// DISABLED DATES
// =============================================================================

/**
 * ## Disabled Dates
 *
 * Control which dates are selectable with disabled prop.
 */
export const DisabledDates: Story = {
  render: function DisabledDatesExample() {
    const [date1, setDate1] = useState<Date | undefined>();
    const [date2, setDate2] = useState<Date | undefined>(new Date());
    const [date3, setDate3] = useState<Date | undefined>();

    return (
      <div className="flex flex-col gap-8 p-4">
        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Disable Weekends & Past Dates
          </h4>
          <Calendar
            mode="single"
            selected={date1}
            onSelect={setDate1}
            disabled={[
              { dayOfWeek: [0, 6] }, // Disable weekends
              { before: new Date() }, // Disable past dates
            ]}
          />
          <p className="text-muted-foreground mt-2 text-center text-sm">
            Weekends and past dates are disabled
          </p>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Min/Max Date Range
          </h4>
          <Calendar
            mode="single"
            selected={date2}
            onSelect={setDate2}
            disabled={{
              before: subMonths(new Date(), 1),
              after: addMonths(new Date(), 2),
            }}
          />
          <p className="text-muted-foreground mt-2 text-center text-sm">
            Can only select within ±1-2 months from today
          </p>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
            Custom Default Month
          </h4>
          <Calendar
            mode="single"
            selected={date3}
            onSelect={setDate3}
            defaultMonth={addMonths(new Date(), 6)}
          />
          <p className="text-muted-foreground mt-2 text-center text-sm">
            Opens 6 months in the future
          </p>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Use <code>disabled</code> prop for custom
          date restrictions, <code>defaultMonth</code> to set initial view.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// MULTIPLE MONTHS
// =============================================================================

/**
 * ## Multiple Months
 *
 * Display multiple months side-by-side for easier range selection.
 */
export const MultipleMonths: Story = {
  render: function MultipleMonthsExample() {
    const [range, setRange] = useState<DateRangeType | undefined>({
      from: new Date(),
      to: addDays(new Date(), 10),
    });

    return (
      <div className="space-y-4 p-4">
        <h4 className="text-muted-foreground text-center text-xs font-medium uppercase">
          Two Month View for Range Selection
        </h4>
        <Calendar
          mode="range"
          selected={range}
          onSelect={setRange}
          numberOfMonths={2}
        />
        {range?.from && (
          <p className="text-muted-foreground text-center text-sm">
            Range: {range.from.toLocaleDateString()} -{' '}
            {range.to?.toLocaleDateString() || '...'}
          </p>
        )}
        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Use <code>numberOfMonths={'{2}'}</code> for
          better range selection UX.
        </p>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// WITH FOOTER
// =============================================================================

/**
 * ## With Footer
 *
 * Add custom footer content for additional information or actions.
 */
export const WithFooter: Story = {
  render: function WithFooterExample() {
    const [selected, setSelected] = useState<Date | undefined>(new Date());

    return (
      <div className="space-y-4 p-4">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={setSelected}
          footer={
            <div className="text-muted-foreground mt-4 flex items-center justify-between border-t pt-4 text-sm">
              <span>
                {selected ? selected.toLocaleDateString() : 'Pick a date'}
              </span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSelected(new Date())}
              >
                Today
              </Button>
            </div>
          }
        />
        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Use <code>footer</code> prop for custom
          controls or information display.
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
 * Real-world example: Robot maintenance scheduler with calendar integration.
 */
export const CompleteShowcase: Story = {
  render: function CompleteShowcaseExample() {
    const [maintenanceDate, setMaintenanceDate] = useState<Date | undefined>(
      addDays(new Date(), 3),
    );
    const [deploymentRange, setDeploymentRange] = useState<
      DateRangeType | undefined
    >({
      from: new Date(),
      to: addDays(new Date(), 14),
    });

    return (
      <div className="bg-card text-card-foreground w-[800px] space-y-6 rounded-lg border p-6 shadow-sm">
        <div>
          <h3 className="mb-2 text-lg font-semibold">Robot Fleet Scheduler</h3>
          <p className="text-muted-foreground text-sm">
            Schedule maintenance and deployment windows for your robot fleet
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="default">Maintenance</Badge>
              <h4 className="text-sm font-medium">
                Next Scheduled Maintenance
              </h4>
            </div>
            <Calendar
              mode="single"
              selected={maintenanceDate}
              onSelect={setMaintenanceDate}
              disabled={[
                { dayOfWeek: [0, 6] }, // No maintenance on weekends
                { before: new Date() }, // Can't schedule in past
              ]}
              captionLayout="dropdown"
              fromYear={2024}
              toYear={2025}
            />
            {maintenanceDate && (
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-sm font-medium">Selected Date</p>
                <p className="text-muted-foreground text-sm">
                  {maintenanceDate.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge>Deployment</Badge>
              <h4 className="text-sm font-medium">Deployment Window</h4>
            </div>
            <Calendar
              mode="range"
              selected={deploymentRange}
              onSelect={setDeploymentRange}
              numberOfMonths={1}
            />
            {deploymentRange?.from && (
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-sm font-medium">Deployment Period</p>
                <p className="text-muted-foreground text-sm">
                  From: {deploymentRange.from.toLocaleDateString()}
                </p>
                {deploymentRange.to && (
                  <p className="text-muted-foreground text-sm">
                    To: {deploymentRange.to.toLocaleDateString()}
                  </p>
                )}
                {deploymentRange.from && deploymentRange.to && (
                  <p className="text-muted-foreground text-sm">
                    Duration:{' '}
                    {Math.ceil(
                      (deploymentRange.to.getTime() -
                        deploymentRange.from.getTime()) /
                        (1000 * 60 * 60 * 24),
                    )}{' '}
                    days
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-3 border-t pt-4">
          <Button variant="outline">Cancel</Button>
          <Button>Confirm Schedule</Button>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 This scheduler demonstrates calendar integration for maintenance
          planning and deployment windows.
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
 * Calendar component follows accessibility best practices for date selection.
 */
export const Accessibility: Story = {
  render: function AccessibilityExample() {
    const [selected, setSelected] = useState<Date | undefined>(new Date());

    return (
      <div className="flex flex-col gap-6 p-4">
        <div className="bg-muted/50 rounded-lg p-4">
          <h4 className="mb-2 text-sm font-semibold">Accessibility Features</h4>
          <ul className="text-muted-foreground space-y-1 text-sm">
            <li>
              ✓ <strong>Keyboard navigation</strong>: Arrow keys to navigate
              dates, Enter/Space to select
            </li>
            <li>
              ✓ <strong>ARIA labels</strong>: Proper labeling for screen readers
            </li>
            <li>
              ✓ <strong>Focus management</strong>: Clear focus indicators on
              dates
            </li>
            <li>
              ✓ <strong>Date format</strong>: Dates announced in accessible
              format
            </li>
            <li>
              ✓ <strong>Disabled dates</strong>: Screen readers announce
              disabled dates
            </li>
            <li>
              ✓ <strong>Month navigation</strong>: Keyboard accessible
              previous/next buttons
            </li>
          </ul>
        </div>

        <div className="w-[350px]">
          <Calendar mode="single" selected={selected} onSelect={setSelected} />
        </div>

        <div className="bg-muted/30 rounded-lg p-3">
          <h4 className="mb-2 text-sm font-semibold">Keyboard Shortcuts</h4>
          <ul className="text-muted-foreground space-y-1 text-sm">
            <li>
              <kbd className="bg-background rounded border px-1 text-xs">
                Arrow keys
              </kbd>{' '}
              - Navigate dates
            </li>
            <li>
              <kbd className="bg-background rounded border px-1 text-xs">
                Enter/Space
              </kbd>{' '}
              - Select focused date
            </li>
            <li>
              <kbd className="bg-background rounded border px-1 text-xs">
                PageUp/PageDown
              </kbd>{' '}
              - Navigate months
            </li>
            <li>
              <kbd className="bg-background rounded border px-1 text-xs">
                Home/End
              </kbd>{' '}
              - Go to start/end of week
            </li>
            <li>
              <kbd className="bg-background rounded border px-1 text-xs">
                Tab
              </kbd>{' '}
              - Move focus to next element
            </li>
          </ul>
        </div>

        <p className="text-muted-foreground text-xs">
          💡 <strong>Tip:</strong> Calendar is fully keyboard accessible. Test
          with screen readers (NVDA, JAWS, VoiceOver).
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

**Keyboard Navigation:**
- Arrow keys: Navigate between dates
- Enter/Space: Select focused date
- PageUp/PageDown: Navigate months
- Home/End: Jump to start/end of week

**Screen Reader Support:**
- Dates are announced with full date format
- Disabled dates are indicated
- Month/year changes are announced
- Selection state is communicated

**Testing:**
- Test with keyboard only (no mouse)
- Verify screen reader announces dates and navigation
- Check focus indicators are visible
- Test with different selection modes
        `,
      },
    },
  },
};
