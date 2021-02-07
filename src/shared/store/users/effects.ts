import { Dispatch } from 'redux';
import axios, { AxiosRequestConfig } from 'axios';
import { getUsers, setUsersLoading } from './action';
import { Action } from './types';

export const errorResponse = (errData: any): string | undefined => {
    const errRes = JSON.stringify(errData) || '';
    return errRes;
};

export const getAllUsers = () => (dispatch: Dispatch<Action>) => {
    dispatch(setUsersLoading());
    const config: AxiosRequestConfig = {
        method: 'get',
        url: '/users',
    };

    axios(config)
        .then((res) => dispatch(getUsers(res.data)))
        .catch((_err) => dispatch(getUsers({})));
};
