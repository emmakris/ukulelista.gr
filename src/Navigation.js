import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/HomeComp";
import Library from "./components/LibraryComp";
import {
  Navbar,
  Nav,
  Button,
  NavDropdown,
  FormControl,
  Form
} from "react-bootstrap";

export default class NavbarMenu extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="light">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="./icon.png"
              width="13"
              height="30"
              className="d-inline-block align-top"
            />
            Ukulelista [beta]
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Αρχική</Nav.Link>
            <Nav.Link href="library">Τραγούδια</Nav.Link>
            <Nav.Link>Προσθήκη Κομματιού</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/library" component={Library} />
          {/* <Route path='/about' component={About} /> */}
        </Switch>
      </>
    );
  }
}
