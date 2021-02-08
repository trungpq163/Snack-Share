import { User } from './types';

export const ActionTypes = {
    USER_LOADING: 'USER_LOADING',
    GET_USER: 'GET_USER',
};

export const setUserLoading = () => ({
    type: ActionTypes.USER_LOADING,
});

export const getUser = (user: User) => ({
    type: ActionTypes.GET_USER,
    payload: user,
});
