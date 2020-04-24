import React from "react";
import "./App.css";
import AuthenticatedDownload from "./components/AuthenticatedDownload";

function App() {
  return (
    <div className="App">
      <AuthenticatedDownload
        id="download-file"
        url="http://localhost:3000/api/v1/documents"
        title="Download File"
      />
    </div>
  );
}

export default App;
