import { useCallback, useContext } from "react";
import { MoviesContext } from "./MoviesProvider";
import MuiPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const Pagination = ({ page, onChange }) => {
  const { isFetching, totalPages } = useContext(MoviesContext);

  const handleChange = useCallback(
    (_, num) => {
      onChange(num);
    },
    [onChange]
  );

  return isFetching && totalPages === 0 ? (
    <></>
  ) : (
    <div className="pagination-wrapper">
      <Stack spacing={2}>
        <MuiPagination
          count={totalPages}
          color="secondary"
          variant="outlined"
          shape="rounded"
          size="large"
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
};

// const pagesArray = useMemo(() => createArrayByCountOfPages(totalPages), [totalPages]);
// const handleClick = (e) => {
//   // fetchMovies({ page: Number(e.target.value) });
// };

// useEffect(() => {
//   onChange(1);
// }, [totalPages]);

// const handleChange = (num) => {
//   onChange(num);
//   fetchMovies({ page: page + 1 });
// };

/* {pagesArray.map((value) => (
        <button key={value} onClick={() => handleClick(value)}>
          {value}
        </button>
      ))} */

// function createArrayByCountOfPages(num) {
//   const pagesArray = [];
//   for (let i = 0; i < num; i++) {
//     pagesArray.push(i + 1);
//   }
//   return pagesArray;
// }
