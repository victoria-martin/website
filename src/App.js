import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./containers/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./containers/NotFound";
import Contact from "./containers/Contact";
import Resume from "./containers/resume/Resume";
import Projects from "./containers/Projects";
import Utils from "./containers/Utils";
import Burger from "./components/Burger";
import devices from "./helpers/devices.json";
import { useMediaQuery } from "react-responsive";
import SuperHeroPedia from "./containers/superheropedia/SuperHeroPedia";
// const express = require("express");
// const cors = require("cors");
// const app = express();
// app.use(cors());

const App = () => {
  // const isMobile = window.matchMedia(`(max-width:${})`);
  // const isMobile = useMediaQuery({
  //   query: `(max-width: ${devices.deviceLargeMobile})`,
  // });
  // const isMobileScreen = useMediaQuery({
  //   query: `(max-device-width: ${devices.deviceLargeMobile})`,
  // });

  // useEffect(() => {
  //   // isMobile ? console.log("mobile") : console.log("nomobile");
  //   // console.log(devices.deviceLargeMobile);
  //   console.log(isMobile);
  // }, [isMobile]);

  return (
    <Router>
      <div className="app">
        {/* {isMobile || isMobileScreen ? <Burger /> : <NavBar />} */}
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/projects/superheroes" component={SuperHeroPedia} />
            <Route exact path="/utils" component={Utils} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
