import {
  FETCH_SPORTS_FAILURE,
  FETCH_SPORTS_REQUEST,
  FETCH_SPORTS_SUCCESS,
  GameFilters,
  GameStatusType,
  SELECT_SPORTS_FILTER,
} from './constants';

export const initialCount = {
  [GameFilters.ALL]: 0,
  [GameFilters.RESULT]: 0,
  [GameFilters.LIVE]: 0,
  [GameFilters.UPCOMING]: 0,
};

const initialState = {
  games: [],
  loading: false,
  error: undefined,
  filter: GameFilters.ALL,
  count: initialCount,
};

export const sportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPORTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: undefined,
        count: initialCount,
      };
    case FETCH_SPORTS_SUCCESS:
      return {
        ...state,
        games: action.payload.games,
        count: countGamesCategories(initialCount, action.payload.games),
        loading: false,
        error: undefined,
      };
    case FETCH_SPORTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    case SELECT_SPORTS_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
      };
    default:
      return state;
  }
};

function countGamesCategories(categoryCount, games) {
  const gamesToCategoryCount = (acc, game) => {
    if (game.status.type === GameStatusType.FINISHED) {
      return {
        ...acc,
        [GameFilters.RESULT]: acc[GameFilters.RESULT] + 1,
      };
    }
    if (game.status.type === GameStatusType.IN_PROGRESS) {
      return {
        ...acc,
        [GameFilters.LIVE]: acc[GameFilters.LIVE] + 1,
      };
    }
    if (game.status.type === GameStatusType.NOT_STARTED) {
      return {
        ...acc,
        [GameFilters.UPCOMING]: acc[GameFilters.UPCOMING] + 1,
      };
    }
    return acc;
  };

  const count = {
    ...categoryCount,
    [GameFilters.ALL]: games.length,
  };

  return games.reduce(gamesToCategoryCount, count);
}
