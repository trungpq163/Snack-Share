import expect from 'expect';
import reducer, { initialState } from './reducer';

import { ActionTypes } from './action';

describe('Ratings Reducer', () => {
    it('check ratings loading.......', () => {
        expect(reducer(initialState, { type: ActionTypes.PROFILE_LOADING })).toEqual({
            profile: {
                profile: null,
                profiles: null,
                loading: true,
            },
        });
    });
});

describe('Ratings Reducer', () => {
    it('get profile', () => {
        expect(
            reducer(initialState, {
                type: ActionTypes.GET_PROFILE,
                payload: {
                    social: {
                        twitter: 'twitter.com/quoctrung163',
                    },
                    skills: [
                        'Javascript',
                        ' CSS',
                        ' Typescript',
                        ' React',
                        ' NodeJS',
                        ' Deno',
                        ' C#',
                    ],
                    _id: '6030c5b8080d5e2f55fa618f',
                    user: {
                        _id: '60307bc36c7fc6173a145b53',
                        first_name: 'student4',
                        last_name: 'gjakgj',
                        email: 'student4@gmail.com',
                        password: '$2a$10$dqyNcAfGOu9cG14THRLLkOfw1FsNL2voYAN3W6Xks0tuxwmCWeihC',
                        role: 'student',
                        created_at: '2021-02-20T03:02:27.306Z',
                        updated_at: '2021-02-20T03:02:27.306Z',
                        __v: 0,
                    },
                    handle: 'Quoc Trunggg',
                    company: 'FPT6666',
                    website: 'trung.com',
                    status: 'Junior Developer',
                    experience: [],
                    education: [],
                    date: '2021-02-20T08:18:00.490Z',
                    __v: 9,
                    location: 'Viet Nam',
                    bio: 'Hello World',
                    githubusername: 'quoctrung163',
                },
            })
        ).toEqual({
            profile: {
                profile: {
                    social: {
                        twitter: 'twitter.com/quoctrung163',
                    },
                    skills: [
                        'Javascript',
                        ' CSS',
                        ' Typescript',
                        ' React',
                        ' NodeJS',
                        ' Deno',
                        ' C#',
                    ],
                    _id: '6030c5b8080d5e2f55fa618f',
                    user: {
                        _id: '60307bc36c7fc6173a145b53',
                        first_name: 'student4',
                        last_name: 'gjakgj',
                        email: 'student4@gmail.com',
                        password: '$2a$10$dqyNcAfGOu9cG14THRLLkOfw1FsNL2voYAN3W6Xks0tuxwmCWeihC',
                        role: 'student',
                        created_at: '2021-02-20T03:02:27.306Z',
                        updated_at: '2021-02-20T03:02:27.306Z',
                        __v: 0,
                    },
                    handle: 'Quoc Trunggg',
                    company: 'FPT6666',
                    website: 'trung.com',
                    status: 'Junior Developer',
                    experience: [],
                    education: [],
                    date: '2021-02-20T08:18:00.490Z',
                    __v: 9,
                    location: 'Viet Nam',
                    bio: 'Hello World',
                    githubusername: 'quoctrung163',
                },
                profiles: null,
                loading: false,
            },
        });
    });
});
