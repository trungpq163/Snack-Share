// import * as React from 'react';
import { /*shallow*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import EditProfileContainer from './EditProfileContainer';
configure({ adapter: new Adapter() });
describe('EditProfileContainer', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<EditProfileContainer {...defaultProps} />);
    });
});
