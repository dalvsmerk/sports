import {
  fetchSportsFailure,
  fetchSportsRequest,
  fetchSportsSuccess,
} from '../actions';
import { sportsReducer } from '../reducer';

describe('Sports module reducer', () => {
  it('should set loading state on sports fetch request', () => {
    const expected = {
      loading: true,
      error: undefined,
      games: [],
    };

    const nextState = sportsReducer(undefined, fetchSportsRequest());
    expect(nextState).toEqual(expected);
  });

  it('should set fetched games on sports fetch success', () => {
    const games = [
      { id: '0001', name: 'Liverpool - FC Barcelona' },
      { id: '0001', name: 'Manchester United F.C. - FC Bayern Munich' },
    ];

    const state = {
      loading: true,
      games: [],
      error: undefined,
    };

    const expected = {
      loading: false,
      error: undefined,
      games,
    };

    const nextState = sportsReducer(state, fetchSportsSuccess(games));
    expect(nextState).toEqual(expected);
  });

  it('should handle error on sports fetch failure', () => {
    const message = 'Unable to obtain resource';

    const state = {
      loading: true,
      games: [],
      error: undefined,
    };

    const expected = {
      loading: false,
      games: [],
      error: message,
    };

    const nextState = sportsReducer(state, fetchSportsFailure(message));
    expect(nextState).toEqual(expected);
  });
});
