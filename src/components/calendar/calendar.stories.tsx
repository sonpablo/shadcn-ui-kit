import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './calendar';
import { useState } from 'react';
import type { DateRange as DateRangeType } from 'react-day-picker';

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

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default calendar with no date selected
 */
export const Default: Story = {
  render: () => <Calendar />,
};

/**
 * Calendar with a selected date
 */
export const WithSelectedDate: Story = {
  render: function WithSelectedDateComponent() {
    const [selected, setSelected] = useState<Date | undefined>(new Date());
    return (
      <Calendar mode="single" selected={selected} onSelect={setSelected} />
    );
  },
};

/**
 * Calendar for selecting a date range
 */
export const DateRange: Story = {
  render: function DateRangeComponent() {
    const [range, setRange] = useState<DateRangeType | undefined>({
      from: new Date(),
      to: addDays(new Date(), 7),
    });
    return (
      <div className="space-y-4">
        <Calendar mode="range" selected={range} onSelect={setRange} />
        {range?.from && (
          <div className="text-muted-foreground text-center text-sm">
            {range.from.toLocaleDateString()} -{' '}
            {range.to?.toLocaleDateString() || '...'}
          </div>
        )}
      </div>
    );
  },
};

/**
 * Calendar with month and year dropdowns
 */
export const WithDropdowns: Story = {
  render: function WithDropdownsComponent() {
    const [selected, setSelected] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
        captionLayout="dropdown"
        fromYear={2020}
        toYear={2030}
      />
    );
  },
};

/**
 * Calendar with week numbers displayed
 */
export const WithWeekNumbers: Story = {
  render: function WithWeekNumbersComponent() {
    const [selected, setSelected] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
        showWeekNumber
      />
    );
  },
};

/**
 * Calendar with disabled dates
 */
export const WithDisabledDates: Story = {
  render: function WithDisabledDatesComponent() {
    const [selected, setSelected] = useState<Date | undefined>();
    return (
      <div className="space-y-4">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={setSelected}
          disabled={[
            { dayOfWeek: [0, 6] }, // Disable weekends
            { before: new Date() }, // Disable past dates
          ]}
        />
        <p className="text-muted-foreground max-w-xs text-center text-sm">
          Weekends and past dates are disabled
        </p>
      </div>
    );
  },
};

/**
 * Calendar with multiple dates selection
 */
export const MultipleSelection: Story = {
  render: function MultipleSelectionComponent() {
    const [selected, setSelected] = useState<Date[] | undefined>([
      new Date(),
      addDays(new Date(), 2),
      addDays(new Date(), 5),
    ]);
    return (
      <div className="space-y-4">
        <Calendar mode="multiple" selected={selected} onSelect={setSelected} />
        <div className="text-muted-foreground text-center text-sm">
          {selected?.length || 0} dates selected
        </div>
      </div>
    );
  },
};

/**
 * Calendar with custom button variant
 */
export const WithOutlineButtons: Story = {
  render: function WithOutlineButtonsComponent() {
    const [selected, setSelected] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
        buttonVariant="outline"
      />
    );
  },
};

/**
 * Calendar without outside days
 */
export const WithoutOutsideDays: Story = {
  render: function WithoutOutsideDaysComponent() {
    const [selected, setSelected] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
        showOutsideDays={false}
      />
    );
  },
};

/**
 * Calendar with default month set
 */
export const CustomDefaultMonth: Story = {
  render: function CustomDefaultMonthComponent() {
    const [selected, setSelected] = useState<Date | undefined>();
    return (
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
        defaultMonth={addMonths(new Date(), 6)}
      />
    );
  },
};

/**
 * Calendar with min/max date range
 */
export const WithMinMaxDates: Story = {
  render: function WithMinMaxDatesComponent() {
    const [selected, setSelected] = useState<Date | undefined>(new Date());
    return (
      <div className="space-y-4">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={setSelected}
          disabled={{
            before: subMonths(new Date(), 1),
            after: addMonths(new Date(), 2),
          }}
        />
        <p className="text-muted-foreground max-w-xs text-center text-sm">
          Can only select dates within ±1-2 months from today
        </p>
      </div>
    );
  },
};

/**
 * Multiple calendars side by side
 */
export const MultipleMonths: Story = {
  render: function MultipleMonthsComponent() {
    const [selected, setSelected] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
        numberOfMonths={2}
      />
    );
  },
};

/**
 * Interactive calendar with all features
 */
export const CompleteShowcase: Story = {
  render: function CompleteShowcaseComponent() {
    const InteractiveCalendar = () => {
      const [mode, setMode] = useState<'single' | 'range' | 'multiple'>(
        'single',
      );
      const [singleDate, setSingleDate] = useState<Date | undefined>(
        new Date(),
      );
      const [rangeDate, setRangeDate] = useState<DateRangeType | undefined>({
        from: new Date(),
        to: addDays(new Date(), 5),
      });
      const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([
        new Date(),
        addDays(new Date(), 3),
      ]);

      return (
        <div className="space-y-6">
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setMode('single')}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                mode === 'single'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              Single
            </button>
            <button
              onClick={() => setMode('range')}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                mode === 'range'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              Range
            </button>
            <button
              onClick={() => setMode('multiple')}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                mode === 'multiple'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              Multiple
            </button>
          </div>

          {mode === 'single' && (
            <Calendar
              mode="single"
              selected={singleDate}
              onSelect={setSingleDate}
            />
          )}
          {mode === 'range' && (
            <Calendar
              mode="range"
              selected={rangeDate}
              onSelect={setRangeDate}
            />
          )}
          {mode === 'multiple' && (
            <Calendar
              mode="multiple"
              selected={multipleDates}
              onSelect={setMultipleDates}
            />
          )}

          <div className="text-muted-foreground text-center text-sm">
            {mode === 'single' && singleDate && (
              <p>Selected: {singleDate.toLocaleDateString()}</p>
            )}
            {mode === 'range' && rangeDate?.from && (
              <p>
                Range: {rangeDate.from.toLocaleDateString()} -{' '}
                {rangeDate.to?.toLocaleDateString() || '...'}
              </p>
            )}
            {mode === 'multiple' && multipleDates && (
              <p>{multipleDates.length} dates selected</p>
            )}
          </div>
        </div>
      );
    };

    return <InteractiveCalendar />;
  },
};

/**
 * Calendar with footer
 */
export const WithFooter: Story = {
  render: function WithFooterComponent() {
    const [selected, setSelected] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={
          <div className="text-muted-foreground mt-4 border-t pt-4 text-center text-sm">
            {selected ? (
              <>Selected: {selected.toLocaleDateString()}</>
            ) : (
              <>Pick a date</>
            )}
          </div>
        }
      />
    );
  },
};

/**
 * All calendar variants in one view
 */
export const AllVariants: Story = {
  render: function AllVariantsComponent() {
    const [date1, setDate1] = useState<Date | undefined>(new Date());
    const [date2, setDate2] = useState<Date | undefined>(new Date());
    const [range, setRange] = useState<DateRangeType | undefined>({
      from: new Date(),
      to: addDays(new Date(), 5),
    });
    const [multiple, setMultiple] = useState<Date[] | undefined>([
      new Date(),
      addDays(new Date(), 2),
    ]);

    return (
      <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Default</h4>
          <Calendar mode="single" selected={date1} onSelect={setDate1} />
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold">With Dropdowns</h4>
          <Calendar
            mode="single"
            selected={date2}
            onSelect={setDate2}
            captionLayout="dropdown"
            fromYear={2020}
            toYear={2030}
          />
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Date Range</h4>
          <Calendar mode="range" selected={range} onSelect={setRange} />
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Multiple Selection</h4>
          <Calendar
            mode="multiple"
            selected={multiple}
            onSelect={setMultiple}
          />
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
  },
};
