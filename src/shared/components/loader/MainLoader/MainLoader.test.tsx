import * as React from 'react';
import { shallow } from 'enzyme';

import MainLoader from './MainLoader';

describe('MainLoader', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<MainLoader {...defaultProps} />);
    });
});
