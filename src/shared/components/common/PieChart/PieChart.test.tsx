import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PieChart from './PieChart';
configure({ adapter: new Adapter() });
describe('PieChart', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<PieChart {...defaultProps} />);
    });
});
