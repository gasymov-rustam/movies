import { NowPlaying } from "../../pages/NowPlaying";
import { Popular } from "../../pages/Popular";
import { SortPage } from "../../pages/SortPage";
import { TopRated } from "../../pages/TopRated";
import { Upcoming } from "../../pages/Upcoming";

export const routesMap = [
  {
    exact: true,
    component: Popular,
    path: "/",
    url: "/movie/popular",
    title: "Popular movies",
  },
  {
    exact: true,
    component: NowPlaying,
    path: "/nowplaying",
    url: "/movie/now_playing",
    title: "Now Playing movies",
  },
  {
    exact: true,
    component: Upcoming,
    path: "/upcoming",
    url: "/movie/upcoming",
    title: "Upcoming movies",
  },
  {
    exact: true,
    component: TopRated,
    path: "/toprated",
    url: "/movie/top_rated",
    title: "Top rated movies",
  },
  {
    exact: true,
    component: SortPage,
    path: "/sort",
    url: "/discover/movie",
    title: "Sorted movies",
  },
];
