import { ReadMoreProvider } from './read-more-provider';
import { ReadMoreText } from './read-more-text';
import { ReadMoreButton } from './read-more-button';

import type { ReadMoreTextProps } from './read-more-text';
import type { ReadMoreButtonProps } from './read-more-button';

/**
 * ReadMore - Compound component for truncating and expanding text
 *
 * @example
 * ```tsx
 * <ReadMore>
 *   <ReadMore.Text maxLength={100}>
 *     This is a very long text that will be truncated...
 *   </ReadMore.Text>
 *   <ReadMore.Button>Read more</ReadMore.Button>
 * </ReadMore>
 * ```
 */
const ReadMore = Object.assign(ReadMoreProvider, {
  Text: ReadMoreText,
  Button: ReadMoreButton,
  Toggle: ReadMoreButton, // Alias
});

export { ReadMore, type ReadMoreTextProps, type ReadMoreButtonProps };
