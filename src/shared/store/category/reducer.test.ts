import expect from 'expect';
import reducer, { initialState } from './reducer';

import { ActionTypes } from './action';

describe('Category Reducer', () => {
    it('check Category loading.......', () => {
        expect(reducer(initialState, { type: ActionTypes.CATEGORY_LOADING })).toEqual({
            category: {
                category: [],
                loading: true,
            },
        });
    });
});

describe('Category Reducer', () => {
    it('get Category', () => {
        expect(
            reducer(initialState, {
                type: ActionTypes.GET_CATEGORY,
                payload: [
                    {
                        _id: '601f595acafef71eb980588c',
                        categoryName: 'Web Development',
                        created_at: '2021-02-07T03:07:06.629Z',
                        updatedAt: '2021-02-07T08:54:09.171Z',
                    },
                    {
                        _id: '601f597cecd8c81f0c9bf7eb',
                        categoryName: 'Machine Learning',
                        created_at: '2021-02-07T03:07:40.044Z',
                        updatedAt: '2021-02-07T09:00:39.837Z',
                    },
                    {
                        _id: '601f5984ecd8c81f0c9bf7ec',
                        categoryName: 'iOS Development\t',
                        created_at: '2021-02-07T03:07:48.751Z',
                        updatedAt: '2021-02-07T03:07:48.751Z',
                    },
                    {
                        _id: '60307eb26c7fc6173a145b62',
                        categoryName: 'Android Development',
                        created_at: '2021-02-20T03:14:58.625Z',
                        updatedAt: '2021-02-20T03:14:58.625Z',
                    },
                    {
                        _id: '6067b4aed432a80004d56b8f',
                        categoryName: 'Test',
                        created_at: '2021-04-03T00:19:58.138Z',
                        updatedAt: '2021-04-03T00:19:58.138Z',
                    },
                ],
            })
        ).toEqual({
            category: {
                category: [
                    {
                        _id: '601f595acafef71eb980588c',
                        categoryName: 'Web Development',
                        created_at: '2021-02-07T03:07:06.629Z',
                        updatedAt: '2021-02-07T08:54:09.171Z',
                    },
                    {
                        _id: '601f597cecd8c81f0c9bf7eb',
                        categoryName: 'Machine Learning',
                        created_at: '2021-02-07T03:07:40.044Z',
                        updatedAt: '2021-02-07T09:00:39.837Z',
                    },
                    {
                        _id: '601f5984ecd8c81f0c9bf7ec',
                        categoryName: 'iOS Development\t',
                        created_at: '2021-02-07T03:07:48.751Z',
                        updatedAt: '2021-02-07T03:07:48.751Z',
                    },
                    {
                        _id: '60307eb26c7fc6173a145b62',
                        categoryName: 'Android Development',
                        created_at: '2021-02-20T03:14:58.625Z',
                        updatedAt: '2021-02-20T03:14:58.625Z',
                    },
                    {
                        _id: '6067b4aed432a80004d56b8f',
                        categoryName: 'Test',
                        created_at: '2021-04-03T00:19:58.138Z',
                        updatedAt: '2021-04-03T00:19:58.138Z',
                    },
                ],
                loading: false,
            },
        });
    });
});
