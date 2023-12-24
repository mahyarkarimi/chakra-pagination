import React from 'react';
import { Stack, Button, Text, ThemeTypings } from '@chakra-ui/react';
import { usePagination } from './usePagination';


type PaginationItemProps = {
    isCurrent?: boolean;
    page: number;
    onPageChange: (page: number) => void;
    colorScheme?: ThemeTypings['colorSchemes'];
};

type PaginationProps = {
    onPageChange: (page: number) => void;
    currentPage: number;
    colorScheme?: ThemeTypings['colorSchemes'];
    total: number;
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
                bg: 'gray.300',
            }}
            onClick={() => onPageChange(page)}
        >
            {page}
        </Button>
    );
}



export function Pagination({ currentPage, onPageChange, colorScheme, total }: PaginationProps) {
    const {
        siblingsCount,
        previousPages,
        nextPages,
        lastPage,
    } = usePagination({
        totalRegisters: total,
        page: currentPage,
    });
    if (total === 0) return '';

    return (
        <Stack direction='row' mt='8' justify='center' align='center' spacing='6' margin={1}>
            <Stack direction='row' spacing='4'>
                <Button
                    size='sm'
                    fontSize='xs'
                    width='4'
                    colorScheme={colorScheme}
                    isDisabled={currentPage == 1}
                    variant='outline'
                    _disabled={{
                        bg: `${colorScheme}.500`,
                        cursor: 'pointer',
                    }}
                >
                    &#60;
                </Button>
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

                {currentPage + siblingsCount < lastPage ? (
                    <>
                        {currentPage + 1 + siblingsCount < lastPage ? (
                            <Text color='gray.300' w='8' textAlign='center'>
                                ...
                            </Text>
                        ) : null}
                        <PaginationItem colorScheme={colorScheme} onPageChange={onPageChange} page={lastPage} />
                    </>
                ) : null}
                <Button
                    size='sm'
                    fontSize='xs'
                    width='4'
                    colorScheme={colorScheme}
                    isDisabled={currentPage === lastPage}
                    variant='outline'
                    _disabled={{
                        bg: `${colorScheme}.500`,
                        cursor: 'pointer',
                    }}
                >
                    &#62;
                </Button>
            </Stack>
        </Stack>
    );
}

export default Pagination;
