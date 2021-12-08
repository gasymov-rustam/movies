import { tmdbApi } from "./tmdbApi";
import { requestInterceptor } from "./requestInterceptor";

tmdbApi.interceptors.request.use(requestInterceptor);
