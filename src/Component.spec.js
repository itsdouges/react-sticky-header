import React from 'react';
import { shallow } from 'enzyme';
import Component from './Component';

describe('<Component />', () => {
  it('should render with intial count', () => {
    const wrapper = shallow(<Component initialCount={2} />);

    expect(wrapper.find('span')).to.contain(2);
  });

  it('should increment', () => {
    const wrapper = shallow(<Component initialCount={1} />);

    wrapper.find('button').simulate('click');

    expect(wrapper.find('span')).to.contain(2);
  });
});
