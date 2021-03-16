import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CircleLoader from './CircleLoader';
configure({ adapter: new Adapter() });
describe('CircleLoader', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<CircleLoader {...defaultProps} />);
    });
});
