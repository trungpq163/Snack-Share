import { createSelector } from 'reselect';
import { LecturesState, Lectures } from './types';

export const lectures = (state: { lectures: LecturesState }): LecturesState => state.lectures;

export const getLectures = createSelector([lectures], (lectures): Lectures => lectures.lectures);
