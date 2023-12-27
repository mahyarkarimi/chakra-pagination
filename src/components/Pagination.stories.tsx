import React, { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Pagination as PaginationComponent } from './Pagination';
import { useState } from 'react';
import { Box, ChakraProvider, ColorModeScript, DarkMode, useColorMode } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react'

const decorators = [
  (Story, context) => {
    return (
      <ChakraProvider>
        <Story />
      </ChakraProvider>
    );
  }
];

const meta = {
  component: PaginationComponent,
  decorators
} satisfies Meta<typeof PaginationComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pagination: Story = {
  args: {
    colorScheme: 'teal',
    total: 100
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
  render: ({ colorScheme, total, ...props }) => {
    const [page, setPage] = useState(1);
    const { setColorMode } = useColorMode();

    useEffect(() => {
      setColorMode('light')
    }, []);
    return (
      <PaginationComponent {...props} currentPage={page} onPageChange={setPage} total={total} colorScheme={colorScheme} />
    )
  }
};

export const DarkPagination: Story = {
  args: {
    colorScheme: 'teal',
    total: 55
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: ({ colorScheme, total, ...props }) => {
    const { setColorMode } = useColorMode();
    const [page, setPage] = useState(1);

    useEffect(() => {
      setColorMode('dark')
    }, []);
    return (
      <PaginationComponent  {...props} currentPage={page} onPageChange={setPage} total={total} colorScheme={colorScheme} />
    )
  }
};