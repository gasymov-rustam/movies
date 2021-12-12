import { createContext, useCallback, useReducer, useMemo } from "react";
import { reducer } from "./reducer";
import { initialState } from "./initialState";
import * as moviesApi from "../../api/movies";
import * as types from "./types";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchMovies = (url, config) => {
    dispatch({ type: types.FETCH_MOVIES_REQUEST });
    moviesApi.getMovies(url, config).then((response) => {
      dispatch({ type: types.FETCH_MOVIES_SUCCESS, payload: response });
      dispatch({ type: types.FETCH_MOVIES_TOTALPAGES, payload: response?.data["total_pages"] });
    });
  };

  const fetchSortMovies = useCallback(
    () => (config) => {
      dispatch({ type: types.FETCH_MOVIES_REQUEST });
      moviesApi.getSortMovies(config).then((response) => {
        dispatch({ type: types.FETCH_MOVIES_SUCCESS, payload: response });
        dispatch({ type: types.FETCH_MOVIES_TOTALPAGES, payload: response?.data["total_pages"] });
      });
    },
    []
  );
  // const setNewSortParams = (data) => {
  //   dispatch({ type: types.FETCH_MOVIES_SORT_PARAMS, payload: data });
  // };

  const providerValue = useMemo(
    () => ({
      ...state,
      fetchMovies,
    }),
    [state]
  );

  return <MoviesContext.Provider value={providerValue}>{children}</MoviesContext.Provider>;
};
