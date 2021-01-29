import { Dispatch } from 'redux';
import axios, { AxiosRequestConfig } from 'axios';
import setAuthToken from 'utils/setAuthToken';
import { setCurrentUser } from '../auth/action';
import { Action } from './types';

export const dispatchSetCurrentUser = (data: any) => (dispatch: Dispatch<Action>) => {
    dispatch(setCurrentUser(data));
};

export const registerUser = (
    data: any,
    role: string,
    doneCb: Function,
    errorCb: Function,
    clearInput: Function,
    redirectWhenSuccess: Function
) => {
    return function (_dispatch: Dispatch<Action>) {
        // eslint-disable-next-line prefer-const
        let config: AxiosRequestConfig = {
            method: 'post',
            url: `/${role}/register`,
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

export const logoutUser = () => (dispatch: Dispatch<Action>) => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header from future requests
    setAuthToken(false);
    // Set current user to {} which will
    dispatch(setCurrentUser({} as any));
};
