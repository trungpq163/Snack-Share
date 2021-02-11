import * as React from 'react';
import { shallow } from 'enzyme';

import ProfileDetails from './ProfileDetails';

describe('ProfileDetails', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<ProfileDetails {...defaultProps} />);
    });
});
