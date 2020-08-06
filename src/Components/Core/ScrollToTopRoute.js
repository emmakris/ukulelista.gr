import React, { useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import Helmet from "react-helmet";

const ScrollToTopRoute = (props) => {
  const { component: Component, path, pageTitle, ...rest } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <>
      <Helmet>
        <title>{pageTitle} - Ukulelista</title>
      </Helmet>
      <Route
        {...rest}
        render={(props) => <Component {...props} pageTitle={pageTitle} />}
      />
    </>
  );
};

export default withRouter(ScrollToTopRoute);
