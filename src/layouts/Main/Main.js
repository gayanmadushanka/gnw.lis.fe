import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import { Sidebar, Topbar, Footer } from "./components";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 56,
    height: "100%",
  },
  shiftContent: {
    paddingLeft: 240,
  },
  content: {
    height: "100%",
  },
}));

const Main = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: true,
      })}
    >
      <Topbar />
      <Sidebar />
      <main className={classes.content}>
        {children}
        <Footer />
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
