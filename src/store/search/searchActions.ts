import * as searchEffect from './searchEffects';
import { State } from '../store';

// Action types
const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS';
const REQUEST_VIDEOS = 'REQUEST_VIDEOS';
const REQUEST_VIDEOS_ERROR = 'REQUEST_VIDEOS_ERROR';

export const TYPES = {
  UPDATE_SEARCH_TERM: UPDATE_SEARCH_TERM as typeof UPDATE_SEARCH_TERM,
  UPDATE_SEARCH_RESULTS: UPDATE_SEARCH_RESULTS as typeof UPDATE_SEARCH_RESULTS,
  REQUEST_VIDEOS: REQUEST_VIDEOS as typeof REQUEST_VIDEOS,
  REQUEST_VIDEOS_ERROR: REQUEST_VIDEOS_ERROR as typeof REQUEST_VIDEOS_ERROR,
}

// Typed action obejcts
export type Actions = ReturnType<typeof updateSearchTerm> |
  ReturnType<typeof updateSearchResults> |
  ReturnType<typeof requestingVideos> |
  ReturnType<typeof updateSearchError>
  ;

/**
 * Action to update search term in the store
 * @param searchTerm search term to update to
 */
export function updateSearchTerm(searchTerm: string) {
  return {
    type: UPDATE_SEARCH_TERM as typeof UPDATE_SEARCH_TERM,
    payload: searchTerm,
  }
}

/**
 * Update search results
 * @param searchResults search results to update
 */
export function updateSearchResults(searchResults: Array<searchEffect.YoutubeResult>) {
  return {
    type: UPDATE_SEARCH_RESULTS as typeof UPDATE_SEARCH_RESULTS,
    payload: searchResults
  }
}

/**
 * Signal the store that videos are being requested
 */
export function requestingVideos() {
  return {
    type: REQUEST_VIDEOS as typeof REQUEST_VIDEOS,
  }
}

/**
 * Update the store with error.
 */
export function updateSearchError() {
  return {
    type: REQUEST_VIDEOS_ERROR as typeof REQUEST_VIDEOS_ERROR,
  }
}

/**
 * Search for videos
 *
 * Perform search only when:
 *  - a search term is available
 *  - not performing another search
 *  - the search term has not already been searched
 */
export function doSearch() {
  return async (dispatch: Dispatch, getState: () => State) => {
    const searchState = getState().search;
    const searchTerm = searchState.searchTerm;

    if (searchTerm && !searchState.isLoading && !searchState.searchResults[searchTerm]) {
      dispatch(requestingVideos());

      let result: Array<searchEffect.YoutubeResult>;
      try {
        result = await searchEffect.searchYoutube(searchTerm);
        dispatch(updateSearchResults(result));
      } catch (e) {
        dispatch(updateSearchError())
      }
    }
  };
}
