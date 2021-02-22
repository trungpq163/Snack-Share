import * as React from 'react';
import { shallow } from 'enzyme';

import CreateEnrollment from './CreateEnrollment';

describe('CreateEnrollment', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<CreateEnrollment {...defaultProps} />);
    });
});
