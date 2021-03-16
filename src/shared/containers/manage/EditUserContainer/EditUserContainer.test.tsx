// import * as React from 'react';
import { /*shallow,*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import EditUserContainer from './EditUserContainer';
configure({ adapter: new Adapter() });
describe('EditUserContainer', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<EditUserContainer {...defaultProps} />);
    });
});
