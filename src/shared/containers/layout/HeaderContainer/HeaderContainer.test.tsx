import * as React from 'react';
import { shallow } from 'enzyme';

import HeaderContainer from './HeaderContainer';

describe('HeaderContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<HeaderContainer {...defaultProps} />);
    });
});
