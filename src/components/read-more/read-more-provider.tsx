/* eslint-disable react-refresh/only-export-components */
'use client';

import * as React from 'react';

interface ReadMoreContextValue {
  isExpanded: boolean;
  toggleExpanded: () => void;
}

const ReadMoreContext = React.createContext<ReadMoreContextValue | undefined>(
  undefined,
);

export function useReadMore() {
  const context = React.useContext(ReadMoreContext);
  if (!context) {
    throw new Error(
      'ReadMore components must be used within ReadMore.Provider',
    );
  }
  return context;
}

interface ReadMoreProviderProps {
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export function ReadMoreProvider({
  children,
  defaultExpanded = false,
}: ReadMoreProviderProps) {
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded);

  const toggleExpanded = React.useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const value = React.useMemo(
    () => ({
      isExpanded,
      toggleExpanded,
    }),
    [isExpanded, toggleExpanded],
  );

  return (
    <ReadMoreContext.Provider value={value}>
      {children}
    </ReadMoreContext.Provider>
  );
}
