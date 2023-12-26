import { usePagination } from "./usePagination";

// describe('testing totalPages based on totalRegisters prop', () => {
//     test('simple one page of total 10 items', () => {
//         const { totalPages } = usePagination({ page: 1, totalRegisters: 10, siblingsCount: 1 });
//         expect(totalPages).toBe(1);
//     })
// })

describe('usePagination', () => {
    it('should generate pagination data correctly', () => {
      const options = {
        totalRegisters: 100,
        page: 1,
        registersPerPage: 10,
        siblingsCount: 1,
      };
  
      const pagination = usePagination(options);
  
      expect(pagination.currentPage).toBe(1);
      expect(pagination.totalPages).toBe(10);
      expect(pagination.nextPages).toEqual([2]);
      expect(pagination.previousPages).toEqual([]);
      expect(pagination.registersPerPage).toBe(10);
      expect(pagination.siblingsCount).toBe(1);
    });
  
    it('should handle zero totalRegisters correctly', () => {
      const options = {
        totalRegisters: 0,
        page: 1,
        registersPerPage: 10,
        siblingsCount: 1,
      };
  
      const pagination = usePagination(options);
  
      expect(pagination.currentPage).toBe(1);
      expect(pagination.totalPages).toBe(1);
      expect(pagination.nextPages).toEqual([]);
      expect(pagination.previousPages).toEqual([]);
      expect(pagination.registersPerPage).toBe(10);
      expect(pagination.siblingsCount).toBe(1);
    });
  
    it('should generate previous and next pages correctly', () => {
      const options = {
        totalRegisters: 100,
        page: 5,
        registersPerPage: 10,
        siblingsCount: 2,
      };
  
      const pagination = usePagination(options);
  
      expect(pagination.currentPage).toBe(5);
      expect(pagination.totalPages).toBe(10);
      expect(pagination.nextPages).toEqual([6, 7]);
      expect(pagination.previousPages).toEqual([3, 4]);
      expect(pagination.registersPerPage).toBe(10);
      expect(pagination.siblingsCount).toBe(2);
    });
  
    it('should handle currentPage at the last page correctly', () => {
      const options = {
        totalRegisters: 50,
        page: 5,
        registersPerPage: 10,
        siblingsCount: 1,
      };
  
      const pagination = usePagination(options);
  
      expect(pagination.currentPage).toBe(5);
      expect(pagination.totalPages).toBe(5);
      expect(pagination.nextPages).toEqual([]);
      expect(pagination.previousPages).toEqual([4]);
      expect(pagination.registersPerPage).toBe(10);
      expect(pagination.siblingsCount).toBe(1);
    });
  });