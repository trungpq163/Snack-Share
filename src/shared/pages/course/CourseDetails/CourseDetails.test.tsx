import * as React from 'react';
import { shallow } from 'enzyme';

import CourseDetail from './CourseDetails';

describe('CourseDetail', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<CourseDetail {...defaultProps} />);
    });
});
