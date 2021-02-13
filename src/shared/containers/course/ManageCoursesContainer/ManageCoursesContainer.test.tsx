import * as React from 'react';
import { shallow } from 'enzyme';

import ManageCoursesContainer from './ManageCoursesContainer';

describe('ManageCoursesContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<ManageCoursesContainer {...defaultProps} />);
    });
});
