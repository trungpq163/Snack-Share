// import * as React from 'react';
import { /*shallow*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import CourseDetail from './CourseDetails';
configure({ adapter: new Adapter() });
describe('CourseDetail', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<CourseDetail {...defaultProps} />);
    });
});
