import * as React from 'react';
import { shallow } from 'enzyme';

import CourseOne from './CourseOne';

describe('CourseOne', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<CourseOne {...defaultProps} />);
    });
});
