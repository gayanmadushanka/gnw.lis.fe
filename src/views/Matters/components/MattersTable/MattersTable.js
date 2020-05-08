import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
// import moment from "moment";
// import PerfectScrollbar from "react-perfect-scrollbar";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
} from "@material-ui/core";

import { getInitials } from "../../../../helpers";

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 1050,
  },
  nameContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  actions: {
    justifyContent: "flex-end",
  },
}));

const MattersTable = (props) => {
  const { className, matters, ...rest } = props;

  const classes = useStyles();

  const [selectedMatters, setSelectedMatters] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    const { matters } = props;

    let selectedMatters;

    if (event.target.checked) {
      selectedMatters = matters.map((user) => user.id);
    } else {
      selectedMatters = [];
    }

    setSelectedMatters(selectedMatters);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedMatters.indexOf(id);
    let newSelectedMatters = [];

    if (selectedIndex === -1) {
      newSelectedMatters = newSelectedMatters.concat(selectedMatters, id);
    } else if (selectedIndex === 0) {
      newSelectedMatters = newSelectedMatters.concat(selectedMatters.slice(1));
    } else if (selectedIndex === selectedMatters.length - 1) {
      newSelectedMatters = newSelectedMatters.concat(
        selectedMatters.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedMatters = newSelectedMatters.concat(
        selectedMatters.slice(0, selectedIndex),
        selectedMatters.slice(selectedIndex + 1)
      );
    }

    setSelectedMatters(newSelectedMatters);
  };

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        {/* <PerfectScrollbar> */}
        <div className={classes.inner}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedMatters.length === matters.length}
                    color="primary"
                    indeterminate={
                      selectedMatters.length > 0 &&
                      selectedMatters.length < matters.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Registration date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {matters.slice(0, rowsPerPage).map((matter) => (
                <TableRow
                  className={classes.tableRow}
                  hover
                  key={matter.id}
                  selected={selectedMatters.indexOf(matter.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedMatters.indexOf(matter.id) !== -1}
                      color="primary"
                      onChange={(event) => handleSelectOne(event, matter.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <div className={classes.nameContainer}>
                      <Avatar className={classes.avatar} src={matter.avatarUrl}>
                        {getInitials(matter.name)}
                      </Avatar>
                      <Typography variant="body1">{matter.name}</Typography>
                    </div>
                  </TableCell>
                  <TableCell>{matter.email}</TableCell>
                  <TableCell>
                    {matter.address.city}, {matter.address.state},{" "}
                    {matter.address.country}
                  </TableCell>
                  <TableCell>{matter.phone}</TableCell>
                  {/* <TableCell>
                      {moment(matter.createdAt).format("DD/MM/YYYY")}
                    </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {/* </PerfectScrollbar> */}
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={matters.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

MattersTable.propTypes = {
  className: PropTypes.string,
  matters: PropTypes.array.isRequired,
};

export default MattersTable;
