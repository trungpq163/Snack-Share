import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CourseDetailsRightBar from './CourseDetailsRightBar';
configure({ adapter: new Adapter() });
describe('CourseDetailsRightBar', () => {
    const defaultProps = {
        isAuthor: false,
        idCourse: '44f5a4ga4545da',
        enrolled: false,
        price: 6666,
        language: 'en',
        skillLevel: 'basic',
        courses: [],
        redirectToSessionCheckout: '',
    };

    it('tests something', () => {
        shallow(<CourseDetailsRightBar {...defaultProps} />);
    });
});
