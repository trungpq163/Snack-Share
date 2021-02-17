import { Dispatch } from 'redux';
import axios, { AxiosRequestConfig } from 'axios';
import { Action } from './types';
import {
    getEnrollments,
    setEnrollmentsLoading,
    getEnrollmentsByIDStudent as getEnrollmentsStudent,
} from './action';

export const errorResponse = (errData: any): string | undefined => {
    const errRes = errData?.message;
    return errRes;
};

export const getAllEnrollments = () => (dispatch: Dispatch<Action>) => {
    dispatch(setEnrollmentsLoading());
    const config: AxiosRequestConfig = {
        method: 'get',
        url: '/enrollments',
    };

    axios(config)
        .then((res) => dispatch(getEnrollments(res.data)))
        .catch((_err) => dispatch(getEnrollments({})));
};

export const addEnrollments = (
    data: any,
    errorCb: Function,
    doneCb: Function,
    clearInput: Function
) => (_dispatch: Dispatch<Action>) => {
    const config: AxiosRequestConfig = {
        method: 'post',
        url: '/enrollbystudent/add',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data,
    };

    axios(config)
        .then((_res) => {
            doneCb('Enroll Course Successfully!');
            clearInput();
        })
        .catch((err) => {
            clearInput();
            errorCb(errorResponse(err));
        });
};
