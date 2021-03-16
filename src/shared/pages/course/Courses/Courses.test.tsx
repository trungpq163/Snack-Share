// import * as React from 'react';
import { /*shallow*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import Courses from './Courses';
configure({ adapter: new Adapter() });
describe('Courses', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<Courses {...defaultProps} />);
    });
});
