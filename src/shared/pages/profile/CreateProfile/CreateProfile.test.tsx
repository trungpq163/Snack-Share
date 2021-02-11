import * as React from 'react';
import { shallow } from 'enzyme';

import CreateProfile from './CreateProfile';

describe('CreateProfile', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<CreateProfile {...defaultProps} />);
    });
});
