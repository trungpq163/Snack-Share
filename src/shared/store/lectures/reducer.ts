import { produce } from 'immer';
import { ActionTypes } from './action';
import { Action, LecturesState } from './types';

export const initialState = Object.freeze<LecturesState>({
    lectures: {
        lectures: [],
        loading: false,
    },
});

export default (state: LecturesState = initialState, action: Action): LecturesState =>
    produce(state, (draft) => {
        switch (action.type) {
            case ActionTypes.LECTURES_LOADING: {
                draft.lectures.loading = true;
                return;
            }

            case ActionTypes.GET_LECTURES: {
                draft.lectures.lectures = action.payload;
                draft.lectures.loading = false;
                return;
            }

            default:
                return state;
        }
    });
