import type { Preview } from '@storybook/react-vite';
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',

      // Configure axe-core options
      // Full list: https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter
      config: {
        rules: [
          {
            // Ensure elements with ARIA roles have required attributes
            id: 'aria-required-attr',
            enabled: true,
          },
          {
            // Ensure ARIA attributes are valid and spelled correctly
            id: 'aria-valid-attr',
            enabled: true,
          },
          {
            // Ensure button has visible text
            id: 'button-name',
            enabled: true,
          },
          {
            // Ensure every form element has a label
            id: 'label',
            enabled: true,
          },
          {
            // Ensure links have discernible text
            id: 'link-name',
            enabled: true,
          },
          {
            // Ensure all interactive elements can be accessed by keyboard
            id: 'focus-order-semantics',
            enabled: true,
          },
        ],
      },

      // Define which elements to include/exclude from accessibility checks
      // options: {
      //   runOnly: {
      //     type: 'tag',
      //     values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'], // Check WCAG 2.0 and 2.1 Level A and AA
      //   },
      // },
    },

    options: {
      storySort: {
        order: ['Overview', 'Design System', 'Components', 'Patterns', '*'],
      },
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
