import { produce } from 'immer';
import { ActionTypes } from './action';
import { Action, ProfileState } from './types';

export const initialState = Object.freeze<ProfileState>({
    profile: {
        profile: null,
        profiles: null,
        loading: false,
    },
});

export default (state: ProfileState = initialState, action: Action): ProfileState =>
    produce(state, (draft) => {
        switch (action.type) {
            case ActionTypes.PROFILE_LOADING: {
                draft.profile.loading = true;
                return;
            }

            case ActionTypes.GET_PROFILE: {
                draft.profile.profile = action.payload;
                draft.profile.loading = false;
                return;
            }

            case ActionTypes.GET_PROFILES: {
                draft.profile.profiles = action.payload;
                draft.profile.loading = false;
                return;
            }

            case ActionTypes.CLEAR_CURRENT_PROFILE: {
                draft.profile.profile = null;
                return;
            }

            default:
                return state;
        }
    });
