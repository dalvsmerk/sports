import { mount } from 'enzyme';
import React from 'react';

import App from '../App';

describe('App container', () => {
  it('should mount', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toBeTruthy();
  });
});
