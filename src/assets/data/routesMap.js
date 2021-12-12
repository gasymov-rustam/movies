export const routesMap = [
  {
    exact: true,
    component: "Popular",
    path: "/",
    url: "/movie/popular",
    title: "Popular movies",
  },
  {
    exact: true,
    component: "NowPlaying",
    path: "/nowplaying",
    url: "/movie/now_playing",
    title: "Now Playing movies",
  },
  {
    exact: true,
    component: "Upcoming",
    path: "/upcoming",
    url: "/movie/upcoming",
    title: "Upcoming movies",
  },
  {
    exact: true,
    component: "TopRated",
    path: "/toprated",
    url: "/movie/top_rated",
    title: "Top rated movies",
  },
];
