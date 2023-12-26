type Options = {
    totalRegisters: number;
    page: number;
    registersPerPage?: number;
    siblingsCount?: number;
};

type Pagination = {
    totalPages: number;
    registersPerPage: number;
    currentPage: number;
    nextPages: number[];
    previousPages: number[];
    siblingsCount: number;
};

function generatePagesArray(from: number, to: number): number[] {
    return [...new Array(to - from)].map((_, index) => from + index + 1).filter((page) => page > 0);
}

export function usePagination({
    totalRegisters,
    page,
    registersPerPage = 10,
    siblingsCount = 1,
}: Options): Pagination {
    const currentPage = page;
    const totalPages = Math.max(Math.ceil(totalRegisters / registersPerPage), 1);

    const previousPages = currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : [];
    const nextPages = currentPage < totalPages ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, totalPages)) : [];

    return {
        currentPage,
        totalPages,
        nextPages,
        previousPages,
        registersPerPage,
        siblingsCount,
    };
}
