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
  alignItems: "center",
  padding: "1rem 2.5rem",
}));

const Register = () => {
  const [loginData, setLoginData] = useState({
    fname: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [err, setErr] = useState("");
  const clearData = () => {
    setLoginData({ fname: "", email: "", password: "" });
    setConfirmPassword("");
    setAccept(false);
    setErr("");
  };
  const handleChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmPassword !== loginData.password) {
      setErr("Password does not match");
      return;
    }
    if (!accept) {
      setErr("You should accept the terms and conditions of use to register");
      return;
    }
    //for testing
    console.log(loginData);
    clearData();
  };
  return (
    <LoginBox>
      <Box width="100%">
        <Typography variant="h5">
          <strong>Create your account</strong>
        </Typography>
        <Typography>
          Take your first step toward a sustainable future
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          {err && <Typography color="error">Error:{err}</Typography>}
          <TextField
            margin="normal"
            size="small"
            variant="outlined"
            name="fname"
            value={loginData.fname}
            onChange={handleChange}
            label="First Name"
            type="text"
            autoComplete="off"
            fullWidth
          />
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
          <TextField
            margin="normal"
            size="small"
            type="password"
            name="confirmPassword"
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            label="Confirm Password"
            autoComplete="off"
            fullWidth
          />
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={accept}
                onChange={(e) => setAccept(e.target.checked)}
              />
            }
            label={
              <div>
                <span>I accept the </span>
                <Link to={"/terms"}>terms and conditions</Link>
              </div>
            }
            sx={{ color: "#7e7e7e", fornSize: 18 }}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Stay updated with email notifications!"
            sx={{ color: "#7e7e7e", fornSize: 18 }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ color: "white", width: "100%", margin: "18px auto" }}
          >
            SIGN UP
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
                margin: "3px",
              }}
            >
              SIGN IN WITH GOOGLE
            </Button>
          </Paper>
          <Typography color="#7e7e7e" component="div">
            <center>
              Already have an account? <Link to="/login">Sign in</Link>
            </center>
          </Typography>
        </Box>
      </Box>
    </LoginBox>
  );
};

export default Register;
