import * as React from 'react';
import { shallow } from 'enzyme';

import CheckoutContainer from './CheckoutContainer';

describe('CheckoutContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<CheckoutContainer {...defaultProps} />);
    });
});
