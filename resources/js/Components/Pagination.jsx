import { useState, useEffect } from "react";
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
                <button
                    className="previousBtn"
                    disabled={disablePrevious ? true : false}
                    onClick={() => {
                        setDisableNext(false);
                        setCurrentPage(currentPage - 1);
                    }}
                >
                    <span className="sr-only">Previous</span>
                    <Previous />
                </button>
                {pagesArray.map((page, index) => (
                    <button
                        key={index}
                        className={`paginationBtn ${
                            page == currentPage ? "active" : ""
                        }`}
                        onClick={() => {
                            setCurrentPage(page);
                        }}
                    >
                        {page}
                    </button>
                ))}
                <button
                    className="nextBtn"
                    onClick={() => {
                        setDisablePrevious(false);
                        setCurrentPage(currentPage + 1);
                    }}
                    disabled={disableNext ? true : false}
                >
                    <span className="sr-only">Next</span>
                    <Next />
                </button>
            </div>
        </nav>
    );
};

export default Pagination;
