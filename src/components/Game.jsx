import React from 'react';
import pt from 'prop-types';

import { formatDate } from '../utils/formatting';
import GameTime from './GameTime';

const gameStatusPropType = pt.oneOf([
  'inprogress',
  'notstarted',
  'finished',
  'canceled',
]);

export const gamePropType = pt.shape({
  id: pt.string.isRequired,
  competition: pt.string.isRequired,
  country: pt.string.isRequired,
  timestamp: pt.number.isRequired,
  status: pt.shape({
    type: gameStatusPropType.isRequired,
  }).isRequired,
  homeTeam: pt.shape({
    name: pt.string.isRequired,
  }).isRequired,
  awayTeam: pt.shape({
    name: pt.string.isRequired,
  }).isRequired,
  homeScore: pt.shape({
    current: pt.number,
  }).isRequired,
  awayScore: pt.shape({
    current: pt.number,
  }).isRequired,
  liveStatus: pt.string.isRequired,
});

const propTypes = {
  game: gamePropType.isRequired,
};

const Game = ({
  game: {
    country,
    competition,
    status,
    timestamp,
    homeScore,
    awayScore,
    homeTeam,
    awayTeam,
    liveStatus,
  },
}) => (
  <div className="game">
    <p className="game__country">{country}</p>
    <p className="game__competition">{competition}</p>
    <p className={`game__status ${statusToClassName(status.type)}`}>
      {statusToLabel(status.type, timestamp)}
    </p>
    <p className="game__score">
      {`${homeScore.current || 0} - ${awayScore.current || 0}`}
    </p>
    <div className="game__competitors game-competitors">
      <p className="game-competitors__home">{homeTeam.name}</p>
      <div className="game-competitors__time">
        <GameTime status={liveStatus} />
      </div>
      <p className="game-competitors__away">{awayTeam.name}</p>
    </div>
  </div>
);

function statusToLabel(status, timestamp) {
  return {
    inprogress: 'Live',
    notstarted: formatDate(timestamp),
    finished: 'Ended',
    canceled: 'Cancelled',
  }[status];
}

function statusToClassName(status) {
  return {
    inprogress: 'game__status--live',
    notstarted: 'game__status--not-started',
    finished: 'game__status--ended',
    canceled: 'game__status--cancelled',
  }[status];
}

Game.propTypes = propTypes;

export default Game;
