// import * as React from 'react';
import { /*shallow,*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import HeaderContainer from './HeaderContainer';
configure({ adapter: new Adapter() });
describe('HeaderContainer', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<HeaderContainer {...defaultProps} />);
    });
});
