import React from 'react';
import pt from 'prop-types';

import Game, { gamePropType } from './Game';

const propTypes = {
  games: pt.arrayOf(gamePropType).isRequired,
};

const GameList = ({ games }) => (
  <div className="game-list">
    <div className="game-list__container">
      {games.map((game) => <Game key={game.id} game={game} />)}
    </div>
    {/* @TODO: Render filters */}
  </div>
);

GameList.propTypes = propTypes;

export default GameList;
