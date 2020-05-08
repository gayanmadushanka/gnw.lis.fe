import React from "react";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CircularProgress } from "@material-ui/core";

import { TemplatesToolbar, TemplatesTable, FormDialog } from "./components";
import { fetchTemplates } from "../../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
  },
}));

const Documents = (props) => {
  const classes = useStyles();
  //TODO
  !props.templates && props.fetchTemplates();
  return (
    <div className={classes.root}>
      {props.isLoading && <CircularProgress color="secondary" />}
      <TemplatesToolbar />
      <div className={classes.content}>
        {!props.isLoading && !props.error && props.templates && (
          <TemplatesTable />
        )}
        {props.loadForm && !props.error && <FormDialog />}
      </div>
    </div>
  );
};

Documents.propTypes = {
  fetchTemplates: PropTypes.func,
};

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchTemplates,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Documents);
