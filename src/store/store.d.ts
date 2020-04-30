import searchReducer from './search/searchReducer';

type State = {
  search: ReturnType<typeof searchReducer>,
};
