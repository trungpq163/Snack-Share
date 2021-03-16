// import * as React from 'react';
import { /*shallow*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import Enrollments from './Enrollments';
configure({ adapter: new Adapter() });
describe('Enrollments', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<Enrollments {...defaultProps} />);
    });
});
