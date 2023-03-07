import React from "react";
import { Box, Stack } from "@mui/material";
import Main from "../components/Login/Main";
import Register from "../components/Login/Register";

const RegisterPage = () => {
  return (
    <Box>
      <Stack direction="row" justifyContent="center">
        <Main sx={{ display: { xs: "none", sm: "block" } }} />
        <Register />
      </Stack>
    </Box>
  );
};

export default RegisterPage;
