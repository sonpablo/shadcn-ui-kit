import type { Meta, StoryObj } from '@storybook/react';
import { ReadMore } from './index';
import { Button } from '@/components/button/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/card/card';
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
      <ReadMore.Button>Read more</ReadMore.Button>
    </ReadMore>
  ),
};

/**
 * Line-based truncation with smooth animation.
 * Limits the text to 3 visible lines and animates the expansion/collapse.
 */
export const MaxLines: Story = {
  render: () => (
    <ReadMore>
      <ReadMore.Text maxLines={3}>{longText}</ReadMore.Text>
      <ReadMore.Button>Show more</ReadMore.Button>
    </ReadMore>
  ),
};

/**
 * ## Animated Expansion
 *
 * Showcases the smooth height animation when expanding/collapsing.
 * Notice the 0.3s ease-in-out transition between states.
 */
export const AnimatedExpansion: Story = {
  render: () => {
    const veryLongText = `Our advanced robot fleet management system represents the cutting edge of industrial automation technology. Designed from the ground up with scalability and reliability in mind, this comprehensive platform enables seamless coordination of multiple autonomous robots across diverse operational environments.

The system features real-time monitoring capabilities that provide instant visibility into robot status, location, battery levels, and task completion rates. Advanced AI algorithms continuously analyze performance data to optimize task allocation, predict maintenance needs, and identify opportunities for efficiency improvements.

Integration with existing enterprise systems is streamlined through our robust API framework, supporting REST, GraphQL, and WebSocket protocols. This flexibility ensures compatibility with your current infrastructure while maintaining the security and compliance standards required in modern industrial settings.

Our intuitive dashboard provides actionable insights through customizable widgets and real-time analytics, empowering operations managers to make data-driven decisions quickly and confidently.`;

    return (
      <div className="max-w-3xl space-y-6">
        <div className="border-l-primary border-l-4 pl-4">
          <h4 className="mb-3 text-lg font-semibold">
            Robot Fleet Management System
          </h4>
          <ReadMore>
            <ReadMore.Text maxLines={4} className="leading-relaxed">
              {veryLongText}
            </ReadMore.Text>
            <div className="mt-3 flex gap-2">
              <ReadMore.Button
                whenCollapsed
                className="text-primary font-medium"
              >
                <ChevronDown className="size-4" />
                Read full description
              </ReadMore.Button>
              <ReadMore.Button
                whenExpanded
                className="text-muted-foreground font-medium"
              >
                <ChevronUp className="size-4" />
                Show less
              </ReadMore.Button>
            </div>
          </ReadMore>
        </div>
      </div>
    );
  },
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
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Advanced Robot Fleet Management</CardTitle>
      </CardHeader>
      <CardContent>
        <ReadMore>
          <ReadMore.Text maxLines={3}>{longText}</ReadMore.Text>
          <ReadMore.Button>Learn more</ReadMore.Button>
        </ReadMore>
      </CardContent>
    </Card>
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
      <ReadMore.Button>[more]</ReadMore.Button>
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
