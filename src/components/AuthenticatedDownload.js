import React from "react";
import { PropTypes } from "prop-types";
import { Button } from "reactstrap";

function AuthenticatedDownload({ id, url, title }) {
  const downloadFile = async () => {
    fetch(url).then((response) => {
      const fileName = response.headers
        .get("Content-Disposition")
        .replace(/"/g, "")
        .split("=")
        .pop();

      response.blob().then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;
        link.click();
      });
      // Todo: Save as
      // window.location.href = response.url;
    });
  };

  return (
    <Button
      id={id}
      color="primary"
      size="sm"
      disabled={false}
      onClick={downloadFile}
    >
      {title}
    </Button>
  );
}

AuthenticatedDownload.propTypes = {
  id: PropTypes.any,
  url: PropTypes.any,
  title: PropTypes.any,
};

export default AuthenticatedDownload;
