import { tmdbApi } from "./tmdbApi";
import { requestInterceptor } from "./requestInterceptor";

tmdbApi.interceptors.response.use(requestInterceptor);
