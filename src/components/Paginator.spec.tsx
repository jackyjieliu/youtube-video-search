import React, { Component } from 'react';
import Paginator from './Paginator';
import { shallow } from 'enzyme';

describe.skip('<Paginator>', () => {

  function MockItemRenderer(props: { item: { id: string; } }) {
    return <div className='mock-item-renderer'>{props.item.id}</div>
  }

  function setup(customProps?: any) {
    const props = Object.assign({
      itemsPerPage: 3,
      items: [{ id: 5 }, { id: 4 }, { id: 3 }, { id: 2 }, { id: 1 }],
      component: MockItemRenderer
    }, customProps)

    const elem = shallow<Paginator<{ id: number }>>(<Paginator {...props} />);
    return elem;
  }

  it('should be able to go to a page', () => {

    window.scrollTo = () => {};

    const elem = setup();
    const pageNumberElem = elem.find('.cliclable-page-number');
    const pageNumber = pageNumberElem.text();

    pageNumberElem.simulate('click');

    const currentPage = elem.find('.current-page').text();

    expect(currentPage).toEqual(pageNumber);
  });

  it('should render items to display', () => {

    const elem = setup();
    expect(elem.find('.items').children().length).toEqual(3);
  });

  it('should render pagination elements', () => {
    const elem = setup();
    expect(elem.find('.pagination').children().length).toEqual(2);
  });
});
