import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import ScrollToTopRoute from "components/core/ScrollToTopRoute";
import Home from "pages/Home";
import Songs from "pages/Songs"
import SongPlaying from "pages/Songs/SongPlaying";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <ScrollToTopRoute
            exact={true}
            path={"/"}
            component={Home}
            pageTitle="Αρχική"
            exact
          />
            <ScrollToTopRoute
                exact={true}
                path={"/songs"}
                component={Songs}
                pageTitle="Τραγούδια"
            />
          <ScrollToTopRoute
              exact={true}
              path={"/songplaying"}
              component={SongPlaying}
              pageTitle="Γρατσούνα"
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
