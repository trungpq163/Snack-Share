import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CurriculumCourseDetails from './CurriculumCourseDetails';
configure({ adapter: new Adapter() });
describe('CurriculumCourseDetails', () => {
    const defaultProps = {
        isCurriculumContentClass: '',
    };

    it('tests something', () => {
        shallow(<CurriculumCourseDetails {...defaultProps} />);
    });
});
