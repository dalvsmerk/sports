import { GameFilters, GameStatusType } from '../constants';
import {
  fetchSportsFailure,
  fetchSportsRequest,
  fetchSportsSuccess,
  selectSportsFilter,
} from '../actions';
import { initialCount, sportsReducer } from '../reducer';

describe('Sports module reducer', () => {
  it('should set loading state on sports fetch request', () => {
    const expected = {
      filter: GameFilters.ALL,
      loading: true,
      error: undefined,
      games: [],
      count: initialCount,
    };

    const nextState = sportsReducer(undefined, fetchSportsRequest());
    expect(nextState).toEqual(expected);
  });

  it('should set fetched games on sports fetch success', () => {
    const games = [
      {
        id: '0001',
        name: 'Liverpool - FC Barcelona',
        status: { type: GameStatusType.FINISHED },
      },
      {
        id: '0001',
        name: 'Manchester United F.C. - FC Bayern Munich',
        status: { type: GameStatusType.FINISHED },
      },
    ];

    const state = {
      filter: GameFilters.ALL,
      loading: true,
      games: [],
      error: undefined,
      count: initialCount,
    };

    const expected = {
      filter: GameFilters.ALL,
      loading: false,
      error: undefined,
      count: {
        ...initialCount,
        [GameFilters.ALL]: 2,
        [GameFilters.RESULT]: 2,
      },
      games,
    };

    const nextState = sportsReducer(state, fetchSportsSuccess(games));
    expect(nextState).toEqual(expected);
  });

  it('should handle error on sports fetch failure', () => {
    const message = 'Unable to obtain resource';

    const state = {
      filter: GameFilters.ALL,
      loading: true,
      games: [],
      error: undefined,
    };

    const expected = {
      filter: GameFilters.ALL,
      loading: false,
      games: [],
      error: message,
    };

    const nextState = sportsReducer(state, fetchSportsFailure(message));
    expect(nextState).toEqual(expected);
  });

  it('should set selected filter', () => {
    const filter = GameFilters.LIVE;

    const expected = {
      loading: false,
      games: [],
      count: initialCount,
      error: undefined,
      filter,
    };

    const nextState = sportsReducer(undefined, selectSportsFilter(filter));
    expect(nextState).toEqual(expected);
  });

  it('should count games categories correctly', () => {
    const games = [
      { id: '0001', status: { type: GameStatusType.FINISHED } },
      { id: '0002', status: { type: GameStatusType.FINISHED } },
      { id: '0003', status: { type: GameStatusType.IN_PROGRESS } },
      { id: '0004', status: { type: GameStatusType.IN_PROGRESS } },
      { id: '0005', status: { type: GameStatusType.IN_PROGRESS } },
      { id: '0006', status: { type: GameStatusType.CANCELLED } },
      { id: '0007', status: { type: GameStatusType.NOT_STARTED } },
      { id: '0008', status: { type: GameStatusType.NOT_STARTED } },
      { id: '0009', status: { type: GameStatusType.NOT_STARTED } },
      { id: '0010', status: { type: GameStatusType.NOT_STARTED } },
    ];

    const expectedCount = {
      [GameFilters.ALL]: games.length,
      [GameFilters.RESULT]: 2,
      [GameFilters.LIVE]: 3,
      [GameFilters.UPCOMING]: 4,
    };

    const state = {
      filter: GameFilters.ALL,
      loading: true,
      count: initialCount,
      games: [],
      error: undefined,
    };

    const expected = {
      filter: GameFilters.ALL,
      loading: false,
      error: undefined,
      count: expectedCount,
      games,
    };

    const nextState = sportsReducer(state, fetchSportsSuccess(games));
    expect(nextState).toEqual(expected);
  });
});
