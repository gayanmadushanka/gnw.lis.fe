import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./Landing";
import NoMatch from "../shared/routes/NoMatch";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route component={NoMatch} />
  </Switch>
);

export default Router;
