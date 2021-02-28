import * as React from 'react';
import { shallow } from 'enzyme';

import CourseDetailsLeftBar from './CourseDetailsLeftBar';

describe('CourseDetailsLeftBar', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<CourseDetailsLeftBar {...defaultProps} />);
    });
});
