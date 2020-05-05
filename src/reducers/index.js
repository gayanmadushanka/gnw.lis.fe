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
      validationType: "string",
      validations: [
        {
          type: "required",
          params: ["this field is required"],
        },
      ],
    },
    {
      id: "lastName",
      label: "Last Name",
      type: "text",
      validationType: "string",
      validations: [
        {
          type: "required",
          params: ["this field is required"],
        },
      ],
    },
    {
      id: "phoneNumber",
      label: "Phone Number",
      type: "text",
      validationType: "string",
      validations: [
        {
          type: "required",
          params: ["phone number is required"],
        },
        {
          type: "phone",
          params: ["LK", true],
        },
        // {
        //   type: "min",
        //   params: [10, "phone number cannot be less than 10 characters"],
        // },
        // {
        //   type: "max",
        //   params: [11, "phone number cannot be more than 10 characters"],
        // },
      ],
    },
    {
      id: "email",
      label: "Email",
      type: "text",
      validationType: "string",
      validations: [
        {
          type: "required",
          params: ["this field is required"],
        },
        {
          type: "email",
          params: ["please enter a valid email"],
        },
      ],
    },
    // {
    //   id: "dateOfBirth",
    //   label: "Date of birth",
    //   type: "date",
    //   validationType: "date",
    //   // validations: null,
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
