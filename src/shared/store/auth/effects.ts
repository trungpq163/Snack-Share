import { Dispatch } from 'redux';
import axios, { AxiosRequestConfig } from 'axios';
// import { getErrors } from '../errors/action';
import { Action } from './types';

export const registerUser = (data: any, role: string, cb: Function) => {
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

        axios(config).catch((err) => {
            // dispatch(
            //     getErrors({
            //         errors: err.response.data.email,
            //     })
            // );
            cb(err.response.data.email);
        });
    };
};
