// import * as React from 'react';
import { /*shallow,*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import Introduction from './Introduction';
configure({ adapter: new Adapter() });
describe('Introduction', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<Introduction {...defaultProps} />);
    });
});
