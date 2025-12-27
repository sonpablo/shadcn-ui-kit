import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Settings, User, Bell, Cpu, Wrench, Activity } from 'lucide-react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/card/card';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default tabs with underline style.
 */
export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-muted-foreground text-sm">
          Content for Tab 1. This is the default underline style.
        </p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-muted-foreground text-sm">Content for Tab 2.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-muted-foreground text-sm">Content for Tab 3.</p>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * Pills variant
 */
export const Pills: Story = {
  name: 'Variant: Pills',
  render: () => (
    <Tabs defaultValue="overview" className="w-[500px]">
      <TabsList variant="pills">
        <TabsTrigger variant="pills" value="overview">
          Overview
        </TabsTrigger>
        <TabsTrigger variant="pills" value="analytics">
          Analytics
        </TabsTrigger>
        <TabsTrigger variant="pills" value="reports">
          Reports
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              A summary of your fleet performance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Overview content with pills style tabs.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="analytics">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>Detailed analytics and metrics.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">Analytics content.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports">
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
            <CardDescription>Generated reports and exports.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">Reports content.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * Tabs with icons for better visual hierarchy.
 */
export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="robots">
      <TabsList>
        <TabsTrigger value="robots">
          <Cpu className="size-4" />
          Robots
        </TabsTrigger>
        <TabsTrigger value="maintenance">
          <Wrench className="size-4" />
          Maintenance
        </TabsTrigger>
        <TabsTrigger value="monitoring">
          <Activity className="size-4" />
          Monitoring
        </TabsTrigger>
        <TabsTrigger value="settings">
          <Settings className="size-4" />
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="robots">
        <p className="text-muted-foreground text-sm">
          Manage your robot fleet here.
        </p>
      </TabsContent>
      <TabsContent value="maintenance">
        <p className="text-muted-foreground text-sm">
          Schedule and track maintenance tasks.
        </p>
      </TabsContent>
      <TabsContent value="monitoring">
        <p className="text-muted-foreground text-sm">
          Real-time monitoring dashboard.
        </p>
      </TabsContent>
      <TabsContent value="settings">
        <p className="text-muted-foreground text-sm">
          Configure fleet settings.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * Disabled tabs example.
 */
export const WithDisabled: Story = {
  render: () => (
    <Tabs defaultValue="active" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="pending">Pending</TabsTrigger>
        <TabsTrigger value="archived" disabled>
          Archived
        </TabsTrigger>
      </TabsList>
      <TabsContent value="active">
        <p className="text-muted-foreground text-sm">Active items content.</p>
      </TabsContent>
      <TabsContent value="pending">
        <p className="text-muted-foreground text-sm">Pending items content.</p>
      </TabsContent>
      <TabsContent value="archived">
        <p className="text-muted-foreground text-sm">Archived items content.</p>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * Full width tabs that stretch to fill the container.
 */
export const FullWidth: Story = {
  render: () => (
    <Tabs defaultValue="inactive">
      <TabsList className="w-full">
        <TabsTrigger value="all" className="flex-1">
          All
        </TabsTrigger>
        <TabsTrigger value="active" className="flex-1">
          Active
        </TabsTrigger>
        <TabsTrigger value="inactive" className="flex-1">
          Inactive
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <p className="text-muted-foreground text-sm">All robots in fleet.</p>
      </TabsContent>
      <TabsContent value="active">
        <p className="text-muted-foreground text-sm">
          Currently active robots.
        </p>
      </TabsContent>
      <TabsContent value="inactive">
        <p className="text-muted-foreground text-sm">
          Robots currently offline.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * Tabs with second tab selected by default.
 */
export const SecondTabSelected: Story = {
  name: 'Second Tab Selected',
  render: () => (
    <Tabs defaultValue="tab2" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-muted-foreground text-sm">Content for Tab 1.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-muted-foreground text-sm">
          Content for Tab 2. This tab is selected by default using{' '}
          <code className="bg-muted rounded px-1">
            defaultValue=&quot;tab2&quot;
          </code>
        </p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-muted-foreground text-sm">Content for Tab 3.</p>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * Controlled tabs with onValueChange callback.
 * Demonstrates how to listen for tab changes.
 */
export const Controlled: Story = {
  name: 'Controlled (onValueChange)',
  render: function ControlledTabs() {
    const [activeTab, setActiveTab] = React.useState('robots');
    const [history, setHistory] = React.useState<string[]>(['robots']);

    const handleTabChange = (value: string) => {
      setActiveTab(value);
      setHistory((prev) => [...prev, value]);
    };

    return (
      <div className="w-[500px] space-y-4">
        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <TabsList>
            <TabsTrigger value="robots">
              <Cpu className="size-4" />
              Robots
            </TabsTrigger>
            <TabsTrigger value="maintenance">
              <Wrench className="size-4" />
              Maintenance
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings className="size-4" />
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="robots">
            <p className="text-muted-foreground text-sm">
              Robot fleet management content.
            </p>
          </TabsContent>
          <TabsContent value="maintenance">
            <p className="text-muted-foreground text-sm">
              Maintenance scheduling content.
            </p>
          </TabsContent>
          <TabsContent value="settings">
            <p className="text-muted-foreground text-sm">
              Settings configuration content.
            </p>
          </TabsContent>
        </Tabs>

        <div className="bg-muted/50 rounded-lg p-4">
          <p className="text-sm font-medium">
            Current tab:{' '}
            <code className="bg-muted rounded px-1">{activeTab}</code>
          </p>
          <p className="text-muted-foreground mt-2 text-xs">
            Navigation history: {history.join(' → ')}
          </p>
        </div>

        <p className="text-muted-foreground text-xs">
          Using <code className="bg-muted rounded px-1">value</code> and{' '}
          <code className="bg-muted rounded px-1">onValueChange</code> props for
          controlled mode.
        </p>
      </div>
    );
  },
};

/**
 * Comparison of both variants side by side.
 */
export const VariantComparison: Story = {
  name: 'Variant Comparison',
  render: () => (
    <div className="flex flex-col gap-10">
      <div>
        <h3 className="mb-4 text-sm font-medium">Underline Style (Default)</h3>
        <Tabs defaultValue="tab1" className="w-[400px]">
          <TabsList variant="underline">
            <TabsTrigger variant="underline" value="tab1">
              <Settings className="size-4" />
              Tab 1
            </TabsTrigger>
            <TabsTrigger variant="underline" value="tab2">
              <User className="size-4" />
              Tab 2
            </TabsTrigger>
            <TabsTrigger variant="underline" value="tab3">
              <Bell className="size-4" />
              Tab 3
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p className="text-muted-foreground text-sm">
              Underline style content.
            </p>
          </TabsContent>
        </Tabs>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-medium">Pills Style</h3>
        <Tabs defaultValue="tab1" className="w-[400px]">
          <TabsList variant="pills">
            <TabsTrigger variant="pills" value="tab1">
              <Settings className="size-4" />
              Tab 1
            </TabsTrigger>
            <TabsTrigger variant="pills" value="tab2">
              <User className="size-4" />
              Tab 2
            </TabsTrigger>
            <TabsTrigger variant="pills" value="tab3">
              <Bell className="size-4" />
              Tab 3
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p className="text-muted-foreground text-sm">
              Pills style content.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
