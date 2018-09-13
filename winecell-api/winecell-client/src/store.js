import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';

import thunk from 'redux-thunk';

export default function makeStore() {
    return createStore(combineReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));
  }