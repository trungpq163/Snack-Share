import { createSelector } from 'reselect';
import { CourseState, Course } from './types';

export const course = (state: { course: CourseState }): CourseState => state.course;

export const getCourse = createSelector([course], (course): Course => course.course);
