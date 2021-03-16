// import * as React from 'react';
import { /*shallow*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import Checkout from './Checkout';
configure({ adapter: new Adapter() });
describe('Checkout', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<Checkout {...defaultProps} />);
    });
});
