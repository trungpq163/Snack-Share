import * as React from 'react';
import { shallow } from 'enzyme';

import Courses from './Courses';

describe('Courses', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<Courses {...defaultProps} />);
    });
});
