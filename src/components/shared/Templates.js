import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MaterialTable from "material-table";

import { generateDocument } from "../../actions";

const Templates = (props) => {
  return (
    <MaterialTable
      title="All Templates"
      columns={[
        { title: "Section", field: "section" },
        { title: "Name", field: "templateName" },
      ]}
      data={props.templates}
      actions={[
        {
          icon: "gavel",
          tooltip: "Generate",
          onClick: (event, rowData) => alert("You saved " + rowData.name),
        },
      ]}
      options={{
        pageSize: 10,
        grouping: true,
        actionsColumnIndex: -1,
      }}
      localization={{
        header: {
          actions: "",
        },
      }}
    />
  );
};

Templates.propTypes = {
  templates: PropTypes.array,
  generateDocument: PropTypes.func,
};

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      generateDocument,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Templates);
