import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import pt from 'prop-types';

import { GameList, gamePropType } from '../components';
import { fetchSportsRequest, getSportsGames } from '../modules/sports';

const propTypes = {
  games: pt.arrayOf(gamePropType).isRequired,
  fetchSports: pt.func.isRequired,
};

export function SportsContainer({ fetchSports, games }) {
  useEffect(() => {
    fetchSports();
  }, []);
  return <GameList games={games} />;
}

SportsContainer.propTypes = propTypes;

const mapStateToProps = (state) => ({
  games: getSportsGames(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchSports: fetchSportsRequest,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SportsContainer);
