import { call, put } from 'redux-saga/effects';

import { fetchSports } from '../../api';
import { fetchSportsFailure, fetchSportsSuccess } from '../../actions';
import fetchSportsSaga from '../fetchSportsSaga';

describe('Fetch sports saga', () => {
  it('should emit games fetch success action', () => {
    const games = [{ id: '0001' }, { id: '0002' }];
    const gen = fetchSportsSaga();

    expect(gen.next().value).toEqual(call(fetchSports));
    expect(gen.next(games).value).toEqual(put(fetchSportsSuccess(games)));
  });

  it('should handle games fetch failure', () => {
    const message = 'Resource is not available';
    const gen = fetchSportsSaga();

    gen.next();

    const error = { message };
    expect(gen.throw(error).value).toEqual(put(fetchSportsFailure(message)));
  });
});
