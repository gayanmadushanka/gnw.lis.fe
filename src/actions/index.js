export const FETCH_TEMPLATES = "FETCH_TEMPLATES";
export const FETCH_TEMPLATES_SUCCESS = "FETCH_TEMPLATES_SUCCESS";
export const FETCH_TEMPLATES_FAILURE = "FETCH_TEMPLATES_FAILURE";

export const FETCH_TEMPLATE_METADATA = "FETCH_TEMPLATE_METADATA";
export const FETCH_TEMPLATE_METADATA_SUCCESS =
  "FETCH_TEMPLATE_METADATA_SUCCESS";
export const FETCH_TEMPLATE_METADATA_FAILURE =
  "FETCH_TEMPLATE_METADATA_FAILURE";

export const GENERATE_DOCUMENT = "GENERATE_DOCUMENT";
export const GENERATE_DOCUMENT_SUCCESS = "GENERATE_DOCUMENT_SUCCESS";
export const GENERATE_DOCUMENT_FAILURE = "GENERATE_DOCUMENT_FAILURE";

export const HANDLE_DRAWER_TOGGLE = "HANDLE_DRAWER_TOGGLE";

export const LOAD_DASHBOARD = "LOAD_DASHBOARD";
export const LOAD_CLIENTS = "LOAD_CLIENTS";

export const CLOSE_FORM = "CLOSE_FORM";

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

export const fetchTemplateMetadata = (_, rowData) => ({
  type: FETCH_TEMPLATE_METADATA,
  payload: {
    section: rowData.section,
    templateId: rowData.templateId,
  },
});

export const fetchTemplateMetadataSuccess = (templates) => ({
  type: FETCH_TEMPLATE_METADATA_SUCCESS,
  payload: templates,
});

export const fetchTemplateMetadataFailure = (message) => ({
  type: FETCH_TEMPLATE_METADATA_FAILURE,
  payload: message,
});

export const generateDocument = (formData) => {
  return {
    type: GENERATE_DOCUMENT,
    payload: {
      // section: formData.section,
      // templateId: formData.templateId,
      section: "524",
      templateId: "Beneficiaries lives in abroad",
      data: formData,
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

export const closeForm = () => ({
  type: CLOSE_FORM,
});
