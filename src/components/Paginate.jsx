import { useContext, useMemo, useState } from "react";
import { MoviesContext } from "./MoviesProvider";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";

function createArrayByCountOfPages(num) {
  const pagesArray = [];
  for (let i = 0; i < num; i++) {
    pagesArray.push(i + 1);
  }
  return pagesArray;
}

export const Paginate = () => {
  const { isFetching, movies, totalPages, fetchMovies } = useContext(MoviesContext);
  const [page, setPage] = useState(1);
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

  return isFetching && totalPages === 0 ? (
    <></>
  ) : (
    <div>
      {/* {pagesArray.map((value) => (
        <button key={value} onClick={() => handleClick(value)}>
          {value}
        </button>
      ))} */}
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          color="secondary"
          variant="outlined"
          shape="rounded"
          size="large"
          onChange={(_, num) => fetchMovies({ page: num })}
        />
      </Stack>
    </div>
  );
};
