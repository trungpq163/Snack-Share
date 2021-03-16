import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DashboardContainer from './DashboardContainer';
configure({ adapter: new Adapter() });
describe('DashboardContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<DashboardContainer {...defaultProps} />);
    });
});
