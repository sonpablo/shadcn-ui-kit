/**
 * Mock API utilities for Storybook examples
 * Simulates server-side data fetching with delay
 */

import { type SortingState } from '@tanstack/react-table';
import { robots, type Robot } from './robots-data';

export interface FetchParams {
  pageIndex: number;
  pageSize: number;
  sorting: SortingState;
}

export interface FetchResult<T> {
  data: T[];
  totalCount: number;
}

/**
 * Simulates a server-side API call with sorting and pagination
 * @param params - Pagination and sorting parameters
 * @param delay - Simulated network delay in ms (default: 500)
 */
export const simulateFetch = (
  params: FetchParams,
  delay = 500,
): Promise<FetchResult<Robot>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const sortedData = [...robots];

      // Apply sorting on server
      if (params.sorting.length > 0) {
        const sort = params.sorting[0];
        sortedData.sort((a, b) => {
          const aValue = a[sort.id as keyof Robot];
          const bValue = b[sort.id as keyof Robot];

          if (typeof aValue === 'string' && typeof bValue === 'string') {
            return sort.desc
              ? bValue.localeCompare(aValue)
              : aValue.localeCompare(bValue);
          }
          if (typeof aValue === 'number' && typeof bValue === 'number') {
            return sort.desc ? bValue - aValue : aValue - bValue;
          }
          return 0;
        });
      }

      // Apply pagination on server
      const start = params.pageIndex * params.pageSize;
      const paginatedData = sortedData.slice(start, start + params.pageSize);

      resolve({
        data: paginatedData,
        totalCount: robots.length,
      });
    }, delay);
  });
};

