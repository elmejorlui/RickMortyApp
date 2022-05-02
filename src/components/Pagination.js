import React from "react";

const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const previusPage = () => {
    onPrevious();
  };

  const nextPage = () => {
    onNext();
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button
              type="button"
              onClick={previusPage}
              className="btn page-link"
            >
              PREVIOUS
            </button>
          </li>
        ) : null}

        {next ? (
          <li className="page-item">
            <li className="page-item">
              <button
                type="button"
                onClick={nextPage}
                className="btn page-link"
              >
                NEXT
              </button>
            </li>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
