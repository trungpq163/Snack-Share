import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CourseDetailContainer from './CourseDetailsContainer';
configure({ adapter: new Adapter() });

describe('CourseDetailContainer', () => {
    const defaultProps = {
        idCourse: '',
        courseDetails: {},
        isAuthor: false,
        enrolled: true,
        courses: [],
        isAuth: false,
    };

    it('tests something', () => {
        shallow(<CourseDetailContainer {...defaultProps} />);
    });
});
