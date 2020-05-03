import {
  FETCH_TEMPLATES,
  FETCH_TEMPLATES_SUCCESS,
  FETCH_TEMPLATES_FAILURE,
  GENERATE_DOCUMENT,
  GENERATE_DOCUMENT_SUCCESS,
  GENERATE_DOCUMENT_FAILURE,
  HANDLE_DRAWER_TOGGLE,
  LOAD_DASHBOARD,
  LOAD_CLIENTS,
} from "../actions";

const initialState = {
  templates: null,
  isLoading: false,
  error: null,
  open: true,
  module: "Clients",
  sections: [
    {
      name: "Section 1",
      fields: [
        {
          id: "1",
          name: "firstName",
          label: "First Name",
          component: "input",
        },
        {
          id: "2",
          name: "firstName",
          label: "First Name",
          component: "input",
        },
      ],
    },
  ],
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
    case GENERATE_DOCUMENT:
      return {
        ...state,
        isLoading: true,
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
    default:
      return state;
  }
}
