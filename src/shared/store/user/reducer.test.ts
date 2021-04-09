import expect from 'expect';
import reducer, { initialState } from './reducer';

import { ActionTypes } from './action';

describe('User Reducer', () => {
    it('check user loading.......', () => {
        expect(reducer(initialState, { type: ActionTypes.USER_LOADING })).toEqual({
            user: {
                user: {},
                loading: true,
            },
        });
    });
});

describe('User Reducer', () => {
    it('get user', () => {
        expect(
            reducer(initialState, {
                type: ActionTypes.GET_USER,
                payload: {
                    _id: '6023b76d0823cb00040039c7',
                    first_name: 'yasuo',
                    last_name: 'nguyen',
                    email: 'huunhankirigamer@gmail.com',
                    password: '$2a$10$.aFR9Xy3vzN/lIZ7fSdNgOFyYr5a866gBn1WnxbCAhjLiboKeYfwa',
                    role: 'instructor',
                    created_at: '2021-02-10T10:37:33.643Z',
                    updated_at: '2021-02-10T10:37:33.643Z',
                    __v: 0,
                },
            })
        ).toEqual({
            user: {
                user: {
                    _id: '6023b76d0823cb00040039c7',
                    first_name: 'yasuo',
                    last_name: 'nguyen',
                    email: 'huunhankirigamer@gmail.com',
                    password: '$2a$10$.aFR9Xy3vzN/lIZ7fSdNgOFyYr5a866gBn1WnxbCAhjLiboKeYfwa',
                    role: 'instructor',
                    created_at: '2021-02-10T10:37:33.643Z',
                    updated_at: '2021-02-10T10:37:33.643Z',
                    __v: 0,
                },
                loading: false,
            },
        });
    });
});
