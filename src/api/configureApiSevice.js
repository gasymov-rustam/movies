import { tmdbApi } from "./tmdbApi";
import { responseInterceptor } from "./responseInterceptor";

tmdbApi.interceptors.response.use(responseInterceptor);
