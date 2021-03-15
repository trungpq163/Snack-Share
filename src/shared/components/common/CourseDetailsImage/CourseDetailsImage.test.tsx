import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CourseDetailsImage from './CourseDetailsImage';

configure({ adapter: new Adapter() });

describe('CourseDetailsImage', () => {
    const defaultProps = {
        image: '',
    };

    it('tests something', () => {
        shallow(<CourseDetailsImage {...defaultProps} />);
    });
});
