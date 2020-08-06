import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Logo from "assets/illustrations/logo.svg";
import { Box, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  backgroundColor: {
    backgroundColor: "#fff5d7",
  },
}));

const NavigationMenu = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root} className={classes.backgroundColor}>
      <Container>
        <AppBar position="static" className={classes.backgroundColor}>
          <Toolbar disableGutters={true}>
            <Box className={classes.title}>
              <a href={"/"}>
                <img src={Logo} width={"185px"} alt={"ukulelista logo"} />
              </a>
            </Box>
            <Box mr={2}>
              <Button>Επικοινωνία</Button>
            </Box>
            <Button color="secondary" href={"/songs"} variant={"contained"}>
              Τραγούδια
            </Button>
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
};

export default NavigationMenu;
