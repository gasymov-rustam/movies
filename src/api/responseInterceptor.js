export const responseInterceptor = (config) => {
  // console.log(config);
  config.headers.api_key = process.env.REACT_APP_TMDB_API_KEY;
  return config;
};
