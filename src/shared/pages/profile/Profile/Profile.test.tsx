// import * as React from 'react';
import { /*shallow*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import Profile from './Profile';
configure({ adapter: new Adapter() });
describe('Profile', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<Profile {...defaultProps} />);
    });
});
