import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScrollSpy } from './index';
import {
  FileText,
  Code,
  Settings,
  Shield,
  Package,
  CheckCircle2,
  AlertCircle,
  Info,
  MapPin,
  Bell,
  Bot,
  Cpu,
  Radio,
} from 'lucide-react';
import { Badge } from '@/components/badge/badge';
import { Button } from '@/components/button/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/card/card';
import { cn } from '@/lib/utils';
import { Label } from '@/components/label/label';
import { Input } from '@/components/input/input';
import { Textarea } from '@/components/textarea/textarea';
import { Switch } from '@/components/switch/switch';
import { Checkbox } from '@/components/checkbox/checkbox';
import { Separator } from '@/components/separator/separator';

const meta: Meta<typeof ScrollSpy.Provider> = {
  title: 'Components/ScrollSpy',
  component: ScrollSpy.Provider,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A powerful scroll spy component system for tracking scroll position and highlighting active sections in navigation.

## Features
- **Automatic scroll tracking** - Highlights the active section as users scroll
- **Smooth scrolling** - Click navigation items to smoothly scroll to sections
- **Flexible layout** - Compound component pattern for maximum customization
- **Custom rendering** - Full control over nav item appearance with \`renderItem\`
- **TypeScript support** - Fully typed with exported interfaces
- **Accessible** - Semantic HTML with proper ARIA attributes

## Architecture
Uses compound components pattern with Context API:
- \`ScrollSpy.Provider\` - Wraps the entire scroll spy system
- \`ScrollSpy.Nav\` - Renders the navigation with active highlighting
- \`ScrollSpy.Content\` - Scrollable container that registers with the provider

## Important Requirements
⚠️ **The ScrollSpy container must have a fixed height with internal scrolling.**

Use \`h-[80vh]\`, \`max-h-[calc(100vh-4rem)]\`, or similar. The container needs to be scrollable, not the page itself.

## Basic Usage
\`\`\`tsx
const sections = [
  { id: 'intro', label: 'Introduction' },
  { id: 'usage', label: 'Usage' },
  { id: 'api', label: 'API Reference' }
];

<ScrollSpy.Provider sections={sections}>
  <div className="flex h-[80vh] gap-6">
    <ScrollSpy.Nav sections={sections} />
    <ScrollSpy.Content>
      <section id="intro">...</section>
      <section id="usage">...</section>
      <section id="api">...</section>
    </ScrollSpy.Content>
  </div>
</ScrollSpy.Provider>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    sections: {
      description: 'Array of sections to track',
      control: 'object',
    },
    offset: {
      description:
        'Offset in pixels for scroll-to behavior (useful for sticky headers)',
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollSpy.Provider>;

// Reusable section component
const Section = ({ id, title }: { id: string; title: string }) => (
  <section id={id} className="min-h-[80vh] border-b border-neutral-700 py-8">
    <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
    <div className="space-y-4">
      <p className="text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p className="text-lg">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p className="text-lg">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
    </div>
  </section>
);

const demoSections = [
  { id: 'intro', label: 'Introduction' },
  { id: 'usage', label: 'Usage' },
  { id: 'examples', label: 'Examples' },
  { id: 'api', label: 'API Reference' },
];

/**
 * Basic scroll spy example with default navigation styling.
 * The container has a fixed height (h-[80vh]) to enable internal scrolling.
 * Scroll the content and observe how the navigation highlights the active section.
 */
export const Default: Story = {
  args: {
    sections: demoSections,
  },
  render: (args) => (
    <ScrollSpy.Provider {...args}>
      <div className="flex h-[80vh] gap-10 p-6">
        <ScrollSpy.Nav sections={demoSections} />
        <ScrollSpy.Content className="flex-1 p-6">
          {demoSections.map((s) => (
            <Section key={s.id} id={s.id} title={s.label} />
          ))}
        </ScrollSpy.Content>
      </div>
    </ScrollSpy.Provider>
  ),
};

/**
 * Custom navigation items with icons and different visual treatment.
 * Shows how to use the `renderItem` prop for full customization of nav items.
 */
export const CustomNavigation: Story = {
  args: {
    sections: demoSections,
  },
  render: (args) => {
    const sectionsWithIcons = [
      { id: 'overview', label: 'Overview', icon: FileText },
      { id: 'installation', label: 'Installation', icon: Package },
      { id: 'configuration', label: 'Configuration', icon: Settings },
      { id: 'usage', label: 'Usage', icon: Code },
      { id: 'security', label: 'Security', icon: Shield },
    ];

    return (
      <ScrollSpy.Provider {...args} sections={sectionsWithIcons}>
        <div className="flex h-[80vh] gap-10 p-6">
          <ScrollSpy.Nav
            sections={sectionsWithIcons}
            className="h-fit rounded-lg bg-neutral-800 p-4"
            renderItem={({ section, isActive, onNavigate }) => {
              const sectionWithIcon = section as (typeof sectionsWithIcons)[0];
              const Icon = sectionWithIcon.icon;
              return (
                <button
                  type="button"
                  onClick={() => onNavigate(section.id)}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-lg font-medium transition-all',
                    isActive
                      ? 'bg-accent-400 font-medium-bold text-lg text-white'
                      : 'text-neutral-100 hover:bg-neutral-700 hover:text-white',
                  )}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span>{section.label}</span>
                </button>
              );
            }}
          />
          <ScrollSpy.Content className="flex-1 rounded-lg bg-neutral-800 p-8">
            {sectionsWithIcons.map((s) => (
              <Section key={s.id} id={s.id} title={s.label} />
            ))}
          </ScrollSpy.Content>
        </div>
      </ScrollSpy.Provider>
    );
  },
};

/**
 * Documentation-style layout with status badges and rich content.
 * Perfect for API documentation or feature showcases.
 */
export const DocumentationPage: Story = {
  render: () => {
    const sections = [
      { id: 'quick-start', label: 'Quick Start', status: 'stable' },
      { id: 'authentication', label: 'Authentication', status: 'stable' },
      { id: 'api-endpoints', label: 'API Endpoints', status: 'stable' },
      { id: 'webhooks', label: 'Webhooks', status: 'beta' },
      { id: 'rate-limiting', label: 'Rate Limiting', status: 'stable' },
    ];

    return (
      <div className="p-8">
        <div className="mb-6">
          <h1 className="mb-2 text-4xl font-bold text-white">
            API Documentation
          </h1>
          <p className="text-lg text-neutral-100">
            Complete reference for integrating with our platform
          </p>
        </div>

        <ScrollSpy.Provider sections={sections} offset={120}>
          <div className="flex h-[80vh] gap-10 p-6">
            <ScrollSpy.Nav
              sections={sections}
              className="h-fit rounded-lg bg-neutral-800 p-6"
              renderItem={({ section, isActive, onNavigate }) => {
                const sectionWithStatus = section as (typeof sections)[0];
                return (
                  <button
                    type="button"
                    onClick={() => onNavigate(section.id)}
                    className={cn(
                      'flex w-full items-center justify-between gap-3 rounded-lg px-4 py-3 text-left text-lg font-medium transition-all',
                      isActive
                        ? 'bg-accent-400/10 text-accent-400 font-medium-bold text-lg'
                        : 'text-neutral-100 hover:bg-neutral-700 hover:text-white',
                    )}
                  >
                    <span>{section.label}</span>
                    {sectionWithStatus.status === 'beta' && (
                      <Badge variant="secondary">Beta</Badge>
                    )}
                  </button>
                );
              }}
            />

            <ScrollSpy.Content className="flex-1 rounded-lg bg-neutral-800 p-8">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="mb-16 min-h-[70vh] scroll-mt-32"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <h2 className="text-2xl font-semibold text-white">
                      {section.label}
                    </h2>
                    {section.status === 'beta' ? (
                      <Badge variant="secondary">Beta</Badge>
                    ) : (
                      <Badge variant="default">Stable</Badge>
                    )}
                  </div>

                  <Card className="border-neutral-600 bg-neutral-700/50 p-6">
                    <div className="space-y-4">
                      <p className="text-lg text-neutral-100">
                        {section.id === 'quick-start' &&
                          'Get up and running in minutes with our comprehensive quick start guide. This section covers installation, basic setup, and your first API call.'}
                        {section.id === 'authentication' &&
                          'Learn how to authenticate your requests using API keys, OAuth 2.0, or JWT tokens. Security best practices and token management included.'}
                        {section.id === 'api-endpoints' &&
                          'Complete reference of all available REST API endpoints with request/response examples, parameters, and status codes.'}
                        {section.id === 'webhooks' &&
                          'Configure webhooks to receive real-time notifications about events in your account. Currently in beta with limited event types.'}
                        {section.id === 'rate-limiting' &&
                          'Understanding rate limits, handling 429 errors, and implementing exponential backoff strategies for reliable integrations.'}
                      </p>

                      <div className="rounded-lg bg-neutral-800 p-4">
                        <code className="text-accent-400 text-sm">
                          GET /api/v1/{section.id.replace(/-/g, '_')}
                        </code>
                      </div>

                      <div className="flex gap-3">
                        <Button variant="default" size="sm">
                          Try it out
                        </Button>
                        <Button variant="ghost" size="sm">
                          View examples
                        </Button>
                      </div>
                    </div>
                  </Card>
                </section>
              ))}
            </ScrollSpy.Content>
          </div>
        </ScrollSpy.Provider>
      </div>
    );
  },
};

/**
 * Shows the offset prop in action. The offset adjusts where scrolling stops
 * when clicking navigation items. Useful for sticky headers or custom margins.
 */
export const WithOffset: Story = {
  args: {
    sections: demoSections,
    offset: 200,
  },
  render: (args) => (
    <ScrollSpy.Provider {...args}>
      <div className="flex h-[80vh] gap-10 p-6">
        <ScrollSpy.Nav
          sections={demoSections}
          className="h-fit rounded-lg bg-neutral-800 p-6"
        />
        <ScrollSpy.Content className="flex-1 rounded-lg bg-neutral-800 p-8">
          <div className="bg-accent-400/10 border-accent-400 mb-6 rounded-lg border p-4">
            <p className="text-accent-400 text-base">
              💡 The offset is set to 200px. Click navigation items to see how
              they scroll to sections with this offset applied.
            </p>
          </div>
          {demoSections.map((s) => (
            <Section key={s.id} id={s.id} title={s.label} />
          ))}
        </ScrollSpy.Content>
      </div>
    </ScrollSpy.Provider>
  ),
};

/**
 * Minimal navigation with status indicators showing different states.
 * Perfect for progress tracking or step-by-step guides.
 */
export const WithStatusIndicators: Story = {
  render: () => {
    const sections = [
      { id: 'overview', label: 'Overview', status: 'complete' },
      { id: 'requirements', label: 'Requirements', status: 'complete' },
      { id: 'implementation', label: 'Implementation', status: 'in-progress' },
      { id: 'testing', label: 'Testing', status: 'pending' },
      { id: 'deployment', label: 'Deployment', status: 'pending' },
    ];

    const getStatusIcon = (status: string) => {
      switch (status) {
        case 'complete':
          return <CheckCircle2 className="h-4 w-4 text-green-500" />;
        case 'in-progress':
          return <Info className="text-accent-400 h-4 w-4" />;
        default:
          return <AlertCircle className="h-4 w-4 text-neutral-400" />;
      }
    };

    return (
      <ScrollSpy.Provider sections={sections}>
        <div className="flex h-[80vh] gap-12 p-8">
          <ScrollSpy.Nav
            sections={sections}
            className="w-64"
            renderItem={({ section, isActive, onNavigate }) => {
              const sectionWithStatus = section as (typeof sections)[0];
              return (
                <button
                  type="button"
                  onClick={() => onNavigate(section.id)}
                  className={cn(
                    'flex w-full items-center gap-3 py-3 text-left text-base font-medium transition-colors',
                    isActive
                      ? 'text-green-300'
                      : 'text-neutral-200 hover:text-white',
                  )}
                >
                  {getStatusIcon(sectionWithStatus.status)}
                  {section.label}
                </button>
              );
            }}
          />

          <ScrollSpy.Content className="flex-1">
            {sections.map((s) => (
              <Section key={s.id} id={s.id} title={s.label} />
            ))}
          </ScrollSpy.Content>
        </div>
      </ScrollSpy.Provider>
    );
  },
};

/**
 * Tutorial guide with numbered steps, perfect for onboarding flows
 * or step-by-step instructions.
 */
export const TutorialGuide: Story = {
  render: () => {
    const sections = [
      { id: 'step-1', label: 'Create Account', step: 1 },
      { id: 'step-2', label: 'Connect Device', step: 2 },
      { id: 'step-3', label: 'Configure Settings', step: 3 },
      { id: 'step-4', label: 'Run First Task', step: 4 },
    ];

    return (
      <div className="p-8">
        <div className="mb-6 text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">
            Getting Started Guide
          </h1>
          <p className="text-lg text-neutral-100">
            Follow these steps to set up your first robot
          </p>
        </div>

        <ScrollSpy.Provider sections={sections}>
          <div className="flex h-[70vh] gap-8">
            <ScrollSpy.Nav
              sections={sections}
              className="h-fit w-64 rounded-lg bg-neutral-800 p-6"
              renderItem={({ section, isActive, onNavigate }) => {
                const sectionWithStep = section as (typeof sections)[0];
                return (
                  <button
                    type="button"
                    onClick={() => onNavigate(section.id)}
                    className={cn(
                      'flex w-full items-center gap-3 py-3 text-left text-base font-medium transition-colors',
                      isActive
                        ? 'text-accent-400 font-medium-bold text-base'
                        : 'text-neutral-100 hover:text-white',
                    )}
                  >
                    <div
                      className={cn(
                        'flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
                        isActive
                          ? 'bg-accent-400 text-white'
                          : 'bg-neutral-700 text-neutral-200',
                      )}
                    >
                      {sectionWithStep.step}
                    </div>
                    {section.label}
                  </button>
                );
              }}
            />

            <ScrollSpy.Content className="flex-1 rounded-lg bg-neutral-800 p-8">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="mb-16 min-h-[60vh]"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="bg-accent-400 font-medium-bold flex h-10 w-10 items-center justify-center rounded-full text-lg text-white">
                      {section.step}
                    </div>
                    <h2 className="text-2xl font-semibold text-white">
                      {section.label}
                    </h2>
                  </div>
                  <div className="space-y-4 pl-13">
                    <p className="text-lg text-neutral-100">
                      Detailed instructions for step {section.step} would go
                      here. This could include screenshots, code snippets, or
                      other helpful resources to guide users through the
                      process.
                    </p>
                    <Card className="border-neutral-600 bg-neutral-700/50 p-4">
                      <p className="text-sm text-neutral-100">
                        💡 <strong>Tip:</strong> Make sure to complete all steps
                        in order for the best experience.
                      </p>
                    </Card>
                  </div>
                </section>
              ))}
            </ScrollSpy.Content>
          </div>
        </ScrollSpy.Provider>
      </div>
    );
  },
};

/**
 * Custom className on navigation to demonstrate full styling control.
 * You can change width, padding, colors, borders, etc.
 */
export const CustomNavClass: Story = {
  render: () => (
    <div className="flex h-[80vh] gap-8 p-8">
      <ScrollSpy.Provider sections={demoSections}>
        <ScrollSpy.Nav
          sections={demoSections}
          className="border-accent-400 w-80 rounded-xl border-2 bg-neutral-800 p-4"
        />
        <ScrollSpy.Content className="flex-1 rounded-lg bg-neutral-800 p-8">
          {demoSections.map((s) => (
            <Section key={s.id} id={s.id} title={s.label} />
          ))}
        </ScrollSpy.Content>
      </ScrollSpy.Provider>
    </div>
  ),
};

/**
 * Custom className on content to demonstrate full styling control.
 * You can change padding, borders, background, etc.
 */
export const CustomContentClass: Story = {
  render: () => (
    <div className="flex h-[80vh] gap-8 p-8">
      <ScrollSpy.Provider sections={demoSections}>
        <ScrollSpy.Nav
          sections={demoSections}
          className="h-fit rounded-lg bg-neutral-800 p-6"
        />
        <ScrollSpy.Content className="border-accent-400 flex-1 rounded-2xl border-4 bg-neutral-800 p-10">
          {demoSections.map((s) => (
            <Section key={s.id} id={s.id} title={s.label} />
          ))}
        </ScrollSpy.Content>
      </ScrollSpy.Provider>
    </div>
  ),
};

/**
 * Form layout with multiple sections and various input types.
 * Perfect for robot configuration, fleet management, or device setup.
 * Demonstrates how ScrollSpy helps users navigate complex forms.
 */
export const FormWithSections: Story = {
  render: () => {
    const formSections = [
      { id: 'robot-identity', label: 'Robot Identity', icon: Bot },
      { id: 'network-config', label: 'Network Config', icon: Radio },
      { id: 'deployment', label: 'Deployment', icon: MapPin },
      { id: 'capabilities', label: 'Capabilities', icon: Cpu },
      { id: 'alerts', label: 'Alert System', icon: Bell },
    ];

    return (
      <div className="p-8">
        <div className="mb-6">
          <h1 className="mb-2 text-4xl font-bold text-white">
            Robot Configuration
          </h1>
          <p className="text-lg text-neutral-100">
            Configure your MAiRA robot for fleet deployment
          </p>
        </div>

        <ScrollSpy.Provider sections={formSections} offset={100}>
          <div className="flex h-[80vh] gap-10 p-6">
            <ScrollSpy.Nav sections={formSections} />

            <ScrollSpy.Content className="flex-1 p-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  console.log(
                    'Robot configuration:',
                    Object.fromEntries(formData),
                  );
                  alert('Robot configuration saved successfully!');
                }}
                className="space-y-8"
                aria-label="Robot configuration form"
              >
                {/* Robot Identity Section */}
                <Card id="robot-identity" className="scroll-mt-24">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bot className="h-5 w-5" />
                      Robot Identity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="robot-name">Robot Name</Label>
                        <Input
                          id="robot-name"
                          name="robotName"
                          placeholder="e.g., MAiRA-001"
                          defaultValue="MAiRA-042"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="serial-number">Serial Number</Label>
                        <Input
                          id="serial-number"
                          name="serialNumber"
                          placeholder="SN-XXXXXX"
                          defaultValue="SN-482634"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="robot-model">Robot Model</Label>
                      <Input
                        id="robot-model"
                        name="robotModel"
                        placeholder="MAiRA, LARA, MAV"
                        defaultValue="MAiRA"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        name="description"
                        placeholder="Describe the robot's primary function"
                        rows={3}
                        defaultValue="Cognitive collaborative robot designed for warehouse automation and material handling."
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Network Configuration Section */}
                <Card id="network-config" className="scroll-mt-24">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Radio className="h-5 w-5" />
                      Network Configuration
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="ip-address">IP Address</Label>
                      <Input
                        id="ip-address"
                        name="ipAddress"
                        type="text"
                        placeholder="192.168.1.100"
                        defaultValue="192.168.1.42"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="port">Communication Port</Label>
                      <Input
                        id="port"
                        name="port"
                        type="number"
                        placeholder="8080"
                        defaultValue="8080"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="api-endpoint">API Endpoint</Label>
                      <Input
                        id="api-endpoint"
                        name="apiEndpoint"
                        type="url"
                        placeholder="https://api.neura-robotics.com"
                        defaultValue="https://api.neura-robotics.com/v2"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Deployment Location Section */}
                <Card id="deployment" className="scroll-mt-24">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Deployment Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="facility">Facility Name</Label>
                      <Input
                        id="facility"
                        name="facility"
                        placeholder="Warehouse A, Production Floor 2"
                        defaultValue="Neura Warehouse - Zone 3"
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="floor">Floor Level</Label>
                        <Input
                          id="floor"
                          name="floor"
                          placeholder="Ground, 1st, 2nd"
                          defaultValue="Ground Floor"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zone">Zone/Area</Label>
                        <Input
                          id="zone"
                          name="zone"
                          placeholder="Zone A, Section 3"
                          defaultValue="Zone 3B"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="station">Station ID</Label>
                        <Input
                          id="station"
                          name="station"
                          placeholder="ST-001"
                          defaultValue="ST-042"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="coordinates">GPS Coordinates</Label>
                      <Input
                        id="coordinates"
                        name="coordinates"
                        placeholder="48.8566° N, 2.3522° E"
                        defaultValue="37.7749° N, 122.4194° W"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Robot Capabilities Section */}
                <Card id="capabilities" className="scroll-mt-24">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Cpu className="h-5 w-5" />
                      Robot Capabilities
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="autonomous-mode">Autonomous Mode</Label>
                        <p className="text-muted-foreground text-sm">
                          Enable fully autonomous operation
                        </p>
                      </div>
                      <Switch
                        id="autonomous-mode"
                        name="autonomousMode"
                        defaultChecked
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="collision-avoidance">
                          Collision Avoidance
                        </Label>
                        <p className="text-muted-foreground text-sm">
                          Activate real-time obstacle detection
                        </p>
                      </div>
                      <Switch
                        id="collision-avoidance"
                        name="collisionAvoidance"
                        defaultChecked
                      />
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Label>Active Capabilities</Label>
                      <div
                        className="space-y-2"
                        role="group"
                        aria-label="Robot capabilities"
                      >
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="cap-picking"
                            name="capabilities"
                            value="picking"
                            defaultChecked
                          />
                          <Label htmlFor="cap-picking" className="font-normal">
                            Material Picking
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="cap-sorting"
                            name="capabilities"
                            value="sorting"
                            defaultChecked
                          />
                          <Label htmlFor="cap-sorting" className="font-normal">
                            Object Sorting
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="cap-welding"
                            name="capabilities"
                            value="welding"
                          />
                          <Label htmlFor="cap-welding" className="font-normal">
                            Precision Welding
                          </Label>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Alert System Section */}
                <Card id="alerts" className="scroll-mt-24">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5" />
                      Alert System
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="critical-alerts">Critical Alerts</Label>
                        <p className="text-muted-foreground text-sm">
                          Notify on system failures or emergency stops
                        </p>
                      </div>
                      <Switch
                        id="critical-alerts"
                        name="criticalAlerts"
                        defaultChecked
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="maintenance-alerts">
                          Maintenance Alerts
                        </Label>
                        <p className="text-muted-foreground text-sm">
                          Notify when scheduled maintenance is due
                        </p>
                      </div>
                      <Switch
                        id="maintenance-alerts"
                        name="maintenanceAlerts"
                        defaultChecked
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="performance-alerts">
                          Performance Alerts
                        </Label>
                        <p className="text-muted-foreground text-sm">
                          Notify on performance degradation or anomalies
                        </p>
                      </div>
                      <Switch
                        id="performance-alerts"
                        name="performanceAlerts"
                      />
                    </div>

                    <Separator />

                    <div className="pt-4">
                      <Button type="submit" className="w-full" size="lg">
                        Save Robot Configuration
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </form>
            </ScrollSpy.Content>
          </div>
        </ScrollSpy.Provider>
      </div>
    );
  },
};
