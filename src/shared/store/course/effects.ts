import { Dispatch } from 'redux';
import axios, { AxiosRequestConfig } from 'axios';
import { Action } from './types';

export const errorResponse = (errData: any): string | undefined => {
    const errRes = errData?.message;
    return errRes;
};

export const updateCourseById = (
    id: string,
    data: any,
    errorCb: Function,
    doneCb: Function,
    clearInput: Function,
    redirectWhenSuccess: Function,
    setData: any
) => (_dispatch: Dispatch<Action>) => {
    const config: AxiosRequestConfig = {
        method: 'put',
        url: `/api/course?id=${id}`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: data,
    };

    axios(config)
        .then((_res) => {
            clearInput();
            setData();
            redirectWhenSuccess();
            doneCb('Update user successfully!');
        })
        .catch((err) => {
            clearInput();
            errorCb(errorResponse(err.response.data));
        });
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
