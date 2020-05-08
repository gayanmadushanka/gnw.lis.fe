import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MaterialTable from "material-table";

import { fetchTemplateMetadata } from "../../../../actions";

const TemplatesTable = (props) => {
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
          onClick: props.fetchTemplateMetadata,
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

TemplatesTable.propTypes = {
  templates: PropTypes.array,
  fetchTemplateMetadata: PropTypes.func,
};

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchTemplateMetadata,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TemplatesTable);
