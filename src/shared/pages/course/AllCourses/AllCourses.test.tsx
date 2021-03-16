// import * as React from 'react';
import { /*shallow*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import AllCourses from './AllCourses';
configure({ adapter: new Adapter() });
describe('AllCourses', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<AllCourses {...defaultProps} />);
    });
});
