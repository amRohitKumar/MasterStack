import styled from "@emotion/styled";
import { Box, Grid, List, ListItem, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import rules from "../../../assets/rules.png";
import HeadTypography from "./headTypography";
import workflow from "../../../assets/workflow.jpeg";
import React from "react";
const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: "list-item",
  fontSize: "1.22rem",
  fontWeight: "100",
}));
const Rules = React.forwardRef((props, ref) => {
  var match = useMediaQuery("(min-width:600px)");
  return (
    <Container
      ref={ref}
      sx={
        match
          ? {
              padding: "4rem",
            }
          : {
              padding: "3rem",
              paddingX: "1rem",
            }
      }
    >
      <Grid container spacing={2}>
        <Grid item sm={6} xs={12}>
          <HeadTypography size={match} styles={{ color: "#8D9EF4" }}>
            RULES
          </HeadTypography>
          <List sx={{ listStyleType: "disc", pl: 4 }}>
            <StyledListItem>
              To be eligible for prizes, make sure you use the correct email
              address of the team leader and carry proper identification.
            </StyledListItem>
            <StyledListItem>
              In case of any query/issues, write it on the telegram group.
            </StyledListItem>
            <StyledListItem>
              Blatantly copying any existing repository/project for prototype
              submission will lead to disqualification.
            </StyledListItem>
            <StyledListItem>
              Violation of any rule(s) may lead to disqualification.
            </StyledListItem>
          </List>
        </Grid>
        <Grid
          item
          sm={6}
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
        >
          <Box component="img" sx={{ width: "100%" }} alt="Rules" src={rules} />
        </Grid>
        <Grid
          item
          sm={6}
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
        >
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <img src={workflow} width="100%" maxHeight="37rem" />
          </Grid>
        </Grid>
        <Grid item sm={6} xs={12}>
          <HeadTypography size={match} styles={{ color: "#FE7163" }}>
            WORKFLOW
          </HeadTypography>
          <List sx={{ listStyleType: "disc", pl: 4 }}>
            <StyledListItem>
              You will have to register yourselves on the website that will be
              provided soon.
            </StyledListItem>
            <StyledListItem>
              Teams with a size of exactly 3 are to be formed.
            </StyledListItem>
            <StyledListItem>
              No person should belong to multiple teams.
            </StyledListItem>
            <StyledListItem>
              While registering, you have set your team name and password which
              will be used to log in for buying the tech stack and further
              rounds.
            </StyledListItem>
            <StyledListItem>
              You will be allowed 5 minutes and a limited virtual amount to buy
              ingredients (tech stacks) to build your application.
            </StyledListItem>
            <StyledListItem>
              You will be served starters, main course, and dessert each
              containing some tech stacks.
            </StyledListItem>
            <StyledListItem>
              Each tech stack has some associated points. The total points of
              the bought item will add to your final scores. So choose wisely.
            </StyledListItem>
            <StyledListItem>
              Failing to use any bought ingredient (tech stack) will reduce your
              points associated with that ingredient. So make sure you use all
              the bought ingredients.
            </StyledListItem>
            <StyledListItem>
              You are supposed to only use bought ingredients (tech stacks) to
              prepare your dish (the final application). Using any item not
              bought by you will bring down your score/lead to disqualification.
            </StyledListItem>
            <StyledListItem>
              Each team has to make a private GitHub repository for uploading
              their code with all the commit history.
            </StyledListItem>
            <StyledListItem>
              The mode of submission of the proposal, prototype, and GitHub link
              will be communicated later.
            </StyledListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
});
export default Rules;
