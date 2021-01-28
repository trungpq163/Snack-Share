import * as React from 'react';
import { shallow } from 'enzyme';

import Login from './Login';

describe('Login', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<Login {...defaultProps} />);
    });
});
