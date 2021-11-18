import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/app/App";
import { ScopedCssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#0061A7",
      dark: "#06377B",
    },
    secondary: {
      light: "#D0D0D0",
      main: "#A8A8A8",
      dark: "#808080",
    },
    warning: {
      main: "#FF6F6F",
      light: "#FFE4E4",
    },
    success: {
      main: "#75D37F",
      light: "#E7FFDC",
    },
    info: {
      main: "#66A3FF",
      soft: "EAF2FF",
    },
  },
  // components: {
  //   MuiScopedCssBaseline: {
  //     styleOverrides: `
  //       @font-face {
  //         font-family: 'Futura';
  //         src: url(${FuturaMedium}) format('truetype');
  //         font-weight: 400;
  //         font-style: normal;
  //       }
  //       @font-face {
  //         font-family: 'Futura';
  //         src: url(${FuturaBold}) format('truetype');
  //         font-weight: 900;
  //         font-style: normal;
  //       }
  //       @font-face {
  //         font-family: 'Futura';
  //         src: url(${FuturaLight}) format('truetype');
  //         font-weight: 300;
  //         font-style: normal;
  //       }
  //       @font-face {
  //         font-family: 'Futura';
  //         src: url(${FuturaHeavy}) format('truetype');
  //         font-weight: 700;
  //         font-style: normal;
  //       }
  //     `,
  //   },
  // },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline>
        <App />
      </ScopedCssBaseline>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
