export const FETCH_TEMPLATES = "FETCH_TEMPLATES";
export const FETCH_TEMPLATES_SUCCESS = "FETCH_TEMPLATES_SUCCESS";
export const FETCH_TEMPLATES_FAILURE = "FETCH_TEMPLATES_FAILURE";

export const GENERATE_DOCUMENT = "GENERATE_DOCUMENT";
export const GENERATE_DOCUMENT_SUCCESS = "GENERATE_DOCUMENT_SUCCESS";
export const GENERATE_DOCUMENT_FAILURE = "GENERATE_DOCUMENT_FAILURE";

export const HANDLE_DRAWER_TOGGLE = "HANDLE_DRAWER_TOGGLE";

export const LOAD_DASHBOARD = "LOAD_DASHBOARD";
export const LOAD_CLIENTS = "LOAD_CLIENTS";

export const fetchTemplates = () => ({
  type: FETCH_TEMPLATES,
});

export const fetchTemplatesSuccess = (templates) => ({
  type: FETCH_TEMPLATES_SUCCESS,
  payload: templates,
});

export const fetchTemplatesFailure = (message) => ({
  type: FETCH_TEMPLATES_FAILURE,
  payload: message,
});

export const generateDocument = (event, rowData) => {
  return {
    type: GENERATE_DOCUMENT,
    payload: {
      section: rowData.section,
      templateName: rowData.templateName,
      data: {
        firstName: "ගයාන්",
        lastName: "මධූශංඛ",
        phoneNo: "0714254030",
        date: "Sat May 02 2020",
      },
    },
  };
};

export const generateDocumentSuccess = () => ({
  type: GENERATE_DOCUMENT_SUCCESS,
});

export const generateDocumentFailure = (message) => ({
  type: GENERATE_DOCUMENT_FAILURE,
  payload: message,
});

export const handleDrawerToggle = () => ({
  type: HANDLE_DRAWER_TOGGLE,
});

export const loadDashboard = () => ({
  type: LOAD_DASHBOARD,
});

export const loadClients = () => ({
  type: LOAD_CLIENTS,
});
