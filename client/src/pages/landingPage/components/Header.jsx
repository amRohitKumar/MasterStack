import {
  AppBar,
  Toolbar,
  Link,
  Box,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import logo from "../../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <AppBar position="fixed" sx={{ background: "#FFF" }}>
      <Toolbar>
        <Box justifyContent={"center"}>
          <Link href="/" sx={{}}>
            <Box
              component="img"
              sx={{ height: 48, marginTop: "5px" }}
              alt="Logo"
              src={logo}
            />
          </Link>
        </Box>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            paddingLeft: 1.8,
            fontSize: "1.7rem",
            fontWeight: 900,
            letterSpacing: ".075rem",
            color: "#000",
            textDecoration: "none",
          }}
        >
          MasterStack
        </Typography>
        <Box sx={{ marginLeft: "auto", display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            sx={{ color: "#000" }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <MenuItem key={1}>
              <Typography
                textAlign="center"
                onClick={() => scrollToSection(props.about)}
              >
                About
              </Typography>
            </MenuItem>
            <MenuItem key={2}>
              <Typography
                textAlign="center"
                onClick={() => scrollToSection(props.rules)}
              >
                Rules
              </Typography>
            </MenuItem>
            <MenuItem key={3}>
              <Typography
                textAlign="center"
                onClick={() => scrollToSection(props.timeline)}
              >
                Timeline
              </Typography>
            </MenuItem>
            <MenuItem key={4}>
              <Typography textAlign="center" onClick={() => navigate("login")}>
                Login
              </Typography>
            </MenuItem>
            <MenuItem key={5}>
              <Typography
                textAlign="center"
                onClick={() => navigate("register")}
              >
                Register
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
        <Box
          sx={{
            marginLeft: "auto",
            display: { xs: "none", md: "flex" },
          }}
        >
          <Button
            sx={{ color: "#000" }}
            onClick={() => scrollToSection(props.about)}
          >
            About
          </Button>
          <Button
            sx={{ color: "#000" }}
            onClick={() => scrollToSection(props.rules)}
          >
            Rules
          </Button>
          <Button
            sx={{ color: "#000" }}
            onClick={() => scrollToSection(props.timeline)}
          >
            Timeline
          </Button>
          <Button sx={{ color: "#000" }} onClick={() => navigate("login")}>
            Login
          </Button>
          <Button sx={{ color: "#000" }} onClick={() => navigate("register")}>
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
