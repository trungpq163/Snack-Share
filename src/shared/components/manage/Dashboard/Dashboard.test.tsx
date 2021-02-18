import * as React from 'react';
import { shallow } from 'enzyme';

import Dashboard from './Dashboard';

describe('Dashboard', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<Dashboard {...defaultProps} />);
    });
});
