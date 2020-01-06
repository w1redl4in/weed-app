import React from "react";
import { Switch, Route } from "react-router-dom";
import Weed from "./pages/weed";
import Header from "./components/header";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Header} />
      <Route path="/weeds" component={Weed} />
    </Switch>
  );
};

export default Routes;
