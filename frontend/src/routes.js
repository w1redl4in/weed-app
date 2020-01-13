import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Strains from "./pages/strains";
import Contact from "./pages/contact";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/strains" component={Strains} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
