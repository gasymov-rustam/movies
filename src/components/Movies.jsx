import { useContext, useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { MoviesContext } from "./MoviesProvider";
import { Paginate } from "./Paginate";
import { SideBar } from "./SideBar";
import Title from "./Title";

export const Movies = ({ url, title, sort }) => {
  const { isFetching, movies, fetchMovies } = useContext(MoviesContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [sort]);

  useEffect(() => {
    fetchMovies(url, { page: page, ...sort });
  }, [page, sort, url]);

  return isFetching && !movies?.results?.length ? (
    <div className="movie-container">
      <SideBar />
      <div className="movie-wrapper">
        <h3>Loading.........</h3>
      </div>
    </div>
  ) : (
    <div className="movie-container">
      <Title title={title} />
      <SideBar />
      <div className="movie-wrapper">
        {movies?.results?.map((movie) => (
          <MovieCard key={movie.id} data={movie} />
        ))}
        <Paginate page={page} setPage={setPage} />
      </div>
    </div>
  );
};
