import * as React from 'react';
import { shallow } from 'enzyme';

import Profile from './Profile';

describe('Profile', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<Profile {...defaultProps} />);
    });
});
