import { Controller, useForm } from 'react-hook-form';
import { Button } from '../button/button';
import { MultiSelect, MultiSelectOption } from '../multi-select/multi-select';
import { Combobox, ComboboxItem } from '../combobox/combobox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../select/select';
import { cn } from '@/lib/utils';

export interface FilterOption {
  /** Unique identifier for the option */
  id: string;
  /** Display text for the option */
  label: string;
  /** Whether this option is pre-selected */
  selected?: boolean;
  /** Optional icon component */
  icon?: React.ComponentType<{ className?: string }>;
}

export interface FilterConfig {
  /** Unique name/key for this filter (used in form data) */
  name: string;
  /** Display label for the filter dropdown (optional) */
  label?: string;
  /** Available options for this filter */
  options: FilterOption[];
  /** Mode: 'multi' for multiple selection, 'single' for single selection (default: 'multi') */
  mode?: 'multi' | 'single';
  /** Whether to enable search functionality (default: true for multi, configurable for single) */
  searchable?: boolean;
  /** Whether to hide "Select All" option (default: false, only for multi mode) */
  hideSelectAll?: boolean;
  /** Placeholder text when no options are selected */
  placeholder?: string;
}

export interface DropdownFiltersProps {
  /** Array of filter configurations */
  filterConfigs: FilterConfig[];
  /** Callback fired when filters are applied */
  onFilterApply?: (data: Record<string, string[] | string>) => void;
  /** Literals for UI text */
  literals?: {
    /** Text for the filter header */
    filter?: string;
    /** Text for the reset button */
    reset?: string;
    /** Text for the apply button */
    apply?: string;
  };
  /** Hide the header with filter title and reset button */
  hideHeader?: boolean;
  /** Additional CSS class for the form container */
  className?: string;
  /** Disable all filter interactions */
  disabled?: boolean;

  /** Grid columns for responsive layout */
  gridCols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

/**
 * DropdownFilters - A flexible filtering system using multi-select dropdowns
 *
 * Perfect for fleet management, robot selection, and complex data filtering scenarios.
 *
 * @example
 * ```tsx
 * const filterConfigs = [
 *   {
 *     name: 'robotType',
 *     label: 'Robot Type',
 *     options: [
 *       { id: 'maira', label: 'MAiRA', icon: Bot },
 *       { id: 'lara', label: 'LARA', icon: Bot },
 *     ],
 *   },
 * ];
 *
 * <DropdownFilters
 *   filterConfigs={filterConfigs}
 *   onFilterApply={(data) => console.log(data)}
 * />
 * ```
 */
export const DropdownFilters = ({
  filterConfigs,
  onFilterApply,
  literals = { filter: 'Filter', reset: 'Reset', apply: 'Apply' },
  hideHeader = false,
  className,
  disabled = false,
  gridCols,
}: DropdownFiltersProps) => {
  // Build default values from pre-selected options
  const defaultValues = Object.fromEntries(
    filterConfigs.map(({ name, options, mode = 'multi' }) => {
      const selected = options.filter((opt) => opt.selected);
      if (mode === 'single') {
        return [name, selected.length > 0 ? selected[0].id : ''];
      }
      return [name, selected.map((opt) => opt.id)];
    }),
  ) as Record<string, string[] | string>;

  const { control, handleSubmit, reset } = useForm<
    Record<string, string[] | string>
  >({
    defaultValues,
  });

  const onSubmit = (data: Record<string, string[] | string>) => {
    onFilterApply?.(data);
  };

  const handleReset = () => {
    // Reset to empty values for all filters
    const emptyValues = Object.fromEntries(
      filterConfigs.map(({ name, mode = 'multi' }) => [
        name,
        mode === 'single' ? '' : [],
      ]),
    ) as Record<string, string[] | string>;

    reset(emptyValues);
    onSubmit(emptyValues);
  };

  // Convert FilterOption[] to MultiSelectOption[]
  const convertToMultiSelectOptions = (
    options: FilterOption[],
  ): MultiSelectOption[] => {
    return options.map((opt) => ({
      label: opt.label,
      value: opt.id,
      icon: opt.icon,
    }));
  };

  // Convert FilterOption[] to ComboboxItem[]
  const convertToComboboxItems = (options: FilterOption[]): ComboboxItem[] => {
    return options.map((opt) => ({
      label: opt.label,
      value: opt.id,
    }));
  };

  // Build responsive grid classes
  const getGridClasses = () => {
    const cols = gridCols || { default: filterConfigs.length };
    const classes: string[] = ['flex-1', 'grid', 'gap-4'];

    if (cols.default) classes.push(`grid-cols-${cols.default}`);
    if (cols.sm) classes.push(`sm:grid-cols-${cols.sm}`);
    if (cols.md) classes.push(`md:grid-cols-${cols.md}`);
    if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`);
    if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`);

    return classes.join(' ');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('w-full space-y-4', className)}
    >
      {!hideHeader && (
        <div className="flex w-full items-center justify-between">
          <span className="text-lg font-bold">{literals.filter}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            disabled={disabled}
            type="button"
          >
            {literals.reset}
          </Button>
        </div>
      )}

      <div className="flex w-full items-end gap-4">
        <div className={getGridClasses()}>
          {filterConfigs.map(
            ({
              name,
              label,
              options,
              mode = 'multi',
              searchable = true,
              hideSelectAll = false,
              placeholder,
            }) => {
              return (
                <Controller
                  key={name}
                  control={control}
                  name={name}
                  render={({ field }) => (
                    <div className="flex flex-col gap-2">
                      {label ? (
                        <label
                          htmlFor={`filter-${name}`}
                          className="text-sm font-medium"
                        >
                          {label}
                        </label>
                      ) : (
                        <div className="h-5" aria-hidden="true" />
                      )}

                      {/* Multi-select mode: always uses MultiSelect with search */}
                      {mode === 'multi' && (
                        <MultiSelect
                          options={convertToMultiSelectOptions(options)}
                          defaultValue={field.value as string[]}
                          onValueChange={field.onChange}
                          placeholder={placeholder}
                          searchable={searchable}
                          hideSelectAll={hideSelectAll}
                          disabled={disabled}
                          singleLine={true}
                          maxCount={2}
                          className="w-full"
                        />
                      )}

                      {/* Single mode + searchable: uses Combobox */}
                      {mode === 'single' && searchable && (
                        <Combobox
                          items={convertToComboboxItems(options)}
                          value={field.value as string}
                          onValueChange={field.onChange}
                          placeholder={placeholder}
                          disabled={disabled}
                          className="w-full"
                        />
                      )}

                      {/* Single mode + not searchable: uses Select */}
                      {mode === 'single' && !searchable && (
                        <Select
                          value={field.value as string}
                          onValueChange={field.onChange}
                          disabled={disabled}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder={placeholder} />
                          </SelectTrigger>
                          <SelectContent>
                            {options.map((opt) => (
                              <SelectItem key={opt.id} value={opt.id}>
                                {opt.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    </div>
                  )}
                />
              );
            },
          )}
        </div>
        <Button type="submit" disabled={disabled}>
          {literals.apply}
        </Button>
      </div>
    </form>
  );
};
