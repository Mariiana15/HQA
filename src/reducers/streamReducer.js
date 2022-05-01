import _ from "lodash";
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  MAIN_CARD,
  PAGE_DASH,
  ASANA_OAUTH
} from "../actions/types";

const INTIAL_STATE = {
  card: null,
  page: null,
  asanaOauth: null,
};

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };



    case MAIN_CARD:
      return { ...state, card: action.payload };
    case PAGE_DASH:
      return { ...state, page: action.payload };

    case ASANA_OAUTH:
      return { ...state, asanaOauth: action.payload };



    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
export default streamReducer;
