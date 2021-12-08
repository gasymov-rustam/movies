import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { initialState } from "./initialState";
import * as moviesApi from "../../api/movies";
import * as types from "./types";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchMovies = () => {
    dispatch({ type: types.FETCH_MOVIES_REQUEST });
    moviesApi.getMovies().then((response) => {
      dispatch({ type: types.FETCH_MOVIES_SUCCESS, payload: response });
    });
  };

  const providerValue = {
    ...state,
    fetchMovies,
  };

  return <MoviesContext.Provider value={providerValue}>{children}</MoviesContext.Provider>;
};
