import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Pagination as PaginationComponent } from './Pagination';
import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

const meta = {
  component: PaginationComponent,
} satisfies Meta<typeof PaginationComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pagination: Story = {
  args: {
    colorScheme: 'teal',
    total: 100
  },
  render: ({ colorScheme, total, ...props}) => {
    const [page, setPage] = useState(1);
    return (
        <ChakraProvider>
            <PaginationComponent currentPage={page} onPageChange={setPage} total={total} colorScheme={colorScheme} />
        </ChakraProvider>
    )
  }
};