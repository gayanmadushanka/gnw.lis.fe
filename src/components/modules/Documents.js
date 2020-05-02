import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Container,
  Grid,
  Paper,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

import { Templates } from "../shared";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Documents = (props) => {
  const classes = useStyles();

  //TODO
  const [open, setOpen] = React.useState(true);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        {props.isLoading && <CircularProgress color="secondary" />}
        {!props.isLoading && !props.error && props.templates && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Templates />
              </Paper>
            </Grid>
          </Grid>
        )}
      </Container>
      {!props.error && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert severity="error">This is an error message!</Alert>
        </Snackbar>
      )}
    </>
  );
};

Documents.propTypes = {
  module: PropTypes.string,
  error: PropTypes.string,
};

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps)(Documents);
