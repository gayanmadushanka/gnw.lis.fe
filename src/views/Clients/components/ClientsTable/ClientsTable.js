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

const ClientsTable = (props) => {
  const { className, clients, ...rest } = props;

  const classes = useStyles();

  const [selectedClients, setSelectedClients] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    const { clients } = props;

    let selectedClients;

    if (event.target.checked) {
      selectedClients = clients.map((user) => user.id);
    } else {
      selectedClients = [];
    }

    setSelectedClients(selectedClients);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedClients.indexOf(id);
    let newSelectedClients = [];

    if (selectedIndex === -1) {
      newSelectedClients = newSelectedClients.concat(selectedClients, id);
    } else if (selectedIndex === 0) {
      newSelectedClients = newSelectedClients.concat(selectedClients.slice(1));
    } else if (selectedIndex === selectedClients.length - 1) {
      newSelectedClients = newSelectedClients.concat(
        selectedClients.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedClients = newSelectedClients.concat(
        selectedClients.slice(0, selectedIndex),
        selectedClients.slice(selectedIndex + 1)
      );
    }

    setSelectedClients(newSelectedClients);
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
                    checked={selectedClients.length === clients.length}
                    color="primary"
                    indeterminate={
                      selectedClients.length > 0 &&
                      selectedClients.length < clients.length
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
              {clients.slice(0, rowsPerPage).map((client) => (
                <TableRow
                  className={classes.tableRow}
                  hover
                  key={client.id}
                  selected={selectedClients.indexOf(client.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedClients.indexOf(client.id) !== -1}
                      color="primary"
                      onChange={(event) => handleSelectOne(event, client.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <div className={classes.nameContainer}>
                      <Avatar className={classes.avatar} src={client.avatarUrl}>
                        {getInitials(client.name)}
                      </Avatar>
                      <Typography variant="body1">{client.name}</Typography>
                    </div>
                  </TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>
                    {client.address.city}, {client.address.state},{" "}
                    {client.address.country}
                  </TableCell>
                  <TableCell>{client.phone}</TableCell>
                  {/* <TableCell>
                      {moment(client.createdAt).format("DD/MM/YYYY")}
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
          count={clients.length}
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

ClientsTable.propTypes = {
  className: PropTypes.string,
  clients: PropTypes.array.isRequired,
};

export default ClientsTable;
