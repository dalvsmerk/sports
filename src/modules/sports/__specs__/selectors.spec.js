import {
  getSportsError,
  getSportsGames,
  getSportsLoading,
} from '../selectors';

describe('Sports state selectors', () => {
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
});
