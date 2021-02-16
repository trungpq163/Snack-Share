import { Lectures } from './types';

export const ActionTypes = {
    GET_LECTURES: 'GET_LECTURES',
    LECTURES_LOADING: 'LECTURES_LOADING',
};

export const getLectures = (lectures: Lectures) => ({
    type: ActionTypes.GET_LECTURES,
    payload: lectures,
});

export const setLecturesLoading = () => ({
    type: ActionTypes.LECTURES_LOADING,
});
