import * as React from 'react';
import { shallow } from 'enzyme';

import InstructorPrivateRoute from './InstructorPrivateRoute';

describe('InstructorPrivateRoute', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<InstructorPrivateRoute {...defaultProps} />);
    });
});
