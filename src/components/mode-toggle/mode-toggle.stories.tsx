import type { Meta, StoryObj } from '@storybook/react';
import { ModeToggle } from './mode-toggle';
import {
  ThemeProvider,
  useTheme,
} from '@/components/theme-provider/theme-provider';
import { Button } from '@/components/button/button';
import { Badge } from '@/components/badge/badge';

const meta = {
  title: 'Components/ModeToggle',
  component: ModeToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="system" storageKey="storybook-theme">
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ModeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Example
export const Default: Story = {
  render: () => <ModeToggle />,
};

// With Context Display
function WithContextDisplayComponent() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-3">
        <span className="text-sm">Current theme:</span>
        <Badge variant="secondary">{theme}</Badge>
      </div>
      <ModeToggle />
    </div>
  );
}

export const WithContextDisplay: Story = {
  render: () => <WithContextDisplayComponent />,
};

// In Navigation Bar
export const InNavigationBar: Story = {
  render: () => (
    <nav className="flex items-center justify-between rounded-lg border p-4">
      <div className="flex items-center gap-6">
        <span className="text-lg font-semibold">My App</span>
        <div className="flex gap-4">
          <a href="#" className="text-sm hover:underline">
            Home
          </a>
          <a href="#" className="text-sm hover:underline">
            About
          </a>
          <a href="#" className="text-sm hover:underline">
            Contact
          </a>
        </div>
      </div>
      <ModeToggle />
    </nav>
  ),
};

// Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Basic Mode Toggle</h3>
        <p className="text-muted-foreground mb-4 text-sm">
          Click the button to switch between light, dark, and system theme
        </p>
        <ModeToggle />
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">In Different Contexts</h3>
        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-medium">Header Example</span>
              <ModeToggle />
            </div>
            <p className="text-muted-foreground text-sm">
              Typically placed in the header or navigation bar
            </p>
          </div>

          <div className="rounded-lg border p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-medium">Settings Panel</span>
              <ModeToggle />
            </div>
            <p className="text-muted-foreground text-sm">
              Can also be used in settings or preferences sections
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">With Other Components</h3>
        <div className="flex items-center gap-3 rounded-lg border p-4">
          <Button variant="outline">Settings</Button>
          <Button variant="outline">Profile</Button>
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Theme Preview</h3>
        <div className="grid gap-4 rounded-lg border p-6">
          <div className="flex items-center justify-between">
            <span className="font-medium">Current Theme</span>
            <ModeToggle />
          </div>
          <div className="grid gap-3 rounded-md border p-4">
            <p className="text-sm">
              The theme toggle allows users to choose between:
            </p>
            <ul className="text-muted-foreground ml-6 list-disc space-y-1 text-sm">
              <li>
                <strong>Light mode:</strong> Bright background with dark text
              </li>
              <li>
                <strong>Dark mode:</strong> Dark background with light text
              </li>
              <li>
                <strong>System:</strong> Matches the OS preference
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Implementation Example</h3>
        <div className="rounded-lg border p-6">
          <div className="mb-4">
            <h4 className="mb-2 font-medium">Setup Instructions</h4>
            <ol className="text-muted-foreground ml-6 list-decimal space-y-2 text-sm">
              <li>
                Wrap your app with{' '}
                <code className="text-foreground">ThemeProvider</code>
              </li>
              <li>
                Place <code className="text-foreground">ModeToggle</code>{' '}
                anywhere in your UI
              </li>
              <li>The component will work automatically with the context</li>
            </ol>
          </div>

          <div className="mt-4 flex items-center justify-between rounded-md border p-3">
            <span className="text-sm">Try it:</span>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// Real World Example - Dashboard Header
export const DashboardHeader: Story = {
  render: () => (
    <div className="w-full space-y-4 p-4">
      <header className="bg-card flex items-center justify-between rounded-lg border p-4 shadow-sm">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <nav className="flex gap-4">
            <a href="#" className="text-sm hover:underline">
              Overview
            </a>
            <a href="#" className="text-sm hover:underline">
              Analytics
            </a>
            <a href="#" className="text-sm hover:underline">
              Reports
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            Settings
          </Button>
          <ModeToggle />
        </div>
      </header>

      <div className="bg-card rounded-lg border p-6">
        <h2 className="mb-2 text-lg font-semibold">Welcome back!</h2>
        <p className="text-muted-foreground text-sm">
          This is an example of how the ModeToggle integrates into a real
          dashboard. Click the theme toggle in the header to switch themes.
        </p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// Integration Guide
export const IntegrationGuide: Story = {
  render: () => (
    <div className="mx-auto max-w-3xl space-y-6 p-8">
      <div>
        <h2 className="mb-2 text-2xl font-bold">ModeToggle Integration</h2>
        <p className="text-muted-foreground">
          Learn how to integrate the theme toggle in your application
        </p>
      </div>

      <div className="space-y-4">
        <div className="rounded-lg border p-6">
          <h3 className="mb-3 flex items-center gap-2 font-semibold">
            <Badge>1</Badge>
            Setup ThemeProvider
          </h3>
          <p className="text-muted-foreground mb-3 text-sm">
            Wrap your application root with the ThemeProvider:
          </p>
          <div className="bg-muted rounded-md p-4">
            <code className="text-sm">
              {`<ThemeProvider defaultTheme="system" storageKey="app-theme">
  <App />
</ThemeProvider>`}
            </code>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="mb-3 flex items-center gap-2 font-semibold">
            <Badge>2</Badge>
            Add ModeToggle Component
          </h3>
          <p className="text-muted-foreground mb-3 text-sm">
            Place the ModeToggle anywhere in your UI:
          </p>
          <div className="bg-muted rounded-md p-4">
            <code className="text-sm">{`<ModeToggle />`}</code>
          </div>
          <div className="mt-3 flex justify-end">
            <ModeToggle />
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="mb-3 flex items-center gap-2 font-semibold">
            <Badge>3</Badge>
            Done!
          </h3>
          <p className="text-muted-foreground text-sm">
            The theme will be persisted in localStorage and synchronized across
            your entire application. Users can choose between light, dark, or
            system preference.
          </p>
        </div>
      </div>

      <div className="bg-card rounded-lg border p-6">
        <h3 className="mb-4 font-semibold">Features</h3>
        <ul className="text-muted-foreground space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <Badge variant="outline" className="mt-0.5">
              ✓
            </Badge>
            <span>Persists theme choice in localStorage</span>
          </li>
          <li className="flex items-start gap-2">
            <Badge variant="outline" className="mt-0.5">
              ✓
            </Badge>
            <span>Supports system preference detection</span>
          </li>
          <li className="flex items-start gap-2">
            <Badge variant="outline" className="mt-0.5">
              ✓
            </Badge>
            <span>Smooth transitions between themes</span>
          </li>
          <li className="flex items-start gap-2">
            <Badge variant="outline" className="mt-0.5">
              ✓
            </Badge>
            <span>Easy to integrate and customize</span>
          </li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
