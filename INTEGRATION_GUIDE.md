# Integration Guide

## 📋 Prerequisites

Before installing this library, ensure your project meets these requirements:

### Required

- **Node.js**: >= 18.0.0
- **React**: ^18.0.0 or ^19.0.0
- **React DOM**: ^18.0.0 or ^19.0.0
- **Tailwind CSS**: ^4.0.0

### Supported Frameworks

✅ **React** 18.x and 19.x  
✅ **Next.js** 15.x and 16.x  
✅ **Vite** 5.x and 7.x  
✅ **Remix** (with Vite)

---

## 🚀 Quick Start

### Step 1: Install the Library

```bash
npm install @neura/shadcn-ui-kit
```

### Step 2: Install Tailwind CSS v4

If you don't have Tailwind CSS v4 installed:

```bash
npm install tailwindcss@^4.0.0
```

---

## 📦 Setup by Framework

### 🔷 Vite + React

#### 1. Install Tailwind CSS Vite Plugin

```bash
npm install -D @tailwindcss/vite
```

#### 2. Configure Vite

Update `vite.config.ts`:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

#### 3. Create Your CSS File

Create `src/index.css`:

```css
@import 'tailwindcss';
@import '@neura/shadcn-ui-kit/styles.css';
```

**Important**: Import the library's CSS **inside** your CSS file, not in JavaScript. This allows Tailwind to process both your code and the library's components together.

#### 4. Import Your CSS in Your App

Update `src/main.tsx`:

```tsx
import './index.css'; // This includes Tailwind + library styles

import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(<App />);
```

#### 5. Start Using Components

```tsx
import { Button } from '@neura/shadcn-ui-kit';

function App() {
  return <Button>Click me</Button>;
}
```

**That's it!** 🎉

---

### 🔷 Next.js (App Router)

#### 1. Install Tailwind CSS

```bash
npm install tailwindcss@^4.0.0
```

#### 2. Create CSS File

Create `app/globals.css` with ONLY this:

```css
@import 'tailwindcss';
```

#### 3. Import Styles in Root Layout

Update `app/layout.tsx`:

```tsx
import '@neura/shadcn-ui-kit/styles.css'; // Import library styles
import './globals.css'; // Import Tailwind utilities

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

#### 4. Start Using Components

```tsx
import { Button } from '@neura/shadcn-ui-kit';

export default function Page() {
  return <Button>Click me</Button>;
}
```

**Done!** 🚀

---

### 🔷 Next.js (Pages Router)

#### 1. Install Tailwind CSS

```bash
npm install tailwindcss@^4.0.0
```

#### 2. Create CSS File

Create `styles/globals.css` with ONLY this:

```css
@import 'tailwindcss';
```

#### 3. Import Styles in \_app

Update `pages/_app.tsx`:

```tsx
import '@neura/shadcn-ui-kit/styles.css'; // Import library styles
import '@/styles/globals.css'; // Import Tailwind utilities
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

#### 4. Start Using Components

```tsx
import { Button } from '@neura/shadcn-ui-kit';

export default function Home() {
  return <Button>Click me</Button>;
}
```

**All set!** ✨

---

## 🎨 Customization

### Theme Colors

The library includes default light and dark themes. To customize colors, you can override the CSS variables in your own CSS file:

```css
/* In your index.css or globals.css */
@import 'tailwindcss';

:root {
  --primary: oklch(0.5 0.2 250); /* Custom primary color */
  --destructive: oklch(0.6 0.25 30); /* Custom destructive color */
}

.dark {
  --primary: oklch(0.7 0.2 250); /* Dark mode primary */
}
```

### Border Radius

Adjust the global border radius:

```css
:root {
  --radius: 0.5rem; /* Default is 0.625rem */
}
```

---

## 🌙 Dark Mode

The library supports dark mode out of the box. Add the `dark` class to your HTML element:

### React (Vite)

```tsx
// In your App.tsx
import { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? 'dark' : ''}>
      <button onClick={() => setIsDark(!isDark)}>Toggle Dark Mode</button>
      {/* Your components */}
    </div>
  );
}
```

### Next.js

Use the `ModeToggle` component from the library:

```tsx
import { ModeToggle, ThemeProvider } from '@neura/shadcn-ui-kit';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="system" storageKey="app-theme">
          <ModeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---

## 📚 Available Components

- **Button** - Versatile button with multiple variants
- **Badge** - Status and label badges
- **Input** - Form input fields
- **Textarea** - Multi-line text input
- **Label** - Accessible form labels
- **Dropdown Menu** - Contextual menus with keyboard navigation
- **Separator** - Visual dividers
- **Field** - Form field composition
- **ModeToggle** - Dark mode toggle button
- **ThemeProvider** - Theme management context

---

## 🛠️ TypeScript

The library is fully typed with TypeScript. IntelliSense will work out of the box.

```tsx
import { Button, type ButtonProps } from '@neura/shadcn-ui-kit';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

---

## 🐛 Troubleshooting

### Styles Not Applying

**Problem**: Components render but have no styles.

**Solution**: Ensure you've imported both CSS files in the correct order:

```tsx
import '@neura/shadcn-ui-kit/styles.css'; // Must be FIRST
import './index.css'; // Then your app CSS
```

### Dark Mode Not Working

**Problem**: Dark mode toggle doesn't change colors.

**Solution**: Ensure the `dark` class is applied to a parent element:

```tsx
<html className={isDark ? 'dark' : ''}>{/* ... */}</html>
```

### Tailwind Classes Not Working

**Problem**: Custom Tailwind classes in your project don't work.

**Solution**: Make sure you've installed `@tailwindcss/vite` and added it to your Vite config:

```ts
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### Build Errors in Next.js

**Problem**: Build fails with CSS-related errors.

**Solution**: Ensure you're using Next.js 15+ with built-in Tailwind CSS v4 support.

---

## 📖 Examples

### Form Example

```tsx
import {
  Field,
  FieldLabel,
  FieldDescription,
  Input,
  Button,
} from '@neura/shadcn-ui-kit';

function LoginForm() {
  return (
    <form className="space-y-4">
      <Field orientation="vertical">
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input id="email" type="email" placeholder="you@example.com" />
        <FieldDescription>We'll never share your email.</FieldDescription>
      </Field>

      <Field orientation="vertical">
        <FieldLabel htmlFor="password">Password</FieldLabel>
        <Input id="password" type="password" />
      </Field>

      <Button type="submit" className="w-full">
        Sign In
      </Button>
    </form>
  );
}
```

### Dropdown Menu Example

```tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Button,
} from '@neura/shadcn-ui-kit';

function UserMenu() {
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

---

## 🤝 Support

For issues, questions, or contributions, visit:

- **GitHub**: https://github.com/your-org/shadcn-ui-kit
- **Documentation**: https://your-org.github.io/shadcn-ui-kit
- **Storybook**: https://storybook.your-org.com

---

## 📄 License

MIT © Your Name
