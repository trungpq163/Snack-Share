import * as React from 'react';
import { shallow } from 'enzyme';

import AllCoursesContainer from './AllCoursesContainer';

describe('AllCoursesContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<AllCoursesContainer {...defaultProps} />);
    });
});
