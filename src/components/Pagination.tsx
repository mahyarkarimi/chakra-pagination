import React, { useMemo } from 'react';
import { Stack, Button, Text, ThemeTypings } from '@chakra-ui/react';
import { usePagination } from './usePagination';

type PaginationItemProps = {
    isCurrent?: boolean;
    page: number;
    onPageChange: (page: number) => void;
    colorScheme?: ThemeTypings['colorSchemes'];
};

type PaginationProps = {
    onPageChange?: (page: number) => void;
    currentPage?: number;
    colorScheme?: ThemeTypings['colorSchemes'];
    total?: number;
    perPage?: number;
    buttonCounts?: 1 | 2;
};

function PaginationItem({ isCurrent = false, page, onPageChange, colorScheme }: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button
                size='sm'
                fontSize='xs'
                width='4'
                colorScheme={colorScheme}
                disabled
                _disabled={{
                    bg: `${colorScheme}.500`,
                    cursor: 'pointer',
                }}
            >
                {page}
            </Button>
        );
    }

    return (
        <Button
            size='sm'
            fontSize='xs'
            width='4'
            bg='gray.200'
            textColor={colorScheme}
            _hover={{
                bg: `${colorScheme}.100`,
            }}
            onClick={() => onPageChange(page)}
        >
            {page}
        </Button>
    );
}



export function Pagination({ currentPage = 1, onPageChange = () => { }, colorScheme = 'blackAlpha', total = 0, perPage = 10, buttonCounts = 1 }: PaginationProps) {
    const {
        siblingsCount,
        previousPages,
        nextPages,
        totalPages,
    } = usePagination({
        totalRegisters: total,
        page: currentPage,
        siblingsCount: buttonCounts,
        registersPerPage: perPage,
    });

    if (total === 0) return '';

    const renderPages = useMemo(() => {
        if (totalPages <= 5) {
            return new Array(totalPages).fill(0).map((_, index) => (
                <PaginationItem colorScheme={colorScheme} onPageChange={onPageChange} isCurrent={index+1 === currentPage} page={index + 1} key={index + 1} />
            ));
        }
        return (
            <>
                {currentPage > 1 + siblingsCount ? (
                    <>
                        <PaginationItem colorScheme={colorScheme} onPageChange={onPageChange} page={1} />
                        {currentPage > 2 + siblingsCount ? (
                            <Text color='gray.300' w='8' textAlign='center'>
                                ...
                            </Text>
                        ) : null}
                    </>
                ) : null}

                {previousPages.length > 0
                    ? previousPages.map((page) => (
                        <PaginationItem colorScheme={colorScheme} onPageChange={onPageChange} page={page} key={page} />
                    ))
                    : null}

                <PaginationItem colorScheme={colorScheme} onPageChange={onPageChange} page={currentPage} isCurrent />

                {nextPages.length > 0
                    ? nextPages.map((page) => (
                        <PaginationItem colorScheme={colorScheme} onPageChange={onPageChange} page={page} key={page} />
                    ))
                    : null}

                {currentPage + siblingsCount < totalPages ? (
                    <>
                        {currentPage + 1 + siblingsCount < totalPages ? (
                            <Text color='gray.300' w='8' textAlign='center'>
                                ...
                            </Text>
                        ) : null}
                        <PaginationItem colorScheme={colorScheme} onPageChange={onPageChange} page={totalPages} />
                    </>
                ) : null}
            </>
        )
    }, [currentPage, siblingsCount, previousPages, nextPages, totalPages, colorScheme]);
    return (
        <Stack direction='row' mt='8' justify='center' align='center' spacing='6' margin={1}>
            <Stack direction='row' spacing='2'>
                <Button
                    size='sm'
                    fontSize='xs'
                    width='4'
                    colorScheme={colorScheme}
                    isDisabled={currentPage == 1}
                    variant='outline'
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    &#60;
                </Button>
                {renderPages}
                <Button
                    size='sm'
                    fontSize='xs'
                    width='4'
                    colorScheme={colorScheme}
                    isDisabled={currentPage === totalPages}
                    variant='outline'
                    onClick={() => onPageChange(currentPage + 1)}
                >
                    &#62;
                </Button>
            </Stack>
        </Stack>
    );
}

export default Pagination;
