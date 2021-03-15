import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import IsAuthorCourseDetails from './IsAuthorCourseDetails';
configure({ adapter: new Adapter() });
describe('IsAuthorCourseDetails', () => {
    const defaultProps = {
        idCourse: '',
    };

    it('tests something', () => {
        shallow(<IsAuthorCourseDetails {...defaultProps} />);
    });
});
