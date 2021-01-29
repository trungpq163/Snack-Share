import { Dispatch } from 'redux';
import axios, { AxiosRequestConfig } from 'axios';
import { Action } from './types';

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
