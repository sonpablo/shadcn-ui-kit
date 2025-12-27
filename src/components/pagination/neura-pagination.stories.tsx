import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { NeuraPagination } from './neura-pagination';

const meta: Meta<typeof NeuraPagination> = {
  title: 'Components/NeuraPagination',
  component: NeuraPagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'Current active page (1-indexed)',
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'Total number of pages',
    },
    siblings: {
      control: { type: 'number', min: 0 },
      description:
        'Number of sibling pages to show on each side. Undefined shows all pages.',
    },
    showFirstLast: {
      control: 'boolean',
      description: 'Whether to always show first and last page',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NeuraPagination>;

/**
 * Basic controlled pagination. Click the pages to navigate.
 */
export const Default: Story = {
  render: function DefaultPagination() {
    const [page, setPage] = useState(1);
    return (
      <div className="space-y-4">
        <div className="text-muted-foreground text-center text-sm">
          Page {page} of 10
        </div>
        <NeuraPagination
          currentPage={page}
          totalPages={10}
          onPageChange={setPage}
        />
      </div>
    );
  },
};

/**
 * Shows all pages without ellipsis (no siblings specified).
 */
export const AllPages: Story = {
  render: function AllPagesPagination() {
    const [page, setPage] = useState(3);
    return (
      <NeuraPagination
        currentPage={page}
        totalPages={5}
        onPageChange={setPage}
      />
    );
  },
};

/**
 * With siblings=1, shows 1 page on each side of the current page.
 */
export const WithSiblings: Story = {
  render: function WithSiblingsPagination() {
    const [page, setPage] = useState(5);
    return (
      <div className="space-y-4">
        <div className="text-muted-foreground text-center text-sm">
          Page {page} of 20 (siblings=1)
        </div>
        <NeuraPagination
          currentPage={page}
          totalPages={20}
          onPageChange={setPage}
          siblings={1}
        />
      </div>
    );
  },
};

/**
 * With siblings=2, shows 2 pages on each side of the current page.
 */
export const WithMoreSiblings: Story = {
  render: function WithMoreSiblingsPagination() {
    const [page, setPage] = useState(10);
    return (
      <div className="space-y-4">
        <div className="text-muted-foreground text-center text-sm">
          Page {page} of 50 (siblings=2)
        </div>
        <NeuraPagination
          currentPage={page}
          totalPages={50}
          onPageChange={setPage}
          siblings={2}
        />
      </div>
    );
  },
};

/**
 * With text labels on Previous/Next buttons.
 */
export const WithLabels: Story = {
  render: function WithLabelsPagination() {
    const [page, setPage] = useState(3);
    return (
      <NeuraPagination
        currentPage={page}
        totalPages={10}
        onPageChange={setPage}
        siblings={1}
        labels={{
          previous: 'Previous',
          next: 'Next',
        }}
      />
    );
  },
};

/**
 * Without showing first and last page when using siblings.
 */
export const WithoutFirstLast: Story = {
  render: function WithoutFirstLastPagination() {
    const [page, setPage] = useState(5);
    return (
      <div className="space-y-4">
        <div className="text-muted-foreground text-center text-sm">
          showFirstLast=false (no first/last page shown)
        </div>
        <NeuraPagination
          currentPage={page}
          totalPages={20}
          onPageChange={setPage}
          siblings={1}
          showFirstLast={false}
        />
      </div>
    );
  },
};

/**
 * Single page - pagination is still shown but navigation is disabled.
 */
export const SinglePage: Story = {
  render: function SinglePagePagination() {
    const [page, setPage] = useState(1);
    return (
      <NeuraPagination
        currentPage={page}
        totalPages={1}
        onPageChange={setPage}
      />
    );
  },
};

/**
 * First page selected - previous button is disabled.
 */
export const FirstPage: Story = {
  render: function FirstPagePagination() {
    const [page, setPage] = useState(1);
    return (
      <NeuraPagination
        currentPage={page}
        totalPages={10}
        onPageChange={setPage}
        siblings={1}
      />
    );
  },
};

/**
 * Last page selected - next button is disabled.
 */
export const LastPage: Story = {
  render: function LastPagePagination() {
    const [page, setPage] = useState(10);
    return (
      <NeuraPagination
        currentPage={page}
        totalPages={10}
        onPageChange={setPage}
        siblings={1}
      />
    );
  },
};

/**
 * Many pages with siblings showing ellipsis on both sides.
 */
export const ManyPages: Story = {
  render: function ManyPagesPagination() {
    const [page, setPage] = useState(25);
    return (
      <div className="space-y-4">
        <div className="text-muted-foreground text-center text-sm">
          Page {page} of 100
        </div>
        <NeuraPagination
          currentPage={page}
          totalPages={100}
          onPageChange={setPage}
          siblings={2}
          labels={{
            previous: 'Prev',
            next: 'Next',
          }}
        />
      </div>
    );
  },
};

/**
 * Comparison of different sibling values.
 */
export const SiblingComparison: Story = {
  render: function SiblingComparisonPagination() {
    const [page1, setPage1] = useState(5);
    const [page2, setPage2] = useState(5);
    const [page3, setPage3] = useState(5);

    return (
      <div className="space-y-6">
        <div>
          <p className="text-muted-foreground mb-2 text-sm">
            No siblings (all pages)
          </p>
          <NeuraPagination
            currentPage={page1}
            totalPages={9}
            onPageChange={setPage1}
          />
        </div>
        <div>
          <p className="text-muted-foreground mb-2 text-sm">siblings=1</p>
          <NeuraPagination
            currentPage={page2}
            totalPages={20}
            onPageChange={setPage2}
            siblings={1}
          />
        </div>
        <div>
          <p className="text-muted-foreground mb-2 text-sm">siblings=2</p>
          <NeuraPagination
            currentPage={page3}
            totalPages={20}
            onPageChange={setPage3}
            siblings={2}
          />
        </div>
      </div>
    );
  },
};
