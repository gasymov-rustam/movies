import { tmdbApi } from "../tmdbApi";

export const getMovies = (url, config) => {
  return tmdbApi.get(url, { ...config, params: config });
  // return tmdbApi.get(`${config?.url}`, { ...config, params: config });
  // return tmdbApi.get("/movie/popular", { ...config, url: url, params: config });
  // return tmdbApi.get("/movie/now_playing", { ...config, params: config });
  // return tmdbApi.get("/movie/upcoming", { ...config, params: config });
  // return tmdbApi.get("/movie/top_rated", { ...config, params: config });
};

export const getSortMovies = (config) => {
  return tmdbApi.get("/discover/movie", { ...config, params: config });
};
