import * as React from 'react';
import { shallow } from 'enzyme';

import ManageCourses from './ManageCourses';

describe('ManageCourses', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<ManageCourses {...defaultProps} />);
    });
});
