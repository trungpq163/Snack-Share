// import * as React from 'react';
import { /*shallow,*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import CreateEnrollmentContainer from './CreateEnrollmentContainer';

configure({ adapter: new Adapter() });
describe('CreateEnrollmentContainer', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<CreateEnrollmentContainer {...defaultProps} />);
    });
});
