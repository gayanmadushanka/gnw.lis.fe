export const FETCH_TEMPLATES = "FETCH_TEMPLATES";
export const FETCH_TEMPLATES_SUCCESS = "FETCH_TEMPLATES_SUCCESS";
export const FETCH_TEMPLATES_FAILURE = "FETCH_TEMPLATES_FAILURE";

export const GENERATE_DOCUMENT = "GENERATE_DOCUMENT";
export const GENERATE_DOCUMENT_SUCCESS = "GENERATE_DOCUMENT_SUCCESS";
export const GENERATE_DOCUMENT_FAILURE = "GENERATE_DOCUMENT_FAILURE";

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

export const generateDocument = () => ({
  type: GENERATE_DOCUMENT,
});

export const generateDocumentSuccess = (message) => ({
  type: GENERATE_DOCUMENT_SUCCESS,
  payload: message,
});

export const generateDocumentFailure = (message) => ({
  type: GENERATE_DOCUMENT_FAILURE,
  payload: message,
});
