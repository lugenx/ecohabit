import React from "react";
import { Box, Stack } from "@mui/material";
import Main from "../components/Login/Main";
import Register from "../components/Login/Register";

const RegisterPage = () => {
  return (
    <Box>
      <Stack direction="row">
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            flex: 2,
          }}
        >
          <Main />
        </Box>
        <Register />
      </Stack>
    </Box>
  );
};

export default RegisterPage;
