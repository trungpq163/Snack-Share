import { Dispatch } from 'redux';
import axios, { AxiosRequestConfig } from 'axios';
import { Action } from './types';

export const errorResponse = (errData: any): string | undefined => {
    const errRes = errData?.message;
    return errRes;
};

export const addCourse = (
    data: any,
    errorCb: Function,
    doneCb: Function,
    clearInput: Function,
    redirectWhenSuccess: Function
) => (_dispatch: Dispatch<Action>) => {
    const config: AxiosRequestConfig = {
        method: 'post',
        url: '/api/course/add',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data,
    };

    axios(config)
        .then((_res) => {
            doneCb('Create course successfully!');
            clearInput();
            redirectWhenSuccess();
        })
        .catch((err) => {
            clearInput();
            errorCb(errorResponse(err));
        });
};
