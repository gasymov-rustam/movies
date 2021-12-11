import { createHookReducer } from "../../helpers/createHookReducer";
import * as types from "./types";

export const reducer = createHookReducer({
  [types.FETCH_MOVIES_REQUEST]: (state) => {
    return { ...state, isFetching: true };
  },
  [types.FETCH_MOVIES_TOTALPAGES]: (state, payload) => {
    return { ...state, totalPages: payload, isFetching: false };
  },
  [types.FETCH_MOVIES_SUCCESS]: (state, payload) => {
    console.log(payload.data);
    return { ...state, movies: payload?.data, isFetching: false };
  },
});
