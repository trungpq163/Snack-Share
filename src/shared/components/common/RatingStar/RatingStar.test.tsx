import * as React from 'react';
import { shallow } from 'enzyme';

import RatingStar from './RatingStar';

describe('RatingStar', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<RatingStar {...defaultProps} />);
    });
});
