import * as React from 'react';
import { shallow } from 'enzyme';

import ShowAllUsers from './ShowAllUsers';

describe('ShowAllUsers', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<ShowAllUsers {...defaultProps} />);
    });
});
