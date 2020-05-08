import React from "react";
import { Switch, Redirect } from "react-router-dom";

import { RouteWithLayout } from "./components";
import { Main as MainLayout, Minimal as MinimalLayout } from "./layouts";
import {
  Dashboard as DashboardView,
  Documents as DocumentsView,
  Clients as ClientsView,
  Matters as Mattersiew,
  NotFound as NotFoundView,
} from "./views";

const Routes = () => (
  <Switch>
    <Redirect exact from="/" to="/documents" />
    <RouteWithLayout
      component={DashboardView}
      exact
      layout={MainLayout}
      path="/dashboard"
    />
    <RouteWithLayout
      component={DocumentsView}
      exact
      layout={MainLayout}
      path="/documents"
    />
    <RouteWithLayout
      component={ClientsView}
      exact
      layout={MainLayout}
      path="/clients"
    />
    <RouteWithLayout
      component={Mattersiew}
      exact
      layout={MainLayout}
      path="/matters"
    />
    <RouteWithLayout
      component={NotFoundView}
      exact
      layout={MinimalLayout}
      path="/not-found"
    />
    <Redirect to="/not-found" />
  </Switch>
);

export default Routes;
