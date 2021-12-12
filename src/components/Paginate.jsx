import { useContext } from "react";
import { MoviesContext } from "./MoviesProvider";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const Paginate = ({ page, setPage }) => {
  const { isFetching, totalPages } = useContext(MoviesContext);

  return isFetching && totalPages === 0 ? (
    <></>
  ) : (
    <div className="pagination-wrapper">
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          color="secondary"
          variant="outlined"
          shape="rounded"
          size="large"
          page={page}
          onChange={(_, num) => setPage(num)}
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
//   setPage(1);
// }, [totalPages]);

// const handleChange = (num) => {
//   setPage(num);
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
