import { Movies } from "../components/Movies";

export const NowPlaying = () => {
  return (
    <>
      <Movies url="/movie/now_playing" title="Now Playing movies" />
    </>
  );
};
