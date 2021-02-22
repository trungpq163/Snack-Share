import * as React from 'react';
import { shallow } from 'enzyme';

import CreateEnrollmentContainer from './CreateEnrollmentContainer';

describe('CreateEnrollmentContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<CreateEnrollmentContainer {...defaultProps} />);
    });
});
