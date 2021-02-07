import { Dispatch } from 'redux';
import axios, { AxiosRequestConfig } from 'axios';

import { getCategory as getCate, setCategoryLoading } from './action';
import { Action, Category } from './types';

export const errorResponse = (errData: any): string | undefined => {
    const errRes = errData?.categoryName?.message || errData?.no?.message;
    return errRes;
};

export const getCategory = () => (dispatch: Dispatch<Action>) => {
    dispatch(setCategoryLoading());
    const config: AxiosRequestConfig = {
        method: 'get',
        url: '/categories',
    };

    axios(config)
        .then((res) => dispatch(getCate(res.data)))
        .catch((_err) => dispatch(getCate([] as Category)));
};

export const addCategory = (
    data: any,
    errorCb: Function,
    doneCb: Function,
    clearInput: Function,
    setData: any
) => (_dispatch: Dispatch<Action>) => {
    const config: AxiosRequestConfig = {
        method: 'post',
        url: '/category/add',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data,
    };

    axios(config)
        .then((_res) => {
            clearInput();
            setData();
            doneCb('Create category successfully! <3');
        })
        .catch((err) => {
            clearInput();
            errorCb(errorResponse(err.response.data));
        });
};
