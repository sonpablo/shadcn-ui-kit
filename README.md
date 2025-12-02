# Shadcn UI Kit

Professional React component library built with shadcn/ui, Tailwind CSS v4, and Radix UI.

## 📦 Packages

This repository contains two packages:

- **`@neura/shadcn-ui-kit`** - React component library
- **`@neura/shadcn-ui-kit-icons`** - Icon library from Galileo's corporate Figma designs

## ✨ Features

- 🎨 **Tailwind CSS v4** - Modern utility-first CSS framework
- 🧩 **Radix UI** - Accessible, unstyled component primitives
- 🎭 **Theme Support** - Built-in light/dark mode with system preference
- 📦 **Tree-shakeable** - Import only what you need
- 💪 **TypeScript** - Full type safety
- ⚡ **Next.js Ready** - Works with Next.js 15 & 16
- ⚛️ **React 18/19** - Compatible with both versions
- 📱 **Responsive** - Mobile-first design
- ♿ **Accessible** - WCAG compliant components
- 🎨 **Icon System** - Corporate icon library with outline and filled variants

## 📦 Installation

```bash
npm install @neura/shadcn-ui-kit
# or
pnpm add @neura/shadcn-ui-kit
# or
yarn add @neura/shadcn-ui-kit
```

## 🚀 Setup

### 1. Install Peer Dependencies

This library requires Tailwind CSS v4 and React:

```bash
npm install tailwindcss@^4.0.0 react@^18.0.0 react-dom@^18.0.0
```

### 2. Configure Tailwind CSS v4

Create or update your `src/index.css` (or `app/globals.css` in Next.js):

```css
@import 'tailwindcss';
@import '@neura/shadcn-ui-kit/styles.css';

/* Additional theme customization (optional) */
@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
}

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

### 3. Setup Theme Provider (Optional, for dark mode)

Wrap your app with the `ThemeProvider`:

```tsx
import { ThemeProvider } from '@neura/shadcn-ui-kit';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="app-theme">
      {/* Your app */}
    </ThemeProvider>
  );
}
```

### 4. Configure TypeScript (if using path aliases)

Update your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 📖 Usage

### Basic Components

```tsx
import { Button, Badge, Input, Label } from '@neura/shadcn-ui-kit';

function MyComponent() {
  return (
    <div>
      <Button variant="default">Click me</Button>
      <Badge variant="destructive">New</Badge>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="your@email.com" />
      </div>
    </div>
  );
}
```

### Dropdown Menu

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Button,
} from '@neura/shadcn-ui-kit';

function MyDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

### Theme Toggle

```tsx
import { ModeToggle } from '@neura/shadcn-ui-kit';

function Header() {
  return (
    <header>
      <nav>{/* Your navigation */}</nav>
      <ModeToggle />
    </header>
  );
}
```

### Forms with Field Components

```tsx
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  Input,
  Textarea,
} from '@neura/shadcn-ui-kit';

function ContactForm() {
  return (
    <FieldGroup>
      <Field orientation="vertical">
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input id="name" placeholder="John Doe" />
        <FieldDescription>Enter your full name</FieldDescription>
      </Field>

      <Field orientation="vertical">
        <FieldLabel htmlFor="message">Message</FieldLabel>
        <Textarea id="message" placeholder="Your message..." rows={4} />
      </Field>
    </FieldGroup>
  );
}
```

## 🎨 Available Components

- **Button** - Versatile button with multiple variants
- **Badge** - Status indicators and labels
- **Input** - Text input with error states
- **Textarea** - Multi-line text input
- **Label** - Form labels with icons support
- **Separator** - Visual dividers
- **DropdownMenu** - Accessible dropdown menus
- **Field** - Form field wrapper with label, description, and error
- **ModeToggle** - Theme switcher (light/dark/system)
- **ThemeProvider** - Context provider for theme management

## 🔧 Utility Functions

```tsx
import { cn } from '@neura/shadcn-ui-kit';

// Merge Tailwind classes safely
const className = cn(
  'base-classes',
  condition && 'conditional-classes',
  props.className,
);
```

## 🌐 Next.js Integration

### App Router (Next.js 13+)

```tsx
// app/layout.tsx
import { ThemeProvider } from '@neura/shadcn-ui-kit';
import '@neura/shadcn-ui-kit/styles.css';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="system" storageKey="next-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### Pages Router (Next.js 12)

```tsx
// pages/_app.tsx
import { ThemeProvider } from '@neura/shadcn-ui-kit';
import '@neura/shadcn-ui-kit/styles.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="next-theme">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```

## 📚 Storybook

View all components in action:

```bash
npm run storybook
```

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines.

## 📄 License

MIT

## 🎨 Icon Library

Install the icon package separately:

```bash
npm install @neura/shadcn-ui-kit-icons
```

Usage:

```tsx
import { ChevronRightIcon, InfoCircleIcon } from '@neura/shadcn-ui-kit-icons/outline';
import { HeartIcon } from '@neura/shadcn-ui-kit-icons/filled';

function App() {
  return (
    <Button>
      Next <ChevronRightIcon className="ml-2 size-4" />
    </Button>
  );
}
```

**For more details**, see the [Icon System Guide](./ICONS_GUIDE.md).

## 🔗 Links

- [Documentation](https://your-docs-site.com)
- [Storybook](https://your-storybook-site.com)
- [GitHub](https://github.com/your-org/shadcn-ui-kit)
- [NPM - Components](https://www.npmjs.com/package/@neura/shadcn-ui-kit)
- [NPM - Icons](https://www.npmjs.com/package/@neura/shadcn-ui-kit-icons)

## 💡 Credits

Built with:

- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Lucide Icons](https://lucide.dev)
