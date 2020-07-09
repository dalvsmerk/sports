import React from 'react';
import pt from 'prop-types';

const propTypes = {
  status: pt.string.isRequired,
};

const GameTime = ({ status }) => (
  <svg
    className="game-time"
    viewBox="0 0 40 40"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="20"
      cy="20"
      r="19"
      fill="transparent"
      className="game-time__inner-circle"
    />
    <circle
      cx="20"
      cy="20"
      r="19"
      fill="transparent"
      className="game-time__circle"
      strokeWidth={timeToWidth(status)}
      strokeDasharray={timeToDashArray(status)}
    />

    <text
      x="50%"
      y="63%"
      className={`game-time__status ${liveStatusToTextClass(status)}`}
    >
      {liveStatusToLabel(status)}
    </text>
  </svg>
);

function liveStatusToLabel(status) {
  if (status === 'FT' || status === 'HT') return status;
  if (status === '-' || status === 'Canceled') return '';
  return `${status}'`;
}

function liveStatusToTextClass(status) {
  if (status === 'FT' || status === 'HT') return 'game-time__status--passed';
  return 'game-time__status--active';
}

function timeToWidth(status) {
  if (status === '-' || status === 'Canceled') return '0';
  return '1';
}

function timeToDashArray(status) {
  const time = parseInt(status, 10);

  if (isNaN(time)) {
    return '0';
  }

  const maxTime = 90;
  const timeNorm = (time / maxTime) * 100;

  return `${timeNorm} ${100 - timeNorm}`;
}

GameTime.propTypes = propTypes;

export default GameTime;
