import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { MoviesContext } from "./MoviesProvider";
import { Button } from "@mui/material";

const sortingMap = {
  titleToEnd: "original_title.asc",
  titleToStart: "original_title.desc",
  ratingFromZero: "vote_count.asc",
  ratingToZero: "vote_count.desc",
};
const sortingOptions = [
  { value: sortingMap.titleToEnd, label: "By Name A-Z" },
  { value: sortingMap.titleToStart, label: "By Name Z-A" },
  { value: sortingMap.ratingFromZero, label: "By Rating from lowest" },
  { value: sortingMap.ratingToZero, label: "By Rating from highest" },
];

export const SideBar = () => {
  const { isFetching, fetchSortMovies } = useContext(MoviesContext);
  const [open, setOpen] = useState(false);
  const [sortType, setSortType] = useState("original_title.asc");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchSortMovies({ sort_by: sortType });
  };

  return isFetching ? (
    <div className="side-bar-wrapper"></div>
  ) : (
    <div className="side-bar-wrapper">
      <div className="side-bar__sort-wrapper">
        <div className="side-bar__title" onClick={() => setOpen(!open)}>
          <span>Sorting</span>
          <span>{open ? <ArrowRightIcon /> : <ArrowDropDownIcon />}</span>
        </div>

        {open && (
          <div className="side-bar__sort-section">
            <h4 className="side-bar__sort-section_title">Sorting By</h4>

            <Box sx={{ minWidth: 120 }}>
              <form name="sort" onSubmit={handleSubmit}>
                <select
                  onChange={(e) => setSortType(e.target.value)}
                  className="side-bar__sort-type"
                  defaultValue={sortType}
                >
                  {sortingOptions.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                  )
                </select>
                <button type="submit" className="side-bar__btn">
                  Search
                </button>
              </form>

              {/* <FormControl fullWidth>
                <InputLabel>Sorting By</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Sorting"
                  onChange={handleChange}
                >
                  {sortingOptions.map((item, idx) => {
                    console.log(
                      <MenuItem key={idx} value={item.value}>
                        sdvsdvsd
                      </MenuItem>
                    );
                    <MenuItem key={idx} value={item.value}>
                      sdvsdvsd
                    </MenuItem>;
                    // <MenuItem value={10}>Ten</MenuItem>
                  })}
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl> */}
            </Box>
          </div>
        )}
      </div>
    </div>
  );
};
