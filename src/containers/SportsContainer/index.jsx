import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import pt from 'prop-types';

import { fetchSportsRequest } from '../../modules/sports';

const propTypes = {
  fetchSports: pt.func.isRequired,
};

function SportsContainer({ fetchSports }) {
  useEffect(() => {
    fetchSports();
  }, []);
  // @TODO: Render pure SportsList component
  return <p>sports</p>;
}

SportsContainer.propTypes = propTypes;

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchSports: fetchSportsRequest,
}, dispatch);

export default connect(null, mapDispatchToProps)(SportsContainer);
