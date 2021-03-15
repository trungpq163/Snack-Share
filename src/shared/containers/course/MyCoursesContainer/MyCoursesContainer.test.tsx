import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MyCoursesContainer from './MyCoursesContainer';
configure({ adapter: new Adapter() });
describe('MyCoursesContainer', () => {
    const defaultProps = {
        idInstructor: '',
        courses: [],
        enrollments: [],
    };

    it('tests something', () => {
        shallow(<MyCoursesContainer {...defaultProps} />);
    });
});
