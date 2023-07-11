import React from "react";
import { Stack, Box } from "@mui/material";
import Main from "../components/Main";
import Login from "../components/Login";
const LoginPage = () => {
  return (
    <Box>
      <Stack direction="row" justifyContent="center">
        <Main sx={{ display: { xs: "none", sm: "block" } }} />
        <Login />
      </Stack>
    </Box>
  );
};

export default LoginPage;
