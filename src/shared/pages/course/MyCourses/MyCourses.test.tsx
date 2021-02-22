import * as React from 'react';
import { shallow } from 'enzyme';

import MyCourses from './MyCourses';

describe('MyCourses', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<MyCourses {...defaultProps} />);
    });
});
