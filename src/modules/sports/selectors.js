import { createSelector } from 'reselect';

const sportsState = (state) => state.sports;

export const getSportsLoading = createSelector(sportsState, (state) => state.loading);
export const getSportsGames = createSelector(sportsState, (state) => state.games);
export const getSportsError = createSelector(sportsState, (state) => state.error);
