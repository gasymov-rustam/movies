import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <ul>
        <li>
          <NavLink exact to="/">
            Popular Movies
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/nowplaying">
            Now Playing Movies
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/toprated">
            Top Rated Movies
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/upcoming">
            Upcoming Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
