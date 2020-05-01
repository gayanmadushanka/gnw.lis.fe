import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import NoteIcon from "@material-ui/icons/Note";
import PeopleIcon from "@material-ui/icons/People";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import BarChartIcon from "@material-ui/icons/BarChart";

import { loadDashboard, loadDocuments } from "../../actions";

const SidebarItems = (props) => (
  <div>
    <ListItem button onClick={props.loadDashboard}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button onClick={props.loadDocuments}>
      <ListItemIcon>
        <NoteIcon />
      </ListItemIcon>
      <ListItemText primary="Documents" />
    </ListItem>
    <ListItem button disabled>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Clients" />
    </ListItem>
    <ListItem button disabled>
      <ListItemIcon>
        <MenuBookIcon />
      </ListItemIcon>
      <ListItemText primary="Matters" />
    </ListItem>
    <ListItem button disabled>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
  </div>
);

SidebarItems.propTypes = {
  loadDashboard: PropTypes.func,
  loadDocuments: PropTypes.func,
};

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      loadDashboard,
      loadDocuments,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SidebarItems);