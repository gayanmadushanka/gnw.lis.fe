import {
  FETCH_TEMPLATES,
  FETCH_TEMPLATES_SUCCESS,
  FETCH_TEMPLATES_FAILURE,
  FETCH_TEMPLATE_METADATA,
  FETCH_TEMPLATE_METADATA_SUCCESS,
  FETCH_TEMPLATE_METADATA_FAILURE,
  GENERATE_DOCUMENT,
  GENERATE_DOCUMENT_SUCCESS,
  GENERATE_DOCUMENT_FAILURE,
  HANDLE_DRAWER_TOGGLE,
  LOAD_DASHBOARD,
  LOAD_CLIENTS,
  CLOSE_FORM,
} from "../actions";

const initialState = {
  templates: null,
  isLoading: false,
  error: null,
  open: true,
  module: "Documents",
  loadForm: false,
  fields: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TEMPLATES:
      return {
        ...state,
        isLoading: true,
        error: null,
        module: "Documents",
      };
    case FETCH_TEMPLATES_SUCCESS:
      return {
        ...state,
        templates: [...action.payload],
        isLoading: false,
      };
    case FETCH_TEMPLATES_FAILURE:
      return {
        ...state,
        templates: [],
        isLoading: false,
        error: action.payload,
      };
    case FETCH_TEMPLATE_METADATA:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_TEMPLATE_METADATA_SUCCESS:
      return {
        ...state,
        fields: [...action.payload.fields],
        loadForm: true,
        isLoading: false,
      };
    case FETCH_TEMPLATE_METADATA_FAILURE:
      return {
        ...state,
        fields: [],
        isLoading: false,
        error: action.payload,
      };
    case GENERATE_DOCUMENT:
      return {
        ...state,
        isLoading: true,
        loadForm: false,
        error: null,
      };
    case GENERATE_DOCUMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case GENERATE_DOCUMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case HANDLE_DRAWER_TOGGLE:
      return {
        ...state,
        open: !state.open,
      };
    case LOAD_DASHBOARD:
      return {
        ...state,
        module: "Dashboard",
      };
    case LOAD_CLIENTS:
      return {
        ...state,
        module: "Clients",
      };
    case CLOSE_FORM:
      return {
        ...state,
        loadForm: false,
      };
    default:
      return state;
  }
}
