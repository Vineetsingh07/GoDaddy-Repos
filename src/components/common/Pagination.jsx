import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full py-4 shadow-lg">
      <div className="flex justify-center items-center space-x-2">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="btn bg-gray-600 hover:bg-gray-700 text-white w-full sm:w-auto transition duration-300 py-3 rounded-md text-center shadow-md"
        >
          Previous
        </button>
        <span className="text-lg font-bold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="btn bg-gray-600 hover:bg-gray-700 text-white w-full sm:w-auto transition duration-300 py-3 rounded-md text-center shadow-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
