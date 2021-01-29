import { Dispatch } from 'redux';
import axios, { AxiosRequestConfig } from 'axios';
import { Action } from './types';

export const registerUser = (data: any, role: string, doneCb: Function, errorCb: Function) => {
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
            .then(() => doneCb('Register successfully! Thank You <3'))
            .catch((err) => errorCb(err.response.data.email));
    };
};
