import React, { useState } from 'react';
import './FundingTable.css';
import PaginationComponent from '../pagination/PaginationComponent';
import { Link } from 'react-router-dom';

export default function FundingTable({ card_details, columnNames, Indexes, link1, link2 }) {
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10;
  const totalPages = Math.ceil(card_details.length / entriesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Define column indexes for "invitation" and "head talk" columns.
  const invitationColumnIndex = Indexes[0];
  const headTalkColumnIndex = Indexes[1];

  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const visibleEntries = card_details.slice(startIndex, endIndex);

  return (
    <>
      <div className='container d-flex flex-column align-items-center mt-4 '>
        <table className="table table-centered table-hover-scale">
          <thead>
            <tr>
              {Object.keys(columnNames).map((columnName, index) => (
                <th key={index} className="py-4 text-center customH text-white">
                  {columnNames[columnName]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleEntries.map((funding_card_details, rowIndex) => (
              <tr key={rowIndex}>
                {Object.keys(funding_card_details).map((key, columnIndex) => {
                  const isInvitationColumn = columnIndex === invitationColumnIndex;
                  const isHeadTalkColumn = columnIndex === headTalkColumnIndex;
                  const linkArray = isInvitationColumn ? link1 : isHeadTalkColumn ? link2 : null;
                  const link = linkArray ? linkArray[rowIndex] : null;

                  return (
                    <td key={columnIndex} className="p-3 text-center customB fw-bolder">
                      {link ? (
                        <Link to={link} target='_blank'>{funding_card_details[key]}</Link>
                      ) : (
                        funding_card_details[key]
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </>
  );
}
