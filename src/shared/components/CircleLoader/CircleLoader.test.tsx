import * as React from 'react';
import { shallow } from 'enzyme';

import CircleLoader from './CircleLoader';

describe('CircleLoader', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<CircleLoader {...defaultProps} />);
    });
});
