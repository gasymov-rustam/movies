import { tmdbApi } from "../tmdbApi";

export const getMovies = (config) => {
  return tmdbApi.get("/movie/popular", { ...config, params: config });
  // return tmdbApi.get("/movie/now_playing", { ...config, params: config });
  // return tmdbApi.get("/movie/upcoming", { ...config, params: config });
  // return tmdbApi.get("/movie/top_rated", { ...config, params: config });
};

export const getSortMovies = (config) => {
  return tmdbApi.get("/discover/movie", { ...config, params: config });
};
