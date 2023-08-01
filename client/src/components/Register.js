import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/auth.js";
import { useRegisterContext } from "../contexts/RegisterContext.js";
import Alert from "./Alert.js";

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

const RegisterBox = styled(Box)(({ theme }) => ({
  display: "flex",
  bgcolor: "white",
  flex: 1,
  alignItems: "center",
  padding: "1rem 2.5rem",
  minHeight: "630px",
  maxWidth: "40rem",
}));

const Register = ({ toggleForm }) => {
  const {
    registerData,
    setRegisterData,
    setRegisterSuccessMessageVisible,
    registerFailMessage,
    setRegisterFailMessage,
  } = useRegisterContext();

  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const clearData = () => {
    setRegisterData((prevState) => ({ ...prevState, password: "" }));
    setConfirmPassword("");
    setAcceptTerms(false);
    setErr("");
  };

  const handleChange = (e) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirmPassword !== registerData.password) {
      clearData();
      setErr("Password does not match");
      return;
    }
    if (!acceptTerms) {
      setErr("You should accept the terms and conditions of use to register");
      return;
    }
    try {
      const res = await register(registerData);
      if (res.status === 201) {
        navigate("/login");
        setRegisterSuccessMessageVisible(true);
      } else if (res.status === 400) {
        const json = await res.json();
        setRegisterFailMessage(json.error);
      }
    } catch (error) {
      console.error(error);
      setRegisterFailMessage(
        "An unexpected error occurred - please try again later"
      );
    } finally {
      clearData();
    }
  };

  return (
    <RegisterBox>
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
            name="name"
            value={registerData.name}
            onChange={handleChange}
            label="Name"
            type="text"
            autoComplete="off"
            fullWidth
          />
          <TextField
            margin="normal"
            size="small"
            variant="outlined"
            name="email"
            value={registerData.email}
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
            value={registerData.password}
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
          {registerFailMessage && (
            <Alert variant="outlined" severity="warning">
              {registerFailMessage}
            </Alert>
          )}
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
              />
            }
            label={
              <div>
                <span>I accept the </span>
                <Link to={"/terms"}>terms and conditions</Link>
              </div>
            }
            sx={{ color: "#7e7e7e", fontSize: 18 }}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Stay updated with email notifications!"
            sx={{ color: "#7e7e7e", fontSize: 18 }}
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
                minWidth: "max-content",
              }}
            >
              SIGN IN WITH GOOGLE
            </Button>
          </Paper>
          <Typography color="#7e7e7e" component="div">
            <center>
              Already have an account?
              <Button onClick={toggleForm}>Sign in</Button>
            </center>
          </Typography>
        </Box>
      </Box>
    </RegisterBox>
  );
};

export default Register;
