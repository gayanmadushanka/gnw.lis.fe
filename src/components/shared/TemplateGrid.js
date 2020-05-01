import React from "react";
import PropTypes from "prop-types";

import Template from "./Template";

const TemplateGrid = (props) => (
  // <Table striped>
  //   <thead>
  //     <tr>
  //       <th>Template Name</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {props.templates.map((template) => (
  //       <Template
  //         key={template.id}
  //         template={template}
  //         generateDocument={props.generateDocument}
  //       />
  //     ))}
  //   </tbody>
  // </Table>
  <></>
);

TemplateGrid.propTypes = {
  templates: PropTypes.array,
  generateDocument: PropTypes.func,
};

export default TemplateGrid;
