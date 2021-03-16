// import * as React from 'react';
import { /*shallow*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import EditUser from './EditUser';
configure({ adapter: new Adapter() });
describe('EditUser', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<EditUser {...defaultProps} />);
    });
});
