// import * as React from 'react';
import { /* shallow*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import AddLecture from './AddLecture';
configure({ adapter: new Adapter() });
describe('AddLecture', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<AddLecture {...defaultProps} />);
    });
});
