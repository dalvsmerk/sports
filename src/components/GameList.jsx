import React from 'react';
import pt from 'prop-types';

import { GameFilters } from '../modules/sports';
import Game, { gamePropType } from './Game';
import GameFilter from './GameFilter';

const propTypes = {
  error: pt.string,
  loading: pt.bool.isRequired,
  games: pt.arrayOf(gamePropType).isRequired,
  gamesCategoryCount: pt.shape({
    [GameFilters.ALL]: pt.number.isRequired,
    [GameFilters.RESULT]: pt.number.isRequired,
    [GameFilters.LIVE]: pt.number.isRequired,
    [GameFilters.UPCOMING]: pt.number.isRequired,
  }).isRequired,
  onSelectFilter: pt.func.isRequired,
  selectedFilter: pt.string.isRequired,
};

const GameList = ({
  error,
  loading,
  games,
  gamesCategoryCount,
  onSelectFilter,
  selectedFilter,
}) => (
  <div className="game-list">
    {loading && <p className="game-list__loading">...Loading</p>}
    {error && <p className="game-list__error">{error}</p>}
    <div className="game-list__container">
      {games.map((game) => <Game key={game.id} game={game} />)}
    </div>
    <GameFilter
      count={gamesCategoryCount}
      onSelect={onSelectFilter}
      selectedFilter={selectedFilter}
    />
  </div>
);

GameList.propTypes = propTypes;
GameList.defaultProps = { error: undefined };

export default GameList;
