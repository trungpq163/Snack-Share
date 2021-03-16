// import * as React from 'react';
import { /*shallow,*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import EnrollmentsContainer from './EnrollmentsContainer';
configure({ adapter: new Adapter() });
describe('EnrollmentsContainer', () => {
    // const defaultProps = {
    //     enrollments: [],
    // };

    it('tests something', () => {
        // shallow(<EnrollmentsContainer {...defaultProps} />);
    });
});
