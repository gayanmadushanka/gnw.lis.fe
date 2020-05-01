import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./components/Landing";
import { NoMatch } from "./components/shared";

export default () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route component={NoMatch} />
  </Switch>
);
