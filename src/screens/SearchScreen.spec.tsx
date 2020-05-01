import React, { Component } from 'react';
import { SearchScreen, mapStateToProps, mapDispatchToProps } from './SearchScreen';
import { shallow } from 'enzyme';
import Sinon, * as sinon from 'sinon';
import * as searchActions from '../store/search/searchActions';

describe.skip('<SearchScreen>', () => {

  function setup(customProps?: any) {
    const props = Object.assign({
      searchTerm: '',
      results: [],
      isError: false,
      isLoading: false,
      searchVideos: () => {}
    }, customProps)

    const elem = shallow<SearchScreen>(<SearchScreen {...props} />);
    return elem;
  }

  it('should render spinner while loading', () => {

    const elem = setup({
      isLoading: true
    });
    expect(elem.find('Spinner').length).toEqual(1);
  });

  it('should render error text when there is an error', () => {

    const elem = setup({
      isError: true
    });
    expect(elem.find('.search-screen-info').text()).toEqual('An error occurred. Please try again later.');
  });

  it('should render default info when nothing is availble to show', () => {

    const elem = setup({
    });
    expect(elem.find('.search-screen-info').text()).toEqual('Start by typing something in the input above!');

  });

  it('should render info when there is no result', () => {

    const elem = setup({
      searchTerm: 'search',
      results: []
    });
    expect(elem.find('.search-screen-info').text()).toEqual('No results');
  })

  it('should render results', () => {

    const elem = setup({
      searchTerm: 'search',
      results: [{ id: 1 }, { id: 2 }, { id: 3 }]
    });

    expect(elem.find('Paginator').length).toEqual(1);
  });

  it('should search video', () => {
    const searchVideoStub = sinon.stub();
    const elem = setup({
      searchVideos: searchVideoStub,
    });
    elem.find('.search-icon').simulate('click');
    expect(searchVideoStub.called).toEqual(true);
  });

  it('should map state to props', () => {
    const store = {
      search: {
        searchTerm: 'someString',
        searchResults: {
          someString: [{ id: 1 } as any],
          notThisString: [{ id: 2 } as any],
        },
        isError: false,
        isLoading: false
      }
    };

    expect(mapStateToProps(store)).toEqual({
      searchTerm: 'someString',
      results: [{ id: 1 }],
      isError: false,
      isLoading: false
    });
  });

  describe('dispatch to props', () => {
    let sandbox: sinon.SinonSandbox;
    let updateSearchTermStub: sinon.SinonStub;
    let dispatch: sinon.SinonStub;

    beforeEach(() => {
      sandbox = sinon.createSandbox();

      updateSearchTermStub = sandbox.stub(searchActions, 'updateSearchTerm').returns('updateSearchTerm' as any);
      sandbox.stub(searchActions, 'doSearch').returns('doSearch' as any)
      dispatch = sandbox.stub();
      const props = mapDispatchToProps(dispatch);
      props.searchVideos('search-term');
    })

    afterEach(() => {
      sandbox.restore();
    })

    it('should have dispatched with update serach terms', () => {

      expect(dispatch.calledWith('updateSearchTerm')).toEqual(true);
    });

    it('should have dispatched with do search', () => {
      expect(dispatch.calledWith('doSearch')).toEqual(true);
    });

    it('should have created an action with new search term', () => {
      expect(updateSearchTermStub.calledWith('search-term')).toEqual(true);
    });
  });
});
