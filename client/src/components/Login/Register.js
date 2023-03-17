import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services/auth.js";
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

const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const clearData = () => {
    setRegisterData({ name: "", email: "", password: "" });
    setConfirmPassword("");
    setAccept(false);
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
      setErr("Password does not match");
      return;
    }
    if (!accept) {
      setErr("You should accept the terms and conditions of use to register");
      return;
    }

    const res = await register(registerData);

    if (res.status === 201) {
      navigate("/login");
    }
    clearData();
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
              Already have an account? <Link to="/login">Sign in</Link>
            </center>
          </Typography>
        </Box>
      </Box>
    </RegisterBox>
  );
};

export default Register;
