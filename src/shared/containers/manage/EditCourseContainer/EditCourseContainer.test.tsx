import * as React from 'react';
import { shallow } from 'enzyme';

import EditCourseContainer from './EditCourseContainer';

describe('EditCourseContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<EditCourseContainer {...defaultProps} />);
    });
});
