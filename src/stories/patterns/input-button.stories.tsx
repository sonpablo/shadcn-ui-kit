import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Input } from '@/components/input/input';
import { Button } from '@/components/button/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select/select';
import { MultiSelect } from '@/components/multi-select/multi-select';
import { DatePicker } from '@/components/date-picker/date-picker';

const meta: Meta = {
  title: 'Patterns/Form Components Sizes',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

const MatchBadge = () => (
  <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
    Match
  </span>
);

/**
 * Visual comparison of all form components with their respective Button sizes.
 *
 * This story helps identify which components have matching heights.
 *
 * Size reference:
 * - sm: h-8 (32px)
 * - default: h-9 (36px)
 * - lg: h-10 (40px)
 */
export const SizeComparison: Story = {
  render: function SizeComparisonStory() {
    const [multiSelectValue, setMultiSelectValue] = useState<string[]>([]);

    const multiSelectOptions = [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue' },
    ];

    return (
      <div className="space-y-10">
        {/* Size reference */}
        <div className="bg-muted/50 rounded-lg p-4">
          <p className="mb-2 text-sm font-medium">Size Reference:</p>
          <div className="text-muted-foreground flex gap-6 text-sm">
            <span>
              <code className="bg-muted rounded px-1">sm</code> = h-8 (32px)
            </span>
            <span>
              <code className="bg-muted rounded px-1">default</code> = h-9
              (36px)
            </span>
            <span>
              <code className="bg-muted rounded px-1">lg</code> = h-10 (40px)
            </span>
          </div>
        </div>

        {/* ============================================
            INPUT
        ============================================ */}
        <div className="space-y-4">
          <h3 className="border-b pb-2 text-lg font-semibold">Input</h3>

          {/* Input sm */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MatchBadge />
              <span className="text-muted-foreground text-sm">
                Input sm (h-8) + Button sm (h-8)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Input size="sm" placeholder="Input sm" className="w-48" />
              <Button size="sm">Button sm</Button>
            </div>
          </div>

          {/* Input default */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MatchBadge />
              <span className="text-muted-foreground text-sm">
                Input default (h-9) + Button default (h-9)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Input placeholder="Input default" className="w-48" />
              <Button>Button default</Button>
            </div>
          </div>

          {/* Input lg */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MatchBadge />
              <span className="text-muted-foreground text-sm">
                Input lg (h-10) + Button lg (h-10)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Input size="lg" placeholder="Input lg" className="w-48" />
              <Button size="lg">Button lg</Button>
            </div>
          </div>
        </div>

        {/* ============================================
            SELECT
        ============================================ */}
        <div className="space-y-4">
          <h3 className="border-b pb-2 text-lg font-semibold">Select</h3>

          {/* Select sm */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MatchBadge />
              <span className="text-muted-foreground text-sm">
                Select sm (h-8) + Button sm (h-8)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Select>
                <SelectTrigger size="sm" className="w-48">
                  <SelectValue placeholder="Select sm" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Option 1</SelectItem>
                  <SelectItem value="2">Option 2</SelectItem>
                </SelectContent>
              </Select>
              <Button size="sm">Button sm</Button>
            </div>
          </div>

          {/* Select default */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MatchBadge />
              <span className="text-muted-foreground text-sm">
                Select default (h-9) + Button default (h-9)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select default" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Option 1</SelectItem>
                  <SelectItem value="2">Option 2</SelectItem>
                </SelectContent>
              </Select>
              <Button>Button default</Button>
            </div>
          </div>

          {/* Select lg */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MatchBadge />
              <span className="text-muted-foreground text-sm">
                Select lg (h-10) + Button lg (h-10)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Select>
                <SelectTrigger size="lg" className="w-48">
                  <SelectValue placeholder="Select lg" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Option 1</SelectItem>
                  <SelectItem value="2">Option 2</SelectItem>
                </SelectContent>
              </Select>
              <Button size="lg">Button lg</Button>
            </div>
          </div>
        </div>

        {/* ============================================
            MULTISELECT
        ============================================ */}
        <div className="space-y-4">
          <h3 className="border-b pb-2 text-lg font-semibold">MultiSelect</h3>

          {/* MultiSelect sm */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MatchBadge />
              <span className="text-muted-foreground text-sm">
                MultiSelect sm (h-8) + Button sm (h-8)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MultiSelect
                size="sm"
                options={multiSelectOptions}
                onValueChange={setMultiSelectValue}
                defaultValue={multiSelectValue}
                placeholder="MultiSelect sm"
                className="w-48"
              />
              <Button size="sm">Button sm</Button>
            </div>
          </div>

          {/* MultiSelect default */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MatchBadge />
              <span className="text-muted-foreground text-sm">
                MultiSelect default (h-9) + Button default (h-9)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MultiSelect
                options={multiSelectOptions}
                onValueChange={setMultiSelectValue}
                defaultValue={multiSelectValue}
                placeholder="MultiSelect default"
                className="w-48"
              />
              <Button>Button default</Button>
            </div>
          </div>

          {/* MultiSelect lg */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MatchBadge />
              <span className="text-muted-foreground text-sm">
                MultiSelect lg (h-10) + Button lg (h-10)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MultiSelect
                size="lg"
                options={multiSelectOptions}
                onValueChange={setMultiSelectValue}
                defaultValue={multiSelectValue}
                placeholder="MultiSelect lg"
                className="w-48"
              />
              <Button size="lg">Button lg</Button>
            </div>
          </div>
        </div>

        {/* ============================================
            DATEPICKER
        ============================================ */}
        <div className="space-y-4">
          <h3 className="border-b pb-2 text-lg font-semibold">DatePicker</h3>

          {/* DatePicker sm */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MatchBadge />
              <span className="text-muted-foreground text-sm">
                DatePicker sm (h-8) + Button sm (h-8)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <DatePicker size="sm" placeholder="DatePicker sm" />
              <Button size="sm">Button sm</Button>
            </div>
          </div>

          {/* DatePicker default */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MatchBadge />
              <span className="text-muted-foreground text-sm">
                DatePicker default (h-9) + Button default (h-9)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <DatePicker placeholder="DatePicker default" />
              <Button>Button default</Button>
            </div>
          </div>

          {/* DatePicker lg */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MatchBadge />
              <span className="text-muted-foreground text-sm">
                DatePicker lg (h-10) + Button lg (h-10)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <DatePicker size="lg" placeholder="DatePicker lg" />
              <Button size="lg">Button lg</Button>
            </div>
          </div>
        </div>

        {/* ============================================
            SUMMARY
        ============================================ */}
        <div className="bg-muted/30 rounded-lg border p-4">
          <p className="mb-3 text-sm font-medium">Summary</p>
          <div className="grid gap-2 text-sm sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <span className="font-medium">Input:</span>
              <span className="text-muted-foreground">sm, default, lg ✓</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Select:</span>
              <span className="text-muted-foreground">sm, default, lg ✓</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">MultiSelect:</span>
              <span className="text-muted-foreground">sm, default, lg ✓</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">DatePicker:</span>
              <span className="text-muted-foreground">sm, default, lg ✓</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Button:</span>
              <span className="text-muted-foreground">sm, default, lg ✓</span>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
