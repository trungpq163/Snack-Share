import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Course from './Course';

configure({ adapter: new Adapter() });

describe('Course', () => {
    const defaultProps = {
        col: 6,
        course: {},
        isMyLearningRoute: true,
        enrollments: [{ course: { _id: '66666', created_at: '15/12/1999', image: '666' } }],
        index: 0,
    };

    it('tests something', () => {
        shallow(<Course {...defaultProps} />);
    });
});
