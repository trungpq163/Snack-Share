import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ContentCourseDetailsLeftBar from './ContentCourseDetailsLeftBar';

configure({ adapter: new Adapter() });

describe('ContentCourseDetailsLeftBar', () => {
    const defaultProps = {
        isOverviewContentClass: '',
        isCurriculumContentClass: '',
        courseDescription: '666',
        isReviewContentClass: 'good',
        team2: '',
        avt: '',
    };

    it('tests something', () => {
        shallow(<ContentCourseDetailsLeftBar {...defaultProps} />);
    });
});
