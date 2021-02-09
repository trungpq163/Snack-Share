import { Courses } from './types';

export const ActionTypes = {
    GET_COURSES: 'GET_COURSES',
    COURSES_LOADING: 'COURSES_LOADING',
};

export const getCourses = (courses: Courses) => ({
    type: ActionTypes.GET_COURSES,
    payload: courses,
});

export const setCoursesLoading = () => ({
    type: ActionTypes.COURSES_LOADING,
});
