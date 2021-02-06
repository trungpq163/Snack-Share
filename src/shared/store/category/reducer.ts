import { produce } from 'immer';
import { ActionTypes } from './action';
import { Action, CategoryState } from './types';

export const initialState = Object.freeze<CategoryState>({
    category: {
        category: [],
        loading: false,
    },
});

export default (state: CategoryState = initialState, action: Action): CategoryState =>
    produce(state, (draft) => {
        switch (action.type) {
            case ActionTypes.CATEGORY_LOADING: {
                draft.category.loading = true;
                return;
            }

            case ActionTypes.GET_CATEGORY: {
                draft.category.category = action.payload;
                draft.category.loading = false;
                return;
            }

            default:
                return state;
        }
    });
