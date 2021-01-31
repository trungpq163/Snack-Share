import { Profile } from './types';

export const ActionTypes = {
    GET_PROFILE: 'GET_PROFILE',
    GET_PROFILES: 'GET_PROFILES',
    PROFILE_LOADING: 'PROFILE_LOADING',
    CLEAR_CURRENT_PROFILE: 'CLEAR_CURRENT_PROFILE',
};

export const getProfile = (profile: Profile) => ({
    type: ActionTypes.GET_PROFILE,
    payload: profile,
});

export const getProfiles = (profiles: any) => ({
    type: ActionTypes.GET_PROFILES,
    payload: profiles,
});

export const setProfileLoading = () => ({
    type: ActionTypes.PROFILE_LOADING,
});

export const clearCurrentProfile = () => ({
    type: ActionTypes.CLEAR_CURRENT_PROFILE,
});
