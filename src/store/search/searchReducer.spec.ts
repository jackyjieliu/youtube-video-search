import reducer from './searchReducer';
import * as searchActions from './searchActions';

describe('searchReducer', () => {
  it('should return the initial state', () => {
    const state = reducer(undefined, {} as any);

    expect(state).toEqual({
      searchTerm: '',
      searchResults: {},
      isLoading: false,
      isError: false,
    });
  });

  it('should set search term', () => {
    const action = searchActions.updateSearchTerm('search-term');
    const state = reducer({
      searchTerm: '',
      searchResults: {},
      isLoading: false,
      isError: false,
    }, action);

    expect(state).toEqual({
      searchTerm: 'search-term',
      searchResults: {},
      isLoading: false,
      isError: false,
    });
  });

  it('should update search result', () => {
    const action = searchActions.updateSearchResults([{ id: 1 }] as any)
    const state = reducer({
      searchTerm: 'searchTerm',
      searchResults: {},
      isLoading: true,
      isError: false,
    }, action);

    expect(state).toEqual({
      searchTerm: 'searchTerm',
      searchResults: {
        searchTerm: [{ id: 1 }]
      },
      isLoading: false,
      isError: false,
    });
  });

  it('should request video', () => {
    const action = searchActions.requestingVideos()
    const state = reducer({
      searchTerm: 'searchTerm',
      searchResults: {},
      isLoading: false,
      isError: false,
    }, action);

    expect(state).toEqual({
      searchTerm: 'searchTerm',
      searchResults: {},
      isLoading: true,
      isError: false,
    });
  });

  it('should update error', () => {
    const action = searchActions.updateSearchError()
    const state = reducer({
      searchTerm: 'searchTerm',
      searchResults: {},
      isLoading: true,
      isError: false,
    }, action);

    expect(state).toEqual({
      searchTerm: 'searchTerm',
      searchResults: {},
      isLoading: false,
      isError: true,
    });
  });
});
