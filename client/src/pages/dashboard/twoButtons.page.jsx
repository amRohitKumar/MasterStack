import React from "react";
import { Chip } from "@mui/material";

const TwoButtons = ({ first, second }) => {
  return (
    <div style={{ margin: "10px 0px" }}>
      <Chip
        label={first}
        color='primary'
        sx={{ margin: "0px 5px", fontSize: "20px" }}
      />
      <Chip
        label={second}
        color='warning'
        sx={{ margin: "0px 5px", fontSize: "20px" }}
      />
    </div>
  );
};

export default TwoButtons;
