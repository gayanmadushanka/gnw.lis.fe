import React from "react";
import PropTypes from "prop-types";
import i18n from "i18next";

const NoMatch = (props) => {
  return (
    // <div id="not-found">
    //   <h1>
    //     {i18n.t("common:error404.title", {
    //       defaultValue: `Resource not found.`,
    //     })}
    //   </h1>
    //   <Alert color="danger">
    //     <p>
    //       {" "}
    //       {i18n.t("common:error404.message", {
    //         defaultValue: `The requested resource could not be found.`,
    //       })}
    //     </p>
    //     <strong>
    //       {props.location.pathname}
    //       {props.location.hash}
    //     </strong>
    //   </Alert>
    // </div>
    <></>
  );
};

NoMatch.propTypes = {
  location: PropTypes.object,
};

export default NoMatch;
