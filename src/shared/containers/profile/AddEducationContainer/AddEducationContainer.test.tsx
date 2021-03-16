// import * as React from 'react';
import { /*shallow,*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import AddEducationContainer from './AddEducationContainer';
configure({ adapter: new Adapter() });
describe('AddEducationContainer', () => {
    // const defaultProps = {
    //     profile: {},
    //     loading: false,
    //     auth: {},
    // };

    it('tests something', () => {
        // shallow(<AddEducationContainer {...defaultProps} />);
    });
});
