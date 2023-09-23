const Pagination = ({ updateData, selectPageHandler, page, showPage }) => {
  return (
    <>
      {updateData.length > 0 && (
        <div className="pagination">
          {page > 1 ? (
            <button
              onClick={() => selectPageHandler(page - 1)}
              className="btn btn-success"
            >
              Prev
            </button>
          ) : (
            <button onClick={() => selectPageHandler(page - 1)} disabled>
              Prev
            </button>
          )}

          {[...Array(Math.ceil(updateData.length / showPage))].map((_, i) => {
            return (
              <div
                key={i}
                onClick={() => selectPageHandler(i + 1)}
                className={`${page === i + 1 ? "active" : ""}`}
              >
                {i + 1}
              </div>
            );
          })}
          {page < Math.ceil(updateData.length / showPage) ? (
            <button
              onClick={() => selectPageHandler(page + 1)}
              className="btn btn-success"
            >
              Next
            </button>
          ) : (
            <button onClick={() => selectPageHandler(page + 1)} disabled>
              Next
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Pagination;
