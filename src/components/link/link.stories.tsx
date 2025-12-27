import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './link';
import {
  ExternalLink,
  ArrowRight,
  Mail,
  ChevronRight,
  FileText,
  Bot,
  Settings,
  HelpCircle,
} from 'lucide-react';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A styled link component that provides consistent typography and interaction patterns.

## Sizes
- **md**: Medium (14px) - Default size for most links
- **sm**: Small (13px) - For compact UIs
- **xs**: Extra small (12px) - For fine print and captions

## Weights
- **regular**: Normal font weight (default)
- **bold**: Bold font weight for emphasis

## Features
- Disabled state support
- Icon support (start/end positions)
- \`asChild\` pattern for framework integration (React Router, Next.js)
- Accessible by default (proper hover, focus, active states)
        `,
      },
    },
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

// =============================================================================
// BASIC EXAMPLES
// =============================================================================

/**
 * ## Default
 *
 * Standard link with default styling (medium size, regular weight).
 */
export const Default: Story = {
  args: {
    href: '#',
    children: 'Click here to learn more',
  },
};

// =============================================================================
// SIZES & WEIGHTS
// =============================================================================

/**
 * ## Sizes & Weights
 *
 * All available size and weight combinations for different contexts.
 */
export const SizesAndWeights: Story = {
  render: () => (
    <div className="space-y-6 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Regular Weight
        </h4>
        <div className="flex flex-col gap-3">
          <Link href="#" size="md" weight="regular">
            Medium size (14px) - Default for most links
          </Link>
          <Link href="#" size="sm" weight="regular">
            Small size (13px) - For compact UIs
          </Link>
          <Link href="#" size="xs" weight="regular">
            Extra small size (12px) - For fine print
          </Link>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Bold Weight
        </h4>
        <div className="flex flex-col gap-3">
          <Link href="#" size="md" weight="bold">
            Medium bold - For emphasis
          </Link>
          <Link href="#" size="sm" weight="bold">
            Small bold - For compact emphasis
          </Link>
          <Link href="#" size="xs" weight="bold">
            Extra small bold - Rarely used
          </Link>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Use <code>size="md"</code> for body text,{' '}
        <code>size="sm"</code> for secondary content, and <code>size="xs"</code>{' '}
        for captions.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// WITH ICONS
// =============================================================================

/**
 * ## With Icons
 *
 * Links work well with icons at the start or end position.
 */
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Icons at Start
        </h4>
        <div className="flex flex-col gap-3">
          <Link href="#">
            <Mail className="size-4" />
            Contact Support
          </Link>
          <Link href="#" size="sm">
            <Bot className="size-3.5" />
            View Robot Details
          </Link>
          <Link href="#" size="xs">
            <HelpCircle className="size-3" />
            Help Documentation
          </Link>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Icons at End
        </h4>
        <div className="flex flex-col gap-3">
          <Link href="#">
            Read Full Report
            <ArrowRight className="size-4" />
          </Link>
          <Link href="#" size="sm">
            View Fleet Status
            <ChevronRight className="size-3.5" />
          </Link>
          <Link href="#" size="xs">
            Documentation
            <ExternalLink className="size-3" />
          </Link>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Match icon size to text size (size-4 for md,
        size-3.5 for sm, size-3 for xs).
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// STATES
// =============================================================================

/**
 * ## States
 *
 * Links support different interactive states including disabled.
 */
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Interactive States
        </h4>
        <div className="flex flex-col gap-3">
          <Link href="#">Default state - Hover, focus, and active styles</Link>
          <Link href="#" className="hover:underline">
            With underline on hover
          </Link>
          <Link href="#" weight="bold">
            Bold for extra emphasis
          </Link>
        </div>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Disabled State
        </h4>
        <div className="flex flex-col gap-3">
          <Link href="#" disabled>
            This link is disabled (not clickable)
          </Link>
          <Link href="#" disabled size="sm">
            <Settings className="size-3.5" />
            Disabled with icon
          </Link>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Disabled links are grayed out and not
        clickable. They're announced as disabled to screen readers.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// EXTERNAL LINKS
// =============================================================================

/**
 * ## External Links
 *
 * Best practices for links that open in a new tab or navigate to external sites.
 */
export const ExternalLinks: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          External Link Pattern
        </h4>
        <div className="flex flex-col gap-3">
          <Link
            href="https://neura-robotics.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Neura Robotics Website
            <ExternalLink className="size-4" />
          </Link>
          <Link
            href="https://docs.neura-robotics.com"
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
          >
            API Documentation
            <ExternalLink className="size-3.5" />
          </Link>
          <Link
            href="https://github.com/neura-robotics"
            target="_blank"
            rel="noopener noreferrer"
            size="xs"
          >
            GitHub Repository
            <ExternalLink className="size-3" />
          </Link>
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="text-muted-foreground mb-2 text-xs font-semibold">
          Accessibility Best Practices
        </h4>
        <ul className="text-muted-foreground space-y-1 text-xs">
          <li>
            ✓ Always use <code>target="_blank"</code> for external links
          </li>
          <li>
            ✓ Include <code>rel="noopener noreferrer"</code> for security
          </li>
          <li>
            ✓ Add <ExternalLink className="inline size-3" /> icon to indicate
            new tab
          </li>
          <li>✓ Screen readers will announce "opens in new window"</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### External Link Pattern

When linking to external sites, always:

\`\`\`tsx
<Link
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  External Link
  <ExternalLink className="size-4" />
</Link>
\`\`\`

The \`rel="noopener noreferrer"\` is important for security and performance.
        `,
      },
    },
  },
};

// =============================================================================
// INLINE USAGE
// =============================================================================

/**
 * ## Inline Usage
 *
 * Links used within text content and paragraphs.
 */
export const InlineUsage: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="max-w-md space-y-4">
        <div>
          <h4 className="text-muted-foreground mb-2 text-xs font-medium uppercase">
            In Body Text
          </h4>
          <p className="text-muted-foreground text-sm">
            The MAiRA collaborative robot is designed for{' '}
            <Link href="#" size="sm">
              industrial automation
            </Link>{' '}
            and can be deployed in various{' '}
            <Link href="#" size="sm">
              manufacturing environments
            </Link>
            . Learn more about our{' '}
            <Link href="#" size="sm">
              robotics solutions
            </Link>
            .
          </p>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-2 text-xs font-medium uppercase">
            In Legal Text
          </h4>
          <p className="text-muted-foreground text-xs">
            By continuing, you agree to our{' '}
            <Link href="#" size="xs">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="#" size="xs">
              Privacy Policy
            </Link>
            . For more information, please{' '}
            <Link href="#" size="xs">
              contact support
            </Link>
            .
          </p>
        </div>

        <div>
          <h4 className="text-muted-foreground mb-2 text-xs font-medium uppercase">
            In Lists
          </h4>
          <ul className="text-muted-foreground space-y-2 text-sm">
            <li>
              <Link href="#" size="sm">
                Getting Started Guide
              </Link>{' '}
              - Setup and configuration
            </li>
            <li>
              <Link href="#" size="sm">
                API Reference
              </Link>{' '}
              - Complete API documentation
            </li>
            <li>
              <Link href="#" size="sm">
                Troubleshooting
              </Link>{' '}
              - Common issues and solutions
            </li>
          </ul>
        </div>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> Match link size to surrounding text (sm for
        body, xs for captions).
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// =============================================================================
// FRAMEWORK INTEGRATION
// =============================================================================

// Mock framework link components for demonstration
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
 * ## Framework Integration
 *
 * Use the asChild pattern to integrate with React Router, Next.js, and other routing libraries.
 */
export const FrameworkIntegration: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="mb-2 text-sm font-semibold">React Router</h4>
        <pre className="bg-muted text-foreground mb-3 overflow-x-auto rounded p-3 text-xs">
          {`import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@neura/ui-kit';

<Link asChild>
  <RouterLink to="/dashboard">
    Dashboard
  </RouterLink>
</Link>`}
        </pre>
        <div className="flex gap-3">
          <Link asChild>
            <ReactRouterLink to="/robots">Robot Fleet</ReactRouterLink>
          </Link>
          <Link asChild size="sm">
            <ReactRouterLink to="/analytics">Analytics</ReactRouterLink>
          </Link>
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="mb-2 text-sm font-semibold">Next.js</h4>
        <pre className="bg-muted text-foreground mb-3 overflow-x-auto rounded p-3 text-xs">
          {`import NextLink from 'next/link';
import { Link } from '@neura/ui-kit';

<Link asChild>
  <NextLink href="/dashboard">
    Dashboard
  </NextLink>
</Link>`}
        </pre>
        <div className="flex gap-3">
          <Link asChild>
            <NextLink href="/fleet">Fleet Management</NextLink>
          </Link>
          <Link asChild size="sm">
            <NextLink href="/settings">Settings</NextLink>
          </Link>
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="mb-2 text-sm font-semibold">Button Styled as Link</h4>
        <pre className="bg-muted text-foreground mb-3 overflow-x-auto rounded p-3 text-xs">
          {`<Link asChild>
  <button onClick={handleClick}>
    Trigger Action
  </button>
</Link>`}
        </pre>
        <Link asChild>
          <button type="button" onClick={() => alert('Action triggered!')}>
            I'm a button styled as a link
          </button>
        </Link>
      </div>

      <p className="text-muted-foreground text-xs">
        💡 <strong>Tip:</strong> The <code>asChild</code> prop uses Radix UI's
        Slot component to merge props onto the child element.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### asChild Pattern

The \`asChild\` prop allows you to compose the Link styling with any element or component:

**Benefits:**
- Keep consistent styling across your app
- Work with any routing library
- Type-safe when used with TypeScript
- No wrapper elements in the DOM

**Common Use Cases:**
- React Router Link
- Next.js Link
- Remix Link
- Buttons that look like links
        `,
      },
    },
  },
};

// =============================================================================
// COMPLETE SHOWCASE
// =============================================================================

/**
 * ## Complete Showcase
 *
 * Real-world example showing links in a Neura Robotics dashboard context.
 */
export const CompleteShowcase: Story = {
  render: () => (
    <div className="bg-card text-card-foreground w-[600px] space-y-6 rounded-lg border p-6 shadow-sm">
      <div>
        <h3 className="mb-2 text-lg font-semibold">MAiRA-001 Robot Profile</h3>
        <p className="text-muted-foreground text-sm">
          Collaborative robot deployed at Munich Plant A
        </p>
      </div>

      <div className="space-y-4">
        <div className="border-b pb-3">
          <h4 className="mb-2 text-sm font-medium">Quick Actions</h4>
          <div className="flex flex-wrap gap-3">
            <Link href="#" size="sm">
              <Bot className="size-3.5" />
              View Live Status
            </Link>
            <Link href="#" size="sm">
              <Settings className="size-3.5" />
              Configuration
            </Link>
            <Link href="#" size="sm">
              <FileText className="size-3.5" />
              Task History
            </Link>
          </div>
        </div>

        <div className="border-b pb-3">
          <h4 className="mb-2 text-sm font-medium">Documentation</h4>
          <div className="flex flex-col gap-2">
            <Link
              href="https://docs.neura-robotics.com"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
            >
              MAiRA User Manual
              <ExternalLink className="size-3.5" />
            </Link>
            <Link
              href="https://api.neura-robotics.com"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
            >
              API Reference
              <ExternalLink className="size-3.5" />
            </Link>
            <Link href="#" size="sm">
              Troubleshooting Guide
              <ChevronRight className="size-3.5" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-medium">Related Resources</h4>
          <p className="text-muted-foreground text-xs leading-relaxed">
            Learn more about{' '}
            <Link href="#" size="xs">
              fleet management
            </Link>
            ,{' '}
            <Link href="#" size="xs">
              predictive maintenance
            </Link>
            , or{' '}
            <Link href="#" size="xs">
              safety protocols
            </Link>
            . For technical support, please{' '}
            <Link href="#" size="xs">
              contact our team
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="bg-muted/50 rounded-md p-3 text-xs">
        <p className="text-muted-foreground">
          💡 This example demonstrates links in various contexts: navigation,
          external documentation, and inline text.
        </p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Real-World Usage

This showcase demonstrates:
- **Navigation links** with icons for quick actions
- **External links** to documentation (with proper security attributes)
- **Inline links** within descriptive text
- **Consistent sizing** matched to context (sm for actions, xs for inline)
- **Icon usage** for visual hierarchy and affordance

Links are fundamental to navigation and content discovery. Use them thoughtfully to guide users through your application.
        `,
      },
    },
  },
};

// =============================================================================
// ACCESSIBILITY
// =============================================================================

/**
 * ## Accessibility
 *
 * The Link component follows accessibility best practices.
 */
export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="mb-2 text-sm font-semibold">Accessibility Features</h4>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>
            ✓ <strong>Keyboard navigation</strong>: Tab to focus, Enter to
            activate
          </li>
          <li>
            ✓ <strong>Focus visible</strong>: Clear focus ring for keyboard
            users
          </li>
          <li>
            ✓ <strong>Screen reader</strong>: Announced as link with proper role
          </li>
          <li>
            ✓ <strong>Disabled state</strong>: Aria-disabled and not in tab
            order
          </li>
          <li>
            ✓ <strong>External links</strong>: Announced as "opens in new
            window"
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          Best Practices
        </h4>
        <div className="space-y-3">
          <div>
            <p className="mb-1 text-sm font-medium">✓ Descriptive Link Text</p>
            <div className="flex gap-4">
              <Link href="#" size="sm">
                View robot documentation
              </Link>
              <Link href="#" size="sm" className="line-through opacity-50">
                Click here
              </Link>
            </div>
            <p className="text-muted-foreground mt-1 text-xs">
              Use meaningful text, avoid "click here" or "read more"
            </p>
          </div>

          <div>
            <p className="mb-1 text-sm font-medium">✓ Icon-only Links</p>
            <Link href="#" size="sm" aria-label="Robot settings">
              <Settings className="size-3.5" />
            </Link>
            <p className="text-muted-foreground mt-1 text-xs">
              Always include aria-label for icon-only links
            </p>
          </div>

          <div>
            <p className="mb-1 text-sm font-medium">✓ Focus Indicators</p>
            <Link href="#" size="sm">
              Tab to me and see the focus ring
            </Link>
            <p className="text-muted-foreground mt-1 text-xs">
              Never remove focus outlines - they're critical for accessibility
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
### Accessibility Guidelines

**Do's:**
- Use descriptive link text that makes sense out of context
- Add aria-label for icon-only links
- Maintain visible focus indicators
- Use disabled state appropriately (not in tab order)
- Include rel="noopener noreferrer" for external links

**Don'ts:**
- Use generic text like "click here" or "read more"
- Remove focus outlines (use focus-visible instead)
- Rely solely on color to indicate links
- Make non-interactive elements look like links

**Testing:**
- Navigate with keyboard only (Tab, Shift+Tab, Enter)
- Test with screen reader (NVDA, JAWS, VoiceOver)
- Verify focus is visible
- Check color contrast meets WCAG AA (4.5:1 minimum)
        `,
      },
    },
  },
};
