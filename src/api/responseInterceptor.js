export const responseInterceptor = (config) => {
  config.headers.api_key = process.env.REACT_APP_TMDB_API_KEY;
  return config;
};
