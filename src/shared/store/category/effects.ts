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
