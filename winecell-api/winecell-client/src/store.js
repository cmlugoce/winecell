import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';

import thunk from 'redux-thunk';


const winesReducer = (state = [], action) => {

    switch(action.type) {
        case 'GET_WINES_SUCCESS':
        return action.wine;

        default:
        return state;
    }
}

const reducers = combineReducers({
    wines: winesReducer
});
const middleware = [thunk];

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(...middleware)
);