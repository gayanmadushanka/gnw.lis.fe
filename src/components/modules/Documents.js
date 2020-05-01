import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Templates } from "../shared";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

export default (props) => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Templates />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

// const Landing = (props) => (
//   <>
//     <div className="sidebar-container">
//       <Nav vertical>
//         <NavItem>
//           <NavLink href="#" onClick={props.fetchTemplates}>
//             Document
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="#" disabled>
//             Client
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="#" disabled>
//             Matter
//           </NavLink>
//         </NavItem>
//       </Nav>
//     </div>
//     <div className="main-container">
//       {props.isLoading && (
//         <Spinner size="lg" color="info" className="spinner" />
//       )}
//       {!props.isLoading && !props.error && props.templates && (
//         <TemplateGrid
//           templates={props.templates}
//           generateDocument={props.generateDocument}
//         />
//       )}
//       {props.error && (
//         <Alert color="danger">
//           <strong>{props.error} </strong>
//         </Alert>
//       )}
//       {props.message && (
//         <Alert color="success">
//           <strong>{props.message} </strong>
//         </Alert>
//       )}
//     </div>
//   </>
// );

// Landing.propTypes = {
//   templates: PropTypes.array,
//   isLoading: PropTypes.bool,
//   error: PropTypes.string,
//   message: PropTypes.string,
//   fetchTemplates: PropTypes.func,
//   generateDocument: PropTypes.func,
// };

// const mapStateToProps = (state) => ({ ...state });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       fetchTemplates,
//       generateDocument,
//     },
//     dispatch
//   );

// export default connect(mapStateToProps, mapDispatchToProps)(Landing);
