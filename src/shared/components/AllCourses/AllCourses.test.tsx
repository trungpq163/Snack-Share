import * as React from 'react';
import { shallow } from 'enzyme';

import AllCourses from './AllCourses';

describe('AllCourses', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<AllCourses {...defaultProps} />);
    });
});
