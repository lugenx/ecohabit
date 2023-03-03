import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Divider,
  Paper,
} from "@mui/material";
import styled from "@emotion/styled";

const LoginBox = styled(Box)(({ theme }) => ({
  display: "flex",
  bgcolor: "white",
  flex: 1,
  minHeight: "100vh",
  alignItems: "center",
  padding: "2.5rem",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const clearData = () => {
    setLoginData({ email: "", password: "" });
  };
  const handleChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    clearData();
  };
  return (
    <LoginBox>
      <Box width="100%">
        <Typography variant="h5">
          <strong>Welcome back</strong>
        </Typography>
        <Typography>Have you been staying green?</Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            size="small"
            variant="outlined"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            label="Email address"
            type="email"
            autoComplete="off"
            fullWidth
          />
          <TextField
            margin="normal"
            size="small"
            type="password"
            name="password"
            variant="outlined"
            value={loginData.password}
            onChange={handleChange}
            label="Password"
            autoComplete="off"
            fullWidth
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Keep me signed in for the future"
            sx={{ color: "#7e7e7e", fornSize: 20 }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ color: "white", width: "100%", margin: "20px auto" }}
          >
            SIGN IN
          </Button>
          <Divider>or</Divider>
          <Paper
            sx={{
              textAlign: "center",
              padding: "5px",
              fontWeight: "500",
              verticalAlign: "center",
              margin: "14px 0",
            }}
          >
            <Button
              variant="text"
              color="inherit"
              sx={{
                backgroundImage: "url('./images/Google.png')",
                backgroundRepeat: "no-repeat",
                height: "1rem",
                padding: "0 20px",
                margin: "5px",
              }}
            >
              SIGN IN WITH GOOGLE
            </Button>
          </Paper>
          <Typography color="#7e7e7e" component="div">
            <center>
              Are you new here ? <Link to="/register">Sign Up</Link>
            </center>
          </Typography>
        </Box>
      </Box>
    </LoginBox>
  );
};

export default Login;
