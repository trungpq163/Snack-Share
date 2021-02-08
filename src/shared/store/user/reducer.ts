import { produce } from 'immer';
import { ActionTypes } from './action';
import { Action, UserState } from './types';

export const initialState = Object.freeze<UserState>({
    user: {
        user: {},
        loading: false,
    },
});

export default (state: UserState = initialState, action: Action): UserState =>
    produce(state, (draft) => {
        switch (action.type) {
            case ActionTypes.USER_LOADING: {
                draft.user.loading = true;
                return;
            }

            case ActionTypes.GET_USER: {
                draft.user.user = action.payload;
                draft.user.loading = false;
                return;
            }

            default:
                return state;
        }
    });
