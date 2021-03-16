// import * as React from 'react';
import { /*shallow*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import Login from './Login';
configure({ adapter: new Adapter() });
describe('Login', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<Login {...defaultProps} />);
    });
});
