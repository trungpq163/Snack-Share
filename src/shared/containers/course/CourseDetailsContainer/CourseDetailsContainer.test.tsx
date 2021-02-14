import * as React from 'react';
import { shallow } from 'enzyme';

import CourseDetailContainer from './CourseDetailsContainer';

describe('CourseDetailContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<CourseDetailContainer {...defaultProps} />);
    });
});
