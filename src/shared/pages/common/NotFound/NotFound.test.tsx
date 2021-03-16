import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NotFound from './NotFound';
configure({ adapter: new Adapter() });
describe('NotFound', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<NotFound {...defaultProps} />);
    });
});
