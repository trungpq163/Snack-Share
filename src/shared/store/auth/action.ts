import { Auth } from './types';

export const ActionTypes = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
};

export const setCurrentUser = (auth: Auth) => ({
    type: ActionTypes.SET_CURRENT_USER,
    payload: auth,
});
