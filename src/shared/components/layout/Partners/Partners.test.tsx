// import * as React from 'react';
import { /*shallow,*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import Partners from './Partners';
configure({ adapter: new Adapter() });
describe('Partners', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<Partners {...defaultProps} />);
    });
});
