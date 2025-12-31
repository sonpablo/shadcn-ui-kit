import type { Meta, StoryObj } from '@storybook/react';
import { ReadMore } from './index';
import { Button } from '@/components/button/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

const meta: Meta<typeof ReadMore> = {
  title: 'Components/ReadMore',
  component: ReadMore,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ReadMore>;

const longText = `The quick brown fox jumps over the lazy dog. This sentence is often used for testing typography and fonts because it contains every letter of the English alphabet. In the world of robotics and automation, similar comprehensive testing is crucial. Our fleet management system enables real-time monitoring and control of multiple robots simultaneously. Advanced AI algorithms optimize task allocation and routing, ensuring maximum efficiency across your entire operation. With built-in analytics and reporting features, you can track performance metrics, identify bottlenecks, and make data-driven decisions to continuously improve your robotic workflows.`;

const shortText = `This is a short text that doesn't need truncation.`;

/**
 * Basic example with character-based truncation.
 * The text is truncated at 100 characters and shows "Read more" button.
 */
export const Default: Story = {
  render: () => (
    <ReadMore>
      <ReadMore.Text maxLength={100}>{longText}</ReadMore.Text>
      <ReadMore.Button className="text-primary font-medium">
        Read more
      </ReadMore.Button>
    </ReadMore>
  ),
};

/**
 * Line-based truncation using CSS line-clamp.
 * Limits the text to 3 visible lines.
 */
export const MaxLines: Story = {
  render: () => (
    <div className="max-w-2xl">
      <ReadMore>
        <ReadMore.Text maxLines={3} className="text-base leading-relaxed">
          {longText}
        </ReadMore.Text>
        <ReadMore.Button className="text-primary font-medium">
          Show more
        </ReadMore.Button>
      </ReadMore>
    </div>
  ),
};

/**
 * Example with custom styling for text and button.
 * Demonstrates how to apply different styles to each part.
 */
export const CustomStyling: Story = {
  render: () => (
    <div className="max-w-xl">
      <ReadMore>
        <ReadMore.Text
          maxLength={150}
          className="text-muted-foreground text-lg leading-relaxed"
        >
          {longText}
        </ReadMore.Text>
        <ReadMore.Button className="text-primary hover:text-primary/80 font-semibold">
          Continue reading →
        </ReadMore.Button>
      </ReadMore>
    </div>
  ),
};

/**
 * Shows separate buttons for expand and collapse actions.
 * Uses `whenCollapsed` and `whenExpanded` props.
 */
export const WithCollapseButton: Story = {
  render: () => (
    <div className="max-w-2xl space-y-2">
      <ReadMore>
        <ReadMore.Text maxLines={2} className="text-base">
          {longText}
        </ReadMore.Text>
        <div className="flex gap-2">
          <ReadMore.Button whenCollapsed className="text-primary font-medium">
            <ChevronDown className="mr-1 inline size-4" />
            Expand
          </ReadMore.Button>
          <ReadMore.Button whenExpanded className="text-primary font-medium">
            <ChevronUp className="mr-1 inline size-4" />
            Collapse
          </ReadMore.Button>
        </div>
      </ReadMore>
    </div>
  ),
};

/**
 * Using the library's Button component with asChild prop.
 * Demonstrates composition with existing components.
 */
export const WithButtonComponent: Story = {
  render: () => (
    <div className="max-w-xl">
      <ReadMore>
        <ReadMore.Text maxLength={120} className="mb-2 text-base">
          {longText}
        </ReadMore.Text>
        <ReadMore.Button asChild>
          <Button variant="link" size="sm" className="h-auto p-0">
            Read full description
          </Button>
        </ReadMore.Button>
      </ReadMore>
    </div>
  ),
};

/**
 * Card layout example showing practical use case.
 * Common pattern for product descriptions or blog post previews.
 */
export const InCard: Story = {
  render: () => (
    <div className="bg-card text-card-foreground max-w-md rounded-lg border p-6 shadow-sm">
      <h3 className="mb-2 text-xl font-semibold">
        Advanced Robot Fleet Management
      </h3>
      <ReadMore>
        <ReadMore.Text
          maxLines={3}
          className="text-muted-foreground mb-3 text-sm leading-relaxed"
        >
          {longText}
        </ReadMore.Text>
        <ReadMore.Button className="text-primary text-sm font-medium">
          Learn more
        </ReadMore.Button>
      </ReadMore>
    </div>
  ),
};

/**
 * Multiple ReadMore instances in a list.
 * Each instance maintains its own expanded/collapsed state.
 */
export const MultipleInstances: Story = {
  render: () => {
    const items = [
      {
        title: 'MAiRA Robot',
        description:
          'The MAiRA robot is designed for precision tasks in manufacturing environments. With advanced sensors and AI-powered decision making, it can adapt to dynamic production lines and handle complex assembly operations with minimal supervision.',
      },
      {
        title: 'LARA Cobot',
        description:
          'LARA is our collaborative robot designed to work safely alongside human operators. Its intuitive interface and adaptive learning capabilities make it perfect for small to medium-sized businesses looking to automate repetitive tasks.',
      },
      {
        title: 'Fleet Control System',
        description:
          'Our centralized fleet management platform provides real-time monitoring, scheduling, and optimization for multiple robots. Advanced analytics help identify bottlenecks and improve overall operational efficiency.',
      },
    ];

    return (
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="rounded-lg border p-4">
            <h4 className="mb-2 font-semibold">{item.title}</h4>
            <ReadMore>
              <ReadMore.Text maxLength={100} className="text-sm">
                {item.description}
              </ReadMore.Text>
              <ReadMore.Button className="text-primary text-sm">
                More info
              </ReadMore.Button>
            </ReadMore>
          </div>
        ))}
      </div>
    );
  },
};

/**
 * Example with short text that doesn't need truncation.
 * The button will still appear but the text is already fully visible.
 */
export const ShortText: Story = {
  render: () => (
    <ReadMore>
      <ReadMore.Text maxLength={200}>{shortText}</ReadMore.Text>
      <ReadMore.Button className="text-primary font-medium">
        Read more
      </ReadMore.Button>
    </ReadMore>
  ),
};

/**
 * Without ellipsis when truncated.
 * Uses `showEllipsis={false}` to remove the "..." indicator.
 */
export const WithoutEllipsis: Story = {
  render: () => (
    <ReadMore>
      <ReadMore.Text maxLength={100} showEllipsis={false}>
        {longText}
      </ReadMore.Text>
      <ReadMore.Button className="text-primary ml-1 font-medium">
        [more]
      </ReadMore.Button>
    </ReadMore>
  ),
};

/**
 * Default expanded state.
 * Starts with the text fully visible and can toggle between expanded/collapsed.
 */
export const DefaultExpanded: Story = {
  render: () => (
    <div className="max-w-xl">
      <ReadMore defaultExpanded>
        <ReadMore.Text maxLines={2} className="text-base">
          {longText}
        </ReadMore.Text>
        <ReadMore.Button
          whenExpanded
          className="text-muted-foreground mt-2 text-sm"
        >
          Show less
        </ReadMore.Button>
        <ReadMore.Button
          whenCollapsed
          className="text-primary mt-2 text-sm font-medium"
        >
          Show more
        </ReadMore.Button>
      </ReadMore>
    </div>
  ),
};
