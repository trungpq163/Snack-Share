import { Dispatch } from 'redux';
import axios, { AxiosRequestConfig } from 'axios';
import { Action } from './types';
import { getLectures, setLecturesLoading } from './action';

export const errorResponse = (errData: any): string | undefined => {
    const errRes = errData?.message;
    return errRes;
};

export const getLecturesById = (id: string) => (dispatch: Dispatch<Action>) => {
    dispatch(setLecturesLoading());
    const config: AxiosRequestConfig = {
        method: 'get',
        url: `/lectures?id=${id}`,
    };

    axios(config)
        .then((res) => dispatch(getLectures(res.data)))
        .catch((_err) => dispatch(getLectures({})));
};

export const addLecture = (
    data: any,
    errorCb: Function,
    doneCb: Function,
    clearInput: Function,
    setData: any
) => (_dispatch: Dispatch<Action>) => {
    const config: AxiosRequestConfig = {
        method: 'post',
        url: '/lectures/youtubeupload',
        data: data,
    };

    axios(config)
        .then((_res) => {
            clearInput();
            setData();
            doneCb('Add Lecture Successfully!');
        })
        .catch((err) => {
            clearInput();
            errorCb(errorResponse(err?.response?.data));
        });
};
