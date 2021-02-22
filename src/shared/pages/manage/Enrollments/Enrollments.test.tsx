import * as React from 'react';
import { shallow } from 'enzyme';

import Enrollments from './Enrollments';

describe('Enrollments', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<Enrollments {...defaultProps} />);
    });
});
