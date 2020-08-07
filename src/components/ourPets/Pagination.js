import React from 'react'
import { Pagination as Pagi } from 'semantic-ui-react'
const Pagination = ({ petsPerPage, totalPets, paginate, currentPage }) => {
    const pageNumbers = []
    // const styles = {
    //     test: {
    //         display: "inline-block",
    //         border: "2px solid #f1d0b8",
    //         borderRadius: "100px",
    //         height: "60px",
    //         width: "60px",
    //         lineHeight: "60px",
    //         // textAlign: "center",
    //         fontSize: "20px",
    //         cursor: "pointer",
    //         fontFamily: "'Times New Roman', Times, serif",
    //         marginTop: window.innerWidth <= 765 ? "400px" : "0",
    //         marginRight: "18px",
    //         background: window.innerWidth <= 765 ? "red" : "black",
    //     }
    // }
    for (let i = 1; i <= Math.ceil(totalPets / petsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className="pagination">
            {pageNumbers.map(number => (
                // <li key={number}>
                <button
                    style={{
                        display: "inline-block",
                        border: "2px solid #f1d0b8",
                        borderRadius: "100px",
                        height: "60px",
                        width: "60px",
                        lineHeight: "60px",
                        // textAlign: "center",
                        fontSize: "20px",
                        cursor: "pointer",
                        fontFamily: "'Times New Roman', Times, serif",
                        marginTop: "400px",
                        marginRight: "18px",
                        background: "transparent"

                    }}
                    onClick={() => paginate(number)} className='carousel-btn' id={currentPage === number ? "active" : ""}>
                    {number}
                </button>
                // </li>
            ))}
        </nav>
    )
}

export default Pagination