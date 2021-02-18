import * as React from 'react';
import { shallow } from 'enzyme';

import DashboardContainer from './DashboardContainer';

describe('DashboardContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<DashboardContainer {...defaultProps} />);
    });
});
