import { Enrollments } from './types';

export const ActionTypes = {
    GET_ENROLLMENTS: 'GET_ENROLLMENTS',
    ENROLLMENTS_LOADING: 'ENROLLMENTS_LOADING',
};

export const getEnrollments = (enrollments: Enrollments) => ({
    type: ActionTypes.GET_ENROLLMENTS,
    payload: enrollments,
});

export const setEnrollmentsLoading = () => ({
    type: ActionTypes.ENROLLMENTS_LOADING,
});
