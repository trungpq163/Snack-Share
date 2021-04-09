import expect from 'expect';
import reducer, { initialState } from './reducer';

import { ActionTypes } from './action';

describe('Auth Reducer', () => {
    it('check loading.......', () => {
        expect(reducer(initialState, { type: ActionTypes.AUTH_LOADING })).toEqual({
            auth: {
                isAuthenticated: false,
                users: {},
                loading: true,
            },
        });
    });
});

describe('Auth Reducer', () => {
    it('set current user', () => {
        expect(
            reducer(initialState, {
                type: ActionTypes.SET_CURRENT_USER,
                payload: {
                    id: '60307bc36c7fc6173a145b53',
                    first_name: 'student4',
                    last_name: 'gjakgj',
                    role: 'student',
                    iat: 1617951693,
                    exp: 1617958893,
                },
            })
        ).toEqual({
            auth: {
                isAuthenticated: true,
                users: {
                    exp: 1617958893,
                    first_name: 'student4',
                    iat: 1617951693,
                    id: '60307bc36c7fc6173a145b53',
                    last_name: 'gjakgj',
                    role: 'student',
                },
                loading: false,
            },
        });
    });
});
