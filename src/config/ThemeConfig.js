import { createMuiTheme } from "@material-ui/core/styles";

const ThemeConfig = createMuiTheme({
  // Color palette
  palette: {
    primary: {
      main: "#484478",
    },
    secondary: {
      main: "#ff5e6c",
    },

    // Font Colors *
    text: {
      default: "#fff5d7",
      primary: "#484478",
      secondary: "#ff5e6c",
    },
  },
  status: {
    danger: "orange",
  },

  // Font *
  typography: {
    root: {
      fontFamily: "Open Sans Condensed",
    },
    h3: {
      color: "#ff5e6c",
      fontFamily: "Open Sans Condensed",
      fontWeight: "bold",
    },
    h6: {
      color: "#ff5e6c",
    },
    subtitle1: {
      color: "#484478",
      fontSize: "24px",
    },
    fontFamily: "Open Sans Condensed",
  },
  overrides: {
    // Buttons ⚛️
    MuiButton: {
      root: {
        borderRadius: "6px",
        textTransform: "capitalize",
        paddingLeft: 20,
        paddingRight: 20,
        color: "#101010",
        fontWeight: "400",
        fontSize: "18px",
      },
      contained: {
        paddingLeft: 20,
        paddingRight: 20,
        fontWeight: "500",
        color: "#ffffff",
        boxShadow:
          "0px 1px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 1px 0px rgba(0,0,0,0.12)",
        "&:visited": {
          color: "#ffffff",
        },
      },
      outlined: {
        paddingLeft: 20,
        paddingRight: 20,
        fontWeight: "500",
      },
      containedPrimary: {
        color: "#ffffff",
      },
      containedSecondary: {
        color: "#fffff",
      },
      outlinedPrimary: {
        color: "#484478",
      },
      outlinedSecondary: {},
    },
    // Typography ⚛️
    MuiTypography: {
      root: {
        fontSize: "18px",
        fontFamily: "Open Sans Condensed",
      },
      subtitle2: {
        color: "#4a4a4a",
        lineHeight: "1.33",
        letterSpacing: "-0.5px",
      },
      subtitle1: {
        color: "#4a4a4a",
        lineHeight: "1.33",
        letterSpacing: "-0.5px",
      },
      colorPrimary: {
        color: "#4a4a4a",
      },
      h6: {
        fontWeight: "bold",
      },
      h3: {
        fontWeight: "lighter",
      },
      body1: {
        fontSize: "20px",
      },
      body2: {
        fontSize: "20px",
      },
    },
    MuiLink: {
      root: {
        color: "#ff5e6c",
        "&:visited": {
          color: "#ff5e6c",
        },
      },
    },
    MuiDrawer: {
      paper: {
        backgroundColor: "#97a49a",
      },
    },
    MuiInputLabel: {
      root: {
        marginTop: "-8px",
      },
      shrink: {
        marginTop: "5px",
      },
    },
    // AppBar ⚛️
    MuiAppBar: {
      root: {
        boxShadow: "none",
        backgroundColor: "transparent",
      },
    },
  },
});

export default ThemeConfig;
