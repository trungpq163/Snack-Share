import { Course } from './types';

export const ActionTypes = {
    GET_COURSE: 'GET_COURSE',
    COURSE_LOADING: 'COURSE_LOADING',
};

export const getCourse = (course: Course) => ({
    type: ActionTypes.GET_COURSE,
    payload: course,
});

export const setCourseLoading = () => ({
    type: ActionTypes.COURSE_LOADING,
});
