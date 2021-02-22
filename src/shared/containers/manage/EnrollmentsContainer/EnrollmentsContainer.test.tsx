import * as React from 'react';
import { shallow } from 'enzyme';

import EnrollmentsContainer from './EnrollmentsContainer';

describe('EnrollmentsContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<EnrollmentsContainer {...defaultProps} />);
    });
});
