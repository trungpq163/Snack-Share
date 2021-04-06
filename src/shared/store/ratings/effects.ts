import { Dispatch } from 'redux';
import axios, { AxiosRequestConfig } from 'axios';
import { Action } from './types';
import { getRatings, setRatingsLoading } from './action';

export const errorResponse = (errData: any): string | undefined => {
    const errRes = errData?.content || errData?.star || '';
    return errRes;
};

export const getAllRatingsByIDCourse = (idCourse: string) => (dispatch: Dispatch<Action>) => {
    dispatch(setRatingsLoading());
    const config: AxiosRequestConfig = {
        method: 'get',
        url: `/api/rating?course=${idCourse}`,
    };

    axios(config)
        .then((res) => {
            console.log('res.data', res.data);
            dispatch(getRatings(res.data));
        })
        .catch((_err) => dispatch(getRatings({})));
};

export const addRating = (
    data: any,
    errorCb: Function,
    doneCb: Function,
    setData: Function,
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
            doneCb('Rating course successfully!');
            setData();
            redirectWhenSuccess();
        })
        .catch((err) => {
            errorCb(errorResponse(err.response.data));
        });
};
