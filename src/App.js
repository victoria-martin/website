import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./containers/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./containers/NotFound";
import Contact from "./containers/Contact";
import Resume from "./containers/Resume";
import Projects from "./containers/Projects";
import Utils from "./containers/Utils";

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/utils" component={Utils} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
