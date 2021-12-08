import { createHookReducer } from "../../helpers/createHookReducer";
import * as types from "./types";

export const reducer = createHookReducer({
  [types.FETCH_MOVIES_REQUEST]: (state) => {
    return { ...state, isFetching: true };
  },
  [types.FETCH_MOVIES_SUCCESS]: (state, payload) => {
    return { ...state, movies: payload, isFetching: false };
  },
});
