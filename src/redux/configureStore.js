import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import userReducer from './ducks/user';
import moviesReducer from './ducks/movies';
import { watcherSaga } from './sagas/rootSaga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
    user: userReducer,
    movies: moviesReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer,/* preloadedState, */ composeEnhancers(applyMiddleware(...middleware))); // {} represents enhancers, currently not using any. what are enhancers? "enhances" or adds some additional capabilities to the store. It could change how reducers process data, or how dispatch works.

sagaMiddleware.run(watcherSaga);

export default store;