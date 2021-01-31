import { combineReducers } from 'redux';
import appReducer from './app/reducer';
import authReducer from './auth/reducer';
import errorsReducer from './errors/reducer';
import profileReducer from './profile/reducer';

const createRootReducer = () =>
    combineReducers({
        app: appReducer,
        auth: authReducer,
        errors: errorsReducer,
        profile: profileReducer,
    });

export default createRootReducer;
