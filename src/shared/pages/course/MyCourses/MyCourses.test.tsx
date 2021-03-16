// import * as React from 'react';
import { /*shallow*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import MyCourses from './MyCourses';
configure({ adapter: new Adapter() });
describe('MyCourses', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<MyCourses {...defaultProps} />);
    });
});
