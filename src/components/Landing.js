import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { Header, Footer, Sidebar } from "./layouts";
import { Dashboard, Documents, Clients } from "./modules";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
}));

const Landing = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {props.module === "Dashboard" && <Dashboard />}
        {props.module === "Documents" && <Documents />}
        {props.module === "Clients" && <Clients />}
        <Footer />
      </main>
    </div>
  );
};

Landing.propTypes = {
  module: PropTypes.string,
};

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps)(Landing);
