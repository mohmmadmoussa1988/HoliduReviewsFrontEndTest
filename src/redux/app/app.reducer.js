import AppActionTypes from "./app.types";
import { getResultsCount, getData } from "../../utils/utils";
const INITIAL_STATE = {
  SHOW_LOADING: false,
  ERROR: "",
  RESULTS: {
    page: 1,
    data: [],
    count: 0,
    limit: 5,
    has_more: true,
  },
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppActionTypes.FETCH_REVIEWS_START:
      return {
        ...state,
        SHOW_LOADING: true,
      };
    case AppActionTypes.FETCH_REVIEWS_SUCCESS:
      const dataResults = getData(
        state.RESULTS.data,
        action.payload.reviews,
        action.payload.clear
      );
      return {
        ...state,
        SHOW_LOADING: false,
        ERROR: "",
        RESULTS: {
          ...state.RESULTS,
          data: dataResults,
          count: getResultsCount(dataResults),
          page: action.payload.page,
          has_more: true,
        },
      };
    case AppActionTypes.FETCH_FILTERED_REVIEWS_SUCCESS:
      return {
        ...state,
        SHOW_LOADING: false,
        ERROR: "",
        RESULTS: {
          ...state.RESULTS,
          data: action.payload.reviews,
          count: getResultsCount(action.payload.reviews),
          page: 1,
          has_more: false,
        },
      };

    case AppActionTypes.FETCH_REVIEWS_FAILURE:
      return {
        ...state,
        SHOW_LOADING: false,
        ERROR: "Error",
      };
    case AppActionTypes.NO_MORE_DATA_RETRIEVED:
      return {
        ...state,
        SHOW_LOADING: false,
        RESULTS: {
          ...state.RESULTS,
          has_more: false,
        },
      };
    case AppActionTypes.CLEAR_RESULTS:
      return {
        ...state,
        RESULTS: {
          page: 1,
          data: [],
          count: 0,
          limit: 5,
          has_more: true,
        },
      };

    default:
      return state;
  }
};

export default appReducer;
