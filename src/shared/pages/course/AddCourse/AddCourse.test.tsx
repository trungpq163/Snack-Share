// import * as React from 'react';
import { /*shallow*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import AddCourse from './AddCourse';
configure({ adapter: new Adapter() });
describe('AddCourse', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<AddCourse {...defaultProps} />);
    });
});
