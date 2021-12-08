import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "content-type": "application/json;charset=utf-8",
  },

  params: {
    api_key: process.env.REACT_APP_TMDB_API_KEY,
  },
});

api.interceptors.response.use(
  (response) => [response.data, null],
  (error) => [null, error]
);

export function getPopularMovies(params) {
  return api.get(`/movie/popular`, { params });
}
