import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import registerReducer from '../reducers/registerReducer';
import timelineReducer from '../reducers/timelineReducer'

const reducers = combineReducers({
    registerReducer,
    timelineReducer
})

const loggerMiddleware = createLogger();

export const store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);