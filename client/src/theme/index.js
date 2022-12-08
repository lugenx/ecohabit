import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      /** TODO: Select color
       * Used to represent primary interface elements for a user.
       * It's the color displayed most frequently across your app's screens and
       * components.
       */
      main: "#556cd6",
    },
    secondary: {
      /** TODO: Select color or remove
       * Used to represent secondary interface elements for a user.
       * It provides more ways to accent and distinguish your product.
       * Having it is optional.
       */
      main: "#19857b",
    },
    /** TODO: Select custom colors or remove
     * You would be able to use it like this: `<Button color="custom">`
     */
    custom: {
      light: "#ffa726",
      main: "#f57c00",
      dark: "#ef6c00",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    //TODO: Select color or remove
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  /** TODO: Keep default breakpoints or change them (in pixels)
   *  `<Button sx={{ width: { xs: '100%', sm: '50%' } }}>Log In</Button>``
   */
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
