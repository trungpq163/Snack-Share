import * as React from 'react';
import { shallow } from 'enzyme';

import AddCourse from './AddCourse';

describe('AddCourse', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<AddCourse {...defaultProps} />);
    });
});
