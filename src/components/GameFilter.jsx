import React from 'react';
import pt from 'prop-types';

import { GameFilters } from '../modules/sports';
import GameFilterItem from './GameFilterItem';

const filters = [
  GameFilters.ALL,
  GameFilters.RESULT,
  GameFilters.LIVE,
  GameFilters.UPCOMING,
];

const propTypes = {
  count: pt.shape({
    [GameFilters.ALL]: pt.number.isRequired,
    [GameFilters.RESULT]: pt.number.isRequired,
    [GameFilters.LIVE]: pt.number.isRequired,
    [GameFilters.UPCOMING]: pt.number.isRequired,
  }).isRequired,
  selectedFilter: pt.oneOf(filters).isRequired,
  onSelect: pt.func.isRequired,
};

const GameFilter = ({ count, selectedFilter, onSelect }) => {
  const handleSelect = (filter) => () => onSelect(filter);
  return (
    <div className="game-filter">
      <p className="game-filter__heading">Filters</p>
      <ul className="game-filter__list">
        {filters.map((filter) => (
          <GameFilterItem
            key={filter}
            label={filter}
            active={selectedFilter === filter}
            count={count[filter]}
            onClick={handleSelect(filter)}
          />
        ))}
      </ul>
    </div>
  );
};

GameFilter.propTypes = propTypes;

export default GameFilter;
