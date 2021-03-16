// import * as React from 'react';
import { /*shallow*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import AddEducation from './AddEducation';
configure({ adapter: new Adapter() });
describe('AddEducation', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<AddEducation {...defaultProps} />);
    });
});
