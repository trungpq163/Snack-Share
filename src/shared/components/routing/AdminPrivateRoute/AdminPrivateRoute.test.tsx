// import * as React from 'react';
import { /*shallow,*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import AdminPrivateRoute from './AdminPrivateRoute';
configure({ adapter: new Adapter() });
describe('AdminPrivateRoute', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<AdminPrivateRoute {...defaultProps} />);
    });
});
