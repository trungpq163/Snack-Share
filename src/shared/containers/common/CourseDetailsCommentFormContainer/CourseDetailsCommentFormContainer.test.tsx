import * as React from 'react';
import { shallow } from 'enzyme';

import CourseDetailsCommentFormContainer from './CourseDetailsCommentFormContainer';

describe('CourseDetailsCommentFormContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<CourseDetailsCommentFormContainer {...defaultProps} />);
    });
});
