import * as React from 'react';
import { shallow } from 'enzyme';

import CreateProfileContainer from './CreateProfileContainer';

describe('CreateProfileContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<CreateProfileContainer {...defaultProps} />);
    });
});
