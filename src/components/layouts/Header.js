import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";

import { handleDrawerToggle } from "../../actions";

const useStyles = makeStyles((theme) => {
  const drawerWidth = 240;
  return {
    toolbar: {
      paddingRight: 100,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: "none",
    },
    title: {
      flexGrow: 1,
    },
  };
});

const Header = (props) => {
  const classes = useStyles();
  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, props.open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerToggle}
          className={clsx(
            classes.menuButton,
            props.open && classes.menuButtonHidden
          )}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Dashbord
        </Typography>
        <IconButton color="inherit">
          <Badge color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <Badge color="secondary">
            <SettingsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);