import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.css";

import { fetchTemplates, generateDocument } from "./actions";

import TemplateGrid from "./components/TemplateGrid";

class App extends Component {
  render() {
    const {
      fetchTemplates,
      generateDocument,
      isLoading,
      error,
      templates,
    } = this.props;

    return (
      <div className="App">
        <button onClick={fetchTemplates}>Fetch templates</button>
        {isLoading && <h1>Fetching data</h1>}
        {!isLoading && !error && <TemplateGrid templates={templates} />}
        {error && <h1>{error}</h1>}
        <button onClick={generateDocument}>Generate</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchTemplates,
      generateDocument,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);

// import React from "react";
// import "./App.css";
// import AuthenticatedDownload from "./components/AuthenticatedDownload";

// function App() {
//   return (
//     <div className="App">
//       <AuthenticatedDownload
//         id="download-file"
//         url="http://localhost:3000/api/v1/documents"
//         title="Download File"
//       />
//     </div>
//   );
// }

// export default App;
