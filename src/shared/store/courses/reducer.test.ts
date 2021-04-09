import expect from 'expect';
import reducer, { initialState } from './reducer';

import { ActionTypes } from './action';

describe('Courses Reducer', () => {
    it('check Courses loading.......', () => {
        expect(reducer(initialState, { type: ActionTypes.COURSES_LOADING })).toEqual({
            courses: {
                courses: [],
                loading: true,
            },
        });
    });
});

describe('Courses Reducer', () => {
    it('get Courses', () => {
        expect(
            reducer(initialState, {
                type: ActionTypes.GET_COURSES,
                payload: [
                    {
                        _id: '60210f02b4ff19386f3f8f7a',
                        courseDescription: 'Using Typescript with luv',
                        courseName: 'Typescript from zero to hero',
                        image: 'https://i.ytimg.com/vi/ahCwqrYpIuM/maxresdefault.jpg',
                        price: 5555,
                        instructor: {
                            _id: '601a45a077ee68407b9d31b7',
                            first_name: 'trung',
                            last_name: 'phan',
                            email: 'trungphan@gmail.com',
                            role: 'instructor',
                            created_at: '2021-02-03T06:41:36.827Z',
                            updated_at: '2021-02-20T02:41:36.314Z',
                            __v: 0,
                        },
                        category: {
                            _id: '601f595acafef71eb980588c',
                            no: 1,
                            categoryName: 'Web Development',
                            created_at: '2021-02-07T03:07:06.629Z',
                            updatedAt: '2021-02-07T08:54:09.171Z',
                            __v: 0,
                        },
                        created_at: '2021-02-08T10:14:26.119Z',
                        updatedAt: '2021-02-08T10:14:26.119Z',
                        __v: 0,
                    },
                ],
            })
        ).toEqual({
            courses: {
                courses: [
                    {
                        _id: '60210f02b4ff19386f3f8f7a',
                        courseDescription: 'Using Typescript with luv',
                        courseName: 'Typescript from zero to hero',
                        image: 'https://i.ytimg.com/vi/ahCwqrYpIuM/maxresdefault.jpg',
                        price: 5555,
                        instructor: {
                            _id: '601a45a077ee68407b9d31b7',
                            first_name: 'trung',
                            last_name: 'phan',
                            email: 'trungphan@gmail.com',
                            role: 'instructor',
                            created_at: '2021-02-03T06:41:36.827Z',
                            updated_at: '2021-02-20T02:41:36.314Z',
                            __v: 0,
                        },
                        category: {
                            _id: '601f595acafef71eb980588c',
                            no: 1,
                            categoryName: 'Web Development',
                            created_at: '2021-02-07T03:07:06.629Z',
                            updatedAt: '2021-02-07T08:54:09.171Z',
                            __v: 0,
                        },
                        created_at: '2021-02-08T10:14:26.119Z',
                        updatedAt: '2021-02-08T10:14:26.119Z',
                        __v: 0,
                    },
                ],
                loading: false,
            },
        });
    });
});
