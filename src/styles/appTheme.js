import { createTheme } from "@material-ui/core/styles";
// Create a theme instance.

export default createTheme({
  palette: {
    primary: {
      main: "#ff0000",
      dark: "#FF470B",
      light: "#EB9413",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
      light: "#ff0000",
      contrastText: "black",
    },
    success: {
      main: "#88C982",
    },
  },
  typography: {
    fontFamily: "Cairo",
    body2: {
      fontFamily: ["Cairo", "Helvetica", "Arial", "Lucida", "sans-serif"],
      fontSize: "0.8rem",
    },
  },
  MuiButton: {
    root: {
      fontSize: "1rem",
      textTransform: "capitalize !important",
    },
  },
  direction: localStorage.i18nextLng === "en" ? "ltr" : "rtl",
});
