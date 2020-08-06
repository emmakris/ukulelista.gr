import React from "react";
import NavigationMenu from "components/layout/NavigationMenu";
import { ThemeProvider } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import ThemeConfig from "config/ThemeConfig";
import Footer from "components/layout/Footer";
import HomeBanner from "./HomeBanner";
const Home = (props) => {
  return (
    <>
      <ThemeProvider theme={ThemeConfig}>
        <NavigationMenu />
        <HomeBanner />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Home;
