import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { addDays, subDays } from 'date-fns';
import type { DateRange as DateRangeType } from 'react-day-picker';
import {
  DatePicker,
  DatePickerWithPresets,
  DateRangePicker,
  DatePickerButton,
} from './date-picker';
import { Label } from '@/components/label/label';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof DatePicker>;

// Default DatePicker
export const Default: Story = {
  render: function DefaultExample() {
    const [date, setDate] = React.useState<Date | undefined>(undefined);

    return (
      <DatePicker
        value={date}
        onChange={setDate}
        placeholder="Pick a date"
      />
    );
  },
};

// With Label
export const WithLabel: Story = {
  render: function WithLabelExample() {
    const [date, setDate] = React.useState<Date | undefined>(undefined);

    return (
      <div className="flex flex-col gap-2">
        <Label htmlFor="date-picker">Select a date</Label>
        <DatePicker
          value={date}
          onChange={setDate}
          placeholder="Pick a date"
        />
      </div>
    );
  },
};

// With Default Value
export const WithDefaultValue: Story = {
  render: function WithDefaultValueExample() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
      <DatePicker
        value={date}
        onChange={setDate}
        placeholder="Pick a date"
      />
    );
  },
};

// Date of Birth Picker (with dropdown)
export const DateOfBirth: Story = {
  name: 'Date of Birth',
  render: function DateOfBirthExample() {
    const [date, setDate] = React.useState<Date | undefined>(undefined);

    return (
      <div className="flex flex-col gap-2">
        <Label htmlFor="dob">Date of birth</Label>
        <DatePickerButton
          value={date}
          onChange={setDate}
          placeholder="Select date"
          captionLayout="dropdown"
          dateFormat="PP"
        />
      </div>
    );
  },
};

// With Presets
export const WithPresets: Story = {
  render: function WithPresetsExample() {
    const [date, setDate] = React.useState<Date | undefined>(undefined);

    const presets = [
      { label: 'Today', value: new Date() },
      { label: 'Tomorrow', value: addDays(new Date(), 1) },
      { label: 'In 3 days', value: addDays(new Date(), 3) },
      { label: 'In a week', value: addDays(new Date(), 7) },
      { label: 'In a month', value: addDays(new Date(), 30) },
    ];

    return (
      <div className="flex flex-col gap-2">
        <Label>Schedule date</Label>
        <DatePickerWithPresets
          value={date}
          onChange={setDate}
          placeholder="Select date"
          presets={presets}
        />
      </div>
    );
  },
};

// Date Range Picker
export const DateRange: Story = {
  name: 'Date Range',
  render: function DateRangeExample() {
    const [dateRange, setDateRange] = React.useState<DateRangeType | undefined>(
      undefined,
    );

    return (
      <div className="flex flex-col gap-2">
        <Label>Select date range</Label>
        <DateRangePicker
          value={dateRange}
          onChange={setDateRange}
          placeholder="Pick a date range"
        />
      </div>
    );
  },
};

// Date Range with Default Value
export const DateRangeWithDefault: Story = {
  name: 'Date Range (Pre-selected)',
  render: function DateRangeDefaultExample() {
    const [dateRange, setDateRange] = React.useState<DateRangeType | undefined>({
      from: new Date(),
      to: addDays(new Date(), 7),
    });

    return (
      <div className="flex flex-col gap-2">
        <Label>Vacation dates</Label>
        <DateRangePicker
          value={dateRange}
          onChange={setDateRange}
          className="w-[350px]"
        />
      </div>
    );
  },
};

// Single Month Range Picker
export const SingleMonthRange: Story = {
  name: 'Date Range (Single Month)',
  render: function SingleMonthRangeExample() {
    const [dateRange, setDateRange] = React.useState<DateRangeType | undefined>(
      undefined,
    );

    return (
      <DateRangePicker
        value={dateRange}
        onChange={setDateRange}
        numberOfMonths={1}
        className="w-[280px]"
      />
    );
  },
};

// Disabled State
export const Disabled: Story = {
  render: () => (
    <DatePicker
      value={new Date()}
      disabled
      placeholder="Pick a date"
    />
  ),
};

// Custom Format
export const CustomFormat: Story = {
  render: function CustomFormatExample() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label>Default format (PPP)</Label>
          <DatePicker value={date} onChange={setDate} dateFormat="PPP" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Short format (PP)</Label>
          <DatePicker value={date} onChange={setDate} dateFormat="PP" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>ISO format (yyyy-MM-dd)</Label>
          <DatePicker value={date} onChange={setDate} dateFormat="yyyy-MM-dd" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>European format (dd/MM/yyyy)</Label>
          <DatePicker value={date} onChange={setDate} dateFormat="dd/MM/yyyy" />
        </div>
      </div>
    );
  },
};

// Different Alignments
export const Alignments: Story = {
  render: function AlignmentsExample() {
    const [date1, setDate1] = React.useState<Date | undefined>(undefined);
    const [date2, setDate2] = React.useState<Date | undefined>(undefined);
    const [date3, setDate3] = React.useState<Date | undefined>(undefined);

    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label>Align start</Label>
          <DatePicker value={date1} onChange={setDate1} align="start" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Align center</Label>
          <DatePicker value={date2} onChange={setDate2} align="center" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Align end</Label>
          <DatePicker value={date3} onChange={setDate3} align="end" />
        </div>
      </div>
    );
  },
};

// With Min/Max Dates
export const WithMinMaxDates: Story = {
  name: 'With Disabled Dates',
  render: function WithMinMaxExample() {
    const [date, setDate] = React.useState<Date | undefined>(undefined);

    // Disable dates before today and after 30 days from now
    const disabledDays = [
      { before: new Date() },
      { after: addDays(new Date(), 30) },
    ];

    return (
      <div className="flex flex-col gap-2">
        <Label>Select a date (next 30 days only)</Label>
        <DatePicker
          value={date}
          onChange={setDate}
          calendarProps={{
            disabled: disabledDays,
          }}
        />
      </div>
    );
  },
};

// Disable Weekends
export const DisableWeekends: Story = {
  render: function DisableWeekendsExample() {
    const [date, setDate] = React.useState<Date | undefined>(undefined);

    const disableWeekends = (date: Date) => {
      const day = date.getDay();
      return day === 0 || day === 6;
    };

    return (
      <div className="flex flex-col gap-2">
        <Label>Select a weekday</Label>
        <DatePicker
          value={date}
          onChange={setDate}
          calendarProps={{
            disabled: disableWeekends,
          }}
        />
      </div>
    );
  },
};

// Controlled Example
export const Controlled: Story = {
  render: function ControlledExample() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
      <div className="flex flex-col gap-4">
        <DatePicker value={date} onChange={setDate} />
        <div className="flex gap-2">
          <button
            className="text-primary text-sm underline"
            onClick={() => setDate(new Date())}
          >
            Today
          </button>
          <button
            className="text-primary text-sm underline"
            onClick={() => setDate(subDays(new Date(), 1))}
          >
            Yesterday
          </button>
          <button
            className="text-primary text-sm underline"
            onClick={() => setDate(addDays(new Date(), 7))}
          >
            Next week
          </button>
          <button
            className="text-primary text-sm underline"
            onClick={() => setDate(undefined)}
          >
            Clear
          </button>
        </div>
        <p className="text-muted-foreground text-sm">
          Selected: {date ? date.toLocaleDateString() : 'None'}
        </p>
      </div>
    );
  },
};

