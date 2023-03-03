import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import Main from "../components/Login/Main";
import Login from "../components/Login/Login";
const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <Box>
      <Stack direction="row">
        {!showLogin && <Main setShowLogin={setShowLogin} />}
        <Login showLogin={showLogin} setShowLogin={setShowLogin} />
      </Stack>
    </Box>
  );
};

export default LoginPage;
