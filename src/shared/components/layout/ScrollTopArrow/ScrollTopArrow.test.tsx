import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ScrollTopArrow from './ScrollTopArrow';
configure({ adapter: new Adapter() });
describe('ScrollTopArrow', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<ScrollTopArrow {...defaultProps} />);
    });
});
