import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
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
      {props.isLoading && <h1>Fetching data</h1>}
      {!props.isLoading && !props.error && props.templates && (
        <TemplateGrid
          templates={props.templates}
          generateDocument={props.generateDocument}
        />
      )}
      {props.error && <h1>{props.error}</h1>}
      {props.message && <h1>{props.message}</h1>}
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
