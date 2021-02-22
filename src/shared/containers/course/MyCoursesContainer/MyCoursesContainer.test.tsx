import * as React from 'react';
import { shallow } from 'enzyme';

import MyCoursesContainer from './MyCoursesContainer';

describe('MyCoursesContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<MyCoursesContainer {...defaultProps} />);
    });
});
