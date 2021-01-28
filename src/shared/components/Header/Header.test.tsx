import * as React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<Header {...defaultProps} />);
    });
});
