import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import React from 'react';

import { SportsContainer } from './containers';
import { initStore } from './modules';

const store = initStore();

const App = () => (
  <Provider store={store}>
    <SportsContainer />
  </Provider>
);

export default hot(module)(App);
