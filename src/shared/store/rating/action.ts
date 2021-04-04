import { Ratings } from './types';

export const ActionTypes = {
    GET_RATINGS: 'GET_RATINGS',
    RATINGS_LOADING: 'RATINGS_LOADING',
};

export const getRatings = (ratings: Ratings) => ({
    type: ActionTypes.GET_RATINGS,
    payload: ratings,
});

export const setRatingsLoading = () => ({
    type: ActionTypes.RATINGS_LOADING,
});
