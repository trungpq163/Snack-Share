import * as React from 'react';
import { shallow } from 'enzyme';

import NotFound from './NotFound';

describe('NotFound', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<NotFound {...defaultProps} />);
    });
});
