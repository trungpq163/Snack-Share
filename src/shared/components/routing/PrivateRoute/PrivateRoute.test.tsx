// import * as React from 'react';
import { /*shallow,*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import PrivateRoute from './PrivateRoute';
configure({ adapter: new Adapter() });
describe('PrivateRoute', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<PrivateRoute {...defaultProps} />);
    });
});
