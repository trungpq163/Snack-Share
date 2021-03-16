// import * as React from 'react';
import { /*shallow*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import Categories from './Categories';
configure({ adapter: new Adapter() });
describe('Categories', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<Categories {...defaultProps} />);
    });
});
