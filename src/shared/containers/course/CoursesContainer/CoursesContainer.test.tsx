import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CoursesContainer from './CoursesContainer';
configure({ adapter: new Adapter() });
describe('CoursesContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<CoursesContainer {...defaultProps} />);
    });
});
