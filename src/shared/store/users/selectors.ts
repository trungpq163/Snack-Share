import { createSelector } from 'reselect';
import { UsersState, Users } from './types';

export const users = (state: { users: UsersState }): UsersState => state.users;

export const getUsers = createSelector([users], (users): Users => users.users);
