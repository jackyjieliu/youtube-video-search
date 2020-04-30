import searchReducer from './search/searchReducer';
import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';

function rootReducer() {
  const reducerMap = {
    search: searchReducer,
  };

  return combineReducers(reducerMap);
};


const store = createStore(rootReducer(), applyMiddleware(thunk));

export default store;
