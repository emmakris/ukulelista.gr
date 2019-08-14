import React from "react";
import "./App.css";
import NavbarMenu from "./Navigation";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarMenu />
      </Router>
    </div>
  );
}

export default App;
