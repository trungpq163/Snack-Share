import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import StudyNowCourseDetails from './StudyNowCourseDetails';
configure({ adapter: new Adapter() });

describe('StudyNowCourseDetails', () => {
    const defaultProps = {
        idCourse: '',
    };

    it('tests something', () => {
        shallow(<StudyNowCourseDetails {...defaultProps} />);
    });
});
