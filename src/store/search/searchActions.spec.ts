import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import sinon, { SinonSandbox, SinonStub } from 'sinon';
import * as searchEffects from './searchEffects';
import * as searchActions from './searchActions';
import { State } from '../store';

const middlewares = [thunk]
const mockStore = configureMockStore<State>(middlewares)

describe('searchActions', () => {
  it('should update search terms', () => {
    const action = searchActions.updateSearchTerm('search-term')
    expect(action).toEqual({
      type: searchActions.TYPES.UPDATE_SEARCH_TERM,
      payload: 'search-term'
    });
  });

  it('should update search results', () => {
    const action = searchActions.updateSearchResults([{ id: 1 }, { id: 2 }] as any)
    expect(action).toEqual({
      type: searchActions.TYPES.UPDATE_SEARCH_RESULTS,
      payload: [{ id: 1 }, { id: 2 }]
    });
  });

  it('should update request videos', () => {
    const action = searchActions.requestingVideos()
    expect(action).toEqual({
      type: searchActions.TYPES.REQUEST_VIDEOS,
    });
  })

  it('should update error', () => {
    const action = searchActions.updateSearchError()
    expect(action).toEqual({
      type: searchActions.TYPES.REQUEST_VIDEOS_ERROR,
    });
  })

  describe('do search', () => {

    let sandbox: SinonSandbox;
    let searchYoutubeStub: SinonStub;
    let searchState = {
      searchTerm: '',
      searchResults: {},
      isLoading: false,
      isError: false,
    };

    beforeEach(() => {
      sandbox = sinon.createSandbox();

      searchYoutubeStub = sandbox.stub(searchEffects, 'searchYoutube')
      searchState = {
        searchTerm: '',
        searchResults: {},
        isLoading: false,
        isError: false,
      }
    });

    afterEach(() => {
      sandbox.restore();
    })

    it('should do search', () => {
      const store = mockStore({
        search: {
          ...searchState,
          searchTerm: 'search-term'
        }
      });
      searchYoutubeStub.returns(Promise.resolve([{ id: 1 }]))
      return store.dispatch(searchActions.doSearch() as any)
        .then(() => {
          const expectedActions = [{
            type: searchActions.TYPES.REQUEST_VIDEOS,
          }, {
            type: searchActions.TYPES.UPDATE_SEARCH_RESULTS,
            payload: [{ id: 1 }],
          }]
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should update error', () => {
      const store = mockStore({
        search: {
          ...searchState,
          searchTerm: 'search-term'
        }
      });
      searchYoutubeStub.returns(Promise.reject())
      return store.dispatch(searchActions.doSearch() as any)
        .then(() => {
          const expectedActions = [{
            type: searchActions.TYPES.REQUEST_VIDEOS,
          }, {
            type: searchActions.TYPES.REQUEST_VIDEOS_ERROR,
          }]
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should not do search without search term', () => {
      const store = mockStore({
        search: {
          ...searchState,
          searchTerm: ''
        }
      });
      searchYoutubeStub.returns(Promise.reject())
      return store.dispatch(searchActions.doSearch() as any)
        .then(() => {
          const expectedActions: any[] = [];
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should not do search when search term has already has results', () => {
      const store = mockStore({
        search: {
          ...searchState,
          searchResults: {
            search: [],
          },
          searchTerm: 'search',
        }
      });
      searchYoutubeStub.returns(Promise.reject())
      return store.dispatch(searchActions.doSearch() as any)
        .then(() => {
          const expectedActions: any[] = [];
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  })
});
