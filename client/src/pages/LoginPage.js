import React from "react";
import { Stack, Box } from "@mui/material";
import Main from "../components/Login/Main";
import Login from "../components/Login/Login";
const LoginPage = () => {
  return (
    <Box>
      <Stack direction="row">
        <Main />
        <Login />
      </Stack>
    </Box>
  );
};

export default LoginPage;
