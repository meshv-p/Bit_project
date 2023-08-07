import React from 'react';
import './pagination.css'
function PaginationComponent({
    currentPage,
    totalPages,
    handlePreviousPage,
    handleNextPage,
    handlePageChange,
}) {
    const renderPageButtons = () => {
        // Generate the page buttons based on totalPages
        const pageButtons = [];
        for (let i = 1; i <= totalPages; i++) {
            const isActive = i === currentPage;
            const buttonClass = `btn btn-primary mx-2 border-2 rounded-2 ${isActive ? 'active' : ''}`;
            pageButtons.push(
                <button
                    key={i}
                    className={buttonClass}
                    disabled={isActive}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </button>
            );
        }
        return pageButtons;
    };

    return (
        <div className="pagination my-4">
            <button
                className={`btn mx-4 customSmaller ${currentPage === 1 ? 'border-0' : ''}`}
                disabled={currentPage === 1}
                onClick={handlePreviousPage}
            >
                &lt;
            </button>
            {renderPageButtons()}
            <button
                className={`btn mx-4 customSmaller ${currentPage === totalPages ? 'border-0' : ''}`}
                disabled={currentPage === totalPages}
                onClick={handleNextPage}
            >
                &gt;
            </button>
        </div>
    );
}

export default PaginationComponent;