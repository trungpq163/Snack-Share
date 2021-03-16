import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CourseDetails from './CourseDetails';
configure({ adapter: new Adapter() });
describe('CourseDetails', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<CourseDetails {...defaultProps} />);
    });
});
