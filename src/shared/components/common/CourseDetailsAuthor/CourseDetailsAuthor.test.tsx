import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CourseDetailsAuthor from './CourseDetailsAuthor';

configure({ adapter: new Adapter() });

describe('CourseDetailsAuthor', () => {
    const defaultProps = {
        firstName: 'trung',
        lastName: 'phan',
        avt: '',
        idInstructor: '',
    };

    it('tests something', () => {
        shallow(<CourseDetailsAuthor {...defaultProps} />);
    });
});
