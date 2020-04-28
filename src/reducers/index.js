import {
  FETCH_TEMPLATES,
  FETCH_TEMPLATES_SUCCESS,
  FETCH_TEMPLATES_FAILURE,
} from "../actions";

const initialState = {
  templates: [],
  isLoading: false,
  error: null,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TEMPLATES:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_TEMPLATES_SUCCESS:
      return {
        ...state,
        templates: [...action.payload],
        isLoading: false,
        error: null,
      };
    case FETCH_TEMPLATES_FAILURE:
      return {
        ...state,
        templates: [],
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
