/* eslint-disable react-refresh/only-export-components */
'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/badge/badge';

const inputTagWrapperVariants = cva(
  [
    'border-input dark:bg-input/30 flex min-h-8 w-full flex-wrap items-center gap-1.5 rounded-md border bg-transparent shadow-xs transition-[color,box-shadow]',
    'focus-within:border-ring focus-within:ring-ring/30 dark:focus-within:ring-ring/50 focus-within:ring-[3px]',
    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
  ],
  {
    variants: {
      size: {
        sm: 'min-h-8 px-2 py-0.5',
        default: 'min-h-9 px-2.5 py-1',
        lg: 'min-h-10 px-3 py-1',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

const inputTagInputVariants = cva(
  'placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex-1 bg-transparent outline-none disabled:cursor-not-allowed',
  {
    variants: {
      size: {
        sm: 'min-w-[80px] text-sm',
        default: 'min-w-[120px] text-base md:text-sm',
        lg: 'min-w-[140px] text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

export interface InputTagProps
  extends Omit<
      React.ComponentProps<'div'>,
      'onChange' | 'size' | 'defaultValue'
    >,
    VariantProps<typeof inputTagWrapperVariants> {
  /** Array of tag values */
  value?: string[];
  /** Callback when tags change */
  onChange?: (tags: string[]) => void;
  /** Placeholder text for the input */
  placeholder?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Maximum number of tags allowed */
  maxTags?: number;
  /** Text to show when max tags limit is reached (replaces placeholder) */
  maxTagsReachedText?: string;
  /** Allow duplicate tags */
  allowDuplicates?: boolean;
  /** Separator keys (default: ['Enter', ',']) */
  separators?: string[];
  /** Badge variant for styling tags (default: 'secondary') */
  badgeVariant?:
    | 'default'
    | 'secondary'
    | 'destructive'
    | 'success'
    | 'warning';
  /** Badge size (default: 'sm') */
  badgeSize?: 'sm' | 'default';
  /** Input element props */
  inputProps?: Omit<React.ComponentProps<'input'>, 'value' | 'onChange'>;
}

function InputTag({
  className,
  size,
  value = [],
  onChange,
  placeholder = 'Type and press Enter...',
  disabled = false,
  maxTags,
  maxTagsReachedText,
  allowDuplicates = false,
  separators = ['Enter', ','],
  badgeVariant = 'secondary',
  badgeSize = 'sm',
  inputProps,
  'aria-invalid': ariaInvalid,
  ...props
}: InputTagProps) {
  const [inputValue, setInputValue] = React.useState<string>('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const addTag = React.useCallback(
    (tag: string) => {
      if (!onChange) return;

      const trimmed = tag.trim();

      // Don't add empty tags
      if (!trimmed) return;

      // Check for duplicates
      if (!allowDuplicates && value.includes(trimmed)) return;

      // Check max tags limit
      if (maxTags && value.length >= maxTags) return;

      onChange([...value, trimmed]);
    },
    [onChange, value, allowDuplicates, maxTags],
  );

  const removeTag = React.useCallback(
    (tagToRemove: string) => {
      if (!onChange || disabled) return;
      onChange(value.filter((tag) => tag !== tagToRemove));
    },
    [onChange, value, disabled],
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Call user's onKeyDown if provided
    inputProps?.onKeyDown?.(e);

    // Handle separator keys (Enter, Comma)
    if (separators.includes(e.key)) {
      e.preventDefault();
      addTag(inputValue);
      setInputValue('');
      return;
    }

    // Handle Backspace to remove last tag
    if (e.key === 'Backspace' && !inputValue && value.length > 0) {
      e.preventDefault();
      if (!onChange || disabled) return;
      onChange(value.slice(0, -1));
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    // Call user's onPaste if provided
    inputProps?.onPaste?.(e);

    // Handle pasting multiple tags separated by commas or newlines
    const pastedText = e.clipboardData.getData('text');
    const tags = pastedText
      .split(/[,\n]+/)
      .map((tag) => tag.trim())
      .filter(Boolean);

    if (tags.length > 1) {
      e.preventDefault();
      if (!onChange) return;

      const newTags = allowDuplicates
        ? tags
        : tags.filter((tag) => !value.includes(tag));

      const tagsToAdd = maxTags
        ? newTags.slice(0, maxTags - value.length)
        : newTags;

      onChange([...value, ...tagsToAdd]);
      setInputValue('');
    }
  };

  const handleWrapperClick = () => {
    // Focus input when clicking on the wrapper
    inputRef.current?.focus();
  };

  const isMaxTagsReached = maxTags ? value.length >= maxTags : false;
  const displayPlaceholder =
    isMaxTagsReached && maxTagsReachedText ? maxTagsReachedText : placeholder;

  return (
    <div
      data-slot="input-tag-wrapper"
      aria-invalid={ariaInvalid}
      aria-disabled={disabled}
      onClick={handleWrapperClick}
      className={cn(
        inputTagWrapperVariants({ size }),
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
      {...props}
    >
      {value.map((tag, index) => {
        const removeButton = (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              removeTag(tag);
            }}
            disabled={disabled}
            aria-label={`Remove ${tag}`}
            className={cn(
              'hover:bg-background/20 rounded-sm p-0.5 transition-colors',
              'focus-visible:ring-ring focus-visible:ring-1 focus-visible:outline-none',
              disabled && 'cursor-not-allowed opacity-50',
            )}
          >
            <X className="size-3" />
          </button>
        );

        return (
          <Badge
            key={`${tag}-${index}`}
            variant={badgeVariant}
            size={badgeSize}
            shape="square"
            appearance="outline"
            data-slot="input-tag-item"
            className="gap-1 pr-1"
          >
            <span className="max-w-[200px] truncate">{tag}</span>
            {removeButton}
          </Badge>
        );
      })}

      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        disabled={disabled || isMaxTagsReached}
        placeholder={displayPlaceholder}
        data-slot="input-tag-input"
        aria-label={displayPlaceholder}
        className={cn(inputTagInputVariants({ size }))}
        {...inputProps}
      />
    </div>
  );
}

export { InputTag, inputTagWrapperVariants };
