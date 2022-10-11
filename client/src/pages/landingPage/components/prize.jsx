import { Grid, styled, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const StyledGrid = styled(Grid)(({ theme }) => ({
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
  width: '85%',
  borderRadius: '1rem',
  // backgroundColor: '#d7d8f3',
}));

const Prize = (props) => {
  const match = useMediaQuery("(min-width:600px)");
  return (
    <StyledGrid container spacing={0}>
      <Grid
        md={5}
        sx={{
          paddingY: "2rem",
          paddingX: "1.4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginX: "auto",
        }}
      >
        <img
          src={props.image}
          width={match ? "80%" : "60%"}
          alt={props.position}
        />
      </Grid>
      <Grid
        md={7}
        sx={{
          padding: "0.2rem",
          display: "flex",
          marginX: "auto",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          {props.position}
        </Typography>
        <Typography
          sx={{
            fontSize: "1.3rem",
            fontWeight: "500",
          }}
        >
          Rs. {props.amount}
        </Typography>
      </Grid>
    </StyledGrid>
  );
};

export default Prize;
