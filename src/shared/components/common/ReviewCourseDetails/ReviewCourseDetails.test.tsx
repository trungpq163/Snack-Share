import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReviewCourseDetails from './ReviewCourseDetails';
configure({ adapter: new Adapter() });
describe('ReviewCourseDetails', () => {
    const defaultProps = {
        team2: '',
        avt: '',
        isReviewContentClass: '',
    };

    it('tests something', () => {
        shallow(<ReviewCourseDetails {...defaultProps} />);
    });
});
