import { useContext, useEffect } from "react";
import { MoviesContext } from "./MoviesProvider";

export const Movies = () => {
  const { isFetching, movies, fetchMovies } = useContext(MoviesContext);
  useEffect(() => {
    fetchMovies();
  }, []);
  return isFetching ? <h3>Loading.........</h3> : movies.map((movie) => <div></div>);
};
