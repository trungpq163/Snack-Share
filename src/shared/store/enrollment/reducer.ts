import { produce } from 'immer';
import { ActionTypes } from './action';
import { Action, EnrollmentsState } from './types';

export const initialState = Object.freeze<EnrollmentsState>({
    enrollments: {
        enrollments: [],
        loading: false,
    },
});

export default (state: EnrollmentsState = initialState, action: Action): EnrollmentsState =>
    produce(state, (draft) => {
        switch (action.type) {
            case ActionTypes.ENROLLMENTS_LOADING: {
                draft.enrollments.loading = true;
                return;
            }

            case ActionTypes.GET_ENROLLMENTS: {
                draft.enrollments.enrollments = action.payload;
                draft.enrollments.loading = false;
                return;
            }

            default:
                return state;
        }
    });
