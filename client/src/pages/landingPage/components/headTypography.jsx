import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const HeadTypography = styled(Typography)(({ size, styles }) =>
  size
    ? {
        display: "flex",
        alignItems: "center",
        fontWeight: "200",
        fontSize: "2.5rem",
        justifyContent: "center",
        ...styles,
      }
    : {
        display: "flex",
        justifyContent: "center",
        fontWeight: "400",
        fontSize: "1.9rem",
        ...styles,
      }
);

export default HeadTypography;
