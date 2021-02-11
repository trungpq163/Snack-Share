import * as React from 'react';
import { shallow } from 'enzyme';

import AddCourseContainer from './AddCourseContainer';

describe('AddCourseContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<AddCourseContainer {...defaultProps} />);
    });
});
