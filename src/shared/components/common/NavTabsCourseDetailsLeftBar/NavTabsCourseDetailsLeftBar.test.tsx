import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavTabsCourseDetailsLeftBar from './NavTabsCourseDetailsLeftBar';
configure({ adapter: new Adapter() });
describe('NavTabsCourseDetailsLeftBar', () => {
    const defaultProps = {
        isOverviewNavTabsClass: '',
        isCurriculumNavTabsClass: '',
        isReviewNavTabsClass: '',
    };

    it('tests something', () => {
        shallow(<NavTabsCourseDetailsLeftBar {...defaultProps} />);
    });
});
