import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './select';
import { Label } from '@/components/label/label';
import {
  Apple,
  Banana,
  Cherry,
  Grape,
  Citrus,
  Globe,
  Monitor,
  Moon,
  Sun,
  User,
  Mail,
  Phone,
} from 'lucide-react';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
    defaultValue: {
      control: 'text',
      description: 'The default selected value',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default
export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  ),
};

// With Label
export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="fruit">Favorite fruit</Label>
      <Select>
        <SelectTrigger id="fruit" className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

// With Default Value
export const WithDefaultValue: Story = {
  render: () => (
    <Select defaultValue="banana">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  ),
};

// With Groups
export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Europe</SelectLabel>
          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value="cet">Central European Time (CET)</SelectItem>
          <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
          <SelectItem value="cst-china">China Standard Time (CST)</SelectItem>
          <SelectItem value="ist">India Standard Time (IST)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

// Disabled
export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
      </SelectContent>
    </Select>
  ),
};

// Disabled Items
export const DisabledItems: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana" disabled>
          Banana (out of stock)
        </SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes" disabled>
          Grapes (out of stock)
        </SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  ),
};

// With Icons
export const WithIcons: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">
          <Apple className="text-red-500" />
          Apple
        </SelectItem>
        <SelectItem value="banana">
          <Banana className="text-yellow-500" />
          Banana
        </SelectItem>
        <SelectItem value="cherry">
          <Cherry className="text-pink-500" />
          Cherry
        </SelectItem>
        <SelectItem value="grape">
          <Grape className="text-purple-500" />
          Grape
        </SelectItem>
        <SelectItem value="orange">
          <Citrus className="text-orange-500" />
          Orange
        </SelectItem>
      </SelectContent>
    </Select>
  ),
};

// Different Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="space-y-2">
        <Label className="text-muted-foreground text-xs">
          Size: sm (h-8 / 32px)
        </Label>
        <Select>
          <SelectTrigger size="sm" className="w-[180px]">
            <SelectValue placeholder="Small select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label className="text-muted-foreground text-xs">
          Size: default (h-9 / 36px)
        </Label>
        <Select>
          <SelectTrigger size="default" className="w-[180px]">
            <SelectValue placeholder="Default select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label className="text-muted-foreground text-xs">
          Size: lg (h-10 / 40px)
        </Label>
        <Select>
          <SelectTrigger size="lg" className="w-[180px]">
            <SelectValue placeholder="Large select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
};

// Controlled
export const Controlled: Story = {
  render: function Render() {
    const [value, setValue] = React.useState('');

    return (
      <div className="space-y-4">
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-muted-foreground text-sm">
          Selected: <strong>{value || 'None'}</strong>
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setValue('banana')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-3 py-1.5 text-sm"
          >
            Select Banana
          </button>
          <button
            onClick={() => setValue('')}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-md px-3 py-1.5 text-sm"
          >
            Clear
          </button>
        </div>
      </div>
    );
  },
};

// Form Example
export const FormExample: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="theme">Theme</Label>
        <Select defaultValue="system">
          <SelectTrigger id="theme" className="w-full">
            <SelectValue placeholder="Select theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">
              <Sun className="text-yellow-500" />
              Light
            </SelectItem>
            <SelectItem value="dark">
              <Moon className="text-blue-500" />
              Dark
            </SelectItem>
            <SelectItem value="system">
              <Monitor />
              System
            </SelectItem>
          </SelectContent>
        </Select>
        <p className="text-muted-foreground text-xs">
          Select your preferred theme.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="language">Language</Label>
        <Select defaultValue="en">
          <SelectTrigger id="language" className="w-full">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">
              <Globe />
              English
            </SelectItem>
            <SelectItem value="es">
              <Globe />
              Español
            </SelectItem>
            <SelectItem value="fr">
              <Globe />
              Français
            </SelectItem>
            <SelectItem value="de">
              <Globe />
              Deutsch
            </SelectItem>
          </SelectContent>
        </Select>
        <p className="text-muted-foreground text-xs">
          Choose your preferred language.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact">Preferred Contact</Label>
        <Select>
          <SelectTrigger id="contact" className="w-full">
            <SelectValue placeholder="How should we contact you?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="email">
              <Mail />
              Email
            </SelectItem>
            <SelectItem value="phone">
              <Phone />
              Phone
            </SelectItem>
            <SelectItem value="in-app">
              <User />
              In-app notification
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
};

// Full Width
export const FullWidth: Story = {
  render: () => (
    <div className="w-80">
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

// Error State
export const ErrorState: Story = {
  render: function Render() {
    const [hasError, setHasError] = React.useState(true);

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="toggle-error"
            checked={hasError}
            onChange={(e) => setHasError(e.target.checked)}
            className="size-4"
          />
          <Label htmlFor="toggle-error">Show error state</Label>
        </div>
        <div className="border-t pt-4">
          <div className="space-y-2">
            <Label htmlFor="country" className={hasError ? 'text-destructive' : ''}>
              Country
            </Label>
            <Select>
              <SelectTrigger
                id="country"
                aria-invalid={hasError}
                className="w-[200px]"
              >
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
              </SelectContent>
            </Select>
            {hasError && (
              <p className="text-destructive text-sm">
                Please select a country.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  },
};

// Long List with Scroll
export const LongList: Story = {
  render: () => {
    const countries = [
      'Argentina',
      'Australia',
      'Austria',
      'Belgium',
      'Brazil',
      'Canada',
      'Chile',
      'China',
      'Colombia',
      'Denmark',
      'Finland',
      'France',
      'Germany',
      'Greece',
      'India',
      'Ireland',
      'Italy',
      'Japan',
      'Mexico',
      'Netherlands',
      'New Zealand',
      'Norway',
      'Poland',
      'Portugal',
      'South Korea',
      'Spain',
      'Sweden',
      'Switzerland',
      'United Kingdom',
      'United States',
    ];

    return (
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          {countries.map((country) => (
            <SelectItem key={country} value={country.toLowerCase().replace(' ', '-')}>
              {country}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  },
};

