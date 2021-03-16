// import * as React from 'react';
import { /*shallow,*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import CreateProfileContainer from './CreateProfileContainer';
configure({ adapter: new Adapter() });
describe('CreateProfileContainer', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<CreateProfileContainer {...defaultProps} />);
    });
});
