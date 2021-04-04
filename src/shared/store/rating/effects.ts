import { Dispatch } from 'redux';
import axios, { AxiosRequestConfig } from 'axios';
import { getRatings, setRatingsLoading } from './action';
import { Action, Ratings } from './types';

export const errorResponse = (errData: any): string | undefined => {
    const errRes = errData?.content || errData?.star || '';
    return errRes;
};

export const getRatingsByIdCourse = (idCourse: string) => (dispatch: Dispatch<Action>) => {
    dispatch(setRatingsLoading());
    const config: AxiosRequestConfig = {
        method: 'get',
        url: `/api/rating?course=${idCourse}`,
        headers: {},
    };

    axios(config)
        .then((res) => dispatch(getRatings(res.data)))
        .catch((_err) => dispatch(getRatings({} as Ratings)));
};

export const addRating = (
    data: any,
    errorCb: Function,
    doneCb: Function,
    clearInput: Function,
    redirectWhenSuccess: Function
) => (_dispatch: Dispatch<Action>) => {
    const config: AxiosRequestConfig = {
        method: 'post',
        url: '/api/rating',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data,
    };

    axios(config)
        .then((_res) => {
            clearInput();
            doneCb('Rating course successfully!');
            redirectWhenSuccess();
        })
        .catch((err) => {
            clearInput();
            errorCb(errorResponse(err.response.data));
        });
};
