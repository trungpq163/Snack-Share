import * as React from 'react';
import { shallow } from 'enzyme';

import LessonContainer from './LessonContainer';

describe('LessonContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<LessonContainer {...defaultProps} />);
    });
});
