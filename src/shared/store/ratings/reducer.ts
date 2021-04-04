import { produce } from 'immer';
import { ActionTypes } from './action';
import { Action, RatingsState } from './types';

export const initialState = Object.freeze<RatingsState>({
    ratings: {
        ratings: [],
        loading: false,
    },
});

export default (state: RatingsState = initialState, action: Action): RatingsState =>
    produce(state, (draft) => {
        switch (action.type) {
            case ActionTypes.RATINGS_LOADING: {
                draft.ratings.loading = true;
                return;
            }

            case ActionTypes.GET_RATINGS: {
                draft.ratings.ratings = action.payload;
                draft.ratings.loading = false;
                return;
            }

            default:
                return state;
        }
    });
