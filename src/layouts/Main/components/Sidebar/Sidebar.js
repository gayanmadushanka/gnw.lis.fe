import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Divider } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import NoteIcon from "@material-ui/icons/Note";
import PeopleIcon from "@material-ui/icons/People";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import BarChartIcon from "@material-ui/icons/BarChart";

import { Profile, SidebarNav } from "./components";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    marginTop: 64,
    height: "calc(100% - 64px)",
  },
  root: {
    backgroundColor: theme.palette.white,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}));

const pages = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Templates",
    href: "/templates",
    icon: <NoteIcon />,
  },
  {
    title: "Clients",
    href: "/clients",
    icon: <PeopleIcon />,
  },
  {
    title: "Matters",
    href: "/matters",
    icon: <MenuBookIcon />,
  },
  // {
  //   title: "Reports",
  //   href: "/reports",
  //   icon: <BarChartIcon />,
  // },
];

const Sidebar = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      open={props.open}
      variant="persistent"
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav className={classes.nav} pages={pages} />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps)(Sidebar);
