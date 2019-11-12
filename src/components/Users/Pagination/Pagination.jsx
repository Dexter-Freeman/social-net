import React, {useState} from 'react';
import style from './Pagination.module.css';

const Pagination = ({totalCount, pageSize, currentPage, setCurrentPage, getUsersFromPage, portionSize = 10}) => {
    const pagesCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    const portionsCount = Math.ceil(totalCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return <div>
        { portionNumber > 1 ? <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button> : `` }
        { pages.filter((pageNumber) => pageNumber >= leftPortionPageNumber && pageNumber <= rightPortionPageNumber)
            .map((pageNumber) => {
                return <span key={pageNumber} 
                        onClick={() => {
                            setCurrentPage(pageNumber);
                            getUsersFromPage(pageNumber);
                        }} 
                        className={currentPage === pageNumber ? style.currentPage : style.paginationIem}> 
                        {pageNumber}
                    </span>
            }) }
        { portionsCount > portionNumber ? <button onClick={() => setPortionNumber(portionNumber + 1)} >Next</button> : `` }
    </div>

    // return pages.map((pageNumber) => {
    //     return ({portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}} >Prev</button> }
    //     <span key={pageNumber}
    //         onClick={() => {
    //             setCurrentPage(pageNumber);
    //             getUsersFromPage(pageNumber);
    //         }}
    //         className={currentPage === pageNumber ? style.currentPage : style.paginationIem}>
    //         {pageNumber}
    //     </span>)
    // });
};

export default Pagination;