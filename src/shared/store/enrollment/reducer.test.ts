import expect from 'expect';
import reducer, { initialState } from './reducer';

import { ActionTypes } from './action';

describe('Enrollment Reducer', () => {
    it('check Enrollment loading.......', () => {
        expect(reducer(initialState, { type: ActionTypes.ENROLLMENTS_LOADING })).toEqual({
            enrollments: {
                enrollments: [],
                loading: true,
            },
        });
    });
});

describe('Enrollment Reducer', () => {
    it('get Enrollment', () => {
        expect(
            reducer(initialState, {
                type: ActionTypes.GET_ENROLLMENTS,
                payload: [
                    {
                        no: 1,
                        approved: true,
                        _id: '6030bbae8118a428acea5795',
                        student: {
                            _id: '6023b76d0823cb00040039c7',
                            first_name: 'yasuo',
                            last_name: 'nguyen',
                            email: 'huunhankirigamer@gmail.com',
                            role: 'instructor',
                        },
                        course: {
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
                            },
                            category: '601f595acafef71eb980588c',
                        },
                    },
                ],
            })
        ).toEqual({
            enrollments: {
                enrollments: [
                    {
                        no: 1,
                        approved: true,
                        _id: '6030bbae8118a428acea5795',
                        student: {
                            _id: '6023b76d0823cb00040039c7',
                            first_name: 'yasuo',
                            last_name: 'nguyen',
                            email: 'huunhankirigamer@gmail.com',
                            role: 'instructor',
                        },
                        course: {
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
                            },
                            category: '601f595acafef71eb980588c',
                        },
                    },
                ],
                loading: false,
            },
        });
    });
});
