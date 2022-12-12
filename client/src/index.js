import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
