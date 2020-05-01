import React from 'react';
import Spinner from './Spinner';
import { shallow } from 'enzyme';

describe('<Spinner>', () => {
  function setup(customProps?: any) {
    const elem = shallow(<Spinner />);
    return elem;
  }

  it('should display spinner', () => {
    const elem = setup({});
    expect(elem.find('.spinner').length).toEqual(1);
  });
});
