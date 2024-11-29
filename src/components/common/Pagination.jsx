import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-center items-center mt-6 space-x-2">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="btn btn-primary"
      >
        Previous
      </button>
      <span className="text-lg font-bold">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="btn btn-primary"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
