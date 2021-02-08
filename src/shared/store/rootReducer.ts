import { combineReducers } from 'redux';
import appReducer from './app/reducer';
import authReducer from './auth/reducer';
import errorsReducer from './errors/reducer';
import profileReducer from './profile/reducer';
import categoryReducer from './category/reducer';
import usersReducer from './users/reducer';
import userReducer from './user/reducer';

const createRootReducer = () =>
    combineReducers({
        app: appReducer,
        auth: authReducer,
        errors: errorsReducer,
        profile: profileReducer,
        category: categoryReducer,
        users: usersReducer,
        user: userReducer,
    });

export default createRootReducer;
