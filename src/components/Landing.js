import React from "react";
import { Nav, NavItem, NavLink, Alert, Spinner } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchTemplates, generateDocument } from "../actions";
import TemplateGrid from "./TemplateGrid";

const Landing = (props) => (
  <>
    <div className="sidebar-container">
      <Nav vertical>
        <NavItem>
          <NavLink href="#" onClick={props.fetchTemplates}>
            Document
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" disabled>
            Client
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" disabled>
            Matter
          </NavLink>
        </NavItem>
      </Nav>
    </div>
    <div className="main-container">
      {props.isLoading && (
        <Spinner size="lg" color="info" className="spinner" />
      )}
      {!props.isLoading && !props.error && props.templates && (
        <TemplateGrid
          templates={props.templates}
          generateDocument={props.generateDocument}
        />
      )}
      {props.error && (
        <Alert color="danger">
          <strong>{props.error} </strong>
        </Alert>
      )}
      {props.message && (
        <Alert color="success">
          <strong>{props.message} </strong>
        </Alert>
      )}
    </div>
  </>
);

Landing.propTypes = {
  templates: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  message: PropTypes.string,
  fetchTemplates: PropTypes.func,
  generateDocument: PropTypes.func,
};

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchTemplates,
      generateDocument,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
