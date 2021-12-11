import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { initialState } from "./initialState";
import * as moviesApi from "../../api/movies";
import * as types from "./types";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchMovies = (config) => {
    dispatch({ type: types.FETCH_MOVIES_REQUEST });
    moviesApi.getMovies(config).then((response) => {
      dispatch({ type: types.FETCH_MOVIES_SUCCESS, payload: response });
      dispatch({ type: types.FETCH_MOVIES_TOTALPAGES, payload: response?.data["total_pages"] });
    });
  };

  const fetchSortMovies = (config) => {
    dispatch({ type: types.FETCH_MOVIES_REQUEST });
    moviesApi.getSortMovies(config).then((response) => {
      dispatch({ type: types.FETCH_MOVIES_SUCCESS, payload: response });
      dispatch({ type: types.FETCH_MOVIES_TOTALPAGES, payload: response?.data["total_pages"] });
    });
  };

  const providerValue = {
    ...state,
    fetchMovies,
    fetchSortMovies,
  };

  return <MoviesContext.Provider value={providerValue}>{children}</MoviesContext.Provider>;
};
