import { Dispatch } from 'redux';
import axios, { AxiosRequestConfig } from 'axios';
import { getUser as get, setUserLoading } from './action';
import { Action } from './types';

export const errorResponse = (errData: any): string | undefined => {
    const errRes = JSON.stringify(errData) || '';
    return errRes;
};

export const getUserEff = (id: any) => (dispatch: Dispatch<Action>) => {
    dispatch(setUserLoading());
    const config: AxiosRequestConfig = {
        method: 'get',
        url: `/user?id=${id}`,
    };

    axios(config)
        .then((res) => dispatch(get(res.data)))
        .catch((_err) => dispatch(get({})));
};

export const updateUser = (
    id: any,
    data: any,
    errorCb: Function,
    doneCb: Function,
    clearInput: Function,
    setData: any
) => (_dispatch: Dispatch<Action>) => {
    const config: AxiosRequestConfig = {
        method: 'put',
        url: `/user?id=${id}`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: data,
    };

    axios(config)
        .then((_res) => {
            clearInput();
            setData();
            doneCb('Update user successfully!');
        })
        .catch((err) => {
            clearInput();
            errorCb(errorResponse(err.response.data));
        });
};
