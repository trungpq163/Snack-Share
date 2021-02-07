import { Users } from './types';

export const ActionTypes = {
    USERS_LOADING: 'USERS_LOADING',
    GET_USERS: 'GET_USERS',
};

export const setUsersLoading = () => ({
    type: ActionTypes.USERS_LOADING,
});

export const getUsers = (users: Users) => ({
    type: ActionTypes.GET_USERS,
    payload: users,
});
