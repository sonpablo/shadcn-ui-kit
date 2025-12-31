import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Bot, Cpu, Navigation, Wrench, Camera, Gauge, Zap } from 'lucide-react';
import { MultiSelect } from './multi-select';

const meta = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A feature-rich, highly customizable multi-select component built with Radix UI primitives and shadcn/ui design patterns.

## 🎯 Key Features

### Core Functionality
- 🔍 **Searchable** - Real-time filtering with customizable search behavior
- 📁 **Grouped Options** - Organize options into logical categories with separators
- 🎨 **Custom Icons** - Add icons from lucide-react or custom icon libraries
- ✨ **Animations** - Six animation presets (bounce, pulse, wiggle, fade, slide, none)
- 🎯 **Variants** - Four visual styles (default, secondary, destructive, inverted)

### Advanced Features
- 📱 **Responsive** - Built-in responsive behavior with custom breakpoints
- ♿ **Accessible** - WCAG compliant with keyboard navigation
- 🎭 **Custom Styling** - Badge colors, gradients, and icon colors per option
- 🚫 **Disabled States** - Component-level and option-level disable
- 📊 **Smart Layout** - Single-line horizontal scroll or multi-line wrap
- 🔢 **Badge Limiting** - Show maximum badges with "+N more" summary

## 📖 Quick Start

\`\`\`tsx
import { MultiSelect } from '@neura/shadcn-ui-kit';
import { useState } from 'react';

const options = [
  { label: 'MAiRA-001', value: 'maira-001' },
  { label: 'LARA-001', value: 'lara-001' },
  { label: '4NE1-001', value: '4ne1-001' },
];

function MyComponent() {
  const [selected, setSelected] = useState<string[]>([]);
  
  return (
    <MultiSelect
      options={options}
      onValueChange={setSelected}
      placeholder="Select robots"
    />
  );
}
\`\`\`

## 🎨 Grouped Options

\`\`\`tsx
const fleetOptions = [
  {
    heading: 'Munich Plant A',
    options: [
      { label: 'MAiRA-001', value: 'maira-001' },
      { label: 'MAiRA-002', value: 'maira-002' },
    ],
  },
  {
    heading: 'Stuttgart Factory',
    options: [
      { label: 'LARA-003', value: 'lara-003' },
      { label: '4NE1-002', value: '4ne1-002' },
    ],
  },
];

<MultiSelect 
  options={fleetOptions} 
  onValueChange={setSelected}
/>
\`\`\`

## 🎭 Custom Styling

\`\`\`tsx
const customOptions = [
  {
    label: 'MAiRA-001',
    value: 'maira-001',
    icon: Bot,
    style: {
      badgeColor: '#3b82f6',
      gradient: 'from-blue-500 to-blue-600',
    },
  },
];
\`\`\`

## ✨ Animations

\`\`\`tsx
<MultiSelect
  options={options}
  onValueChange={setSelected}
  animationConfig={{
    badgeAnimation: 'bounce',
    popoverAnimation: 'scale',
    optionHoverAnimation: 'highlight',
    duration: 0.3,
  }}
/>
\`\`\`

## 📱 Responsive Behavior

\`\`\`tsx
<MultiSelect
  options={options}
  onValueChange={setSelected}
  responsive={{
    mobile: { maxCount: 1, compactMode: true },
    tablet: { maxCount: 2 },
    desktop: { maxCount: 4 },
  }}
/>
\`\`\`

## 💡 Best Practices

- ✅ Always provide \`onValueChange\` callback for controlled state
- ✅ Use \`searchable={false}\` for small option sets (<10 items)
- ✅ Set appropriate \`maxCount\` to prevent UI overflow
- ✅ Provide meaningful labels and descriptions
- ✅ Test with various data sizes and screen widths
- ✅ Use grouped options for better organization (>15 items)
- ✅ Consider \`closeOnSelect\` for single-selection-like behavior

## 🚀 Performance Tips

- Memoize your options array to prevent re-renders
- Use \`deduplicateOptions\` for large datasets with potential duplicates
- Enable responsive mode for mobile-optimized layouts
- Leverage custom empty states for better UX

---

**Need help?** Check the **Props Reference** story for complete API documentation.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'inverted'],
      description: 'Visual style variant',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no items selected',
    },
    maxCount: {
      control: 'number',
      description: 'Maximum number of badges to show before "+N more"',
    },
    searchable: {
      control: 'boolean',
      description: 'Enable/disable search functionality',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the entire component',
    },
    singleLine: {
      control: 'boolean',
      description: 'Show badges in a single scrollable line',
    },
    hideSelectAll: {
      control: 'boolean',
      description: 'Hide the "Select All" option',
    },
  },
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data - NEURA Robot Fleet Management Context
const robotOptions = [
  { label: 'MAiRA-001', value: 'maira-001' },
  { label: 'MAiRA-002', value: 'maira-002' },
  { label: 'LARA-001', value: 'lara-001' },
  { label: 'LARA-003', value: 'lara-003' },
  { label: 'MAV-001', value: 'mav-001' },
  { label: 'MiPA-001', value: 'mipa-001' },
  { label: '4NE1-001', value: '4ne1-001' },
  { label: '4NE1-002', value: '4ne1-002' },
];

const capabilityOptions = [
  { label: 'Vision System', value: 'vision', icon: Camera },
  { label: 'Force/Torque Sensor', value: 'force', icon: Gauge },
  { label: 'Navigation', value: 'navigation', icon: Navigation },
  { label: 'Maintenance', value: 'maintenance', icon: Wrench },
  { label: 'Power Management', value: 'power', icon: Zap },
];

const fleetOptions = [
  {
    heading: 'Munich Plant A',
    options: [
      { label: 'MAiRA-001', value: 'maira-001' },
      { label: 'MAiRA-002', value: 'maira-002' },
      { label: 'LARA-001', value: 'lara-001' },
    ],
  },
  {
    heading: 'Stuttgart Factory',
    options: [
      { label: 'LARA-003', value: 'lara-003' },
      { label: '4NE1-001', value: '4ne1-001' },
      { label: '4NE1-002', value: '4ne1-002' },
    ],
  },
  {
    heading: 'Berlin Warehouse',
    options: [
      { label: 'MAV-001', value: 'mav-001' },
      { label: 'MiPA-001', value: 'mipa-001' },
    ],
  },
];

const robotStatusOptions = [
  { label: 'MAiRA-001 (Active)', value: 'maira-001' },
  { label: 'MAiRA-002 (Active)', value: 'maira-002' },
  { label: 'LARA-003 (Maintenance)', value: 'lara-003', disabled: true },
  { label: '4NE1-001 (Active)', value: '4ne1-001' },
  { label: 'MAV-001 (Offline)', value: 'mav-001', disabled: true },
];

// Standard literals for consistent i18n across stories
const standardLiterals = {
  searchPlaceholder: 'Search robots...',
  searchAriaLabel: 'Search through robot options',
  emptyMessage: 'No robots found.',
  clearAllAriaLabel: 'Clear all selected robots',
  selectAllAriaLabel: 'Select all robots',
  selectAllText: 'Select All',
  clearButtonText: 'Clear',
  closeButtonText: 'Close',
};

// Wrapper component for controlled state
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MultiSelectWrapper = (props: any) => {
  const [, setSelected] = useState<string[]>(props.defaultValue || []);
  return <MultiSelect {...props} onValueChange={setSelected} />;
};

/**
 * ## Basic Multi-Select
 *
 * The simplest implementation with an array of options. Perfect for straightforward
 * selection scenarios like choosing robots, projects, or fleets.
 *
 * **When to use:**
 * - Simple lists without categorization
 * - Quick selections with < 15 items
 * - Forms with standard dropdown needs
 */
export const Default: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: robotOptions,
    placeholder: 'Select robots',
    defaultValue: ['maira-001'],
    onValueChange: () => {},
    literals: standardLiterals,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Basic usage with an array of simple options. The component handles search, keyboard navigation, and selection state automatically.',
      },
    },
  },
};

/**
 * ## Sizes
 *
 * Three size variants to match other form components (Input, Button, Select).
 *
 * **Size Reference:**
 * - sm: h-8 (32px) - Compact interfaces, toolbars, filters
 * - default: h-9 (36px) - Standard forms
 * - lg: h-10 (40px) - Landing pages, emphasis
 */
export const Sizes: Story = {
  render: function SizesExample() {
    const [selected1, setSelected1] = useState<string[]>([]);
    const [selected2, setSelected2] = useState<string[]>([]);
    const [selected3, setSelected3] = useState<string[]>([]);
    const options = [
      { label: 'Atlas-01', value: 'atlas-01' },
      { label: 'Titan-X1', value: 'titan-x1' },
      { label: 'Scout-A', value: 'scout-a' },
    ];

    return (
      <div className="flex w-[300px] flex-col gap-4">
        <div className="space-y-2">
          <label className="text-muted-foreground text-xs">
            Size: sm (h-8 / 32px)
          </label>
          <MultiSelect
            size="sm"
            options={options}
            onValueChange={setSelected1}
            defaultValue={selected1}
            placeholder="Select robots"
          />
        </div>
        <div className="space-y-2">
          <label className="text-muted-foreground text-xs">
            Size: default (h-9 / 36px)
          </label>
          <MultiSelect
            options={options}
            onValueChange={setSelected2}
            defaultValue={selected2}
            placeholder="Select robots"
          />
        </div>
        <div className="space-y-2">
          <label className="text-muted-foreground text-xs">
            Size: lg (h-10 / 40px)
          </label>
          <MultiSelect
            size="lg"
            options={options}
            onValueChange={setSelected3}
            defaultValue={selected3}
            placeholder="Select robots"
          />
        </div>
      </div>
    );
  },
  args: {
    options: robotOptions,
    onValueChange: () => {},
  },
  parameters: {
    docs: {
      description: {
        story:
          'Size variants that match Button, Input, Select, and DatePicker components. Use sm for compact UIs, default for standard forms, and lg for emphasis.',
      },
    },
  },
};

/**
 * ## Grouped Options
 *
 * Organize large option sets into logical categories with visual separators.
 * Essential for complex selections with multiple fleets or locations.
 *
 * **Benefits:**
 * - Improved scanability for users
 * - Logical organization of related items
 * - Visual hierarchy with group headings
 * - Search works across all groups
 */
export const Grouped: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: fleetOptions,
    placeholder: 'Select robots by fleet',
    defaultValue: ['maira-001', 'lara-001'],
    onValueChange: () => {},
    literals: standardLiterals,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Robots organized by warehouse/fleet location. Groups are preserved during search and maintain visual separation.',
      },
    },
  },
};

/**
 * ## With Icons
 *
 * Enhance options with visual icons from lucide-react or custom icon libraries.
 * Icons improve recognition and add visual interest.
 *
 * **Icon Guidelines:**
 * - Use consistent icon style (outline vs filled)
 * - Ensure icons are semantically meaningful
 * - Keep icon size consistent (recommended: size-4)
 * - Icons automatically inherit text color
 */
export const WithIcons: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: capabilityOptions,
    placeholder: 'Select capabilities',
    defaultValue: ['navigation', 'camera'],
    onValueChange: () => {},
    literals: {
      ...standardLiterals,
      searchPlaceholder: 'Search capabilities...',
      emptyMessage: 'No capabilities found.',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Each option includes an icon component. Icons are rendered automatically and styled to match the theme.',
      },
    },
  },
};

/**
 * ## Destructive Variant
 *
 * High-contrast red styling for critical actions and error states.
 * Draws immediate attention to dangerous or irreversible operations.
 *
 * **Use cases:**
 * - Delete confirmations
 * - Error state selections
 * - Critical data removal
 * - Warning-level actions
 *
 * **⚠️ Important:** Use sparingly to maintain its attention-grabbing power.
 */
export const Destructive: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: robotOptions,
    placeholder: 'Select robots to decommission',
    variant: 'destructive',
    defaultValue: ['4ne1-002'],
    onValueChange: () => {},
    literals: standardLiterals,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Destructive variant with red color scheme. Reserve for delete actions and error states.',
      },
    },
  },
};

/**
 * Multi-select with badge animations on hover
 */
export const WithAnimations: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: robotOptions,
    placeholder: 'Hover badges to see animation',
    defaultValue: ['maira-001', 'lara-001', '4ne1-001'],
    animationConfig: {
      badgeAnimation: 'bounce',
      popoverAnimation: 'scale',
      optionHoverAnimation: 'highlight',
      duration: 0.3,
    },
    onValueChange: () => {},
    literals: standardLiterals,
  },
};

/**
 * Limit visible badges with maxCount
 */
export const MaxCount: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: robotOptions,
    placeholder: 'Select robots',
    maxCount: 2,
    defaultValue: ['maira-001', 'maira-002', 'lara-001', 'lara-003'],
    onValueChange: () => {},
    literals: standardLiterals,
  },
};

/**
 * Single line layout with horizontal scroll
 */
export const SingleLine: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: robotOptions,
    placeholder: 'Select robots',
    singleLine: true,
    defaultValue: ['maira-001', 'maira-002', 'lara-001', 'lara-003', 'mav-001'],
    onValueChange: () => {},
    literals: standardLiterals,
  },
};

/**
 * Multi-select with disabled state
 */
export const Disabled: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: robotOptions,
    placeholder: 'Disabled select',
    disabled: true,
    defaultValue: ['maira-001', 'maira-002'],
    onValueChange: () => {},
    literals: standardLiterals,
  },
};

/**
 * Multi-select with some options disabled
 */
export const DisabledOptions: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: robotStatusOptions,
    placeholder: 'Some robots are offline',
    defaultValue: ['maira-001'],
    onValueChange: () => {},
    literals: standardLiterals,
  },
};

/**
 * ## Without Search
 *
 * Multi-select without search functionality. Best for small option sets (< 10 items).
 * Notice that search-related literals are omitted since they're not needed.
 */
export const NoSearch: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: robotOptions.slice(0, 4), // Fewer options when search is disabled
    placeholder: 'Select (no search)',
    searchable: false,
    defaultValue: ['maira-001'],
    onValueChange: () => {},
    literals: {
      // No searchPlaceholder or searchAriaLabel needed
      emptyMessage: 'No robots found.',
      clearAllAriaLabel: 'Clear all selected robots',
      selectAllAriaLabel: 'Select all robots',
      selectAllText: 'Select All',
      clearButtonText: 'Clear',
      closeButtonText: 'Close',
    },
  },
};

/**
 * ## Without Select All
 *
 * Multi-select without "Select All" functionality. Useful when you want users to deliberately
 * select each option individually. Notice that select-all-related literals are omitted.
 */
export const NoSelectAll: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: robotOptions,
    placeholder: 'No select all option',
    hideSelectAll: true,
    onValueChange: () => {},
    literals: {
      searchPlaceholder: 'Search robots...',
      searchAriaLabel: 'Search through robot options',
      emptyMessage: 'No robots found.',
      clearAllAriaLabel: 'Clear all selected robots',
      // No selectAllAriaLabel or selectAllText needed
      clearButtonText: 'Clear',
      closeButtonText: 'Close',
    },
  },
};

/**
 * ## Without Literals (Icon-Only)
 *
 * Multi-select with NO literals provided. This demonstrates the minimal i18n mode where
 * the component renders without any text labels - only icons and visual indicators.
 *
 * **When to use:**
 * - Icon-only interfaces
 * - When you need complete control over accessibility via custom ARIA attributes
 * - Minimalist designs where text is not desired
 *
 * **Note:** Without literals, search input, empty state, select all, and footer buttons
 * will not render or will render without text. Only the core selection UI remains.
 */
export const WithoutLiterals: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: robotOptions,
    placeholder: 'Select robots',
    defaultValue: ['maira-001', 'maira-002'],
    onValueChange: () => {},
    // No literals provided - completely minimal
  },
  parameters: {
    docs: {
      description: {
        story:
          'No literals are provided. The search input, empty state, select all, and footer buttons will not render. This is the most minimal mode, ideal for icon-only interfaces or when you need full control over i18n.',
      },
    },
  },
};

/**
 * Responsive behavior with different maxCount per screen size
 */
export const Responsive: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: robotOptions,
    placeholder: 'Resize window to see changes',
    defaultValue: [
      'maira-001',
      'maira-002',
      'lara-001',
      'lara-003',
      'mav-001',
      'mipa-001',
    ],
    responsive: {
      mobile: {
        maxCount: 1,
        compactMode: true,
      },
      tablet: {
        maxCount: 2,
      },
      desktop: {
        maxCount: 4,
      },
    },
    onValueChange: () => {},
    literals: standardLiterals,
  },
};

/**
 * ## Custom Empty State
 *
 * Customize the empty state message when no options match the search.
 * You can provide custom React nodes with any styling you want.
 */
export const CustomEmptyState: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: robotOptions,
    placeholder: 'Search for robots',
    literals: {
      ...standardLiterals,
      emptyMessage: (
        <div className="text-muted-foreground py-6 text-center">
          <p className="text-sm">No robot found</p>
          <p className="mt-1 text-xs">Try a different search term</p>
        </div>
      ),
    },
    onValueChange: () => {},
  },
};

/**
 * Inverted variant for dark backgrounds
 */
export const Inverted: Story = {
  render: (args) => (
    <div className="rounded-lg bg-slate-900 p-8">
      <MultiSelectWrapper {...args} />
    </div>
  ),
  args: {
    options: robotOptions,
    placeholder: 'Perfect for dark themes',
    variant: 'inverted',
    defaultValue: ['maira-001', 'maira-002'],
    onValueChange: () => {},
    literals: standardLiterals,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/**
 * Custom styled options with colors and gradients
 */
export const CustomStyling: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: [
      {
        label: 'MAiRA',
        value: 'maira',
        icon: Bot,
        style: { badgeColor: '#3b82f6', gradient: 'from-blue-500 to-blue-600' },
      },
      {
        label: 'LARA',
        value: 'lara',
        icon: Cpu,
        style: {
          badgeColor: '#10b981',
          gradient: 'from-green-500 to-green-600',
        },
      },
      {
        label: 'MAV',
        value: 'mav',
        icon: Navigation,
        style: {
          badgeColor: '#8b5cf6',
          gradient: 'from-purple-500 to-purple-600',
        },
      },
      {
        label: '4NE1',
        value: '4ne1',
        icon: Camera,
        style: {
          badgeColor: '#f59e0b',
          gradient: 'from-amber-500 to-amber-600',
        },
      },
    ],
    placeholder: 'Select robot model',
    defaultValue: ['maira', 'lara'],
    onValueChange: () => {},
    literals: standardLiterals,
  },
};

/**
 * All badge animations side by side for comparison
 */
const AllAnimationsComponent = () => {
  const animations: Array<
    'bounce' | 'pulse' | 'wiggle' | 'fade' | 'slide' | 'none'
  > = ['bounce', 'pulse', 'wiggle', 'fade', 'slide', 'none'];

  return (
    <div className="space-y-6">
      <div className="text-muted-foreground text-sm">
        Hover over badges to see each animation effect
      </div>
      {animations.map((animation) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [, setSelected] = useState<string[]>(['atlas-01', 'atlas-02']);
        return (
          <div key={animation} className="space-y-2">
            <div className="text-muted-foreground text-xs font-medium uppercase">
              {animation} Animation
            </div>
            <MultiSelect
              options={robotOptions}
              onValueChange={setSelected}
              placeholder={`${animation} animation`}
              defaultValue={['atlas-01', 'atlas-02']}
              animationConfig={{
                badgeAnimation: animation,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export const AllAnimations = {
  render: () => <AllAnimationsComponent />,
  parameters: {
    layout: 'padded',
  },
};

/**
 * ## Layout Comparison: Single Line vs Multi Line
 *
 * This story demonstrates the key difference between `singleLine={true}` and `singleLine={false}`.
 * Both have many badges selected to show the overflow behavior.
 */
const LayoutComparisonComponent = () => {
  const manySelectedBadges = [
    'maira-001',
    'maira-002',
    'lara-001',
    'lara-003',
    'mav-001',
    'mipa-001',
    '4ne1-001',
    '4ne1-002',
  ];

  const [singleLineSelected, setSingleLineSelected] =
    useState<string[]>(manySelectedBadges);
  const [multiLineSelected, setMultiLineSelected] =
    useState<string[]>(manySelectedBadges);

  return (
    <div className="space-y-8">
      <div className="w-[400px]">
        <div className="mb-2 text-sm font-medium">
          Single Line (horizontal scroll)
        </div>
        <div className="text-muted-foreground mb-3 text-xs">
          Badges remain on ONE line and scroll horizontally. Height is fixed.
        </div>
        <MultiSelect
          options={robotOptions}
          onValueChange={setSingleLineSelected}
          placeholder="Single line layout"
          singleLine={true}
          defaultValue={singleLineSelected}
          literals={standardLiterals}
        />
      </div>

      <div className="w-[400px]">
        <div className="mb-2 text-sm font-medium">Multi Line (default)</div>
        <div className="text-muted-foreground mb-3 text-xs">
          Badges wrap to MULTIPLE lines. Height grows automatically.
        </div>
        <MultiSelect
          options={robotOptions}
          onValueChange={setMultiLineSelected}
          placeholder="Multi line layout"
          singleLine={false}
          defaultValue={multiLineSelected}
          literals={standardLiterals}
        />
      </div>
    </div>
  );
};

export const LayoutComparison = {
  render: () => <LayoutComparisonComponent />,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story:
          'Clear comparison between single-line (horizontal scroll, fixed height) and multi-line (wrapping badges, growing height). Both have 8 badges selected to demonstrate the overflow behavior.',
      },
    },
  },
};

/**
 * All variants side by side for comparison
 */
export const VariantsShowcase = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="text-sm font-medium">Default</div>
        <div className="text-muted-foreground mb-2 text-xs">
          Perfect for main actions and primary selections
        </div>
        <MultiSelectWrapper
          options={robotOptions}
          placeholder="Default variant"
          variant="default"
          defaultValue={['atlas-01', 'atlas-02']}
        />
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium">Secondary</div>
        <div className="text-muted-foreground mb-2 text-xs">
          Great for secondary actions and supplementary data
        </div>
        <MultiSelectWrapper
          options={robotOptions}
          placeholder="Secondary variant"
          variant="secondary"
          defaultValue={['titan-x1', 'titan-x2']}
        />
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium">Destructive</div>
        <div className="text-muted-foreground mb-2 text-xs">
          Use for critical actions and error states
        </div>
        <MultiSelectWrapper
          options={robotOptions}
          placeholder="Destructive variant"
          variant="destructive"
          defaultValue={['sentinel-7']}
        />
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium">Inverted</div>
        <div className="text-muted-foreground mb-2 text-xs">
          Perfect for dark backgrounds and emphasis
        </div>
        <div className="rounded-lg bg-slate-900 p-4">
          <MultiSelectWrapper
            options={robotOptions}
            placeholder="Inverted variant"
            variant="inverted"
            defaultValue={['scout-a', 'scout-b']}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

/**
 * Props documentation table
 */
export const PropsReference = {
  render: () => (
    <div className="max-w-4xl space-y-8 text-sm">
      <div>
        <h2 className="mb-2 text-2xl font-bold">Props Reference Guide</h2>
        <p className="text-muted-foreground">
          Complete documentation of all MultiSelect component properties
        </p>
      </div>

      {/* Core Props */}
      <div>
        <h3 className="mb-3 text-lg font-semibold">Core Properties</h3>
        <div className="divide-y rounded-lg border">
          <PropRow
            name="options"
            type="MultiSelectOption[] | MultiSelectGroup[]"
            required
            defaultValue="-"
            description="Array of options or grouped options to display"
          />
          <PropRow
            name="onValueChange"
            type="(value: string[]) => void"
            required
            defaultValue="-"
            description="Callback function triggered when selected values change"
          />
          <PropRow
            name="defaultValue"
            type="string[]"
            defaultValue="[]"
            description="Initial selected values when component mounts"
          />
          <PropRow
            name="placeholder"
            type="string"
            defaultValue='"Select options"'
            description="Placeholder text displayed when no values selected"
          />
        </div>
      </div>

      {/* Appearance Props */}
      <div>
        <h3 className="mb-3 text-lg font-semibold">Appearance & Styling</h3>
        <div className="divide-y rounded-lg border">
          <PropRow
            name="variant"
            type='"default" | "secondary" | "destructive" | "inverted"'
            defaultValue='"default"'
            description="Visual style variant of the component"
          />
          <PropRow
            name="maxCount"
            type="number"
            defaultValue="3"
            description='Maximum badges to show before "+N more" summary'
          />
          <PropRow
            name="autoSize"
            type="boolean"
            defaultValue="false"
            description="Allow component to grow and shrink with content"
          />
          <PropRow
            name="singleLine"
            type="boolean"
            defaultValue="false"
            description="Show badges in single line with horizontal scroll"
          />
        </div>
      </div>

      {/* Behavior Props */}
      <div>
        <h3 className="mb-3 text-lg font-semibold">Behavior & Interaction</h3>
        <div className="divide-y rounded-lg border">
          <PropRow
            name="searchable"
            type="boolean"
            defaultValue="true"
            description="Enable/disable search functionality"
          />
          <PropRow
            name="hideSelectAll"
            type="boolean"
            defaultValue="false"
            description='Hide "Select All" button in dropdown'
          />
          <PropRow
            name="closeOnSelect"
            type="boolean"
            defaultValue="false"
            description="Close popover after each selection"
          />
          <PropRow
            name="disabled"
            type="boolean"
            defaultValue="false"
            description="Disable the entire component"
          />
          <PropRow
            name="modalPopover"
            type="boolean"
            defaultValue="false"
            description="Make popover modal (blocks outside interaction)"
          />
        </div>
      </div>

      {/* Advanced Props */}
      <div>
        <h3 className="mb-3 text-lg font-semibold">Advanced Configuration</h3>
        <div className="divide-y rounded-lg border">
          <PropRow
            name="animationConfig"
            type="AnimationConfig"
            defaultValue="undefined"
            description="Custom animation settings for badges and popover"
          />
          <PropRow
            name="responsive"
            type="boolean | ResponsiveConfig"
            defaultValue="undefined"
            description="Responsive behavior for different screen sizes"
          />
          <PropRow
            name="emptyIndicator"
            type="React.ReactNode"
            defaultValue='"No results found."'
            description="Custom empty state when no options match search"
          />
          <PropRow
            name="popoverClassName"
            type="string"
            defaultValue="undefined"
            description="Custom CSS class for popover content"
          />
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-muted space-y-2 rounded-lg p-4">
        <h4 className="font-semibold">💡 Best Practices</h4>
        <ul className="text-muted-foreground list-inside list-disc space-y-1 text-xs">
          <li>
            Always provide <code>onValueChange</code> callback
          </li>
          <li>Use meaningful option labels for accessibility</li>
          <li>
            Set appropriate <code>maxCount</code> for your UI
          </li>
          <li>Test with different data sizes</li>
          <li>
            Enable <code>responsive</code> for mobile-friendly layouts
          </li>
          <li>
            Use <code>searchable=false</code> for small option sets (&lt;10
            items)
          </li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: { disable: true },
  },
};

// Helper component for props table
const PropRow = ({
  name,
  type,
  required,
  defaultValue,
  description,
}: {
  name: string;
  type: string;
  required?: boolean;
  defaultValue: string;
  description: string;
}) => (
  <div className="grid grid-cols-12 gap-4 p-3 text-xs">
    <div className="col-span-3">
      <code className="font-mono font-semibold">{name}</code>
      {required && <span className="text-destructive ml-1">*</span>}
    </div>
    <div className="col-span-3">
      <code className="text-muted-foreground font-mono">{type}</code>
    </div>
    <div className="col-span-2">
      <code className="text-muted-foreground font-mono">{defaultValue}</code>
    </div>
    <div className="text-muted-foreground col-span-4">{description}</div>
  </div>
);

/**
 * All features combined - Playground
 */
export const Playground: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: fleetOptions,
    placeholder: 'Experiment with all features',
    variant: 'default',
    maxCount: 3,
    searchable: true,
    singleLine: false,
    hideSelectAll: false,
    disabled: false,
    defaultValue: ['maira-001', 'lara-001'],
    animationConfig: {
      badgeAnimation: 'bounce',
      popoverAnimation: 'scale',
      optionHoverAnimation: 'highlight',
    },
    onValueChange: () => {},
    literals: standardLiterals,
  },
};
