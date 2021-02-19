import * as React from 'react';
import { shallow } from 'enzyme';

import EnrollmentList from './EnrollmentList';

describe('EnrollmentList', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<EnrollmentList {...defaultProps} />);
    });
});
