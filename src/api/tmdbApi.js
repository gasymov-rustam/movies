import axios from "axios";

export const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_TMDB_API_KEY,
    access_token: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
  },
});
