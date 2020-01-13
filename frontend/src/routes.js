import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Slider from "./components/faixa";
import Home from "./pages/home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
