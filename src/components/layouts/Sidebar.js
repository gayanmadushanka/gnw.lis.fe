import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  IconButton,
  Divider,
  List,
  Typography,
  Toolbar,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import clsx from "clsx";

import { handleDrawerToggle } from "../../actions";
import SidebarItems from "./SidebarItems";

const useStyles = makeStyles((theme) => {
  const drawerWidth = 240;
  return {
    toolbarIcon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar,
    },
    drawerPaper: {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    },
  };
});

const Sidebar = (props) => {
  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(
          classes.drawerPaper,
          !props.open && classes.drawerPaperClose
        ),
      }}
      open={props.open}
    >
      <div className={classes.toolbarIcon}>
        <Toolbar>
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            The Lawyer
          </Typography>
        </Toolbar>
        <IconButton onClick={props.handleDrawerToggle}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <SidebarItems />
      </List>
    </Drawer>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
};

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      handleDrawerToggle,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
