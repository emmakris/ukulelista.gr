import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Container } from "@material-ui/core";

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
    backgroundColor: "#fff5d7"
  },
  boxDivider:{
    borderTop:"0.04em solid",
    borderColor:"#eadfbe"
  }
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root} className={classes.boxDivider}>
      <Container>
        <Toolbar disableGutters={true}>
          <Typography variant="body1" className={classes.title}>
            Made by Manolis Makris
          </Typography>
          <Button color="inherit">Τραγούδια</Button>
        </Toolbar>
        <AppBar position="static" className={classes.backgroundColor}></AppBar>
      </Container>
    </div>
  );
};

export default Footer;
