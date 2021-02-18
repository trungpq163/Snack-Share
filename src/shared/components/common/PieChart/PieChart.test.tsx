import * as React from 'react';
import { shallow } from 'enzyme';

import PieChart from './PieChart';

describe('PieChart', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<PieChart {...defaultProps} />);
    });
});
