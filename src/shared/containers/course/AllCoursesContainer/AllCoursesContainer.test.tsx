import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AllCoursesContainer from './AllCoursesContainer';
configure({ adapter: new Adapter() });
describe('AllCoursesContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<AllCoursesContainer {...defaultProps} />);
    });
});
