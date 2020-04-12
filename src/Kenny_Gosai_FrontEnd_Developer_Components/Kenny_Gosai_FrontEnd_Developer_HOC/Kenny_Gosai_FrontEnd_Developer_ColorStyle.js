import React from "react";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from "@material-ui/core/styles";
const ColorStyle = (props) => {
  let theme = createMuiTheme({
    palette: {
      primary: {
        main: "#45B976",
        contrastText: "#FFFFFF",
      },
      error: {
        main: "#8B0000",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#FFFFFF",
        contrastText: "#45B976",
      },
    },
    status: {
      danger: "orange",
    },
  });
  theme = responsiveFontSizes(theme);

  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
};

export default ColorStyle;
