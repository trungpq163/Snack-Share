import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footer from './Footer';
configure({ adapter: new Adapter() });
describe('Footer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<Footer {...defaultProps} />);
    });
});
