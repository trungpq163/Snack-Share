import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Dashboard from './Dashboard';
configure({ adapter: new Adapter() });
describe('Dashboard', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<Dashboard {...defaultProps} />);
    });
});
