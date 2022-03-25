import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fa1a22", //mas opaco
      dark: "#b6040b", //mas claro
      light: "#D71920",
      //D71920
    },
    secondary: {
      main: "#212529",
      dark: "#32383e",
    },
    text: {
      primary: "#212529",
      secondary: "#777",
    },
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.06)",
        },
      },
    },
  },
});

export default theme;
