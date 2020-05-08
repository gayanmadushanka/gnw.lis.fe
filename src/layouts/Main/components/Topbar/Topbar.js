import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
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
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import InputIcon from "@material-ui/icons/Input";

import { handleDrawerToggle } from "../../../../actions";

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: "none",
  },
  flexGrow: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar className={classes.root}>
        <IconButton
          edge="start"
          color="inherit"
          onClick={props.handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" color="inherit" noWrap>
          The Lawyer
        </Typography>
        <div className={classes.flexGrow} />
        <IconButton color="inherit">
          <Badge badgeContent={5} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <SettingsIcon />
        </IconButton>
        <IconButton color="inherit">
          <InputIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
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
