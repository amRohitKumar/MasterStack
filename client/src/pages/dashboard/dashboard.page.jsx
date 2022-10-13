import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitItems } from "../../features/user/userSlice";
import { Button, useMediaQuery, Divider, Paper, Box } from "@mui/material";
import { Container } from "@mui/system";
import DashboardItems from "./table.page";
import TwoButtons from "./twoButtons.page";
import LabTabs from "./labtabs.page";
import HeadTypography from "../landingPage/components/headTypography";
import MyModal from "./modal.page";
import { useState } from "react";
import styled from "@emotion/styled";
import WelcomeSvg from "../../assets/buy.svg";

const WelcomeDiv = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  ".leftPart": {
    width: "50%",
  },
  ".rightPart": {
    width: "50%",
    maxWidth: "550px",
    aspectRatio: "1/1",
  },
  ".innerText": {
    fontSize: "4em",
    fontStyle: "italic",
    textShadow: "4px 2px 5px #f29cf5",
  },
  ".MuiButton-root": {
    padding: "0.5em 2.5em",
    fontSize: "1.2em",
    fontWeight: "bold",
    fontStyle: "italic",
    width: "40%",
  },
  ".contentDiv": {
    display: "flex",
    flexDirection: "column",
  },

  "@media (max-width: 950px)": {
    ".innerText": {
      fontSize: "3em",
    },
  },

  "@media (max-width: 750px)": {
    flexDirection: "column",
    ".leftPart": {
      width: "100%",
    },
    ".rightPart": {
      width: "100%",
    },
    ".MuiButton-root": {
      margin: "0 auto",
    },
  },
});

const Dashboard = () => {
  var match = useMediaQuery("(min-width:600px)");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user.user);
  //console.log(user);

  const handleResume = (e) => {
    e.preventDefault();
    navigate("/items");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitItems());
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Container maxWidth={false} sx={{ maxWidth: "90%" }}>
        {user != null && (
          <>
            <Paper
              elevation={2}
              sx={{
                p: "0.6em 1em",
                textAlign: "center",
                width: match ? "65%" : "100%",
                mx: "auto",
                my: 1,
                backgroundColor: "#eaf78ac0",
                letterSpacing: "1.1px",
              }}
            >
              <a
                href="https://t.me/MasterStack"
                target="_blank"
                rel="noreferrer"
              >
                Click here
              </a>{" "}
              to join the telegram group for updates/queries.
            </Paper>
            <div>
              <HeadTypography
                size={match}
                styles={{
                  color: '#5457fa',
                  fontSize: match ? '3.5rem' : '2.5rem',
                }}
              >
                DASHBOARD
              </HeadTypography>
              <Divider variant="middle" />
            </div>

            <MyModal isModalOpen={isModalOpen} handleClose={handleModalClose} />
            <WelcomeDiv>
              <div className="leftPart">
                {user.status === 0 ? (
                  <div className="contentDiv">
                    <h3 className="innerText">
                      Let's begin by purchasing some ingredients!
                    </h3>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={handleModalOpen}
                    >
                      Start
                    </Button>
                  </div>
                ) : (
                  <div className="contentDiv">
                    {user.status === 1 ? (
                      <>
                        {Date.now() > Date.parse(user.endsAt) ? (
                          <>
                            <h3 className="innerText">
                              Your purchase time is over. Kindly Submit
                            </h3>
                            <Button
                              variant="contained"
                              size="large"
                              onClick={handleSubmit}
                            >
                              Submit
                            </Button>
                          </>
                        ) : (
                          <>
                            <h3 className="innerText">
                              Uh oh! You left in the middle. Kindly Resume
                            </h3>
                            <Button
                              variant="contained"
                              size="large"
                              onClick={handleResume}
                            >
                              Resume
                            </Button>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        <h3 className="innerText">
                          You have purchased the ingredients
                        </h3>
                      </>
                    )}
                    {/* MOVE OUT OF THIS DIV */}
                    {/* <DashboardItems list={user.items} /> */}
                  </div>
                )}
              </div>
              <div className="rightPart">
                <img src={WelcomeSvg} alt="Welcome User" />
              </div>
            </WelcomeDiv>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "2em 0 5em 0",
              }}
            >
              {user.status !== 1 && (
                <>
                  <HeadTypography
                    size={match}
                    styles={{
                      color: "#5457fa",
                      fontSize: "3.5rem",
                      textTransform: "uppercase",
                    }}
                  >
                    {user.status === 1
                      ? "Ingredients in Cart"
                      : "Purchased Ingredients"}
                  </HeadTypography>
                  <Divider
                    variant="middle"
                    style={{ marginBottom: "1.5rem", width: "100%" }}
                  />
                  <DashboardItems list={user.items} />
                </>
              )}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2rem",
              }}
            >
              <HeadTypography
                size={match}
                styles={{
                  color: '#5457fa',
                  fontSize: match ? '3.5rem' : '2.5rem',
                }}
              >
                TEAM DETAILS
              </HeadTypography>
              <Divider variant="middle" style={{ marginBottom: "1.5rem" }} />
              <Paper
                elevation={5}
                sx={{
                  width: { xl: "50%", lg: "55%", md: "65%", xs: "90%" },
                  mx: "auto",
                  p: 2,
                  fontFamily: "Consolas",
                }}
              >
                <TwoButtons first="Team Name" second={user.name} />
                <TwoButtons first="Team Leader" second={user.members[0].name} />
                <TwoButtons first="College" second={user.clgName} />
              </Paper>
              <LabTabs members={user.members} />
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
