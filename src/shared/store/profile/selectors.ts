import { createSelector } from 'reselect';
import { ProfileState, Profile } from './types';

export const profile = (state: { profile: ProfileState }): ProfileState => state.profile;

export const getProfile = createSelector([profile], (profile): Profile => profile.profile);
