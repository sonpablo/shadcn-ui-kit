'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/button/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/command/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/popover/popover';

export interface ComboboxItem {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ComboboxProps {
  items: ComboboxItem[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  className?: string;
  disabled?: boolean;
  size?: 'sm' | 'default' | 'lg';
  'aria-invalid'?: boolean;
}

export function Combobox({
  items,
  value,
  onValueChange,
  placeholder = 'Select an option...',
  searchPlaceholder = 'Search...',
  emptyMessage = 'No results found.',
  className,
  disabled = false,
  size = 'default',
  'aria-invalid': ariaInvalid,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState('');

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const handleValueChange = (newValue: string) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  const selectedItem = items.find((item) => item.value === currentValue);

  const sizeClasses = {
    sm: 'h-8 px-2.5',
    default: 'h-9 px-3',
    lg: 'h-10 px-3.5',
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-invalid={ariaInvalid}
          disabled={disabled}
          className={cn(
            'focus-visible:border-ring! focus-visible:ring-ring/30! dark:focus-visible:ring-ring/50! w-full justify-between bg-transparent focus-visible:ring-[3px]!',
            sizeClasses[size],
            !currentValue && 'text-muted-foreground',
            className,
          )}
        >
          <span className="truncate">{selectedItem?.label ?? placeholder}</span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-(--radix-popover-trigger-width) p-0">
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                  onSelect={(selectedValue) => {
                    const newValue =
                      selectedValue === currentValue ? '' : selectedValue;
                    handleValueChange(newValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      currentValue === item.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
