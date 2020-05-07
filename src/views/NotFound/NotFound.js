import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
// import { Grid } from "@material-ui/core";
// import i18n from "i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    width: 500,
    minHeight: "auto",
    // padding: "auto",
    margin: "auto",
    alignItems: "center",
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    // <Grid
    //   container
    //   justify="center"
    //   // spacing={0}
    //   // direction="column"
    //   alignItems="center"
    //   style={{ minHeight: "75vh" }}
    // >
    <Alert variant="outlined" severity="info" className={classes.root}>
      <AlertTitle>Resource not found.</AlertTitle>
    </Alert>
    // </Grid>
  );
};

export default NotFound;
