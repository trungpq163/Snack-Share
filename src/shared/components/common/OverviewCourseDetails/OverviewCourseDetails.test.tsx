import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OverviewCourseDetails from './OverviewCourseDetails';
configure({ adapter: new Adapter() });
describe('OverviewCourseDetails', () => {
    const defaultProps = {
        isOverviewContentClass: '',
        courseDescription: '',
    };

    it('tests something', () => {
        shallow(<OverviewCourseDetails {...defaultProps} />);
    });
});
