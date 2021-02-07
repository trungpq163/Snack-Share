import { produce } from 'immer';
import { ActionTypes } from './action';
import { Action, UsersState } from './types';

export const initialState = Object.freeze<UsersState>({
    users: {
        users: [],
        loading: false,
    },
});

export default (state: UsersState = initialState, action: Action): UsersState =>
    produce(state, (draft) => {
        switch (action.type) {
            case ActionTypes.USERS_LOADING: {
                draft.users.loading = true;
                return;
            }

            case ActionTypes.GET_USERS: {
                draft.users.users = action.payload;
                draft.users.loading = false;
                return;
            }

            default:
                return state;
        }
    });
