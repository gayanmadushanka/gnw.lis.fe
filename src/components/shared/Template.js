import React from "react";
import PropTypes from "prop-types";

import AuthenticatedDownload from "./AuthenticatedDownload";

const Template = (props) => (
  <>
    {/* <tr>
      <td>{props.template.name}</td>
      <td>
        <Button color="primary" size="sm" onClick={props.generateDocument}>
          Generate
        </Button>
      </td>
      <td>
        <AuthenticatedDownload
          id="download-file"
          url="http://localhost:3000/api/v1/document/download"
          title="Download"
        />
      </td>
    </tr> */}
  </>
);

Template.propTypes = {
  templates: PropTypes.array,
  generateDocument: PropTypes.func,
};

export default Template;
