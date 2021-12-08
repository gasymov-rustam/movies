import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="side-bar-wrapper">
      <div className="side-bar__sort-wrapper">
        <div className="side-bar__title" onClick={() => setOpen(!open)}>
          <span>Sorting</span>
          <span>{open ? <>&#9660;</> : <>&#10148;</>}</span>
        </div>

        {open && (
          <div className="side-bar__sort-section">
            <h4 className="side-bar__sort-section_title">Sorting By</h4>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel>Sorting By</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        )}
      </div>
    </div>
  );
};
