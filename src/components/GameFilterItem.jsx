import React from 'react';
import pt from 'prop-types';

const propTypes = {
  active: pt.bool.isRequired,
  label: pt.string.isRequired,
  count: pt.number.isRequired,
  onClick: pt.func.isRequired,
};

const GameFilterItem = ({
  active,
  count,
  label,
  onClick,
}) => (
  <li className={`game-filter-item ${activeToClass(active)}`} onClick={onClick}>
    <span className="game-filter-item__label">{label}</span>
    <span className="game-filter-item__count">{count}</span>
  </li>
);

function activeToClass(active) {
  return active ? 'game-filter-item--active' : '';
}

GameFilterItem.propTypes = propTypes;

export default GameFilterItem;
