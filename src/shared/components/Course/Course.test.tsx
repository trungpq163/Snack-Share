import * as React from 'react';
import { shallow } from 'enzyme';

import Course from './Course';

describe('Course', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<Course {...defaultProps} />);
    });
});
