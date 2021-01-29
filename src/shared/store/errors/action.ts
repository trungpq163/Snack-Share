import { Errors } from './types';

export const ErrorsTypes = {
    GET_ERRORS: 'GET_ERRORS',
};

export const getErrors = (errors: Errors) => ({
    type: ErrorsTypes.GET_ERRORS,
    payload: errors,
});
