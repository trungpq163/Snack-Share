import { createSelector } from 'reselect';
import { RatingsState, Ratings } from './types';

export const ratings = (state: { ratings: RatingsState }): RatingsState => state.ratings;

export const getRatingsByIDCourse = createSelector(
    [ratings],
    (ratings): Ratings => ratings.ratings
);
