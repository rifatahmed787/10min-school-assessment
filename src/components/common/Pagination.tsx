import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface PaginationProps {
  currentPage: number | null;
  totalPages: number | null;
  onPageChange: (page: number) => void;
  totalItems?: number;
  itemsPerPage?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  totalItems = 0,
  itemsPerPage = 10,
}) => {
  const generatePages = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, '...', totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pages;
  };

  const pages = generatePages();
  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex items-center justify-between bg-background px-4 py-3 sm:px-6">
      {/* Mobile Buttons */}
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 text-sm border rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-sm border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Desktop Pagination */}
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Showing <span className="font-medium">{start}</span> to{' '}
            <span className="font-medium">{end}</span> of{' '}
            <span className="font-medium">{totalItems}</span> results
          </p>
        </div>

        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="  ring-1 px-2 py-1 ring-inset ring-gray-300 hover:bg-secondary disabled:opacity-50"
            >
              <span className="sr-only">Previous</span>
              <IoIosArrowBack size={25} className='font-bold text-primary'/>
            </button>

            {pages.map((page, idx) =>
              page === '...' ? (
                <span key={idx} className="px-4 py-2 text-sm">...</span>
              ) : (
                <button
                  key={idx}
                  onClick={() => onPageChange(Number(page))}
                  className={`px-4 font-bold text-base ${
                    currentPage === page
                      ? 'bg-primary text-white'
                      : 'text-gray-900 dark:text-white hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              )
            )}

            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-2 py-1 ring-1 ring-inset ring-gray-300 hover:bg-secondary disabled:opacity-50"
            >
              <span className="sr-only">Next</span>
              <IoIosArrowForward size={25} className='font-bold text-primary'/>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
