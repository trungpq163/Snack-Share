// import * as React from 'react';
import { /*shallow*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import CreateProfile from './CreateProfile';

configure({ adapter: new Adapter() });
describe('CreateProfile', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<CreateProfile {...defaultProps} />);
    });
});
