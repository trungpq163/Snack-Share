// import * as React from 'react';
import { /*shallow,*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import InstructorPrivateRoute from './InstructorPrivateRoute';
configure({ adapter: new Adapter() });
describe('InstructorPrivateRoute', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<InstructorPrivateRoute {...defaultProps} />);
    });
});
