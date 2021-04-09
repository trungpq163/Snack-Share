import expect from 'expect';
import reducer, { initialState } from './reducer';

import { ActionTypes } from './action';

describe('Users Reducer', () => {
    it('check loading.......', () => {
        expect(reducer(initialState, { type: ActionTypes.USERS_LOADING })).toEqual({
            users: {
                users: [],
                loading: true,
            },
        });
    });
});

describe('Users Reducer', () => {
    it('get all user', () => {
        expect(
            reducer(initialState, {
                type: ActionTypes.GET_USERS,
                payload: [
                    {
                        _id: '601c01b16d6ec44405eb7dfd',
                        first_name: 'giao',
                        last_name: 'vien',
                        email: 'giaovien@gmail.com',
                        password: '$2a$10$h/AL4WdiFK3RsR7K9LdFwuOh82YdM8QNfgeR6ECisjdvwlptiGyX9',
                        role: 'instructor',
                        created_at: '2021-02-04T14:16:17.324Z',
                        updated_at: '2021-02-04T14:16:17.324Z',
                        __v: 0,
                    },
                    {
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
                ],
            })
        ).toEqual({
            users: {
                users: [
                    {
                        _id: '601c01b16d6ec44405eb7dfd',
                        first_name: 'giao',
                        last_name: 'vien',
                        email: 'giaovien@gmail.com',
                        password: '$2a$10$h/AL4WdiFK3RsR7K9LdFwuOh82YdM8QNfgeR6ECisjdvwlptiGyX9',
                        role: 'instructor',
                        created_at: '2021-02-04T14:16:17.324Z',
                        updated_at: '2021-02-04T14:16:17.324Z',
                        __v: 0,
                    },
                    {
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
                ],
                loading: false,
            },
        });
    });
});
