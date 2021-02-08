import { createSelector } from 'reselect';
import { UserState, User } from './types';

export const user = (state: { user: UserState }): UserState => state.user;

export const getUser = createSelector([user], (user): User => user.user);
