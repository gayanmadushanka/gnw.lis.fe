import React from "react";
import { Box } from "@material-ui/core";
import { Link, Typography } from "@material-ui/core";

export default () => (
  <Box pt={4}>
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://gnw.soft.lk/">
        gnw.soft.lk
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  </Box>
);
