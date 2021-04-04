import { createSelector } from 'reselect';
import { RatingsState, Ratings } from './types';

export const ratings = (state: { ratings: RatingsState }): RatingsState => state.ratings;

export const getRatings = createSelector([ratings], (ratings): Ratings => ratings.ratings);
