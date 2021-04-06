import * as React from 'react';
import { shallow } from 'enzyme';

import CourseDetailsCommentForm from './CourseDetailsCommentForm';

describe('CourseDetailsCommentForm', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<CourseDetailsCommentForm {...defaultProps} />);
    });
});
