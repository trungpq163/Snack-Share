import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CourseDetailsList from './CourseDetailsList';

configure({ adapter: new Adapter() });

describe('CourseDetailsList', () => {
    const defaultProps = {
        courses: [],
    };

    it('tests something', () => {
        shallow(<CourseDetailsList {...defaultProps} />);
    });
});
