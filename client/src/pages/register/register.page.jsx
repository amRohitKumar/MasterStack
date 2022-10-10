import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../features/user/userSlice";
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  InputAdornment,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import {
  PersonIcon,
  EmailIcon,
  LockOutlinedIcon,
  NoEncryptionIcon,
  SchoolIcon,
  LocalPhoneIcon,
  CalendarMonthIcon,
  DesignServicesIcon
} from "../../icons/icons";

const Register = () => {
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
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const teamObj = {
      teamName: data.get("teamName").trim(),
      password: data.get("password"),
      clgName: data.get("clgName"),
      sponsors: data.get("sponsors")==="on"?true:false,

      members: [
        {
          name: data.get("name1").trim(),
          email: data.get("email1").trim(),
          number: data.get("phone1"),
          year: data.get("year1").trim(),
          branch: data.get("branch1").trim(),
        },
        {
          name: data.get("name2").trim(),
          email: data.get("email2").trim(),
          number: data.get("phone2"),
          year: data.get("year2").trim(),
          branch: data.get("branch2").trim(),
        },
        {
          name: data.get("name3").trim(),
          email: data.get("email3").trim(),
          number: data.get("phone3"),
          year: data.get("year3").trim(),
          branch: data.get("branch3").trim(),
        },
      ],
    };

    // logic for validation of team
    if(!teamObj.teamName || !teamObj.password) return;
    dispatch(registerUser(teamObj));
  };

  return (
    <Container sx={{width: "100%"}}>
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register to Master-Stack
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Team Details
          </Typography>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={4}>
              <TextField
                size="small"
                name="teamName"
                type="text"
                required
                fullWidth
                label="Team Name"
                color="secondary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                size="small"
                name="clgName"
                type="text"
                required
                fullWidth
                label="College Name"
                color="secondary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SchoolIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                size="small"
                name="password"
                type="password"
                required
                fullWidth
                label="Password"
                color="secondary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <NoEncryptionIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Typography variant="h6" gutterBottom>
            Team Members
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            1st Member (Teamleader)
          </Typography>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={4} lg={3}>
              <TextField
                size="small"
                name="name1"
                type="text"
                required
                fullWidth
                label="Full Name"
                color="secondary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={3}>
              <TextField
                size="small"
                name="email1"
                type="email"
                required
                fullWidth
                label="Email"
                color="secondary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={2}>
              <TextField
                size="small"
                name="phone1"
                type="number"
                required
                fullWidth
                label="Mobile Number"
                color="secondary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocalPhoneIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={2}>
              <TextField
                size="small"
                name="year1"
                type="number"
                required
                fullWidth
                label="Pursuing Year"
                color="secondary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarMonthIcon fontSize="small" />
                    </InputAdornment>
                  ),
                  inputProps: { min: 1, max: 5 }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={2}>
              <TextField
                size="small"
                name="branch1"
                type="text"
                required
                fullWidth
                label="Branch"
                color="secondary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DesignServicesIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Typography variant="overline" display="block" gutterBottom>
            2nd member
          </Typography>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={4} lg={3}>
              <TextField
                size="small"
                name="name2"
                type="text"
                required
                fullWidth
                label="Full Name"
                color="secondary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={3}>
              <TextField
                size="small"
                name="email2"
                type="email"
                required
                fullWidth
                label="Email"
                color="secondary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={2}>
              <TextField
                size="small"
                name="phone2"
                type="number"
                required
                fullWidth
                label="Mobile Number"
                color="secondary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocalPhoneIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={2}>
              <TextField
                size="small"
                name="year2"
                type="number"
                required
                fullWidth
                label="Pursuing Year"
                color="secondary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarMonthIcon fontSize="small" />
                    </InputAdornment>
                  ),
                  inputProps: { min: 1, max: 5 }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={2}>
              <TextField
                size="small"
                name="branch2"
                type="text"
                required
                fullWidth
                label="Branch"
                color="secondary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DesignServicesIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Typography variant="overline" display="block" gutterBottom>
            3rd member
          </Typography>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={4} lg={3}>
              <TextField
                size="small"
                name="name3"
                type="text"
                required
                fullWidth
                label="Full Name"
                color="secondary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={3}>
              <TextField
                size="small"
                name="email3"
                type="email"
                required
                fullWidth
                label="Email"
                color="secondary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={2}>
              <TextField
                size="small"
                name="phone3"
                type="number"
                required
                fullWidth
                label="Mobile Number"
                color="secondary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocalPhoneIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={2}>
              <TextField
                size="small"
                name="year3"
                type="number"
                required
                fullWidth
                label="Pursuing Year"
                color="secondary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarMonthIcon fontSize="small" />
                    </InputAdornment>
                  ),
                  inputProps: { min: 1, max: 5 }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={2}> 
              <TextField
                size="small"
                name="branch3"
                type="text"
                required
                fullWidth
                label="Branch"
                color="secondary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DesignServicesIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <FormControlLabel control={<Checkbox name="sponsors" defaultChecked />} label="I agree to share my details with sponsors for promotional purposes." />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ mt: 1, mb: 1 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
