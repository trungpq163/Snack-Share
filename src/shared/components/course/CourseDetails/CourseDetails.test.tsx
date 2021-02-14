import * as React from 'react';
import { shallow } from 'enzyme';

import CourseDetails from './CourseDetails';

describe('CourseDetails', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<CourseDetails {...defaultProps} />);
    });
});
