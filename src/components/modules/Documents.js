import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CircularProgress, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import { Templates, FormDialog } from "../shared";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Documents = (props) => {
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
      {props.isLoading && <CircularProgress color="secondary" />}
      {!props.isLoading && !props.error && props.templates && <Templates />}
      {props.loadForm && !props.error && <FormDialog />}
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
  loadForm: PropTypes.bool,
  error: PropTypes.string,
};

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps)(Documents);
