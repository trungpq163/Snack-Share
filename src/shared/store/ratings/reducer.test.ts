import expect from 'expect';
import reducer, { initialState } from './reducer';

import { ActionTypes } from './action';

describe('Ratings Reducer', () => {
    it('check user loading.......', () => {
        expect(reducer(initialState, { type: ActionTypes.RATINGS_LOADING })).toEqual({
            ratings: {
                ratings: [],
                loading: true,
            },
        });
    });
});

describe('Ratings Reducer', () => {
    it('get user', () => {
        expect(
            reducer(initialState, {
                type: ActionTypes.GET_RATINGS,
                payload: [
                    {
                        _id: '6069c02ccae88508d33f9fcf',
                        user: {
                            _id: '6023b76d0823cb00040039c7',
                            first_name: 'yasuo',
                            last_name: 'nguyen',
                            email: 'huunhankirigamer@gmail.com',
                        },
                        course: '60210f02b4ff19386f3f8f7a',
                        content: 'Great Course!',
                        star: 5,
                        created_at: '2021-04-04T13:33:32.363Z',
                        updatedAt: '2021-04-04T13:33:32.363Z',
                        __v: 0,
                    },
                    {
                        _id: '606bd8806f44e7177f278a1a',
                        user: {
                            _id: '603672079555802b8117410a',
                            first_name: 'student',
                            last_name: '5555',
                            email: 'student6@gmail.com',
                        },
                        course: '60210f02b4ff19386f3f8f7a',
                        content: 'Khoá học giảng rất chi tiết <3',
                        star: 4,
                        created_at: '2021-04-06T03:41:52.791Z',
                        updatedAt: '2021-04-06T03:41:52.791Z',
                        __v: 0,
                    },
                ],
            })
        ).toEqual({
            ratings: {
                ratings: [
                    {
                        _id: '6069c02ccae88508d33f9fcf',
                        user: {
                            _id: '6023b76d0823cb00040039c7',
                            first_name: 'yasuo',
                            last_name: 'nguyen',
                            email: 'huunhankirigamer@gmail.com',
                        },
                        course: '60210f02b4ff19386f3f8f7a',
                        content: 'Great Course!',
                        star: 5,
                        created_at: '2021-04-04T13:33:32.363Z',
                        updatedAt: '2021-04-04T13:33:32.363Z',
                        __v: 0,
                    },
                    {
                        _id: '606bd8806f44e7177f278a1a',
                        user: {
                            _id: '603672079555802b8117410a',
                            first_name: 'student',
                            last_name: '5555',
                            email: 'student6@gmail.com',
                        },
                        course: '60210f02b4ff19386f3f8f7a',
                        content: 'Khoá học giảng rất chi tiết <3',
                        star: 4,
                        created_at: '2021-04-06T03:41:52.791Z',
                        updatedAt: '2021-04-06T03:41:52.791Z',
                        __v: 0,
                    },
                ],
                loading: false,
            },
        });
    });
});
