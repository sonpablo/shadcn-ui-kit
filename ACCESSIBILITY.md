# Accessibility (a11y) Strategy for Component Libraries

This project follows a **pragmatic accessibility strategy** tailored for component libraries:

- ✅ **Base Components**: Strict accessibility rules (users depend on these)
- ⚠️ **Stories**: Relaxed rules (these are examples, not production code)
- 🎯 **Storybook Addon**: Visual validation to prove components are accessible

## Philosophy

As a **component library**, our responsibility is to provide **accessible components by default**. Stories and examples are educational tools and don't need to follow the same strict rules.

## 📊 Two-Tier Strategy

### Tier 1: Base Components (STRICT) 🔒

**Location**: `src/components/**/*.tsx` (excluding `*.stories.tsx`)

**Rules**: ERROR level for all critical accessibility rules

- ARIA attributes must be valid
- Interactive elements must be accessible
- Images must have alt text
- Anchors must have valid hrefs
- No positive tabindex values

**Why**: Users trust that your components are accessible out of the box. This is your contract with consumers of the library.

### Tier 2: Stories & Examples (FLEXIBLE) 🎨

**Location**: `**/*.stories.tsx`, `src/stories/**/*`

**Rules**: Most rules OFF or WARN

- Allow flexibility in demonstrations
- Can show "wrong" patterns for educational purposes
- Focus on showcasing component features, not perfect examples

**Why**: Stories are for education and demonstration. Being too strict limits your ability to show different use cases and patterns.

---

## 🛠️ Tools Configured

### 1. **Storybook Addon A11y** (@storybook/addon-a11y)

Powered by [axe-core](https://github.com/dequelabs/axe-core), the world's most trusted accessibility testing engine.

**What it does:**

- Automatically scans every story for accessibility violations
- Displays results in a dedicated "Accessibility" panel in Storybook
- Highlights elements with issues directly in the UI
- Provides detailed explanations and remediation guidance

**How to use:**

1. Start Storybook: `npm run dev`
2. Navigate to any story
3. Open the "Accessibility" panel at the bottom
4. Review any violations, passes, and incomplete checks

**Configuration location:** `.storybook/preview.ts`

---

### 2. **ESLint Plugin JSX A11y** (eslint-plugin-jsx-a11y)

Static analysis for accessibility issues in JSX code.

**What it does:**

- Detects accessibility issues during development (real-time in your editor)
- **STRICT rules** for base components (`src/components/**/[!*.stories].tsx`)
- **RELAXED rules** for stories (`**/*.stories.tsx`)
- Catches issues before they reach production

**How to use:**

- Issues appear automatically in your editor (VSCode, etc.)
- Run manually: `npm run lint`
- Fix automatically: `npm run lint:fix`

**Configuration location:** `eslint.config.js`

**Important**: Stories will NOT show most a11y errors - this is intentional! Only base components need to be perfect.

---

## 📋 Key Accessibility Rules Enforced

### ARIA Attributes

- ✅ `aria-props` - ARIA roles must have all required attributes
- ✅ `aria-proptypes` - ARIA state/property values must be valid
- ✅ `aria-unsupported-elements` - ARIA roles must be used on supported elements
- ✅ `aria-activedescendant-has-tabindex` - Elements with aria-activedescendant must have tabindex
- ✅ `role-has-required-aria-props` - Elements with ARIA roles must have required attributes
- ✅ `role-supports-aria-props` - ARIA attributes must be supported by element's role

### Keyboard & Focus

- ✅ `click-events-have-key-events` - onClick handlers must have keyboard equivalent
- ✅ `tabindex-no-positive` - No positive tabindex values (use 0 or -1)
- ✅ `focus-order-semantics` - Interactive elements must be keyboard accessible

### Semantic HTML

- ✅ `heading-has-content` - Heading elements must have content
- ✅ `html-has-lang` - `<html>` element must have lang attribute
- ✅ `iframe-has-title` - `<iframe>` elements must have title

### Images & Media

- ✅ `alt-text` - `<img>` elements must have alt text
- ✅ Decorative images should use `alt=""` or `role="presentation"`

### Links & Navigation

- ✅ `anchor-has-content` - `<a>` elements must have content
- ✅ `anchor-is-valid` - Anchors must have valid href (no `#` or `javascript:void(0)`)
- ✅ `link-name` - Links must have discernible text

### Forms

- ✅ `label-has-associated-control` - Label elements must have associated form controls
- ✅ Configured for custom components: `Label`, `Input`, `Select`, `Textarea`, `Checkbox`, `Switch`, `RadioGroup`

### Interactive Elements

- ⚠️ `no-noninteractive-element-interactions` - Non-interactive elements with click handlers (warning)
- ⚠️ `no-static-element-interactions` - Static elements with event handlers (warning)
- ✅ `button-name` - Buttons must have visible text

---

## 🚀 Quick Start

### During Development

1. **In your editor**: Accessibility issues in **base components** will be highlighted
2. **In Storybook**: Open the "Accessibility" panel to validate components
3. **Before commit**: Pre-commit hooks run ESLint on staged files

### Manual Testing

```bash
# Run all linting (includes a11y for base components)
npm run lint

# Fix auto-fixable issues
npm run lint:fix

# Type checking
npm run typecheck

# Format code
npm run format
```

### What Gets Checked?

- ✅ **Base components** (`src/components/**/[!*.stories].tsx`): ALL a11y rules
- ⚠️ **Stories** (`**/*.stories.tsx`): Only critical ARIA rules
- ℹ️ **Other files**: Standard TypeScript/React rules

---

## 📚 Best Practices

### 1. **Use Semantic HTML**

```tsx
// ❌ Bad
<div onClick={handleClick}>Click me</div>

// ✅ Good
<button onClick={handleClick}>Click me</button>
```

### 2. **Provide Text Alternatives**

```tsx
// ❌ Bad
<img src="robot.jpg" />

// ✅ Good
<img src="robot.jpg" alt="MAiRA robot in assembly line" />

// ✅ Decorative images
<img src="decorative.jpg" alt="" role="presentation" />
```

### 3. **Label Form Controls**

```tsx
// ❌ Bad
<input type="text" placeholder="Email" />

// ✅ Good
<Label htmlFor="email">Email</Label>
<Input id="email" type="email" />
```

### 4. **Keyboard Navigation**

```tsx
// ❌ Bad
<div onClick={handleClick}>Clickable div</div>

// ✅ Good
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
>
  Accessible clickable div
</div>

// ✅ Better - use a button
<button onClick={handleClick}>Button</button>
```

### 5. **ARIA Attributes**

```tsx
// ❌ Bad
<button aria-invalid="yes">Submit</button>

// ✅ Good
<button aria-invalid={hasError}>Submit</button>

// ✅ With description
<Input
  id="email"
  aria-invalid={hasError}
  aria-describedby={hasError ? 'email-error' : undefined}
/>
{hasError && <p id="email-error">Please enter a valid email</p>}
```

### 6. **Focus Management**

```tsx
// ✅ Good - manage focus in modals
const dialogRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (isOpen) {
    dialogRef.current?.focus();
  }
}, [isOpen]);

<Dialog ref={dialogRef} tabIndex={-1}>
  {/* content */}
</Dialog>;
```

---

## 🎯 WCAG 2.1 Level AA Compliance

Our components aim to meet WCAG 2.1 Level AA standards:

- **Perceivable**: Information must be presentable to users in ways they can perceive
- **Operable**: UI components must be operable by all users
- **Understandable**: Information and operation must be understandable
- **Robust**: Content must be robust enough to be interpreted by a wide variety of user agents

---

## 🔧 Customizing A11y Checks

### Disable specific rules in Storybook

Edit `.storybook/preview.ts`:

```ts
a11y: {
  config: {
    rules: [
      {
        id: 'color-contrast', // Rule ID from axe-core
        enabled: false, // Disable this rule
      },
    ],
  },
}
```

### Disable ESLint rule for specific line

```tsx
// eslint-disable-next-line jsx-a11y/anchor-is-valid
<a href="#">Temporarily allowed</a>
```

### Disable for entire file

```tsx
/* eslint-disable jsx-a11y/no-static-element-interactions */
```

---

## 📖 Resources

- [axe-core Rules Documentation](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)
- [eslint-plugin-jsx-a11y Rules](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#supported-rules)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Articles](https://webaim.org/articles/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Radix UI Accessibility](https://www.radix-ui.com/primitives/docs/overview/accessibility)

---

## 🐛 Common Issues & Solutions

### Issue: "Elements with click handlers must have keyboard handlers"

**Solution**: Add `onKeyDown` handler or use a `<button>` instead

### Issue: "Form elements must have labels"

**Solution**: Use our `Label` component with proper `htmlFor` attribute

### Issue: "Buttons must have discernible text"

**Solution**: Provide text content or `aria-label` for icon-only buttons

```tsx
// ❌ Bad
<Button><ChevronRight /></Button>

// ✅ Good
<Button aria-label="Next page"><ChevronRight /></Button>
```

### Issue: "Links must have href"

**Solution**: Use proper href or convert to button if it's an action

```tsx
// ❌ Bad
<a onClick={handleClick}>Click</a>

// ✅ Good (navigation)
<Link href="/page">Click</Link>

// ✅ Good (action)
<button onClick={handleClick}>Click</button>
```

---

## 💡 Testing Strategy

1. **During Development**: ESLint catches issues in real-time
2. **In Storybook**: Visual review + automated axe checks
3. **Pre-commit**: Husky + lint-staged run checks on staged files
4. **Manual Testing**: Use keyboard-only navigation to test all interactions
5. **Screen Reader Testing**: Test with VoiceOver (macOS), NVDA (Windows), or JAWS

---

## ✅ Checklist for New Base Components

When creating or modifying **base components** (not stories):

- [ ] All interactive elements are keyboard accessible
- [ ] Form controls have associated labels (if applicable)
- [ ] Images have appropriate alt text
- [ ] Buttons have descriptive text or aria-label
- [ ] ARIA attributes are used correctly
- [ ] Color contrast meets WCAG AA standards (4.5:1 for text)
- [ ] Focus states are visible
- [ ] Component works with screen readers
- [ ] No positive tabindex values
- [ ] Error states use aria-invalid and aria-describedby
- [ ] ESLint a11y rules pass without errors

**Note**: Stories don't need to follow all these rules - they're for demonstration purposes.

---

## 🎯 Summary

| File Type                     | A11y Rules | Why                                         |
| ----------------------------- | ---------- | ------------------------------------------- |
| **Base Components** (`*.tsx`) | ✅ STRICT  | Users depend on these being accessible      |
| **Stories** (`*.stories.tsx`) | ⚠️ RELAXED | Educational examples, not production code   |
| **Storybook Addon**           | ✅ ACTIVE  | Visual proof that components are accessible |

---

**Remember**: For a component library, the **components** must be accessible, not every single example story. 🌐
