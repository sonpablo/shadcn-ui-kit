'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { CalendarIcon, ChevronDownIcon } from 'lucide-react';
import type { DateRange } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { Button } from '@/components/button/button';
import { Calendar } from '@/components/calendar/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/popover/popover';

/* -----------------------------------------------------------------------------
 * DatePicker (Single Date)
 * -------------------------------------------------------------------------- */

interface DatePickerProps {
  /** The selected date */
  value?: Date;
  /** Callback when date changes */
  onChange?: (date: Date | undefined) => void;
  /** Placeholder text when no date is selected */
  placeholder?: string;
  /** Date format string (date-fns format) */
  dateFormat?: string;
  /** Disable the date picker */
  disabled?: boolean;
  /** Additional className for the trigger button */
  className?: string;
  /** Alignment of the popover */
  align?: 'start' | 'center' | 'end';
  /** Use dropdown caption layout for month/year selection */
  captionLayout?: 'label' | 'dropdown' | 'dropdown-months' | 'dropdown-years';
  /** Close popover after selecting a date */
  closeOnSelect?: boolean;
  /** Calendar props to pass through */
  calendarProps?: Omit<
    React.ComponentProps<typeof Calendar>,
    'mode' | 'selected' | 'onSelect'
  >;
}

function DatePicker({
  value,
  onChange,
  placeholder = 'Select date',
  dateFormat = 'PPP',
  disabled = false,
  className,
  align = 'start',
  captionLayout = 'label',
  closeOnSelect = true,
  calendarProps,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (date: Date | undefined) => {
    onChange?.(date);
    if (closeOnSelect) {
      setOpen(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          data-empty={!value}
          className={cn(
            'w-[280px] justify-start text-left font-normal data-[empty=true]:text-muted-foreground',
            className,
          )}
        >
          <CalendarIcon className="mr-2 size-4" />
          {value ? format(value, dateFormat) : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align={align}>
        <Calendar
          mode="single"
          selected={value}
          onSelect={handleSelect}
          captionLayout={captionLayout}
          {...calendarProps}
        />
      </PopoverContent>
    </Popover>
  );
}

/* -----------------------------------------------------------------------------
 * DatePickerWithPresets
 * -------------------------------------------------------------------------- */

interface DatePreset {
  label: string;
  value: Date;
}

interface DatePickerWithPresetsProps extends DatePickerProps {
  /** Presets to display */
  presets?: DatePreset[];
}

function DatePickerWithPresets({
  value,
  onChange,
  placeholder = 'Select date',
  dateFormat = 'PPP',
  disabled = false,
  className,
  align = 'start',
  presets = [],
  calendarProps,
}: DatePickerWithPresetsProps) {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (date: Date | undefined) => {
    onChange?.(date);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          data-empty={!value}
          className={cn(
            'w-[280px] justify-start text-left font-normal data-[empty=true]:text-muted-foreground',
            className,
          )}
        >
          <CalendarIcon className="mr-2 size-4" />
          {value ? format(value, dateFormat) : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col gap-2 p-2" align={align}>
        {presets.length > 0 && (
          <div className="flex flex-col gap-1">
            {presets.map((preset) => (
              <Button
                key={preset.label}
                variant="ghost"
                size="sm"
                className="justify-start"
                onClick={() => handleSelect(preset.value)}
              >
                {preset.label}
              </Button>
            ))}
          </div>
        )}
        <div className="rounded-md border">
          <Calendar
            mode="single"
            selected={value}
            onSelect={handleSelect}
            {...calendarProps}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}

/* -----------------------------------------------------------------------------
 * DateRangePicker
 * -------------------------------------------------------------------------- */

interface DateRangePickerProps {
  /** The selected date range */
  value?: DateRange;
  /** Callback when date range changes */
  onChange?: (range: DateRange | undefined) => void;
  /** Placeholder text when no range is selected */
  placeholder?: string;
  /** Date format string (date-fns format) */
  dateFormat?: string;
  /** Disable the date picker */
  disabled?: boolean;
  /** Additional className for the trigger button */
  className?: string;
  /** Alignment of the popover */
  align?: 'start' | 'center' | 'end';
  /** Number of months to display */
  numberOfMonths?: number;
  /** Calendar props to pass through */
  calendarProps?: Omit<
    React.ComponentProps<typeof Calendar>,
    'mode' | 'selected' | 'onSelect' | 'numberOfMonths'
  >;
}

function DateRangePicker({
  value,
  onChange,
  placeholder = 'Select date range',
  dateFormat = 'LLL dd, y',
  disabled = false,
  className,
  align = 'start',
  numberOfMonths = 2,
  calendarProps,
}: DateRangePickerProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          data-empty={!value?.from}
          className={cn(
            'w-[300px] justify-start text-left font-normal data-[empty=true]:text-muted-foreground',
            className,
          )}
        >
          <CalendarIcon className="mr-2 size-4" />
          {value?.from ? (
            value.to ? (
              <>
                {format(value.from, dateFormat)} -{' '}
                {format(value.to, dateFormat)}
              </>
            ) : (
              format(value.from, dateFormat)
            )
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align={align}>
        <Calendar
          mode="range"
          selected={value}
          onSelect={onChange}
          numberOfMonths={numberOfMonths}
          {...calendarProps}
        />
      </PopoverContent>
    </Popover>
  );
}

/* -----------------------------------------------------------------------------
 * DatePickerButton (Minimal version with chevron)
 * -------------------------------------------------------------------------- */

interface DatePickerButtonProps extends DatePickerProps {
  /** Use chevron icon instead of calendar icon */
  useChevron?: boolean;
}

function DatePickerButton({
  value,
  onChange,
  placeholder = 'Select date',
  dateFormat = 'PPP',
  disabled = false,
  className,
  align = 'start',
  captionLayout = 'dropdown',
  closeOnSelect = true,
  useChevron = true,
  calendarProps,
}: DatePickerButtonProps) {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (date: Date | undefined) => {
    onChange?.(date);
    if (closeOnSelect) {
      setOpen(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          data-empty={!value}
          className={cn(
            'w-48 justify-between font-normal data-[empty=true]:text-muted-foreground',
            className,
          )}
        >
          {value ? format(value, dateFormat) : <span>{placeholder}</span>}
          {useChevron ? (
            <ChevronDownIcon className="size-4 opacity-50" />
          ) : (
            <CalendarIcon className="size-4 opacity-50" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto overflow-hidden p-0" align={align}>
        <Calendar
          mode="single"
          selected={value}
          onSelect={handleSelect}
          captionLayout={captionLayout}
          {...calendarProps}
        />
      </PopoverContent>
    </Popover>
  );
}

export {
  DatePicker,
  DatePickerWithPresets,
  DateRangePicker,
  DatePickerButton,
  type DatePickerProps,
  type DatePickerWithPresetsProps,
  type DateRangePickerProps,
  type DatePickerButtonProps,
  type DatePreset,
};

