import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const ProgressBar = (props) => {
  // const a = {`${props.value}` < 50 ? { color: "red" } : props.value < 75 ?  `${color: "orange"}`  : { color: "green" }}`;
  // const a = {`${props.value}` < 50 ? { color: "red" } : props.value < 75 ?  `${color: "orange"}`  : { color: "green" }}`;
  const { value } = props;
  // const a = `${value < 50
  //   ? color: "danger" : value < 50
  //   ? ${ color: "secondary" }
  //   : ${ color: "success" }`;
  const clr = `${value < 50 ? "inherit" : value < 75 ? "success" : "secondary"}`;

  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        color={clr}
        variant="determinate"
        {...props}
        style={{ background: "black", borderRadius: "50%" }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          style={{ fontSize: ".6em" }}
          component="div"
          className="movie-card__rate"
          color={clr}
        >
          {/* {`${Math.round(props.value)}%`} */}
          {value}
        </Typography>
      </Box>
    </Box>
  );
};
