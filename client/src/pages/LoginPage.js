import { useState } from "react";
import { Stack, Box } from "@mui/material";
import Main from "../components/Main";
import Login from "../components/Login";
import Register from "../components/Register";

const FormStates = {
  SIGN_IN: "sign-in",
  SIGN_UP: "sign-up",
};

const LoginPage = () => {
  const [currentForm, setCurrentForm] = useState(FormStates.SIGN_IN);

  const toggleForm = () => {
    if (currentForm === FormStates.SIGN_IN) {
      setCurrentForm(FormStates.SIGN_UP);
    } else {
      setCurrentForm(FormStates.SIGN_IN);
    }
  };

  return (
    <Box>
      <Stack direction="row" justifyContent="center">
        <Main sx={{ display: { xs: "none", sm: "block" } }} />
        {currentForm === FormStates.SIGN_IN ? (
          <Login toggleForm={toggleForm} />
        ) : (
          <Register toggleForm={toggleForm} />
        )}
      </Stack>
    </Box>
  );
};

export default LoginPage;
