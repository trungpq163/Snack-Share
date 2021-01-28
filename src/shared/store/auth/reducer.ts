import { produce } from 'immer';
import isEmpty from 'validation/isEmpty';
import { ActionTypes } from './action';
import { Action, AuthState } from './types';

export const initialState = Object.freeze<AuthState>({
    auth: {
        isAuthenticated: false,
        users: {},
    },
});

export default (state: AuthState = initialState, action: Action): AuthState =>
    produce(state, (draft) => {
        switch (action.type) {
            case ActionTypes.SET_CURRENT_USER: {
                draft.auth.isAuthenticated = !isEmpty(action.payload);
                draft.auth.users = action.payload;
                return;
            }

            default: {
                return state;
            }
        }
    });
