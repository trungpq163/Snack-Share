import * as React from 'react';
import { shallow } from 'enzyme';

import Lesson from './Lesson';

describe('Lesson', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<Lesson {...defaultProps} />);
    });
});
