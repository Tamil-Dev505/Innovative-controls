import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1E88E5",
    },
    secondary: {
      main: "#FF6B00",
    },
    background: {
      default: "#0B1220",
      paper: "#111827",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default theme;
