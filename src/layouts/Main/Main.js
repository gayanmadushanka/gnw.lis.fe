import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { Sidebar, Topbar, Footer } from "./components";
import { Dashboard, Documents, Clients } from "../../views";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    overflow: "auto",
  },
}));

const Main = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Topbar />
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {children}
        {props.module === "Dashboard" && <Dashboard />}
        {props.module === "Documents" && <Documents />}
        {props.module === "Clients" && <Clients />}
        <Footer />
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps)(Main);
