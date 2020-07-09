import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import pt from 'prop-types';

import {
  GameFilters,
  fetchSportsRequest,
  getFilteredGames,
  getSportsFilter,
  selectSportsFilter,
} from '../modules/sports';
import { GameList, gamePropType } from '../components';
import { getSportsError, getSportsFilterCount, getSportsLoading } from '../modules/sports/selectors';

const propTypes = {
  error: pt.string,
  loading: pt.bool.isRequired,
  fetchSports: pt.func.isRequired,
  games: pt.arrayOf(gamePropType).isRequired,
  gamesCount: pt.shape({
    [GameFilters.ALL]: pt.number.isRequired,
    [GameFilters.RESULT]: pt.number.isRequired,
    [GameFilters.LIVE]: pt.number.isRequired,
    [GameFilters.UPCOMING]: pt.number.isRequired,
  }).isRequired,
  selectedFilter: pt.string.isRequired,
  selectFilter: pt.func.isRequired,
};

export function SportsContainer({
  error,
  loading,
  fetchSports,
  games,
  gamesCount,
  selectedFilter,
  selectFilter,
}) {
  useEffect(() => {
    fetchSports();
  }, []);
  return (
    <GameList
      error={error}
      loading={loading}
      games={games}
      gamesCategoryCount={gamesCount}
      onSelectFilter={selectFilter}
      selectedFilter={selectedFilter}
    />
  );
}

SportsContainer.propTypes = propTypes;
SportsContainer.defaultProps = { error: undefined };

const mapStateToProps = (state) => ({
  games: getFilteredGames(state),
  gamesCount: getSportsFilterCount(state),
  selectedFilter: getSportsFilter(state),
  error: getSportsError(state),
  loading: getSportsLoading(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchSports: fetchSportsRequest,
  selectFilter: selectSportsFilter,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SportsContainer);
