import { combineReducers } from 'redux';
import appReducer from './app/reducer';
import authReducer from './auth/reducer';
import errorsReducer from './errors/reducer';
import profileReducer from './profile/reducer';
import categoryReducer from './category/reducer';
import usersReducer from './users/reducer';
import userReducer from './user/reducer';
import courseReducer from './course/reducer';
import coursesReducer from './courses/reducer';
import lecturesReducer from './lectures/reducer';

const createRootReducer = () =>
    combineReducers({
        app: appReducer,
        auth: authReducer,
        errors: errorsReducer,
        profile: profileReducer,
        category: categoryReducer,
        users: usersReducer,
        user: userReducer,
        course: courseReducer,
        courses: coursesReducer,
        lectures: lecturesReducer,
    });

export default createRootReducer;
