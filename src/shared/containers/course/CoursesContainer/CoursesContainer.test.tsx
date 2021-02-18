import * as React from 'react';
import { shallow } from 'enzyme';

import CoursesContainer from './CoursesContainer';

describe('CoursesContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<CoursesContainer {...defaultProps} />);
    });
});
