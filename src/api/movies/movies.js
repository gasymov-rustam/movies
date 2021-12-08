import { tmdbApi } from "../tmdbApi";

export const getMovies = (config) => {
  return tmdbApi.get("/movie/popular", { config });
};
