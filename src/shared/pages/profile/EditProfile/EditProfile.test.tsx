// import * as React from 'react';
import { /*shallow*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import EditProfile from './EditProfile';

configure({ adapter: new Adapter() });
describe('EditProfile', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<EditProfile {...defaultProps} />);
    });
});
