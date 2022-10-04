import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "@emotion/styled";
import { AppBar, Avatar, Box, Toolbar, Button } from "@mui/material";
import { UserCircle as UserCircleIcon } from "../../icons/user-circle";
import { AccountPopover } from "./account-popover.component";

const NavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#c451d1",
}));

export const Navbar = (props) => {
  const { onSidebarOpen, ...other } = props;
  const settingsRef = useRef(null);
  const [openAccountPopover, setOpenAccountPopover] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <NavbarRoot
        sx={{
          width: {
            lg: "100%",
          },
        }}
        {...other}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          {/* NAVBAR LOGO */}
          <Box sx={{ flexGrow: 1 }} />
          <Button
            variant="text"
            size="small"
            sx={{ ml: 1, color: "#fff" }}
            onClick={() => navigate("register")}
          >
            Register
          </Button>
          <Button
            variant="text"
            size="small"
            sx={{ ml: 1, color: "#fff" }}
            onClick={() => navigate("login")}
          >
            Login
          </Button>
          <Avatar
            onClick={() => setOpenAccountPopover(true)}
            ref={settingsRef}
            sx={{
              cursor: "pointer",
              height: 40,
              width: 40,
              ml: 3,
              mr: 2,
            }}
            src="/static/images/avatars/avatar_1.png"
          >
            <UserCircleIcon fontSize="small" />
          </Avatar>
        </Toolbar>
      </NavbarRoot>
      <AccountPopover
        anchorEl={settingsRef.current}
        open={openAccountPopover}
        onClose={() => setOpenAccountPopover(false)}
      />
    </>
  );
};

export default Navbar;
