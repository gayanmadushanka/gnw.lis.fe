import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

import { MattersToolbar, MattersTable } from "./components";
import mockData from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
  },
}));

const Matters = () => {
  const classes = useStyles();

  const [matters] = useState(mockData);

  return (
    <div className={classes.root}>
      <MattersToolbar />
      <div className={classes.content}>
        <MattersTable matters={matters} />
      </div>
    </div>
  );
};

export default Matters;
