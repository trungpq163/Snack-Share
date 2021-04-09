import expect from 'expect';
import reducer, { initialState } from './reducer';

import { ActionTypes } from './action';

describe('Lectures Reducer', () => {
    it('check Lectures loading.......', () => {
        expect(reducer(initialState, { type: ActionTypes.LECTURES_LOADING })).toEqual({
            lectures: {
                lectures: [],
                loading: true,
            },
        });
    });
});

describe('Lectures Reducer', () => {
    it('get lectures', () => {
        expect(
            reducer(initialState, {
                type: ActionTypes.GET_LECTURES,
                payload: [
                    {
                        _id: '602b41a1c3eef011feb47aa2',
                        course: {
                            _id: '60210f02b4ff19386f3f8f7a',
                            courseDescription: 'Using Typescript with luv',
                        },
                        title: 'lesson-1',
                        videoLink: 'https://www.youtube.com/embed/RvYYCGs45L4',
                        createdAt: '2021-02-16T03:53:05.143Z',
                        created_at: '2021-02-16T03:53:05.143Z',
                        __v: 0,
                    },
                ],
            })
        ).toEqual({
            lectures: {
                lectures: [
                    {
                        _id: '602b41a1c3eef011feb47aa2',
                        course: {
                            _id: '60210f02b4ff19386f3f8f7a',
                            courseDescription: 'Using Typescript with luv',
                        },
                        title: 'lesson-1',
                        videoLink: 'https://www.youtube.com/embed/RvYYCGs45L4',
                        createdAt: '2021-02-16T03:53:05.143Z',
                        created_at: '2021-02-16T03:53:05.143Z',
                        __v: 0,
                    },
                ],
                loading: false,
            },
        });
    });
});
