import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import React from 'react';

import { initStore } from './modules';
import SportsContainer from './containers/SportsContainer';

const store = initStore();

const App = () => (
  <Provider store={store}>
    <SportsContainer />
  </Provider>
);

export default hot(module)(App);
