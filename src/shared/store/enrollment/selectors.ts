import { createSelector } from 'reselect';
import { EnrollmentsState, Enrollments } from './types';

export const enrollments = (state: { enrollments: EnrollmentsState }): EnrollmentsState =>
    state.enrollments;

export const getEnrollments = createSelector(
    [enrollments],
    (enrollments): Enrollments => enrollments.enrollments
);
