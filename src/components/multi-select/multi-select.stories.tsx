import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  UserIcon,
  MailIcon,
  BellIcon,
  StarIcon,
  HeartIcon,
  Globe,
  Smartphone,
  Monitor,
  Server,
} from 'lucide-react';
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
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
];

function MyComponent() {
  const [selected, setSelected] = useState<string[]>([]);
  
  return (
    <MultiSelect
      options={options}
      onValueChange={setSelected}
      placeholder="Select frameworks"
    />
  );
}
\`\`\`

## 🎨 Grouped Options

\`\`\`tsx
const groupedOptions = [
  {
    heading: 'Frontend',
    options: [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
    ],
  },
  {
    heading: 'Backend',
    options: [
      { label: 'Node.js', value: 'nodejs' },
      { label: 'Django', value: 'django' },
    ],
  },
];

<MultiSelect 
  options={groupedOptions} 
  onValueChange={setSelected}
/>
\`\`\`

## 🎭 Custom Styling

\`\`\`tsx
const customOptions = [
  {
    label: 'Web App',
    value: 'web',
    icon: Globe,
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

// Sample data
const frameworkOptions = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Next.js', value: 'nextjs' },
  { label: 'Nuxt', value: 'nuxt' },
  { label: 'Remix', value: 'remix' },
  { label: 'Astro', value: 'astro' },
];

const iconOptions = [
  { label: 'User', value: 'user', icon: UserIcon },
  { label: 'Email', value: 'email', icon: MailIcon },
  { label: 'Notifications', value: 'notifications', icon: BellIcon },
  { label: 'Favorites', value: 'favorites', icon: StarIcon },
  { label: 'Likes', value: 'likes', icon: HeartIcon },
];

const groupedOptions = [
  {
    heading: 'Frontend',
    options: [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
      { label: 'Angular', value: 'angular' },
      { label: 'Svelte', value: 'svelte' },
    ],
  },
  {
    heading: 'Backend',
    options: [
      { label: 'Node.js', value: 'nodejs' },
      { label: 'Django', value: 'django' },
      { label: 'Ruby on Rails', value: 'rails' },
      { label: 'Laravel', value: 'laravel' },
    ],
  },
  {
    heading: 'Full Stack',
    options: [
      { label: 'Next.js', value: 'nextjs' },
      { label: 'Nuxt', value: 'nuxt' },
      { label: 'Remix', value: 'remix' },
    ],
  },
];

const disabledOptions = [
  { label: 'Active Option 1', value: 'active1' },
  { label: 'Active Option 2', value: 'active2' },
  { label: 'Disabled Option', value: 'disabled', disabled: true },
  { label: 'Active Option 3', value: 'active3' },
  { label: 'Also Disabled', value: 'disabled2', disabled: true },
];

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
 * selection scenarios like choosing frameworks, languages, or categories.
 * 
 * **When to use:**
 * - Simple lists without categorization
 * - Quick selections with < 15 items
 * - Forms with standard dropdown needs
 */
export const Default: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: frameworkOptions,
    placeholder: 'Select frameworks',
    defaultValue: ['react'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic usage with an array of simple options. The component handles search, keyboard navigation, and selection state automatically.',
      },
    },
  },
};

/**
 * ## Grouped Options
 * 
 * Organize large option sets into logical categories with visual separators.
 * Essential for complex selections with multiple categories.
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
    options: groupedOptions,
    placeholder: 'Select technologies',
    defaultValue: ['react', 'nodejs'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Options organized into Frontend, Backend, and Full Stack categories. Groups are preserved during search and maintain visual separation.',
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
    options: iconOptions,
    placeholder: 'Select features',
    defaultValue: ['user', 'email'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Each option includes an icon component. Icons are rendered automatically and styled to match the theme.',
      },
    },
  },
};

/**
 * ## Secondary Variant
 * 
 * Subtle styling variant perfect for secondary actions, sidebars, and supplementary data.
 * Uses muted colors to reduce visual weight.
 * 
 * **Use cases:**
 * - Sidebar filters and settings
 * - Optional form fields
 * - Supplementary data selection
 * - Lower hierarchy actions
 */
export const Secondary: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: frameworkOptions,
    placeholder: 'Select frameworks',
    variant: 'secondary',
    defaultValue: ['react', 'vue'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary variant with subtle background colors. Great for de-emphasizing less important selections.',
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
    options: frameworkOptions,
    placeholder: 'Select items to delete',
    variant: 'destructive',
    defaultValue: ['angular'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Destructive variant with red color scheme. Reserve for delete actions and error states.',
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
    options: frameworkOptions,
    placeholder: 'Hover badges to see animation',
    defaultValue: ['react', 'vue', 'angular'],
    animationConfig: {
      badgeAnimation: 'bounce',
      popoverAnimation: 'scale',
      optionHoverAnimation: 'highlight',
      duration: 0.3,
    },
  },
};

/**
 * Limit visible badges with maxCount
 */
export const MaxCount: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: frameworkOptions,
    placeholder: 'Select frameworks',
    maxCount: 2,
    defaultValue: ['react', 'vue', 'angular', 'svelte'],
  },
};

/**
 * Single line layout with horizontal scroll
 */
export const SingleLine: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: frameworkOptions,
    placeholder: 'Select frameworks',
    singleLine: true,
    defaultValue: ['react', 'vue', 'angular', 'svelte', 'nextjs'],
  },
};

/**
 * Multi-select with disabled state
 */
export const Disabled: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: frameworkOptions,
    placeholder: 'Disabled select',
    disabled: true,
    defaultValue: ['react', 'vue'],
  },
};

/**
 * Multi-select with some options disabled
 */
export const DisabledOptions: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: disabledOptions,
    placeholder: 'Some options are disabled',
    defaultValue: ['active1'],
  },
};

/**
 * Multi-select without search functionality
 */
export const NoSearch: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: frameworkOptions.slice(0, 4), // Fewer options when search is disabled
    placeholder: 'Select (no search)',
    searchable: false,
    defaultValue: ['react'],
  },
};

/**
 * Multi-select without "Select All" option
 */
export const NoSelectAll: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: frameworkOptions,
    placeholder: 'No select all option',
    hideSelectAll: true,
  },
};

/**
 * Responsive behavior with different maxCount per screen size
 */
export const Responsive: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: frameworkOptions,
    placeholder: 'Resize window to see changes',
    defaultValue: ['react', 'vue', 'angular', 'svelte', 'nextjs', 'nuxt'],
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
  },
};

/**
 * Empty state with custom message
 */
export const CustomEmptyState: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: frameworkOptions,
    placeholder: 'Search for frameworks',
    emptyIndicator: (
      <div className="text-muted-foreground py-6 text-center">
        <p className="text-sm">No frameworks found</p>
        <p className="mt-1 text-xs">Try a different search term</p>
      </div>
    ),
  },
};

/**
 * Inverted variant for dark backgrounds
 */
export const Inverted: Story = {
  render: (args) => (
    <div className="bg-slate-900 p-8 rounded-lg">
      <MultiSelectWrapper {...args} />
    </div>
  ),
  args: {
    options: frameworkOptions,
    placeholder: 'Perfect for dark themes',
    variant: 'inverted',
    defaultValue: ['react', 'vue'],
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
        label: 'Web Application',
        value: 'web',
        icon: Globe,
        style: { badgeColor: '#3b82f6', gradient: 'from-blue-500 to-blue-600' },
      },
      {
        label: 'Mobile App',
        value: 'mobile',
        icon: Smartphone,
        style: { badgeColor: '#10b981', gradient: 'from-green-500 to-green-600' },
      },
      {
        label: 'Desktop Application',
        value: 'desktop',
        icon: Monitor,
        style: { badgeColor: '#8b5cf6', gradient: 'from-purple-500 to-purple-600' },
      },
      {
        label: 'API Service',
        value: 'api',
        icon: Server,
        style: { badgeColor: '#f59e0b', gradient: 'from-amber-500 to-amber-600' },
      },
    ],
    placeholder: 'Custom styled project types',
    defaultValue: ['web', 'mobile'],
  },
};

/**
 * All badge animations side by side for comparison
 */
const AllAnimationsComponent = () => {
  const animations: Array<'bounce' | 'pulse' | 'wiggle' | 'fade' | 'slide' | 'none'> = [
    'bounce',
    'pulse',
    'wiggle',
    'fade',
    'slide',
    'none',
  ];

  return (
    <div className="space-y-6">
      <div className="text-sm text-muted-foreground">
        Hover over badges to see each animation effect
      </div>
      {animations.map((animation) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [, setSelected] = useState<string[]>(['react', 'vue']);
        return (
          <div key={animation} className="space-y-2">
            <div className="text-xs font-medium text-muted-foreground uppercase">
              {animation} Animation
            </div>
            <MultiSelect
              options={frameworkOptions}
              onValueChange={setSelected}
              placeholder={`${animation} animation`}
              defaultValue={['react', 'vue']}
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
 * Layout comparison: Single Line vs Multi Line
 */
const LayoutComparisonComponent = () => {
  const [singleLineSelected, setSingleLineSelected] = useState<string[]>([
    'react',
    'vue',
    'angular',
    'svelte',
    'nextjs',
  ]);
  const [multiLineSelected, setMultiLineSelected] = useState<string[]>([
    'react',
    'vue',
    'angular',
    'svelte',
    'nextjs',
  ]);

  return (
    <div className="space-y-8">
      <div>
        <div className="mb-2 text-sm font-medium">Single Line (horizontal scroll)</div>
        <div className="text-xs text-muted-foreground mb-3">
          Badges scroll horizontally when container width is exceeded
        </div>
        <MultiSelect
          options={frameworkOptions}
          onValueChange={setSingleLineSelected}
          placeholder="Single line layout"
          singleLine={true}
          defaultValue={singleLineSelected}
        />
      </div>

      <div>
        <div className="mb-2 text-sm font-medium">Multi Line (default)</div>
        <div className="text-xs text-muted-foreground mb-3">
          Badges wrap to multiple lines as needed
        </div>
        <MultiSelect
          options={frameworkOptions}
          onValueChange={setMultiLineSelected}
          placeholder="Multi line layout"
          singleLine={false}
          defaultValue={multiLineSelected}
        />
      </div>
    </div>
  );
};

export const LayoutComparison = {
  render: () => <LayoutComparisonComponent />,
  parameters: {
    layout: 'padded',
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
        <div className="text-xs text-muted-foreground mb-2">
          Perfect for main actions and primary selections
        </div>
        <MultiSelectWrapper
          options={frameworkOptions}
          placeholder="Default variant"
          variant="default"
          defaultValue={['react', 'vue']}
        />
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium">Secondary</div>
        <div className="text-xs text-muted-foreground mb-2">
          Great for secondary actions and supplementary data
        </div>
        <MultiSelectWrapper
          options={frameworkOptions}
          placeholder="Secondary variant"
          variant="secondary"
          defaultValue={['angular', 'svelte']}
        />
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium">Destructive</div>
        <div className="text-xs text-muted-foreground mb-2">
          Use for critical actions and error states
        </div>
        <MultiSelectWrapper
          options={frameworkOptions}
          placeholder="Destructive variant"
          variant="destructive"
          defaultValue={['nextjs']}
        />
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium">Inverted</div>
        <div className="text-xs text-muted-foreground mb-2">
          Perfect for dark backgrounds and emphasis
        </div>
        <div className="bg-slate-900 p-4 rounded-lg">
          <MultiSelectWrapper
            options={frameworkOptions}
            placeholder="Inverted variant"
            variant="inverted"
            defaultValue={['remix', 'astro']}
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
        <h2 className="text-2xl font-bold mb-2">Props Reference Guide</h2>
        <p className="text-muted-foreground">
          Complete documentation of all MultiSelect component properties
        </p>
      </div>

      {/* Core Props */}
      <div>
          <h3 className="text-lg font-semibold mb-3">Core Properties</h3>
          <div className="border rounded-lg divide-y">
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
          <h3 className="text-lg font-semibold mb-3">Appearance & Styling</h3>
          <div className="border rounded-lg divide-y">
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
          <h3 className="text-lg font-semibold mb-3">Behavior & Interaction</h3>
          <div className="border rounded-lg divide-y">
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
          <h3 className="text-lg font-semibold mb-3">Advanced Configuration</h3>
          <div className="border rounded-lg divide-y">
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
      <div className="bg-muted p-4 rounded-lg space-y-2">
          <h4 className="font-semibold">💡 Best Practices</h4>
          <ul className="space-y-1 text-xs text-muted-foreground list-disc list-inside">
            <li>Always provide <code>onValueChange</code> callback</li>
            <li>Use meaningful option labels for accessibility</li>
            <li>Set appropriate <code>maxCount</code> for your UI</li>
            <li>Test with different data sizes</li>
            <li>Enable <code>responsive</code> for mobile-friendly layouts</li>
            <li>Use <code>searchable=false</code> for small option sets (&lt;10 items)</li>
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
      <code className="font-mono text-muted-foreground">{type}</code>
    </div>
    <div className="col-span-2">
      <code className="font-mono text-muted-foreground">{defaultValue}</code>
    </div>
    <div className="col-span-4 text-muted-foreground">{description}</div>
  </div>
);

/**
 * All features combined - Playground
 */
export const Playground: Story = {
  render: (args) => <MultiSelectWrapper {...args} />,
  args: {
    options: groupedOptions,
    placeholder: 'Experiment with all features',
    variant: 'default',
    maxCount: 3,
    searchable: true,
    singleLine: false,
    hideSelectAll: false,
    disabled: false,
    defaultValue: ['react', 'nodejs'],
    animationConfig: {
      badgeAnimation: 'bounce',
      popoverAnimation: 'scale',
      optionHoverAnimation: 'highlight',
    },
  },
};
