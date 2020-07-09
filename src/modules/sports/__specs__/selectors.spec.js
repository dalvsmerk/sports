import { GameFilters, GameStatusType } from '../constants';
import {
  getFilteredGames,
  getSportsError,
  getSportsFilterCount,
  getSportsGames,
  getSportsLoading,
} from '../selectors';
import { initialCount } from '../reducer';

describe('Sports state selectors', () => {
  const gamesForFilter = [
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

  it('should select loading state', () => {
    const state = {
      sports: {
        loading: false,
      },
    };

    const selected = getSportsLoading(state);
    expect(selected).toBe(false);
  });

  it('should select games state', () => {
    const games = [{ id: '0001' }];
    const state = { sports: { games } };

    const selected = getSportsGames(state);
    expect(selected).toEqual(games);
  });

  it('should select error state', () => {
    const message = 'Unable to fetch resource';
    const state = { sports: { error: message } };

    const selected = getSportsError(state);
    expect(selected).toBe(message);
  });

  it('should filter games by currently selected filter: ALL', () => {
    const filter = GameFilters.ALL;
    const state = { sports: { games: gamesForFilter, filter } };

    const selected = getFilteredGames(state);
    expect(selected.length).toBe(gamesForFilter.length);
  });

  it('should filter games by currently selected filter: RESULT', () => {
    const filter = GameFilters.RESULT;
    const state = { sports: { games: gamesForFilter, filter } };

    const selected = getFilteredGames(state);

    const isFinished = (game) => game.status.type === GameStatusType.FINISHED;

    expect(selected.length).toBe(2);
    expect(selected.every(isFinished)).toBeTruthy();
  });

  it('should filter games by currently selected filter: LIVE', () => {
    const filter = GameFilters.LIVE;
    const state = { sports: { games: gamesForFilter, filter } };

    const selected = getFilteredGames(state);
    expect(selected.length).toBe(3);

    const isInProgress = (game) => game.status.type === GameStatusType.IN_PROGRESS;
    expect(selected.every(isInProgress)).toBeTruthy();
  });

  it('should filter games by currently selected filter: UPCOMING', () => {
    const filter = GameFilters.UPCOMING;
    const state = { sports: { games: gamesForFilter, filter } };

    const selected = getFilteredGames(state);
    expect(selected.length).toBe(4);

    const isNotStarted = (game) => game.status.type === GameStatusType.NOT_STARTED;
    expect(selected.every(isNotStarted)).toBeTruthy();
  });

  it('should select games categories count', () => {
    const state = { sports: { count: initialCount } };
    const expected = initialCount;

    const selected = getSportsFilterCount(state);
    expect(selected).toEqual(expected);
  });
});
