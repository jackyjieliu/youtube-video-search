
import { Actions, TYPES } from './searchActions';
import { YoutubeResult } from './searchEffects';

interface State {
  searchTerm: string;
  searchResults: {
    [key: string]: Array<YoutubeResult>
  },
  isLoading: boolean;
  isError: boolean;
}

const INITIAL_STATE: State = {
  searchTerm: '',
  searchResults: {},
  isLoading: false,
  isError: false,
}

export default function reducer(state: State = INITIAL_STATE, action: Actions) {
  switch (action.type) {
    case TYPES.UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case TYPES.UPDATE_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          [state.searchTerm]: action.payload,
        },
        isLoading: false,
      };
    case TYPES.REQUEST_VIDEOS:
      return {
        ...state,
        isError: false,
        isLoading: true,
      }
    case TYPES.REQUEST_VIDEOS_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      }
    default:
  }
  return state;
};
