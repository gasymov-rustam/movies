import axios from "axios";

export const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  https: { headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "text/plain" } },
});
