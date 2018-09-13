import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';

import thunk from 'redux-thunk';
import wines from './reducers/wines';



const reducers = combineReducers({
    wines
});
const middleware = [thunk];

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(...middleware)
);