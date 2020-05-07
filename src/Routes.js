import React from "react";
import { Switch, Route } from "react-router-dom";

import { Main as MainLayout } from "./layouts";
import { NotFound as NotFoundView } from "./views";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={MainLayout} />
    <Route component={NotFoundView} />
  </Switch>
);

export default Routes;
