import React from "react";
import { Switch, Redirect } from "react-router-dom";

import { RouteWithLayout } from "./components";
import { Main as MainLayout, Minimal as MinimalLayout } from "./layouts";
import {
  Dashboard as DashboardView,
  Templates as TemplatesView,
  Clients as ClientsView,
  Matters as Mattersiew,
  NotFound as NotFoundView,
} from "./views";

const Routes = () => (
  <Switch>
    <Redirect exact from="/" to="/dashboard" />
    <RouteWithLayout
      component={DashboardView}
      exact
      layout={MainLayout}
      path="/dashboard"
    />
    <RouteWithLayout
      component={TemplatesView}
      exact
      layout={MainLayout}
      path="/templates"
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
