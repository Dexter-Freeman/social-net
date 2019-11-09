import React from 'react';
import style from './Pagination.module.css';

const Pagination = ({totalCount, pageSize, currentPage, setCurrentPage, getUsersFromPage}) => {
    debugger
    const pagesCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    return pages.map((pageNumber) => {
        return <span key={pageNumber}
            onClick={() => {
                setCurrentPage(pageNumber);
                getUsersFromPage(pageNumber);
            }}
            className={currentPage === pageNumber ? style.currentPage : style.paginationIem}>
            {pageNumber}
        </span>
    });
};

export default Pagination;