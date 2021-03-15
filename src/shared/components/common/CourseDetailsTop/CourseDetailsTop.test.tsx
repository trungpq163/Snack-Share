import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CourseDetailsTop from './CourseDetailsTop';
configure({ adapter: new Adapter() });
describe('CourseDetailsTop', () => {
    const defaultProps = {
        courseName: 'typescript for dummies',
        categoryName: '',
    };

    it('tests something', () => {
        shallow(<CourseDetailsTop {...defaultProps} />);
    });
});
