import { createSelector } from 'reselect';
import { ErrorsState, Errors } from './types';

export const errors = (state: { errors: ErrorsState }): ErrorsState => state.errors;

export const getErrors = createSelector([errors], (errors): Errors => errors.errors);
