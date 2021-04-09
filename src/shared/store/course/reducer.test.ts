import expect from 'expect';
import reducer, { initialState } from './reducer';

import { ActionTypes } from './action';

describe('Course Reducer', () => {
    it('check Course loading.......', () => {
        expect(reducer(initialState, { type: ActionTypes.COURSE_LOADING })).toEqual({
            course: {
                course: {
                    _id: '',
                    courseName: '',
                    image: '',
                    courseDescription: '',
                    instructor: '',
                    category: '',
                    language: '',
                    price: 0,
                    skillLevel: '',
                },
                loading: true,
            },
        });
    });
});

describe('Course Reducer', () => {
    it('get Course', () => {
        expect(
            reducer(initialState, {
                type: ActionTypes.GET_COURSE,
                payload: {
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
                    category: {
                        _id: '601f595acafef71eb980588c',
                        no: 1,
                        categoryName: 'Web Development',
                    },
                    language: 'english',
                    skillLevel: 'basic',
                },
            })
        ).toEqual({
            course: {
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
                    category: {
                        _id: '601f595acafef71eb980588c',
                        no: 1,
                        categoryName: 'Web Development',
                    },
                    language: 'english',
                    skillLevel: 'basic',
                },
                loading: false,
            },
        });
    });
});
