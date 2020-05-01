import React from 'react';
import sinon from 'sinon';
import AppBar from './AppBar';
import { shallow } from 'enzyme';

describe('<AppBar>', () => {
  it('should render app bar', () => {

    const elem = shallow(<AppBar/>);
    expect(elem.find('.app-bar').length).toEqual(1);
  });

  it('should render child components', () => {

    const elem = shallow(<AppBar><div className='content'></div></AppBar>);
    expect(elem.find('.content').length).toEqual(1);
  });
});
