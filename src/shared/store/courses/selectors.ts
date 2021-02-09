import { createSelector } from 'reselect';
import { CoursesState, Courses } from './types';

export const courses = (state: { courses: CoursesState }): CoursesState => state.courses;

export const getCourses = createSelector([courses], (courses): Courses => courses.courses);
