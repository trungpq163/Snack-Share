import { produce } from 'immer';
import { ActionTypes } from './action';
import { Action, CoursesState } from './types';

export const initialState = Object.freeze<CoursesState>({
    courses: {
        courses: [],
        loading: false,
    },
});

export default (state: CoursesState = initialState, action: Action): CoursesState =>
    produce(state, (draft) => {
        switch (action.type) {
            case ActionTypes.COURSES_LOADING: {
                draft.courses.loading = true;
                return;
            }

            case ActionTypes.GET_COURSES: {
                draft.courses.courses = action.payload;
                draft.courses.loading = false;
                return;
            }

            default:
                return state;
        }
    });
