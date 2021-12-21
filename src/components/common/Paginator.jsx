import React from "react";


const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];


    if (currentPage === 1) {
        for (let i = currentPage; i <= currentPage + 2; i++) {
            pages.push(i);
        }
    } else if (currentPage < pagesCount) {
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            pages.push(i);
        }
    } else {
        for (let i = currentPage - 2; i <= currentPage; i++) {
            pages.push(i);
        }
    }

    return (

        <div>
            {
                pages.map(p => {
                    return <span key={p}
                                 onClick={() => onPageChanged(p)}>{p}</span>
                })
            }
        </div>

    )
}

export default Paginator;