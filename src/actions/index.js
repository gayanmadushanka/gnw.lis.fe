export const FETCH_TEMPLATES = "FETCH_TEMPLATES";
export const FETCH_TEMPLATES_SUCCESS = "FETCH_TEMPLATES_SUCCESS";
export const FETCH_TEMPLATES_FAILURE = "FETCH_TEMPLATES_FAILURE";

export const fetchTemplates = () => ({
  type: FETCH_TEMPLATES,
});

export const fetchTemplatesSuccess = (Templates) => ({
  type: FETCH_TEMPLATES_SUCCESS,
  payload: Templates,
});

export const fetchTemplatesFailure = (message) => ({
  type: FETCH_TEMPLATES_FAILURE,
  payload: message,
});
