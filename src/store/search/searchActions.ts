import * as searchEffect from './searchEffects';
import { State } from '../store';

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

export function updateSearchTerm(searchTerm: string) {
  return {
    type: UPDATE_SEARCH_TERM as typeof UPDATE_SEARCH_TERM,
    payload: searchTerm,
  }
}

export function updateSearchResults(searchResults: Array<searchEffect.YoutubeResult>) {
  return {
    type: UPDATE_SEARCH_RESULTS as typeof UPDATE_SEARCH_RESULTS,
    payload: searchResults
  }
}

export function requestingVideos() {
  return {
    type: REQUEST_VIDEOS as typeof REQUEST_VIDEOS,
  }
}

export function updateSearchError() {
  return {
    type: REQUEST_VIDEOS_ERROR as typeof REQUEST_VIDEOS_ERROR,
  }
}

export type Actions = ReturnType<typeof updateSearchTerm> |
  ReturnType<typeof updateSearchResults> |
  ReturnType<typeof requestingVideos> |
  ReturnType<typeof updateSearchError>
;

export function doSearch() {
  return async (dispatch: Dispatch, getState: () => State) => {
    const searchState = getState().search;
    const searchTerm = searchState.searchTerm;

    if (!searchState.isLoading && searchTerm && !searchState.searchResults[searchTerm]) {
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
