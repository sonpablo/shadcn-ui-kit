import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './link';
import { ExternalLink, ArrowRight, Mail, ChevronRight } from 'lucide-react';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'sm', 'xs'],
      description: 'Size of the link text',
    },
    weight: {
      control: 'select',
      options: ['regular', 'bold'],
      description: 'Font weight of the link',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the link is disabled',
    },
    asChild: {
      control: 'boolean',
      description: 'Merge props onto child element',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

/**
 * Default link with standard styling.
 */
export const Default: Story = {
  args: {
    href: '#',
    children: 'Click here to learn more',
  },
};

/**
 * All available sizes.
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link href="#" size="md">
        Medium size (default)
      </Link>
      <Link href="#" size="sm">
        Small size
      </Link>
      <Link href="#" size="xs">
        Extra small size
      </Link>
    </div>
  ),
};

/**
 * Font weight variants.
 */
export const Weights: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link href="#" weight="regular">
        Regular weight (default)
      </Link>
      <Link href="#" weight="bold">
        Bold weight
      </Link>
    </div>
  ),
};

/**
 * Disabled state - link is not clickable.
 */
export const Disabled: Story = {
  args: {
    href: '#',
    disabled: true,
    children: 'This link is disabled',
  },
};

/**
 * Link with icon before text.
 */
export const WithStartIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link href="#">
        <Mail className="size-4" />
        Contact us
      </Link>
      <Link href="#" size="sm">
        <ExternalLink className="size-3.5" />
        External resource
      </Link>
    </div>
  ),
};

/**
 * Link with icon after text.
 */
export const WithEndIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link href="#">
        Read more
        <ArrowRight className="size-4" />
      </Link>
      <Link href="#" size="sm">
        View details
        <ChevronRight className="size-3.5" />
      </Link>
    </div>
  ),
};

/**
 * External link that opens in a new tab.
 */
export const ExternalLinkExample: Story = {
  render: () => (
    <Link
      href="https://neura-robotics.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Visit Neura Robotics
      <ExternalLink className="size-4" />
    </Link>
  ),
};

/**
 * Link used inline within a paragraph.
 */
export const InlineLink: Story = {
  render: () => (
    <p className="text-muted-foreground max-w-md text-sm">
      By continuing, you agree to our <Link href="#">Terms of Service</Link> and{' '}
      <Link href="#">Privacy Policy</Link>. For more information, please{' '}
      <Link href="#">contact support</Link>.
    </p>
  ),
};

/**
 * Using asChild to compose with other components (e.g., React Router Link).
 */
export const AsChildComposition: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <p className="text-muted-foreground text-sm">
        Use <code className="bg-muted rounded px-1">asChild</code> to merge Link
        styles onto a child element:
      </p>
      <Link asChild>
        <button type="button" onClick={() => alert('Button clicked!')}>
          I'm a button styled as a link
        </button>
      </Link>
    </div>
  ),
};

// Mock React Router Link component for demonstration
const ReactRouterLink = ({
  to,
  children,
  ...props
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <a href={to} {...props}>
    {children}
  </a>
);

// Mock Next.js Link component for demonstration
const NextLink = ({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <a href={href} {...props}>
    {children}
  </a>
);

/**
 * Integration with React Router using asChild.
 *
 * Use `asChild` to compose the Link styles with React Router's `<Link>` component.
 * This allows client-side navigation while keeping the visual styling.
 *
 * ```tsx
 * import { Link as RouterLink } from 'react-router-dom';
 * import { Link } from '@neura/ui-kit';
 *
 * <Link asChild size="sm">
 *   <RouterLink to="/dashboard">Go to Dashboard</RouterLink>
 * </Link>
 * ```
 */
export const WithReactRouter: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="bg-muted/50 rounded-lg p-4">
        <p className="text-muted-foreground mb-3 text-sm">
          Use <code className="bg-muted rounded px-1">asChild</code> with React
          Router's Link for client-side navigation:
        </p>
        <pre className="bg-muted text-foreground overflow-x-auto rounded p-3 text-xs">
          {`import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@neura/ui-kit';

<Link asChild size="sm">
  <RouterLink to="/dashboard">
    Go to Dashboard
  </RouterLink>
</Link>`}
        </pre>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-muted-foreground text-xs font-medium uppercase">
          Live Example (mocked)
        </p>
        <div className="flex gap-4">
          <Link asChild>
            <ReactRouterLink to="/home">Home</ReactRouterLink>
          </Link>
          <Link asChild size="sm">
            <ReactRouterLink to="/products">Products</ReactRouterLink>
          </Link>
          <Link asChild weight="bold">
            <ReactRouterLink to="/contact">Contact</ReactRouterLink>
          </Link>
        </div>
      </div>
    </div>
  ),
};

/**
 * Integration with Next.js Link using asChild.
 *
 * Use `asChild` to compose the Link styles with Next.js's `<Link>` component.
 *
 * ```tsx
 * import NextLink from 'next/link';
 * import { Link } from '@neura/ui-kit';
 *
 * <Link asChild size="sm">
 *   <NextLink href="/dashboard">Go to Dashboard</NextLink>
 * </Link>
 * ```
 */
export const WithNextJs: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="bg-muted/50 rounded-lg p-4">
        <p className="text-muted-foreground mb-3 text-sm">
          Use <code className="bg-muted rounded px-1">asChild</code> with
          Next.js Link for client-side navigation:
        </p>
        <pre className="bg-muted text-foreground overflow-x-auto rounded p-3 text-xs">
          {`import NextLink from 'next/link';
import { Link } from '@neura/ui-kit';

<Link asChild size="sm">
  <NextLink href="/dashboard">
    Go to Dashboard
  </NextLink>
</Link>`}
        </pre>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-muted-foreground text-xs font-medium uppercase">
          Live Example (mocked)
        </p>
        <div className="flex gap-4">
          <Link asChild>
            <NextLink href="/home">Home</NextLink>
          </Link>
          <Link asChild size="sm">
            <NextLink href="/about">About</NextLink>
          </Link>
          <Link asChild weight="bold">
            <NextLink href="/blog">Blog</NextLink>
          </Link>
        </div>
      </div>
    </div>
  ),
};

/**
 * Size and weight combinations.
 */
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-muted-foreground mb-2 text-xs font-medium uppercase">
          Regular Weight
        </h4>
        <div className="flex items-baseline gap-6">
          <Link href="#" size="md" weight="regular">
            Medium
          </Link>
          <Link href="#" size="sm" weight="regular">
            Small
          </Link>
          <Link href="#" size="xs" weight="regular">
            Extra Small
          </Link>
        </div>
      </div>
      <div>
        <h4 className="text-muted-foreground mb-2 text-xs font-medium uppercase">
          Bold Weight
        </h4>
        <div className="flex items-baseline gap-6">
          <Link href="#" size="md" weight="bold">
            Medium
          </Link>
          <Link href="#" size="sm" weight="bold">
            Small
          </Link>
          <Link href="#" size="xs" weight="bold">
            Extra Small
          </Link>
        </div>
      </div>
      <div>
        <h4 className="text-muted-foreground mb-2 text-xs font-medium uppercase">
          Disabled State
        </h4>
        <div className="flex items-baseline gap-6">
          <Link href="#" size="md" disabled>
            Medium Disabled
          </Link>
          <Link href="#" size="sm" disabled>
            Small Disabled
          </Link>
          <Link href="#" size="xs" disabled>
            XS Disabled
          </Link>
        </div>
      </div>
    </div>
  ),
};
