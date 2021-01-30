import { Dispatch } from 'redux';
import axios, { AxiosRequestConfig } from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from 'utils/setAuthToken';
import { setCurrentUser } from '../auth/action';
import { Action, Auth } from './types';

export const dispatchSetCurrentUser = (data: any) => (dispatch: Dispatch<Action>) => {
    dispatch(setCurrentUser(data));
};

export const registerUser = (
    data: any,
    doneCb: Function,
    errorCb: Function,
    clearInput: Function,
    redirectWhenSuccess: Function
) => {
    return function (_dispatch: Dispatch<Action>) {
        // eslint-disable-next-line prefer-const
        let config: AxiosRequestConfig = {
            method: 'post',
            url: '/users/register',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        };

        axios(config)
            .then(() => {
                clearInput();
                doneCb('Register successfully! Thank You <3');
                redirectWhenSuccess();
            })
            .catch((err) => {
                clearInput();
                errorCb(
                    err.response.data.first_name ||
                        err.response.data.last_name ||
                        err.response.data.email ||
                        err.response.data.password ||
                        err.response.data.password2
                );
            });
    };
};

export const loginUser = (
    data: any,
    errorCb: Function,
    clearInput: Function,
    redirectWhenSuccess: Function
) => (dispatch: Dispatch<Action>) => {
    // eslint-disable-next-line prefer-const
    let config: AxiosRequestConfig = {
        method: 'post',
        url: '/users/login',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data,
    };

    axios(config)
        .then((res) => res.data)
        .then((data) => {
            const { token } = data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwtDecode(token);
            // Set current user
            dispatch(setCurrentUser(decoded as Auth));
            clearInput();
            redirectWhenSuccess();
        })
        .catch((err) => {
            clearInput();
            errorCb(err.response.data.email || err.response.data.password);
        });
};

export const logoutUser = () => (dispatch: Dispatch<Action>) => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header from future requests
    setAuthToken(false);
    // Set current user to {} which will
    dispatch(setCurrentUser({} as any));
};
