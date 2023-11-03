import { useState, useEffect } from "react";
import "./Pagination.css";
import Previous from "@/Icons/Previous";
import Next from "@/Icons/Next";

const Pagination = ({
    totalCards,
    cardsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    const [disablePrevious, setDisablePrevious] = useState(true);
    const [disableNext, setDisableNext] = useState(false);

    let pagesArray = [];
    let calculatedPages = Math.ceil(totalCards / cardsPerPage);
    for (let i = 1; i <= calculatedPages; i++) {
        pagesArray.push(i);
    }

    useEffect(() => {
        if (calculatedPages === 1) setDisableNext(true);
    }, []);

    useEffect(() => {
        switch (currentPage) {
            case 1:
                setDisablePrevious(true);
                setCurrentPage(1);
                break;
            case calculatedPages:
                setDisableNext(true);
                setCurrentPage(calculatedPages);
                break;
        }
    }, [currentPage]);

    return (
        <nav className="mt-10 pagination">
            <div className="flex justify-center -space-x-px h-10 text-base">
                {/* Previous button */}
                <button
                    className="previousBtn"
                    disabled={disablePrevious ? true : false}
                    onClick={() => {
                        setDisableNext(false);
                        setCurrentPage(currentPage - 1);
                    }}
                >
                    <span className="sr-only">Previous</span>
                    {/* Arrow icon */}
                    <Previous />
                </button>
                {/* Pages */}
                {pagesArray.map((page, index) => (
                    <button
                        key={index}
                        className={`paginationBtn ${
                            page == currentPage ? "active" : ""
                        }`}
                        onClick={() => {
                            setCurrentPage(page);
                            if (page !== 1) {
                                setDisablePrevious(false);
                            } else {
                                setDisableNext(false);
                            }
                        }}
                    >
                        {page}
                    </button>
                ))}
                {/* Next button */}
                <button
                    className="nextBtn"
                    onClick={() => {
                        setDisablePrevious(false);
                        setCurrentPage(currentPage + 1);
                    }}
                    disabled={disableNext ? true : false}
                >
                    <span className="sr-only">Next</span>
                    {/* Arrow icon */}
                    <Next />
                </button>
            </div>
        </nav>
    );
};

export default Pagination;
