import { createSelector } from 'reselect';

import { GameFilters, GameStatusType } from './constants';

const sportsState = (state) => state.sports;

export const getSportsLoading = createSelector(sportsState, (state) => state.loading);
export const getSportsGames = createSelector(sportsState, (state) => state.games);
export const getSportsError = createSelector(sportsState, (state) => state.error);
export const getSportsFilter = createSelector(sportsState, (state) => state.filter);
export const getSportsFilterCount = createSelector(sportsState, (state) => state.count);

const createGameFilter = (filter) => {
  switch (filter) {
    case GameFilters.RESULT:
      return ({ status }) => status.type === GameStatusType.FINISHED;
    case GameFilters.LIVE:
      return ({ status }) => status.type === GameStatusType.IN_PROGRESS;
    case GameFilters.UPCOMING:
      return ({ status }) => status.type === GameStatusType.NOT_STARTED;
    default:
      return () => true;
  }
};

export const getFilteredGames = createSelector(sportsState, ({ games, filter }) => {
  const gameFilter = createGameFilter(filter);
  return games.filter(gameFilter);
});
