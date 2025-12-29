import { ScrollSpyContent } from './scroll-spy-content';
import { ScrollSpyNav } from './scroll-spy-nav';
import {
  ScrollSpyProvider,
  useScrollSpyContext,
  type Section,
  type ScrollSpyContextValue,
} from './scroll-spy-provider';

export const ScrollSpy = {
  Provider: ScrollSpyProvider,
  Nav: ScrollSpyNav,
  Content: ScrollSpyContent,
};

// Export types and hooks for external use
export { useScrollSpyContext, type Section, type ScrollSpyContextValue };
export { useScrollSpy } from './use-scroll-spy';
