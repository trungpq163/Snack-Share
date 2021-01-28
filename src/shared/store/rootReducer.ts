import { combineReducers } from 'redux';
import appReducer from './app/reducer';
import authReducer from './auth/reducer';

const createRootReducer = () =>
    combineReducers({
        app: appReducer,
        auth: authReducer,
    });

export default createRootReducer;
