// import * as React from 'react';
import { /*shallow,*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import CreateCategoryContainer from './CreateCategoryContainer';
configure({ adapter: new Adapter() });
describe('CreateCategoryContainer', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<CreateCategoryContainer {...defaultProps} />);
    });
});
