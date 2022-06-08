import React from 'react'
import { Pagination as Pagi } from 'semantic-ui-react'
const Pagination = ({ petsPerPage, totalPets, paginate, currentPage }) => {
    const pageNumbers = []
    const rouge = window.innerWidth < 1000 ? "red" : "black"
    const styles = {
        test: {
            display: window.innerWidth <= 768 ? "flex" : "inline-block",
            border: "2px solid #f1d0b8",
            borderRadius: "100px",
            flexFlow: window.innerWidth <= 768 ? "wrap" : 'unset',
            height: "60px",
            width: "60px",
            lineHeight: "60px",
            // textAlign: "center",
            fontSize: "20px",
            cursor: "pointer",
            fontFamily: "'Times New Roman', Times, serif",
            marginTop: window.innerWidth <= 768 ? "0" : "400px",
            marginRight: "18px",
            background: window.innerWidth <= 768 ? "red" : "black",
        }
    }
    for (let i = 1; i <= Math.ceil(totalPets / petsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="section-two">
            <div className="test">

                <nav className="pagination">
                    {pageNumbers.map(number => (
                        // <li key={number}>
                        <button
                            style={{
                                // styles.test
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
                                marginTop: "200px",
                                // marginTop: window.innerWidth <= 768 ? "0" : "400px",
                                marginRight: "18px",
                                background: "transparent"

                            }}
                            onClick={() => paginate(number)} className='carousel-btn' id={currentPage === number ? "active" : ""}>
                            {number}
                        </button>
                        // </li>
                    ))}
                </nav>
            </div>

        </div>

    )
}

export default Pagination