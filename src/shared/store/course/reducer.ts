import { produce } from 'immer';
import { ActionTypes } from './action';
import { Action, CourseState } from './types';

export const initialState = Object.freeze<CourseState>({
    course: {
        course: {
            _id: '',
            courseName: '',
            image: '',
            courseDescription: '',
            instructor: '',
            category: '',
            language: '',
            price: 0,
            skillLevel: '',
        },
        loading: false,
    },
});

export default (state: CourseState = initialState, action: Action): CourseState =>
    produce(state, (draft) => {
        switch (action.type) {
            case ActionTypes.COURSE_LOADING: {
                draft.course.loading = true;
                return;
            }

            case ActionTypes.GET_COURSE: {
                draft.course.course = action.payload;
                draft.course.loading = false;
                return;
            }

            default:
                return state;
        }
    });
