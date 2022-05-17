import streams from "../apis/streams";

import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,


  MAIN_CARD,
  PAGE_DASH,
  TOKEN,
  ASANA_PROJECT,
  ASANA_SESCTION,
  US, 
  MENU,
  OPENMENU,
  FILTER,
  FILTERSPRING,
  ORDER,
  INDEXPROJECT,
  VALIDATE
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams", { ...formValues, userId });

  dispatch({ type: CREATE_STREAM, payload: response.data });
 // history.push("/");
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
 // history.push("/");
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
 // history.push("/");
};


export const mainCard = (card) => {
  return {
    type: MAIN_CARD,
    payload: card,
  };
};

export const pageDash = (page) => {
  return {
    type: PAGE_DASH,
    payload: page,
  };
};

export const asanaSetProjectId = (id) => {
  return {
    type: ASANA_PROJECT,
    payload: id,
  };
};

export const asanaSetSectionId = (id) => {
  return {
    type: ASANA_SESCTION,
    payload: id,
  };
};

export const setUS = (uss) => {
  return {
    type: US,
    payload: uss,
  };
};


export const setTokenHack = (token) => {
  return {
    type: TOKEN,
    payload: token,
  };
};

export const setMenu = (menu) => {
  return {
    type: MENU,
    payload: menu,
  };
};

export const openMenu = (open) => {
  return {
    type: OPENMENU,
    payload: open,
  };
};

export const filterSearch = (filter) => {
  return {
    type: FILTER,
    payload: filter,
  };
};

export const filterSpring = (filter) => {
  return {
    type: FILTERSPRING,
    payload: filter,
  };
};

export const orderStory = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

export const setIndexProject = (index) => {
  return {
    type: INDEXPROJECT,
    payload: index,
  };
};

export const setValidateSyncAsana = (v) => {
  return {
    type: VALIDATE,
    payload: v,
  };
};