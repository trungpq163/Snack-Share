import { produce } from 'immer';
import isEmpty from '../../validation/isEmpty';
import { ActionTypes } from './action';
import { Action, AuthState } from './types';

export const initialState = Object.freeze<AuthState>({
    auth: {
        isAuthenticated: false,
        users: {},
        loading: false,
    },
});

export default (state: AuthState = initialState, action: Action): AuthState =>
    produce(state, (draft) => {
        switch (action.type) {
            case ActionTypes.SET_CURRENT_USER: {
                draft.auth.isAuthenticated = !isEmpty(action.payload);
                draft.auth.users = action.payload;
                draft.auth.loading = false;
                return;
            }

            case ActionTypes.AUTH_LOADING: {
                draft.auth.loading = true;
                return;
            }

            default: {
                return state;
            }
        }
    });
