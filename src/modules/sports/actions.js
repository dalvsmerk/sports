import {
  FETCH_SPORTS_FAILURE,
  FETCH_SPORTS_REQUEST,
  FETCH_SPORTS_SUCCESS,
  SELECT_SPORTS_FILTER,
} from './constants';

export const fetchSportsRequest = () => ({
  type: FETCH_SPORTS_REQUEST,
});

export const fetchSportsSuccess = (games) => ({
  type: FETCH_SPORTS_SUCCESS,
  payload: { games },
});

export const fetchSportsFailure = (message) => ({
  type: FETCH_SPORTS_FAILURE,
  payload: { message },
});

export const selectSportsFilter = (filter) => ({
  type: SELECT_SPORTS_FILTER,
  payload: { filter },
});
