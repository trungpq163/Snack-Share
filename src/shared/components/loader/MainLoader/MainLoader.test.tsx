import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MainLoader from './MainLoader';
configure({ adapter: new Adapter() });
describe('MainLoader', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<MainLoader {...defaultProps} />);
    });
});
