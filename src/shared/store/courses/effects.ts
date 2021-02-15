import { Dispatch } from 'redux';
import axios, { AxiosRequestConfig } from 'axios';
import { Action } from './types';
import { getCourses, setCoursesLoading } from './action';

export const errorResponse = (errData: any): string | undefined => {
    const errRes = errData?.message;
    return errRes;
};

export const getAllCourses = () => (dispatch: Dispatch<Action>) => {
    dispatch(setCoursesLoading());
    const config: AxiosRequestConfig = {
        method: 'get',
        url: '/courses',
    };

    axios(config)
        .then((res) => dispatch(getCourses(res.data)))
        .catch((_err) => dispatch(getCourses({})));
};
