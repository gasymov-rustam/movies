import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="header" onMouseLeave={() => setOpen(false)}>
      <div className="header-wrapper">
        <h2
          className="header-tab"
          onClick={() => setOpen(!open)}
          onMouseEnter={() => setOpen(true)}
        >
          Movies
        </h2>
        {open && (
          <ul className="header__list-movies" onMouseLeave={() => setOpen(false)}>
            <li>
              <Link to="/" onClick={() => setOpen(false)}>
                Popular Movies
              </Link>
            </li>
            <li>
              <Link to="/nowplaying" onClick={() => setOpen(false)}>
                Now Playing Movies
              </Link>
            </li>
            <li>
              <Link to="/toprated" onClick={() => setOpen(false)}>
                Top Rated Movies
              </Link>
            </li>
            <li>
              <Link to="/upcoming" onClick={() => setOpen(false)}>
                Upcoming Movies
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};
