import reducer, { initialState } from './reducer';
import { ActionTypes } from './actions';

describe('App Reducer', () => {
    it('check english', () => {
        expect(reducer(initialState, { type: ActionTypes.SETLOCALE, payload: 'en_US' })).toEqual({
            locale: 'en_US',
        });
    });
});

describe('App Reducer', () => {
    it('check vietnam', () => {
        expect(reducer(initialState, { type: ActionTypes.SETLOCALE, payload: 'vi_VN' })).toEqual({
            locale: 'vi_VN',
        });
    });
});
