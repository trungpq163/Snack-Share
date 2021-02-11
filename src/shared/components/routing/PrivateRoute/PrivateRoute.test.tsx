import * as React from 'react';
import { shallow } from 'enzyme';

import PrivateRoute from './PrivateRoute';

describe('PrivateRoute', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<PrivateRoute {...defaultProps} />);
    });
});
