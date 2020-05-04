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
  fields: [
    {
      id: "firstName",
      label: "First Name",
      type: "text",
      // validationType: "string",
      // validations: [
      //   {
      //     type: "required",
      //     params: ["this field is required"],
      //   },
      //   {
      //     type: "min",
      //     params: [5, "name cannot be less than 5 characters"],
      //   },
      //   {
      //     type: "max",
      //     params: [10, "name cannot be more than 10 characters"],
      //   },
      // ],
    },
    // {
    //   id: "lastName",
    //   label: "Last Name",
    //   type: "text",
    // },
    // {
    //   id: "phoneNo",
    //   label: "Phone No",
    //   type: "text",
    // },
    // {
    //   id: "dateOfBirth",
    //   label: "Date of birth",
    //   type: "date",
    // },
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
