import { tmdbApi } from "../tmdbApi";

export const getMovies = (url, config) => {
  return tmdbApi.get(url, { ...config, params: config });
  // return tmdbApi.get("/movie/top_rated", { ...config, params: config });
};

export const getSortMovies = (config) => {
  return tmdbApi.get("/discover/movie", { ...config, params: config });
};
