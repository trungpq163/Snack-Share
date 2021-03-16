import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PageHeader from './PageHeader';
configure({ adapter: new Adapter() });
describe('PageHeader', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<PageHeader {...defaultProps} />);
    });
});
