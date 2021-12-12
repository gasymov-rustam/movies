import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="header" onMouseLeave={() => setOpen(false)}>
      <div className="header-wrapper">
        <h2 className="header-tab">Movies</h2>
        <ul className="header__list-movies">
          <li>
            <Link to="/">Popular Movies</Link>
          </li>
          <li>
            <Link to="/nowplaying">Now Playing Movies</Link>
          </li>
          <li>
            <Link to="/toprated">Top Rated Movies</Link>
          </li>
          <li>
            <Link to="/upcoming">Upcoming Movies</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
