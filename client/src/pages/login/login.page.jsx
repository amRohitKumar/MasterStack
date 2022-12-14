import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../features/user/userSlice";

import {
  Button,
  TextField,
  Link,
  Grid,
  Container,
  Typography,
  Box,
  InputAdornment,
  Avatar,
} from "@mui/material";
import {
  PersonIcon,
  LockOutlinedIcon,
  NoEncryptionIcon,
} from "../../icons/icons";

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loggedIn = useSelector(store => store.user.loggedIn);

  useEffect(() => {
    if (loggedIn) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    }
  }, [loggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const teamObj = {
      teamName: data.get("teamName").trim(),
      password: data.get("password"),
    };
    if(!teamObj.teamName || !teamObj.password) return;
    dispatch(loginUser(teamObj));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in to Master-Stack
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Team Name"
            name="teamName"
            color="secondary"
            autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            variant="outlined"
            name="password"
            label="Password"
            type="password"
            color="secondary"
            id="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <NoEncryptionIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="secondary"
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Register Here"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LogIn;
