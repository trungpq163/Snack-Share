// import * as React from 'react';
import { /*shallow*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import AddExperience from './AddExperience';
configure({ adapter: new Adapter() });
describe('AddExperience', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<AddExperience {...defaultProps} />);
    });
});
