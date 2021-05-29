import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Home } from "../components/Home";
import { Projects } from "../components/Projects";
import { ProjectScreen } from "../components/ProjectScreen";
import { Publications } from "../components/Publications";
import { SubProjScreen } from "../components/SubProjScreen.jsx";
import { Error404 } from "../components/Error404.jsx";

import { Footer } from "../components/ui/Footer";
import { Navbar } from "../components/ui/Navbar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} exact />
          <Route path="/projects" component={Projects} exact />
          <Route path="/projects/:project" component={ProjectScreen} exact />
          <Route path="/projects/:project/:subProj" component={SubProjScreen} exact />
          <Route path="/publications" component={Publications} exact />
          <Route path="/blog" component={Error404} exact />
          <Route path="/contact" component={Contact} exact />

          <Redirect to="/" />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};
