import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProfileDetails from './ProfileDetails';
configure({ adapter: new Adapter() });
describe('ProfileDetails', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<ProfileDetails {...defaultProps} />);
    });
});
