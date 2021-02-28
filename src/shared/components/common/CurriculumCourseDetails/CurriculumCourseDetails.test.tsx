import * as React from 'react';
import { shallow } from 'enzyme';

import CurriculumCourseDetails from './CurriculumCourseDetails';

describe('CurriculumCourseDetails', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<CurriculumCourseDetails {...defaultProps} />);
    });
});
