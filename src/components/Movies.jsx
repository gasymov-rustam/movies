import { useContext, useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { MoviesContext } from "./MoviesProvider";

export const Movies = () => {
  const { isFetching, movies, fetchMovies } = useContext(MoviesContext);
  const [moviesResults, setMoviesResults] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    setMoviesResults(movies?.results);
  }, [movies]);

  return isFetching && !moviesResults?.length ? (
    <h3>Loading.........</h3>
  ) : (
    <div className="movie-wrapper">
      {moviesResults?.map((movie) => (
        <MovieCard key={movie.id} data={movie} />
      ))}
    </div>
  );
};
