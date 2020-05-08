import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

import { ClientsToolbar, ClientsTable } from "./components";
import mockData from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
  },
}));

const Clients = () => {
  const classes = useStyles();

  const [clients] = useState(mockData);

  return (
    <div className={classes.root}>
      <ClientsToolbar />
      <div className={classes.content}>
        <ClientsTable clients={clients} />
      </div>
    </div>
  );
};

export default Clients;
