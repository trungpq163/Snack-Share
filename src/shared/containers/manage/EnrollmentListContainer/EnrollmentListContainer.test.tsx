import * as React from 'react';
import { shallow } from 'enzyme';

import EnrollmentListContainer from './EnrollmentListContainer';

describe('EnrollmentListContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<EnrollmentListContainer {...defaultProps} />);
    });
});
