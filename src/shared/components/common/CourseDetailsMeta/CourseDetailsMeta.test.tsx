import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CourseDetailsMeta from './CourseDetailsMeta';
configure({ adapter: new Adapter() });

describe('CourseDetailsMeta', () => {
    const defaultProps = {
        skillLevel: 'basic',
        language: 'en',
    };

    it('tests something', () => {
        shallow(<CourseDetailsMeta {...defaultProps} />);
    });
});
