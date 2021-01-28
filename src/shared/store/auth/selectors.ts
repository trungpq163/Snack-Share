/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';
import { AuthState, Auth } from './types';

export const auth = (state: { auth: AuthState }): AuthState => state.auth;

export const getAuth = createSelector([auth], (auth): Auth => auth.auth);
