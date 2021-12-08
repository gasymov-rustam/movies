import { useContext, useEffect } from "react";
import { getPopularMovies } from "../api/newApi";
import { MoviesContext } from "./MoviesProvider";

export const Movies = () => {
  const { isFetching, movies, fetchMovies } = useContext(MoviesContext);
  useEffect(() => {
    fetchMovies();
  }, []);

  // useEffect(() => {
  //   (async function () {
  //     const response = await fetch(
  //       `https://api.themoviedb.org/3/movie/popular?api_key=46f45eb020f80ccc706c90b8b70c63bd&page=5`
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //   })();
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/popular?api_key=46f45eb020f80ccc706c90b8b70c63bd&page=5`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);
  return isFetching ? <h3>Loading.........</h3> : <div>{console.log(movies)}</div>;
};
