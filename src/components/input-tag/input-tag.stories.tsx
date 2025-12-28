import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { InputTag } from './input-tag';
import { Label } from '@/components/label/label';
import { Bot, Cpu, Camera, Gauge, Shield } from 'lucide-react';

const meta: Meta<typeof InputTag> = {
  title: 'Components/InputTag',
  component: InputTag,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible input component for adding and managing tags. Supports keyboard navigation, paste handling, and customizable tag appearance. Perfect for categorization, filtering, and metadata management in robotics applications.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'Size of the input tag component',
    },
    tagType: {
      control: 'select',
      options: ['badge', 'tag'],
      description: 'Type of visual component to render (badge or tag)',
    },
    badgeVariant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'Visual style when using badge type',
    },
    tagVariant: {
      control: 'select',
      options: ['green', 'red', 'yellow', 'gray', 'default'],
      description: 'Visual style when using tag type (tags always use xs size)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input and tag removal',
    },
    maxTags: {
      control: 'number',
      description: 'Maximum number of tags allowed',
    },
    allowDuplicates: {
      control: 'boolean',
      description: 'Allow duplicate tags',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputTag>;

/**
 * Default input tag for adding robot capabilities and features.
 */
export const Default: Story = {
  render: function Render() {
    const [tags, setTags] = useState(['autonomous', 'AI-powered']);
    return (
      <div className="w-[400px] space-y-2">
        <Label htmlFor="robot-tags">Robot Capabilities</Label>
        <InputTag
          id="robot-tags"
          value={tags}
          onChange={setTags}
          placeholder="Add capability..."
        />
        <p className="text-muted-foreground text-xs">
          Press Enter or comma to add tags
        </p>
      </div>
    );
  },
};

/**
 * Available sizes: sm, default, and lg.
 */
export const Sizes: Story = {
  render: function Render() {
    const [tagsSmall, setTagsSmall] = useState(['navigation']);
    const [tagsDefault, setTagsDefault] = useState(['mapping', 'localization']);
    const [tagsLarge, setTagsLarge] = useState(['object-detection']);

    return (
      <div className="w-[500px] space-y-6">
        <div className="space-y-2">
          <Label>Small</Label>
          <InputTag
            size="sm"
            value={tagsSmall}
            onChange={setTagsSmall}
            placeholder="Add small tag..."
          />
        </div>
        <div className="space-y-2">
          <Label>Default</Label>
          <InputTag
            size="default"
            value={tagsDefault}
            onChange={setTagsDefault}
            placeholder="Add default tag..."
          />
        </div>
        <div className="space-y-2">
          <Label>Large</Label>
          <InputTag
            size="lg"
            value={tagsLarge}
            onChange={setTagsLarge}
            placeholder="Add large tag..."
          />
        </div>
      </div>
    );
  },
};

/**
 * Choose between Badge or Tag components for rendering tags.
 */
export const BadgeVsTag: Story = {
  render: function Render() {
    const [badgeTags, setBadgeTags] = useState([
      'autonomous',
      'AI-powered',
      'real-time',
    ]);
    const [tagTags, setTagTags] = useState([
      'sensor-fusion',
      'navigation',
      'mapping',
    ]);

    return (
      <div className="w-[600px] space-y-6">
        <div className="space-y-2">
          <Label>Badge Type (Compact, Rounded)</Label>
          <InputTag
            tagType="badge"
            badgeVariant="default"
            value={badgeTags}
            onChange={setBadgeTags}
            placeholder="Add capability with badge..."
          />
          <p className="text-muted-foreground text-xs">
            Perfect for: Tags, labels, metadata, compact lists
          </p>
        </div>

        <div className="space-y-2">
          <Label>Tag Type (Prominent, Bordered)</Label>
          <InputTag
            tagType="tag"
            tagVariant="default"
            value={tagTags}
            onChange={setTagTags}
            placeholder="Add feature with tag..."
          />
          <p className="text-muted-foreground text-xs">
            Perfect for: Features, categories, prominent visual markers (always
            sm size)
          </p>
        </div>
      </div>
    );
  },
};

/**
 * Different badge and tag variants for visual categorization.
 * Note: Tags always use 'xs' size for compact display in inputs.
 */
export const Variants: Story = {
  render: function Render() {
    const [tags1, setTags1] = useState(['safety', 'collision-avoidance']);
    const [tags2, setTags2] = useState(['sensor-fusion', 'real-time']);
    const [tags3, setTags3] = useState(['deprecated']);
    const [tags4, setTags4] = useState(['vision', 'planning']);
    const [tags5, setTags5] = useState(['active', 'enabled']);
    const [tags6, setTags6] = useState(['error', 'failure']);
    const [tags7, setTags7] = useState(['warning', 'attention']);
    const [tags8, setTags8] = useState(['inactive', 'disabled']);

    return (
      <div className="w-[600px] space-y-8">
        <div className="space-y-4">
          <h4 className="text-sm font-semibold">Badge Variants</h4>

          <div className="space-y-2">
            <Label>Default Badge</Label>
            <InputTag
              tagType="badge"
              badgeVariant="default"
              value={tags1}
              onChange={setTags1}
              placeholder="Add tag..."
            />
          </div>
          <div className="space-y-2">
            <Label>Secondary Badge</Label>
            <InputTag
              tagType="badge"
              badgeVariant="secondary"
              value={tags2}
              onChange={setTags2}
              placeholder="Add tag..."
            />
          </div>
          <div className="space-y-2">
            <Label>Destructive Badge (errors/warnings)</Label>
            <InputTag
              tagType="badge"
              badgeVariant="destructive"
              value={tags3}
              onChange={setTags3}
              placeholder="Add tag..."
            />
          </div>
          <div className="space-y-2">
            <Label>Outline Badge</Label>
            <InputTag
              tagType="badge"
              badgeVariant="outline"
              value={tags4}
              onChange={setTags4}
              placeholder="Add tag..."
            />
          </div>
        </div>

        <div className="space-y-4 border-t pt-6">
          <h4 className="text-sm font-semibold">Tag Variants</h4>

          <div className="space-y-2">
            <Label>Green Tag (success/active)</Label>
            <InputTag
              tagType="tag"
              tagVariant="green"
              value={tags5}
              onChange={setTags5}
              placeholder="Add tag..."
            />
          </div>
          <div className="space-y-2">
            <Label>Red Tag (error/critical)</Label>
            <InputTag
              tagType="tag"
              tagVariant="red"
              value={tags6}
              onChange={setTags6}
              placeholder="Add tag..."
            />
          </div>
          <div className="space-y-2">
            <Label>Yellow Tag (warning/pending)</Label>
            <InputTag
              tagType="tag"
              tagVariant="yellow"
              value={tags7}
              onChange={setTags7}
              placeholder="Add tag..."
            />
          </div>
          <div className="space-y-2">
            <Label>Gray Tag (inactive/disabled)</Label>
            <InputTag
              tagType="tag"
              tagVariant="gray"
              value={tags8}
              onChange={setTags8}
              placeholder="Add tag..."
            />
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Disabled and error states for form validation.
 */
export const States: Story = {
  render: function Render() {
    const [tags1, setTags1] = useState(['gripper', 'sensor-array']);
    const [tags2, setTags2] = useState(['invalid-config']);

    return (
      <div className="w-[500px] space-y-6">
        <div className="space-y-2">
          <Label>Disabled State</Label>
          <InputTag
            disabled
            value={tags1}
            onChange={setTags1}
            placeholder="Disabled..."
          />
        </div>
        <div className="space-y-2">
          <Label>Error State (Invalid Configuration)</Label>
          <InputTag
            aria-invalid
            tagVariant="destructive"
            value={tags2}
            onChange={setTags2}
            placeholder="Add valid tag..."
          />
          <p className="text-destructive text-xs">
            Configuration tags must follow naming conventions
          </p>
        </div>
      </div>
    );
  },
};

/**
 * Maximum tags limit to prevent overload in robot configurations.
 */
export const MaxTags: Story = {
  render: function Render() {
    const [tags, setTags] = useState(['vision', 'lidar', 'imu']);

    return (
      <div className="w-[500px] space-y-2">
        <Label htmlFor="max-sensors">Active Sensors (Max 5)</Label>
        <InputTag
          id="max-sensors"
          value={tags}
          onChange={setTags}
          maxTags={5}
          placeholder="Add sensor..."
        />
        <p className="text-muted-foreground text-xs">
          {tags.length}/5 sensors configured
        </p>
      </div>
    );
  },
};

/**
 * Advanced features: paste handling, custom separators, and duplicate control.
 */
export const AdvancedFeatures: Story = {
  render: function Render() {
    const [tags1, setTags1] = useState<string[]>([]);
    const [tags2, setTags2] = useState(['motion-planning']);
    const [tags3, setTags3] = useState<string[]>([]);

    return (
      <div className="w-[500px] space-y-6">
        <div className="space-y-2">
          <Label>Paste Multiple Tags</Label>
          <InputTag
            value={tags1}
            onChange={setTags1}
            placeholder="Try pasting: vision, lidar, imu"
          />
          <p className="text-muted-foreground text-xs">
            Paste comma or newline-separated values
          </p>
        </div>

        <div className="space-y-2">
          <Label>Allow Duplicates</Label>
          <InputTag
            allowDuplicates
            value={tags2}
            onChange={setTags2}
            placeholder="Add tag..."
          />
          <p className="text-muted-foreground text-xs">
            Same tag can be added multiple times
          </p>
        </div>

        <div className="space-y-2">
          <Label>Custom Separators (Space or Enter)</Label>
          <InputTag
            value={tags3}
            onChange={setTags3}
            separators={['Enter', ' ']}
            placeholder="Type tags separated by space..."
          />
        </div>
      </div>
    );
  },
};

/**
 * Real-world example: Configuring robot task requirements and capabilities.
 */
export const RobotTaskConfiguration: Story = {
  render: function Render() {
    const [requiredCapabilities, setRequiredCapabilities] = useState([
      'autonomous-navigation',
      'object-detection',
      'collision-avoidance',
    ]);
    const [sensors, setSensors] = useState(['lidar', 'rgb-camera', 'imu']);
    const [algorithms, setAlgorithms] = useState(['slam', 'path-planning']);

    return (
      <div className="w-[600px] space-y-6 rounded-lg border p-6">
        <div className="flex items-center gap-2">
          <Bot className="size-5" />
          <h3 className="text-lg font-semibold">Task Configuration</h3>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Cpu className="size-4" />
            <Label>Required Capabilities</Label>
          </div>
          <InputTag
            value={requiredCapabilities}
            onChange={setRequiredCapabilities}
            tagVariant="default"
            placeholder="Add capability..."
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Camera className="size-4" />
            <Label>Active Sensors</Label>
          </div>
          <InputTag
            value={sensors}
            onChange={setSensors}
            tagVariant="secondary"
            maxTags={8}
            placeholder="Add sensor..."
          />
          <p className="text-muted-foreground text-xs">
            {sensors.length}/8 sensors configured
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Gauge className="size-4" />
            <Label>Processing Algorithms</Label>
          </div>
          <InputTag
            value={algorithms}
            onChange={setAlgorithms}
            tagVariant="outline"
            placeholder="Add algorithm..."
          />
        </div>
      </div>
    );
  },
};

/**
 * Complete showcase with all features in a robot system settings panel.
 */
export const CompleteShowcase: Story = {
  render: function Render() {
    const [systemTags, setSystemTags] = useState(['production', 'v2.5.0']);
    const [capabilities, setCapabilities] = useState([
      'autonomous',
      'collaborative',
    ]);
    const [warnings, setWarnings] = useState(['low-battery']);
    const [modules, setModules] = useState(['navigation', 'perception']);

    return (
      <div className="w-[700px] space-y-6">
        <div className="space-y-6 rounded-lg border p-6">
          <div className="flex items-center gap-3">
            <Shield className="text-primary size-6" />
            <div>
              <h3 className="text-lg font-semibold">NEURA Robot System</h3>
              <p className="text-muted-foreground text-sm">
                Configure tags, capabilities, and modules
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="space-y-2">
              <Label>System Tags (Badges)</Label>
              <InputTag
                tagType="badge"
                value={systemTags}
                onChange={setSystemTags}
                placeholder="Add system tag..."
                size="sm"
                badgeVariant="outline"
              />
            </div>

            <div className="space-y-2">
              <Label>Robot Capabilities (Badges)</Label>
              <InputTag
                tagType="badge"
                value={capabilities}
                onChange={setCapabilities}
                placeholder="Add capability..."
                badgeVariant="default"
              />
            </div>

            <div className="space-y-2">
              <Label>Active Warnings (Tags with Color)</Label>
              <InputTag
                tagType="tag"
                value={warnings}
                onChange={setWarnings}
                placeholder="Add warning..."
                tagVariant="red"
                maxTags={5}
              />
            </div>

            <div className="space-y-2">
              <Label>Loaded Modules - Max 10 (Tags)</Label>
              <InputTag
                tagType="tag"
                value={modules}
                onChange={setModules}
                placeholder="Add module..."
                size="lg"
                tagVariant="green"
                maxTags={10}
              />
              <p className="text-muted-foreground text-xs">
                {modules.length}/10 modules loaded
              </p>
            </div>
          </div>
        </div>

        <div className="text-muted-foreground space-y-1 rounded-lg border p-4 text-sm">
          <p className="font-medium">Keyboard Shortcuts:</p>
          <ul className="list-inside list-disc space-y-0.5 text-xs">
            <li>
              <kbd className="rounded border px-1.5 py-0.5">Enter</kbd> or{' '}
              <kbd className="rounded border px-1.5 py-0.5">,</kbd> to add tag
            </li>
            <li>
              <kbd className="rounded border px-1.5 py-0.5">Backspace</kbd> to
              remove last tag
            </li>
            <li>Click X button to remove specific tag</li>
            <li>Paste comma or newline-separated values</li>
          </ul>
        </div>
      </div>
    );
  },
};

/**
 * Accessibility features: ARIA labels, keyboard navigation, and screen reader support.
 */
export const Accessibility: Story = {
  render: function Render() {
    const [tags, setTags] = useState(['accessible', 'keyboard-friendly']);

    return (
      <div className="w-[600px] space-y-6">
        <div className="space-y-4 rounded-lg border p-6">
          <h3 className="font-semibold">Accessibility Features</h3>

          <div className="space-y-2">
            <Label htmlFor="a11y-tags">Accessible Robot Features</Label>
            <InputTag
              id="a11y-tags"
              value={tags}
              onChange={setTags}
              placeholder="Add feature..."
              aria-label="Robot accessibility features input"
            />
            <p className="text-muted-foreground text-xs" id="a11y-hint">
              Add tags describing robot accessibility features
            </p>
          </div>

          <div className="bg-muted space-y-2 rounded-md p-4 text-sm">
            <p className="font-medium">Built-in Accessibility:</p>
            <ul className="list-inside list-disc space-y-1 text-xs">
              <li>Proper ARIA labels for screen readers</li>
              <li>Full keyboard navigation support</li>
              <li>Each tag removal button has descriptive label</li>
              <li>Focus management and visual indicators</li>
              <li>Disabled states properly announced</li>
              <li>Error states with aria-invalid</li>
            </ul>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Try Keyboard Navigation</Label>
          <InputTag
            value={[]}
            onChange={() => {}}
            placeholder="Type, press Enter, use Backspace..."
          />
          <p className="text-muted-foreground text-xs">
            Test: Tab to focus, type tag, Enter to add, Backspace to remove
          </p>
        </div>
      </div>
    );
  },
};
