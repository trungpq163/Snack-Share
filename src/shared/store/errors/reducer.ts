import { produce } from 'immer';
import { ErrorsTypes } from './action';
import { Action, ErrorsState } from './types';

export const initialState = Object.freeze<ErrorsState>({
    errors: {},
});

export default (state: ErrorsState = initialState, action: Action): ErrorsState =>
    produce(state, (_draft) => {
        switch (action.type) {
            case ErrorsTypes.GET_ERRORS:
                return action.payload;

            default:
                return state;
        }
    });
