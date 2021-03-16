// import * as React from 'react';
import { /*shallow*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import EditCategory from './EditCategory';
configure({ adapter: new Adapter() });
describe('EditCategory', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<EditCategory {...defaultProps} />);
    });
});
