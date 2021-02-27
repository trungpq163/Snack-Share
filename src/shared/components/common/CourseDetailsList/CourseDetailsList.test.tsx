import * as React from 'react';
import { shallow } from 'enzyme';

import CourseDetailsList from './CourseDetailsList';

describe('CourseDetailsList', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<CourseDetailsList {...defaultProps} />);
    });
});
