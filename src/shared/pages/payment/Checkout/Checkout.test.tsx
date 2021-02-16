import * as React from 'react';
import { shallow } from 'enzyme';

import Checkout from './Checkout';

describe('Checkout', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<Checkout {...defaultProps} />);
    });
});
