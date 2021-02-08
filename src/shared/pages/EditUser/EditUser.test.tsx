import * as React from 'react';
import { shallow } from 'enzyme';

import EditUser from './EditUser';

describe('EditUser', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<EditUser {...defaultProps} />);
    });
});
