import * as React from 'react';
import { shallow } from 'enzyme';

import AdminPrivateRoute from './AdminPrivateRoute';

describe('AdminPrivateRoute', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<AdminPrivateRoute {...defaultProps} />);
    });
});
