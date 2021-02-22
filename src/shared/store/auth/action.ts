import { Auth } from './types';

export const ActionTypes = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
    AUTH_LOADING: 'AUTH_LOADING',
};

export const setCurrentUser = (auth: Auth) => ({
    type: ActionTypes.SET_CURRENT_USER,
    payload: auth,
});

export const setAuthLoading = () => ({
    type: ActionTypes.AUTH_LOADING,
});
