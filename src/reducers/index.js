import {
  FETCH_TEMPLATES,
  FETCH_TEMPLATES_SUCCESS,
  FETCH_TEMPLATES_FAILURE,
  GENERATE_DOCUMENT,
  GENERATE_DOCUMENT_SUCCESS,
  GENERATE_DOCUMENT_FAILURE,
  HANDLE_DRAWER_TOGGLE,
  LOAD_DASHBOARD,
  LOAD_DOCUMENTS,
} from "../actions";

const initialState = {
  templates: null,
  isLoading: false,
  error: null,
  message: null,
  open: true,
  module: "Dashboard",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TEMPLATES:
      return {
        ...state,
        isLoading: true,
        error: null,
        message: null,
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
    case GENERATE_DOCUMENT:
      return {
        ...state,
        isLoading: true,
        error: null,
        message: null,
      };
    case GENERATE_DOCUMENT_SUCCESS:
      return {
        ...state,
        message: action.payload,
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
    case LOAD_DOCUMENTS:
      return {
        ...state,
        module: "Documents",
      };
    default:
      return state;
  }
}
