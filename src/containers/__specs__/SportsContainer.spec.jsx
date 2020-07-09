import { mount } from 'enzyme';
import { spy } from 'sinon';
import React from 'react';

import { SportsContainer } from '../SportsContainer';

describe('SportsContainer', () => {
  it('should fetch sports once on mount', () => {
    const fetchSports = spy();
    mount(<SportsContainer fetchSports={fetchSports} />);

    expect(fetchSports.calledOnce).toBeTruthy();
  });
});
