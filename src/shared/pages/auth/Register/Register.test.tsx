// import * as React from 'react';
import { /*shallow*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import Register from './Register';
configure({ adapter: new Adapter() });
describe('Register', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<Register {...defaultProps} />);
    });
});
