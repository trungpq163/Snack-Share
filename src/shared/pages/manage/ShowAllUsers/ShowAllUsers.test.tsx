// import * as React from 'react';
import { /*shallow*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import ShowAllUsers from './ShowAllUsers';
configure({ adapter: new Adapter() });
describe('ShowAllUsers', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<ShowAllUsers {...defaultProps} />);
    });
});
