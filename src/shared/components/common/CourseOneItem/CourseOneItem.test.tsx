import * as React from 'react';
import { shallow } from 'enzyme';

import CourseOneItem from './CourseOneItem';

describe('CourseOneItem', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<CourseOneItem {...defaultProps} />);
    });
});
