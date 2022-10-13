import React from "react";
import { Box, Divider } from "@mui/material";

const TwoButtons = ({ first, second }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: '1.35em' }}>
        <div style={{ width: "35%", textAlign: "right", fontWeight: "bold" }}>
          {first}
        </div>
        <div style={{ width: "55%" }}>{second}</div>
      </div>
      <Divider variant="middle" sx={{ my: "0.8rem" }} />
    </Box>
  );
};

export default TwoButtons;
