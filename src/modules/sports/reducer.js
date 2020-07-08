import {
  FETCH_SPORTS_FAILURE,
  FETCH_SPORTS_REQUEST,
  FETCH_SPORTS_SUCCESS,
} from './constants';

const initialState = {
  games: [],
  loading: false,
  error: undefined,
};

export const sportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPORTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case FETCH_SPORTS_SUCCESS:
      return {
        ...state,
        games: action.payload.games,
        loading: false,
        error: undefined,
      };
    case FETCH_SPORTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};
