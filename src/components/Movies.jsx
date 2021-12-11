import { useContext, useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { MoviesContext } from "./MoviesProvider";
import { Paginate } from "./Paginate";

export const Movies = () => {
  const { isFetching, movies, fetchMovies } = useContext(MoviesContext);
  const [moviesResults, setMoviesResults] = useState([]);
  // const setPage = { page: 13 };
  useEffect(() => {
    // fetchMovies({ ...setPage });
    fetchMovies();
  }, []);

  useEffect(() => {
    setMoviesResults(movies?.results);
  }, [movies]);

  return isFetching && !moviesResults?.length ? (
    <div className="movie-wrapper">
      <h3>Loading.........</h3>
    </div>
  ) : (
    <div className="movie-wrapper">
      {moviesResults?.map((movie) => (
        <MovieCard key={movie.id} data={movie} />
      ))}
      <Paginate />
    </div>
  );
};
