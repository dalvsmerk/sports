import {
  FETCH_SPORTS_FAILURE,
  FETCH_SPORTS_REQUEST,
  FETCH_SPORTS_SUCCESS,
  GameFilters,
  SELECT_SPORTS_FILTER,
} from '../constants';
import {
  fetchSportsFailure,
  fetchSportsRequest,
  fetchSportsSuccess,
  selectSportsFilter,
} from '../actions';

describe('Sports module action creators', () => {
  it('should create fetch sports request action', () => {
    const expected = {
      type: FETCH_SPORTS_REQUEST,
    };

    const action = fetchSportsRequest();
    expect(action).toEqual(expected);
  });

  it('should create fetch sports success action', () => {
    const games = [
      { id: '0001', name: 'Liverpool - FC Barcelona' },
      { id: '0001', name: 'Manchester United F.C. - FC Bayern Munich' },
    ];

    const expected = {
      type: FETCH_SPORTS_SUCCESS,
      payload: { games },
    };

    const action = fetchSportsSuccess(games);
    expect(action).toEqual(expected);
  });

  it('should create fetch sports failure action', () => {
    const message = 'Unable to obtain resource';

    const expected = {
      type: FETCH_SPORTS_FAILURE,
      payload: { message },
    };

    const action = fetchSportsFailure(message);
    expect(action).toEqual(expected);
  });

  it('should create select sports filter action', () => {
    const filter = GameFilters.LIVE;

    const expected = {
      type: SELECT_SPORTS_FILTER,
      payload: { filter },
    };

    const action = selectSportsFilter(filter);
    expect(action).toEqual(expected);
  });
});
